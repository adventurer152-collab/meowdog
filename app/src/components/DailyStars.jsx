import { useLayoutEffect, useRef, useState } from 'react';
import { Icon } from '../ds';
import { PetPhoto } from './PetPhoto.jsx';

function Polaroid({ star, index }) {
  const [liked, setLiked] = useState(star.liked);
  const likes = star.likes + (liked && !star.liked ? 1 : 0) - (!liked && star.liked ? 1 : 0);
  return (
    <figure className="polaroid" style={{ transform: `rotate(${star.tilt}deg)`, marginTop: star.offset }}>
      <div className="polaroid__photo">
        <PetPhoto src={star.photo} alt={star.caption} placeholder={`毛孩照片 ${index + 1}`} />
      </div>
      <figcaption>{star.caption}</figcaption>
      <button
        type="button"
        className={`polaroid__like${liked ? ' is-liked' : ''}`}
        aria-pressed={liked}
        aria-label={`按讚 ${star.caption}`}
        onClick={() => setLiked(!liked)}
      >
        <Icon name="heart" size={12} weight={liked ? 'fill' : 'bold'} />
        {likes}
      </button>
    </figure>
  );
}

export function DailyStars({ stars }) {
  const trackRef = useRef(null);
  const [stops, setStops] = useState([0]);
  const [active, setActive] = useState(0);

  // One dot per position the row can actually snap to. Near the end the last
  // cards can't reach the left edge, so their snap points collapse into one.
  useLayoutEffect(() => {
    const el = trackRef.current;
    const measure = () => {
      const first = el.children[0].offsetLeft;
      const max = el.scrollWidth - el.clientWidth;
      const next = [];
      for (const card of el.children) {
        const left = Math.min(card.offsetLeft - first, max);
        if (!next.length || left - next[next.length - 1] > 8) next.push(left);
      }
      setStops(next);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [stars.length]);

  const onScroll = () => {
    const x = trackRef.current.scrollLeft;
    let nearest = 0;
    stops.forEach((s, i) => {
      if (Math.abs(s - x) < Math.abs(stops[nearest] - x)) nearest = i;
    });
    setActive(nearest);
  };

  const goTo = (i) => trackRef.current.scrollTo({ left: stops[i], behavior: 'smooth' });

  return (
    <section className="stars" aria-labelledby="stars-title">
      <div className="section-head section-head--padded">
        <div className="section-head__title">
          <h2 id="stars-title" className="stars__title">
            每日我最靚
          </h2>
          <span className="stars__hint">往左滑看更多 →</span>
        </div>
        <a className="section-head__more" href="#submit">
          投稿 →
        </a>
      </div>
      <div className="stars__track" ref={trackRef} onScroll={onScroll}>
        {stars.map((s, i) => (
          <Polaroid key={s.id} star={s} index={i} />
        ))}
      </div>
      {stops.length > 1 && (
      <div className="stars__dots" role="tablist" aria-label="每日我最靚">
        {stops.map((stop, i) => (
          <button
            key={stop}
            type="button"
            role="tab"
            aria-selected={i === Math.min(active, stops.length - 1)}
            aria-label={`第 ${i + 1} 頁`}
            className={i === Math.min(active, stops.length - 1) ? 'is-active' : ''}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
      )}
    </section>
  );
}
