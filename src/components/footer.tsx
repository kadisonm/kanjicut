import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <a className="header-button" href="https://kadisonm.github.io/">By Kadison McLellan</a> 

            <a className="header-button" href="https://github.com/kadisonm/kanji-train">GitHub Repository ↗</a> 

            <div className="links">
                <Link className="header-button" href="/privacy">Privacy Policy</Link>
                <Link className="header-button" href="/tos">Terms of Service</Link>    
                <Link className="header-button" href="/gpl">GPL-3 Attribution</Link> 
                <Link className="header-button" href="/cookies">Cookies</Link>    
            </div>
        </footer>
    );
}
