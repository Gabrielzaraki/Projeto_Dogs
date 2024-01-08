import React from "react";
import { Link } from "react-router-dom";
import Input from "../form/Input";
import Button from "../form/Button";
import Useform from "../../Hooks/Useform";
import { GET_USER, TOKEN_POST } from "../../api";
import { UserContext } from "../../UserContext";

function LoginForm() {
  const username = Useform();
  const password = Useform();

  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input
          autocomplete="on"
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
