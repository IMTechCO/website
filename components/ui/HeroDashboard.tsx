import DashboardCard from "./DashboardCard";
import { Cpu, Database, Activity, Sparkles } from "lucide-react";

export default function HeroDashboard() {
  return (
    <div className="relative">

      {/* Glow de fondo */}
      <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-600/20 blur-3xl" />

      {/* Dashboard */}
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-2xl backdrop-blur-xl">

        {/* Encabezado */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">
              Estado General
            </p>

            <h3 className="text-2xl font-bold text-white">
              IM Tech Dashboard
            </h3>
          </div>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600">
            <Cpu size={24} className="text-white" />
          </div>
          
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-2 gap-5">

          <DashboardCard
            icon={<Activity size={20} />}
            title="Automatizaciones"
            value="24"
            description="Procesos activos"
          />

          <DashboardCard
            icon={<Database size={20} />}
            title="Disponibilidad"
            value="99.9%"
            description="Infraestructura"
          />

          <DashboardCard
            icon={<Sparkles size={20} />}
            title="APIs"
            value="18"
            description="Integraciones"
          />

          <DashboardCard
            icon={<Cpu size={20} />}
            title="IA"
            value="Activa"
            description="Procesando datos"
          />

        </div>

      </div>

    </div>
  );
}