import { useEffect, useRef } from "react";
import OpenSeadragon, { Viewer, Rect } from "openseadragon";
import { Button } from "@/components/ui/button";
import { Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";
import { motion } from "framer-motion";

interface OpenSeaViewerProps {
  imageUrl: string;
}

export default function DeepZoomViewer({ imageUrl }: OpenSeaViewerProps) {
  // Tipagem correta para elemento HTML
  const viewerRef = useRef<HTMLDivElement | null>(null);

  // Tipagem correta para o viewer
  const osdRef = useRef<Viewer | null>(null);

  const isFullscreen = useRef<boolean>(false);

  useEffect(() => {
    if (!viewerRef.current) return;

    osdRef.current = OpenSeadragon({
      element: viewerRef.current, //correto para TS
      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      showNavigator: true,
      showRotationControl: true,
      animationTime: 1.2,
      zoomPerClick: 2,
      zoomPerScroll: 1.2,
      minZoomLevel: 1,
      maxZoomLevel: 40,
      gestureSettingsTouch: {
        pinchToZoom: true,
        dblClickToZoom: true,
      },
      tileSources: {
        type: "image",
        url: imageUrl,
      }
    });

    return () => {
      osdRef.current?.destroy();
      osdRef.current = null;
    };
  }, [imageUrl]);

  const zoomIn = () => {
    if (!osdRef.current) return;
    osdRef.current.viewport.zoomBy(1.4);
    osdRef.current.viewport.applyConstraints();
  };

  const zoomOut = () => {
    if (!osdRef.current) return;
    osdRef.current.viewport.zoomBy(0.7);
    osdRef.current.viewport.applyConstraints();
  };

  const goToArea = (x: number, y: number, w: number) => {
    if (!osdRef.current) return;
    const rect = new Rect(x, y, w, w);
    osdRef.current.viewport.fitBounds(rect, true);
  };

  const toggleFullscreen = () => {
    if (!osdRef.current) return;
    isFullscreen.current = !isFullscreen.current;
    osdRef.current.setFullScreen(isFullscreen.current);
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      
      {/* Barra de Ferramentas */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 bg-white shadow p-2 rounded-2xl w-fit z-50"
      >
        <Button variant="outline" onClick={zoomIn} className="rounded-2xl p-2">
          <ZoomIn size={18} />
        </Button>

        <Button variant="outline" onClick={zoomOut} className="rounded-2xl p-2">
          <ZoomOut size={18} />
        </Button>

        <Button variant="outline" onClick={toggleFullscreen} className="rounded-2xl p-2">
          {isFullscreen.current ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </Button>
      </motion.div>

      {/* Áreas de Zoom Rápido */}
      <div className="flex gap-2">
        <Button onClick={() => goToArea(0.1, 0.1, 0.2)}>Rosto</Button>
        <Button onClick={() => goToArea(0.4, 0.2, 0.3)}>Centro</Button>
        <Button onClick={() => goToArea(0.2, 0.6, 0.25)}>Detalhe</Button>
      </div>

      {/* Viewer */}
      <div
        ref={viewerRef}
        className="w-full h-[80vh] rounded-2xl shadow-lg overflow-hidden"
      />
    </div>
  );
}


