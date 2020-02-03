import React from 'react'
import styled from 'styled-components'
import { MenuSelect } from './MenuSelect'
import { useStore } from './../../../store'

export const MenuItem = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef(null)
  const [state] = useStore()
  const { font, colors } = state.dos

  const Container =styled.div`
    height: 100%;
    margin: 0;
    padding: 0;
  `

  const StyledMenuItem = styled.button`
    font-family: ${font};
    padding-left: 0.75em;
    padding-right: 0.75em;
    height: 100%;
    background: ${isOpen ? colors.blue : 'none'};
    color: ${isOpen ? colors.textSecondary : 'none'};
    border: none;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &:hover,
    &:active {
      background: ${colors.blue};
      color: ${colors.textSecondary};
    }
  `

  const openDialog = () => {
    if(!props.children)
      setIsOpen(isOpen)
    else
      setIsOpen(!isOpen)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return <Container ref={menuRef}>
    <MenuSelect open={isOpen} onClose={onClose} parent={menuRef.current}>{props.children}</MenuSelect>
    <StyledMenuItem onClick={openDialog} >
      {props.label}
    </StyledMenuItem>
  </Container>
}