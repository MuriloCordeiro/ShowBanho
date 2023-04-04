import {
  Flex,
  Text,
  Img,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
} from "@chakra-ui/react";

import { Router, useRouter } from "next/router";
import Header from "./header";

export default function LayoutDesk(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Router = useRouter();

  return (
    <>
      <Flex direction="column" w="100%" bgColor="#F1EFEF">
        <Flex
          align="center"
          mb="2rem"
          p="0.5rem"
          px="3rem"
          bgColor="white"
          boxShadow="0px 5px 10px rgba(0, 0, 0, 0.1)"
        >
          <Text fontWeight="bold" color="#B37443" fontSize="20px" mr="30rem">
            ShowBanho
          </Text>
          <Flex justify="space-around" w="70%">
            <Button
              variant="ghost"
              color="#B37443"
              _hover={{ bgColor: "#B37443", color: "white" }}
              fontWeight="Regular"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              color="#B37443"
              _hover={{ bgColor: "#B37443", color: "white" }}
              fontWeight="Regular"
            >
              Produtos
            </Button>
            <Button
              variant="ghost"
              color="#B37443"
              _hover={{ bgColor: "#B37443", color: "white" }}
              fontWeight="Regular"
            >
              Empresa
            </Button>
            <Button
              variant="ghost"
              color="#B37443"
              _hover={{ bgColor: "#B37443", color: "white" }}
              fontWeight="Regular"
            >
              Marcas
            </Button>
          </Flex>

          <IconButton
            onClick={() => {
              onOpen();
            }}
            variant="ghost"
            aria-label="Hamburg Menu"
            icon={<Img src="/hamburgIcon.svg" w="25px" />}
          />
          {/* <Img src="/hamburgIcon.svg" w="25px" /> */}
        </Flex>
        <Flex bgColor="#F1EFEF" px="3rem" py="2.5rem" direction="column">
          {/* <Header /> */}
          {props.children}
          {/* <NavBar /> */}
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="white">
          <DrawerCloseButton />
          <DrawerHeader>
            <Text color="#B37443">Faça seu login pra continuar</Text>
          </DrawerHeader>

          <DrawerBody>
            <Button
              _hover={{ bgColor: "#a77d5e" }}
              boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
              borderRadius="15px"
              bgColor="#B37443"
              color="white"
              onClick={() => {
                Router.push("/login");
              }}
            >
              Clique aqui para continuar
            </Button>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
