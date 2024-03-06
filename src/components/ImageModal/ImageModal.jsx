import css from "./ImageModal.module.css";

export default function ImageModal({
  content: {
    likes,
    alt_description,
    urls: { regular, raw },
    breadcrumbs,
  },
}) {
  const tags = breadcrumbs.map((item) => item.slug).join(", ");
  return (
    <>
      <img className={css.img} src={regular} alt={alt_description} />
      <div className={css.info}>
        <p>Likes: {likes}</p>
        <p>Tags: {tags}</p>
        <a
          className={css.link}
          href={raw}
          download={`${alt_description}.jpg`}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </div>
    </>
  );
}