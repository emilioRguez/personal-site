import { About } from "../components/About";
import { SideBar } from "../components/SideBar";
import Image from "next/image";

export default function Aboutme() {
  return (
    <div className="flex flex-1">
      <SideBar />
      <About />
      
    </div>
  )
}