import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, openModal }) {
    return (
        <ul className={css.gallery}>
            {items.map(({ id, ...otherItemProps }) => (
                <li className={css.galleryItem} key={id}>
                    <ImageCard item={{ id, ...otherItemProps }} openModal={openModal} />
                </li>
            ))}
        </ul>
    );
}