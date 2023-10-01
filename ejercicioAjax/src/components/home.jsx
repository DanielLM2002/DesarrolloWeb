import React, { useState } from 'react';
import axiosClient from '../config/Axios';
import { useEffect } from 'react';


const Home = () => {
  const [select1Value, setSelect1Value] = useState({});
  const [select2Value, setSelect2Value] = useState({});
  const [select3Value, setSelect3Value] = useState({});
  const [provincias, setProvincias] = useState([]);
  const [cantones, setCantones] = useState([]);
  const [distritos, setDistritos] = useState([]);


  const handleSelect1Change = (event) => {
    setSelect1Value(event.target.value);
  };

  const handleSelect2Change = (event) => {
    setSelect2Value(event.target.value);
  };

  const handleSelect3Change = (event) => {
    setSelect3Value(event.target.value);
  };

  const fetchProvincias = async () => {
    try {
      const url = 'provincias.php';
      const { data } = await axiosClient.get(url);
      setProvincias(data);
    } catch (exception) {
    }
  };

  const fetchCantones = async (id) => {
    try {
      const url = `cantones.php?id=${id}`;
      const { data } = await axiosClient.get(url);
      setCantones(data);
    } catch (exception) {
    }
  };

  const fetchDistritos = async (id) => {
    try {
      const url = `distritos.php?id=${id}`;
      const { data } = await axiosClient.get(url);
      setDistritos(data);
    } catch (exception) {
    }
  };

  useEffect(() => {}, [])

  return (
  <div>
      <h1>Ejercicio 2</h1>
      <p>C04285</p>
      <form>
        <label htmlFor="select1">Select 1:</label>
        <select id="select1" value={select1Value} onChange={handleSelect1Change}>
          <option value="">Seleccione una opción</option>
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>

        <label htmlFor="select2">Select 2:</label>
        <select id="select2" value={select2Value} onChange={handleSelect2Change}>
          <option value="">Seleccione una opción</option>
          <option value="opcion4">Opción 4</option>
          <option value="opcion5">Opción 5</option>
          <option value="opcion6">Opción 6</option>
        </select>

        <label htmlFor="select3">Select 3:</label>
        <select id="select3" value={select3Value} onChange={handleSelect3Change}>
          <option value="">Seleccione una opción</option>
          <option value="opcion7">Opción 7</option>
          <option value="opcion8">Opción 8</option>
          <option value="opcion9">Opción 9</option>
        </select>
      </form>
    </div>
  );
};

export default Home;

