import React, { Component } from 'react';
import axios from "axios";
import { SearchProps } from "./SearchInterfaces";

const urlApi = 'https://api.flickr.com/services/rest/';
const methodApi = 'method=flickr.photos.search';
const formatApi = 'format=json&nojsoncallback=1';
const keyApi = `api_key=${process.env.REACT_APP_API_KEY}`;

class Search extends Component<SearchProps, any> {
  pageSize = 10;
  pageNumber = 1;

  constructor(props: SearchProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e: any) {
    const searchTerm = e.target.value;
    this.props.handleInputChange(searchTerm);
  }

  handleKeyDown(e: any) {
    const ENTER_KEY = 13;

    if (e.keyCode === ENTER_KEY) {
      const searchTerm = e.target.value;
      const linkAPI = `${urlApi}?${methodApi}&${formatApi}&${keyApi}&tags=${searchTerm}&per_page=${this.pageSize}&page=${this.pageNumber}`;

      axios.get(linkAPI).then((response) => {
        let data = response.data.photos.photo;
        this.props.handleKeyDown(data);
      })
    }
  }

  render() {
    const searchTerm = this.props.searchTerm;

    return (
      <div>
        <span>Container Bitch</span>
        <input
          type="text"
          value={searchTerm}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    )
  }
}

export default Search;