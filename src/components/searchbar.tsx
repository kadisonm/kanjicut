'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

import { isValidKanji } from '@/utils/kanji';

/**
 * Client-side SearchBar that navigates to /search?q=term
 */
export default function SearchBar({ initial = '' }) {
  const [q, setQ] = useState(initial);
  const router = useRouter();

  useEffect(() => {
    setQ(initial);
  }, [initial]);

  const onSubmit = (e) => {
    const trimmed = q.trim();
    const first = trimmed[0]



    if (!trimmed) return;
    
    // navigate to query-string route (works with static export)
    router.push(`/search?q=${encodeURIComponent(first)}`);
    document.getElementsByClassName('searchbar')[0].value = "";
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
        onSubmit();
        setQ('');
    }
  }

  return (
    <div className="searchbar">
      <input
        name="q"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search kanji..."
        autoComplete="off"
        onKeyDown={onKeyDown}
      />
      
      <Search onClick={onSubmit} />
    </div>
  );
}