import Image from "next/image";

export default function Hero() {
  return (
    <main>
      <div className="top-0 left-0 right-0 rounded-b-2xl overflow-hidden shadow-lg">
          <Image
            src="/hero2.jpg"
            alt="Hero Image"
            width={1024}
            height={768}
            className="w-full h-[500px] object-cover"
          />
      </div>
    </main>
  );
}
