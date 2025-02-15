import { useEffect,  } from 'react';

const App = () => {


  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/67b03680acd3cb34a8e2dec8")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);

  


  return (
    <div>
      
    </div>
  );
}

export default App;