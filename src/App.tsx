import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  const [name, setName] = useState('Luís');
  const [age, setAge] = useState(80);
  const [bg, setBg] = useState('#FF0000');

  const [list, setList] = useState([
    "O rato roeu a roupa do rei de Roma.",
    "Aqui vai uma frase poética.",
    "Só é feliz quem não está triste."
  ]);

  const handle19 = () => {
    setAge(19);
    setBg("#00FF00");
  }
  const handle80 = () => {
    setAge(80);
    setBg("#FF0000");
  }

  return (
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age} />

      {age === 80 && 
        <button onClick={handle19}>Tenho 19 anos</button>
      }
      {age === 19 && 
        <button onClick={handle80}>Tenho 80 anos</button>
      }
      
      <hr/>

      <ul>
        {list.map((frase, index)=>(
          <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default App;