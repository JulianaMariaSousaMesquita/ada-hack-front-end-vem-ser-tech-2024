import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-8 mb-20 bg-transparent">
        <div className="max-w-md w-full mx-auto p-8 bg-transparent rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 ">Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Endereço de e-mail inválido")
                .required("Por favor, digite o seu e-mail."),
              password: Yup.string()
                .required("Por favor, digite uma senha")
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "A senha deve conter pelo menos uma letra, um caractere especial, um número e ter no mínimo 8 caracteres"
                ),
            })}
            onSubmit={(values) => {
              console.log("Dados:", values);
            }}
          >
            <Form className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-1 font-bold ">
                  E-mail
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-bold ">
                  Senha
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content "
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <button type="submit" className="btn btn-primary btn-wide block mx-auto">
                Entrar
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-4">
            Não tem cadastro?{" "}
            <Link to="/cadastro" className="text-primary">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
