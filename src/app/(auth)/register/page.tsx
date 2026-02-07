import React from "react";
import Image from "next/image";

const RegisterPage = () => {
    return (
            <div className="flex text-gray-950">
              <div
                className="flex flex-1 justify-center items-end min-h-screen bg-center bg-cover"
                style={{ backgroundImage: `url('/img/bg3.jpg')` }}
              ></div>
        
              <div className="flex justify-center items-center min-h-screen  bg-gray-950 w-1/2">
                <form className="bg-white p-15 rounded-2xl shadow-lg w-full mx-35 my-10 text-black">
                  <h2 className="font-bold text-3xl text-center my-5">Register Akun</h2>
        
                  <div>
                    <p className="font-bold py-1">Fullname</p>
                    <input
                      name="fullname"
                      placeholder="Fullname..."
                      className="border border-amber-300 rounded-md py-2 pr-25 pl-2 mb-2"
                    />
                  </div>
                  <div>
                    <p className="font-bold py-1">Username</p>
                    <input
                      name="username"
                      placeholder="Username..."
                      className="border border-amber-300 rounded-md py-2 pr-25 pl-2 mb-2"
                    />
                  </div>
                  <div>
                    <p className="font-bold py-1">Email</p>
                    <input
                      name="email"
                      placeholder="Email..."
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
                      className="font-bold rounded-lg py-2 px-20 mt-5 bg-amber-300 hover:bg-gray-950 hover:text-amber-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Register
                    </button>
        
                    <p className="text-xs text-center mt-5 font-medium">login with </p>
                    <div className="flex gap-2 mt-2 justify-center font-medium">
                      <button className="flex ring-1 ring-gray-100 bg-white rounded-2xl px-1 hover:ring-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Image
                          src={"/logo/fb.png"}
                          alt=""
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                        <span className="pr-2 pl-1 pt-1 text-xs">facebook</span>
                      </button>
                      <button className="flex ring-1 ring-gray-100 bg-white rounded-2xl px-1  hover:ring-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
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
        
                    <p className="font-medium text-xs pt-5">
                      Sudah punya akun?
                      <a href="/login" className="px-1 text-blue-500 font-medium">
                        login
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
    );
};

export default RegisterPage;