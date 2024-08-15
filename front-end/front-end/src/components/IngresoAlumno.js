import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import '../styles.css'; // Asegúrate de importar el CSS

const IngresoAlumno = () => {
  const [nombre, setNombre] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [nombrePadre, setNombrePadre] = useState('');
  const [nombreMadre, setNombreMadre] = useState('');
  const [grado, setGrado] = useState('');
  const [seccion, setSeccion] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!nombre || !fechaNacimiento || !nombrePadre || !nombreMadre || !grado || !seccion || !fechaIngreso) {
      enqueueSnackbar('Todos los campos son obligatorios', { variant: 'error' });
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/alumnos/crear-alumno', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, fechaNacimiento, nombrePadre, nombreMadre, grado, seccion, fechaIngreso }),
      });

      if (!response.ok) throw new Error('Error al ingresar el alumno');

      enqueueSnackbar('Alumno ingresado con éxito', { variant: 'success' });
      setNombre('');
      setFechaNacimiento('');
      setNombrePadre('');
      setNombreMadre('');
      setGrado('');
      setSeccion('');
      setFechaIngreso('');
    } catch (error) {
      enqueueSnackbar('Error al ingresar el alumno', { variant: 'error' });
    }
  };

  return (
    <Container className="card">
      <Typography variant="h4" align="center">MENU DE REGISTRO</Typography>
      <TextField label="Nombre" fullWidth value={nombre} onChange={(e) => setNombre(e.target.value)} margin="normal" />
      <TextField type="date" label="Fecha de Nacimiento" fullWidth value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} margin="normal" />
      <TextField label="Nombre del Padre" fullWidth value={nombrePadre} onChange={(e) => setNombrePadre(e.target.value)} margin="normal" />
      <TextField label="Nombre de la Madre" fullWidth value={nombreMadre} onChange={(e) => setNombreMadre(e.target.value)} margin="normal" />
      <TextField label="Grado" fullWidth value={grado} onChange={(e) => setGrado(e.target.value)} margin="normal" />
      <TextField label="Sección" fullWidth value={seccion} onChange={(e) => setSeccion(e.target.value)} margin="normal" />
      <TextField type="date" label="Fecha de Ingreso" fullWidth value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} margin="normal" />
      <Button className="primary" onClick={handleSubmit}>Registrar Alumno</Button>
      <Button className="secondary" onClick={() => navigate('/consultar')}>Consultar Alumnos</Button>
    </Container>
  );
};

export default IngresoAlumno;
