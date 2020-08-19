import React, { useRef, FC, useState, useEffect} from 'react';
import { render } from 'react-dom';
import LoadingBar from 'react-top-loading-bar';

const App: FC = () => {
  const ref = useRef(null)
  const [progress, setProgress] = useState(0);
  const handleProgress = () => setProgress(state => state + 1.6);
  useEffect(() => {
    setTimeout(() => handleProgress(), 1000);
  }, [])
  useEffect(() => {
    if (progress < 100) {
      setTimeout(() => handleProgress(), 1000);
    }
  }, [progress])
  return (
    <React.Fragment>
      <LoadingBar color='#f11946' 
        progress={progress}
        onLoaderFinished={() => handleProgress()} />  
      {progress > 99 && <button onClick={e => setProgress(0)}>Reiniciar</button>}      
    </React.Fragment>
  )
}

render(<App />, document.getElementById('root'));
