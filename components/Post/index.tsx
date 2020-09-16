import React from "react";
import { Box, Flex, IconButton, Stack, Icon, Text } from "@chakra-ui/core";
import Button from "../Button";
import Paragraph from "../Paragraph";
import Heading from "../Heading";
import V from "../../styles/variables";

const index = () => {
  return (
    <Box display="flex" flexDir="column">
      <Flex marginY="7px">
        <IconButton aria-label="Arrow left" icon="arrow-left" />
        <Box marginLeft="15px">
          <Heading>Leonardo Shyro</Heading>
          <Text marginTop="5px" color="gray" fontSize="small">
            612 Tweets
          </Text>
        </Box>
      </Flex>

      <Box width="100%" backgroundColor="twitter" height="200px"></Box>

      <Flex>
        <Flex
          width="50%"
          //  border="2px solid red"
        >
          <Flex flexDir="column" justify="space-between">
            <Box
              width="135px"
              height="135px"
              borderRadius="50%"
              // border="5px solid black"
              marginTop="-80px"
              marginLeft="20px"
              marginBottom="30px"
              bg="gray"
            />
            <Stack
              justifyContent="space-between"
              direction="column"
              spacing={1}
            >
              <Heading>Leonardo Shyro</Heading>
              <Paragraph marginY="3px" color="dark">
                @lhcdeveloper
              </Paragraph>
              <Flex>
                <Paragraph>Developer at </Paragraph>
                {"   "}
                <span>
                  <Paragraph color="primary"> @Rocketseat</Paragraph>
                </span>
              </Flex>
              <Flex>
                <Icon color="gray.600" name="phone" marginRight="8px" />
                <Paragraph color="dark">São Paulo, Brasil</Paragraph>
              </Flex>
              <Flex>
                <Icon color="gray.600" name="car" marginRight="8px" />
                <Paragraph color="dark">São Paulo, Brasil</Paragraph>
              </Flex>
              <Flex>
                <Flex>
                  <Text mr="5px" color="gray">
                    seguindo
                  </Text>
                  <Text marginRight="10px">94</Text>
                </Flex>
                <Flex>
                  <Text mr="5px">672</Text>
                  <Text color="gray">seguidores</Text>
                </Flex>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
        <Flex
          width="50%"
          paddingTop="20px"
          paddingRight="20px"
          justify="flex-end"
        >
          <Button outlined>Seguir</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default index;
