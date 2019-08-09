import React from 'react';
import  { 
  BrowserRouter as Router
} from 'react-router-dom';
// -------------------------------------------- //
import AppRouting from './AppRouting';
import AppLayout from './Core';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="d-flex justify-content-center bg-light text-secondary">Learn React</h1>
      </header>
      <Router>
        <AppLayout>
          <AppRouting />
        </AppLayout>
      </Router>
    </div>
  );
}

export default App;
