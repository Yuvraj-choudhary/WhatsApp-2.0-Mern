import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

export const TemplateContext = createContext(null);

const TemplateProvider = ({ children }) => {
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </TemplateContext.Provider>
  );
};
const theme = createTheme({
  overrides: {
    MuiBackdrop: {
      root: {
        backgroundColor: "unset",
        width: "20%",
      },
    },
    MuiDrawer: {
      paperAnchorLeft: {
        height: "100%",
        backgroundColor: "#fff",
        width: "20%",
        boxShadow: 'unset',
      },
    },
  },
});

export default TemplateProvider;
