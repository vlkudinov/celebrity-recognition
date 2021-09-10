import { createSelector } from 'reselect';
import { RootState } from 'src/model';
import _ from 'lodash';

const selectHistoryState = (state : RootState) => state.history;

const selectImageList = createSelector(
  [selectHistoryState],
  (history) => history.images,
);

export const selectSortedImageList = createSelector(
  [selectImageList],
  (images) => _.sortBy(images, 'created_at').reverse(),
);
