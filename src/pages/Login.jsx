import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/login")
      .then((res) => {
        if (res.data == "Login successful") {
          console.log(res.data);

          // On Successful login, clear email and password fields.
          setEmail("");
          setPassword("");

          navigate("/");
        } else console.log(res.data);
      })
      .catch((err) => err && console.log(err));

    navigate("/");
  };
  return (
    <section>
      <form
        method="POST"
        className="grid text-center gap-4 justify-center"
      >
        <div className="text-[1.5rem] md:text-[3rem]">Login</div>
        <input
          type="email"
          // name="email"
          id="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={email}
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
          onClick={handleLoginSubmit}
        />
      </form>
    </section>
  );
}

export default Login;
