import "./Signup.css";
import Navbar from "./Navbar";

function Signup() {
  return (
    <div className="signup">
      <Navbar />
      <div className="signup-container">
        <h2>Signup</h2>
        <div className="signup-box">
          <form action="">
            <div className="input-group">
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
            <div className="input-group">
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
            <div className="input-group">
              <input type="email" id="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
          <p>Already have an account? Login</p>
          <button className="signup-button-google">Signup with Google</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
