import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../../Assets/Images/login&Singup/Sign up-bro.png";
import { AuthContext } from "../../../contexts/AuthPovider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [signUpError, setSignUPError] = useState("");
  const { createUser, signInGoogle, updateUser } = useContext(AuthContext);

  const alert = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "user created successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const navigate = useNavigate();

  const handleRegister = (event) => {
    setSignUPError("");
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);
    form.reset();

    createUser(email, password, name)
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert();
        navigate("/");

        const userInfo = {
          displayName: name,
        };
        updateUser(userInfo)
          .then(() => {})
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.error(error);
        setSignUPError(error.message);
      });
    if (password.length < 6) {
      setSignUPError("password should be  six characters or more");
      return;
    }
  };

  const signInWithGoogle = () => {
    signInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        alert();
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setSignUPError(error.message);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
              </div>
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
              {signUpError && (
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
                    <span>{signUpError}</span>
                  </div>
                </div>
              )}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Sign-up
                </button>
              </div>
            </form>

            <div className="form-control mt-4">
              <button onClick={signInWithGoogle} className="btn btn-primary">
                Sign-In-Google
              </button>
            </div>

            <p className="text-red-700 font-bold">
              Already have an account?
              <span className="text-gray-900 font-bold">
                <Link to="/login"> Login Here</Link>
              </span>
            </p>
          </div>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="w-5/12 h-2/4 mr-4"
        >
          <img className="login" src={signUpImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
