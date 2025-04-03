import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex items-center gap-5 justify-between p-4 shadow-md bg-white px-10">
      <Link href={"/"}>
        <div className="text-xl font-bold mr-10">Logo</div>
      </Link>

      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
        <Input type="text" placeholder="Qidirish..." className="pl-10" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 transition-all duration-700">
          <FiUser size={20} />
          <p>Kirish</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-red-500 transition-all duration-700">
          <FiHeart size={20} />
          <p>Sevimlilar</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer hover:text-green-500 transition-all duration-700">
          <FiShoppingCart size={20} />
          <p>Savatcha</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
