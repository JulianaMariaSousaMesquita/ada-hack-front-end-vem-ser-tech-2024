import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login: React.FC = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-transparent">
        <div className="max-w-md mx-auto p-8 bg-transparent rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4 text-white">
            Login
          </h1>
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
                <label
                  htmlFor="email"
                  className="block mb-1 font-bold text-white"
                >
                  E-mail
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-white rounded-lg text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-bold text-white"
                >
                  Senha
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border border-white rounded-lg text-white"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg block mx-auto"
              >
                Entrar
              </button>
            </Form>
          </Formik>
          <p className="text-white text-center mt-4">
            Não tem cadastro?{" "}
            <Link to="/cadastro" className="text-blue-500">
              Cadastre-se aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
