import { Card } from "../../shared";
import { MyBio } from "./about-me";

export const AboutMe: React.FC = () => {
  return (
    <header>
      {MyBio.map((bio) => (
        <Card
          avatar={bio.avatar}
          alt={bio.alt}
          fullName={bio.fullName}
          image={bio.icon}
          telegram={bio.telegram}
          github={bio.gitHub}
          resume={bio.resume}
        />
      ))}
    </header>
  );
};
