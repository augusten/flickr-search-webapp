import React, { Component } from 'react';
import { ImageListInterface } from './ImageListInterface';
import FlickrImage from '../Image/FlickrImage';
import './ImageList.css';

class ImageList extends Component<ImageListInterface, any> {
  constructor(props: ImageListInterface) {
    super(props);
  }

  render() {
    return (
      <div className="image-list">
        {this.props.list.map(function(d: any) {
          return (<FlickrImage
            key={d.id}
            id={d.id}
            farmId={d.farm}
            serverId={d.server}
            secret={d.secret}/>)
        })}
      </div>
    );
  }
}

export default ImageList;