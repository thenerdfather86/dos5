import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

export const Dialog = props => {
  const [state] = useStore()
  const { font, colors } = state.dos

  const Container = styled.div`
    display: ${props.open ? 'flex' : 'none'};
    box-shadow: 1em 1em 0px 0px rgba(0,0,0,0.5);
    font-family: ${font};
    flex-flow: column wrap;
    background: ${colors.background};
    position: absolute;
    top: 9em;
    max-width: 30em;
    left: calc(50% - 15em);
    z-index: 1500;
    justify-content: center;
    align-items: center;
    height
  `

  const Dialog = styled.div`
    font-family: ${font};
    display: flex;
    flex-flow: column wrap;
    border: 2px solid ${colors.black};
    margin: 0.75em 0.25em -0.75em 0.25em;
    width: 28.5em;
    padding: 0.5em 0.25em;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    top: -1.5em;
    padding-top: 1.5em;
  `

  const DialogTitle = styled.div`
    background: ${colors.black};
    color: ${colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 8em;
    z-index: 1510;
  `

  return <Container>
      <DialogTitle>{props.title}</DialogTitle>
      <Dialog open={props.open} onClose={props.onClose}>
        {props.children}
      </Dialog>
    </Container>
}