import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

const PlacesPage = () => {
  const { action } = useParams();
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="btn-primary bg-[#3A5F0B] text-white py-2 px-6 rounded-full inline-flex gap-1"
            to={"/account/places/new"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <h2 className="text-xl mt-4 ">Title</h2>
            <p className="text-gray-500 text-sm">
              Title for you place. should be short and catchy as in
              advertisement{" "}
            </p>
            <input type="text" placeholder="title" />
            <h2 className="text-xl mt-4 ">Address</h2>
            <p className="text-gray-500 text-sm">Address to this place</p>
            <input type="text" placeholder="address" />
            <h2 className="text-xl mt-4 ">Photos</h2>
            <p className="text-gray-500 text-sm">Upload photos of your place</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link"} />
              <button
                style={{ cursor: "pointer" }}
                className="bg-gray-200 grow px-4 rounded-2xl text-sm"
              >
                Add Photo
              </button>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <button
                style={{ cursor: "pointer" }}
                className="flex justify-center border bg-transparent rounded-2xl p-8 text-2xl text-gray-600 gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>
                Upload
              </button>
            </div>
            <h2 className="text-xl mt-4 ">Description</h2>
            <p className="text-gray-500 text-sm">
              description for your place. should be detailed and informative
            </p>
            <textarea />
          </form>
        </div>
      )}
    </div>
  );
};
export default PlacesPage;
