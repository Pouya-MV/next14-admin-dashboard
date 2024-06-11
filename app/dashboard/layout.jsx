import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <div className="flex-1 bg-darkSoft p-5">
        <Sidebar />
      </div>
      <div className="flex-[4] p-5">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
