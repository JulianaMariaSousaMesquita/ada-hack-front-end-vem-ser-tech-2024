import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MenuBar from "../../components/MenuBar";

const Register: React.FC = () => {
  return (
    <>
      <MenuBar />
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-4">Cadastro</h1>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              employeeId: "",
              state: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required("Por favor, digite o seu nome completo."),
              email: Yup.string()
                .email("Endereço de e-mail inválido")
                .required("Por favor, digite o seu e-mail."),
              password: Yup.string()
                .required("Por favor, digite uma senha")
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "A senha deve conter pelo menos uma letra, um caractere especial, um número e ter no mínimo 8 caracteres"
                ),
              employeeId: Yup.string().required("Por favor, digite o sua matricula."),
              state: Yup.string().required("Por favor, digite o seu estado."),
            })}
            onSubmit={(values) => {
              console.log("Dados:", values);
            }}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-2 font-bold">
                  Nome completo
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold">
                  E-mail
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block mb-2 font-bold">
                  Senha
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="employeeId" className="block mb-2 font-bold">
                  Matricula
                </label>
                <Field
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="employeeId"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="state" className="block mb-2 font-bold">
                  Estado
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 border rounded-lg"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              >
                Cadastrar
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Register;
