import { useRef } from 'react';

import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { verifyUser } from '../../data/user';

import './Login.css';

function Login({ setToken, setRole }) {
    const userRef = useRef()
    const passRef = useRef()
    return (
        <div className="login-container" >
            <Form.Label htmlFor="username">Username</Form.Label>
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-user">type "user"</Tooltip>}
            >
                <div>
                    <Form.Control
                        type="text"
                        id="username"
                        placeholder='user'
                        style={{ textAlign: 'center' }}
                        ref={userRef}
                    />
                </div>
            </OverlayTrigger>

            <Form.Label htmlFor="password">Password</Form.Label>
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip-pass">type "pass"</Tooltip>}
            >
                <div>
                    <Form.Control
                        type="password"
                        id="password"
                        placeholder='pass'
                        style={{ textAlign: 'center' }}
                        ref={passRef}
                    />
                </div>
            </OverlayTrigger>

            <button className='btn btn-success mt-3' onClick={() => {
                const user = userRef.current.value.trim()
                const pass = passRef.current.value.trim()
                userRef.current.value = ''
                passRef.current.value = ''
                const userInfo = verifyUser(user, pass)
                if (userInfo === null) {
                    alert('Wrong username or password')
                    userRef.current.focus()
                } else {
                    setToken(userInfo.token)
                    setRole(userInfo.role)
                }
            }} >Login</button>
        </div>
    );
}

export default Login;