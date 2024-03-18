import React from "react";

interface SmoothScrollLinkProps {
  targetId: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({
  targetId,
  children,
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      const targetOffset = rect.top + scrollTop - 96;
      const screenWidth = window.innerWidth;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    }

    // const targetElement = document.getElementById(targetId);
    // if (targetElement) {
    //   targetElement.scrollIntoView({
    //     behavior: "smooth",
    //     block: "nearest",
    //     inline: "start",
    //   });
    // }
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
