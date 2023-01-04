import { TwitterLogo, InstagramLogo } from 'phosphor-react'

export function Footer() { 
    return (
        <footer className='bottom-0 flex gap-4 justify-center items-center border-t border-slate-800 p-3'>
          <a href="https://twitter.com/emilioRdguez">
            <TwitterLogo size={25} color={'#4D5BCE'} className='inline-block' />
          </a>
          <a href="https://www.instagram.com/emiliorguezh/">
            <InstagramLogo size={25} color={'#E99287'} className='inline-block' />
          </a>
      </footer>
    )
}