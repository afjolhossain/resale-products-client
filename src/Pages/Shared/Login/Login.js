import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../../Assets/Images/login&Singup/Secure login-bro.png";
import { AuthContext } from "../../../contexts/AuthPovider";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const { signIn, signInGoogle } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    setLoginError("");
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });

    if (password.length < 6) {
      return;
    }
  };

  const signInWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              {loginError && (
                <div className="alert alert-error shadow-lg mt-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current flex-shrink-0 h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {loginError}
                  </div>
                </div>
              )}
            </form>
            <div className="form-control mt-4">
              <button onClick={signInWithGoogle} className="btn btn-primary">
                Sign-In-Google
              </button>
            </div>
            <p className="text-red-700 font-bold">
              Don't have an account?
              <Link to="/signup">
                <span className="text-gray-900 font-bold"> Sign up Here</span>
              </Link>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-5/12 h-2/4 mr-4"
        >
          <img className="login" src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
