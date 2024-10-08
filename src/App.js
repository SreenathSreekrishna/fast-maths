import './App.css';
import { useState } from 'react';

const randint = (n) => {
  return Math.floor(Math.random() * n);
}

const App = () => {
  let c = 100;
  let s = window.location.href.split('digits');
  console.log(s);
  if (s.length === 2) {
    c = 10**parseInt(s[1].substring(1));
  }
  console.log(c);
  const handle = (e) => {
    if (e.key === 'Enter') {
      const answer = parseInt(e.target.value);
      if (answer === q[0]*q[0]) {
        e.target.value = '';
        let x = randint(c);
        setQ([x,x]);
        setColor('green');
        setCount(count+1);
        localStorage.setItem('score', count+1);
      } else {
        e.target.value = '';
        setColor('red');
        setCount(count-1);
        localStorage.setItem('score', count-1);
      }
    }
  }

  const [q, setQ] = useState([randint(c), randint(c)]);
  const [color, setColor] = useState('white');
  const [count, setCount] = useState(parseInt(localStorage.getItem('score')) || 0);
  return (
    <>
    <main>
      <div className='question' style={{color: color}}>{q[0]}</div>
      <input type='number' className='answer' onKeyPress={handle} />
    </main>
    <div className='counter'>{count}</div>
    </>
  );

}

export default App;
