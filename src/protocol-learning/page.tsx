"use client";

import {
  Card,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import Chat from "./components/Chat";
import { useState } from "react";

export default function Page() {
  const [systemPrompt, setSystemPrompt] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [numChatGPTInstances, setNumChatGPTInstances] = useState(2);
  const [epochs, setEpochs] = useState(1);

  return (
    <Flex minH="100vh" bg="gray.100" w="full">
      <Container maxW="container.lg" py={12}>
        <Heading size="md" mb="8">
          Protocol Learning
        </Heading>
        <Card variant="grayWithShadow" px={6} py={4}>
          <Heading size="xs" mb={2}>
            Project Description
          </Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Card>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mt={6}>
          <Card variant="grayWithShadow" px={6} py={4}>
            <Heading size="xs" mb={2}>
              System Prompt
            </Heading>
            <Textarea
              rows={5}
              variant="primary"
              placeholder="Enter your text here"
              value={systemPrompt}
              onChange={(e) => setSystemPrompt(e.target.value)}
            />
          </Card>

          <Card variant="grayWithShadow" px={6} py={4}>
            <Heading size="xs" mb={2}>
              User Prompt
            </Heading>
            <Textarea
              rows={5}
              variant="primary"
              placeholder="Enter your text here"
              value={userPrompt}
              onChange={(e) => setUserPrompt(e.target.value)}
            />
          </Card>
        </SimpleGrid>

        <Card variant="grayWithShadow" px={6} py={4} mt={6}>
          <Heading size="xs" mb={2}>
            Parameters
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
            <FormControl>
              <FormLabel>Number of ChatGPT instances</FormLabel>
              <Input variant="primary" placeholder="Enter your text here" />
            </FormControl>
            <FormControl>
              <FormLabel>Epochs</FormLabel>
              <Input variant="primary" placeholder="Enter your text here" />
            </FormControl>
          </SimpleGrid>
        </Card>
        <VStack mt={12}>
          <Chat />
        </VStack>
        <Text mt={24} textAlign="center">
          THE END
        </Text>
      </Container>
    </Flex>
  );
}
