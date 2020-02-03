import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

export const DialogButton = props => {
  const [state] = useStore()

  const { font, colors } = state.dos

  const Button = styled.button`
      font-family: ${font};
      background: ${colors.white};
      border: none;
      box-shadow: none;
      padding-right: 1.5em;
      margin-top: 0.75em;
    `
  return <Button onClick={props.onClick}>
    {props.children}
  </Button>
}