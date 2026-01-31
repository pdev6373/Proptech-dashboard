"use client";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  closeOnEscape?: boolean;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeClasses = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-md",
  lg: "sm:max-w-lg",
  xl: "sm:max-w-xl",
  full: "sm:max-w-full mx-4",
};

export default function Modal({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnEscape = true,
  closeOnBackdropClick = true,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) =>
      closeOnEscape && e.key === "Escape" && isOpen && onClose();

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen && modalRef.current) modalRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    closeOnBackdropClick && e.target === e.currentTarget && onClose();

  const modalContent = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-60 flex items-end sm:items-center justify-center animate-fadeIn"
    >
      <div
        onClick={handleBackdropClick}
        className="cursor-pointer fixed inset-0 z-50 bg-black/30 sm:bg-black/40 animate-fadeIn"
      />

      <div
        tabIndex={-1}
        ref={modalRef}
        className={`relative z-60 w-full ${sizeClasses[size]} bg-white rounded-t-lg sm:rounded-b-lg shadow-xl animate-slideUp flex flex-col max-h-[calc(100dvh-40px)]`}
      >
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
