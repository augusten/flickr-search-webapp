import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Search from '../Search/Search';
import ImageList from '../ImageList/ImageList';
import LoadMore from "../LoadMore/LoadMore";
import { mapDispatchToProps, mapStateToProps } from './ReduxConnectorFunctions';
import { SearchContainerProps } from './SearchContainerInterface';
import './SearchContainer.css';

const urlApi = 'https://api.flickr.com/services/rest/';
const methodApi = 'method=flickr.photos.search';
const formatApi = 'format=json&nojsoncallback=1';
const keyApi = `api_key=${process.env.REACT_APP_API_KEY}`;

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

  handleResponse(searchTerm: string) {
    if (!searchTerm) {
      this.props.replaceImageList([]);
    } else {
      const linkAPI = `${urlApi}?${methodApi}&${formatApi}&${keyApi}&tags=${searchTerm}&per_page=${this.pageSize}&page=${this.props.page}`;

      axios.get(linkAPI).then((response) => {
        let data = response.data.photos.photo;
        if (this.props.page === 1) {
          this.props.replaceImageList(data);
        } else {
          this.props.addPageToImageList(data);
        }
      })
    }
  }

  addPage() {
    this.props.incrementPageNumber();
    setTimeout(() => this.handleResponse(this.props.searchTerm));
  }

  render() {
    // TODO: make LoadMore conditional
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