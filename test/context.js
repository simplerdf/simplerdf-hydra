/* global describe, it */

const assert = require('assert')
const context = require('../context')

describe('simplerdf-hydra/context', () => {
  it('should be an object', () => {
    assert.equal(typeof context, 'object')
  })

  it('should contain Hydra class definitions', () => {
    assert(context.Container)
    assert(context.Operation)
    assert(context.SupportedProperty)
  })

  it('should contain Hydra property definitions', () => {
    assert(context.expects)
    assert(context.member)
    assert(context.method)
    assert(context.supportedOperation)
    assert(context.supportedProperty)
  })

  it('should contain RDF property definitions', () => {
    assert(context.label)
  })
})
