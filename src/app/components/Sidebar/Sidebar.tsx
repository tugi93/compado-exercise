// import './Sidebar.sass'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { PriceRangePicker } from '../PriceRangePicker/PriceRangePicker'
import { getIsSidebarOpen } from '../../services'

export const Sidebar = () => {
  const isSidebarOpen = useSelector(getIsSidebarOpen)
  
  return (
    <Wrapper className={isSidebarOpen ? 'sidebar-wrapper' : 'sidebar-hidden'} isOpen={isSidebarOpen}>
      <Title className='sidebar-title'>FILTER SELECTION</Title>
      <span className='sidebar-label'>PRICE</span>
      <PriceRangePicker/>
    </Wrapper>
  )
}

const Wrapper = styled('div')<{isOpen: boolean}>`
  width: ${(props) => (props.isOpen ? '25%' : '0px')};
  padding: ${(props) => (props.isOpen ? '20px' : '20px 0px')};
  overflow: hidden;
  transition: 0.5s;
  white-space: nowrap;
  border-right: #ddd solid 1px;
  flex: 0 0 auto;
  @media (max-width: 920px) {
    width: ${(props) => (props.isOpen ? '80%' : '0px')};
  }
`

const Title = styled.h3`
  padding-bottom: 20px;
  border-bottom: 1px dashed #cccccc;
`
