import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const primary = defineStyle({
  background: "white",
  border: "2px solid",
  borderColor: "gray.300",

  _hover: {
    borderColor: "gray.400",
  },

  _focus: {
    borderColor: "blue.400",
  },
});

export const textareaTheme = defineStyleConfig({
  variants: { primary },
});
