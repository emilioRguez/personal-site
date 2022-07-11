import Head from 'next/head'
import { HandWaving, GithubLogo, CaretRight } from 'phosphor-react'

export default function Home() {
  return (
    <div className='p-2 mx-auto'>
      <Head>
        <title>_hello</title>
        <meta name="description" content="Personal website building by a developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='p-44'>
        <div className='text-xl'>
          <HandWaving size={25} color={'#43D9AD'} className='inline-block' /> Hi all. I am
          <span className='text-6xl mt-6 flex'>
            Emilio Rodriguez
          </span>
          <span className='text-2xl flex gap-2 text-[#4D5BCE]'>
            <CaretRight size={22} weight={'bold'} className='inline-block mt-1.5'/> Software Engineer
          </span>
        </div>
        <div className='mt-20 text-m text-[#607B96] leading-loose'>
          <span className='flex'>
            // Coding to improve the world.
          </span>
          <span className='flex'>
           // you can see my projects in Guithub
          </span>
        </div>
        <div className='leading-loose'>
          <span className='text-[#4D5BCE]'>const</span> <span className='text-[#43D9AD]'>githubLink</span> = 
          <a href="https://github.com/emilioRguez" className='text-[#E99287] hover:underline ml-2'>https://github.com/emilioRguez</a>
        </div>
        <div className='mt-6 text-m text-[#607B96] leading-loose'>
          <span className='flex'>
            // and we also can connect in LinkedIn
          </span>
        </div>
        <div className='leading-loose'>
          <span className='text-[#4D5BCE]'>const</span> <span className='text-[#43D9AD]'>linkedinLink</span> = 
          <a href="https://www.linkedin.com/in/emiliordguez/" className='text-[#E99287] hover:underline ml-2'>https://www.linkedin.com/in/emiliordguez/</a>
        </div>

      </main>

      {/* <footer className=''>
          Made with 💙 by Emilio Rodriguez.
      </footer> */}
    </div>
  )
}
