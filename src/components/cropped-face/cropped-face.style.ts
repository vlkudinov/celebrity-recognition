import styled from '@emotion/styled';
import { Skeleton } from '@mui/material';

export const CroppedFaceElement = styled.div(({ url }: { url: string }) => ({
  background: `url(${url}) no-repeat center`,
  backgroundSize: 'cover',
  height: 70,
  width: 50,
  marginTop: 10,
}));

export const CroppedFaceSkeleton = styled(Skeleton)(({ theme }) => ({
  marginTop: 10,
  backgroundColor: theme.palette.grey['700'],
}));
