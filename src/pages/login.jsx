import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  };

  const onSignin = (e) => {
    e.preventDefault();
    postData("https://test-react.agiletech.vn/auth/login", {
      username: username,
    }).then((data) => {
      localStorage.setItem("token", data.accessToken);
      navigate("/");
    });
  };

  return (
    <div className="wrapper">
      <div className="content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="66"
          height="41"
          viewBox="0 0 66 41"
          fill="none"
        >
          <rect
            y="17.2877"
            width="26.8156"
            height="23.0502"
            rx="11.5251"
            fill="#9C69E2"
          />
          <rect
            x="38.8828"
            width="26.8156"
            height="40.3378"
            rx="13.4078"
            fill="#F063B8"
          />
        </svg>
        <div className="signin-wrapper">
          <h1>Sign In</h1>
          <form className="form-signin">
            <div className="email-address">
              <label htmlFor="email-address">Username</label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                id="email"
                type="text"
              />
            </div>
            <button onClick={onSignin}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
