import React from 'react'
import { change, login } from '../../store/actions/auth.action'
import { Redirect, Link } from 'react-router-dom'
import { Typography, TextField, Button } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'

const RegisterButton = withStyles({
    root: {
        color: '#fff',
        backgroundColor: '#28a745',
        '&:hover': {
            backgroundColor: '#218838',
            color: '#fff'
        },
    }
})(Button)


export default function Auth() {
    const dispatch = useDispatch();
    const { credentials, success } = useSelector( state => state.authReducer)
    return (
        <div className ="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="form-group text-center">
                            <img src="/LogoVawCar.png" alt="VAW CAR" height="48" />
                            <Typography className="mt-3 " variant="h6" component="h1"> Plataforma para Revenda de veículos </Typography>
                        </div>

                        <TextField 
                            label="Email"
                            type="email"
                            autoComplete="email"
                            margin="normal"
                            value={credentials.email}
                            onChange={ text => dispatch( change({ email: text.target.value }) ) }
                        />

                        <TextField 
                            label="Senha"
                            type="password"
                            margin="normal"
                            value={credentials.password}
                            onChange={ text => dispatch( change({ password: text.target.value }) ) }
                        /> 

                        <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            size="large"
                            className="mt-4 mb-1"
                            onClick={() => dispatch( login(credentials) )}
                        >
                        Entrar    
                        </Button> 

                        <RegisterButton
                            component={Link}
                            to="/register"
                            variant="contained"
                            fullWidth
                            size="large"
                            className="mt-1 mb-1"
                        >
                            Cadastrar
                        </RegisterButton>

                        <div className="text-center">
                            <Link to="/login" className="mt-4 text-danger">
                                Esqueceu a senha?
                            </Link>
                        </div>

                        {(success) &&
                            <Redirect to="/vehicles" />
                        }    
                    </div>
                </div>
            </div>
        </div>
    )
}
