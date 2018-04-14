/* global describe, it */

const assert = require('assert')
const context = require('../context')
const SimpleCore = require('simplerdf-core')
const SimpleFromJsonPlugin = require('simplerdf-fromjson')
const SimpleHydraPlugin = require('..')

const SimpleFromJson = SimpleCore.extend(SimpleFromJsonPlugin)
const SimpleHydra = SimpleCore.extend(SimpleHydraPlugin)

const api = (new SimpleFromJson(context)).fromJSON({
  '@id': 'http://example.org/Custom',
  label: 'custom hydra class',
  supportedOperation: [{
    method: 'GET',
    label: 'custom get method',
    returns: 'http://example.org/Custom'
  }, {
    method: 'POST',
    label: 'custom post method',
    expects: 'http://example.org/CustomInput',
    returns: 'http://example.org/CustomOutput'
  }],
  supportedProperty: [{
    property: 'http://example.org/property',
    label: 'custom property'
  }]
})

describe('simplerdf-hydra', () => {
  it('should be a constructor', () => {
    assert.equal(typeof SimpleHydraPlugin, 'function')
  })

  it('should assign the defined expects and returns to the operations', () => {
    class Custom extends SimpleHydra {
      get () {}

      post () {}
    }

    Custom.api(api)

    const obj = new Custom()

    assert.equal(obj.get.expects, undefined)
    assert.equal(obj.get.returns, 'http://example.org/Custom')
    assert.equal(obj.post.expects, 'http://example.org/CustomInput')
    assert.equal(obj.post.returns, 'http://example.org/CustomOutput')
  })

  describe('static .api', () => {
    it('should be a static method', () => {
      assert.equal(typeof SimpleHydraPlugin.api, 'function')
    })

    it('should assign the given API description to the class', () => {
      class Custom extends SimpleHydra {}

      Custom.api(api)

      assert.equal(Custom._api.graph().toCanonical(), api.graph().toCanonical())
    })

    it('should return the assigned API description of the class', () => {
      class Custom extends SimpleHydra {}

      Custom.api(api)

      assert.equal(Custom.api().graph().toCanonical(), api.graph().toCanonical())
    })

    it('should return undefined if no API description was assigned', () => {
      class Custom extends SimpleHydra {}

      assert(!Custom.api())
    })
  })

  describe('.api', () => {
    it('should return the assigned API description', () => {
      class Custom extends SimpleHydra {
        get () {}

        post () {}
      }

      Custom.api(api)

      const obj = new Custom()

      assert.equal(obj.api().graph().toCanonical(), api.graph().toCanonical())
    })

    it('should return undefined if no API description was assigned', () => {
      class Custom extends SimpleHydra {}

      const obj = new Custom()

      assert(!obj.api())
    })
  })
})
