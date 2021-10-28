import
imageReducer, {
  saveInput,
  setImageSize,
  sendImageStart,
  sendImageSuccess,
  sendImageFailure,
  getImageFromHistory,
  getHoveredFaceId,
  resetImageState, initialState,
} from 'src/redux/image/image.reducer';
import { AnyAction } from '@reduxjs/toolkit';
import { imageData } from 'src/__fixtures__/reducers/image';
import { historyData } from 'src/__fixtures__/reducers/history';

describe('history reducer', () => {
  test('should return the initial state', () => {
    expect(imageReducer(undefined, {} as AnyAction))
      .toEqual(initialState);
  });
  test('should save image link input', () => {
    const { input } = imageReducer(initialState, saveInput('link'));
    expect(input).toEqual('link');
  });
  test('should save image size', () => {
    const imageSize = { width: 100, height: 100 };
    const { width, height } = imageReducer(initialState, setImageSize(imageSize));
    expect(width).toEqual(imageSize.width);
    expect(height).toEqual(imageSize.height);
  });
  test('should save image face id', () => {
    const { id } = imageReducer(initialState, getHoveredFaceId('id'));
    expect(id).toEqual('id');
  });
  test('should save image from history', () => {
    const image = historyData[0];
    const { input, imageUrl, width, height, data } = imageReducer(initialState, getImageFromHistory(image));
    expect(input).toEqual(image.link);
    expect(imageUrl).toEqual(image.link);
    expect(width).toEqual(0);
    expect(height).toEqual(0);
    expect(data).toEqual(image.data);
  });
  test('should reset image state', () => {
    const { input, imageUrl, width, height, data } = imageReducer(initialState, resetImageState());
    expect(input).toEqual(initialState.input);
    expect(imageUrl).toEqual(initialState.imageUrl);
    expect(width).toEqual(initialState.width);
    expect(height).toEqual(initialState.height);
    expect(data).toEqual(initialState.data);
  });
  describe('send image link', () => {
    test('should handle send image link start', () => {
      const { loading, imageUrl, data } = imageReducer(initialState, sendImageStart());
      expect(loading).toBe(true);
      expect(imageUrl).toBe('');
      expect(data).toStrictEqual([]);
    });
    test('should handle send image link success', () => {
      const { loading, imageUrl, data, error } = imageReducer(initialState, sendImageSuccess(imageData));
      expect(loading).toBe(false);
      expect(imageUrl).toBe('');
      expect(data).toBe(imageData);
      expect(error).toBe(null);
    });
    test('should handle send image link failure', () => {
      const { loading, error } = imageReducer(initialState, sendImageFailure(new Error()));
      expect(loading).toBe(false);
      expect(error instanceof Error).toBeTruthy();
    });
  });
});
