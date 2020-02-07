export default (state = {}, action) => {
    switch (action.type) {
      case 'EJEMPLO':
        return {
          ...state,
          dataEjemplo: action.data
        }
      default:
        return state;
    }
  }