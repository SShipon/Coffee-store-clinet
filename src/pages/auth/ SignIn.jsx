import React from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'; // 👈 CSS import for animated border

const SignIn = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">


        {/* 🔥 Animated Border Form */}
        <div className="relative">
          {/* Glowing Border */}
          <div className="rotating-border"></div>

          {/* Actual Login Form */}
          <div className="relative z-10 card flex-shrink-0 w-full max-w-sm bg-base-100 p-6 rounded-xl">
            <form className="card-body p-0">
              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Button */}
              <div className="form-control mt-4">
                <button className="btn btn-neutral">Login</button>
              </div>

              {/* Toggle to Register */}
              <p className="text-sm mt-4 text-left">
                Don't have an account?{" "}
                <Link to="/register" className="text-blue-600 underline font-medium">
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignIn;
