import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import useModal from "../../hooks/useModal";

interface LoginProps {
  closeModal: () => void;
}

const Login: React.FC<LoginProps> = ({ closeModal }) => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModal();

  function closeAll() {
    handleModalClose();
    closeModal();
  }

  return (
    <>
      <div className="flex bg-base-100 justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8 pt-4 rounded-lg shadow-lg">
          <div className="w-full flex justify-end items-center">
            <button className="float-right" onClick={closeModal}>
              Fechar
            </button>
          </div>
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

              <button
                type="submit"
                className="btn btn-primary sm:btn-wide block mx-auto"
              >
                Entrar
              </button>
            </Form>
          </Formik>
          <p className="text-center mt-4">
            Não tem cadastro?{" "}
            <button onClick={handleModalOpen} className="text-primary">
              Cadastre-se
            </button>
          </p>
          {isModalOpen && (
            <div className="flex w-full gap-2 justify-center items-center pt-4">
              <Link to={"/register-employee"}>
                <button className="btn btn-neutral" onClick={closeAll}>
                  Funcionário
                </button>
              </Link>
              <Link to={"/register-candidate"}>
                <button className="btn btn-neutral" onClick={closeAll}>
                  Candidato
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
