import "./Card.scss";

interface ICardProps {
  avatar: string;
  alt: string;
  fullName: string;
  telegram: string;
  github: string;
  resume: string;
}

export const Card: React.FC<ICardProps> = ({
  avatar,
  alt,
  fullName,
  telegram,
  github,
  resume,
}) => {
  return (
    <div className="card">
      <img src={avatar} alt={alt} />
      <div>
        <h3>{fullName}</h3>
        <ul>
          <li>{<a href={telegram}>Telegram</a>}</li>
          <li>{<a href={github}>GitHub</a>}</li>
          <li>{<a href={resume}>Resume</a>}</li>
        </ul>
      </div>
    </div>
  );
};
