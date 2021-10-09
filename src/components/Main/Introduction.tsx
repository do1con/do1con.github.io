import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';

const Introduction: FunctionComponent = function () {
  return (
    <header className="w-56 h-screen bg-green-500">
      <h1>
        <Link to="/">Seongsoo's Blog</Link>
      </h1>
      <ProfileImage />
      <div className="bg-gray-100 pt-6 text-center">안녕하세요</div>
    </header>
  );
};

export default Introduction;
