import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            showAlert: false
        }
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
        axios.get('http://localhost:50336/api/Users/' + this.state.email + '/login', {
         email: this.state.email,
       })
       .then(function (response) {
            //TODO: push tem que ser pra pagina como se o usuário tivesse logado    
            // self.props.history.push('/register');
            console.log("Loguei")
       })
       .catch(function (error) {
         self.setState({showAlert: true});
       });
    }
 
    render () {
        return (
        <div className="col-md-12">
         <div className="register-login-wrapper col-md-2">
             <h1 className="register-login-title">Login</h1>
             <form className="register-login-form">
                 <label>Email:</label>
                 <input name="email" type="text" value={this.state.email} 
                     onChange={e => this.onChangeHandler(e)} />
                 <br />
                 <label>Senha:</label>
                 <input name="password" type="password" value={this.state.password} 
                     onChange={e => this.onChangeHandler(e)} />
                 <br />
                 <Link to= "/register" className="already-has-account"><small>Não possui conta? Registre-se!</small></Link>
                 <button className="register-login-button form-control" onClick={(e) => this.onSubmit(e)}>Login</button>
                 {this.state.showAlert &&
                    <span className="no-user-found">Usuário não encontrado!</span>
                 }
             </form>
         </div>
        </div>
        );
    }
 }

 export default Login;