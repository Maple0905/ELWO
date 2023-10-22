import { useState, useEffect } from 'react';

export default function useDebounce(searchName: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(searchName);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchName);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchName, delay]);

  return debouncedValue;
}
