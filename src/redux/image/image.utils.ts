import { ClarifaiBoundingBox } from 'src/model';

export const createImage = (url: string) : Promise<HTMLImageElement> => new Promise((resolve, reject) => {
  const image = new Image();
  image.addEventListener('load', () => resolve(image));
  image.addEventListener('error', (error) => reject(error));
  image.crossOrigin = 'anonymous';
  image.src = `${process.env.REACT_APP_CORS_PROXY}${url}`;
});

interface PixelCrop {
  width: number;
  height: number;
  x: number;
  y: number

}

export const getCroppedImg = async (image: HTMLImageElement, pixelCrop: PixelCrop) : Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const maxSize = Math.max(image.width, image.height);
  const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

  canvas.width = safeArea;
  canvas.height = safeArea;

  if (ctx) {
    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5,
    );
    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - pixelCrop.x),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - pixelCrop.y),
    );
  }

  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      if (file) {
        resolve(URL.createObjectURL(file));
      }
    }, 'image/jpeg');
  });
};

export const calculatePixelCrop = (image : HTMLImageElement, boundingBox: ClarifaiBoundingBox) => ({
  width: (boundingBox.right_col - boundingBox.left_col) * image.width,
  height: (boundingBox.bottom_row - boundingBox.top_row) * image.height,
  x: boundingBox.left_col * image.width,
  y: boundingBox.top_row * image.height,
});
