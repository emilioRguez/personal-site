export function Header() {
  return (
    <header className='text-l text-[#607B96] flex px-4 py-4 border border-[#1E2D3D]'>
      <a href="http://wwww.emiliorh.com">emilio-rodriguez</a>
      <div className='flex-1 ml-40 place-items-center'>
        <nav>
          <div className="justify-items-center">
            <span > 
              <a href="../" className="mr-16 ">_home</a>
            </span>
            <span>
              <a href="../blog" className="mr-16">_blog</a>
            </span>
            <span>
              <a href="" className="mr-16">_projects</a>
            </span>
            <span className="pb-4 mb-4  text-white border-b-2 border-yellow-600">
              <a href="../aboutme" className="mr-8">_about_me</a>
            </span>
          </div>
        </nav>
      </div>
    </header>
    
  )
}