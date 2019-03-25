const initialState = {
  searchTerm: '',
  list: [],
  page: 1
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

    case 'INCREMENT_PAGE_NUMBER':
      return Object.assign({}, state, {
        page: state.page + 1
      });

    case 'RESET_PAGE_NUMBER':
      return Object.assign({}, state, {
        page: 1
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