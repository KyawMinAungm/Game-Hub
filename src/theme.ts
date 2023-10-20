import { ThemeConfig, extendTheme } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};
const colors = {
  gray: {
    50: "#f9f9f9",
    100: "#ededed",
    200: "#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500: "#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900: "#111111",
  },
  brand: {
    50: "#ddecff",
    100: "#afcbff",
    200: "#7eadff",
    300: "#4d92ff",
    400: "#207bfe",
    500: "#0a69e5",
    600: "#0057b3",
    700: "#003581",
    800: "#001a50",
    900: "#000620",
  }
};

const theme = extendTheme({ config, colors });

export default theme;
