import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const gray = defineStyle({
  background: "gray.50",
  color: "black",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  paddingY: 4,
  paddingX: "0.875rem",

  _hover: {
    background: "gray.200",
    borderColor: "gray.400",
  },
});

const blue = defineStyle({
  background: "#2A84EE",
  color: "white",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "#2A84EE",
  paddingY: 4,
  paddingX: "0.875rem",

  _hover: {
    background: "#1E66CC",
  },
});

const lightBlueWithShadow = defineStyle({
  background: "white",
  color: "blue.600",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "blue.500",
  paddingY: 4,
  paddingX: "0.875rem",

  _hover: {
    background: "blue.50",
    color: "blue.700",

    borderColor: "blue.400",
    boxShadow: "4px 4px 0 0 #3182CE",
  },
});

const blueWithShadow = defineStyle({
  background: "blue.400",
  color: "white",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "blue.500",
  paddingY: 4,
  paddingX: "0.875rem",

  _hover: {
    background: "blue.300",
    borderColor: "blue.400",
    boxShadow: "4px 4px 0 0 #3182CE",
  },
});

const grayWithShadow = defineStyle({
  background: "gray.50",
  color: "black",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  paddingY: 4,
  paddingX: "0.875rem",

  _hover: {
    background: "gray.100",
    borderColor: "gray.400",
    boxShadow: "4px 4px 0 0 #718096",
  },

  // background: "gray.50",
  // color: "black",
  // fontWeight: "500",
  // fontSize: "md",
  // border: "2px solid",
  // borderColor: "gray.300",
  // paddingY: 4,
  // paddingX: "0.875rem",
  // minW: "6rem",

  // _hover: {
  //   background: "gray.200",
  //   borderColor: "gray.400",
  // },
});

const light = defineStyle({
  background: "white",
  color: "#1E66CC",
  fontWeight: "500",
  fontSize: "md",
  border: "2px solid",
  borderColor: "gray.300",
  py: 4,
  px: 3,

  _hover: {
    background: "gray.100",
    borderColor: "gray.400",
  },
});

const ghostGray = defineStyle({
  background: "transparent",
  color: "black",
  fontWeight: "500",
  height: "fit-content",
  px: 2,
  py: 1,

  _hover: {
    background: "gray.200",
  },
});

const buttonTheme = defineStyleConfig({
  variants: {
    gray,
    blue,
    ghostGray,
    light,
    blueWithShadow,
    grayWithShadow,
    lightBlueWithShadow,
  },
  baseStyle: {
    fontFamily: "DM Sans, sans-serif",
  },
});

export default buttonTheme;
