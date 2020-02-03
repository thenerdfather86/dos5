import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'
import {Clock, KeyboardShortcuts} from './'


export const Footer = props => {
  const [state] = useStore()
  const { colors } = state.dos

  const StyledFooter = styled.div`
    background: ${colors.background};
    color: ${colors.text};
    width: 100%;
    height: 1.5em;
    grid-area: footer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `

  return <StyledFooter>
    <KeyboardShortcuts />
    <Clock />
  </StyledFooter>
}