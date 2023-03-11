import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <h1>E-com Website</h1>
        </Container>
        <HomeScreen />
        <Footer />
      </main>
    </>
  );
};

export default App;
