import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CardDetail() {
  return (
    <main>
      <Card className=" w-full h-[800px] bg-white shadow-md rounded-lg">
        <CardHeader>
            <Image
            src={"/room1.jpg"}
            alt="Hero Image"
            width={1024}
            height={768} 
            className="object-cover rounded-md w-[400px] h-[300px]"
            />
        </CardHeader>
        <CardContent>
          <h2 className="text-xl font-bold mb-2">Room 1</h2>
          <p className="text-gray-600 mb-2">Price: 1,500 THB</p>
          <p className="text-gray-600 mb-2">Room Type: Standard</p>
          <p className="text-gray-600 mb-2">Max Occupancy: 2</p>
          <p className="text-gray-600 mb-2">Bed Type: King Size</p>
          <p className="text-gray-600 mb-2">Room Size: 30 m²</p>
          
        </CardContent>

      </Card>
    </main>
  );
}