export type Status = "Complete" | "In Progress" | "Review" | "Not Started"

export type Task = {
  task: string
  status: Status
  progress: number
  notes: string
  owner: string
  dueDate: string
}

export const tasks: Task[] = [
  { task: "Course Outline", status: "Complete", progress: 100, notes: "8 modules defined", owner: "Yang", dueDate: "Jun 11, 2026" },
  { task: "Module 1 Script", status: "In Progress", progress: 20, notes: "Drafting content", owner: "Yang", dueDate: "Jun 18, 2026" },
  { task: "Module 2 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jun 25, 2026" },
  { task: "Module 3 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 2, 2026" },
  { task: "Module 4 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 9, 2026" },
  { task: "Module 5 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 16, 2026" },
  { task: "Module 6 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 23, 2026" },
  { task: "Module 7 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 30, 2026" },
  { task: "Module 8 Script", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Aug 6, 2026" },
  { task: "Prompt Library (100 Prompts)", status: "In Progress", progress: 5, notes: "Framework created", owner: "Yang", dueDate: "Jul 10, 2026" },
  { task: "Quizzes", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 20, 2026" },
  { task: "Templates", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Jul 25, 2026" },
  { task: "Landing Page", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Aug 1, 2026" },
  { task: "Internal Review", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Aug 8, 2026" },
  { task: "Launch Ready Version", status: "Not Started", progress: 0, notes: "", owner: "Yang", dueDate: "Aug 15, 2026" },
]

export type WeeklyUpdate = {
  week: string
  weekOf: string
  completed: string[]
  planned: string[]
  blockers: string
  notes: string
}

export const weeklyUpdates: WeeklyUpdate[] = [
  {
    week: "Week 1",
    weekOf: "Jun 9 – Jun 15, 2026",
    completed: ["Course outline completed", "Project folder structure created", "Course tracker created"],
    planned: ["Draft Module 1 and Module 2", "Start Prompt Library framework"],
    blockers: "None",
    notes: "Good start!",
  },
  { week: "Week 2", weekOf: "Jun 16 – Jun 22, 2026", completed: [], planned: [], blockers: "", notes: "" },
  { week: "Week 3", weekOf: "Jun 23 – Jun 29, 2026", completed: [], planned: [], blockers: "", notes: "" },
  { week: "Week 4", weekOf: "Jun 30 – Jul 6, 2026", completed: [], planned: [], blockers: "", notes: "" },
]

export const summary = {
  totalModules: 8,
  modulesCompleted: 0,
  overallProgress: 10,
  targetLaunch: "Aug 2026",
  lastUpdated: "June 11, 2026",
}
