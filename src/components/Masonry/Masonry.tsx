import React, { Component } from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from "react-virtualized";
import {
  columnWidth,
  defaultHeight,
  cache,
  cellPositioner,
  keyMapper
} from "../../constants/ConstantsForImageGallery";
import { MasonryInterface } from "./MasonryInterface";

class MasonryComponent extends Component<MasonryInterface> {
  constructor(props: MasonryInterface) {
    super(props);
  }

  cellRenderer = (data) => {
    if (!data) {
      return;
    }
    let index = data.index;
    let key = data.key;
    let parent = data.parent;
    let style = data.style;

    const { item, size } = this.props.itemsWithSizes[index];
    const height = columnWidth * (size.height / size.width) || defaultHeight;

    return (
      <CellMeasurer cache={cache} index={index} key={key} parent={parent}>
        <div style={style}>
          {item.href && (
            <img
              src={item.href}
              alt={item.id}
              style={{
                height: height,
                width: columnWidth,
                display: "block"
              }}
            />
          )}
        </div>
      </CellMeasurer>
    );
  };

  render() {
    return (
      <Masonry
        cellCount={this.props.itemsWithSizes.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={this.cellRenderer}
        height={window.outerHeight}
        width={columnWidth * 3 + 30}
        keyMapper={keyMapper}
        ref={this.props.setRef}
      />
    );
  }
}

export default MasonryComponent;