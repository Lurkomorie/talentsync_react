import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import ThemeProvider from "./providers/ThemeProvider/ThemeProvider";
import FirstGreetings from "./components/FirstGreetings/FirstGreetings";
import ProcessTree from "./components/ProcessTree/ProcessTree";
import AboutBlock from "./components/AboutBlock/AboutBlock";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import BookMeetingBlock from "./components/BookMeetingBlock/BookMeetingBlock";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import LanguageBlock from "./components/LanguagesBlock/LanguageBlock";

export default function Home() {
  return (
    <ThemeProvider>
      <Flex flexDirection="column" align="center" justify="center">
        <Toolbar />
        <FirstGreetings />
        <LanguageBlock />
        <ProcessTree />
        <AboutBlock />
        <WhyChoose />
        <BookMeetingBlock />
        <ContactUs />
        <Footer />
      </Flex>
    </ThemeProvider>
  );
}
