import { useState } from 'react';

import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [showPara,setshowPara]=useState(false);

  const handleSubmit=()=>{
    setshowPara(true);
  };

  const handlePasswordChange = (e) => {
    const passwordChange=e.target.value
    setPassword(passwordChange);
  };

  const handleNumberChange= (e)=>{
    const isChecked=e.target.checked;
    setNumber(isChecked);

    if (isChecked){
      const randomNum=Math.floor(Math.random()*10);
    setPassword((prevPassword)=>prevPassword+randomNum);
    
    }
    else{
      setPassword((prevPassword)=>prevPassword.replace(/[0-9]/g, ''));
    }
  };

  const handleCharacterChange = (e) => {
    const isChecked = e.target.checked;
    setCharacter(isChecked);

    if (isChecked) {
      const randomChar = String.fromCharCode(
        Math.floor(Math.random() * 26) + 97
      ); // Generates a random lowercase letter from 'a' to 'z'
      setPassword((prevPassword) => prevPassword + randomChar);
    } else {
      // If unchecked, remove any characters from the password
      setPassword((prevPassword) => prevPassword.replace(/[a-z]/g, ''));
    }
  };

 
  

  return (
    <div>
      <input
        type="text"
        placeholder="Enter password"
        value={password}
        onChange={handlePasswordChange}
      />
      <label>
      <input type="checkbox" onChange={handleNumberChange} />
      Number
      </label>
     <label>
      <input type="checkbox" onChange={handleCharacterChange}/> 
      Char
      </label>
      <button onClick={handleSubmit}>Submit</button>
      {showPara && (
        < p>{password}</p>
      )}
    </div>
  );
}

export default App;