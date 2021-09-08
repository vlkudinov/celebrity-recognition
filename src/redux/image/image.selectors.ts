import { createSelector } from 'reselect';
import { RootState } from 'src/model';
import _ from 'lodash';

const selectImageState = (state : RootState) => state.image;

const selectImageBoundingBox = createSelector(
  [selectImageState],
  (state) => state.box,
);

const selectImageSize = createSelector(
  [selectImageState],
  (state) => ({ width: state.width, height: state.height }),
);

const selectImageConcepts = createSelector(
  [selectImageState],
  (state) => state.concepts,
);

export const selectFaceLocation = createSelector(
  [selectImageBoundingBox, selectImageSize],
  (box, { width, height }) => {
    if (box && height) {
      return {
        leftCol: box.left_col * width,
        topRow: box.top_row * height,
        rightCol: width - (box.right_col * width),
        bottomRow: height - (box.bottom_row * height),
      };
    }
    return null;
  },
);

export const selectResultValue = createSelector(
  [selectImageConcepts],
  (concepts) => _.maxBy(concepts, 'value'),
);
