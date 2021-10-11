import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserNameInitials } from 'src/redux/user/user.selectors';
import { AvatarString } from './avatar.styles';
import { AvatarProps } from './avatar.interface';

const Avatar : React.FC<AvatarProps> = ({ size } : AvatarProps) => {
  const userNameInitials = useSelector(selectUserNameInitials);

  return (
    <AvatarString size={size}>{userNameInitials}</AvatarString>
  );
};

export default Avatar;
