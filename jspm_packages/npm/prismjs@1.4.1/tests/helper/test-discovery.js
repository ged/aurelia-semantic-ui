/* */ 
"use strict";
var fs = require('fs');
var path = require('path');
module.exports = {
  loadAllTests: function(rootDir) {
    var testSuite = {};
    var self = this;
    this.getAllDirectories(rootDir).forEach(function(language) {
      testSuite[language] = self.getAllFiles(path.join(rootDir, language));
    });
    return testSuite;
  },
  loadSomeTests: function(rootDir, languages) {
    var testSuite = {};
    var self = this;
    this.getSomeDirectories(rootDir, languages).forEach(function(language) {
      testSuite[language] = self.getAllFiles(path.join(rootDir, language));
    });
    return testSuite;
  },
  getAllDirectories: function(src) {
    return fs.readdirSync(src).filter(function(file) {
      return fs.statSync(path.join(src, file)).isDirectory();
    });
  },
  getSomeDirectories: function(src, languages) {
    var self = this;
    return fs.readdirSync(src).filter(function(file) {
      return fs.statSync(path.join(src, file)).isDirectory() && self.directoryMatches(file, languages);
    });
  },
  directoryMatches: function(directory, languages) {
    if (!Array.isArray(languages)) {
      languages = [languages];
    }
    var dirLanguages = directory.split(/!?\+!?/);
    return dirLanguages.some(function(lang) {
      return languages.indexOf(lang) >= 0;
    });
  },
  getAllFiles: function(src) {
    return fs.readdirSync(src).filter(function(fileName) {
      return ".test" === path.extname(fileName) && fs.statSync(path.join(src, fileName)).isFile();
    }).map(function(fileName) {
      return path.join(src, fileName);
    });
  }
};
