import React, { createContext, useContext, useReducer } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { globalStateReducer } from './store/reducers'

const StoreContext = createContext([{}, () => {}])

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background: ${props => props.theme.background}EE;
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`

const initialState = {
  styles: {
    theme: {}
  },
  dos: {
    font: `'Oxygen Mono', monospace`,
    colors: {
      white: '#fcfcfc',
      black: '#001616',
      blue: '#0000a8',
      background: '#00a8a8',
      text: '#000b0b',
      sectionTitleBackground: '#a8a8a8',
      selectedBackground: '#0000a8',
      selectedText: '#fcfcfc',
      textSecondary: '#f7f7fa',
      textDisabled: '#8ea8a8'
    },
    currentDrive: 'C:',
    currentFolder: '\\DOS',
    currentFile: 6,
    dialogs: {
      about: {isVisible: false}
    },
    tree: [
      {
        id: 0,
        filename: 'C:\\',
        ext: 'DIR',
        isExpanded: true,
        children: [
          { id: 1,
            filename: 'DOS',
            ext: 'DIR',
            isExpanded: false,
            children: [
              { id: 6, filename: '4201', ext: 'CPI', size: 6404, modified: '04-09-91', contents: '' },
              { id: 7, filename: '4208', ext: 'CPI', size: 720, modified: '04-09-91', contents: '' },
              { id: 8, filename: '5202', ext: 'CPI', size: 395, modified: '04-09-91', contents: '' },
              { id: 9, filename: 'ANSI', ext: 'SYS', size: 9029, modified: '04-09-91', contents: '' },
              { id: 10, filename: 'APPEND', ext: 'EXE', size: 10774, modified: '04-09-91', contents: '' },
              { id: 11, filename: 'APPNOTES', ext: 'TXT', size: 8723, modified: '04-09-91', contents: '' },
              { id: 12, filename: 'ASSIGN', ext: 'COM', size: 6399, modified: '04-09-91', contents: '' },
              { id: 13, filename: 'ATTRIB', ext: 'EXE', size: 15796, modified: '04-09-91', contents: '' },
              { id: 14, filename: 'BACKUP', ext: 'EXE', size: 36092, modified: '04-09-91', contents: '' },
              { id: 15, filename: 'CHKDSK', ext: 'EXE', size: 16200, modified: '04-09-91', contents: '' },
              { id: 16, filename: 'COMMAND', ext: 'COM', size: 47845, modified: '04-09-91', contents: '' },
              { id: 17, filename: 'COMP', ext: 'EXE', size: 14282, modified: '04-09-91', contents: '' },
              { id: 18, filename: 'COUNTRY', ext: 'SYS', size: 17069, modified: '04-09-91', contents: '' },
              { id: 19, filename: 'DEBUG', ext: 'EXE', size: 20634, modified: '04-09-91', contents: '' },
              { id: 20, filename: 'DISKCOMP', ext: 'COM', size: 10652, modified: '04-09-91', contents: '' },
              { id: 21, filename: 'DISKCOPY', ext: 'COM', size: 11793, modified: '04-09-91', contents: '' },
              { id: 22, filename: 'DISPLAY', ext: 'SYS', size: 15792, modified: '04-09-91', contents: '' },
              { id: 23, filename: 'DOSHELP', ext: 'HLP', size: 5651, modified: '04-09-91', contents: '' },
              { id: 24, filename: 'DOSKEY', ext: 'COM', size: 5883, modified: '04-09-91', contents: '' },
              { id: 25, filename: 'DOSSHELL', ext: 'COM', size: 4623, modified: '04-09-91', contents: '' },
              { id: 26, filename: 'DOSHELL', ext: 'EXE', size: 235484, modified: '04-09-91', contents: '' },
              { id: 27, filename: 'DOSSHELL', ext: 'GRB', size: 4421, modified: '04-09-91', contents: '' },
              { id: 28, filename: 'DOSSHELL', ext: 'VID', size: 9462, modified: '04-09-91', contents: '' },
              { id: 29, filename: 'DOSSHELL', ext: 'SWP', size: 10033, modified: '04-09-91', contents: '' },
              { id: 30, filename: 'DOSSHELL', ext: 'HLP', size: 161763, modified: '04-09-91', contents: '' },
              { id: 31, filename: 'DOSSHELL', ext: 'INI', size: 16908, modified: '04-09-91', contents: '' },
              { id: 32, filename: 'DOSSWAP', ext: 'EXE', size: 18756, modified: '04-09-91', contents: '' },
              { id: 33, filename: 'DRIVER', ext: 'SYS', size: 5409, modified: '04-09-91', contents: '' },
              { id: 34, filename: 'EDIT', ext: 'HLP', size: 17898, modified: '04-09-91', contents: '' },
              { id: 35, filename: 'EDIT', ext: 'COM', size: 413, modified: '04-09-91', contents: '' },
              { id: 36, filename: 'EDLIN', ext: 'EXE', size: 12642, modified: '04-09-91', contents: '' },
              { id: 37, filename: 'EGA', ext: 'SYS', size: 4885, modified: '04-09-91', contents: '' },
              { id: 38, filename: 'EGA', ext: 'COP', size: 58873, modified: '04-09-91', contents: '' },
              { id: 39, filename: 'EMM386', ext: 'EXE', size: 91742, modified: '04-09-91', contents: '' },
              { id: 40, filename: 'EXE2BIN', ext: 'EXE', size: 8424, modified: '04-09-91', contents: '' },
              { id: 41, filename: 'EXPAND', ext: 'EXE', size: 14563, modified: '04-09-91', contents: '' },
              { id: 42, filename: 'FASTOPEN', ext: 'EXE', size: 12050, modified: '04-09-91', contents: '' },
              { id: 43, filename: 'FC', ext: 'EXE', size: 18650, modified: '04-09-91', contents: '' },
              { id: 44, filename: 'FDISK', ext: 'EXE', size: 57224, modified: '04-09-91', contents: '' },
              { id: 45, filename: 'FIND', ext: 'EXE', size: 9770, modified: '04-09-91', contents: '' },
              { id: 46, filename: 'FORMAT', ext: 'COM', size: 32911, modified: '04-09-91', contents: '' },
              { id: 47, filename: 'GORILLA', ext: 'BAS', size: 23434, modified: '04-09-91', contents: '' },
              { id: 48, filename: 'GRAFTABL', ext: 'COM', size: 11205, modified: '04-09-91', contents: '' },
              { id: 49, filename: 'GRAPHICS', ext: 'COM', size: 19694, modified: '04-09-91', contents: '' },
              { id: 50, filename: 'GRAPHICS', ext: 'PRO', size: 21232, modified: '04-09-91', contents: '' },
              { id: 51, filename: 'HELP', ext: 'EXE', size: 11473, modified: '04-09-91', contents: '' },
              { id: 52, filename: 'HIMEM', ext: 'SYS', size: 11552, modified: '04-09-91', contents: '' },
              { id: 53, filename: 'JOIN', ext: 'EXE', size: 17880, modified: '04-09-91', contents: '' },
              { id: 54, filename: 'KEYB', ext: 'COM', size: 14986, modified: '04-09-91', contents: '' },
              { id: 55, filename: 'KEYBOARD', ext: 'SYS', size: 34697, modified: '04-09-91', contents: '' },
              { id: 56, filename: 'LABEL', ext: 'EXE', size: 9390, modified: '04-09-91', contents: '' },
              { id: 57, filename: 'LCD', ext: 'CPI', size: 10753, modified: '04-09-91', contents: '' },
              { id: 58, filename: 'LOADFIX', ext: 'COM', size: 1131, modified: '04-09-91', contents: '' },
              { id: 59, filename: 'MEM', ext: 'EXE', size: 39818, modified: '04-09-91', contents: '' },
              { id: 60, filename: 'MIRROR', ext: 'COM', size: 18169, modified: '04-09-91', contents: '' },
              { id: 61, filename: 'MODE', ext: 'COM', size: 23537, modified: '04-09-91', contents: '' },
              { id: 62, filename: 'MONEY', ext: 'BAS', size: 46225, modified: '04-09-91', contents: '' },
              { id: 63, filename: 'MORE', ext: 'COM', size: 2618, modified: '04-09-91', contents: '' },
              { id: 64, filename: 'MSHERC', ext: 'COM', size: 6934, modified: '04-09-91', contents: '' },
              { id: 65, filename: 'NIBBLES', ext: 'BAS', size: 24103, modified: '04-09-91', contents: '' },
              { id: 66, filename: 'NLSFUNC', ext: 'EXE', size: 7052, modified: '04-09-91', contents: '' },
              { id: 67, filename: 'PACKING', ext: 'LST', size: 2381, modified: '04-09-91', contents: '' },
              { id: 68, filename: 'PRINT', ext: 'EXE', size: 15656, modified: '04-09-91', contents: '' },
              { id: 69, filename: 'PRINTER', ext: 'SYS', size: 18804, modified: '04-09-91', contents: '' },
              { id: 70, filename: 'QBASIC', ext: 'HLP', size: 130810, modified: '04-09-91', contents: '' },
              { id: 71, filename: 'QBASIC', ext: 'EXE', size: 254799, modified: '04-09-91', contents: '' },
              { id: 72, filename: 'RAMDRIVE', ext: 'SYS', size: 5873, modified: '04-09-91', contents: '' },
              { id: 73, filename: 'README', ext: 'TXT', size: 13739, modified: '04-09-91', contents: '' },
              { id: 74, filename: 'RECOVER', ext: 'EXE', size: 9146, modified: '04-09-91', contents: '' },
              { id: 75, filename: 'REMLINE', ext: 'BAS', size: 12314, modified: '04-09-91', contents: '' },
              { id: 76, filename: 'REPLACE', ext: 'EXE', size: 20226, modified: '04-09-91', contents: '' },
              { id: 77, filename: 'RESTORE', ext: 'EXE', size: 38294, modified: '04-09-91', contents: '' },
              { id: 78, filename: 'SETVER', ext: 'EXE', size: 12007, modified: '04-09-91', contents: '' },
              { id: 79, filename: 'SHARE', ext: 'EXE', size: 10912, modified: '04-09-91', contents: '' },
              { id: 80, filename: 'SMARTDRV', ext: 'SYS', size: 8335, modified: '04-09-91', contents: '' },
              { id: 81, filename: 'SORT', ext: 'EXE', size: 6938, modified: '04-09-91', contents: '' },
              { id: 82, filename: 'SUBST', ext: 'EXE', size: 18478, modified: '04-09-91', contents: '' },
              { id: 83, filename: 'SYS', ext: 'COM', size: 13440, modified: '04-09-91', contents: '' },
              { id: 84, filename: 'TREE', ext: 'COM', size: 6901, modified: '04-09-91', contents: '' },
              { id: 85, filename: 'UNDELETE', ext: 'EXE', size: 13924, modified: '04-09-91', contents: '' },
              { id: 86, filename: 'UNFORMAT', ext: 'COM', size: 18576, modified: '04-09-91', contents: '' },
              { id: 87, filename: 'XCOPY', ext: 'EXE', size: 15804, modified: '04-09-91', contents: '' },
              { id: 88, filename: 'NEWFOLDER', ext: 'DIR', isExpanded: false, children: [] }
            ]},
          { id: 2, filename: 'AUTOEXEC', ext: 'BAT', size: 71, modified: '04-09-91',
            contents: `
              @ECHO OFF
              PROMPT $p$g
              PATH C:\\DOS
              SET TEMP=C:\\DOS
              C:\\DOS\\DOSSHELL`
          },
          { id: 3,filename: 'COMMAND', ext: 'COM', size: 47845, modified: '04-09-91', contents: '' },
          { id: 4,filename: 'CONFIG', ext: 'SYS', size: 71, modified: '04-09-91', contents: '' },
          { id: 5,filename: 'WINA20', ext: '386', size: 9349, modified: '04-09-91', contents: '' },
          { id: 89, filename: 'NEWFOLDER2', ext: 'DIR', isExpanded: false, children: [
            { id: 90, filename: 'NEWFOLDER', ext: 'DIR', isExpanded: false, children: [] }
          ] }
        ]
      }
    ]
  }
}

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState)

  return (
    <StoreContext.Provider value={[state, dispatch]}>
      <ThemeProvider theme={state.styles.theme}>
      <GlobalStyles />
        {children}
      </ThemeProvider>
    </StoreContext.Provider>
  )
}

const useStore = props => useContext(StoreContext)

export { StoreContext, StoreProvider, useStore }