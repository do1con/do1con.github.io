import React from 'react';
import { Link } from 'gatsby';
import ProfileImage from 'components/Layouts/ProfileImage';
import GithubIcon from 'images/github.svg';
import MailIcon from 'images/mail.svg';

const Header: React.FC = function () {
  return (
    <header className="w-96 h-screen max-w-xs bg-green-500 fixed p-5">
      <h1 className="text-center font-extrabold">
        <Link to="/" className="text-2xl text-white hover:text-white">
          Seongsoo's Blog
        </Link>
      </h1>
      <ProfileImage />
      <p className="text-white text-xs break-words">
        안녕하세요. 음악듣기를 좋아하는 주니어 개발자입니다. 웹개발을 공부하고
        있습니다.
      </p>
      <div className="my-8 flex justify-center w-full">
        <div className="mx-1">
          <a href="https://github.com/do1con" target="_blank">
            <GithubIcon fill="#ffffff" width="24" height="24" />
          </a>
        </div>
        <div className="mx-1">
          <a href="mailto: kss7547@gmail.com">
            <MailIcon fill="#ffffff" width="24" height="24" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
