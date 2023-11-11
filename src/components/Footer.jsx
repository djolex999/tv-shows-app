const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 h-[60px] text-white flex items-center justify-center mt-5 px-4">
      <p className="text-xs sm:text-sm md:text-base">
        &copy; {new Date().getFullYear()} TV Shows App - Copyright © 2023 Djordje Markovic - Front-end
        Recruitment Task. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
