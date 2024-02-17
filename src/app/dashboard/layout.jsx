"use client"
import React, { useState } from "react";
import Navbar from "../navbar/page";
import Sidebar from "../sidebar/page";




export default function Main ({children}){
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
      
    return(
        <>
        <div>
        <Navbar />
        </div>
        <div>
        <Sidebar />
        </div>
        {children}
        </>
    )
}