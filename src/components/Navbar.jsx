const Navbar = () => {
  return (
    <div className="  flex justify-between bg-black p-3 text-white">
      <div>
        <h1 className=" text-5xl text-left">VR-Mart</h1>
      </div>
      <div className=" text-2xl space-x-4 text-right  ">
        <a href="">Shop</a>
        <a href="">Cart</a>
        <a href="">Account</a>
      </div>
    </div>
  );
};

export default Navbar;
