import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/model';
import { calculatePixelCrop, createImage, getCroppedImg } from 'src/redux/image/image.utils';
import { CroppedFaceElement, CroppedFaceSkeleton } from 'src/components/cropped-face/cropped-face.style';
import { CroppedImageProps } from 'src/components/cropped-face/cropped-face.interface';

const CroppedFace: React.FC<CroppedImageProps> = ({ box } : CroppedImageProps) => {
  const [croppedFace, setCroppedFace] = useState<string | null>(null);
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl);

  const showCroppedImage = useCallback(async () : Promise<void> => {
    const image = await createImage(imageUrl);
    const croppedImage : string = await getCroppedImg(
      image, calculatePixelCrop(image, box),
    );

    setCroppedFace(croppedImage);
  }, [box, imageUrl]);

  useEffect(() => {
    if (imageUrl) {
      showCroppedImage();
    }
  }, [imageUrl, showCroppedImage]);

  if (!croppedFace) {
    return <CroppedFaceSkeleton variant="rectangular" width={50} height={70} />;
  }

  return (
    <CroppedFaceElement url={croppedFace} />
  );
};

export default CroppedFace;
