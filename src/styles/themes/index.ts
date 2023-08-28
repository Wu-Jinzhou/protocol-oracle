import { extendTheme, theme as baseTheme } from "@chakra-ui/react";
import menuTheme from "./menu";
import buttonTheme from "./button";
import inputTheme from "./input";
import selectTheme from "./select";
import cardTheme from "./card";
import dividerTheme from "./divider";
import stepperTheme from "./stepper";
import { textareaTheme } from "./textarea";
import { checkboxTheme } from "./checkbox";
import { linkTheme } from "./link";
import { withProse } from "@nikolovlazar/chakra-ui-prose";

const theme = extendTheme(
  {
    components: {
      Menu: menuTheme,
      Button: buttonTheme,
      Input: inputTheme,
      Select: selectTheme,
      Card: cardTheme,
      Divider: dividerTheme,
      Stepper: stepperTheme,
      Textarea: textareaTheme,
      Checkbox: checkboxTheme,
      Text: {
        baseStyle: {
          fontFamily: "DM Sans",
        },
      },
      Link: linkTheme,
    },
    fonts: {
      body: "DM Sans, sans-serif",
      heading: "DM Sans, sans-serif",
      mono: "DM Sans, sans-serif",
      text: "DM Sans, sans-serif",
    },
  },
  withProse({
    baseStyle: {
      h1: {
        // bg: "red.500",
        fontSize: "2.5rem",
        mt: 2,
        mb: 0,
        
      },
      h2: {
        mt: 2,
        mb: 0
      },
      code: {
        background: "#0d0d0d",
        color: "#fff",
      },
      pre: {
        background: "#0d0d0d",
      },
    },
  }),

);

export default theme;
