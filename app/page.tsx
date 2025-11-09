"use client"

import { useState } from "react"
import { Users, Settings, DollarSign, Package, Truck, UserCircle } from "lucide-react"

const modules = [
  /* {
    id: "etudiants",
    icon: Users,
    label: "Étudiants",
    bgColor: "bg-blue-600",
    url: "/etudiants",
  },
  {
    id: "rh",
    icon: Users,
    label: "RH",
    bgColor: "bg-red-600",
    url: "/rh",
  },
  {
    id: "paiement",
    icon: DollarSign,
    label: "Paiement",
    bgColor: "bg-green-600",
    url: "/paiement",
  },*/
  {
    id: "frais",
    icon: Package,
    label: "Frais de Caisse",
    bgColor: "bg-orange-600",
    url: "https://docs.google.com/spreadsheets/d/13wAjSUb2rvkIwVin9U2E0gGKylvzZNHqC1rlSqpBoc0/edit?usp=sharing",
  },
  {
    id: "transport",
    icon: Truck,
    label: "Carburant Transport",
    bgColor: "bg-teal-600",
    url: "https://docs.google.com/spreadsheets/d/1Gm2aJDbU7j-SuPVzZCq9ZIhqTl0SFmOOzx_QoBvNNgM/edit?usp=sharing",
  },
  /*{
    id: "profils",
    icon: UserCircle,
    label: "Profils",
    bgColor: "bg-purple-600",
    url: "/profils",
  },
  {
    id: "parametres",
    icon: Settings,
    label: "Paramètres",
    bgColor: "bg-slate-600",
    url: "/parametres",
  }*/
]

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(true)

  const handleModuleClick = (url) => {
    // Si c'est un lien externe (commence par http:// ou https://)
    if (url.startsWith('http://') || url.startsWith('https://')) {
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      // Pour les liens internes, vous pouvez utiliser router.push(url) dans Next.js
      alert(`Navigation interne vers: ${url}`)
      // Dans votre application Next.js, remplacez par: router.push(url)
    }
  }

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-slate-950" : "bg-slate-50"} transition-colors duration-300 relative overflow-hidden`}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing bottom effect */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-cyan-500/20 to-transparent pointer-events-none" />

      {/* Dark mode toggle */}
      <div className="absolute top-4 right-4 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-slate-700" : "bg-blue-400"
          }`}
        >
          <div
            className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center text-xs ${
              darkMode ? "translate-x-8" : "translate-x-0"
            }`}
          >
            {darkMode ? "🌙" : "☀️"}
          </div>
        </button>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Logo and title */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <img 
              src={darkMode ? "/image/logo-light.png" : "/image/logo-dark.png"}
              alt="Chrono School Logo" 
              className="w-64 h-auto transition-opacity duration-300"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <div
                  key={module.id}
                  onClick={() => handleModuleClick(module.url)}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div
                    className={`relative ${darkMode ? "bg-slate-800/50" : "bg-white"} backdrop-blur-sm rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? "hover:shadow-cyan-500/50" : "hover:shadow-blue-500/50"} border ${darkMode ? "border-slate-700" : "border-slate-200"} cursor-pointer`}
                  >
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-xl ${module.bgColor} flex items-center justify-center transform transition-transform duration-300 group-hover:rotate-12`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <p
                      className={`text-base font-semibold text-center leading-tight ${darkMode ? "text-slate-300" : "text-slate-700"}`}
                    >
                      {module.label}
                    </p>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}