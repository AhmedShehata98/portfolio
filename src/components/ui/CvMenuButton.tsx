"use client";

import { useClickAway } from "@uidotdev/usehooks";
import { ChevronDown, Download, FileText, ShieldUser } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { createPortal } from "react-dom";

export default function CvMenuButton() {
  const tHero = useTranslations("hero");
  const [open, isOpen] = useState(false);
  const [viewPdf, setIsViewPdf] = useState(false);
  const ref = useClickAway<HTMLDivElement>(() => isOpen(false));
  const pdfRef = useClickAway<HTMLDivElement>(() => setIsViewPdf(false));

  const handleDownloadCv = async () => {
    try {
      const a = document.createElement("a");
      a.href = "/Ahmed-Shehata-Frontend.pdf";
      a.setAttribute("download", "Ahmed-Shehata-Frontend");
      a.click();
    } catch (error) {
      console.log("Failed to download cv file: ", error);
    }
  };

  return (
    <>
      <div className="relative flex flex-col">
        <button
          type="button"
          className="min-w-48 flex items-center justify-center gap-4 px-3 py-1.5 rounded-md cursor-pointer text-primary-foreground font-medium capitalize bg-primary hover:bg-primary/90"
          onClick={() => isOpen((p) => !p)}
        >
          <span className="flex items-center justify-center gap-1">
            <ShieldUser className="size-5" />
            {tHero("cv.title")}
          </span>
          <ChevronDown
            className={`inline-block transition-transform ${
              open && "rotate-180"
            }`}
          />
        </button>
        <div
          ref={ref}
          className={`absolute top-full w-full h-fit flex items-start justify-start mt-0.5 bg-primary-container rounded-sm overflow-hidden transition-all ${
            !open && "-translate-y-2 opacity-0 scale-98 pointer-events-none"
          }`}
        >
          <ul className="w-full grid grid-flow-row gap-1 divide-y divide-primary-variant bg-inherit p-1">
            <li
              className="w-full flex items-center justify-start text-sm gap-2.5 py-2 px-3 cursor-pointer hover:bg-primary-variant"
              onClick={handleDownloadCv}
            >
              <Download className="w-4 h-4 inline-block" />
              {tHero("cv.download")}
            </li>
            <li
              className="w-full flex items-center justify-start text-sm gap-2.5 py-2 px-3 cursor-pointer hover:bg-primary-variant"
              onClick={() => setIsViewPdf(true)}
            >
              <FileText className="w-4 h-4 inline-block" />
              {tHero("cv.view")}
            </li>
          </ul>
        </div>
      </div>
      {viewPdf &&
        createPortal(
          <div className="fixed z-60 inset-0 flex items-center justify-center bg-primary-container/50">
            <div ref={pdfRef} className="w-full md:w-11/12 lg:w-4/6 xl:w-1/2">
              <embed
                src="Ahmed-Shehata-Frontend.pdf"
                width="100%"
                height="768px"
                type="application/pdf"
              />
            </div>
          </div>,
          document.getElementById("modal") as Element
        )}
    </>
  );
}
