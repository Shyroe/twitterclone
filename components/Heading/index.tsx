import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Heading } from "@chakra-ui/core";
import V from "../../styles/variables";

interface HeadingProps {
  children: React.ReactNode;
}

const StyledHeading = styled(Heading)`
  font-family: "Roboto, sans-serif";
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: ${V.white};
`;

const index = ({ children, ...props }: HeadingProps) => {
  return <StyledHeading {...props}>{children}</StyledHeading>;
};

export default index;
