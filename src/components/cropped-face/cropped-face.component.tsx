import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ClarifaiBoundingBox, RootState } from 'src/model';
import { calculatePixelCrop, createImage, getCroppedImg } from 'src/redux/image/image.utils';
import Skeleton from '@mui/material/Skeleton';
import { CroppedFaceElement } from 'src/components/cropped-face/cropped-face.style';

interface CroppedImageProps {
  box: ClarifaiBoundingBox
}

const CroppedFace: React.FC<CroppedImageProps> = ({ box } : CroppedImageProps) => {
  const [croppedFace, setCroppedFace] = useState<string | null>(null);
  const imageUrl = useSelector(({ image }: RootState) => image.imageUrl, shallowEqual);

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
    return <Skeleton variant="rectangular" width={50} height={70} sx={{ bgcolor: 'grey.700', marginTop: '10px' }} />;
  }

  return (
    <CroppedFaceElement url={croppedFace} />
  );
};

export default CroppedFace;
