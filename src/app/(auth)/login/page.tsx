import React from "react";

const LoginPage = () => {
  return (
    <div className="flex gap-2">
      <div className="flex flex-1 justify-center items-end min-h-screen bg-center bg-cover"
      style={{ backgroundImage: `url('/img/bg3.jpg')`}}></div>

      <div className="flex justify-center items-center min-h-screen bg-gray-950">
        <form className="bg-amber-100 p-8 rounded-2xl shadow-lg w-full max-w-md text-black"> 
            <h2>
                Login Akun
            </h2>

            <input name="username"
            placeholder="Fill the username..."
            className=""/>

            <input type="password"
            name="password"
            placeholder="Password..."
            className="" />

            <button type="submit"
            className="">
                Login
            </button>

            <p className="">
                Belum punya akun? 
                <a href="/register">
                Daftar disini!</a>
            </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
