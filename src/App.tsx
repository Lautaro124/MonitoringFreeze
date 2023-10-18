import { useState, useEffect, useCallback } from 'react';
import { getDatabase, ref, onValue, off, type DataSnapshot } from "firebase/database";
import app from './config/firebase';

const App = () => {
  const [temperature, setTemperature] = useState<number | null>(null);
  const [errors, setErrors] = useState<string>('');

  const database = getDatabase(app);
  const dbRef = ref(database, 'freeze');

  const handleTemperatureChange = useCallback((snap: DataSnapshot) => {
    const data = Math.round(snap.val());
    if (data !== temperature) {
      setTemperature(data);
      if (data > 10 && data < 15) {
        setErrors('Temperatura un poco alta.');
        return;
      }
      if (data < 15) {
        setErrors('Temperatura muy alta, por favor revisar.');
        return;
      }
      setErrors('');
    }
  }, [temperature]);

  useEffect(() => {
    const valueRef = onValue(dbRef, handleTemperatureChange);

    return () => {
      off(dbRef, 'value', valueRef);
    };
  }, [dbRef, handleTemperatureChange]);

  return (
    <>
      <h2>Temperatura de la heladera</h2>
      <h1>{temperature !== null ? `${temperature}°C` : ' '}</h1>
      <span>{errors}</span>
    </>
  );
};

export default App;
