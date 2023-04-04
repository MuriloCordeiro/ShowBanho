import {
  Flex,
  Img,
  Input,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Button,
} from "@chakra-ui/react";
import Layout from "../Layouts/Layout";
import { useState } from "react";

export default function BudgetPage() {
  const joão = [
    {
      line: "DECA",
      qtd: "12",
      description: "Essa é a description1",
      img: "teste1",
      value: "R$45,00",
    },
    {
      line: "DECA",
      qtd: "12",
      description: "Essa é a description1",
      img: "teste1",
      value: "R$45,00",
    },
    {
      line: "DECA",
      qtd: "12",
      description: "Essa é a description1",
      img: "teste1",
      value: "R$45,00",
    },
  ];
  const matheus = [
    {
      line: "Teste1",
      qtd: "14",
      description: "Essa é a description2",
      img: "teste2",
      value: "R$600,00",
    },
    {
      line: "Teste1",
      qtd: "14",
      description: "Essa é a description2",
      img: "teste2",
      value: "R$600,00",
    },
    {
      line: "Teste1",
      qtd: "14",
      description: "Essa é a description2",
      img: "teste2",
      value: "R$600,00",
    },
  ];

  const jose = [
    {
      line: "Teste2",
      qtd: "10",
      description: "Essa é a description3",
      img: "teste3",
      value: "R$800,00",
    },
    {
      line: "Teste2",
      qtd: "10",
      description: "Essa é a description3",
      img: "teste3",
      value: "R$800,00",
    },
    {
      line: "Teste2",
      qtd: "10",
      description: "Essa é a description3",
      img: "teste3",
      value: "R$800,00",
    },
  ];
  const empty = [
    {
      line: "",
      qtd: "",
      description: "",
      img: "",
      value: "",
    },
  ];

  const [array, setArray] = useState<any>();

  console.log("array", array);
  return (
    <Layout>
      <Flex direction="column" w="100%" h="100%" mb="4rem">
        <Text mb="1rem">Últimos orçamentos:</Text>
        <Flex w="full" justify="space-between" mb="4rem">
          <Flex
            onClick={() => {
              setArray(joão);
            }}
            as="button"
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          >
            <Flex w="full" justify="center" align="center">
              {/* <Img src="/podcast.svg" mr="6rem" /> */}

              <Text
                fontSize="26px"
                fontWeight="bold"
                align="center"
                color="#B37443"
              >
                Orçamento do arquiteto João
              </Text>
            </Flex>
          </Flex>
          <Flex
            as="button"
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
            onClick={() => {
              setArray(matheus);
            }}
          >
            <Flex w="full" justify="center" align="center">
              {/* <Img src="/podcast.svg" mr="6rem" /> */}

              <Text
                fontSize="26px"
                fontWeight="bold"
                align="center"
                color="#B37443"
              >
                Orçamento do arquiteto Matheus
              </Text>
            </Flex>
          </Flex>
          <Flex
            as="button"
            w="30%"
            h="150px"
            bgColor="white"
            borderRadius="20px"
            p="1rem"
            boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
            onClick={() => {
              setArray(jose);
            }}
          >
            <Flex w="full" justify="center" align="center">
              {/* <Img src="/podcast.svg" mr="6rem" /> */}

              <Text
                fontSize="26px"
                fontWeight="bold"
                align="center"
                color="#B37443"
              >
                Orçamento do arquiteto Jose
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
          bgColor="white"
          w="full"
          h="full"
          borderRadius="20px"
          p="2rem"
          direction="column"
        >
          <Flex justify="end">
            <Button
              mr="1rem"
              _hover={{ bgColor: "#a77d5e" }}
              boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
              borderRadius="15px"
              bgColor="#B37443"
              color="white"
              onClick={() => {
                setArray(empty);
              }}
            >
              Novo Orçamento
            </Button>
            <Button
              _hover={{ bgColor: "#a77d5e" }}
              boxShadow="0px 8px 10px rgba(0, 0, 0, 0.1)"
              borderRadius="15px"
              bgColor="green"
              color="white"
            >
              Salvar Orçamento
            </Button>
          </Flex>
          <Flex w="80%" justify="space-between" mt="4rem" mb="4rem" px="1.5rem">
            <Text fontSize="18px">Cliente: Joana </Text>
            <Text fontSize="18px">Email: joana@gmail.com </Text>
            <Text fontSize="18px">Telefone: (41)98888-9999 </Text>
            <Text fontSize="18px">Data: 23/03/2023 </Text>
          </Flex>

          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Linha</Th>
                  <Th>Qtd</Th>
                  <Th>Descrição</Th>
                  <Th>Acabamento</Th>
                  <Th>Valor</Th>
                </Tr>
              </Thead>
              <Tbody>
                {array &&
                  array?.map((prod: any, index: any) => (
                    <Tr key={index}>
                      <Td>
                        {prod.line === "" ? (
                          <Input placeholder="Escreva aqui" />
                        ) : (
                          prod.line
                        )}
                      </Td>
                      <Td>
                        {prod.qtd === "" ? (
                          <Input placeholder="Escreva aqui" />
                        ) : (
                          prod.qtd
                        )}
                      </Td>
                      <Td>
                        {prod.description === "" ? (
                          <Input placeholder="Escreva aqui" />
                        ) : (
                          prod.description
                        )}
                      </Td>
                      <Td>
                        {prod.img === "" ? (
                          <Input placeholder="Escreva aqui" />
                        ) : (
                          prod.img
                        )}
                      </Td>
                      <Td>
                        {prod.value === "" ? (
                          <Input placeholder="Escreva aqui" />
                        ) : (
                          prod.value
                        )}
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      </Flex>
    </Layout>
  );
}
