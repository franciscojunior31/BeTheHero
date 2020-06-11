import React, {useState} from 'react'; 

import api from '../../services/api';
import './styles.css';

import {FiLogIn} from 'react-icons/fi'; // importacao do icone, antes precisou instlar npm install react-icons
import {Link, useHistory} from 'react-router-dom';

import heroesImg from '../../Assets/heroes.png'; // importacao da img 
import logoImg from '../../Assets/logo.svg';

export default function Logon() {

   const [id, setId] = useState('');

   const history = useHistory();

  async function handleLogin(e){
      e.preventDefault();

      try{
         const response = await api.post('sessions', { id });

       localStorage.setItem('ongId', id);
       localStorage.setItem('ongName', response.data.name);

       history.push('/profile');

      }catch(err) {
         alert('Falha no Login, tente novamente!')

      }


   }
  

   return(
      <div className="logon-container">
         <section className="form">
         <img src={logoImg} alt="The Be Hero" />

         <form onSubmit={handleLogin}>

             <h1>Faça seu Logon</h1>

             <input placeholder="Sua ID"
             value={id}
             onChange={e => setId(e.target.value)}
             />
             <button className="button" type="submit">Entrar</button>
             <Link className="back-link" to="/register">
                 <FiLogIn size={16} color="e02041"></FiLogIn>
                 Não tenho Cadastro
                 </Link>

         </form>

         </section>

         <img src={heroesImg} alt="Heroes" />

       </div>
    );
}