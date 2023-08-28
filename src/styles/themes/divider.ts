import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const gray = defineStyle({
  borderWidth: "3px", // change the width of the border
  borderStyle: "solid", // change the style of the border
  borderColor: "gray.300",
  mt: "3",
  mb: "1"
});

const dividerTheme = defineStyleConfig({
  variants: { gray },
});

export default dividerTheme;
