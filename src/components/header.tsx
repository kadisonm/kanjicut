"use client"

import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={300} height={100}/>
            </Link>

            <Link href="/search" className='interactive-text'>Search Kanji or Keyword</Link>
        </div>
    );
}
  