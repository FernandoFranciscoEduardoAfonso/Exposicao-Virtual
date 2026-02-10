import { useEffect, useRef } from "react";
import OpenSeadragon, { Viewer, Rect } from "openseadragon";
import { Button } from "@/components/ui/button";
import {
  Maximize2, Minimize2, ZoomIn, ZoomOut,
  RotateCcw, RotateCw, RefreshCw
} from "lucide-react";
import { motion } from "framer-motion";

interface OpenSeaViewerProps {
  imageUrl: string;
}

export default function DeepZoomViewer({ imageUrl }: OpenSeaViewerProps) {
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const osdRef = useRef<Viewer | null>(null);
  const isFullscreen = useRef<boolean>(false);


  useEffect(() => {
    if (!viewerRef.current) return;

    osdRef.current = OpenSeadragon({
      element: viewerRef.current,

      // REMOVE completamente os botões nativos
      showNavigator: true,
      showRotationControl: false,
      showFullPageControl: false,
      showZoomControl: false,
      showHomeControl: false,
      showSequenceControl: false,
      showReferenceStrip: false,

      prefixUrl: "https://openseadragon.github.io/openseadragon/images/",
      animationTime: 1.2,
      zoomPerClick: 2,
      zoomPerScroll: 1.2,
      minZoomLevel: 0,
      maxZoomLevel: 10,

      // gestureSettingsTouch: {
      //   pinchToZoom: true,
      //   dblClickToZoom: true,
      // },

      // DESATIVAÇÃO TOTAL DE MOVIMENTO E SCROLL
      gestureSettingsMouse: {
        scrollToZoom: false,
        clickToZoom: false,
        dblClickToZoom: true,
        dragToPan: false,
      },

      gestureSettingsTouch: {
        pinchToZoom: true,      // mantém no mobile, se quiser remover diga
        dblClickToZoom: true,
        dragToPan: false,
      },


      tileSources: {
        type: "image",
        url: imageUrl,
      }
    });

    // SINGLE CLICK = ZOOM OUT
    // osdRef.current.addHandler("canvas-click", (e) => {
    //   if (e.quick) {
    //     osdRef.current?.viewport.zoomBy(0.7);
    //     osdRef.current?.viewport.applyConstraints();
    //   }
    // });

    return () => {
      osdRef.current?.destroy();
      osdRef.current = null;
    };
  }, [imageUrl]);

  // ---------------------------------------------------------
  //FUNÇÕES DE CONTROLO PERSONALIZADAS
  // ---------------------------------------------------------

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

  const rotateLeft = () => {
    if (!osdRef.current) return;
    const angle = osdRef.current.viewport.getRotation() - 90;
    osdRef.current.viewport.setRotation(angle);
  };

  const rotateRight = () => {
    if (!osdRef.current) return;
    const angle = osdRef.current.viewport.getRotation() + 90;
    osdRef.current.viewport.setRotation(angle);
  };

  const resetView = () => {
    if (!osdRef.current) return;
    osdRef.current.viewport.goHome(true); // animação suave
    osdRef.current.viewport.setRotation(0);
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

  // ---------------------------------------------------------

  return (
    <div className="w-full h-full flex flex-col gap-2">

      <div className="bg-(--tertiary-dark) rounded-md p-4 flex items-center flex-wrap gap-2">
        {/* Barra de Ferramentas Personalizada */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 bg-(--tertiary-base) shadow p-2 rounded-xl w-fit "
        >
          <Button variant="outline" onClick={zoomIn} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            <ZoomIn size={18} />
          </Button>

          <Button variant="outline" onClick={zoomOut} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            <ZoomOut size={18} />
          </Button>

          <Button variant="outline" onClick={rotateLeft} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            <RotateCcw size={18} />
          </Button>

          <Button variant="outline" onClick={rotateRight} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            <RotateCw size={18} />
          </Button>

          <Button variant="outline" onClick={resetView} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            <RefreshCw size={18} />
          </Button>

          <Button variant="outline" onClick={toggleFullscreen} className="text-white hover:text-white rounded-xl p-2 bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110 border-slate-400 cursor-pointer">
            {isFullscreen.current ?
              <Minimize2 size={18} /> :
              <Maximize2 size={18} />
            }
          </Button>
        </motion.div>

        {/* Áreas de Zoom Rápido */}
        <div className="flex gap-2 text-white">
          <Button className="text-inherit bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110" onClick={() => goToArea(0.1, 0.1, 0.2)}>Rosto</Button>
          <Button className="text-inherit bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110" onClick={() => goToArea(0.4, 0.2, 0.3)}>Centro</Button>
          <Button className="text-inherit bg-(--tertiary-base) hover:bg-(--tertiary-base) hover:brightness-110" onClick={() => goToArea(0.2, 0.6, 0.25)}>Detalhe</Button>
        </div>
      </div>


      {/* Contêiner do Viewer */}
      <div
        ref={viewerRef}
        className="w-full h-[80vh] rounded-2xl shadow-sm overflow-hidden"
      />

    </div>
  );
}
