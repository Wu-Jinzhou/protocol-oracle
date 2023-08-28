import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const primary = definePartsStyle({
  field: {
    background: "white",
    border: "2px solid",
    borderColor: "gray.300",

    _hover: {
      borderColor: "gray.400"
    },

    _focus: {
      borderColor: "blue.400"
    }
  }
});

const selectTheme = defineMultiStyleConfig({ variants: { primary } });

export default selectTheme;
