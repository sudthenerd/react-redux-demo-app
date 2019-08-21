import React from 'react';
// -------------------------------------------- //
import AppRouting from './AppRouting';
import AppLayout, { Toaster } from './Core';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
          <h1 className="d-flex justify-content-center bg-light text-secondary">Learn React</h1>
      </header>
      <AppLayout>
        <AppRouting />
      </AppLayout>
      <Toaster />
    </div>
  );
}

export default App;
