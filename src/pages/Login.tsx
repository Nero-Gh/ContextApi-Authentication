import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

type Props = {};

const Login = (props: Props) => {
  const { authenticated, setAuthenticated } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    //In here you will handle your rules

    setAuthenticated(true);
    navigate("/");
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
