import { ClipboardList } from "lucide-react"

const legend = [
  { label: "Complete", color: "bg-[#2e7d32]" },
  { label: "In Progress", color: "bg-[#e0a400]" },
  { label: "Review", color: "bg-[#2563eb]" },
  { label: "Not Started", color: "bg-[#c4c4c4]" },
]

const notes = [
  "Update progress % weekly",
  "Add notes for key updates",
  "Use Weekly Updates sheet for detailed log",
  "Target launch: Aug 2026",
]

export function SidePanels() {
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border border-border bg-white p-5">
        <h3 className="mb-4 text-sm font-bold tracking-wide text-[#1c2c5b]">STATUS LEGEND</h3>
        <ul className="flex flex-col gap-3">
          {legend.map((l) => (
            <li key={l.label} className="flex items-center gap-3 text-sm text-foreground">
              <span className={`h-3 w-3 rounded-full ${l.color}`} />
              {l.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-lg border border-[#cdddf5] bg-[#e8f0fe] p-5">
        <div className="mb-3 flex items-center gap-2">
          <ClipboardList className="h-4 w-4 text-[#1c2c5b]" />
          <h3 className="text-sm font-bold tracking-wide text-[#1c2c5b]">NOTES</h3>
        </div>
        <ul className="flex flex-col gap-2 text-sm text-[#1c2c5b]">
          {notes.map((n) => (
            <li key={n} className="leading-relaxed">{`\u2022 ${n}`}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
