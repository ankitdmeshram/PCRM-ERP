import { Link } from "@remix-run/react";
import "~/styles/styles.css";

const _index = () => {
  return (
    <div className="container-fluid bg-back">
      <div className="row justify-content-center align-items-center h-100vh">
        <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-7 col-sm-8">
          <form className="shadow gp-5 bg-white rounded-lg">
            <h2 className="text-center fw-bolder mb-2">PCRM</h2>
            <h4 className="text-center fw-bold mb-2">Welcome Back !</h4>
            <p className="text-center mb-4">Sign in to continue</p>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              {/* <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div> */}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Remember Me
              </label>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Sign in
            </button>
            <p className="text-center mt-4">
              Don't have an account? <Link to={"/register"}>Register Now</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default _index;
