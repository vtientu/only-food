import { Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const LoginForm = () => {
  return (
    <div className="w-full md:w-2/5 bg-[#fff3f0] rounded-xl p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create Account
      </h2>
      <form className="space-y-4">
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <User className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Your name"
            className="ml-2 w-full outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <Mail className="w-4 h-4 text-gray-400" />
          <input
            type="email"
            placeholder="Userexample@gmail.com"
            className="ml-2 w-full outline-none bg-transparent"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
          <Lock className="w-4 h-4 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="ml-2 w-full outline-none bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold"
        >
          Sign up
        </button>
      </form>

      <div className="text-center my-4 text-gray-500">Or continue with</div>
      <div className="flex justify-center gap-4">
        <button className="bg-white px-10 rounded-full p-2 hover:shadow">
          <Image src="/images/google.png" alt="Google" width={20} height={20} />
        </button>
        <button className="bg-white px-10 rounded-full p-2 hover:shadow">
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
