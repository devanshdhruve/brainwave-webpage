import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  // Construct button class names based on props
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  const spanClasses = "relative z-10";

  // Render button if there's no href
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  // Render anchor (link) if href is provided
  const renderLink = () => (
    <a href={href} className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Return either the link or button based on the presence of `href`
  return href ? renderLink() : renderButton();
};

export default Button;
