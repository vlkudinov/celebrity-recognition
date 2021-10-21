import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserNameInitials } from 'src/redux/user/user.selectors';
import { AvatarProps } from 'src/components/avatar/avatar.interface';
import { AvatarString } from 'src/components/avatar/avatar.style';

const Avatar : React.FC<AvatarProps> = ({ size } : AvatarProps) => {
  const userNameInitials = useSelector(selectUserNameInitials);

  return (
    <AvatarString size={size}>{userNameInitials}</AvatarString>
  );
};

export default Avatar;
