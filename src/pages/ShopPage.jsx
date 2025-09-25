import NavBar from "../components/NavBar/NavBar.jsx";
import ShopCard from "../components/ShopCard/ShopCard.jsx";
// import ShopCard from "./../components/ShopCard/ShopCard";

function ShopPage() {
  const products = [
    {
      image: "/cupcake.png",
      title: "Classic Strawberry Cupcakes",
      badge: "Popular",
      price: "12.99",
      description:
        "Rich, moist Vanilla cupcakes with Strawberry frosting. Pack of 6.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      title: "Meaty Delight Burgers",
      price: "10.99",
      description: "Meaty Burgers with only the best ingredients. Box of 3",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      title: "Red Velvet Cupcakes",
      badge: "New",
      price: "14.99",
      description:
        "Meaty Burgers with only the best ingredients and our special Mustard seed buns. Box of 3",
    },
    {
      image: "/cake.png",
      title: "Fluffy Chocolate Cake",
      price: "21.89",
      description:
        "Decadent Chocolate cake with cream cheese frosting. Pack of 6 slices.",
    },
    {
      image: "/yogurt.png",
      title: "Sweet Yogurt Parfait",

      price: "12.99",
      description:
        "Only the best and healthiest parfaits on the globe. Pack of 3.",
    },
    {
      image: "/strawberry.png",
      title: "Frosted cream donuts",
      badge: "Best seller",
      price: "16.29",
      description:
        "Amazingly great ring donuts with strawberry frosting. Pack of 12.",
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
