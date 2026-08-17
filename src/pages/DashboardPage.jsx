import React from 'react';
import { useThreats } from '../hooks/useThreats';
import { Navbar } from '../components/Navbar';
import { StatusBanner } from '../components/StatusBanner';
import { ThreatScoreCard } from '../components/ThreatScoreCard';
import { BotnetAlertBadge } from '../components/BotnetAlertBadge';
import { Shield, Users, Radio, Bug } from 'lucide-react';

export const DashboardPage = () => {
  const { data, loading, isMock, refetch, toggleMock } = useThreats();

  return (
    <div>
      <Navbar isMock={isMock} onRefresh={refetch} loading={loading} />

      <main className="app-container">
        <StatusBanner isMock={isMock} onToggleMock={toggleMock} />

        {/* Resumen de KPIs */}
        <section className="grid-cols-4">
          <div className="card">
            <div className="card-header">
              <span className="card-title">Eventos Analizados</span>
              <Shield size={18} color="var(--accent-amber)" />
            </div>
            <div className="stat-value">{data.total_analyzed_events?.toLocaleString()}</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Abril a Agosto 2026</span>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">IPs Atacantes Únicas</span>
              <Users size={18} color="var(--accent-blue)" />
            </div>
            <div className="stat-value">{data.unique_attacker_ips?.toLocaleString()}</div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>1.107 atacantes externos</span>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">Amenazas Persistentes</span>
              <Radio size={18} color="var(--accent-red)" />
            </div>
            <div className="stat-value" style={{ color: 'var(--accent-red)' }}>
              {data.persistent_threats_count}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Reincidentes en múltiples meses</span>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="card-title">CVEs Críticos Activos</span>
              <Bug size={18} color="#f43f5e" />
            </div>
            <div className="stat-value" style={{ color: '#f43f5e' }}>
              {data.active_critical_cves_count?.toLocaleString()}
            </div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>Score CVSS ≥ 7.0 en kernel</span>
          </div>
        </section>

        {/* Sección de Botnets detectadas */}
        <section style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🌐 Botnets Coordinadas por Subred CIDR</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '400' }}>
              (Agrupación automática por enjambres de IPs)
            </span>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {data.detected_botnets?.map((botnet, index) => (
              <BotnetAlertBadge key={index} botnet={botnet} />
            ))}
          </div>
        </section>

        {/* Sección de Top Amenazas con Threat Score */}
        <section>
          <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>🎯 Top Amenazas Priorizadas (Threat Scoring 0-100)</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '400' }}>
              (Calculado en base a volumen, persistencia y severidad)
            </span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {data.top_attackers?.map((attacker, index) => (
              <ThreatScoreCard key={index} attacker={attacker} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
