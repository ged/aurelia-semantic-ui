# aurelia-semantic-ui

[![Join the chat at https://gitter.im/ged/aurelia-semantic-ui](https://badges.gitter.im/ged/aurelia-semantic-ui.svg)](https://gitter.im/ged/aurelia-semantic-ui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

This plugin is for the [Aurelia](http://www.aurelia.io/) platform. It contains custom elements and attributes for some of the [Semantic UI](http://semantic-ui.com/) widgets.

It isn't really even alpha quality right now, as I'm still figuring out how half of this stuff works, so don't depend on anything quite yet.

The major "to do" list:

* Flesh out the custom elements. I started this before the new projection system (slots), and I couldn't figure out how to implement custom elements with the old one so the custom elements are only half-implemented currently. The templates, for example, are mostly just placeholders.
* TESTING. I have been keeping tests in line with the implementation of the components, so it's a pretty good indication of what's been implemented beyond just the basic custom elements/attributes.
* Documentation via [the demo app](http://ged.github.io/aurelia-semantic-ui/demo.html) seems to be working well, but I've spent more time on layout and organization than content so far, so I need to catch up with the code so I can keep them in parity.
* Finish making custom elements/attributes for the rest of the Semantic widgets.
* Resolve some binding problems with the Modules and Behaviors. 
* Figure out a convention for binding attributes that have the same as methods of components (e.g., `attached`). I'm currently thinking that I'll prefix them (`ui-attached`/`uiAttached`).

## Progress

The plan is to provide implementations for all of the Collections, Elements, Modules, and Views, and any of the Behaviors and plugins that make sense to use in the context of an Aurelia app. 

*Legend*

    [x] Complete and adequate test coverage
    [-] Implemented but not complete
    [?] Not sure if this will be included
    [ ] Not implemented yet, but planned

### Behaviors

- [?] API (consider omitting)
- [?] Form Validation (will this be easier to use than `aurelia-validation` when it's done?)
- [-] Visibility (`ui-visibility`)

### Collections

- [x] Breadcrumb
- [x] Form
- [x] Grid
- [x] Menu
- [x] Message
- [-] Table

### Elements

- [x] Button
- [x] Container
- [x] Divider
- [x] Flag
- [-] Header
- [x] Icon
- [-] Image
- [-] Input
- [-] Label
- [-] List
- [-] Loader
- [-] Rail
- [-] Reveal
- [-] Segment
- [-] Step

### Modules

- [-] Accordion
- [-] Checkbox
- [-] Dimmer
- [-] Dropdown
- [ ] Embed
- [-] Modal
- [ ] Nag
- [-] Popup
- [-] Progress
- [ ] Rating
- [-] Search
- [ ] Shape
- [-] Sidebar
- [-] Sticky
- [ ] Tab
- [ ] Transition

### Views

- [ ] Advertisement
- [-] Card
- [ ] Comment
- [-] Feed
- [ ] Item
- [-] Statistic

### Plugins

- [ ] Calendar


## Installing

Again, this isn't production-ready yet, but once it is, this is how you'll install it.

In your Aurelia project install the plugin via `jspm` with following command

    jspm install npm:aurelia-semantic-ui

Make sure you use [manual bootstrapping](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/4). In order to do so open your `index.html` and locate the element with the attribute aurelia-app. Change it to look like this:

    <body aurelia-app="main">

Create (if you haven't already) a file `main.js` in your `src` folder as described in the [Bootstrapping Aurelia](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/app-configuration-and-startup/1) section of the Aurelia documentation. Add this before you call `aurelia.start()` to install the plugin in your app:

    aurelia.use.plugin( 'aurelia-semantic-ui' );


If you wish to test to see if the plugin is being installed correctly, you can add the following markup as a sample:

    <ui-card centered>
      <div class="image">
        <img src="/images/avatar2/large/elyse.png">
      </div>
      <div class="content">
        <a class="header">Elyse</a>
      </div>
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


