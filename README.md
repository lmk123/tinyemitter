# Tiny Emitter

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
