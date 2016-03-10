/* */ 
"use strict";
var fs = require('fs');
var assert = require('chai').assert;
var PrismLoader = require('./prism-loader');
var TokenStreamTransformer = require('./token-stream-transformer');
module.exports = {
  runTestCase: function(languageIdentifier, filePath) {
    var testCase = this.parseTestCaseFile(filePath);
    var usedLanguages = this.parseLanguageNames(languageIdentifier);
    if (null === testCase) {
      throw new Error("Test case file has invalid format (or the provided token stream is invalid JSON), please read the docs.");
    }
    var Prism = PrismLoader.createInstance(usedLanguages.languages);
    var mainLanguageGrammar = Prism.languages[usedLanguages.mainLanguage];
    var compiledTokenStream = Prism.tokenize(testCase.testSource, mainLanguageGrammar);
    var simplifiedTokenStream = TokenStreamTransformer.simplify(compiledTokenStream);
    assert.deepEqual(simplifiedTokenStream, testCase.expectedTokenStream, testCase.comment);
  },
  parseLanguageNames: function(languageIdentifier) {
    var languages = languageIdentifier.split("+");
    var mainLanguage = null;
    languages = languages.map(function(language) {
      var pos = language.indexOf("!");
      if (-1 < pos) {
        if (mainLanguage) {
          throw "There are multiple main languages defined.";
        }
        mainLanguage = language.replace("!", "");
        return mainLanguage;
      }
      return language;
    });
    if (!mainLanguage) {
      mainLanguage = languages[languages.length - 1];
    }
    return {
      languages: languages,
      mainLanguage: mainLanguage
    };
  },
  parseTestCaseFile: function(filePath) {
    var testCaseSource = fs.readFileSync(filePath, "utf8");
    var testCaseParts = testCaseSource.split(/^-{10,}\w*$/m);
    try {
      var testCase = {
        testSource: testCaseParts[0].trim(),
        expectedTokenStream: JSON.parse(testCaseParts[1]),
        comment: null
      };
      if (testCaseParts[2]) {
        testCase.comment = testCaseParts[2].trim();
      }
      return testCase;
    } catch (e) {
      return null;
    }
  }
};
