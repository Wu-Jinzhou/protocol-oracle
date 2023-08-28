import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Flex,
  Heading,
  Card,
} from "@chakra-ui/react"
import theme from "./styles/themes"
import "./styles/globals.css"
import Page from "./protocol-learning/page"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Page />
  </ChakraProvider>
)
