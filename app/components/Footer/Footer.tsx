export const Footer = () => {
  return (
    <footer className="h-32 maxlg:mb-10">
    <ul role="list" className={`menu-list flex flex-col lg:flex-row text-center justify-center gap-x-6 bg-transparent font-light text-2xl transition-all ease-in duration-300 w-full mx-auto`}>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#aboutme">About</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#myexperience">Experience</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#myprojects">Projects</a></li>
      <li className="cursor-pointer hover:scale-105 hover:underline underline-offset-2 hover:decoration-black lg:hover:decoration-fuchsia-50 transition-all duration-300"><a href="#contactme">Contact</a></li>
    </ul>
    </footer>
  )
}
