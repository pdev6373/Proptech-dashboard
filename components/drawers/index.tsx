"use client";
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  closeOnEscape?: boolean;
  children: React.ReactNode;
  closeOnBackdropClick?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "full";
};

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

export default function Drawer({
  isOpen,
  onClose,
  children,
  size = "md",
  closeOnEscape = true,
  closeOnBackdropClick = true,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) =>
      closeOnEscape && e.key === "Escape" && isOpen && onClose();

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closeOnEscape]);

  useEffect(() => {
    if (isOpen && drawerRef.current) drawerRef.current.focus();
  }, [isOpen]);

  if (!isMounted) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) =>
    closeOnBackdropClick && e.target === e.currentTarget && onClose();

  const drawerContent = (
    <div
      role="dialog"
      aria-modal="true"
      className={`fixed inset-0 z-50 flex justify-end transition-opacity duration-200 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      <div
        onClick={handleBackdropClick}
        className={`cursor-pointer fixed inset-0 bg-black/30 sm:bg-black/40 transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        tabIndex={-1}
        ref={drawerRef}
        className={`relative z-60 w-full ${sizeClasses[size]} bg-white shadow-xl flex flex-col h-full transition-transform duration-200 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
}
