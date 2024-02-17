import Image from "next/image";
import styles from "./page.module.css";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Rightbar from "@/components/rightbar";
import DataTable from "@/components/dataTable";
import Dashboard from "./dashboard/page";





export default function Home() {
  return (
    <main className="mainHome">
      <Dashboard/>
    </main>
  );
}
