import { useState } from "react"

export function Header() {
  
  const pages = [
    'blog',
    'projects',
    'about_me'
  ]

  return (
    <header className='text-l items-center text-slate-400 lg:flex lg:justify-around p-4 border-b border-slate-800'>
      <div className="flex justify-center p-4">
        <a href="https://emiliorh.com">
          <img src="/test-logo.svg" alt="er" />
        </a>
      </div>
      <div className="flex justify-center gap-10 items-center">
        <nav>
          <ul className="flex gap-8">
            {pages.map(page => {
              const path = `/${page.toLowerCase()}`
              return (
              <li key={page}>
                <a href={path} className='hover:text-indigo-500'><span className="text-green-300">_</span>{page}</a>
              </li>
              )
            })}
          </ul>
        </nav>
        <button className="border rounded-md border-emerald-400 hover:bg-indigo-700 text-emerald-400 px-4 py-2">Resume</button>
      </div>
    </header>
  )
}