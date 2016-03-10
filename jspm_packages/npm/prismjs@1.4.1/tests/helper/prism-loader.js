/* */ 
"use strict";
var fs = require('fs');
var vm = require('vm');
var components = require('./components');
var languagesCatalog = components.languages;
module.exports = {
  createInstance: function(languages) {
    var context = {
      loadedLanguages: [],
      Prism: this.createEmptyPrism()
    };
    context = this.loadLanguages(languages, context);
    return context.Prism;
  },
  loadLanguages: function(languages, context) {
    if (typeof languages === 'string') {
      languages = [languages];
    }
    var self = this;
    languages.forEach(function(language) {
      context = self.loadLanguage(language, context);
    });
    return context;
  },
  loadLanguage: function(language, context) {
    if (!languagesCatalog[language]) {
      throw new Error("Language '" + language + "' not found.");
    }
    if (-1 < context.loadedLanguages.indexOf(language)) {
      return context;
    }
    if (languagesCatalog[language].require) {
      context = this.loadLanguages(languagesCatalog[language].require, context);
    }
    var languageSource = this.loadFileSource(language);
    context.Prism = this.runFileWithContext(languageSource, {Prism: context.Prism}).Prism;
    context.loadedLanguages.push(language);
    return context;
  },
  createEmptyPrism: function() {
    var coreSource = this.loadFileSource("core");
    var context = this.runFileWithContext(coreSource);
    return context.Prism;
  },
  fileSourceCache: {},
  loadFileSource: function(name) {
    return this.fileSourceCache[name] = this.fileSourceCache[name] || fs.readFileSync(__dirname + "/../../components/prism-" + name + ".js", "utf8");
  },
  runFileWithContext: function(fileSource, context) {
    context = context || {};
    vm.runInNewContext(fileSource, context);
    return context;
  }
};
