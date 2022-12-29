import { useState } from "react"

export function Header() {
  
  const pages = [
    'blog',
    'projects',
    'about_me'
  ]

  const [hovered, setHovered] = useState('')

  return (
    <header className='text-l items-center text-slate-400 flex lg:justify-around sm:justify-center p-4 border-b border-slate-800'>
      <a className='font-medium text-emerald-400' href="http://wwww.emiliorh.com">emilio-rodriguez</a>
      <div className="flex gap-10 items-center">
        <nav>
          <ul className="flex gap-8">
            {pages.map(page => {
              const path = `/${page.toLowerCase()}`
              const isHovered = hovered === path
              return (
                <li key={page}>
                  <a href={path} className='hover:text-indigo-500'><span className="text-green-300">_</span>{page}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        <button className="border rounded-md border-emerald-400 hover:bg-indigo-700 text-emerald-400 px-4 py-2">Get Resume</button>
      </div>
    </header>
  )
}