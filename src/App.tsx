import React from 'react';
import { Provider } from 'react-redux';
import { ButtonAppBar } from './components/logic/ButtonAppBar';
import { TodoLists } from './components/logic/TodoLists';

import { store } from './state/store/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ButtonAppBar />
      <TodoLists />
    </Provider>
  );
};
