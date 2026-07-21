import DashboardCard from "./DashboardCard";
import {
  ShieldCheck,
  Network,
  MonitorCog,
  Code2,
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/15 blur-2xl" />

      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl backdrop-blur-xl">

        {/* Header */}

        <div className="mb-8 flex items-center justify-between">

          <div>
            
            <h3 className="text-2xl font-bold text-white">
              Soluciones Empresariales
            </h3>
          </div>

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/30">
            <ShieldCheck size={28} className="text-white" />
          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-4">

          <DashboardCard
            icon={<MonitorCog size={20} />}
            title="Soporte TI"
            description="Atención tecnológica"
          />

          <DashboardCard
            icon={<Network size={20} />}
            title="Infraestructura"
            
            description="Redes y servidores"
          />

          <DashboardCard
            icon={<Code2 size={20} />}
            title="Software"
            
            description="Desarrollo empresarial"
          />

          <DashboardCard
            icon={<ShieldCheck size={20} />}
            title="Seguridad"
            
            description="Continuidad del negocio"
          />

        </div>

      </div>

    </div>
  );
}