import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

export const ContentPane = props => {
  const [state] = useStore()
  const { colors } = state.dos

  const Container = styled.div`
    border-left: 2px solid ${colors.black};
    border-right: 2px solid ${colors.black};
    border-bottom: 2px solid ${colors.black};
    margin-left: calc(0.75em - 2px);
    margin-right: calc(0.75em - 2px);
    margin-bottom: 0.75em;
    width: calc(100% - 1.5em);
    height: calc(100% - 2.25em);
  `

  return <Container>
    {props.children}
  </Container>
}