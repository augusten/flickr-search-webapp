import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import { SearchProps } from './SearchInterface';
import './Search.css';

const ENTER_KEY = 13;

class Search extends Component<SearchProps, any> {
  placeholder = 'Type in something and press enter to search Flickr!';

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
      this.props.handleKeyDown(searchTerm);
    }
  }

  render() {
    const searchTerm = this.props.searchTerm;

    return (
      <div className="input-wrapper">
        <Input
          className="input-material"
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