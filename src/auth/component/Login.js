import React, { Component } from 'react';
import Logo from '../../assets/images/m++.png';
import { connect } from 'react-redux';
import { login , attemptAutoLogin} from '../store/actions';

class Login extends Component {

  componentDidMount(){
    this.props.autoLogin()
 }
  
    constructor(props){
        super(props);
        this.state = {
            email: null,
            password: null, 
            secureToken: null
        }
    }

    login(data){
         this.props.login(this.state);
    }

  render() {

    return (
      <header className="header uk-background-muted">
        <div className="uk-card uk-card-large uk-card-default uk-position-center uk-card-hover uk-width-1-2@s">
          <img className="Logo" src={Logo} alt=""/>
          <div className="uk-card-body uk-margin-remove uk-flex-middle uk-flex-wrap uk-grid-collapse uk-child-width-1-1@l uk-flex-center"
               data-uk-grid>
            <form className="uk-text-center uk-padding-remove">
              <div className="uk-margin">
                <input 
                    id="email" 
                    className="uk-input" 
                    type="email" 
                    placeholder="email"
                    onChange={ (e) => this.setState({email: e.target.value}) }
                    />
              </div>
              <div className="uk-margin">
                <input 
                    id="password" 
                    className="uk-input" 
                    type="password" 
                    placeholder="Password"
                    onChange={(e) => this.setState({password: e.target.value}) }
                    />
              </div>
              <button 
                    onClick={ () => this.login()} 
                    className="uk-button uk-button-primary" 
                    type="button" data-uk-button
                    >Log In</button>
            </form>
          </div>
        </div>
      </header>
    )
  }
}


const mapStateToProps = (state) =>{
    console.log(state.auth.token, state.auth.user, state.auth.isLoggedIn);
    return{
        auth: state.auth
    }
}

function mapDispatchToProps(dispatch){
  return {
    login: (e) =>  dispatch(login(e))  ,
    autoLogin: () => dispatch(attemptAutoLogin())
  }
    // return bindActionCreators({ isWorking, login, isDoneWorking }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
