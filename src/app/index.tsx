import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { ProductSearch } from './pages/ProductSearch/ProductSearch'

import store from './store'

export default () => (
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' component={ProductSearch} />
    </BrowserRouter>
  </Provider>
)
