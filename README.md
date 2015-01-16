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

#### $bacon-bg
Default value: `#4b77be`  

Change the bacon background.

#### $bacon-border
Default value: `#f00`  

Change the bacon border color.

#### $bacon-text
Default value: `#fff`  

Change the bacon text color.


## Mixins
Check the mixins file in the `sass` folder to see how you can extend this module.

#### make-bacon($bg, $border, $text)
Default $bg: `$bacon-bg`  
Default $border: `$bacon-border`  
Default $text: `$bacon-text`  

Sets the background, border, and text color of an element.

```scss
.bacon-primary {
  @include make-bacon(#fff, #f00, #000);
}
```


## Examples

#### Bacon
```html
<div class="bacon">
  Hello world!
</div>
```

#### Primary Bacon
```html
<div class="bacon bacon-primary">
  Hello world!
</div>
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
