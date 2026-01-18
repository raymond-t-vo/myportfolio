import { useEffect } from "react"

export default function BreakingLoader({ onDone, durationMs = 1800 }) {
  useEffect(() => {
    const t = setTimeout(() => onDone?.(), durationMs)
    return () => clearTimeout(t)
  }, [onDone, durationMs])

  return (
    <div className="loader-overlay" role="status" aria-live="polite">
      {/* panels that “split” */}
      <div className="loader-panel loader-panel--top" />
      <div className="loader-panel loader-panel--bottom" />


      
    </div>
  )
}
