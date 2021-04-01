import React from 'react';
import PropTypes from 'prop-types';
import useAuth from 'src/hooks/useAuth';
import { MAvatar } from 'src/theme';
import createAvatar from 'src/utils/createAvatar';

// ----------------------------------------------------------------------

MyAvatar.propTypes = {
  className: PropTypes.string
};

function MyAvatar({ className, ...other }) {
  const { user } = useAuth();

  return (
    <MAvatar
      src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg"
      alt="This is image"
      {...other}
    ></MAvatar>
  );
}

export default MyAvatar;
