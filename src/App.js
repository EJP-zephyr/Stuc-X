import './index.css';

function App() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-3/5">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#030303] dark:border-gray-700 flex flex-col">
          <div class="p-9 self-center space-y-4 md:space-y-6 sm:p-8 w-4/5">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-[#54F8A9] md:text-2xl dark:text-[#54F8A9] text-center">
                  STUC-X
              </h1>
              <h2 className='text-center text-[#F5F9FC] font-medium text-xl'>Sign in</h2>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-inherit dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required="" />
                  </div>
                  <div>
                      <input type="password" name="password" id="password" placeholder="Password" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-inherit dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                          </div>
                          <span class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </span>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-[#939393]">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-black focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#54F8A9]">Sign in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Don’t have an account yet? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default App;
