import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, onOpenModal }) {
    return (
        <ul className={css.gallery}>
            {items.map(({ id, ...otherItemProps }) => (
                <li className={css.galleryItem} key={id}>
                    <ImageCard item={{ id, ...otherItemProps }} onOpenModal={onOpenModal} />
                </li>
            ))}
        </ul>
    );
}