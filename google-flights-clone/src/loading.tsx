import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex items-center gap-2">
        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
        <p className="text-lg font-medium">Loading flights...</p>
      </div>
    </div>
  )
}

