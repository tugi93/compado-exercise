import React from 'react'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'

export const Searchbar = ({...props}) => {
  return (
    <Wrapper {...props}>
      <Input 
        type='text' 
        value=''
        onChange={e => console.log(e.target.value)}
        placeholder="Search products" 
      />
      <SearchButton
        data-var='vsButton'
        aria-label='Search'
      >
        <SearchIcon source={require('../../../assets/search.svg')} />
      </SearchButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto 0;
`

const Input = styled.input`
  position: relative;
  visibility: visible;
  background: #f3f3f3;
  cursor: text;
  color: #333;
  padding: 10px 50px 10px 44px;
  border-radius: 100px;
  height: 20px;
  width: -webkit-fill-available;
  border: 0px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  overflow: hidden;
  :focus {
    outline: none;
  }
`

const SearchButton = styled.button `
  position: absolute;
  top: 2px;
  left: 0px;
  padding: 6px 8px;
  align-items: center;
  border-radius: 100px;
  background: transparent;
  outline: 0;
  cursor: pointer;
  border: none;
  border-width: 2px;
  transition: 0.4s;
  :focus {
    outline: none;
  }
  svg {
    height: 24px;
    width: 24px;
  }
`

const SearchIcon = styled(Icon)``