import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import TodoList from './components/TodoList';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <div className="w-100" style={{maxWidth:'500px'}}>
        <TodoList/>
      </div>
    </Container>
  );
}

export default App;
