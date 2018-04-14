class SimpleHydra {
  init (context, iri, graph, options) {
    const api = this.api()

    if (api) {
      api.supportedOperation.forEach((operation) => {
        const func = this[operation.method.toLowerCase()]

        func.expects = operation.expects
        func.returns = operation.returns
      })
    }
  }

  api () {
    return this.constructor._api
  }

  get () {
    return this
  }

  static api (api) {
    if (api) {
      this._api = api
    }

    return this._api
  }
}

module.exports = SimpleHydra
