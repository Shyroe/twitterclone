import React from "react";
import ThemeContainer from "../contexts/theme/ThemeContainer";
import { CSSReset } from "@chakra-ui/core";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
      {/* <CSSReset /> */}
    </ThemeContainer>
  );
}

export default MyApp;
