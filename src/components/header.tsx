"use client"

import Link from 'next/link'

export default function Header() {
    return (
        <div className="header">
            <div className="left">
                <span>
                    <div className="subtitle">By Kadison McLellan</div>
                    <div className="title">Cut Kanji</div>
                </span>
                
                <Link className="header-button" href="/">Home</Link>
                <Link className="header-button" href="/search">Kanji Search</Link>
            </div>

            <div className="right">
                <p>Search</p>
            </div>
        </div>
    );
}
  