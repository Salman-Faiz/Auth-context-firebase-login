

const Login = () => {
 const handleLoginSubmit = (e)=>{
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email, password)
 }
    return (
        <div className="  bg-green-200 py-28">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>

    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form onSubmit={handleLoginSubmit} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-2xl">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover font-medium text-xl text-red-700">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;