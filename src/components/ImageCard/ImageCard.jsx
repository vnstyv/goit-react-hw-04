import css from './ImageCard.module.css';

export default function ImageCard({ item, openModal }) {
    const { small: imageUrl, alt_description: altDescription } = item.urls;

    return (
        <div onClick={() => openModal(item)}>
            <img
                className={css.img}
                {...item.urls}
                src={imageUrl}
                alt={altDescription}
            />
        </div>
    );
}