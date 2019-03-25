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
      <ul id="gallery" className="grid">
          {this.props.list.map(function(d: any, index: number) {
            return (<li key={"li-" + index + d.id} className="image-list-item">
              <figure key={"figure-" + index + d.id} className="grid__figure">
                <FlickrImage
                  key={d.id + index}
                  id={d.id}
                  farmId={d.farm}
                  serverId={d.server}
                  secret={d.secret}
                />
              </figure>
            </li>)
          })}
      </ul>
    );
  }
}

export default ImageList;