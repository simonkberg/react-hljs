import React, { Component, PropTypes } from 'react'
import { highlightBlock } from 'highlight.js'

export default class Highlight extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  componentDidUpdate () {
    if (this._el) {
      highlightBlock(this._el)
    }
  }

  _ref = (el) => {
    this._el = el

    if (el) {
      highlightBlock(el)
    }
  }

  render () {
    const { className, children } = this.props

    return (
      <pre className={className} ref={this._ref}>
        <code>{children}</code>
      </pre>
    )
  }
}
