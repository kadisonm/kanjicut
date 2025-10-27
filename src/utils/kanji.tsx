import Image from 'next/image';

import keywords from "./keywords.json"

export function getKeywords(kanji: string) {
  return keywords[kanji]
}

export function isValidKanji(kanji: string): boolean {
  if (kanji.length !== 1 && !/[\u4e00-\u9faf\u3400-\u4dbf]/u.test(kanji)) {
    console.log(`${kanji} is not a valid kanji.`);
    return false;
  }

  return true;
}

function hexCodeForKanji(kanji: string): string {
  const codePoint = kanji.codePointAt(0);

  if (codePoint === undefined) return "";

  return codePoint.toString(16).padStart(5, "0").toLowerCase();
}

export function getSVG(kanji: string) {
  if (!isValidKanji(kanji)) {
    console.log(`Could not find non-Unicode or pseudo-kanji: ${kanji}`);

    return (<h1>{kanji}</h1>);
  }

  const hexCode = hexCodeForKanji(kanji);
  const pathToSvg = `/kanji/${hexCode}.svg`;

  return (<Image
    src={pathToSvg}
    width={109}
    height={109}
  />);
}