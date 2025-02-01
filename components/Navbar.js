import * as React from "react";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(!scrolled);
      }
    };

    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // clean up the event handler when the component unmounts
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <div
        data-active={scrolled}
        className="sticky right-0 left-0 top-0 z-10 flex flex-col items-center backdrop-blur-sm h-16 opacity-95"
      ></div>
    </>
  );
}

export default Navbar;
