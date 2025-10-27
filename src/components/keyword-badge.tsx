import Link from "next/link";

interface BoxProps {
    title?: string;
}

export default function KeywordBadge({ title, url }: BoxProps) {
    return (
        <Link className="keyword-badge" href={url}>
            {title}
        </Link>
    );
}
