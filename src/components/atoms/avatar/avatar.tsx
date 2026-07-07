import styles from "./avatar.module.css";

interface AvatarProps {
  src: string;
  alt: string;
  size?: string;
}

export default function Avatar({
  src,
  alt,
  size = "7.5rem"
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