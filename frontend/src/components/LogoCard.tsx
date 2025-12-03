interface LogoCardProps {
  img: string;
  text: string;
}

export default function LogoCard({ img, text }: LogoCardProps) {
  return (
    <div className="logo-container">
      <img src={img} className="logo" />
      <span className="tooltip-text">{text}</span>
    </div>
  );
}
