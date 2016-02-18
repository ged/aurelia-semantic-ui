# aurelia-semantic-ui

This plugin is for the [Aurelia](http://www.aurelia.io/) platform. It contains custom elements for some of the [Semantic UI](http://semantic-ui.com/) widgets.

It isn't really even alpha quality right now, as I'm still figuring out how half of this stuff works, so don't depend on anything quite yet.

The major "to do" list:

* Figure out how to be able to nest custom elements, as content selectors don't work inside them currently. See this Plnkr for a minimal demonstration: http://plnkr.co/edit/cvSYkXPXIc62YJvGBiPL?p=info .
* Once I get the above figured out and I'm confident this isn't just a giant waste of time: TESTING. I have done none at all, mostly because I had no idea what things should look like. But I need get tests implemented ASAP.
* Documentation via the demo app seems to be working well, but I've spent more time on layout and organization than content so far, so I need to catch up with the code so I can keep them in parity.
* Figure out how to bundle the demo app so I can put it up somewhere.
* Figure out how to distribute the plugin.
* Finish making custom elements for the rest of the Semantic widgets.


## Installing

Again, this isn't released or production-ready yet, but once it is, this is how you'll install it.

In your project install the plugin via `jspm` with following command

    jspm install aurelia-semantic-ui

Make sure you use [manual bootstrapping](http://aurelia.io/docs#startup-and-configuration). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

    <body aurelia-app="main">

Create (if you haven't already) a file `main.js` in your `src` folder with following content:

    export function configure(aurelia) {
      aurelia.use
        .standardConfiguration()
        .developmentLogging()
        // Install the plugin
        .plugin('aurelia-semantic-ui');

      aurelia.start().then(a => a.setRoot());
    }

Anywhere in your app add the following markup as a sample -

    <ui-card variations="centered">
      <ui-card-image>
        <img src="/images/avatar2/large/elyse.png">
      </ui-card-image>
      <ui-card-content>
        <a class="header">Elyse</a>
      </ui-card-content>
    </ui-card>

In the meantime, I think you can point jspm at [the Github mirror](https://github.com/ged/aurelia-semantic-ui) to try it out. You're probably the sort of person that already knows how to do that if you're into trying out experimental code. If it's not possible for some reason, let me know, especially if you're inclined to do so via a patch.


## Thanks

Many thanks to the [aurelia-bs-modal](https://github.com/PWKad/aurelia-bs-modal) plugin by Patrick Walters upon which this plugin is based. Used under the terms of The MIT License (MIT):

> Copyright (c) 2014 Durandal Inc.
> 
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
> 
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
> 
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

The rest is Copyright (c) 2016 Michael Granger, but otherwise distributed under the same MIT License.


