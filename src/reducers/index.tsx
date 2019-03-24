const initialState = {
  searchTerm: '',
  list: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'REPLACE_SEARCH_TERM':
      return Object.assign({}, state, {
        searchTerm: action.payload
      });

    case 'REPLACE_IMAGE_LIST':
      return Object.assign({}, state, {
        list: action.payload
      });

    case 'ADD_PAGE_TO_IMAGE_LIST':
      return Object.assign({}, state, {
        list: state.list.concat(action.payload)
      });

    default:
      return state;
  }
}

export default rootReducer;