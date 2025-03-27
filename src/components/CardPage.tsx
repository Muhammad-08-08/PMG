import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { CardPageProps } from "./types";

function CardPage({ items }: CardPageProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {items.map((item) => (
        <Card key={item.id} className="w-[300px] shadow-lg rounded-lg relative">
          <div className="relative">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={0}
              height={0}
              className="w-full h-[30vh] rounded-t-lg object-cover"
            />
            <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition cursor-pointer">
              <Heart className="text-red-500" size={20} />
            </button>
          </div>

          <CardHeader>
            <CardTitle className="text-xl font-semibold truncate">
              {item.name}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            <p className="text-lg font-bold text-green-600">${item.price}</p>

            <p className="text-gray-700 truncate">{item.description}</p>

            <Button className="w-full flex items-center gap-2 cursor-pointer">
              <ShoppingCart size={18} /> Savatchaga qo‘shish
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default CardPage;
