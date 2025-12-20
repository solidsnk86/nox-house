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
        caption: "Explora NOX-HOUSE en 360°",
        defaultZoomLvl: 0,
        loadingImg: "/placeholder.svg?height=100&width=100",
        touchmoveTwoFingers: true,
        mousewheel: false,
        autorotateDelay: 1,
        autorotateSpeed: 0.1,
        fisheye: true
      })
    })

    return () => {
      if (viewerRef.current) {
        viewerRef.current.destroy()
        viewerRef.current = null
      }
    }
  }, [])

  return <div ref={containerRef} className="flex w-full h-full" style={{ background: "#000" }} />
}
