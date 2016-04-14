# react-hljs [![Travis][build-badge]][build] [![npm package][npm-badge]][npm]

Highlight.js for React

`npm install --save react-hljs`

## usage
```js
import React, { Component } from 'react'
import Highlight from 'react-hljs'

class Code extends Component {
  render () {
    return (
      <Highlight className='js'>
        alert('Lorem ipsum dolor sit amet')
      </Highlight>
    )
  }
}
```

## license

`MIT License Copyright (c) 2016 Simon Kjellberg`


[build-badge]: https://img.shields.io/travis/simonkberg/react-hljs/master.svg?style=flat-square
[build]: https://travis-ci.org/simonkberg/react-hljs

[npm-badge]: https://img.shields.io/npm/v/react-hljs.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-hljs
