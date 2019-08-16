import React from 'react';
import Parent from './components/Parent'
import Loader from "./components/Loader"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <React.Suspense fallback={Loader}>
          <Parent/>
        </React.Suspense>
      </header>
    </div>
  );
}

export default App;
