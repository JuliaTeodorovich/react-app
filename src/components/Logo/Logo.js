import "./Logo.css";

const Logo = ({ src, className }) => {
  return (
    <div className={`logo ${className}`}>
      <img src={src} alt="Logo" />
    </div>
  );
};

export default Logo;
