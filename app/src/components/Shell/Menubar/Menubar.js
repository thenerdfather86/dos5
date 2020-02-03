import React from 'react'
import styled from 'styled-components'
import { useStore } from './../../../store'
import { MenuItem, MenuDivider, MenuSelectItem } from './'

export const Menubar  = props => {
  const [state, dispatch] = useStore()
  const { colors } = state.dos

  const StyledMenuBar = styled.div`
    background: ${colors.background};
    color: ${colors.text};
    width: calc(100% - 0.75em);
    height: 1.5em;
    grid-area: menu;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 0.75em;
    margin: 0;
  `

  function openDialog() {
    dispatch({type: 'toggle_dialog', dialog: 'about', newState: true})
  }

  return <StyledMenuBar>
    <MenuItem label="File">
      <MenuSelectItem disabled>Open</MenuSelectItem>
      <MenuSelectItem hotkey="r">Run...</MenuSelectItem>
      <MenuSelectItem disabled>Print</MenuSelectItem>
      <MenuSelectItem disabled>Associate...</MenuSelectItem>
      <MenuSelectItem hotkey="h">Search...</MenuSelectItem>
      <MenuSelectItem disabled shortcut="F9">View File Contents</MenuSelectItem>
      <MenuDivider />
      <MenuSelectItem disabled shortcut="F7">Move...</MenuSelectItem>
      <MenuSelectItem disabled shortcut="F8">Copy...</MenuSelectItem>
      <MenuSelectItem disabled shortcut="Del">Delete...</MenuSelectItem>
      <MenuSelectItem disabled>Rename...</MenuSelectItem>
      <MenuSelectItem disabled>Change Attributes...</MenuSelectItem>
      <MenuDivider />
      <MenuSelectItem hotkey="e">Create Directory</MenuSelectItem>
      <MenuDivider />
      <MenuSelectItem disabled>Select All</MenuSelectItem>
      <MenuSelectItem disabled>Deselect All</MenuSelectItem>
      <MenuSelectItem hotkey="x" shortcut="Alt+F4">Exit</MenuSelectItem>
    </MenuItem>
    <MenuItem label="Options">
      <MenuSelectItem hotkey="c">Confirmation...</MenuSelectItem>
      <MenuSelectItem hotkey="f">File Display Options...</MenuSelectItem>
      <MenuSelectItem hotkey="a">Select Across Directories</MenuSelectItem>
      <MenuSelectItem hotkey="s">Show Information...</MenuSelectItem>
      <MenuSelectItem hotkey="e">Enable Task Swapper</MenuSelectItem>
      <MenuSelectItem hotkey="d">Display...</MenuSelectItem>
      <MenuSelectItem hotkey="o">Colors...</MenuSelectItem>
    </MenuItem>
    <MenuItem label="View">
      <MenuSelectItem hotkey="s">Single File List</MenuSelectItem>
      <MenuSelectItem hotkey="d">Dual File Lists</MenuSelectItem>
      <MenuSelectItem hotkey=""a>All Files</MenuSelectItem>
      <MenuSelectItem disabled>Program/File Lists</MenuSelectItem>
      <MenuSelectItem hotkey="p">Program List</MenuSelectItem>
      <MenuDivider />
      <MenuSelectItem hotkey="e" shortcut="Shift+F5">Repaint Screen</MenuSelectItem>
      <MenuSelectItem hotkey="r" shortcut="F5">Refresh</MenuSelectItem>
    </MenuItem>
    <MenuItem label="Tree">
      <MenuSelectItem shortcut="+" disabled>Expand One Level</MenuSelectItem>
      <MenuSelectItem shortcut="*" disabled>Expand Branch</MenuSelectItem>
      <MenuSelectItem shortcut="Ctrl+*" disabled>Expand All</MenuSelectItem>
      <MenuSelectItem shortcut="-" hotkey="c">Collapse Branch</MenuSelectItem>
    </MenuItem>
    <MenuItem label="Help">
      <MenuSelectItem hotkey="i">Index</MenuSelectItem>
      <MenuSelectItem hotkey="k">Keyboard</MenuSelectItem>
      <MenuSelectItem hotkey="s">Shell Basics</MenuSelectItem>
      <MenuSelectItem hotkey="c">Commands</MenuSelectItem>
      <MenuSelectItem hotkey="p">Procedures</MenuSelectItem>
      <MenuSelectItem hotkey="u">Using Help</MenuSelectItem>
      <MenuDivider />
      <MenuSelectItem hotkey="a" onClick={openDialog}>About Shell</MenuSelectItem>
    </MenuItem>
  </StyledMenuBar>
}