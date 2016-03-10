/* */ 
(function(process) {
  (function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document || !document.createElement) {
      return;
    }
    var lang_dependencies = {
      "javascript": "clike",
      "actionscript": "javascript",
      "aspnet": "markup",
      "bison": "c",
      "c": "clike",
      "csharp": "clike",
      "cpp": "c",
      "coffeescript": "javascript",
      "crystal": "ruby",
      "css-extras": "css",
      "d": "clike",
      "dart": "clike",
      "fsharp": "clike",
      "glsl": "clike",
      "go": "clike",
      "groovy": "clike",
      "haml": "ruby",
      "handlebars": "markup",
      "haxe": "clike",
      "jade": "javascript",
      "java": "clike",
      "kotlin": "clike",
      "less": "css",
      "markdown": "markup",
      "nginx": "clike",
      "objectivec": "c",
      "parser": "markup",
      "php": "clike",
      "php-extras": "php",
      "processing": "clike",
      "qore": "clike",
      "jsx": ["markup", "javascript"],
      "ruby": "clike",
      "sass": "css",
      "scss": "css",
      "scala": "java",
      "smarty": "markup",
      "swift": "clike",
      "textile": "markup",
      "twig": "markup",
      "typescript": "javascript",
      "wiki": "markup"
    };
    var lang_data = {};
    var config = Prism.plugins.autoloader = {
      languages_path: 'components/',
      use_minified: true
    };
    var script = function(src, success, error) {
      var s = document.createElement('script');
      s.src = src;
      s.async = true;
      s.onload = function() {
        document.body.removeChild(s);
        success && success();
      };
      s.onerror = function() {
        document.body.removeChild(s);
        error && error();
      };
      document.body.appendChild(s);
    };
    var getLanguagePath = function(lang) {
      return config.languages_path + 'prism-' + lang + (config.use_minified ? '.min' : '') + '.js';
    };
    var registerElement = function(lang, elt) {
      var data = lang_data[lang];
      if (!data) {
        data = lang_data[lang] = {};
      }
      var deps = elt.getAttribute('data-dependencies');
      if (!deps && elt.parentNode && elt.parentNode.tagName.toLowerCase() === 'pre') {
        deps = elt.parentNode.getAttribute('data-dependencies');
      }
      if (deps) {
        deps = deps.split(/\s*,\s*/g);
      } else {
        deps = [];
      }
      loadLanguages(deps, function() {
        loadLanguage(lang, function() {
          Prism.highlightElement(elt);
        });
      });
    };
    var loadLanguages = function(langs, success, error) {
      if (typeof langs === 'string') {
        langs = [langs];
      }
      var i = 0;
      var l = langs.length;
      var f = function() {
        if (i < l) {
          loadLanguage(langs[i], function() {
            i++;
            f();
          }, function() {
            error && error(langs[i]);
          });
        } else if (i === l) {
          success && success(langs);
        }
      };
      f();
    };
    var loadLanguage = function(lang, success, error) {
      var load = function() {
        var force = false;
        if (lang.indexOf('!') >= 0) {
          force = true;
          lang = lang.replace('!', '');
        }
        var data = lang_data[lang];
        if (!data) {
          data = lang_data[lang] = {};
        }
        if (success) {
          if (!data.success_callbacks) {
            data.success_callbacks = [];
          }
          data.success_callbacks.push(success);
        }
        if (error) {
          if (!data.error_callbacks) {
            data.error_callbacks = [];
          }
          data.error_callbacks.push(error);
        }
        if (!force && Prism.languages[lang]) {
          languageSuccess(lang);
        } else if (!force && data.error) {
          languageError(lang);
        } else if (force || !data.loading) {
          data.loading = true;
          var src = getLanguagePath(lang);
          script(src, function() {
            data.loading = false;
            languageSuccess(lang);
          }, function() {
            data.loading = false;
            data.error = true;
            languageError(lang);
          });
        }
      };
      var dependencies = lang_dependencies[lang];
      if (dependencies && dependencies.length) {
        loadLanguages(dependencies, load);
      } else {
        load();
      }
    };
    var languageSuccess = function(lang) {
      if (lang_data[lang] && lang_data[lang].success_callbacks && lang_data[lang].success_callbacks.length) {
        lang_data[lang].success_callbacks.forEach(function(f) {
          f(lang);
        });
      }
    };
    var languageError = function(lang) {
      if (lang_data[lang] && lang_data[lang].error_callbacks && lang_data[lang].error_callbacks.length) {
        lang_data[lang].error_callbacks.forEach(function(f) {
          f(lang);
        });
      }
    };
    Prism.hooks.add('complete', function(env) {
      if (env.element && env.language && !env.grammar) {
        registerElement(env.language, env.element);
      }
    });
  }());
})(require('process'));
