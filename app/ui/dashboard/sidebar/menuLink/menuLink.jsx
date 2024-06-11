"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function MenuLink({ item }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`p-5 flex items-center gap-2.5 my-2.5 hover:bg-[#2e374a] rounded-xl transition-all ease-in duration-200 ${pathname === item.path && "bg-[#2e374a]"}`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
