import styles from './UIcon.module.css';

interface UIconProps {
  url: string;
  name: string;
}

const UIcon = ({ url, name }: UIconProps) => {
  return (
    <a className={styles.icon} href={url} target="_blank" rel="noopener noreferrer">
      <img className={styles.icon_svg} src={`/images/${name}.svg`} alt={`${name} icon`} />
    </a>
  );
};

export default UIcon;
