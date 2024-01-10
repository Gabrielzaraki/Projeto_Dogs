import React from "react";
import { Link } from "react-router-dom";
import Input from "../form/Input";
import Button from "../form/Button";
import Useform from "../../Hooks/Useform";
import { GET_USER, TOKEN_POST } from "../../api";
import { UserContext } from "../../UserContext";
import Error from "../helper/Error";
import styles from "./LoginForm.module.css";
import stylesBtn from "../form/Button.module.css";

function LoginForm() {
  const username = Useform();
  const password = Useform();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input
          autocomplete="on"
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Entrar</Button>
        )}

        {error && <Error error={error} />}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">Esqueceu a senha?</Link>
      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
      </div>
      <Link className={stylesBtn.button} to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
