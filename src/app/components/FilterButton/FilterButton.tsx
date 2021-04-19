//import './ProductSearch.sass'
import React from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import styled from 'styled-components'
import { Icon } from '../Icon/Icon'
import { getIsSidebarOpen, toggleSidebar } from '../../services'

export const FilterButton = () => {
  const isSidebarOpen = useSelector(getIsSidebarOpen)
  const actions = useActions({ toggleSidebar })
  
  return (
    <Button className='filter-button' onClick={() => actions.toggleSidebar(!isSidebarOpen)}>
      <p>{`${isSidebarOpen ? 'Hide' : 'Show'} Filter`}</p>
      <FilterIcon className='filter-icon' source={require('../../../assets/sorting_options.svg')} />
    </Button>
  )
}

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  padding-right: 50px;
  @media (max-width: 1400px) {
    p {
      display: none;
    }
  }
  p {
    font-size: 16px;
    padding-right: 8px;
  }
  :hover {
    cursor: pointer;
  }
`

const FilterIcon = styled(Icon)`
  display: flex;
`
