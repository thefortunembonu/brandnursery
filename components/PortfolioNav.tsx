'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

const PortfolioNav = () => {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)

  return (
    <nav className='bg-primary border-t px-8 border-gray-500/20 '>
      <ul className=" flex items-center gap-2 rounded-lg px-4 py-4 text-xs font-bold uppercase text-secondary ">
        {segments.map((segment, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/')

          const label = segment
            .replace(/-/g, ' ')
            .replace(/\b\w/g, (char) => char.toUpperCase())

          return (
            <li key={href} className="flex items-center gap-2">
              <Link
                href={href}
                className="flex items-center gap-2 transition-colors hover:text-blue-500 hover:underline"
              >
                {label}

                {index < segments.length - 1 && (
                  <IoIosArrowForward />
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default PortfolioNav