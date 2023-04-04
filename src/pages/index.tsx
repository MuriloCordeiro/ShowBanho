import { useState } from "react";
import {
  Flex,
  Button,
  Collapse,
  useDisclosure,
  Text,
  useBreakpointValue,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Icon,
  Img,
  Input,
  Tfoot,
} from "@chakra-ui/react";

import LayoutDesk from "../Layouts/Layout";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { BsPencilSquare, BsStack } from "react-icons/bs";
import { TfiStatsDown, TfiStatsUp, TfiClipboard } from "react-icons/tfi";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useAuth } from "../contexts/AuthContext";
import { SendMessages } from "../hooks/useSendMessage";
import Layout from "../Layouts/Layout";

export default function Home() {
  const [teste, setTeste] = useState<any>("julio teste");

  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  async function Send() {
    const response = await SendMessages("teste");

    console.log("response", response);
  }

  return (
    <Layout>
      <Flex w="100%">
        <Flex direction="column" w="60%">
          <Text color="#B37443" fontWeight="bold" fontSize="28px" w="60%">
            Banheiras com Qualidade, Garantia e Confiança!
          </Text>
          <Text mt="1rem" color="#B37443" w="80%">
            A Show Banho busca a perfeição e qualidade em seus produtos e
            atendimento para atender bem seus clientes. A equipe está sempre
            pronta para tirar dúvidas e ajudar na escolha da banheira ideal.
            Aproveite as promoções do site e realize seu sonho com a Show Banho.{" "}
          </Text>
          <Button
            _hover={{ bgColor: "#a77d5e" }}
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
            mt="2rem"
            w="50%"
            borderRadius="15px"
            bgColor="#B37443"
            color="white"
          >
            Quero saber mais.
          </Button>
          <Button
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
            variant="outline"
            mt="1rem"
            w="50%"
            borderRadius="15px"
            color="#B37443"
            borderWidth="2px"
            borderColor="#B37443"
            _hover={{ bgColor: "#a77d5e", color: "white" }}
          >
            Quero falar pelo WhatsApp.
          </Button>
        </Flex>
        <Flex w="50%">
          <Img src="/bath.svg" />
        </Flex>
      </Flex>

      <Flex align="center" direction="column" mt="8rem">
        <Text color="#B37443" fontWeight="bold" fontSize="18px">
          Sobre a ShowBanho
        </Text>
        <Text color="#B37443" fontSize="16px" w="50%" align="center" mt="1rem">
          Somos uma empresa com foco na venda de jacuzzis e correlatos...
        </Text>

        <Img src="/imgfront.png" mt="2rem" />
        <Text color="#B37443" fontSize="16px" align="center" mt="0.5rem">
          Somos uma empresa especializada na venda de artigos de banheiro de
          alta qualidade, como privadas, pias, jacuzzis e muito mais. Nosso
          objetivo é oferecer aos nossos clientes uma experiência única de
          banho, transformando seu banheiro em um lugar de relaxamento e
          bem-estar.
        </Text>
      </Flex>
    </Layout>
  );
}
