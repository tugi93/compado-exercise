import { Product, Range } from '../types'
import { createAction } from 'redux-actions'

export const toggleSidebar = createAction('TOGGLE_SIDEBAR', (isSidebarOpen: boolean ) => {
    return { isSidebarOpen }
})

export const setProducts = createAction('SET_PRODUCTS', (products: Product[]) => {
  return { products }
})

export const setSelectedRange = createAction('SET_SELECTED_RANGE', (selectedRange: Range) => {
  return { selectedRange }
})

export const setIsLoading = createAction('SET_IS_LOADING', (isLoading: boolean) => {
  return { isLoading }
})

export const setErrorMessage = createAction('SET_ERROR_MESSAGE', (errorMessage: string) => {
  return { errorMessage }
})

export const setSearchText = createAction('SET_SEARCH_TEXT', (searchText: string) => {
  return { searchText }
})
