import css from './ImageCard.module.css';

export default function ImageCard({ item, onOpenModal }) {
    const { small, alt_description } = item.urls;

    return (
        <div onClick={() => onOpenModal(item)}>
            <img
                className={css.img}
                {...item.urls}
                src={small}
                alt={alt_description}
            />
        </div>
    );
}