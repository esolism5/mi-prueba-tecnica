// src/App.js
import React from 'react';
import { SnackbarProvider } from 'notistack';
import IngresoAlumno from './components/IngresoAlumno';
import ConsultaAlumno from './components/ConsultaAlumno';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles.css';  // Importa el archivo CSS

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Routes>
          <Route path="/" element={<IngresoAlumno />} />
          <Route path="/consultar" element={<ConsultaAlumno />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
