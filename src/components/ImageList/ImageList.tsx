import React, { Component } from 'react';
import { ImageListInterface } from './ImageListInterface';
import './ImageList.css';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from "react-virtualized";
import ImageMeasurer from "react-virtualized-image-measurer";
import MasonryComponent from "../Masonry/Masonry";

class ImageList extends Component<ImageListInterface, any> {
  defaultHeight = 250;
  defaultWidth = 200;

  constructor(props: ImageListInterface) {
    super(props);
  }

  render() {
    const propsList = this.props.list.map(d => {
      d['href'] = 'https://farm' + d.farm + '.staticflickr.com/'
        + d.server + '/' + d.id + '_' + d.secret + '.jpg';
      return d;
    });
    console.log('propsList', propsList)
    return (
    <ImageMeasurer
      items={propsList}
      image={item => item.href}
      defaultHeight={this.defaultHeight}
      defaultWidth={this.defaultWidth}
      >
      {( {itemsWithSizes} ) => (
        <MasonryComponent
          itemsWithSizes={itemsWithSizes}
        />
      )}
      </ImageMeasurer>
    )
  }
}

export default ImageList;
