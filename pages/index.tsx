import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import HomeHello from '../components/HomeHello';

const HomePage: NextPage = () => (
  <div>
    <HomeHello />
    <div>
      <Link href="/user/profile">go user page</Link>
    </div>
    <div>
      <Link href="/notExist">go not exist page</Link>
    </div>
  </div>
);

// SSR here
HomePage.getInitialProps = async () => {
  return {};
};

export default HomePage;
