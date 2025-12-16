"use client"

import { useEffect, useRef } from "react"

export function PhotoSphereViewer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const viewerRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Dynamically import PhotoSphereViewer to avoid SSR issues
    import("photo-sphere-viewer").then(({ Viewer }) => {
      if (viewerRef.current) return

      viewerRef.current = new Viewer({
        container: containerRef.current!,
        panorama: "/images/lmc-20251214-0302440.jpg",
        navbar: false,
        caption: "Explora NOX en 360°",
        defaultZoomLvl: 50,
        mousewheel: true,
        mousemove: true,
        loadingImg: "/placeholder.svg?height=100&width=100",
      })
    })

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy()
        viewerRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full h-full" style={{ background: "#000" }} />
}
