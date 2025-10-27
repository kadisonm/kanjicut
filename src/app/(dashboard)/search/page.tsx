'use client'

import { Suspense } from 'react'
import { useSearchParams } from "next/navigation";

import SpecialBox from "@/components/special-box";
import Box from "@/components/box";
import Keyword from "@/components/keyword";
import { Key } from "lucide-react";
import { getKeywords } from "@/utils/kanji";

// This function has to be seperate due to the useSearchParams() being client side only
function Search() {
  // Get the search query (from URL)
  const searchParams = useSearchParams();
  const qParam = searchParams?.get("q") ?? "";

  // Decode the query to a kanji
  const query = qParam ? decodeURIComponent(qParam) : "";

  // Retrieve the keywords
  const keywords = getKeywords(query);

  // HTML
  return (
    <>
      <p>Search results for ‘{query}’</p>

      <div className="horizontal-split">
        <SpecialBox>
          <h1>{query}</h1>
          <h2>{keywords && keywords["jpdbKeyword"]}</h2>
        </SpecialBox>

        <Box icon={<Key />} title="Keywords">
          <hr />
          <Keyword
            keyword={keywords && keywords["jpdbKeyword"]}
            source="jpdb"
            url={`https://jpdb.io/kanji/${query}`}
          />
          <hr />
          <Keyword
            keyword={keywords && keywords["heisigKeyword"]}
            source="heisig"
            url="http://ziggr.com/heisig/"
          />
          <hr />
        </Box>
      </div>
    </>
  );
}

// Search component must be suspended to ensure it is only EVER run on the client.
// Otherwise it throws an error when attempting to build the site.
export default function SearchPage() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}