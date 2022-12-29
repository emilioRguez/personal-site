import { TwitterLogo, InstagramLogo } from 'phosphor-react'

export function Footer() { 
    return (
        <footer className='flex gap-2 px-4 pt-2 border-t border-[#1E2D3D]'>
        <div>
          <span className="text-m text-[#607B96]">
            Find me in:
          </span>
        </div>
        <div>
          <a href="https://twitter.com/emilioRdguez">
            <TwitterLogo size={25} color={'#4D5BCE'} className='inline-block' />
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/emiliorguezh/">
            <InstagramLogo size={25} color={'#E99287'} className='inline-block' />
          </a>
        </div>
      </footer>
    )
}