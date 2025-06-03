import Image from "next/image";

export default function PopularCategories() {
  const items = [
    {
      src: "/images/categories/pasta 1.png",
      title: "Pasta",
    },
    {
      src: "/images/categories/pizza 1.png",
      title: "Pizza",
    },
    { src: "/images/categories/vegan food 1.png", title: "Vegan" },
    { src: "/images/categories/dessert 1.png", title: "Desserts" },
    { src: "/images/categories/smoothie 1.png", title: "Smoothies" },
    { src: "/images/categories/breakfast 1.png", title: "Breakfast" },
  ];

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Popular Categories</h2>
      <div className="w-full grid grid-cols-6 gap-5">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col items-center gap-2">
            <div className="relative h-[120px] w-full rounded-lg overflow-hidden">
              <Image src={item.src} alt={item.title} fill objectFit="contain" />
            </div>
            <p className="text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
