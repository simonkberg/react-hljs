/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import Highlight from '../Highlight'

describe('react-hljs', () => {
  it('should create a `pre`-node', () => {
    const code = TestUtils.renderIntoDocument(<Highlight />)
    const codeNode = ReactDOM.findDOMNode(code)

    expect(codeNode.nodeName).toBe('PRE')
  })

  it('should wrap a `code`-node', () => {
    const code = TestUtils.renderIntoDocument(<Highlight />)
    const codeNode = ReactDOM.findDOMNode(code)

    expect(codeNode.childNodes[0].nodeName).toBe('CODE')
  })

  it('should print text content', () => {
    const text = 'Hello World'
    const code = TestUtils.renderIntoDocument(
      <Highlight>{text}</Highlight>
    )
    const codeNode = ReactDOM.findDOMNode(code)

    expect(codeNode.textContent).toBe(text)
  })

  it('should use provided class name', () => {
    const text = 'Hello World'
    const className = 'nohighlight'
    const code = TestUtils.renderIntoDocument(
      <Highlight className={className}>{text}</Highlight>
    )
    const codeNode = ReactDOM.findDOMNode(code)

    expect(code.props.className).toBe(className)
    expect(codeNode.className).toBe(className)
  })

  it('should get class names from hljs', () => {
    const content = '<pre><code class="html">...</code></pre>'
    const className = 'html'
    const hljsClassName = 'hljs'
    const code = TestUtils.renderIntoDocument(
      <Highlight className={className}>{content}</Highlight>
    )
    const codeNode = ReactDOM.findDOMNode(code)

    expect(code.props.className).toBe(className)
    expect(codeNode.classList).toContain(hljsClassName)
  })
})
