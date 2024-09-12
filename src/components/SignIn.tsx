const Signin = () => (
    <div className=" flex items-center justify-center w-full">
      <form className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Signin</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input type="email" className="w-full border px-3 py-2 rounded" placeholder="Enter email" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input type="password" className="w-full border px-3 py-2 rounded" placeholder="Enter password" />
        </div>
        <button className="w-full bg-green-500 text-white py-2 rounded">Signin</button>
      </form>
    </div>
  );
  
  export default Signin;
  