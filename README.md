# aurelia-semantic-ui

This plugin is for the [Aurelia](http://www.aurelia.io/) platform. It contains custom elements for some of the [Semantic UI](http://semantic-ui.com/) widgets.


## Installing

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

    <ui-card variation="centered">
      <ui-card-image>
        <img src="/images/avatar2/large/elyse.png">
      </ui-card-image>
      <ui-card-content>
        <a class="header">Elyse</a>
      </ui-card-content>
    </ui-card>


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


