lintel-contrib-popovers
=======================

> Popovers for lintel.

[![npm](https://img.shields.io/npm/v/lintel-contrib-popovers.svg)](https://www.npmjs.com/package/lintel-contrib-popovers)
[![Bower](https://img.shields.io/bower/v/lintel-contrib-popovers.svg)](https://github.com/lintelio/lintel-contrib-popovers)


## Getting Started
This module requires Lintel.

If you haven't used [Lintel](http://lintel.io/) before, be sure to check out the [Getting Started](http://lintel.io/getting-started) guide, as it explains how to install and use this module. Once you're familiar with that process, you may install this module with this command:

```shell
bower install lintel-contrib-popovers --save
```

Once the module has been installed, you will have to load it in your main SASS file:

```scss
@import "bower_components/lintel-contrib-popovers/sass/popovers.scss"
```

This module also includes a JavaScript component, which you will have to load separately.

```html
<script src="bower_components/lintel-contrib-popovers/dist/popovers.min.js" type="text/javascript"></script>
```

You can use [wiredep](https://github.com/taptapship/wiredep) or [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep) to automatically inject files in your build process.


## Variables
Check the vars file in the `sass` folder to see the full list of variables you can customize.

#### $popover-include-states
Default value: `true`  

Include styling for the default states.

#### $popover-padding-y & $popover-padding-x
Change the padding-top/bottom and padding-left/right.

Also available for finer control:  
`$popover-header-padding-*`  
`$popover-body-padding-*`  
`$popover-footer-padding-*`  

#### $popover-animate
Default value: `$animate-fast`  

Default fade-in speed.

#### $popover-arrow-width
Default value: `15px`  

#### $popover-bg
Default value: `#fff`

#### $popover-border
Default value: `$border-dark`

#### $popover-border-radius
Default value: `$border-radius-base`  

#### $popover-box-shadow
Default value: `$box-shadow-light`  

#### $popover-text
Default value: `$text-base`  

Popover font color.

#### $popover-z-index
Default value: `$z-index-2xl`  

#### $popover-*-bg, $popover-*-border, $popover-*-text
Change the `header`, `body`, or `footer` background, border, and text color.

#### $popover-title-font-size
Default value: `$font-size-h4`  

#### $popover-close-opacity
Default value: `0.4`  

#### $popover-close-padding-y
Default value: `0`  

#### $popover-close-padding-x
Default value: `0`  

#### $popover-*-min
Min-width for the default sizes (`xs`, `sm`, `md`, `lg`, `xl`).
Change `md` for the default popover width.

## Mixins
Check the mixins file in the `sass` folder to see how you can extend this module.

#### popover-state($bg, $border, $text) {

Creates a new popover state.

```scss
.popover-primary {
  @include popover-state(
    $bg: $popover-primary-bg,
    $border: $popover-primary-border,
    $text: $popover-primary-text
  );
}
```


## JavaScript

### Data-attr
Add `data-toggle="popover"` and `data-target="#selector"` to a button/element.
You can add additional options as data-attributes.

```html
<button type="button" data-toggle="popover" data-target="#myPopover">
  Popover
</button>
<div id="myPopover" class="popover">
  ...
</div>
```

### jQuery
Call the jQuery plugin on the popover, passing in any options and the related target (button).

```js
var options = {
  placement: 'bottom',
  onShow: function(popover, button) {
    console.log('onShow', popover, button);
  },
  onHide: function(popover, button) {
    console.log('onHide', popover, button);
  },
};

$('button').click(function() {
  $('#myPopover').popover(options, this); // this == button
});
```

Alternatively, you can use the default options:
```js
$('button').click(function() {
  $('#myPopover').popover('toggle', this); // this == button
});
```


### Options

Name      | Type                           | Default             | Description
--------- | ------------------------------ | ------------------- | -----------
onShow    | function                       |                     | Callback function to execute every time popover is shown.
onHide    | function                       |                     | Callback function to execute every time popover is hidden.
esc       | boolean                        | true                | Close popover when pressing esc key.
show      | boolean                        | true                | Show on init.


### Methods

Name      | Parameters               | Description
--------- | ------------------------ | -----------
toggle    | (options, relatedTarget) | Toggle popover. Related target required first time popover is shown.
show      | (options, relatedTarget) | Show popover. Related target required first time popover is shown.
hide      |                          | Hide popover.


## Examples

#### Popover Template
```html
<div class="popover" id="myPopover" tabindex="-1" role="dialog" aria-hidden="true">
  <div class="popover-content">
    <div class="popover-header">
      <button type="button" class="popover-close" data-toggle="popover-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      <h1 class="popover-title">Popover Title</h1>
    </div>
    <div class="popover-body">
      <div class="form-group">
        <label class="form-label">
          Email
          <input class="form-control" type="text" placeholder="Email">
        </label>
      </div>
      <div class="form-group">
        <label class="form-label">
          Password
          <input class="form-control" type="password" placeholder="Password">
        </label>
      </div>
    </div>
    <div class="popover-footer">
      <div class="btn-group">
        <button class="btn" type="button">Cancel</button>
        <button class="btn btn-primary" type="button">OK</button>
      </div>
    </div>
  </div>
</div>
```

#### Popover Close Button
```html
<button type="button" class="popover-close" data-toggle="popover-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
```

#### Popover Header
```html
<div class="popover-header">
  <button type="button" class="popover-close" data-toggle="popover-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <h1 class="popover-title">Popover Title</h1>
</div>
```

#### Popover Header Actions
```html
<div class="popover-header">
  <div class="popover-header-actions">
    <div class="btn-group">
      <button class="btn" type="button">Cancel</button>
      <button class="btn btn-primary" type="button">OK</button>
    </div>
    <button type="button" class="popover-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  </div><!--
  --><h1 class="popover-title">Popover Title</h1>
</div>
```

#### Popover Linked Title
```html
<div class="popover-header">
  <button type="button" class="popover-close" data-toggle="popover-close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <h1 class="popover-title">
    <a href="#" class="popover-title-link">Popover Title</a>
  </h1>
</div>
```

#### Popover Footer Actions
```html
<div class="popover-footer">
  <div class="popover-footer-actions">
    <div class="btn-group">
      <button class="btn" type="button">Cancel</button>
      <button class="btn btn-primary" type="button">OK</button>
    </div>
  </div><!--
  --><button class="btn" type="button">
    Left Button
  </button>
</div>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
