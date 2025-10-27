import KeywordBadge from "./keyword-badge";

interface BoxProps {
    keyword: string;
    source: string;
    url: string;
}

export default function Keyword({ keyword, source, url }: BoxProps) {
    return (
        <div className="keyword">
            <KeywordBadge title={source} url={url}/>
            <p>{keyword}</p>
        </div>
    );
}
