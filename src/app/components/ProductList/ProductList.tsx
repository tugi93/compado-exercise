// import './ProductList.sass'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import { ProductCard } from '../ProductCard/ProductCard'
import { LoadingIndicator } from '../LoadingIndicator/LoadingIndicator'

import { getErrorMessage, getFilteredProducts, getIsLoading, getSearchText } from '../../services'

export const ProductList = () => {
  const isLoading = useSelector(getIsLoading)
  const errorMessage = useSelector(getErrorMessage)
  const searchText = useSelector(getSearchText)
  const products = useSelector(getFilteredProducts)

  const message = useMemo(() => {
    switch (true) {
      case !!errorMessage:
        return errorMessage
      case products.length > 0:
        return `Show all ${products.length} results`
      case searchText.length > 1 && products.length === 0:
        return 'No items found'
      case searchText.length < 2:
        return 'Please enter the product which you are looking for'
      default:
        return ''
    }
  }, [errorMessage, products.length, searchText.length])

  return isLoading ? (
    <Wrapper className='pd-list-wrapper'>
      <LoadingIndicator height='100%' />
    </Wrapper>
  ) : (
    <Wrapper className='pd-list-wrapper'>
      <Title className='pd-list-title'>{message}</Title>
      <Grid className='pd-list-grid'>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1 1 auto;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
`

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  padding-right: 130px;
  padding-left: 130px;
  padding-top: 30px;
  @media (max-width: 920px) {
    font-size: 16px;
  }
  @media (max-width: 1400px) {
    font-size: 20px;
  }
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-right: 100px;
  padding-left: 100px;
  padding-bottom: 70px;
`
