import React, { Component } from 'react';
import { connect } from "react-redux";
import Search from "../Search/Search";
import ImageList from "../ImageList/ImageList";
import { mapDispatchToProps, mapStateToProps } from "./ReduxConnectorFunctions";
import { SearchContainerProps } from "./SearchContainerInterfaces";

class SearchContainer extends Component<SearchContainerProps> {
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
  }

  handleChange(val: any) {
    this.props.replaceSearchTerm(val);
  }

  handleResponse(data: any[]) {
    this.props.replaceImageList(data);
  }

  render() {
    console.log('this.props', this.props);

    return (
      <div>
        <div className="search">
          <Search
            handleInputChange={this.handleChange}
            handleKeyDown={this.handleResponse}
            searchTerm={this.props.searchTerm}
          />
        </div>
        <div className="image-list">
          <ImageList
            list={this.props.list}
          />
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);