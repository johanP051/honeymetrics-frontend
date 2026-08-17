import { useState, useEffect, useCallback } from 'react';
import { getThreatSummary } from '../api/threatsApi';
import { mockThreatSummary } from '../mocks/threatsMockData';

export const useThreats = () => {
  const [data, setData] = useState(mockThreatSummary);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMock, setIsMock] = useState(false);

  const fetchThreats = useCallback(async (forceMock = false) => {
    if (forceMock) {
      setData(mockThreatSummary);
      setIsMock(true);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const liveData = await getThreatSummary();
      setData(liveData);
      setIsMock(false);
    } catch (err) {
      console.warn('⚠️ No se pudo conectar a la API en vivo. Usando datos Mock:', err.message);
      setData(mockThreatSummary);
      setIsMock(true);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchThreats();
  }, [fetchThreats]);

  return {
    data,
    loading,
    error,
    isMock,
    refetch: fetchThreats,
    toggleMock: () => fetchThreats(!isMock),
  };
};
