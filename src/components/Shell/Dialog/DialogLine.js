import React from 'react'
import styled from 'styled-components'

const Line = styled.p`
  padding: 0;
  margin: 0;
  height: 1.5em;
`

export const DialogLine = props => {
  return <Line>
    {props.children}
  </Line>
}