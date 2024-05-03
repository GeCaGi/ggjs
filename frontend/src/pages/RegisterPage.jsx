import 'bootstrap-italia/dist/css/bootstrap-italia.min.css';
import 'typeface-titillium-web';
import 'typeface-roboto-mono';
import 'typeface-lora';
import { Button, Icon } from "design-react-kit";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Content from "../components/Content";
import RegisterForm from '../components/Authentication/RegisterForm';
export default function RegisterPage() {
    return (
    <>
        <Header/>
        <div style={{  margin: "auto", width: "50%", padding: "10px", marginTop:"50px"}}>
            <RegisterForm/>
        </div>
        <Footer/>
    </>
)
}