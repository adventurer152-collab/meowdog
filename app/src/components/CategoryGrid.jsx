import { Icon } from '../ds';

export function CategoryGrid({ items }) {
  return (
    <nav className="categories" aria-label="分類瀏覽">
      {items.map((c) => (
        <button key={c.id} type="button" className="categories__item">
          <span className="categories__icon" style={{ background: c.bg }}>
            <Icon name={c.icon} size={26} />
          </span>
          {c.label}
        </button>
      ))}
    </nav>
  );
}
