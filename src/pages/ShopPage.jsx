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
      <div className="min-h-screen bg-gradient-to-br from-[#f8f8f8] to-[#e6f4ee] px-2 py-8 flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-5 mb-10 px-2">
          <h1 className="text-4xl md:text-5xl font-bold text-[#16A249] mb-2">
            Our Delicious Products
          </h1>
          <p className="text-lg md:text-xl text-[#4E977D] max-w-2xl">
            Discover our range of certified gluten-free desserts, made with love
            and priced with care.
          </p>
        </section>

        {/* Responsive Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2">
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
