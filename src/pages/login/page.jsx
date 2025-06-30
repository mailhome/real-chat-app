import { useState } from "react";
import assets from "../../assets/assets";
import "./login.css"

const LoginPage = () => {
    const [currentState, setCurrentState] = useState("Sign Up");
    
    
    return ( 
        <div className="w-full h-screen bg-[url('/background.png')] bg-cover ">
            <div className="grid xl:grid-cols-2 grid-cols-1 container mx-auto h-full">
            <div className="flex items-center justify-center ">
                <img
                alt="login" 
                src={assets.logo_big}  
                className="h-[20vw] w-[20vw]" />
            </div>
            <form 
            className="flex h-auto w-7/12 items-start px-[40px] py-[30px] justify-start flex-col bg-white my-auto rounded-xl gap-5">
                <h2 className="xl:text-3xl font-semibold text-center w-full mb-2">
                    {currentState}
                </h2>
                <div className="w-full flex items-start justify-start flex-col gap-5">
                    {currentState === "Sign Up" ? ( 
                        <input type="text" placeholder="Username" className="border border-[#c9c9c9] xl:text-md rounded-sm px-4 py-2 hover:outline outline-[#077EFF] w-full" required />
                    ) : null  }
                    
                    <input type="email" placeholder="Email Address" className="border border-[#c9c9c9] xl:text-md rounded-sm px-4 py-2 hover:outline outline-[#077EFF] w-full" required />
                    <input type="password" placeholder="Password" className="border border-[#c9c9c9] xl:text-md rounded-sm px-4 py-2 hover:outline outline-[#077EFF] w-full" required  />
                    <button type="submit" className="bg-[#077EFF] px-4 py-2 rounded-md text-white w-full text-center text-lg cursor-pointer">{currentState === "Sign Up" ? "Create Account": "Login"}</button>
                </div>
                <div className="flex items-center justify-start text-[#808080] gap-2">
                    <input type="checkbox" />
                    <p>Agree to the terms of use & privacy policy</p>
                </div>
                <div className="flex justify-center items-center text-neutral-400 gap-2">
                    {currentState === "Sign Up" ? (
                        <p className="text-md color-[#5c5c5c] ">Already have an account <span className="cursor-pointer text-neutral-600 underline"
                    onClick={() => setCurrentState("Login")}>Login</span></p>
                    ) : (
                        <p className="text-md color-[#5c5c5c] ">Don't have an account <span className=" cursor-pointer text-neutral-500 underline"
                    onClick={() => setCurrentState("Sign Up")}>Create Account</span></p>
                    )}
                    
                </div>
            </form>
            </div>
        </div>
     );
}
 
export default LoginPage;