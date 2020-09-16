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
} from "@chakra-ui/core";
import Button from "../Button";
import Paragraph from "../Paragraph";
import V from "../../styles/variables";

const index = () => {
  return (
    <Box
      paddingY="40px"
      width="20%"
      height="inherit"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      backgroundColor={V.primary}
    >
      <List spacing={4}>
        <ListItem
          _hover={{ color: `${V.twitter}` }}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <ListIcon icon={Home} size="25px" />
          Página Inicial
        </ListItem>
        <ListItem
          _hover={{ color: `${V.twitter}` }}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <ListIcon size="25px" icon={Notifications} />
          Notificações
        </ListItem>
        <ListItem
          _hover={{ color: `${V.twitter}` }}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <ListIcon size="25px" icon={Email} />
          Mensagens
        </ListItem>
        <ListItem
          _hover={{ color: `${V.twitter}` }}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <ListIcon size="25px" icon={Favorite} />
          Favoritados
        </ListItem>
        <ListItem
          _hover={{ color: `${V.twitter}` }}
          cursor="pointer"
          justifyContent="center"
          alignItems="center"
        >
          <ListIcon size="25px" icon={Person} />
          Perfil
        </ListItem>
        <ListItem>
          <Button>
            <Paragraph>Tweetar</Paragraph>
          </Button>
        </ListItem>
      </List>
      <Box marginTop="100%">
        <Flex alignItems="center" justifyContent="flex-start">
          <Box
            width="35px"
            height="35px"
            borderRadius="50%"
            marginRight="10px"
            backgroundColor={V.gray}
          ></Box>
          <Box marginRight="50px">
            <Paragraph>Leonardo Camargo</Paragraph>
            <Paragraph size="small" color="dark">
              @lhcdeveloper
            </Paragraph>
          </Box>
          <Box>
            {/* <IconButton
              icon={Favorite}
              aria-label="exit to app"
              variantColor="red"
              fontSize="30px"
            /> */}
            <ListIcon
              role="presentation"
              cursor="pointer"
              fontSize="25px"
              icon={ExitToApp}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default index;
