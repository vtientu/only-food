import Image from "next/image";

export default function FoodCard({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="w-full">
      <div className="relative h-[200px]">
        <Image
          src={src}
          alt={title}
          fill
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="mt-2">
        <p className="text-orange-500">★★★★★</p>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
}
