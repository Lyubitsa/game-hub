import { extendTheme, ThemeConfig } from "@chakra-ui/theme-utils";

const config: ThemeConfig = {
    initialColorMode: 'dark'
};

const theme = extendTheme({config});

export default theme;