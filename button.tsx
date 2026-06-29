import { tasks, type Status } from "@/lib/tracker-data"

const statusStyles: Record<Status, string> = {
  Complete: "bg-[#c6efce] text-[#1b5e20]",
  "In Progress": "bg-[#fff2cc] text-[#7f6000]",
  Review: "bg-[#dbeafe] text-[#1e40af]",
  "Not Started": "bg-[#f1f1f1] text-muted-foreground",
}

const barColor: Record<Status, string> = {
  Complete: "bg-[#2e7d32]",
  "In Progress": "bg-[#e0a400]",
  Review: "bg-[#2563eb]",
  "Not Started": "bg-transparent",
}

function ProgressBar({ value, status }: { value: number; status: Status }) {
  return (
    <div className="h-4 w-full overflow-hidden rounded-full border border-border bg-white">
      <div className={`h-full rounded-full ${barColor[status]}`} style={{ width: `${value}%` }} />
    </div>
  )
}

export function TaskTable() {
  return (
    <div className="overflow-x-auto px-6 pb-8">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#1c2c5b] text-white">
            <th className="border border-[#2a3a6b] px-3 py-2 text-left font-semibold">Task</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-center font-semibold">Status</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-center font-semibold">Progress</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-left font-semibold">Progress Bar</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-left font-semibold">Notes</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-center font-semibold">Owner</th>
            <th className="border border-[#2a3a6b] px-3 py-2 text-center font-semibold">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((t) => (
            <tr key={t.task} className="bg-white">
              <td className="border border-border px-3 py-2 text-foreground">{t.task}</td>
              <td className="border border-border px-2 py-2 text-center">
                <span className={`inline-block w-full rounded px-2 py-1 text-xs font-medium ${statusStyles[t.status]}`}>
                  {t.status}
                </span>
              </td>
              <td className="border border-border px-3 py-2 text-center text-foreground">{t.progress}%</td>
              <td className="border border-border px-3 py-2">
                <ProgressBar value={t.progress} status={t.status} />
              </td>
              <td className="border border-border px-3 py-2 text-muted-foreground">{t.notes}</td>
              <td className="border border-border px-3 py-2 text-center text-foreground">{t.owner}</td>
              <td className="border border-border px-3 py-2 text-center text-foreground">{t.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
