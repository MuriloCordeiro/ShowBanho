import {
  Flex,
  Button,
  Text,
  useBreakpointValue,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  Stack,
  Image,
  useToast,
  useDisclosure,
  Toast,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import LayoutDesk from "../components/Layouts/layoutDesktop";
// import Lottie from "react-lottie";
import animationData from "../animations/login.json";
import { useAuth } from "../contexts/AuthContext";
import { AiOutlineUser, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsShieldLock } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  User,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { useState } from "react";

import SignUp from "../components/SignUp";
import { parseCookies } from "nookies";
// import { useAuth } from "../contexts/AuthContext";
export default function HomeLogin() {
  const Router = useRouter();
  // const { signInEmailPassword } = useAuth();

  // const { createUserWithEmailAndPassword } = useAuth();
  const toast = useToast({
    duration: 5000,
    isClosable: true,
  });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>();
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { user, signInWithGoogle, signInEmailPassword, isAuthenticated } =
    useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Toast = useToast({
    position: "bottom",
    isClosable: true,
    duration: 2500,
    containerStyle: {
      color: "white",
    },
  });
  // const [user, setUser] = useState<User>({} as User);

  // function signInWithGoogle() {
  //   const provider = new GoogleAuthProvider();

  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       console.log(result.user);
  //       setUser(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  const CLIENT_TOKEN: any = process.env.NEXT_PUBLIC_CLIENT_TOKEN;

  const cookies = parseCookies();

  const userToken = cookies[CLIENT_TOKEN];

  async function handleLogin(email: string, password: string) {
    // setLoading(true);
    await signInEmailPassword(email, password);

    // if (!userToken) {
    //   Toast.closeAll();
    //   Toast({
    //     title: "Deu ruim.",
    //     status: "error",
    //     containerStyle: {
    //       color: "white",
    //     },
    //   });
    // } else {
    //   Toast.closeAll();
    //   Toast({
    //     title: "Deu boa.",
    //     status: "success",
    //     containerStyle: {
    //       color: "white",
    //     },
    //   });
    // }
    // setLoading(false);
  }

  return (
    <>
      {isWideVersion ? (
        <>
          {/* <SignUpPage isOpen={isOpen} onClose={onClose} /> */}
          <Flex
            bgColor="#011735"
            minHeight="100vh"
            direction="column"
            p="1rem"
            justify="center"
          >
            {/* <Button onClick={signInWithGoogle}>teste</Button> */}
            {/* <Text fontSize="32px" color="white">
              {user?.email}
            </Text>
            <Text fontSize="32px" fontWeight="bold" color="white">
              {user?.displayName}
            </Text> */}
            {/* {user.photoURL && <img src={user.photoURL} alt="Foto do usuário" />} */}
            {/* <Button onClick={test}>criaremail</Button> */}

            <Flex
              justify="center"
              // data-aos="fade-up"
              bgColor="#021C45"
              borderRadius="10px"
              direction="column"
              minHeight="full"
              // bgRepeat="no-repeat"
              // bgAttachment="fixed"
              // bgPosition="center"
              // bgBlendMode="soft-light"
              // bgImage="url(/Image/piggy1.png)"
            >
              {/* <Flex> {props.children}</Flex> */}
              {/* <NavBar /> */}

              <Flex direction="column" align="center" p="1rem">
                {/* <Lottie options={defaultOptions} /> */}
                <Image src="/Image/bgimagelogin.gif" alt="" />
                <Text
                  fontSize="24px"
                  color="white"
                  fontWeight="bold"
                  alignSelf="start"
                >
                  Seja bem-vindo!
                </Text>
                <Text
                  fontSize="16px"
                  color="gray.300"
                  fontWeight="medium"
                  alignSelf="start"
                >
                  Faça o login para começar.
                </Text>
                <InputGroup mt="2rem" w="full" variant="solid" size="md">
                  <InputLeftElement>
                    <AiOutlineUser color="gray.300" />
                  </InputLeftElement>
                  <Input
                    borderRadius="12px"
                    placeholder="Digite seu email."
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </InputGroup>
                <InputGroup w="full" variant="solid" size="md" mt="1rem">
                  <InputLeftElement>
                    <BsShieldLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    borderRadius="12px"
                    placeholder="Digite sua senha. "
                    variant="solid"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </InputGroup>

                <Flex
                  justify="space-evenly"
                  w="full"
                  mt="1rem"
                  direction="column"
                >
                  {/* <Button mt="1rem" size="sm" w="100px">
                    Cadastre-se
                    
                  </Button> */}
                  <Button
                    borderWidth="1px"
                    isLoading={loading}
                    mt="1rem"
                    h="40px"
                    borderRadius="10px"
                    bgColor="#011735"
                    // variant="solid"
                    colorScheme="#021C45"
                    color="white"
                    onClick={() => {
                      handleLogin(email, password);
                    }}
                  >
                    Entrar
                  </Button>

                  <Text
                    mt="1.5rem"
                    align="center"
                    color="gray.300"
                    fontSize="13px"
                  >
                    Você também pode se conectar com:
                  </Text>
                  {/* <IconButton>
                    <Text>teste</Text>
                  </IconButton> */}

                  <Button
                    alignContent="end"
                    h="40px"
                    justifyContent="center"
                    mt="1.5rem"
                    bgColor="#011735"
                    borderRadius="10px"
                    colorScheme="#021C45"
                    color="white"
                    variant="outline"
                    onClick={signInWithGoogle}
                    aria-label={"Entrar com google"}
                  >
                    {<FcGoogle size="25px" />}
                    <Text alignSelf="center" ml="1rem">
                      Entrar com Conta Google
                    </Text>
                  </Button>

                  {/* const { isOpen, onOpen, onClose } = useDisclosure(); */}

                  <Button
                    colorScheme="#021C45"
                    mt="1rem"
                    borderRadius="10px"
                    // onClick={handleCreateUser}
                    onClick={onOpen}
                  >
                    {" "}
                    <Text as="u" fontSize="14px" fontWeight="medium">
                      Criar uma conta
                    </Text>
                  </Button>

                  <SignUp isOpen={isOpen} onClose={onClose} />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          {/* <LayoutMob></LayoutMob> */}
        </>
      ) : (
        <LayoutDesk>
          AQUI SERÁ O DESKTOP
          {/* <Flex direction="column">
            <Button w="100%" mb="2rem" color="red" onClick={onToggle}>
              DESPESAS VARIAVEIS
            </Button>
            <Collapse in={isOpen} animateOpacity>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de luz</Text>
                <Text>R$ 150,00</Text>
              </Flex>
              <Flex mb="1rem" justify="space-between" w="100%">
                <Text mr="1rem">Conta de agua</Text>
                <Text>R$ 80,00</Text>
              </Flex>
            </Collapse>
            <Button w="100%" color="green">
              DESPESAS FIXAS
            </Button>
          </Flex> */}
        </LayoutDesk>
      )}
    </>
  );
}
