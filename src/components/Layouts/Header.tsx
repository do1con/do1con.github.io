import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import ProfileImage from 'components/Layouts/ProfileImage';
import GithubIcon from 'images/github.svg';

const Header: React.FC = function () {
  return (
    <header className="w-96 h-screen max-w-xs bg-green-500 fixed">
      <h1 className="text-center m-4 font-extrabold">
        <Link to="/" className="text-2xl text-white hover:text-white">
          Seongsoo's Blog
        </Link>
      </h1>
      <ProfileImage />
      <p className="m-4 text-white text-xs break-words">
        안녕하세요. 음악듣기를 좋아하는 주니어 개발자입니다. 웹개발을 공부하고
        있습니다.
      </p>
      <Div24px className="m-auto">
        <a href="https://github.com/do1con">
          <GithubIcon fill="#ffffff" width="24" height="24" />
        </a>
      </Div24px>
    </header>
  );
};

const Div24px = styled.div`
  width: 24px;
  height: 24px;
`;

export default Header;
