import { createSelector } from 'reselect';
import { RootState } from 'src/model';

const selectImageState = (state : RootState) => state.image;

const selectImageData = createSelector(
  [selectImageState],
  (state) => state.data,
);

const selectImageSize = createSelector(
  [selectImageState],
  (state) => ({ width: state.width, height: state.height }),
);

export const selectFaceLocation = createSelector(
  [selectImageData, selectImageSize],
  (data, { width, height }) => {
    if (data && height) {
      return data.map(({ id, box, name }) => {
        const boundingBox = {
          leftCol: box.left_col * width,
          topRow: box.top_row * height,
          rightCol: width - (box.right_col * width),
          bottomRow: height - (box.bottom_row * height),
        };

        return { id, name, boundingBox };
      });
    }
    return [];
  },
);

export const selectPredictionList = createSelector(
  [selectImageData],
  (data) => data.map(({ id, concepts, box }) => ({
    id,
    concepts,
    box,
  })),
);
