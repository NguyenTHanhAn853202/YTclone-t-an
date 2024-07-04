import { Link } from "react-router-dom";


function Login() {
    return (
        
        <div>
            <Link to="/login">link</Link>
            <h2>Login</h2>
            {/* Form for login */}
            <form>
                <label>
                    Email:
                    <input type="email" name="email" required />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      );
}


export default Login;