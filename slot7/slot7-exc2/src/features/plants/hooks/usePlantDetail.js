import { useState, useEffect } from 'react';
import { plantApi } from '../../../services/plantApi';

export const usePlantDetail = (plantId) => {
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    plantApi.getPlantById(plantId)
      .then(data => { if (isMounted) { setPlant(data); setError(null); } })
      .catch(err => { if (isMounted) { setError(err.message); setPlant(null); } })
      .finally(() => { if (isMounted) setLoading(false); });

    return () => { isMounted = false; };
  }, [plantId]);

  return { plant, loading, error };
};