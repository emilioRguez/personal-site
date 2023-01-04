import Head from 'next/head'
import { HandWaving, CaretRight } from 'phosphor-react'

export default function Home() {
  <Head>
    <title>_hello</title>
    <meta name="description" content="Personal website building by a developer" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  return (
    <>
      <div className='flex justify-center items-center p-10'>
        <main className='box-border'>
          <HandWaving size={25} color={'#34d399'} className='inline-block' /> Hi everyone! I&apos;m
          <h1 className='text-6xl mt-6 flex font-medium'>
            Emilio Rodriguez
          </h1>
          <div className='mt-2 flex items-center text-indigo-500'>
            <CaretRight size={22} weight={'bold'}/> 
            <span className='text-2xl'>Software Engineer & IT</span>
          </div>
          <p className='mt-10 md:mt-5 text-m text-slate-400 leading-loose max-w-[50rem]'>
            &quot;One thing at a time&quot;. I&apos;m trying to follow that quote every day as my mantra.
            Currently, I&apos;m focused on improve myself 1% each day. I&apos;m passionate about technology
            and building projects.
          </p>
          <div className='mt-5 text-slate-400 leading-loose'>
            <p>.// you can see my projects in Guithub</p>
            <span className='text-indigo-500'>const</span> <span className='text-emerald-400'>githubLink</span> = 
            <a href="https://github.com/emilioRguez" className='text-[#E99287] hover:underline ml-2'>https://github.com/emilioRguez</a>
          </div>
          <div className='mt-5 text-slate-400 leading-loose'>
            <p>.// and we also could connect in LinkedIn</p>
            <span className='text-indigo-500'>const</span> <span className='text-emerald-400'>linkedinLink</span> = 
            <a href="https://www.linkedin.com/in/emiliordguez/" className='text-[#E99287] hover:underline ml-2'>https://www.linkedin.com/in/emiliordguez/</a>
          </div>
        </main>
      </div>
    </>
  )
}
