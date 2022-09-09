import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import errorHandeler from "../CoustomeHooks/errorHook";
import Loading from "../Loading/Loading";
import { postCreateUser } from "../Redux/Slice/CreateUserSlice";
import { useAppDispatch, useAppSelector } from "../Redux/TypeHook/HeaderTypeHook";


 


const LoginModel = () => {

  const dispatch = useAppDispatch()
  
  const {message, isLoading, error}=useAppSelector((state)=>state.users)
  

  const [account, setAccount] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

// It work when use click login button
  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  console.log(email, password);

  }

  // It work when use click singup button
  const singup = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // check password and retype password is same
    if (password ===retypePassword) {
      // create a user

      const user = {
        firstName,
        lastName,
        email,
        password
      }
// dispatch function
      dispatch(postCreateUser({user}))

    }
    if (message?.acknowledged) {
     toast("User add successfully.")
   }
    
  }


  
 if (isLoading) {
    return <Loading />;
  }

  if (error) {
    errorHandeler(error);
  }


  return (
    <div>
      {
        account=== false ?
          <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
                <label
                  onClick={()=>setAccount(false)}
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
              <h1 className="text-3xl font-semibold text-center text-purple-700">
                Login
              </h1>
              <form onSubmit={login} className="mt-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-800"
                  >
                    Email
                  </label>
                        <input
                          name="email"
                          onChange={(e)=>setEmail(e.target.value)}
                          required
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm text-gray-800"
                    >
                      Password
                    </label>
                          <input
                            name="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            required
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <a href="#" className="text-xs text-gray-600 hover:underline">
                    Forget Password?
                  </a>
                  <div className="mt-6">
                    <input type="submit" value="Login" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"/>
                     
                  </div>
                </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
                Don't have an account?{" "}
                      <button
                        onClick={()=>setAccount(true)}
                  className="font-medium link text-purple-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
          </div>
          :
          <div>
      <input type="checkbox" id="my-modal-1" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
                <label
                  onClick={()=>setAccount(false)}
            htmlFor="my-modal-1"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white border-t-4 border-purple-600 rounded-md shadow-md border-top lg:max-w-md">
              <h1 className="text-3xl font-semibold text-center text-purple-700">
                Sing Up
              </h1>
                    <form onSubmit={singup} className="mt-6">

                      <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm text-gray-800"
                  >
                    First Name
                  </label>
                        <input
                          required
                          onChange={(e)=>setFirstName(e.target.value)}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                      </div>
                      
                      <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm text-gray-800"
                  >
                    Last Name
                  </label>
                        <input
                          required
                          onChange={(e)=>setLastName(e.target.value)}
                    type="text"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>


                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-gray-800"
                  >
                    Email
                  </label>
                        <input
                          required
                          onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                      </div>
                      
                      <div>
                    <label
                      htmlFor="password"
                      className="block text-sm text-gray-800"
                    >
                      Password
                    </label>
                          <input
                          required
                          onChange={(e)=>setPassword(e.target.value)}
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                <div className="mt-4">
                  <div>
                    <label
                      htmlFor="retypePassword"
                      className="block text-sm text-gray-800"
                    >
                      Retype Password
                    </label>
                          <input
                            required
                            onChange={(e)=>setRetypePassword(e.target.value)}
                      type="password"
                      className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  
                  
                  <div className="mt-6">
                    <input type="submit" value="SingUp" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"/>
                     
                  </div>
                </div>
              </form>
              <p className="mt-8 text-xs font-light text-center text-gray-700">
                {" "}
               Are you alrady a user?{" "}
                      <button
                        onClick={()=>setAccount(false)}
                  className="font-medium link text-purple-600 hover:underline"
                >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      }
    </div>
  );
};

export default LoginModel;
