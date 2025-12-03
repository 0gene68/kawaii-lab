import { useNavigate } from "react-router-dom";

interface LogoCardProps {
  img: string;
  url: string;
  text: string;
}

export default function LogoCard({ img, url, text }: LogoCardProps) {
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate(url);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="logo-container">
        <img src={img} className="logo" />
        <span className="tooltip-text">{text}</span>
      </div>
    </div>
  );
}
