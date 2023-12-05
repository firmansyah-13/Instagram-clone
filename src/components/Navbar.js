function Navbar(){
    return (
      <>
      <nav className="w-full h-12 bg-black flex items-center">
        <div className="text-yellow-50 ml-4 mr-12 text-2xl font-leckerly">instagram</div>
        <input type="search" name="" id="" className="h-4/6 w-3/6 rounded-lg " placeholder="Search"/>
        <div className="notification"></div>
      </nav>
      </>
    )
  }

  export default Navbar;