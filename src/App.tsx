import React from 'react';
import { Provider } from 'react-redux';
import { ButtonAppBar } from './components/ButtonAppBar';
import { TodoLists } from './components/TodoLists';

import { store } from './state/store/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ButtonAppBar />
      <TodoLists />
    </Provider>
  );
};
