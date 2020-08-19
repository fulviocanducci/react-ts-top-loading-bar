import React, { useRef, FC} from 'react';
import { render } from 'react-dom';
import LoadingBar from 'react-top-loading-bar';

const App: FC = () => {
  const ref = useRef(null)
  return (
    <React.Fragment>
      <LoadingBar color='#f11946' ref={ref} />
      <div>App</div>
      <button onClick={() => ref.current.complete()}>Complete</button>
    </React.Fragment>
  )
}

render(<App />, document.getElementById('root'));
