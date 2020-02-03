import React from 'react'
import styled from 'styled-components'

export const KeyboardShortcuts = () => {
  const StyledText = styled.div`
    padding-left: 1.5em;
  `

  const Container = styled.div`
    display: flex;
  `

  return <Container>
    <StyledText>F10=Actions</StyledText>
    <StyledText>Shift+F9=Command Prompt</StyledText>
    </Container>
}