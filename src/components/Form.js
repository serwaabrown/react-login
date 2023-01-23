


const Form = () => {
  
  return (
    <form action="" className="form">
      <div>
        <legend>
          <h1 className="form-title">SIGN UP</h1>
        </legend>
        <div className="input">
          <label className="input-title">Email</label>
          <input className="input-style" type="email" placeholder="Enter Your Email" />
        </div>
        <div className="input">
          <label className="input-title">Password</label>
          <input className="input-style" type="password" placeholder="Enter Your Password" />
        </div>
        <div className="input">
          <input className="input-style btn-primary" type="submit" label="Sign Up" />
        </div>
      </div>
    </form>
  )
}

export default Form;