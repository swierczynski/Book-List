import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import NewBookForm from './components/NewBookForm';
import BookContextProvider from './contexts/BookContext';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      </div>
    );
  }
}

export default App;
