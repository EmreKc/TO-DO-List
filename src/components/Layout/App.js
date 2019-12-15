import React from 'react';

import './App.css';

import Header from '../Header/Header';
import ContentContainer from '../../containers/ContentContainer';

const App = () => (
  <div className="app__container">
    <Header className="app__header" />
    <ContentContainer className="app__content" />
  </div>
);

export default App;
