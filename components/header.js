import Image from 'next/image'

import logo from '../public/logo.svg'

export default function Header() {
  return (
    <div className="h-140 w-screen bg-black">
        <div className='pt-5 pb-4 pl-4'>
            <Image src={logo} width={95} height={95}/>
        </div>
    </div>
  )
}
