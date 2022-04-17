import React, {useState, useEffect, useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button} from 'antd';
import Link from 'next/dist/client/link';
import styled from 'styled-components';

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({setIsLogin}) => {
  const [loginData, setLoginData] = useState({id: '', password: ''});
  const style = useMemo(
    () => ({
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'space-between',
    }),
    [],
  );

  const handleLoginData = (data) => {
    console.log(data);
    setLoginData({...loginData, ...data});
  };

  const time = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setIsLogin(true));
      }, 1500);
    });
  };
  const onSubmitForm = useCallback(async () => {
    await time();
    alert('성공!');
  }, []);

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <Input
          name="user-id"
          required
          value={loginData.id}
          onChange={(event) => {
            handleLoginData({id: event.target.value});
          }}
        />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <Input
          name="user-password"
          type="password"
          required
          value={loginData.password}
          onChange={(event) => {
            handleLoginData({password: event.target.value});
          }}
        />
      </div>
      <div style={style}>
        <Button
          type="primary"
          htmlType="submit"
          loading={false}
          onClick={() => {
            onSubmitForm();
          }}
        >
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </div>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};

export default LoginForm;
