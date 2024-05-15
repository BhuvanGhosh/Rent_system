import React from 'react';
import '../styles/loginpage.css'; // Assuming that style.css is in the same directory

function Login() {
  return (
    <div className="main">
      <div className="login">
        <h1>Login</h1>
        <p>User Name</p><br />
        <input type="text" className="txt" placeholder="Your Name" />
        <hr /><br />
        <p>Password</p>
        <br />
        <input type="password" className="txt" placeholder="Your Password" />
        <hr />
        <p className="fp">
          <a href="#">Forgot Password?</a>
        </p>
        <button type="button" className="btn">LOGIN</button>
        <p className="signup">Or Signup using </p>
      </div>
      {/* <div className="contact">
        <a href="#"><i className="fa fa-facebook-square" style={{color: 'rgb(56, 56, 241)', fontSize: 'xx-large'}} aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-twitter-square" style={{color: 'rgb(48, 112, 248)', fontSize: 'xx-large'}} aria-hidden="true"></i></a>
        <a href="#"><i className="fa fa-google-plus" style={{color: 'red', fontSize: 'xx-large'}} aria-hidden="true"></i></a>
      </div> */}
      <div className="last">
        {/* <p className="signup2">Or Signup using</p> */}
        <p><a href="#">SIGNUP</a></p>
      </div>
    </div>
  );
}

export default Login;
