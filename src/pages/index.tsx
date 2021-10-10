import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
// import GlobalStyle from 'components/Common/GlobalStyle';
// import Footer from 'components/Layouts/Footer';
// import Introduction from 'components/Layouts/Header';
import CommonLayout from 'components/Layouts/CommonLayout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <CommonLayout>
        <div>ㅇㅇㅇㅇ</div>
      </CommonLayout>
    </Container>
  );
};

export default IndexPage;
