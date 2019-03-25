import React, { Component } from 'react';
import { FlickrImageInterface } from './FlickrImageInterface';

class FlickrImage extends Component<FlickrImageInterface, any> {
  constructor(props: FlickrImageInterface) {
    super(props);
  }

  render() {
    const src = 'https://farm' + this.props.farmId + '.staticflickr.com/'
      + this.props.serverId + '/' + this.props.id + '_' + this.props.secret + '.jpg';

    return (
      <img src={src}/>
    )
  }
}

export default FlickrImage;