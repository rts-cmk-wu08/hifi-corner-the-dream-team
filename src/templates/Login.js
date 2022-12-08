import Button from "../components/Button";

const Login = () => {
    return ( 
        <article className="login">
            <h2 className="login__h2">LOGIN</h2>
            <div className="login__form">
                <h3>REGISTERED CUSTOMERS</h3>
                <p>If you have an account, sign in with your email address.</p>
                <label htmlFor="fname">First name 
                    <h4 className="login__h4-red">*</h4>
                </label>
                <input type="text" name="fname" className="form__input" />
                <label htmlFor="email">Email 
                    <h4 className="login__h4-red">*</h4>
                </label>
                <input type="email" name="email" className="form__input" />
                <input type="checkbox" name="checkbox" className=""/>
                <label htmlFor="checkbox">Remember me</label>
                <Button destination="/" text="Sign in"/>
                <a href="#">Forgot your Password?</a>
            </div>
            <div className="login__new-customer">
                <h3>NEW CUSTOMER</h3>
                <p>Creating an account has many benefits: check out faster, track orders and more.</p>
                <Button destination="/" text="Create an Account"/>
            </div>
        </article>
     );
    }
 
export default Login;