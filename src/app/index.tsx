import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import { ProductSearch } from './pages/ProductSearch/ProductSearch'

import store from './store'

export default () => (
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={ProductSearch} />
    </HashRouter>
  </Provider>
)
