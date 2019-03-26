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
import {
  cache,
  cellPositioner,
  cellPositionerConfig
} from "../../constants/ConstantsForImageGallery";

class ImageList extends Component<ImageListInterface, any> {
  masonryRef = null;

  constructor(props: ImageListInterface) {
    super(props);

    this.setMasonry = this.setMasonry.bind(this);
    this.reset = this.reset.bind(this);
  }

  setMasonry  (node) {
    this.masonryRef = node;
  };

  reset() {
    cache.clearAll();
    cellPositioner.reset(cellPositionerConfig);
    this.masonryRef.clearCellPositions();
  };

  render() {
    const propsList = this.props.list.map(d => {
      d['href'] = 'https://farm' + d.farm + '.staticflickr.com/'
        + d.server + '/' + d.id + '_' + d.secret + '.jpg';
      return d;
    });

    // If it's a new search reset the cache, cell positioner and cell potisions
    if (this.masonryRef && this.props.list.length === 10) this.reset();

    return (
      <div className="image-list-wrapper">
        <ImageMeasurer
          items={propsList}
          image={item => item.href}
          defaultHeight={window.outerHeight}
          defaultWidth={window.outerWidth}
          >
          {( {itemsWithSizes} ) => (
            <MasonryComponent
              itemsWithSizes={itemsWithSizes}
              setRef={this.setMasonry}
            />
          )}
        </ImageMeasurer>
      </div>
    )
  }
}

export default ImageList;
