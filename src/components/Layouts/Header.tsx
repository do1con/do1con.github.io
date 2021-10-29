import React, { useState } from 'react';
import { Link } from 'gatsby';
import ProfileImage from 'components/Layouts/ProfileImage';
import GithubIcon from 'images/github.svg';
import MailIcon from 'images/mail.svg';
import Hamburger from 'images/Hamburger.svg';

// sm:max-w-full md:max-w-72 lg:max-w-xs
const Header: React.FC = function () {
  const [headerOpened, setHeaderOpened] = useState<boolean>(false);
  return (
    <header
      className={`MD:${
        headerOpened ? 'h-full' : 'h-16'
      } LG:h-screen bg-green-500 fixed LG:p-5 MD:p-4 LG:w-56 MD:w-full MD:overflow-hidden z-50`}
    >
      <div className="MD:absolute LG:object-none MD:overflow-visible LG:overflow-hidden w-0 h-0 top-14px left-14px">
        <button
          className="cursor-pointer"
          onClick={() => {
            setHeaderOpened(!headerOpened);
          }}
        >
          <Hamburger fill="#ffffff" />
        </button>
      </div>
      <h1 className="text-center font-extrabold">
        <Link
          to="/"
          className="LG:text-xl MD:text-lg text-white hover:text-white"
        >
          Seongsoo's Blog
        </Link>
      </h1>
      <ProfileImage />
      <p className="text-white text-xs break-words text-center">
        안녕하세요. <br />
        음악과 독서를 좋아하는 주니어 개발자입니다. <br />
        웹개발을 공부하고 있습니다.
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
