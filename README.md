# Tiny Emitter

[![Build Status](https://img.shields.io/travis/lmk123/tinyemitter/master.svg?style=flat-square)](https://travis-ci.org/lmk123/tinyemitter)
[![Coverage Status](https://img.shields.io/coveralls/lmk123/tinyemitter/master.svg?style=flat-square)](https://coveralls.io/github/lmk123/tinyemitter?branch=master)
[![dependencies Status](https://img.shields.io/david/lmk123/tinyemitter.svg?style=flat-square)](https://david-dm.org/lmk123/tinyemitter)
[![devDependencies Status](https://img.shields.io/david/dev/lmk123/tinyemitter.svg?style=flat-square)](https://david-dm.org/lmk123/tinyemitter?type=dev)
[![NPM Version](https://img.shields.io/npm/v/translation.js.svg?style=flat-square)](https://www.npmjs.com/package/translation.js)

Yet another tiny event emitter libary.

## Install

Using NPM:

```
npm install tinyemitter
```

## Usage

```js
import TinyEmitter from 'tinyemitter'

const e = new TinyEmitter()

function handle (...names) {
  console.log(...names)
}

e.on('hello', handle)
e.emit('hello', 'Mike', 'Bob', 'Lucy')
e.off('hello', handle)
```

That's all.

## License

MIT
