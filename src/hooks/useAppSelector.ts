// src/hooks/useAppSelector.ts
import { useState } from 'react';

export function useAppSelector() {
  const [isVisible, setIsVisible] = useState(false);

  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  return { isVisible, open, close };
}
