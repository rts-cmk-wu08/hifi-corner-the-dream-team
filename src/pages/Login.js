import Button from "../components/Button";
import LoginForm from "../formComponents/loginForm";

const Login = () => {
  return (
    <section className="login">
      <h1 className="login__h1">Login</h1>
      <LoginForm />
      <section className="login__new">
        <h3 className="login__h3 login__h3--center">new customer</h3>
        <p className="login__p login__p--center">
          Creating an account has many benefits: check out faster, track orders
          and more.
        </p>
        <Button destination="/createaccount" text="Create an Account" />
      </section>
    </section>
  );
};

export default Login;
