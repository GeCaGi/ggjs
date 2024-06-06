import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormGroup, Input, Label, Form } from 'design-react-kit';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { setSessionCookies } from '../../utils/cookieUtils';

// Constants and validators outside the component
const REGEXP = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
const DOMAIN = "@giorgimi.edu.it";

function validateEmail(email) {
    return email.match(REGEXP) != null && email.toLowerCase().endsWith(DOMAIN);
}

function validatePassword(password) {
    return password.length >= 6;
}

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();
        if (!validateEmail(email)) {
            setError("Inserire un Indirizzo Email del Giorgi");
            setModalVisible(true);
            return;
        }
        if (!validatePassword(password)) {
            setError("Password Troppo Corta (Minimo 6 caratteri)");
            setModalVisible(true);
            return;
        }

        serverLogin();
    }

    async function serverLogin() {
        try {
            const result = await axios.get("http://localhost:3001/api/users", { params: { email, password } });
            if (result.data.found === 0) {
                setError("Credenziali Errate, registrati.");
                setModalVisible(true);
            } else {
                console.log("LOGGATO");
                setSessionCookies(email);
                navigate('/dashboard'); // Redirect to the dashboard or another page
            }
        } catch (err) {
            setError("Errore di connessione.");
            setModalVisible(true);
        }
    }

    return (
        <Form id="loginform" onSubmit={handleLogin}>
            <Label className='form-label' htmlFor='form2Example1'>Indirizzo Email</Label>
            <Input type="email" className="form-control form-outline mb-4" placeholder="docente@giorgimi.edu.it"
                   onChange={e => setEmail(e.target.value)} value={email} />
            <Label className='form-label' htmlFor="form2Example2">Password</Label>
            <Input type="password" className="form-control" onChange={e => setPassword(e.target.value)} value={password} />

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    {/* Checkbox using design-react-kit */}
                    <FormGroup check className="form-check">
                        <Input id="checkbox1" type="checkbox" className="form-check-input" />
                        <Label for="checkbox1" check className="form-check-label">Ricordami</Label>
                    </FormGroup>
                </div>

                <div className="col text-center">
                    {/* Simple link */}
                    <a href="#!">Password dimenticata?</a>
                </div>
            </div>
            
            <button type="submit" className="btn btn-primary btn-block mb-4">Accedi</button>
            
            <div className="text-center">
                <p>Non hai un account? <button type="button" className="btn btn-link" onClick={() => navigate('/register')}>Registrati</button></p>
            </div>
            
            {/* Modal for errors */}
            <Modal isOpen={modalVisible} toggle={() => setModalVisible(false)}>
                <ModalHeader toggle={() => setModalVisible(false)}>Errore</ModalHeader>
                <ModalBody>{error}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => setModalVisible(false)}>Chiudi modale</Button>
                </ModalFooter>
            </Modal>
        </Form>
    );
}
