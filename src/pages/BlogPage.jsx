function BlogPage() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#f8f8f8] flex flex-col items-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#16A249] mb-6 text-center">
          Fizzle Blog
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-2xl">
          Discover sweet stories, baking tips, and the latest news from the
          Fizzle community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 hover:shadow-lg transition-transform duration-300 hover:scale-103"
            >
              <img
                src="/fizzle_bg1.jpg"
                alt="Blog Post"
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-2xl font-semibold text-[#16A249]">
                Blog Post {i}
              </h2>
              <p className="text-gray-600">
                A short summary of the blog post goes here. Learn more about our
                desserts, team, and events!
              </p>
              <button className="mt-2 text-[#16A249] font-medium hover:underline w-fit">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default BlogPage;
