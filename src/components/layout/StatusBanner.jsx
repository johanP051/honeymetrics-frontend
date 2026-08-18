import React from 'react';
import { Info, Wifi, WifiOff } from 'lucide-react';

export const StatusBanner = ({ isMock, onToggleMock }) => {
  return (
    <div style={{
      background: isMock ? 'rgba(245, 158, 11, 0.1)' : 'rgba(16, 185, 129, 0.1)',
      border: `1px solid ${isMock ? 'rgba(245, 158, 11, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '0.85rem 1.25rem',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        {isMock ? (
          <WifiOff size={18} style={{ color: 'var(--accent-amber)' }} />
        ) : (
          <Wifi size={18} style={{ color: 'var(--accent-green)' }} />
        )}
        <div style={{ fontSize: '0.85rem' }}>
          {isMock ? (
            <span>
              <strong>Modo Mock Activo:</strong> El frontend está simulando las respuestas de la API mediante contratos tipados. Puedes probar la interfaz de usuario incluso con el backend apagado.
            </span>
          ) : (
            <span>
              <strong>Conexión Exitosa:</strong> Datos consumidos en tiempo real desde <code>http://localhost:8000/api/v1</code> con arquitectura desacoplada y CORS.
            </span>
          )}
        </div>
      </div>

      <button
        onClick={onToggleMock}
        className="btn btn-secondary"
        style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem', whiteSpace: 'nowrap' }}
      >
        {isMock ? 'Intentar Conexión en Vivo' : 'Forzar Modo Mock'}
      </button>
    </div>
  );
};
