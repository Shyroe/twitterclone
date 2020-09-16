import React from "react";
import styled from "@emotion/styled";
import V from "../../styles/variables";

import Sidebar from "../Sidebar";
import Twitter from "../Twitter";
import Recommendations from "../Recommendations";

interface WrapperPageProps {}

export const WrapperPage = styled("div")<WrapperPageProps>`
  width: 100%;
  height: 100vh;
  background-color: ${V.primary};
`;

export const Wrapper = styled.div`
  max-width: 1380px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  /* border: 2px solid red; */
  display: flex;
`;

const Project = () => {
  return (
    <>
      <WrapperPage>
        <Wrapper>
          <Sidebar />
          <Twitter />
          <Recommendations />
        </Wrapper>
      </WrapperPage>
    </>
  );
};

export default Project;
