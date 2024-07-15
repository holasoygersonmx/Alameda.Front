import './App.css';

import { MainMenu } from './components/mainMenu/MainMenu';
import { AppRouter } from './AppRouter';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import { useState } from "react";

function App() {

  const[page, setPage] = useState('home');

  return (
    <div className="App">
      <MainMenu page={page} />
      <AppRouter setPage={setPage} />
    </div>
  );
}

export default App;

library.add(fab, fas, far);