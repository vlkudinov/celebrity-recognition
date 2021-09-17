import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import { AvatarProps } from './avatar.interface';

const smallAvatar = {
  width: 35,
  height: 35,
  fontSize: '0.6em',
};

const mediumAvatar = {
  width: 45,
  height: 45,
  fontSize: '0.8em',
};

const largeAvatar = {
  width: 65,
  height: 65,
  fontSize: '1.8em',
};

const avatarSizeMapping : { [size: string]: Record<any, any> } = {
  sm: smallAvatar,
  md: mediumAvatar,
  lg: largeAvatar,
};

export const AvatarString = styled(Avatar)(({ theme, size = 'md' } : AvatarProps) => ({
  backgroundColor: theme?.palette.secondary.main,
  color: theme?.palette.grey['900'],
  fontWeight: 500,
  ...avatarSizeMapping[size],
}));
