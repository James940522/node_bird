import {Avatar, Card, Button} from 'antd';
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({setIsLogin}) => {
  const onLogOut = useCallback(() => {
    setIsLogin(false);
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">짹짹</div>,
        <div key="following">팔로잉</div>,
        <div key="follower">팔로워</div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>ZC</Avatar>} title="ZeroCho"></Card.Meta>
      <Button
        onClick={() => {
          onLogOut();
        }}
      >
        로그아웃
      </Button>
    </Card>
  );
};

UserProfile.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default UserProfile;
