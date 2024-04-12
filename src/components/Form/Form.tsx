import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; 
import RatingStars from '../RatingStars/RatingStars';


const Form = () => {
  const [message, setMessage] = useState('');
  const [stars, setStars] = useState<number | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleRate = (rating: number) => {
    setStars(rating);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('https://652964f055b137ddc83ebb8e.mockapi.io/Formulario', { message, stars });
      setMessage('');
      setStars(null);
      alert('Formulário enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente mais tarde.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <h4>Avalie nosso serviço:</h4>
        <RatingStars onRate={handleRate}/>
      </div>
      <textarea
        name="message"
        value={message}
        onChange={handleChange}
        className="text-area"
        rows={6}
        placeholder='Conte-nos mais detalhes!'
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
