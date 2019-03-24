import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import axios from 'axios';
import { SearchProps } from './SearchInterfaces';
import './Search.css';

const urlApi = 'https://api.flickr.com/services/rest/';
const methodApi = 'method=flickr.photos.search';
const formatApi = 'format=json&nojsoncallback=1';
const keyApi = `api_key=${process.env.REACT_APP_API_KEY}`;
const ENTER_KEY = 13;

class Search extends Component<SearchProps, any> {
  pageSize = 10;
  pageNumber = 1;
  placeholder = 'Type in a search word and press enter';

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
    if (e.keyCode === ENTER_KEY) {
      const searchTerm = this.props.searchTerm;

      if (!searchTerm) {
        this.props.handleKeyDown([]);
      } else {
        const linkAPI = `${urlApi}?${methodApi}&${formatApi}&${keyApi}&tags=${searchTerm}&per_page=${this.pageSize}&page=${this.pageNumber}`;

        axios.get(linkAPI).then((response) => {
          let data = response.data.photos.photo;
          this.props.handleKeyDown(data);
        })
      }
    }
  }

  render() {
    const searchTerm = this.props.searchTerm;

    return (
      <div id="input-wrapper">
        <Input
          id="input-field"
          fullWidth={true}
          placeholder={this.placeholder}
          value={searchTerm}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
      </div>
    )
  }
}

export default Search;