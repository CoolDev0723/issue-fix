// simple app with a number that can be changed on arrow key presses
import React, { useState, useEffect } from 'react';
function App() {
  const [keyStatus, setKeyStatus] = useState('');
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        setKeyStatus(event.key);
      }
    };
    const handleKeyUp = (event) => {
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        setKeyStatus('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (keyStatus != '') {
      const checkViewerCountInterval = setInterval(async () => {
        setNumber((prevNumber) =>
          keyStatus == 'ArrowUp' ? prevNumber + 1 : prevNumber - 1
        );
      }, 1000);
      return () => clearInterval(checkViewerCountInterval);
    }
  }, [keyStatus]);

  return (
    <div className="center">
      <h1>{number}</h1>
    </div>
  );
}
export default App;
