import { useState } from "react";

const Form = () => {

//User state is defined
    const [user, setUser] = useState({
        fname:"",
        lname:"",
        email:"",
        password:"",
        reEnterPass:"",
    })

//Value will be updated everytime when user input data
    const handleChange = e => {
        const { name , value } = e.target
        setUser({
            ...user,
            [name]:value
        })
    }


//When user click on button this function will execute
const register = () => {
    const {fname, lname, email, password, reEnterPass} = user
    if (fname && lname && email && password && (password === reEnterPass)){
        alert("Successful");
        //We can execute an API here 
    }else {
        alert("Invaild");
        //Error
    }
}
  return (
    <div>
        <div className='flex flex-col items-center'>
        <h1 className="flex mt-8 text-6xl text-slate-500 font-extrabold cursor-pointer">Social<span className="text-yellow-500">nest</span></h1>
        <h1 className="text-2xl text-white font-bold">Create new account</h1>
        <form className='flex flex-col items-center mt-5 gap-5'>
        <input type="fname" name="fname" placeholder='First Name' value={user.fname} onChange={handleChange} className="bg-white border h-12 w-96"></input>
        <input type="lname" name="lname" placeholder='Last Name' value={user.lname} onChange={handleChange} className="bg-white border h-12 w-96"></input>
        <input type="email" name="email" placeholder='Email' value={user.email} onChange={handleChange} className="bg-white border h-12 w-96"></input>
        <input type="password" name="password" placeholder='Password' value={user.password} onChange={handleChange} className="bg-white border h-12 w-96"></input>
        <input type="password" name="reEnterPass" placeholder='Re-enter Password' value={user.reEnterPass} onChange={handleChange} className="bg-white border h-12 w-96"></input>
        <button onClick={register} className="border animate-bounce rounded-lg px-20 py-5 mt-10 text-white font-bold hover:bg-yellow-500">Create an account →</button>
        </form>
        </div>
    </div>
  )
}

//Created By Akshay Bhasin

export default Form