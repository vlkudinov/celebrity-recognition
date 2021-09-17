import { createSelector } from 'reselect';
import { RootState } from 'src/model';

const selectHistoryState = (state : RootState) => state.history;

export const selectImageList = createSelector(
  [selectHistoryState],
  (history) => history.images,
);
