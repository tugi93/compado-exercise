export enum Currency {
  EUR = '€',
  USD = '$'
}

export type Product = {
  id: string
  name: string,
  price: number,
  viewItemURL?: string,
  currency: Currency,
  category?: string,
  picture?: string 
}

export type Range = {
  min: number,
  max: number
}

export type State = {
  isSidebarOpen: boolean
  products: Product[],
  isLoading: boolean,
  errorMessage: string,
  searchText: string,
  selectedRange: Range
}
