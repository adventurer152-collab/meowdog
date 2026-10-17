import { Icon, IconButton } from '../ds';
import { PetPhoto } from './PetPhoto.jsx';

export function Hero({ location, tagline, photo, photoPosition }) {
  return (
    <header className="hero">
      <PetPhoto src={photo} position={photoPosition} alt="武狀元" placeholder="拖放你的寵物照片（滿版）" />
      <div className="hero__top">
        <button type="button" className="hero__location">
          <Icon name="map-pin" size={14} />
          {location}
          <Icon name="caret-down" size={12} />
        </button>
        <IconButton icon="bell" label="通知" />
      </div>
      <h1 className="hero__tagline">
        {tagline.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </h1>
    </header>
  );
}
