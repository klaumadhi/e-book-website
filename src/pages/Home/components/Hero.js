import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center lg:flex-row dark:text-slate-100">
      <div className="my-5 text">
        <h1 className="text-5xl font-bold ">The Ultimate eBook Store</h1>
        <p className="px-1 text-2xl my-7 dark:text-slate-300">
          ProgBook is the world's most popular and authoritative source for
          computer science ebooks. Find ratings and access to the newest books
          digitally.
        </p>
        <Link
          to="/products"
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Explore eBooks
        </Link>
      </div>
      <div className="my-5 visual lg:max-w-xl">
        <img
          className="max-h-full rounded-lg"
          src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=60"
          alt="ProgBook Hero Section"
        />
      </div>
    </section>
  );
};
