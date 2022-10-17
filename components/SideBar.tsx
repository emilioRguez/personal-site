import { CaretRight, UserCircle, Phone, Envelope } from "phosphor-react";

export function SideBar() {
  return (
    <aside className="w-60 pu-6 border-r border-[#1E2D3D] h-screen">
      {/* <span className="flex text-s pb-4 mb-4 border-b border-[#1E2D3D]"> 
        personal-info
      </span>

      <div className="flex flex-col gap-8">
        <ul>
          <li>
            bio   
          </li>
          <li>
            intersests
          </li>
          <li>
            education
          </li>
        </ul>
      </div> */}

      <span className="flex text-s p-4 gap-2"> 
        {/* <UserCircle size={20} className="inline-block mt-1" /> */}
        contact_info
      </span>

      <div className="px-4 text-[#607B96]">
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

    </aside>
  )
}