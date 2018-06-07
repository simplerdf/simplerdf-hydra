const ns = {
  hydra: 'http://www.w3.org/ns/hydra/core#',
  rdfs: 'http://www.w3.org/2000/01/rdf-schema#'
}

const context = {
  ApiDocumentation: ns.hydra + 'ApiDocumentation',
  Container: ns.hydra + 'Container',
  Operation: ns.hydra + 'Operation',
  SupportedProperty: ns.hydra + 'SupportedProperty',
  expects: {
    '@id': ns.hydra + 'expects',
    '@type': '@id'
  },
  label: ns.rdfs + 'label',
  member: {
    '@id': ns.hydra + 'member',
    '@container': '@set'
  },
  method: ns.hydra + 'method',
  property: {
    '@id': ns.hydra + 'property',
    '@type': '@id'
  },
  returns: {
    '@id': ns.hydra + 'returns',
    '@type': '@id'
  },
  supportedClass: {
    '@id': ns.hydra + 'supportedClass',
    '@type': '@id',
    '@container': '@set'
  },
  supportedOperation: {
    '@id': ns.hydra + 'supportedOperation',
    '@type': '@id',
    '@container': '@set'
  },
  supportedProperty: {
    '@id': ns.hydra + 'supportedProperty',
    '@type': '@id',
    '@container': '@set'
  }
}

module.exports = context
