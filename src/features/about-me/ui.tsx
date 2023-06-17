import { Card } from "../../shared";
import { MyBio } from "./about-me";

export const AboutMe: React.FC = () => {
  return (
    <>
      {MyBio.map((bio) => (
        <Card
          avatar={bio.avatar}
          alt={bio.alt}
          fullName={bio.fullName}
          telegram={bio.telegram}
          github={bio.gitHub}
          resume={bio.resume}
        />
      ))}
    </>
  );
};
