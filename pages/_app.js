import { ThemeProvider } from "@mui/material";
import "styles.css";
import { theme } from "themes";
import Layout from "layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
