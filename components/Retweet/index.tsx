import React from "react";
import {
  Chat,
  Favorite,
  Rocketseat as RocketseatIcon,
} from "../../styles/Icons";

import { ListIcon, Box, Flex, Text } from "@chakra-ui/core";

import V from "../../styles/variables";

const index = () => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100%"
      // borderTop="5px solid blue"
      flexDir="column"
    >
      <Flex>
        <Box
          alignSelf="flex-end"
          width="40px"
          height="40px"
          borderRadius="50%"
          mr="10px"
          bg="gray"
        />
        <Box>
          <Text color="gray" fontSize="small">
            Você retweetou
          </Text>
          <Flex>
            <Text>Rocketseat</Text>
            <Text color="gray" fontSize="small">
              @rocketseat . 27 de jun
            </Text>
          </Flex>
          <Text>Foguete não tem ré</Text>
        </Box>
      </Flex>

      <Flex
        width="inherit"
        // border="2px solid orangered"
        paddingX="40px"
        flexDir="column"
      >
        <Box borderRadius="20px" bg="gray" height="285px" />
        <Flex
          // border="2px solid crimson"
          justifyContent="space-around"
        >
          <Flex align="center">
            <ListIcon icon={Chat} size="20px" color="gray" />
            <Text>18</Text>
          </Flex>
          <Flex align="center">
            <ListIcon icon={RocketseatIcon} size="20px" color="like" />
            <Text>18</Text>
          </Flex>
          <Flex align="center">
            <ListIcon icon={Favorite} size="20px" color="like" />
            <Text>18</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default index;
