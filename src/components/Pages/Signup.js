import { NavLink } from 'react-router-dom';

export default function Signup(){
    return(
        <div class="h-screen flex justify-center bg-[rgba(12,12,12,0.9)] ">
            <div class="relative w-fit self-center justify-self-center h-[70%] blur-2xl">
                <div class="absolute ml-[60vw] w-72 h-72 bg-[#FAFF00] rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
                <div class="absolute ml-[20vw] w-72 h-72 bg-[#FF7A00] rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div>
                <div class="absolute bottom-2 ml-[60vw] w-72 h-72 bg-[#00FF85] rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
                <div class="absolute bottom-8 ml-[20vw]  w-72 h-72 bg-[#AD00FF] rounded-full mix-blend-multiply filter blur-3xl opacity-70 "></div> 
            </div>
            <div className='flex justify-center items-center w-screen bg-[rgba(12,12,12,0.76)] z-10'>  
                <div className="max-w-fit bg-[#030303] flex items-center justify-center border-[#494949] rounded-lg h-fit border px-4 py-7">
                    <div className="max-w-[90%] max-h-[80%]">
                        <h1 className="font-bold text-[#54F8A9] text-3xl text-center mb-6">STUC-X</h1>
                        <h2 className="font-medium text-[#F5F9FC] text-xl text-center mb-4">Sign Up</h2>
                        <form action='#' className="w-full flex flex-col items-center">
                            <input type='email' name='email' id='email' placeholder="Enter your Email Address" className="bg-inherit p-3 text-[#F5F9FC] border border-[#494949] rounded-md text-xs w-[100%] mb-4"/>
                            <input type='text' name='username' id='username' placeholder="Username" className="bg-inherit p-3 text-[#F5F9FC] border border-[#494949] rounded-md text-xs w-[100%] mb-4"/>
                            <input type='password' name='password' id='password' placeholder="Password" className="bg-inherit p-3 text-[#F5F9FC] border border-[#494949] rounded-md text-xs w-[100%] mb-4"/>
                            <input type='password' name='confirm_password' id='confirm_password' placeholder="Confirm Password" className="bg-inherit p-3 text-[#F5F9FC] border border-[#494949] rounded-md text-xs w-[100%] mb-4"/>
                            <div className="flex justify-between w-[100%] mb-4">
                                <label className="flex items-center self-start ">
                                    <input type='checkbox' />
                                    <span className="text-[#F5F9FC] text-xs ml-2">Remember Me</span>
                                </label>
                                <a href='#' className="text-[#F5F9FC] text-xs font-thin">Forgot Password</a>
                            </div>
                            <button className="w-[100%] bg-[#54F8A9] text-black px-3 py-2 rounded-md font-medium">Sign In</button>
                            <div className="mt-5 grid grid-cols-3 w-[100%] items-center mb-4">
                                <hr  />
                                <p className="w-fit text-[#F5F9FC] justify-self-center text-center text-[10px] font-thin mx-1">Or continue with</p>
                                <hr />
                            </div>
                            <button className="bg-inherit border border-[#494949] w-[100%] rounded-md p-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className="w-5 h-5"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg> <span className="text-[#F5F9FC] text-xs font-thin ml-2">Sign up with Google</span></button>
                        
                            <p className="text-[#F5F9FC] text-xs mt-5 pt-5 w-[100%] text-center border-t border-t-[#494949]">Already have an account? <NavLink to='/' className="text-[#54F8A9]">Sign in</NavLink></p>
                        </form>
                    </div>
                </div>  
            </div>
        </div>
    )
}