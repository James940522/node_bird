import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
const Profile = () => {
  return (
    <AppLayout>
      <Head>
        <meta charSet="utf-8" />
        <title>내 프로필 | NodeBird</title>
      </Head>
      <div>profile</div>
    </AppLayout>
  );
};

export default Profile;
