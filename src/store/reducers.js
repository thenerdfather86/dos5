export const globalStateReducer = (state, action) => {
  switch (action.type) {
    case 'set_drive':
      return {
        ...state,
        dos: {
          ...state.dos,
          currentDrive: action.payload
        }
      }
    case 'toggle_dialog':
      return {
        ...state,
        dos: {
          ...state.dos,
          dialogs: {
            ...state.dos.dialogs,
            [action.dialog]: {
              isVisible: action.newState
            }
          }
        }
      }
    case 'set_folder':
      return {
        ...state,
        dos: {
          ...state.dos,
          currentFolder: action.payload
        }
      }
    default:
      return state
  }
}