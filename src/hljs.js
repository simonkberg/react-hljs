import React, { Component, PropTypes } from 'react'
import hljs from 'highlight.js'

export default class Highlight extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
  }

  componentDidUpdate () {
    if (this._el) {
      this._highlight(this._el)
    }
  }

  _highlight = (el) => {
    this._el = el

    hljs.highlightBlock(el)
  }

  render () {
    const { className, children } = this.props
    const ref = this._highlight

    return (
      <pre className={className} ref={ref}>
        <code>{children}</code>
      </pre>
    )
  }
}
