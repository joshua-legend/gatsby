import React, {FC} from 'react'
import GlobalStyle from "components/Common/GlobalStyle";
import Introduction from "components/Main/Introduction";
import styled from "@emotion/styled";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const IndexPage: FC = () => {
  return (
      <Container>
          <GlobalStyle />
          <Introduction />
      </Container>
  )
}

export default IndexPage
