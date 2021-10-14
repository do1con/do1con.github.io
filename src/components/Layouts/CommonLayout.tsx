import React from 'react';
import styled from '@emotion/styled';
import Header from 'components/Layouts/Header';
import Footer from 'components/Layouts/Footer';

interface props {
  children?: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const CommonLayout: React.FC<props> = ({ children }: props) => {
  return (
    <Container>
      <ContentWrapper>
        <Header />
        <div className="p-12 mx-auto mt-6 w-full max-w-4xl">{children}</div>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default CommonLayout;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;
