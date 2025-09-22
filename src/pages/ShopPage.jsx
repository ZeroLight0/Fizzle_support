import NavBar from "../components/NavBar/NavBar.jsx";
import ShopCard from "../components/ShopCard/ShopCard.jsx";
// import ShopCard from "./../components/ShopCard/ShopCard";

function ShopPage() {
  const products = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/3515/3515278.png",
      title: "Classic Chocolate Cupcakes",
      badge: "Popular",
      price: "12.99",
      description:
        "Rich, moist chocolate cupcakes with vanilla frosting. Pack of 6.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      title: "Vanilla Delight Cupcakes",
      price: "10.99",
      description:
        "Fluffy vanilla cupcakes topped with creamy frosting. Pack of 6.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      title: "Red Velvet Cupcakes",
      badge: "New",
      price: "14.99",
      description:
        "Decadent red velvet cupcakes with cream cheese frosting. Pack of 6.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      title: "Red Velvet Cupcakes",
      badge: "New",
      price: "14.99",
      description:
        "Decadent red velvet cupcakes with cream cheese frosting. Pack of 6.",
    },
  ];

  return (
    <>
      <div className="sticky top-0 z-10">
        <NavBar />
      </div>
      <div className="min-h-screen bg-gray-100 p-6 py-16">
        <div className="text w-[55%] text-center flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-center text-[#0B3224]">
            Our Delicious Products
          </h1>
          <p className="text-xl font-[400] text-[#4E977D]">
            Discover our range of certified gluten-free desserts, made with love
            and priced with care.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ShopCard
              key={index}
              image={product.image}
              title={product.title}
              badge={product.badge}
              price={product.price}
              description={product.description}
              onAddToCart={() => alert(`${product.title} added to cart!`)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ShopPage;
