import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Button } from "@chakra-ui/core";
import V from "../../styles/variables";

type ButtonProps = {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  outlined?: boolean;
};

const wrapperModifiers = {
  small: () => css`
    width: 78px;
    height: 30px;
    border-radius: 15px;
  `,
  medium: () => css`
    width: 118px;
    height: 39px;
    border-radius: 20px;
  `,
  large: () => css`
    width: 230px;
    height: 50px;
    border-radius: 25px;
  `,
  outlined: () => css`
    border: 1px solid ${V.twitter};
    color: ${V.twitter};
    background-color: ${V.primary};
    &:hover {
      background-color: ${V.twitter};
      color: ${V.white};
    }
  `,
};

type StyledButtonProps = {} & Pick<
  ButtonProps,
  "size" | "outlined" | "children"
>;

const StyledButton = styled(Button)<StyledButtonProps>`
  ${({ size, outlined }) => css`
    font-family: "Roboto, sans-serif";
    font-weight: bold;
    background-color: ${V.twitter};
    ${!!size && wrapperModifiers[size]()};
    ${!!outlined && wrapperModifiers.outlined()};
  `}
`;

const index = ({
  children,
  size = "medium",
  outlined = false,
}: ButtonProps) => {
  return (
    <StyledButton outlined={outlined} size={size}>
      {children}
    </StyledButton>
  );
};

export default index;
