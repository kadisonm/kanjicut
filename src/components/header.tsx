"use client"

import Link from 'next/link'
import Image from 'next/image';

import kanji from "../public/logo.svg"
import SearchBar from './searchbar';

export default function Header() {
    return (
        <div className="header">
            <Link href="/">
                <Image src="/logo.svg" alt="Logo" width={300} height={100}/>
            </Link>
            
            <SearchBar className='interactive-text'></SearchBar>
        </div>
    );
}
  