import Image from 'next/image'

export function Header() {
  
  const pages = [
    'blog',
    'projects',
    'about_me'
  ]

  const handleButtonClick = () => {
    const pdfUrl = '/pdf/EmilioRodriguez_Resume.pdf';
    window.open(pdfUrl, '_blank');
  };


  return (
    <header className='text-l text-slate-400 flex sm:justify-around justify-between items-center border-b border-slate-800 min-h-fit'>
      <div className='p-8'>
        <a href="https://emiliorh.com">
          <Image src="/test-logo.svg" alt="er" height={50} width={50} layout='fixed' />
        </a>
      </div>
      <div className='flex gap-10 items-center'>
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
        <button className='border rounded-md border-emerald-400 hover:bg-indigo-700 text-emerald-400 px-4 py-2' onClick={handleButtonClick}>Resume</button>
      </div>
    </header>
  )
}