"use client"

import { getKeywords, getSVG } from "@/utils/kanji";
import Box from "@/components/box";
import Keyword from "@/components/keyword";
import SpecialBox from "@/components/special-box";
import { Key } from "lucide-react";

export default function Search() {
    console.log(getKeywords("⻌"))
    return (
        <>
            <p>Search results for ‘話’</p>

            <div className="horizontal-split">
                <SpecialBox>
                    <h1>話</h1>
                    <h2>chat</h2>
                </SpecialBox>

                <Box icon={<Key />} title="Keywords">
                    <hr />
                    <Keyword keyword="to speak" source="jpdb" url="https://jpdb.io/kanji/%E8%A9%B1#a"/>
                    <hr />
                    <Keyword keyword="tale" source="heisig" url="http://ziggr.com/heisig/"/>
                    <hr />
                </Box>
            </div>
        </>
    );
}
  