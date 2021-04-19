// import './SearchBar.sass'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { useSearch } from '../../hooks/useSearch'
import { searchProducts, setErrorMessage, setIsLoading, setProducts, setSearchText } from '../../services'
import { Icon } from '../Icon/Icon'

export const Searchbar = (props) => {
  const dispatch = useDispatch()
  const { search, inputText, setInputText } = useSearch(searchProducts)

  useEffect(() => {
    if (search.result) {
      const action = setProducts(search.result)
      dispatch(action)
    }
  }, [search?.result])

  useEffect(() => {
    const action = setIsLoading(search.loading)
    dispatch(action)
  }, [search?.loading])

  useEffect(() => {
    const action = setErrorMessage(search?.error?.message)
    dispatch(action)
  }, [search?.error?.message])

  useEffect(() => {
    const action = setSearchText(inputText)
    dispatch(action)
  }, [inputText])

  return (
    <Wrapper className='searchbar-wrapper' {...props}>
      <Input
        className='searchbar-input'
        type='text'
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder='Search products'
      />
      <SearchButton
        className='searchbar-button'
        data-var='vsButton'
        aria-label='Search'
      >
        <SearchIcon className='search-icon' source={require('../../../assets/search.svg')} />
      </SearchButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  margin: auto 0;
  display: flex;
`

const Input = styled.input`
  flex: 0 1 100%;
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

const SearchButton = styled.button`
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
