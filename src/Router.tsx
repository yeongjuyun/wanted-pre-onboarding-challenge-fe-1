import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import NotFound from './Pages/NotFound';
import TodoList from './Pages/TodoList';
import AddMemo from './components/TodoList/AddMemo';
import Memo from './components/TodoList/Memo';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/memo' element={<TodoList />}>
          <Route path={'add'} element={<AddMemo />} />
          <Route path={':id'} element={<Memo />} />
        </Route>

        <Route path='/trash' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
