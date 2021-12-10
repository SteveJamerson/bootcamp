/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import Button from "../../components/Atoms/Button";
import TextField from "../../components/Atoms/TextField";
import Slider from "../../components/Molecules/Slider";
import { SliderData } from "../../components/Molecules/Slider/Slider.types";
import { Form, SectionLogin, Separator, Slide } from "./styles";
import { useAuth } from "./../../contexts/AuthContext";
import { useNavigate, useRoutes } from "react-router";

type actionName = "signIn" | "signUp" | "forgot";

const Login: React.FC = () => {
  const { signup, signin, forgot, google, currentUser } = useAuth();

  const redirect = useNavigate();
  useEffect(() => {
    currentUser && redirect("/home");
  });

  const loginProvider = async (provider: "google" = "google") => {
    provider === "google" && (await google());
  };

  const actions: any = {
    signIn: {
      is: "signIn",
      isChange: "signUp",
      action: "Sign in",
      actionChange: "Create Account",
      actionTitle: "Welcome to Invision",
    },
    signUp: {
      is: "signUp",
      isChange: "signIn",
      action: "Sign up",
      actionChange: "Log in",
      actionTitle: "Getting Started",
    },
    forgot: {
      is: "forgot",
      isChange: "signIn",
      action: "Send recovery email",
      actionChange: "Go back",
      actionTitle: "Forgot your password",
    },
  };

  const [loading, setLoading] = useState(false);
  const [config, setConfig] = useState(actions["signIn"]);
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleState = useCallback((e) => {
    setState((oldState) => {
      return {
        ...oldState,
        [e.target.id]: e.target.value,
      };
    });
  }, []);

  const handleConfig = useCallback(
    (str: actionName) => {
      setConfig(actions[str]);
    },
    [actions]
  );

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setLoading(true);

    try {
      switch (config.is) {
        case "signIn":
          await signin(state);
          break;
        case "signUp":
          await signup(state);
          break;
        case "forgot":
          await forgot(state);
          break;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const changeAuthAction = (change: actionName) => {
    handleConfig(change);
  };

  const slides: SliderData[] = [
    {
      id: 1,
      image: "/assets/images/Data.png",
      title: "Marcenas mattis egestas",
      text: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      id: 2,
      image: "/assets/images/Data.png",
      title: "Marcenas mattis egestas",
      text: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      id: 3,
      image: "/assets/images/Data.png",
      title: "Marcenas mattis egestas",
      text: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
    {
      id: 4,
      image: "/assets/images/Data.png",
      title: "Marcenas mattis egestas",
      text: "Erdum et malesuada fames ac ante ileum primmer in faucibus uspendisse porta.",
    },
  ];

  return (
    <SectionLogin className="row">
      <Slide className="col-12 col-md-6">
        <div className="row flex-column align-items-center col-10">
          <Slider sliders={slides}></Slider>
        </div>
      </Slide>
      <Form className="col-12 col-md-6">
        <h2 className="title">Invision</h2>
        <h5 className="subtitle">{config?.actionTitle}</h5>
        <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
          {config?.is === "signUp" && (
            <TextField
              id="name"
              type="text"
              label="Full Name"
              onChange={handleState}
              required={config?.is === "signUp"}
              pattern=".{2,}"
              errorText="O nome não pode ter menos de 2 caracteres"
            />
          )}
          <TextField
            id="email"
            type="email"
            label="Users name or Email"
            onChange={handleState}
            required={true}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            errorText="o e-mail está incorreto."
          />
          {config?.is !== "forgot" && (
            <>
              <TextField
                id="password"
                type="password"
                label="Password"
                onChange={handleState}
                required={config?.is !== "forgot"}
                pattern=".{6,}"
                errorText="A senha não pode ter menos de 6 caracteres"
              />
              <Button
                className="forgot"
                variant="link"
                onClick={() => changeAuthAction("forgot")}
              >
                Forgot password?
              </Button>
            </>
          )}
          <Button
            className="my-4"
            text={config?.action}
            color="primary"
            type="submit"
          />
          <Separator />
          <Button
            className="my-4 shadow"
            text={"Sign up with Google"}
            color="secondary"
            iconName="google"
            onClick={() => loginProvider("google")}
          />
          {config?.is === "signUp" && (
            <p className="col-xs-7 mx-auto">
              By signing up, you agree to <b>Invision</b>
              <Button variant="link">Terms of Conditions</Button> and{" "}
              <Button variant="link">Privacy Policy</Button>
            </p>
          )}
          <p>
            {config?.is !== "forgot" && (
              <span>
                {" "}
                {config?.is === "signUp" ? "Already on" : "New"}{" "}
                <b>Invision?</b>
              </span>
            )}
            <Button
              onClick={() => changeAuthAction(config?.isChange)}
              variant="link"
            >
              {config?.actionChange}
            </Button>
          </p>
        </form>
      </Form>
    </SectionLogin>
  );
};

export default memo(Login);
