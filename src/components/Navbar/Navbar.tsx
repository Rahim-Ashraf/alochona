"use client"

import Link from "next/link"

export default function Navbar() {
    return (
       <div>
        <h1 className="text-2xl font-bold"><Link href="/">Alochona</Link></h1>
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>   
                <li><Link href="/login">login</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/massage">Massage</Link></li>
                <li><Link href="/groups">Groups</Link></li>
                <li><Link href="/notification">Notification</Link></li>
            </ul>
        </nav>
       </div>
    )
}