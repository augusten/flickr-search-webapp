import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './LoadMore.css';
import { LoadMoreInterface } from "./LoadMoreInterface";

class LoadMore extends Component<LoadMoreInterface, any> {
  constructor(props: any) {
    super(props);

    this.onLoadMore = this.onLoadMore.bind(this);
  }

  onLoadMore() {
    this.props.addPage();
  }

  render() {
    return (
      <div className="load-more-wrapper">
        <Button
          variant="outlined"
          className="load-more-button"
          onClick={this.onLoadMore}
        >
          Load More
        </Button>
      </div>
    )
  }
}

export default LoadMore;