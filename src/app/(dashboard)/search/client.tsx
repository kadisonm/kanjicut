"use client";

import { useSearchParams } from "next/navigation";

import SpecialBox from "@/components/special-box";
import Box from "@/components/box";
import Keyword from "@/components/keyword";
import { Key } from "lucide-react";
import { getKeywords } from "@/utils/kanji";

export default function SearchClient() {
  const searchParams = useSearchParams();
  const qParam = searchParams?.get("q") ?? "";
  const query = qParam ? decodeURIComponent(qParam) : "";

  const keywords = getKeywords(query);

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
            url="https://jpdb.io/kanji/%E8%A9%B1#a"
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