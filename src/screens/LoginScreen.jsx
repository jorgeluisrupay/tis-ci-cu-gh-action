import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as ComponentsStyle from "../styles/LoginStyle";

export const LoginScreen = ({ authLogin }) => {
  const [signIn, toggle] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    if (autenticado) {
      authLogin();
      navigate("movie");
    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autenticado]);

  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");

  const { email, password } = usuario;

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar que no haya campos vacios
    if (email.trim() === "" || password.trim() === "") {
      setError(true);
      setErrorMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    }
    if (password.length < 4) {
      setError(true);
      setErrorMensaje("Password es incorrecta");
      setTimeout(() => {
        setError(false);
        setErrorMensaje("");
      }, 5000);
      return;
    }

    if (email === "admin" && password === "admin") {
      localStorage.setItem("token", "asdasdasdasdasdasdasdasd");
      setAutenticado(true);
    }else{
      setError(true);
      setErrorMensaje("La cuenta no existe");
      setTimeout(() => {
        setError(false);
        setErrorMensaje("");
      }, 5000);
      return;
    }
  };

  return (
    // eslint-disable-next-line
    <ComponentsStyle.BodyLogin>
      <ComponentsStyle.Container>
        <ComponentsStyle.SignUpContainer signinIn={signIn}>
          <ComponentsStyle.Form>
            <ComponentsStyle.Title>Crear cuenta</ComponentsStyle.Title>
            <ComponentsStyle.Input type="text" placeholder="Nombre" />
            <ComponentsStyle.Input type="email" placeholder="Email" />
            <ComponentsStyle.Input type="password" placeholder="Contraseña" />
            <ComponentsStyle.Button>Registrarse</ComponentsStyle.Button>
          </ComponentsStyle.Form>
        </ComponentsStyle.SignUpContainer>

        <ComponentsStyle.SignInContainer signinIn={signIn}>
          <ComponentsStyle.Form>
            <ComponentsStyle.Title>MovieTIS</ComponentsStyle.Title>
            <ComponentsStyle.Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
            <ComponentsStyle.Input
              type="password"
              placeholder="Contraseña"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <ComponentsStyle.Anchor href="/">
              Olvidaste tu contraseña?
            </ComponentsStyle.Anchor>
            <ComponentsStyle.Button type="submit" onClick={handleSubmit}>
              Ingresar
            </ComponentsStyle.Button>
            {
              error && <p style={{color: "red", paddingTop: "10px"}}>{errorMensaje}</p>
            }
          </ComponentsStyle.Form>
        </ComponentsStyle.SignInContainer>

        <ComponentsStyle.OverlayContainer signinIn={signIn}>
          <ComponentsStyle.Overlay signinIn={signIn}>
            <ComponentsStyle.LeftOverlayPanel signinIn={signIn}>
              <ComponentsStyle.Title>
                Bienvenido de nuevo!
              </ComponentsStyle.Title>
              <ComponentsStyle.Paragraph>
                Para mantenerse conectado con nosotros, inicie sesión con su
                información personal
              </ComponentsStyle.Paragraph>
              <ComponentsStyle.GhostButton onClick={() => toggle(true)}>
                Ingresar
              </ComponentsStyle.GhostButton>
            </ComponentsStyle.LeftOverlayPanel>

            <ComponentsStyle.RightOverlayPanel signinIn={signIn}>
              <ComponentsStyle.Title>
                No tienes una cuenta?
              </ComponentsStyle.Title>
              <ComponentsStyle.Paragraph>
                Ingrese sus datos personales y comience el catalogo de películas
              </ComponentsStyle.Paragraph>
              <ComponentsStyle.GhostButton onClick={() => toggle(false)}>
                Registrate
              </ComponentsStyle.GhostButton>
            </ComponentsStyle.RightOverlayPanel>
          </ComponentsStyle.Overlay>
        </ComponentsStyle.OverlayContainer>
      </ComponentsStyle.Container>
    </ComponentsStyle.BodyLogin>
  );
};
