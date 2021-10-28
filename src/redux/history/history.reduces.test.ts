import historyReducer, {
  getHistoryStart,
  getHistorySuccess,
  getHistoryFailure, initialState,
} from 'src/redux/history/history.reducer';
import { AnyAction } from '@reduxjs/toolkit';
import { historyData } from 'src/__fixtures__/reducers/history';

describe('history reducer', () => {
  test('should return the initial state', () => {
    expect(historyReducer(undefined, {} as AnyAction))
      .toEqual(initialState);
  });
  describe('load user history', () => {
    test('should handle get history start', () => {
      const { loading, error } = historyReducer(initialState, getHistoryStart());
      expect(loading).toBe(true);
      expect(error).toBe(null);
    });

    test('should handle get history in success', () => {
      const { loading, images } = historyReducer(initialState, getHistorySuccess(historyData));
      expect(loading).toBe(false);
      expect(images).toStrictEqual(historyData);
    });
    test('should handle get history failure', () => {
      const { loading, error } = historyReducer(initialState, getHistoryFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
  });
});
