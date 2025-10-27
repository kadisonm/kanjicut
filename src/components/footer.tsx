import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <Link className="interactive-text" href="/about">About</Link>

            {/* <a className="header-button" href="https://github.com/kadisonm/kanjicut">GitHub ↗</a>  */}

            <Link className="interactive-text" href="/Attribution">Attribution</Link>
        </footer>
    );
}
