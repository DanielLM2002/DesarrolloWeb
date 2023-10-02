import React, { useState, useEffect } from 'react';
import axiosClient from './config/Axios';

const Home = () => {
  const [select1Value, setSelect1Value] = useState('');
  const [select2Value, setSelect2Value] = useState('');
  const [select3Value, setSelect3Value] = useState('');
  const [provincias, setProvincias] = useState([]);
  const [cantones, setCantones] = useState([]);
  const [distritos, setDistritos] = useState([]);

  const handleSelect1Change = async (event) => {
    const selectedProvinceId = event.target.value;
    setSelect1Value(selectedProvinceId);
    await fetchCantones(selectedProvinceId);
  };

  const handleSelect2Change = async (event) => {
    const selectedCantonId = event.target.value;
    setSelect2Value(selectedCantonId);
    await fetchDistritos(selectedCantonId);
  };

  const handleSelect3Change = (event) => {
    const selectedDistrictId = event.target.value;
    setSelect3Value(selectedDistrictId);
  };

  const fetchProvincias = async () => {
    try {
      const url = 'provincias.php';
      const response = await axiosClient.get(url);
      setProvincias(response.data);
    } catch (exception) {
      console.error('Error fetching provincias', exception);
    }
  };

  const fetchCantones = async (provinceId) => {
    try {
      const url = `cantones.php?id=${provinceId}`;
      const response = await axiosClient.get(url);
      setCantones(response.data);
    } catch (exception) {
      console.error('Error fetching cantones', exception);
    }
  };

  const fetchDistritos = async (cantonId) => {
    try {
      const url = `distritos.php?id=${cantonId}`;
      const response = await axiosClient.get(url);
      setDistritos(response.data);
    } catch (exception) {
      console.error('Error fetching distritos', exception);
    }
  };

  useEffect(() => {
    fetchProvincias();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-rose-800">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 2</h1>
      <p className="text-lg font-medium mb-8">C04285</p>
      <form className="flex flex-col items-center justify-center">
        <label htmlFor="select1" className="text-lg font-medium mb-2">
          Provincia:
        </label>
        <select
          id="select1"
          value={select1Value}
          onChange={handleSelect1Change}
          className="px-4 py-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Selecciona una provincia</option>
          {provincias.map((provincia) => (
            <option key={provincia.id} value={provincia.id}>
              {provincia.name}
            </option>
          ))}
        </select>
        <label htmlFor="select2" className="text-lg font-medium mb-2">
          Canton:
        </label>
        <select
          id="select2"
          value={select2Value}
          onChange={handleSelect2Change}
          className="px-4 py-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Selecciona un canton</option>
          {cantones.map((canton) => (
            <option key={canton.id} value={canton.id}>
              {canton.name}
            </option>
          ))}
        </select>
        <label htmlFor="select3" className="text-lg font-medium mb-2">
          Distrito:
        </label>
        <select
          id="select3"
          value={select3Value}
          onChange={handleSelect3Change}
          className="px-4 py-2 border border-gray-300 rounded-md mb-4"
        >
          <option value="">Selecciona un distrito</option>
          {distritos.map((distrito) => (
            <option key={distrito.id} value={distrito.id}>
              {distrito.name}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Home;
