import Image from "next/image";
import { CaretRight, UserCircle, Phone, Envelope } from "phosphor-react";

export function ContactCard() {
  return (
    <div className="flex justify-center p-8">
    <div className="border border-emerald-400 rounded-md inline-block">
      <div className="flex justify-center items-center p-4">
        <img src="/emilio.jpg" width={100} height={100} className='rounded-full border-2 border-emerald-400'/>
        <div className="px-4 text-slate-400">
          <span className="font-medium ">Emilio Rodriguez</span>
          <ul className="leading-loose">
            <li className="flex gap-2 items-center">
              <Envelope size={20} className="inline-block" />
              erdguezh@gmail.com
            </li>
            <li className="flex gap-2 items-center">
              <Phone size={20} className="inline-block" />
              813-595-1419
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}