import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'
import { ContentPane } from './'


export const Panel = props => {
  const [state] = useStore()
  const { colors } = state.dos

  const StyledPanel = styled.div`
    background: ${colors.white};
    grid-area: ${props.gridArea};
  `

  const SectionHeader = styled.div`
    background: ${props.active ? colors.blue : colors.sectionTitleBackground};
    color: ${props.active ? colors.white : colors.black};
    width: 100%;
    height: 1.5em;
    justify-content: center;
    align-items: center;
    display: flex;
  `

  return <StyledPanel gridArea={props.gridArea}>
    <SectionHeader active={props.active}>{props.title}</SectionHeader>
    <ContentPane>
      {props.children}
    </ContentPane>
  </StyledPanel>
}