import { useState, useEffect } from 'react';
import * as LucideIcon from 'lucide-react';

interface SidebarProps {
  children?: React.ReactNode;
  width?: string;
}

export default function Sidebar({
  children,
  width = '300px'
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar with Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button - moves with sidebar */}
      <button
        onClick={toggleSidebar}
        className={`
          fixed top-4 z-60 p-2 bg-grey-40 hover:bg-grey-60 text-white rounded-full
          transition-all duration-300 ease-in-out lucide-icon
          ${isOpen ? 'left-[calc(256px+20px)]' : 'left-4'}
        `}
        style={{
          left: isOpen ? `calc(${width} + 20px)` : '16px'
        }}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        <LucideIcon.Menu size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-20 z-40 transition-all duration-300 ease-in-out"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-grey-50 border-r border-grey-60 z-50
          transform transition-transform duration-300 ease-in-out rounded-tr-lg rounded-br-lg
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        style={{ width }}
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar navigation"
      >
        {children}
      </div>
    </>
  );
}

