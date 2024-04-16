import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function CandidateRegistration() {
  return (
    <>
      <main className="w-full mt-4 mb-20">
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-4">
            Cadastro de candidato
          </h2>
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
              birthDate: "",
              race: "",
              otherRace: "",
              gender: "",
              otherGender: "",
              genderIdentity: "",
              sexualOrientation: "",
              education: "",
              professionalExperience: "",
              skillsAndCompetencies: "",
              experienceDiversityInclusion: "",
              participationInitiatives: "",
              accommodations: "",
              salaryExpectations: "",
              changeLocation: "",
              professionalReferences: "",
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
              birthDate: Yup.string().required(
                "Por favor, digite sua data de nascimento."
              ),
              race: Yup.string(),
              gender: Yup.string(),
              genderIdentity: Yup.string(),
              sexualOrientation: Yup.string(),
              education: Yup.string(),
              professionalExperience: Yup.string(),
              skillsAndCompetencies: Yup.string(),
              experienceDiversityInclusion: Yup.string(),
              participationInitiatives: Yup.string(),
              accommodations: Yup.string(),
              salaryExpectations: Yup.string(),
              changeLocation: Yup.string(),
              professionalReferences: Yup.string(),
            })}
            onSubmit={(values) => {
              console.log("Dados:", values);
            }}
          >
            <Form className="space-y-4 w-[70%] lg:w-[50%]">
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
                <label htmlFor="birthDate" className="block mb-1 font-bold">
                  Data de nascimento
                </label>
                <Field
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  className="w-full px-3 py-2 input input-bordered bg-neutral text-neutral-content"
                />
                <ErrorMessage
                  name="birthDate"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="race" className="block mb-1 font-bold">
                  Raça/etnia
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value="Negro"
                  />
                  <span className="ml-2">Negro</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value="Pardo"
                  />
                  <span className="ml-2">Pardo</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value="Amarelo"
                  />
                  <span className="ml-2">Amarelo</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value="Indígena"
                  />
                  <span className="ml-2">Indígena</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value="Branco"
                  />
                  <span className="ml-2">Branco</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="race"
                    name="race"
                    className="radio radio-primary"
                    value=""
                  />
                  <span className="ml-2">Prefiro não dizer</span>
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <label
                    htmlFor="otherRace"
                    className="block mb-1 mr-2 font-bold"
                  >
                    Outro (especificar):
                  </label>
                  <Field
                    type="text"
                    id="otherRace"
                    name="otherRace"
                    className="px-3 py-2 input input-sm input-bordered bg-neutral text-neutral-content"
                  />
                </div>
                <ErrorMessage
                  name="race"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>

              <div>
                <label htmlFor="gender" className="block mb-1 font-bold">
                  Gênero
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="gender"
                    name="gender"
                    className="radio radio-primary"
                    value="Feminino"
                  />
                  <span className="ml-2">Feminino</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="gender"
                    name="gender"
                    className="radio radio-primary"
                    value="Mascculino"
                  />
                  <span className="ml-2">Masculino</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="gender"
                    name="gender"
                    className="radio radio-primary"
                    value="Não-binário"
                  />
                  <span className="ml-2">Não-binário</span>
                </label>
                <label className="flex my-2">
                  <Field
                    type="radio"
                    id="gender"
                    name="gender"
                    className="radio radio-primary"
                    value=""
                  />
                  <span className="ml-2">Prefiro não dizer</span>
                </label>
                <div className="flex flex-col mt-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="otherGender"
                    className="block mb-1 mr-2 font-bold"
                  >
                    Outro (especificar):
                  </label>
                  <Field
                    type="text"
                    id="otherGender"
                    name="otherGender"
                    className="px-3 py-2 input input-sm input-bordered bg-neutral text-neutral-content"
                  />
                </div>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="genderIdentity"
                  className="block mb-1 font-bold"
                >
                  Identidade de gênero
                </label>
                <Field
                  name="genderIdentity"
                  as="select"
                  className="select select-bordered w-full max-w-xs bg-neutral text-neutral-content"
                >
                  <option value="homem">Homem</option>
                  <option value="mulher">Mulher</option>
                  <option value="transgenero">Transgênero</option>
                  <option value="naoBinario">Não-binário</option>
                  <option value="pnd">Prefiro não dizer</option>
                </Field>
                <div className="flex flex-col mt-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="otherGender"
                    className="block mb-1 mr-2 font-bold"
                  >
                    Outro (especificar):
                  </label>
                  <Field
                    type="text"
                    id="otherGender"
                    name="otherGender"
                    className="px-3 py-2 input input-sm input-bordered bg-neutral text-neutral-content"
                  />
                </div>
                <ErrorMessage
                  name="genderIdentity"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="sexualOrientation"
                  className="block mb-1 font-bold"
                >
                  Orientação sexual
                </label>
                <Field
                  name="sexualOrientation"
                  as="select"
                  className="select select-bordered w-full max-w-xs bg-neutral text-neutral-content"
                >
                  <option value="heterossexual">Heterossexual</option>
                  <option value="homossexual">Homossexual</option>
                  <option value="bissexual">Bissexual</option>
                  <option value="pansexual">Pansexual</option>
                  <option value="assexual">Assexual</option>
                  <option value="pnd">Prefiro não dizer</option>
                </Field>
                <div className="flex flex-col mt-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="otherSexualOrientation"
                    className="block mb-1 mr-2 font-bold"
                  >
                    Outro (especificar):
                  </label>
                  <Field
                    type="text"
                    id="otherSexualOrientation"
                    name="otherSexualOrientation"
                    className="px-3 py-2 input input-sm input-bordered bg-neutral text-neutral-content"
                  />
                </div>
                <ErrorMessage
                  name="sexualOrientation"
                  component="div"
                  className="text-warning text-sm"
                />
              </div>
              <div>
                <label htmlFor="education" className="block mb-1 font-bold">
                  Nível de escolaridade
                </label>
                <Field
                  name="education"
                  as="select"
                  className="select select-bordered w-full max-w-xs bg-neutral text-neutral-content"
                >
                  <option value="ensinoFundamental">Ensino Fundamental</option>
                  <option value="ensinoMedio">Ensino Médio</option>
                  <option value="graduacao">Graduação</option>
                  <option value="posGraduacao">Pós-graduação</option>
                  <option value="mestrado">Mestrado</option>
                  <option value="doutorado">Doutorado</option>
                </Field>
                <div className="flex flex-col mt-2 sm:flex-row sm:items-center">
                  <label
                    htmlFor="otherEducation"
                    className="block mb-1 mr-2 font-bold"
                  >
                    Outro (especificar):
                  </label>
                  <Field
                    type="text"
                    id="otherEducation"
                    name="otherEducation"
                    className="px-3 py-2 input input-sm input-bordered bg-neutral text-neutral-content"
                  />
                </div>
                <ErrorMessage
                  name="education"
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
      </main>
    </>
  );
}
