'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import SearchBar from '@/components/searchbar';

import SpecialBox from '@/components/special-box';
import Box from '@/components/box';
import Keyword from '@/components/keyword';
import { Key } from 'lucide-react';
import { getKeywords } from '@/utils/kanji';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const qParam = searchParams?.get('q') ?? '';
  const query = qParam ? decodeURIComponent(qParam) : '';

  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const keywords = getKeywords(query);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);
    setResults(null);

    // Replace with your real API endpoint
    fetch(`/api/search?q=${encodeURIComponent(query)}`)
      .then((res) => {
        if (!res.ok) throw new Error('Search request failed');
        return res.json();
      })
      .then((data) => setResults(data.items ?? data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  return (<>
      <p>Search results for ‘{query}’</p>

      <div className="horizontal-split">
          <SpecialBox>
              <h1>{query}</h1>
              <h2>{keywords && keywords["jpdbKeyword"]}</h2>
          </SpecialBox>

          <Box icon={<Key />} title="Keywords">
              <hr />
              <Keyword keyword={keywords && keywords["jpdbKeyword"]} source="jpdb" url="https://jpdb.io/kanji/%E8%A9%B1#a"/>
              <hr />
              <Keyword keyword={keywords && keywords["heisigKeyword"]} source="heisig" url="http://ziggr.com/heisig/"/>
              <hr />
          </Box>
      </div>
  </>);
}