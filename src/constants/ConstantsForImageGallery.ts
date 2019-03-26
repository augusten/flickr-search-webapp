import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from "react-virtualized";

export const columnWidth = 300;
export const defaultHeight = 400;
export const defaultWidth = columnWidth;

// Default sizes help Masonry decide how many images to batch-measure
export const cache = new CellMeasurerCache({
  defaultHeight,
  defaultWidth,
  fixedWidth: true
});

// Our masonry layout will use 3 columns with a 10px gutter between
export const cellPositionerConfig = {
  cellMeasurerCache: cache,
  columnCount: 3,
  columnWidth,
  spacer: 10
};

export const cellPositioner = createMasonryCellPositioner(cellPositionerConfig);
export const keyMapper = (item => item);