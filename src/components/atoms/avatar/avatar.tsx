import styles from "./avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
}

export default function Avatar({
  src,
  alt,
  size = 120
}: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={styles.avatar}
      style={{
        width: size,
        height: size
      }}
    />
  );
}