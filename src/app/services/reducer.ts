import { ActionType, handleActions } from 'redux-actions'
import { State } from '../types'
import { setProducts, setSelectedRange, toggleSidebar, setIsLoading, setErrorMessage, setSearchText } from './actions'

const initialState: State = {
  products: [],
  isLoading: false,
  errorMessage: '',
  searchText: '',
  isSidebarOpen: false,
  selectedRange: { min: 0, max: 1000 }
}

const handleToggleSidebar = (state: State, action: ActionType<typeof toggleSidebar>) => {
    return {
        ...state,
        isSidebarOpen: action.payload.isSidebarOpen
    }
}

const handleIsLoading = (state: State, action: ActionType<typeof setIsLoading>) => {
  return {
    ...state,
    isLoading: action.payload.isLoading
  }
}

const handleErrorMessage = (state: State, action: ActionType<typeof setErrorMessage>) => {
  return {
    ...state,
    errorMessage: action.payload.errorMessage
  }
}

const handleSearchText = (state: State, action: ActionType<typeof setSearchText>) => {
  return {
    ...state,
    searchText: action.payload.searchText
  }
}


const handleSetProducts = (state: State, action: ActionType<typeof setProducts>) => {
  const products = action.payload.products
  const max = products.length > 0 ? Math.max.apply(Math, products.map((p)=>p.price)) : state.selectedRange.max
  return {
    ...state,
    selectedRange: {max, min:0},
    products: action.payload.products,
  }
}

const handelSetSelectedRange = (state: State, action: ActionType<typeof setSelectedRange>) => {
  return {
    ...state,
    selectedRange: action.payload.selectedRange
  }
}

const reducer = handleActions({
    [toggleSidebar.toString()]: handleToggleSidebar,
    [setProducts.toString()]: handleSetProducts,
    [setSelectedRange.toString()]: handelSetSelectedRange,
    [setIsLoading.toString()]: handleIsLoading,
    [setErrorMessage.toString()]: handleErrorMessage,
    [setSearchText.toString()]: handleSearchText
}, initialState)

export default reducer