import { replaceImageList, replaceSearchTerm } from "../../actions";

export function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    list: state.list,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    replaceSearchTerm: term => dispatch(replaceSearchTerm(term)),
    replaceImageList: term => dispatch(replaceImageList(term)),
  };
}