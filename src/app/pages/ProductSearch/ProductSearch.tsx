// import './ProductSearch.sass'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Header } from '../../components/Header/Header'
import { ProductList } from '../../components/ProductList/ProductList'
import { Sidebar } from '../../components/Sidebar/Sidebar'

export const ProductSearch = () => {
  return (
    <Wrapper className='product-search-wrapper'>
      <GlobalStyle />
      <Header />
      <Content className='product-search-content'>
        <Sidebar />
        <ProductList />
      </Content>
    </Wrapper>
  )
}

const GlobalStyle = createGlobalStyle`
  html,body { 
    height: 100%; 
    margin: 0px; 
    padding: 0px; 
  }
  div, a, p, span {
    font-family: 'Krub', sans-serif;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }
  #root {
    height: 100%;
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  a {
    color: #333333;
  }
`

const Content = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`
