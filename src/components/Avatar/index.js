import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function AvatarCustomize({ children, ...rest }) {
  return (
    <Avatar icon={<FontAwesomeIcon icon={faUser} />} {...rest}>
      {children}
    </Avatar>
  );
}

AvatarCustomize.defaultProps = {
  children: null,
};

AvatarCustomize.propTypes = {
  children: PropTypes.element,
};

export default AvatarCustomize;
