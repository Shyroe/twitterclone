import React from "react";
import {
  Home,
  Notifications,
  Email,
  Favorite,
  Person,
  ExitToApp,
} from "../../styles/Icons";
import {
  ListIcon,
  List,
  ListItem,
  Box,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/core";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import Post from "../Post";
import Retweet from "../Retweet";
import V from "../../styles/variables";
import styled from "@emotion/styled";
const WrapperTweetsAction = styled.div`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  border-bottom: 4px solid ${V.twitter};
  margin: 1.5rem 0;
`;

const index = () => {
  return (
    <Box
      width="50%"
      height="inherit"
      // border="2px solid teal"
      display="flex"
      flexDir="column"
    >
      <Post />
      <WrapperTweetsAction>
        <Text marginBottom="10px" color="twitter" fontSize="medium">
          Tweets
        </Text>
      </WrapperTweetsAction>
      <Retweet />
    </Box>
  );
};

export default index;
