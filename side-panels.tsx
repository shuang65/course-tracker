import { BarChart3, BookCopy, CircleCheck, TrendingUp, Target } from "lucide-react"
import { summary } from "@/lib/tracker-data"
import { ProgressDonut } from "./progress-donut"

const cards = [
  {
    icon: BookCopy,
    value: String(summary.totalModules),
    label: "Total Modules",
    bg: "bg-[#dbe9f6]",
    iconColor: "text-[#1c2c5b]",
  },
  {
    icon: CircleCheck,
    value: String(summary.modulesCompleted),
    label: "Modules Completed",
    bg: "bg-[#e6f4ea]",
    iconColor: "text-[#2e7d32]",
  },
  {
    icon: TrendingUp,
    value: `${summary.overallProgress}%`,
    label: "Overall Progress",
    bg: "bg-[#fef7e0]",
    iconColor: "text-[#b8860b]",
  },
  {
    icon: Target,
    value: summary.targetLaunch,
    label: "Target Launch Date",
    bg: "bg-[#f3e8fd]",
    iconColor: "text-[#7c3aed]",
  },
]

export function ProjectSummary() {
  return (
    <section className="px-6 py-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex-1">
          <div className="mb-4 flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[#1c2c5b]" />
            <h2 className="text-sm font-bold tracking-wide text-[#1c2c5b]">PROJECT SUMMARY</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
            {cards.map((c) => {
              const Icon = c.icon
              return (
                <div key={c.label} className={`${c.bg} flex flex-col gap-3 rounded-lg p-4`}>
                  <Icon className={`h-7 w-7 ${c.iconColor}`} />
                  <div>
                    <div className="text-2xl font-bold text-[#1c2c5b]">{c.value}</div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-center lg:pt-1">
          <h2 className="mb-3 text-xs font-bold tracking-wide text-muted-foreground">OVERALL PROGRESS</h2>
          <ProgressDonut value={summary.overallProgress} />
        </div>
      </div>
    </section>
  )
}
