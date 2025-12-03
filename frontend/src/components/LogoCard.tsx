interface LogoCardProps {
  img: string;
  url: string;
  text: string;
}

export default function LogoCard({ img, url, text }: LogoCardProps) {
  return (
    <a href={url}>
      <div className="logo-container">
        <img src={img} className="logo" />
        <span className="tooltip-text">{text}</span>
      </div>
    </a>
  );
}
