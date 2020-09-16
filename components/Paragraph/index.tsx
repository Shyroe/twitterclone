import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Text } from "@chakra-ui/core";
import V from "../../styles/variables";

interface ParagraphProps {
  children: React.ReactNode;
  size?: "small" | "medium";
  color?: "white" | "dark" | "primary";
}

const wrapperModifiers = {
  small: () => css`
    font-size: 14px;
    font-weight: 300;
    line-height: 16px;
    color: ${V.gray};
  `,
  medium: () => css`
    font-size: 15px;
    font-weight: normal;
    line-height: 18px;
    color: ${V.gray};
  `,
  white: () => css`
    color: ${V.white};
  `,
  dark: () => css`
    color: ${V.gray};
  `,
  primary: () => css`
    color: ${V.twitter};
  `,
};

const StyledParagraph = styled(Text)<ParagraphProps>`
  ${({ size, color }) => css`
    font-family: "Roboto, sans-serif";
    ${!!size && wrapperModifiers[size]()};
    ${!!color && wrapperModifiers[color]()};
  `}
`;

const index = ({
  children,
  size = "medium",
  color = "white",
  ...props
}: ParagraphProps) => {
  return (
    <StyledParagraph {...props} color={color} size={size}>
      {children}
    </StyledParagraph>
  );
};

export default index;
