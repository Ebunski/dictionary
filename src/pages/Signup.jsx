import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, username);
    const credentials = {
      email: email,
      password: password,
      username: username,
    };
    axios
      .post(
        "/api/register",
        { params: credentials }
        // { "Content-Type": "application/json" }
      )
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <div className="Login Page">
      <form method="POST" className="grid text-center gap-4 justify-center">
        <div className="text-[1.5rem] md:text-[3rem]">Sign Up</div>
        <input
          type="email"
          // name="email"
          id="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
        />
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
          defaultValue={username}
        />
        <input
          type="password"
          id="passsword"
          className=""
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={password}
        />
        <input
          type="submit"
          value="Yeeeeeee!!"
          className="bg-[gray] rounded-md"
          onClick={handleRegisterSubmit}
        />
      </form>
    </div>
  );
}

export default Signup;
