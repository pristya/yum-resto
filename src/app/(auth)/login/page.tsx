import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex text-gray-950">
      <div
        className="flex flex-1 justify-center items-end min-h-screen bg-center bg-cover"
        style={{ backgroundImage: `url('/img/bg3.jpg')` }}
      ></div>

      <div className="flex justify-center items-center min-h-screen bg-gray-950 w-1/2">
        <form className="bg-white p-15 rounded-2xl shadow-lg w-full mx-35 text-black">
          <h2 className="font-bold text-3xl text-center my-5">Login Akun</h2>

          <div>
            <p className="font-bold py-1">Username</p>
            <input
              name="username"
              placeholder="Username..."
              className="border border-amber-300 rounded-md py-2 pr-25 pl-2 mb-2"
            />
          </div>

          <div>
            <p className="font-bold py-1">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              className="border border-amber-300 rounded py-2 pl-2 pr-25 mb-2"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="font-bold rounded-lg py-2 px-20 mt-5 bg-amber-300 transition-all transform duration-300 hover:scale-105 shadow-lg hover:bg-gray-950 hover:text-amber-300"
            >
              Login
            </button>

            <p className="text-xs text-center mt-5 font-bold">login with </p>
            <div className="flex gap-2 mt-2 justify-center font-medium">
              <button className="flex ring-1 ring-blue-100 bg-white rounded-2xl px-1 hover:ring-blue-500 transition-all transform hover:scale-105 shadow-lg">
                <Image
                  src={"/logo/fb.png"}
                  alt=""
                  width={28}
                  height={28}
                  className="object-contain"
                />
                <span className="pr-2 pl-1 pt-1 text-xs">facebook</span>
              </button>
              <button className="flex ring-1 ring-blue-100 bg-white rounded-2xl px-1 hover:ring-blue-500 transition-all transform hover:scale-105 shadow-lg">
                <Image
                  src={"/logo/google.png"}
                  alt=""
                  width={26}
                  height={26}
                  className="object-contain"
                />
                <span className="pr-2 pl-1 pt-1 text-xs">Google</span>
              </button>
            </div>

            <p className="font-light text-xs pt-5">
              Belum punya akun?
              <a href="/register" className="px-1 text-blue-400 font-medium hover:text-blue-700">
                daftar disini!
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
