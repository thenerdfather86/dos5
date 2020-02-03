import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

export const MenuSelectItem = props => {
  const [state] = useStore()
  const { font, colors } = state.dos

  const StyledItem = styled.button`
    font-family: ${font};
    height: 1.5em;
    width: calc(100% - 0.5em);
    background: none;
    border: none;
    margin: 0 0.25em;
    display: flex;
    padding-left: 0.75em;
    justify-content: flex-start;
    align-items: center;
    color: ${props.disabled ? colors.textDisabled : colors.text};

    &:hover,
    &:active {
      background: ${props.disabled ? 'none' : colors.blue};
      color: ${props.disabled ? 'none' : colors.textSecondary};
    }
  `

  return <StyledItem onClick={props.onClick}>
    {props.children}
  </StyledItem>
}