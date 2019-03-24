import React, { Component } from 'react';
import { ImageListInterface } from "./ImageListInterfaces";

class ImageList extends Component<ImageListInterface, any> {
  constructor(props: ImageListInterface) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map(function(d: any) {
          return (<li key={d.id}>{d.id}</li>)
        })}
      </div>
    );
  }
}

export default ImageList;