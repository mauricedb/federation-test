import React from 'react';
import './App.css';

React.xx = React.xx ?? 'React in Host'

// import Movies from './components/Movies'
const Movies = React.lazy(() => import('app1/Movies'))

function App() {
  return (
    <React.Suspense fallback={'Loading...'}>

    <div className="App">
      <Movies />
    </div>
    </React.Suspense>
  );
}

export default App;
