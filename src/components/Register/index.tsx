import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const Register: React.FC = () => {
  return (
    <>
      <div className="flex mt-4 justify-center items-center bg-transparent">
        <div className="max-w-md w-full mx-auto p-8 bg-transparent rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-4">Cadastro de funcionário</h1>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              employeeId: "",
              state: "",
            }}
            validationSchema={Yup.object({
              fullName: Yup.string().required(
                "Por favor, digite o seu nome completo."
              ),
              email: Yup.string()
                .email("Endereço de e-mail inválido")
                .required("Por favor, digite o seu e-mail."),
              password: Yup.string()
                .required("Por favor, digite uma senha")
                .matches(
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  "A senha deve conter pelo menos uma letra, um caractere especial, um número e ter no mínimo 8 caracteres"
                ),
              employeeId: Yup.string().required(
                "Por favor, digite o sua matricula."
              ),
              state: Yup.string().required("Por favor, digite o seu estado."),
            })}
            onSubmit={(values) => {
              console.log("Dados:", values);
            }}
          >
            <Form className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block mb-1 font-bold">
                  Nome completo
                </label>
                <Field
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-bold">
                  E-mail
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-bold">
                  Senha
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="employeeId" className="block mb-1 font-bold">
                  Matricula
                </label>
                <Field
                  type="text"
                  id="employeeId"
                  name="employeeId"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="employeeId"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="state" className="block mb-1 font-bold">
                  Estado
                </label>
                <Field
                  type="text"
                  id="state"
                  name="state"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary sm:btn-wide block mx-auto"
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
