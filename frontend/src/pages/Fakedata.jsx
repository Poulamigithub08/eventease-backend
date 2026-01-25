import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, Slide, Zoom, Bounce } from "react-toastify"; // animations!

export default function Fakedata() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);

      // Animated success toast 🎉
      toast.success("✅ Data fetched successfully!", {
        position: "top-right",
        transition: Bounce,
        autoClose: 2000,
        className: "bg-gradient-to-r from-green-500 to-emerald-400 text-white shadow-lg",
        progressClassName: "bg-white",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("❌ Failed to fetch data!", {
        transition: Slide,
        autoClose: 3000,
        className: "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg",
        progressClassName: "bg-white",
      });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-10">
      <h1 className="text-3xl text-center font-bold mb-8 text-blue-600">
        Fake Data
      </h1>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
