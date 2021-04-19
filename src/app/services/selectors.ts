import { createSelector } from "reselect";
import { State } from "app/types";

export const getIsSidebarOpen = (state: State) => {
    return state.isSidebarOpen
}

export const getIsLoading = (state: State) => state.isLoading

export const getErrorMessage = (state: State) => state.errorMessage

export const getSearchText = (state: State) => state.searchText

export const getProducts = (state: State) => {
    return state.products
}

export const getSelectedRange = (state: State) => state.selectedRange

export const getFilteredProducts = createSelector([getProducts, getSelectedRange], (products = [], selectedRange) => {
    return products.filter(({price}) => price >= selectedRange.min && price <= selectedRange.max)
})
