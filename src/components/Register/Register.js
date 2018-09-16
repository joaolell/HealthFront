import React from 'react';
import axios from 'axios';

// import './Register.css';

class RegisterForm extends React.Component  {
   state = {
       name: "",
       username: "",
       password: ""
   }

   onChangeHandler = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
   }

   onSubmit = (e) => {
       e.preventDefault();
       console.log(this.state)
       axios.post('http://localhost:50336/api/Users', {
        nome: this.state.name,
        senha: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
   }

   render () {
       return (
        <form>
            <label>
                Nome completo:
                <input name="name" placeholder="Digite seu nome completo" type="text" value={this.state.name} 
                onChange={e => this.onChangeHandler(e)} />
            </label>
            <br />
            <label>
                Nome de usuário:
                <input name="username" placeholder="Digite um nome de usuário" type="text" value={this.state.username} 
                onChange={e => this.onChangeHandler(e)} />
            </label>
            <br />
            <label>
                Senha:
                <input name="password" placeholder="Digite uma senha" type="password" value={this.state.password} 
                onChange={e => this.onChangeHandler(e)} />
            </label>
            <br />
            <button onClick={(e) => this.onSubmit(e)}>Registrar</button>
        </form>
       );
   }
}

export default RegisterForm;