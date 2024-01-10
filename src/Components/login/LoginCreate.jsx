import React from "react";
import Input from "../form/Input";
import Button from "../form/Button";
import Useform from "../../Hooks/Useform";
import { USER_POST } from "../../api";
import { UserContext } from "../../UserContext";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../helper/Error";

function LoginCreate() {
  const username = Useform();
  const email = Useform("email");
  const password = Useform();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input
          autocomplete="on"
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Cadastrando ...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error}/>
      </form>
    </section>
  );
}

export default LoginCreate;
