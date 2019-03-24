import React, { Component } from 'react';
import { FlickrImageInterface } from './FlickrImageInterface';
import './FlickrImage.css';

class FlickrImage extends Component<FlickrImageInterface, any> {
  constructor(props: FlickrImageInterface) {
    super(props);
  }

  render() {
    const src = 'https://farm' + this.props.farmId + '.staticflickr.com/'
      + this.props.serverId + '/' + this.props.id + '_' + this.props.secret + '.jpg';

    return (
      <img className="image" src={src}/>
    )
  }
}

export default FlickrImage;