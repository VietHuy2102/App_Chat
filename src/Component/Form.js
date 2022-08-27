import React, {useState} from 'react'

export default function Form() {

   const [form, setForm] = useState({
       email:"",
       password:""
   })
    const [errors,setError] = useState({
        email:"",
        password:""
    })

    const handelLogin = (e) => {
        e.preventDefault()
        const {email,password} = form


        const errorsObj = {}
        if (email === ""){
            errorsObj.email = "Vui lòng nhập Email"
        }
        if (password === ""){
            errorsObj.password = "Vui lòng nhập Password"
        }
        setError(errorsObj)

        console.log(email)
        console.log(password)


    }
    const changeValue = (e) => {

        const data = {...form}
        data[e.target.name] = e.target.value
        setForm(data)
        console.log(data)
    }


    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <h1>Login Page</h1>
                    <form onSubmit={handelLogin}>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Email..."
                                   onChange={changeValue}/>
                            <span className="text-danger">{errors.email}</span>
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Password..."
                                   onChange={changeValue}/>
                            <span className="text-danger">{errors.password}</span>
                        </div>
                        <button className="btn btn-primary" type="submit">Login</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
