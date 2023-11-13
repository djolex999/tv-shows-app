const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#2c3340' }} className="w-full h-[60px] text-white flex items-center justify-center mt-5 px-4">
      <p className="text-xs sm:text-sm md:text-base">
        {`Copyright © - ${currentYear} - TV Shows App `}
        Djordje Markovic - Front-end Recruitment Task. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
