import styled from '@emotion/styled';

export const CroppedFaceElement = styled.div(({ url }: { url: string }) => ({
  background: `url(${url}) no-repeat center #fc0`,
  backgroundSize: 'cover',
  height: 70,
  width: 50,
  marginTop: 10,
}));
