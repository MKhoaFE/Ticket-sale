const DarkModeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT": {
      return {
        darkMode: true,
      };
    }
    case "DARK": {
      return {
        darkMode: false,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;
