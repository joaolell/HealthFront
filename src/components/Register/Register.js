import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component  {
   state = {
       name: "",
       username: "",
       email: "",
       password: ""
   }

   componentDidMount() {
       document.body.classList.add("register-login-page-background")
   }

   onChangeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
   }

   onSubmit = (e) => {
       e.preventDefault();
       var self = this
       console.log(this.state)
       axios.post('http://localhost:50336/api/Users', {
        nome: this.state.name,
        senha: this.state.password,
        email: this.state.email,
        usuario: this.state.username
      })
      .then(function (response) {
        self.props.history.push('/home');
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   }

   render () {
       return (
       <div className="col-md-12">
        <div className="register-login-wrapper col-md-2">
            <h1 className="register-login-title">Registre-se</h1>
            <form className="register-login-form">
                <label>Nome completo:   </label>
                <input name="name" placeholder="Digite seu nome completo" type="text" value={this.state.name} 
                    onChange={e => this.onChangeHandler(e)} />
                <br />
                <label>Nome de usuário:  </label>
                <input name="username" placeholder="Digite um nome de usuário" type="text" value={this.state.username} 
                    onChange={e => this.onChangeHandler(e)} />
                <br />
                <label>Email:</label>
                <input name="email" placeholder="seuemail@seuprovedor.com" type="email" value={this.state.email} 
                    onChange={e => this.onChangeHandler(e)} />
                <br />
                <label>Senha:</label>
                <input name="password" placeholder="Digite uma senha" type="password" value={this.state.password} 
                    onChange={e => this.onChangeHandler(e)} />
                <br />
                <Link to= "/home" className="already-has-account"><small>Já possui conta? Faça login!</small></Link>
                <button className="register-login-button form-control" onClick={(e) => this.onSubmit(e)}>Cadastrar</button>
            </form>
        </div>
       </div>
       );
   }
}

export default RegisterForm;