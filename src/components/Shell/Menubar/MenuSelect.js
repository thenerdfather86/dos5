import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { useOnClickOutside } from './../../../hooks'
import { useStore } from './../../../store'

export const MenuSelect = props => {
  const [state] = useStore()
  const { colors } = state.dos

  const Container  = styled.div`
    background: ${colors.background};
    box-shadow: 1em 1em 0px 0px rgba(0,0,0,0.5);
    display: ${props.open ? 'flex' : 'none'};
    position: fixed;
    top: 3em;
    left: ${props.parent ? `${props.parent.getBoundingClientRect().left}px` : 0};
    z-index: 1040;
  `

  const StyledDialog = styled.div`
    border: 2px solid ${colors.black};
    flex-flow: column wrap;
    margin: 0.5em 0.25em;
    padding: 0.5em 0;
    min-width: 6em;
  `

  const dialogRef = React.useRef()
  useOnClickOutside(dialogRef, props.onClose)

  return ReactDOM.createPortal(
    <Container ref={dialogRef}>
      <StyledDialog>{props.children}</StyledDialog>
    </Container>, document.body
  )
}