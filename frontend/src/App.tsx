import React from 'react';
import './App.css';
import UsernameGeneratorForm from './components/UsernameGeneratorForm.tsx';

const App: React.FC = () => {
  return (
    <div className="App">
      <UsernameGeneratorForm />
    </div>
  );
}

export default App;