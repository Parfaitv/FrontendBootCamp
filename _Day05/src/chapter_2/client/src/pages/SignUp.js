import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form } from "react-bootstrap";
import { createUser, loginUser } from '../http/allApi'

const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === '/signin'
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [repeatePassword, setRepeatePassword] = useState('')
    const [check, setCheck] = useState(false)

    const click = async () => {
        try {
            if (isLogin) {
                let data = await loginUser(name, password)
                navigate('/')
            } else {
                if (password === repeatePassword) {
                    let role = check ? "ADMIN" : "USER"
                    let data = await createUser(name, password, role)
                    if(!data) {
                        alert("Такой пользователь существует!")
                    }
                    navigate('/signin')
                } else {
                    alert("Пароли не совпадают")
                }
            }
        } catch (e) {
            alert("Проверьте введенныe данных")
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя..."
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    {!isLogin &&
                    <div>
                        <Form.Control
                            className="mt-3"
                            placeholder="Повторите пароль..."
                            value={repeatePassword}
                            onChange={e => setRepeatePassword(e.target.value)}
                            type="password"
                            />
                        <Form.Check
                            type={'switch'}
                            defaultChecked={check}
                            onClick={e => setCheck(prev => !prev)}
                            label="Admin ?"
                            className="mt-3"
                            >
                            </Form.Check>
                    </div>
                    }
                    <div className="d-flex mt-3 justify-content-between">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={'/signup'}>Регистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={'/signin'}>Заходите!</NavLink>
                            </div>
                        }
                        <Button
                            onClick={click}
                            variant="outline-success"
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
}

export default SignUp
