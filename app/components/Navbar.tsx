import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-3 md:py-4">
        <div className="backdrop-blur-md bg-black/10 rounded-xl md:rounded-2xl shadow-lg border border-black/10 px-6 py-3 md:px-8 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo with subtle glow effect */}
            <div className="text-black text-lg md:text-xl font-semibold relative">
              Link-Post
              {/* Glow effect behind the logo */}
              <div className="absolute -inset-1 bg-white/70 blur-md rounded-full -z-10"></div>
            </div>

            {/* Navigation links with more spacing */}
            <div className="flex gap-6 md:gap-12">
              {" "}
              {/* Adjust gap here */}
              {["Home", "Your Profile", "Downloads", "Contact"].map((item) => (
                <Link key={item} href="#" className="relative group">
                  {/* Navigation link with hover effect */}
                  <span className="text-black/80 hover:text-black transition-all duration-300 relative z-10 text-sm md:text-base">
                    {item}
                  </span>

                  {/* Hover effect background */}
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/20 rounded-lg -z-0 transform scale-90 group-hover:scale-100 transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
