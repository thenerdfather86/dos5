import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'

export const MenuDivider = () => {
  const [state] = useStore()
  const { colors } = state.dos

  const Divider = styled.div`
    height: 0.75em;
    width: 100%;
    border-top: 2px solid ${colors.black};
    margin-top: 0.75em;
  `
  return <Divider />
}