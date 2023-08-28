import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
    list: {
        border: "solid",
        borderColor: "gray.300",
        borderTopWidth: "2px",
        borderRightWidth: "2px",
        borderLeftWidth: "2px",
        borderBottomWidth: "2px",
        minW: "none",
    },
    item: {
        px: "5"
    }
});

const menuTheme = defineMultiStyleConfig({ baseStyle });

export default menuTheme;