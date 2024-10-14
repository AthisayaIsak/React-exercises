import React from 'react';
import Header from './components/Header';
import BookList from './Components/BookList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BookList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
