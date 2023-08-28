const baseStyle = {
  step: {
    border: "2px",
    borderColor: "gray.200",
    borderRadius: "1rem",
    padding: {base: 2, md: 4},
    width: "100%",
    boxSizing: "content-box",
    _hover: {
        bg: "gray.200"
    },
    transition: "background 0.2s"
  },
  description: {
    mb: 0
  }
};

const stepperTheme = {
  baseStyle,
};

export default stepperTheme;
