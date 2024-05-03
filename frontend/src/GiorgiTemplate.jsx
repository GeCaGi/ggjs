
import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';

import { Button, Icon } from "design-react-kit";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";
export default function GiorgiTemplate() {
    return (
    <>
      <Header/>
      {/*<Navbar/>*/}
      <Content/>
      <Footer/>
    </>
)
}