import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImage from "../../../Assets/Images/login&Singup/Sign up-bro.png";
import { AuthContext } from "../../../contexts/AuthPovider";
import Swal from "sweetalert2";

const SignUp = () => {
  const [signUpError, setSignUPError] = useState("");
  const { createUser, signInGoogle, updateUser, loading } =
    useContext(AuthContext);

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
            {!loading && (
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
            )}
            {loading && (
              <svg
                aria-hidden="true"
                className="inline w-8 h-8 mx-auto text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            )}

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
