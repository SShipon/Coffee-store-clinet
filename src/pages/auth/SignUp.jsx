import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'; // 👈 Custom CSS এখানে import

const SignUp = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        {/* 🔥 Glowing Animated Border Box */}
        <div className="relative">
          {/* Animated rotating border */}
          <div className="rotating-border"></div>

          {/* Actual Form */}
          <div className="relative z-10 card flex-shrink-0 w-full max-w-sm bg-base-100 p-6 rounded-xl">
            <form className="card-body p-0">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
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
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Button */}
              <div className="form-control mt-4">
                <button className="btn btn-primary">Register</button>
              </div>

              {/* Toggle to login */}
              <p className="text-sm mt-4 text-left">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 underline font-medium">
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
