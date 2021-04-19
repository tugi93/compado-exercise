// import './PriceRangePicker.sass'
import 'react-input-range/lib/css/index.css'
import { useDispatch, useSelector } from 'react-redux'
import React, {useCallback, useMemo} from 'react'
import styled from 'styled-components'
import RangePicker from 'react-input-range'

import { Range } from '../../types'
import { setSelectedRange, getSelectedRange, getProducts } from '../../services'

export const PriceRangePicker = () => {
  const dispatch = useDispatch()
  const products = useSelector(getProducts)
  const selectedRange = useSelector(getSelectedRange)

  const possibleRanges = useMemo(() => {
    const max = products.length > 0 ? Math.max.apply(Math, products.map((p)=>p.price)) : selectedRange.max
      return {
        min: 0,
        max: max
      }
  }, [products])

  const onPriceRangeChange = useCallback((value: Range) => {
    if(possibleRanges.max >= value.max) {
      const action = setSelectedRange(value)
      dispatch(action)
    }
  }, [dispatch, possibleRanges.max, setSelectedRange])

  return (
    <Wrapper className='range-slider-wrapper'>
      <PickedRangeText className='picked-range-text'>${selectedRange.min} - ${selectedRange.max}</PickedRangeText>
      <RangePicker
        maxValue={possibleRanges.max}
        minValue={possibleRanges.min}
        formatLabel={(val) => `${val} $`}
        value={selectedRange}
        onChange={onPriceRangeChange}
      />
      <RangeTextWrapper className='range-text-wrapper'>
        <span>${possibleRanges.min}</span>
        <span>${possibleRanges.max}</span>
      </RangeTextWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 10px 0;
  .input-range__slider {
    background-color: #ccc;
    background-image: none;
    border: none;
    border-radius: 10px;
    height: 27px;
    margin-left: 0;
    top: -5px;
    width: 3px;
    &:active {
      background-color: #555;
    }
  }
  .input-range__track {
    background-color: #e4e3e3;
  }
  .input-range__track--active {
    background: #555;
  }
  .input-range__label-container {
    display: none;
  }
`

const PickedRangeText = styled.p`
  text-align: center;
  margin: 0;
  padding-top: 4px;
`

const RangeTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #777;
  padding-top: 8px;
`
