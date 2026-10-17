import { useState } from 'react';
import { Icon } from '../ds';

export function TabBar({ tabs }) {
  const [current, setCurrent] = useState(tabs[0].id);
  return (
    <nav className="tabbar" aria-label="主選單">
      {tabs.map((t) => {
        const on = t.id === current;
        return (
          <button key={t.id} type="button" className={`tabbar__item${on ? ' is-active' : ''}`} aria-current={on ? 'page' : undefined} onClick={() => setCurrent(t.id)}>
            <span className="tabbar__icon">
              <Icon name={t.icon} size={20} weight={on ? 'fill' : 'bold'} />
            </span>
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
