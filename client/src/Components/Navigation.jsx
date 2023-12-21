import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Navigation = () => {
  const roles = JSON.parse(localStorage.getItem("user")).role;

  return (
    <>
      {" "}
      <nav className="p-4 bg-gray-50 w-full ">
        <div className="  flex justify-between items-center text-gray-800 ">
          <div className="flex items-center">
            {" "}
            <svg
              fill="#000000"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="20px"
              height="20px"
              viewBox="0 0 950.341 950.341"
              xmlSpace="preserve"
            >
              <g>
                <g>
                  <path
                    d="M570.737,97.94c120.7,0,204.601,115.9,190.4,230.5c-11.8,94.7-95.9,169.1-191.4,169.1h-113v110h113
			c133.2,0,251.4-90.3,289.101-217.5c11.7-39.5,15.3-81.399,10.2-122.3c-3.4-27.3-10.5-54.1-21-79.5
			c-34.601-83.7-105-151.4-194.601-176.4c-66.899-18.6-139.8-15.3-204.5,10c-33.8,13.2-65.399,32.3-92.5,56.4
			c-16.6,14.7-29.399,31.8-41.2,50.3h152.301C497.038,109.84,533.137,97.94,570.737,97.94z"
                  />
                  <path
                    d="M332.737,460.641V627.04c24.9,6,56,14.5,90,26.2v-192.6c133.7-20.101,238.601-128.4,253.5-263.7c2-17.7-12-33.2-29.8-33.2
			H441.038H303.437h-194.4c-17.9,0-31.8,15.5-29.8,33.2C94.137,332.24,198.937,440.54,332.737,460.641z"
                  />
                  <path
                    d="M466.237,950.341c9.301,0,16.301-8.301,14.801-17.5c-4.4-26.2-18.5-49.101-38.5-64.9c-3.2-2.5-6.5-4.8-10-7
			c-3.2-2-6.601-3.8-10-5.5v-20.5c-31.7-13.2-63.4-20.4-90-28v48.5c-3.4,1.6-6.801,3.5-10,5.5c-3.5,2.1-6.801,4.5-10,7
			c-20,15.8-34.101,38.7-38.5,64.9c-1.5,9.1,5.5,17.5,14.8,17.5H466.237z"
                  />
                  <path
                    d="M297.538,608.24v-110.5c-72.101,2.9-114.9,62.5-114.9,135.3c0,46.4,24.9,90.9,64.4,115.2c19.2,11.9,40.9,16.5,62.5,21.9
			c0,0,0,0,0.1,0c97.8,24.5,197.2,65.7,274.3,131.8c10.4,8.9,23.101,13.3,35.8,13.3c15.5,0,30.9-6.5,41.801-19.2
			c1.3-1.5,2.399-3,3.5-4.6c1.8-2.6,3.3-5.3,4.6-8.1c0.4-0.9,0.8-1.9,1.2-2.801c0.899-2.199,1.6-4.5,2.2-6.699
			c5-19.601-1.101-41.2-17.5-55.301c-67.9-58.199-148.9-99.699-233-129.199c-26.2-9.2-52.801-17.301-79.7-24.101
			c-9.8-2.5-19.8-5-29.7-7.1C269.137,648.44,269.137,614.641,297.538,608.24z"
                  />
                </g>
              </g>
            </svg>
            <span className="elf-center text-xl font-semibold whitespace-nowrap dark:text-white mx-2">
              Pharmacy
            </span>
          </div>

          <div className="space-x-4 flex jusify-center items-center">
            <NavLink to="/drugs" className="  hover:text-gray-500">
              Drugs
            </NavLink>
            <NavLink to="/transaction" className=" hover:text-gray-500">
              History
            </NavLink>
            {roles.includes("admin") && (
              <NavLink to="/users" className=" hover:text-gray-500">
                Users
              </NavLink>
            )}
            <NavLink to="/me" className=" hover:text-gray-500">
              Me
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
