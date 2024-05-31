import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center font-bold mb-3 text-5xl text-red">Products</h1>

      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="grid grid-cols-4 gap-6">
          {data.map((product) => (
            <div
              key={product.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <img
                className="w-full h-48 object-cover rounded-t-lg"
                src={product.image}
                alt={product.title}
              />

              <div className="flex flex-col h-72 p-5"> 
                <div className="flex-grow">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                    {product.title}
                  </h5>
                </div>

                <div className="flex justify-between items-center mt-auto"> 
                  <strong className="text-lg text-blue-700">${product.price}</strong>
                  <button 
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    Add To Cart
                    <svg
                      className="w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
