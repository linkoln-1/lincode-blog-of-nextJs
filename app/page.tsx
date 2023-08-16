"use client"
import {Sidebar} from "@/components/Sidebar/Sidebar";
import './page.scss'
import {Content} from "@/components/Content/Content";

export default function Home() {
  return (
    <div className="container">
        <Sidebar />
        <Content />
    </div>
  )
}
