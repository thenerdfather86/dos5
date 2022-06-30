import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../store'
import { Menubar, Footer, Panel, Dialog, DialogLine, DialogButton, DirTree } from './'

// White: #fcfcfc
// Disabled: #8ea8a8
// Selected Text / Hot keys on Teal: #f0f8f8
// Menu Borders: #001616

const AboutDialog = props => {
  const [state, dispatch] = useStore()

  const { isVisible } = state.dos.dialogs.about

  const toggleDialog = newState => {
    dispatch({type: 'toggle_dialog', dialog: 'about', newState: newState})
  }

  return <Dialog
    title="About Shell"
    open={isVisible}
    onClose={() => toggleDialog(false)}>
      <DialogLine>MS-DOS Shell</DialogLine>
      <DialogLine>MS-DOS Version 5.00</DialogLine>
      <DialogLine />
      <DialogLine>Copyright (C) Microsoft Corporation 1991</DialogLine>
      <DialogLine />
      <DialogLine>Copyright (C) Justin Fisher 2022</DialogLine>
      <DialogLine><a href='https://getjustin.ca' target='_blank'>getjustin.ca</a></DialogLine>
      <DialogButton onClick={() => toggleDialog(false)}>_Close</DialogButton>
    </Dialog>
}

const Drives = props => {
  const [state, dispatch] = useStore()
  const { currentDrive, currentFolder } = state.dos

  const Container = styled.div`
    background: #fcfcfc;
    height: 4.5em;
    width: calc(100% - 1em);
    grid-area: pane1;
    padding-left: 1em;
    `

  const Line = styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 1em;
    height: 1.5em;
    width: 25%;
  `

  const Drive = props => {
    const StyledDrive = styled.div`
      background: ${props => `${props.active ? '#0000a8' : 'none'}`};
      color: ${props => `${props.active ? '#fcfcfc' : 'none'}`};
    `

    function changeDrive() {
      dispatch({type: 'set_drive', payload: props.letter})
      dispatch({type: 'set_folder', payload: ''})
    }

    return <StyledDrive
      active={currentDrive === props.letter}
      onClick={changeDrive}>
        [{props.letter}:]
    </StyledDrive>
  }

  return <Container>
    <Line>{currentDrive}{currentFolder}</Line>
    <Line>
      <Drive letter="A" />
      <Drive letter="B" />
      <Drive letter="C" />
    </Line>
  </Container>
}

export const Shell = props => {
  const [state] = useStore()
  const { currentDrive, currentFolder, colors, font } = state.dos

  const StyledShell = styled.div`
    font-family: ${font};
    cursor: default;
    width: 100%;
    height: 100%;
    background: ${colors.white};
    display: grid;
    grid: 1.5em 1.5em 4.5em 15em auto 1.5em / 1fr 1fr;
    grid-template-areas:
      "title title"
      "menu menu"
      "pane1 pane1"
      "pane2 pane3"
      "pane4 pane4"
      "footer footer";
  `

  const TitleBar = styled.div`
    background: ${colors.blue};
    display: flex;
    color: ${colors.textSecondary};
    width: 100%;
    height: 1.5em;
    justify-content: center;
    align-items: center;
    grid-area: title;
  `

  return (
    <StyledShell>
      <AboutDialog />
      <TitleBar>MS-DOS Shell</TitleBar>
      <Menubar />
      <Drives />
      <Panel
        active
        gridArea="pane2"
        title="Directory Tree">
          <DirTree />
      </Panel>
      <Panel
        gridArea="pane3"
        title={`${currentDrive}${currentFolder}\\*.*`}>
      </Panel>
      <Panel
        gridArea="pane4"
        title="Main">
      </Panel>
      <Footer />
    </StyledShell>
  )
}