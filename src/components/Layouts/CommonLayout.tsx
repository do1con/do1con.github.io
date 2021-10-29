import React from 'react';
import styled from '@emotion/styled';
import Header from 'components/Layouts/Header';
import { Provider } from 'context/index';

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
    <Provider>
      <Container>
        <ContentWrapper>
          <Header />
          <div className="MD:w-0 LG:w-56 MD:h-16 LG:h-full"></div>
          <div className="SM:p-8 LG:p-16 mx-auto MD:mt-8 LG:mt-6 w-full max-w-4xl pt-16">
            {children}
          </div>
        </ContentWrapper>
      </Container>
    </Provider>
  );
};

export default CommonLayout;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
`;
