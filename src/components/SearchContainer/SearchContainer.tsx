import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Search from '../Search/Search';
import ImageList from '../ImageList/ImageList';
import LoadMore from "../LoadMore/LoadMore";
import { mapDispatchToProps, mapStateToProps } from './ReduxConnectorFunctions';
import { SearchContainerProps } from './SearchContainerInterface';
import './SearchContainer.css';
import { urlApi, methodApi, keyApi, formatApi } from "../../constants/ConstantsFlickrAPI";

class SearchContainer extends Component<SearchContainerProps> {
  pageSize = 10;

  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.addPage = this.addPage.bind(this);
  }

  handleChange(val: any) {
    this.props.replaceSearchTerm(val);
  }

  handleResponse(searchTerm: string, newSearch = true) {
    if (!searchTerm) {
      this.props.replaceImageList([]);
    } else if (newSearch) {
      this.props.resetPageNumber();
      setTimeout( () => {
        const linkAPI = `${urlApi}?${methodApi}&${formatApi}&${keyApi}&tags=${searchTerm}&per_page=${this.pageSize}&page=${this.props.page}`;
        axios.get(linkAPI).then((response) => {
          const data = response.data.photos.photo;
          this.props.replaceImageList(data)
        })
      });
    } else {
      const linkAPI = `${urlApi}?${methodApi}&${formatApi}&${keyApi}&tags=${searchTerm}&per_page=${this.pageSize}&page=${this.props.page}`;

      axios.get(linkAPI).then((response) => {
        let data = response.data.photos.photo;
        this.props.addPageToImageList(data);
      })
    }
  }

  addPage() {
    this.props.incrementPageNumber();
    setTimeout(() => this.handleResponse(this.props.searchTerm, false));
  }

  render() {
    const endBlock = this.props.list.length ? (<LoadMore addPage={this.addPage}/>) : null;

    return (
      <div id="container">
        <Search
          handleInputChange={this.handleChange}
          handleKeyDown={this.handleResponse}
          searchTerm={this.props.searchTerm}
        />
        <ImageList
          list={this.props.list}
        />
        {endBlock}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);