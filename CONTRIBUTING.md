# How to contribute
The latest documentation will be available on [lintel.io](http://lintel.io). See [How to Create a Lintel Module](http://lintel.io/create-module).


## Creating a module
Please use [generator-lintel](https://github.com/lintelio/generator-lintel) for [Yeoman](http://yeoman.io).


## Working on a module
To work on a module, you will need to have ImageMagick and GraphicsMagick installed. This is needed to run tests. You do not need these to use the modules in your SASS, only if you are developing a module.

On a Mac:
```
brew install imagemagick
brew install graphicsmagick
```


## Working with grunt

#### $ grunt
Compiles everything, runs test, and watches for changes. Screenshots are only taken on initial run to save time. Please run `grunt test` when ready to commit.

You can view your code on [localhost:4554](http://localhost:4554).

#### $ grunt test
Compiles everything and runs tests. If tests are broken, replace the screenshots in `test/expected` with the fresh ones from `test/tmp`.

#### $ grunt compile
Compiles everything without running any tests.


## Listing module on lintel.io
The following conditions must be met:

- Make sure your package has the `lintelmodule` keyword in `bower.json` and `package.json`. 
- You must have a description in `bower.json` and `package.json`.
- The module must be listed on bower and npm. 
- Running `npm test` (same as `grunt test`) should work without any failures.
