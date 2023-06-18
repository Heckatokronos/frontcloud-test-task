import { ICardProps } from "./types";

import styles from "./Card.module.scss";

export const Card: React.FC<ICardProps> = ({
  avatar,
  alt,
  fullName,
  github,
  image,
  resume,
  telegram,
}) => {
  return (
    <div className={styles.card}>
      <img className={styles.card__img} src={avatar} alt={alt} />
      <div>
        <h3 className={styles.card__h3}>{fullName}</h3>
        <ul className={styles.card__ul}>
          <li>
            {
              <a href={telegram}>
                <img src={image} alt={alt} />
                Telegram
              </a>
            }
          </li>
          <li>
            {
              <a href={github}>
                <img src={image} alt={alt} />
                GitHub
              </a>
            }
          </li>
          <li>
            {
              <a href={resume}>
                <img src={image} alt={alt} />
                Resume
              </a>
            }
          </li>
        </ul>
      </div>
    </div>
  );
};
