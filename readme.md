# react-hljs

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
