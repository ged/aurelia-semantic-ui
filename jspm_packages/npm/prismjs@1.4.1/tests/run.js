/* */ 
(function(process) {
  "use strict";
  var TestDiscovery = require('./helper/test-discovery');
  var path = require('path');
  var argv = require('yargs').argv;
  var child_process = require('child_process');
  var testSuite;
  if (argv.language) {
    testSuite = TestDiscovery.loadSomeTests(__dirname + "/languages", argv.language);
  } else {
    testSuite = TestDiscovery.loadAllTests(__dirname + "/languages");
  }
  for (var language in testSuite) {
    if (!testSuite.hasOwnProperty(language)) {
      continue;
    }
    (function(language, testFiles) {
      describe("Testing language '" + language + "'", function() {
        this.timeout(10000);
        var child;
        before(function() {
          child = child_process.fork(__dirname + "/run-child.js", ['--language=' + language], {stdio: 'inherit'});
        });
        after(function() {
          child.kill();
        });
        testFiles.forEach(function(filePath) {
          var fileName = path.basename(filePath, path.extname(filePath));
          it("– should pass test case '" + fileName + "'", function(done) {
            child.removeAllListeners('message');
            child.on('message', function(o) {
              setTimeout(function() {
                if (o.error) {
                  throw o.error;
                } else if (o.success) {
                  done();
                }
              }, 1);
            });
            child.send({filePath: filePath});
          });
        });
      });
    })(language, testSuite[language]);
  }
})(require('process'));
