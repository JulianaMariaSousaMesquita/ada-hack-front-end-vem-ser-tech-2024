import { Link } from "react-router-dom";

const FeedBacks = () => {
  const feedbacksData = [
    {
      id: 1,
      name: "Alice",
      course: "Desenvolvimento em React",
      feedback: "Ótimo curso! Aprendi muito.",
      photo: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Bob",
      course: "Fundamentos de JavaScript",
      feedback: "Conteúdo excelente e explicações claras.",
      photo: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      id: 3,
      name: "Carol",
      course: "Estilização com CSS",
      feedback: "Gostei bastante dos exercícios práticos.",
      photo: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
      id: 4,
      name: "David",
      course: "Programação em Python",
      feedback: "Explicações claras e exemplos úteis.",
      photo: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      id: 5,
      name: "Emily",
      course: "Design Web",
      feedback: "O instrutor era muito conhecedor.",
      photo: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      id: 6,
      name: "Frank",
      course: "Gerenciamento de Banco de Dados",
      feedback: "Curso desafiador mas gratificante.",
      photo: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      id: 7,
      name: "Grace",
      course: "Ciência de Dados",
      feedback: "O material do curso estava bem organizado.",
      photo: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      id: 8,
      name: "Harry",
      course: "Aprendizado de Máquina",
      feedback: "Ótimo instrutor e tópicos interessantes.",
      photo: "https://randomuser.me/api/portraits/men/8.jpg",
    },
  ];

  return (
    <>      
      <div className="flex justify-center items-center flex-col space-y-4">
        <p className="text-center text-lg">Deixe seu feedback:</p>
        <Link to="/form">
          <button className="btn btn-primary">Deixar Feedback</button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {feedbacksData.map((feedback) => (
          <div
            key={feedback.id}
            className="card card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img src={feedback.photo} alt={feedback.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{feedback.name}</h2>
              <p>{feedback.feedback}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Ver</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeedBacks;
