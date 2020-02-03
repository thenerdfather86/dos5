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
      // textSecondary: '#a8a8a8',
      textSecondary: '#f7f7fa',
      textDisabled: '#8ea8a8'
    },
    currentDrive: 'C',
    currentFolder: 'DOS',
    dialogs: {
      about: {isVisible: false}
    },
    folders: [
      {
        name: '',
        type: 'folder',
        contents: [
          {
            name: 'DOS',
            type: 'folder',
            contents: []
          },
          {
            name: 'STUFF',
            type: 'folder',
            contents: []
          }
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