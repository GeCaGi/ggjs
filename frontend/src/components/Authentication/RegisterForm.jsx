import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Input, Label } from 'design-react-kit';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { setSessionCookies } from '../../utils/cookieUtils';

const REGEXP = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const DOMAIN = "@giorgimi.edu.it";

function validateEmail(email) {
    return email.match(REGEXP) != null && email.toLowerCase().endsWith(DOMAIN);
}

function validatePassword(password) {
    return password.length >= 6;
}

function determinePasswordStrength(password) {
    const length = password.length;
    const hasNumbersOrSymbols = /[0-9]|[!@#$%^&*(),.?":{}|<>]/.test(password);
    if (length > 9 && hasNumbersOrSymbols) {
        return { message: "Password sicura", color: "green" };
    } else if (length >= 7 && length <= 9) {
        return { message: "Password media", color: "orange" };
    } else if (length >= 6) {
        return { message: "Password debole", color: "red" };
    } else {
        return { message: "", color: "" };
    }
}

export default function RegisterForm() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setRPassword] = useState("");
    const [verificationCode, setVerificationCode] = useState("");
    const [isVerified, setIsVerified] = useState(false);
    const [error, setError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [strength, setStrength] = useState({ message: '', color: '' });
    const navigate = useNavigate();

    function handleRegister(event) {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError("Inserire un Indirizzo Email del Giorgi");
            setModalVisible(true);
            return;
        }
        if (password !== rpassword) {
            setError("Le password non coincidono");
            setModalVisible(true);
            return;
        }
        if (!validatePassword(password)) {
            setError("Password Troppo Corta (Minimo 6 caratteri)");
            setModalVisible(true);
            return;
        }
        sendVerificationEmail();
    }

    async function sendVerificationEmail() {
        try {
            const result = await axios.post("http://localhost:3001/api/register", { email, username, password });
            if (result.status === 200) {
                console.log("Email di verifica inviata");
            }
        } catch (err) {
            setError("Errore di connessione.");
            setModalVisible(true);
        }
    }

    async function verifyEmail() {
        try {
            const result = await axios.post("http://localhost:3001/api/verify-email", { email, code: verificationCode });
            if (result.status === 200) {
                setIsVerified(true);
                setSessionCookies(email);
                navigate('/dashboard'); // Redirect to the dashboard or another page
            }
        } catch (err) {
            setError("Codice di verifica non valido.");
            setModalVisible(true);
        }
    }

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        setStrength(determinePasswordStrength(value));
    };

    return (
        <form id="registerform" onSubmit={handleRegister}>
            <Label className='form-label' htmlFor='emailInput'>Indirizzo Email</Label>
            <Input id="emailInput" type="email" className="form-control form-outline mb-4" placeholder="docente@giorgimi.edu.it"
                   onChange={e => setEmail(e.target.value)} value={email} />
            <Label className='form-label' htmlFor='usernameInput'>Username</Label>
            <Input id="usernameInput" type="text" className="form-control form-outline mb-4" placeholder="docente"
                   onChange={e => setUsername(e.target.value)} value={username} />
            <Label className='form-label' htmlFor="passwordInput">Password</Label>
            <Input id="passwordInput" type="password" className="form-control" onChange={handlePasswordChange} value={password} />
            {password && (
                <div style={{ width: '100%', height: '5px', backgroundColor: strength.color, marginTop: '5px' }}></div>
            )}
            <p style={{ color: strength.color }}>{strength.message}</p>
            <Label className='form-label' htmlFor="confirmPasswordInput">Conferma Password</Label>
            <Input id="confirmPasswordInput" type="password" className="form-control" onChange={e => setRPassword(e.target.value)} value={rpassword} />
            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <FormGroup check className="form-check">
                        <Input id="checkbox1" type="checkbox" className="form-check-input" />
                        <Label for="checkbox1" check className="form-check-label">Ricordami</Label>
                    </FormGroup>
                </div>
                <div className="col text-center">
                    <a href="#!">Password dimenticata?</a>
                </div>
            </div>
            {isVerified ? (
                <p>Email verificata! Reindirizzamento in corso...</p>
            ) : (
                <>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Registrati</button>
                    <Label className='form-label' htmlFor="verificationCodeInput">Codice di Verifica</Label>
                    <Input id="verificationCodeInput" type="text" className="form-control" onChange={e => setVerificationCode(e.target.value)} value={verificationCode} />
                    <button type="button" className="btn btn-secondary btn-block mt-2" onClick={verifyEmail}>Verifica Email</button>
                </>
            )}
            <Modal isOpen={modalVisible} toggle={() => setModalVisible(false)}>
                <ModalHeader toggle={() => setModalVisible(false)}>Errore</ModalHeader>
                <ModalBody>{error}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setModalVisible(false)}>Chiudi</Button>
                </ModalFooter>
            </Modal>
        </form>
    );
}