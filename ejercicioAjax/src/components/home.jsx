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

  useEffect(() => fetchProvincias(), [])

  return (
  <div>
      <h1>Ejercicio 2</h1>
      <p>C04285</p>
      <form>
        <label htmlFor="select1">Provincia:</label>
        <select id="select1" value={select1Value} onChange={handleSelect1Change}>{
          provincias.map((provincia) => {
            return <option key={provincia.id} value={provincia.id}>{provincia.name}</option>
          })
        }
        </select>

        <label htmlFor="select2">Canton:</label>
        <select id="select2" value={select2Value} onChange={handleSelect2Change}>{
          cantones.map((canton) => {
            return <option key={canton.id} value={canton.id}>{canton.name}</option>
          })
        }
        </select>

        <label htmlFor="select3">Distrito:</label>
        <select id="select3" value={select3Value} onChange={handleSelect3Change}>{
          distritos.map((distrito) => {
            return <option key={distrito.id} value={distrito.id}>{distrito.name}</option>
          })
        }
          <option value="">Seleccione una opción</option>
        </select>
      </form>
    </div>
  );
};

export default Home;

