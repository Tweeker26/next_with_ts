import UIcon from 'components/UIcon'

import styles from './UImage.module.css'

interface UImageProps {
  id: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    thumb: string;
  };
  user: {
    profile_image: {
      large: string;
      medium: string;
      small: string;
    };
    username: string;
    links: {
      html: string;
    };
  };
  orientation: string;
  altDescription: string;
}

const UImage = ({ id, urls, orientation, altDescription, user }: UImageProps) => (
  <div
    key={`uimg_container_${id}`}
    className={
      orientation === 'vertical'
        ? styles.vertical
        : styles.horizontal
    }
  >
    <img className={styles.img} src={urls.small} alt={altDescription} />
    <div className={styles.actions}>
      <UIcon url={`/api/photo/download/${id}`} name="download" />
      <UIcon url={urls.full} name="open" />
    </div>
    <div className={styles.user}>
      <a
        href={user.links.html}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className={styles.user_img} src={user.profile_image.small} alt={user.username} />
        <span>{user.username}</span>
      </a>
    </div>
  </div>
)

export default UImage
