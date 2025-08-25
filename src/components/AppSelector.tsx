// src/components/AppSelector.tsx
import * as LucideIcon from 'lucide-react';

interface AppSelectorProps {
  isVisible: boolean;
  onClose: () => void;
}

export function AppSelector({ isVisible, onClose }: AppSelectorProps) {
  if (!isVisible) return null;

  return (
    <div className="bg-grey-20 w-[30%] h-[50%] absolute mx-auto">
      <button onClick={onClose}>
        <LucideIcon.X size={28} className="text-white"/>
      </button>
    </div> 
  );
}
