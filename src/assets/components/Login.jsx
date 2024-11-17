import "./Login.css";
import Navbar from "./Navbar";
function Login() {
  return (
    <div className="login">
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-box">
          <form action="">
            <div className="input-group">
              <input type="email" id="email" placeholder="Email" />
            </div>

            <div className="input-group">
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <p>Don&#39;t have an account? Signup</p>
          <button className="login-button-google">Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
