import Button from "../components/Button";

const Login = () => {
    return ( 
        <article className="login">
            <h2 className="login__h2">LOGIN</h2>
            <div className="login__form">
                <h3 className="login__h3">REGISTERED CUSTOMERS</h3>
                <p className="login__p">If you have an account, sign in with your email address.</p>
                <label htmlFor="fname" className="login__label">First name 
                    <span className="login__label__span-red">*</span>
                </label>
                <input type="text" name="fname" className="form__input login__input" />
                <label htmlFor="email" className="login__label">Email 
                    <span className="login__label__span-red">*</span>
                </label>
                <input type="email" name="email" className="form__input login__input" />
                <div className="login__rememberMe">
                    <input type="checkbox" name="checkbox" className="login__checkbox form__input"/>
                    <label htmlFor="checkbox">Remember me</label>
                </div>
                <Button destination="/" text="Sign in" className="login__button"/>
                <a href="/" className="login__a">Forgot your Password?</a>
            </div>
            <div className="login__newCustomer">
                <h3 className="newCustomer__h3">NEW CUSTOMER</h3>
                <p className="newCustomer__p">Creating an account has many benefits: check out faster, track orders and more.</p>
                <Button destination="/" text="Create an Account"/>
            </div>
        </article>
     );
    }
 
export default Login;