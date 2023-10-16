import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NewModule from './Pages/module/module';
import NewSection from './Pages/section/newsection';
import NewAnswerGroup from './Pages/question/newanswergroup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modules from './Pages/module/modules';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>

    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/module/new" element={<NewModule />}/>
    <Route path="/module/all" element={<Modules />}/>

    <Route path="/section/new" element={<NewSection />}/>
    <Route path="/answer-group/new" element={<NewAnswerGroup/>}/>

    </Routes></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
