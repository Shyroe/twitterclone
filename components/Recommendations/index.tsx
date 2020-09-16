import React from "react";
import {
  InputGroup,
  Input,
  Box,
  Flex,
  IconButton,
  Text,
  Divider,
} from "@chakra-ui/core";

import { Search } from "emotion-icons/material";
import styled from "@emotion/styled";
import V from "../../styles/variables";
import Button from "../Button";

const StyledInput = styled(Input)``;
const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  padding: 25px 0;
  padding-left: 30px;
`;

const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  margin: 25px 0;
  width: 85%;
  padding: 20px;
  background-color: ${V.secondary};
`;

type WrapperProps = {
  children: React.ReactNode;
};

// const WrapperComponent = ({ children, ...props }: WrapperProps) => {
//   return <WrapperCard {...props}>{children}</WrapperCard>;
// };

const Recommendations = () => {
  function cardAvatar() {
    return (
      <Flex alignItems="center">
        <Box
          marginRight="10px"
          bg="gray"
          width="50px"
          height="50px"
          borderRadius="50%"
        />
        <Flex flexDir="column" marginRight="auto">
          <Text color={V.white} size="medium">
            Luiz Batanero
          </Text>
          <Text color={V.gray} size="small">
            @luizbatanero
          </Text>
        </Flex>
        <Button size="small" outlined>
          Seguir
        </Button>
      </Flex>
    );
  }

  function cardAssuntos() {
    return (
      <Flex flexDir="column">
        <Text size="medium" fontWeight="300" color={V.gray}>
          Assuntos do momento no Brasil
        </Text>
        <Text size="medium" fontWeight="bold" color={V.white}>
          Bootcamp da Rocketseat
        </Text>
      </Flex>
    );
  }
  return (
    <Wrapper>
      <Flex bg="#202327" width="85%" borderRadius="40px">
        <InputGroup width="100%">
          <IconButton
            _hover={{ outline: "none" }}
            icon="search"
            color="gray"
            aria-label="Seach"
          />
          <Input
            _hover={{ borderRadius: "40px" }}
            placeholder="Busca no Twitter"
          />
        </InputGroup>
      </Flex>
      <WrapperCard>
        <Text color={V.white} fontWeight="bold" size="large">
          Talvez você curta
        </Text>
        <Divider />
        <Flex alignItems="center">
          <Box
            marginRight="10px"
            bg="gray"
            width="50px"
            height="50px"
            borderRadius="50%"
          />
          <Flex flexDir="column" marginRight="auto">
            <Text color={V.white} size="medium">
              Luiz Batanero
            </Text>
            <Text color={V.gray} size="small">
              @luizbatanero
            </Text>
          </Flex>
          <Button size="small" outlined>
            Seguir
          </Button>
        </Flex>
        <Divider />
        {cardAvatar()}
        <Divider />
        {cardAvatar()}
        <Divider />
      </WrapperCard>
      <WrapperCard>
        <Text color={V.white} size="large" fontWeight="bold">
          O que está acontecendo
        </Text>
        <Divider />
        <Flex flexDir="column">
          <Text size="medium" fontWeight="300" color={V.gray}>
            Assuntos do momento no Brasil
          </Text>
          <Text size="medium" fontWeight="bold" color={V.white}>
            Bootcamp da Rocketseat
          </Text>
        </Flex>
        <Divider />
        {cardAssuntos()}
        <Divider />
        {cardAssuntos()}
        <Divider />
      </WrapperCard>
    </Wrapper>
  );
};

export default Recommendations;
