import {addPageToImageList, incrementPageNumber, replaceImageList, replaceSearchTerm} from '../../actions';

export function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    list: state.list,
    page: state.page,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    replaceSearchTerm: term => dispatch(replaceSearchTerm(term)),
    replaceImageList: list => dispatch(replaceImageList(list)),
    addPageToImageList: list => dispatch(addPageToImageList(list)),
    incrementPageNumber: () => dispatch(incrementPageNumber()),
  };
}