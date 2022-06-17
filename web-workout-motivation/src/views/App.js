import React from 'react';
import { SplitScreen } from './components/LayoutComponents/SplitScreen';
import { NavigationBar } from './components/Navigation/NavigationBar';
import { ProgressBar } from './components/Progress-bar/ProgressBar';
import { TodoList } from './components/Todo-list/TodoList';
import { WaterFood } from './components/Water-Food/WaterFood';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <SplitScreen>
        <NavigationBar />
        <ProgressBar />
        <TodoList />
        <WaterFood />
        <Footer />
      </SplitScreen>
    </>
  );
};

export default App;
