import React, {useState} from 'react';
import UserProfile from './UserProfile';
import LoginForm from './Loginform';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import {Col, Input, Menu, Row} from 'antd';

const SearchInput = styled(Input.Search)`
  vertical-align: 'middle';
`;

const AppLayout = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key={'main'}>
          <Link href="/">
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={'profile-page'}>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key={'search-bar'}>
          <SearchInput
            className="search-input"
            enterButton
            style={{verticalAlign: 'middle'}}
          />
        </Menu.Item>
        <Menu.Item key={'signup-page'}>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLogin ? (
            <UserProfile setIsLogin={setIsLogin} />
          ) : (
            <LoginForm setIsLogin={setIsLogin} />
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.fmkorea.com/fashion"
            target="_blank"
            rel="noreferrer noopner"
          >
            패갤
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
