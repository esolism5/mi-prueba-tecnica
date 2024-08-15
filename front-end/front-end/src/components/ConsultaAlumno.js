import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import '../styles.css'; // Asegúrate de importar el CSS

const ConsultaAlumno = () => {
  const [grado, setGrado] = useState('');
  const [alumnos, setAlumnos] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!grado) {
      enqueueSnackbar('El campo de grado es obligatorio', { variant: 'error' });
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/alumnos/consultar-alumno/${grado}`);
      if (!response.ok) throw new Error('Error al consultar los alumnos');
      const data = await response.json();
      setAlumnos(data);
      enqueueSnackbar('Consulta realizada con éxito', { variant: 'success' });
    } catch (error) {
      enqueueSnackbar('Error al consultar los alumnos', { variant: 'error' });
    }
  };

  return (
    <Container className="card">
      <Typography variant="h4" align="center">Consulta de Alumno</Typography>
      <TextField label="Grado" fullWidth value={grado} onChange={(e) => setGrado(e.target.value)} margin="normal" />
      <Button className="primary" onClick={handleSearch}>Buscar Alumno</Button>
      <Button className="secondary" onClick={() => navigate('/')}>Volver al Menú</Button>
      {alumnos.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          {alumnos.map((alumno, index) => (
            <div key={index}>
              <Typography variant="body1">Nombre: {alumno.nombre}</Typography>
              <Typography variant="body1">Fecha de Nacimiento: {alumno.fechaNacimiento}</Typography>
              <Typography variant="body1">Nombre del Padre: {alumno.nombrePadre}</Typography>
              <Typography variant="body1">Nombre de la Madre: {alumno.nombreMadre}</Typography>
              <Typography variant="body1">Grado: {alumno.grado}</Typography>
              <Typography variant="body1">Sección: {alumno.seccion}</Typography>
              <Typography variant="body1">Fecha de Ingreso: {alumno.fechaIngreso}</Typography>
              <hr />
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default ConsultaAlumno;
