import React from 'react';
import { ButtonAppBar } from './components/ButtonAppBar';
import { TodoLists } from './components/TodoLists';

export const App: React.FC = () => {
  return (
    <div className='App'>
      <ButtonAppBar />
      <TodoLists />
    </div>
  );
};
