import DataTable from "@/components/dataTable"
import Navbar from "@/components/navbar"
import Rightbar from "@/components/rightbar"
import Sidebar from "@/components/sidebar"
import React from "react"



export default function Dashboard (){
    
    return(
    <>
     <Sidebar />
      <Navbar />
      <Rightbar/>
      <DataTable/>
    </>
    )
}