"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import type { ReactNode } from "react"

interface PageHeaderProps {
  title: string
  description?: string
  children?: ReactNode
}

export function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <div className="mb-8">
      <Link href="/" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-4 transition-colors">
        <ChevronLeft className="w-4 h-4" />
        Retour au tableau de bord
      </Link>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
          {description && <p className="text-slate-400">{description}</p>}
        </div>
        {children}
      </div>
    </div>
  )
}
