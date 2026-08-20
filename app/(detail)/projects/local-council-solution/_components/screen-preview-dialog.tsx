"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useId, useRef } from "react";
import { FiMaximize2, FiX } from "react-icons/fi";

interface ScreenPreviewDialogProps {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  priority?: boolean;
}

export default function ScreenPreviewDialog({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
}: ScreenPreviewDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousBodyOverflowRef = useRef<string | null>(null);
  const titleId = useId();

  const restoreBodyScroll = () => {
    if (previousBodyOverflowRef.current === null) {
      return;
    }

    document.body.style.overflow = previousBodyOverflowRef.current;
    previousBodyOverflowRef.current = null;
  };

  useEffect(() => restoreBodyScroll, []);

  const openDialog = () => {
    const dialog = dialogRef.current;

    if (!dialog || dialog.open) {
      return;
    }

    dialog.showModal();
    previousBodyOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  };

  const closeOnBackdrop = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDialog();
    }
  };

  const handleClose = () => {
    restoreBodyScroll();
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        aria-label={`${title} 화면 크게 보기`}
        onClick={openDialog}
        className="group block w-full cursor-zoom-in border border-slate-200 bg-white text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <Image
          src={src}
          width={width}
          height={height}
          sizes="(min-width: 1024px) 688px, (min-width: 768px) calc(100vw - 21rem), calc(100vw - 3rem)"
          alt={alt}
          className="h-auto w-full"
          priority={priority}
        />
        <span className="flex min-h-12 items-center justify-end gap-2 border-t border-slate-200 px-4 text-sm font-semibold text-text-sub transition-colors group-hover:text-primary sm:px-5">
          원본 화면 크게 보기
          <FiMaximize2 aria-hidden="true" />
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={closeOnBackdrop}
        onClose={handleClose}
        className="m-auto max-h-[94dvh] w-[94vw] max-w-[1440px] overflow-hidden border border-slate-300 bg-white p-0 text-text-main shadow-2xl backdrop:bg-slate-950/80"
      >
        <div className="flex max-h-[94dvh] flex-col">
          <header className="flex min-h-14 shrink-0 items-center justify-between gap-4 border-b border-slate-200 px-4 sm:px-6">
            <h4 id={titleId} className="truncate text-base font-bold sm:text-lg">
              {title}
            </h4>
            <button
              type="button"
              onClick={closeDialog}
              className="flex size-11 shrink-0 cursor-pointer items-center justify-center text-2xl text-text-sub transition-colors hover:text-text-main focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="확대 화면 닫기"
            >
              <FiX aria-hidden="true" />
            </button>
          </header>

          <div className="min-h-0 overflow-auto bg-slate-100 p-2 sm:p-4">
            <Image
              src={src}
              width={width}
              height={height}
              sizes="94vw"
              alt={alt}
              className="mx-auto h-auto max-h-[calc(94dvh-5.5rem)] w-auto max-w-full object-contain"
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
