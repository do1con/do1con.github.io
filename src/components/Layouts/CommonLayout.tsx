import React from 'react';
import styled from '@emotion/styled';
import Header from 'components/Layouts/Header';
import Footer from 'components/Layouts/Footer';

interface props {
  children?: React.ReactNode;
}

const CommonLayout: React.FC<props> = ({ children }: props) => {
  return (
    <>
      <ContentWrapper>
        <Header />
        {children}
      </ContentWrapper>
      <Footer />
    </>
  );
};

export default CommonLayout;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;
