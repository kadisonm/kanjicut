"use client"

import Box from "@/components/box";
import Link from "next/link";

export default function Attribution() {
  return (<>
    <Box>
        <p>A big thank you to <Link href="https://jpdb.io/">jpdb.io</Link> for permission to use their kanji keywords. All kanji keywords are linked to their respective pages on jpdb and more information can be found at <Link href="https://jpdb.io/">jpdb.io</Link>.</p>
        <hr />
        <p>The jpdb and RTK keywords are sourced from <Link href="https://github.com/joliss">Jo Liss</Link>' <Link href="https://github.com/joliss/heisig-jpdb">heisig-jpdb</Link> comparison table, which is distributed under the <Link href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</Link>. Modifications have been performed on the original data to include more keywords.</p>
        <hr />
        <p>The Kanji stroke diagrams are sourced from <Link href="https://kanjivg.tagaini.net/">KanjiVG</Link> data, which is licensed under the <Link href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0 license</Link>.</p>
    </Box>
  </>);
}
