import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ProfileImage from 'components/Main/ProfileImage';
import GithubIcon from 'images/github.svg';

const Introduction: FunctionComponent = function () {
  return (
    <header className="w-56 h-screen bg-green-500">
      <h1 className="text-center m-4">
        <Link to="/" className="text-2xl text-white hover:text-white">
          Seongsoo's Blog
        </Link>
      </h1>
      <ProfileImage />
      <p className="m-4 text-white text-xs break-words">
        안녕하세요. 음악듣기를 좋아하는 주니어 개발자입니다. 웹개발을 공부하고 있습니다.
      </p>
      <Div32px className="m-auto">
        <Link to="https://github.com/do1con">
          <GithubIcon fill="#ffffff" width="32" height="32" />
        </Link>
      </Div32px>
    </header>
  );
};

const Div32px = styled.div`
  width: 32px;
  height: 32px;
`;

export default Introduction;
