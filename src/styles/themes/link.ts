import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const placeholder = defineStyle({
  _hover: {
    textDecoration: "none",
  },
  width: "100%",
});

export const linkTheme = defineStyleConfig({
  baseStyle: {
    fontFamily: "DM Sans",
  },
  variants: { placeholder },
});
