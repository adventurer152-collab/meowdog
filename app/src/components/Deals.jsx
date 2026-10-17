import { Badge, Card, Icon } from '../ds';

function DealStatus({ deal }) {
  if (!deal) return <span className="deal__none">今日未找到<br />公開優惠</span>;
  if (deal.status === 'pending') return <Badge tone="lavender" solid>{deal.label}</Badge>;
  return <Badge tone="sakura" solid>{deal.label}</Badge>;
}

function DealCard({ store }) {
  return (
    <Card as="article" tone="white" padding="14px 16px">
      <div className="deal__head">
        <span className="deal__icon" style={{ background: store.iconBg }}>
          <Icon name={store.icon} size={24} />
        </span>
        <div className="deal__info">
          <span className="deal__name">{store.name}</span>
          <span className="deal__meta">
            {store.distance} · {store.hours}
          </span>
          <span className="deal__pet">
            <Icon name="paw-print" size={12} />
            {store.petRule}
          </span>
        </div>
        <DealStatus deal={store.deal} />
      </div>
      <div className="deal__offer">
        {store.deal && <span className="deal__perk">{store.deal.text}</span>}
        {store.items.length ? (
          <ul className="deal__items">
            {store.items.map((item) => (
              <li key={item.name}>
                <span className="deal__item">{item.name}</span>
                {(item.price || item.note) && (
                  <strong className="deal__price">
                    {item.note && `${item.note} `}
                    {item.price && `NT$ ${item.price}`}
                  </strong>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <span className="deal__item deal__item--muted">餐點與價格未查到</span>
        )}
        <a className="deal__source" href={store.source} target="_blank" rel="noreferrer">
          來源 <Icon name="arrow-square-out" size={12} />
        </a>
      </div>
    </Card>
  );
}

export function Deals({ deals, query }) {
  const withDeal = deals.filter((d) => d.deal && d.deal.status !== 'pending').length;
  return (
    <section className="deals" aria-labelledby="deals-title">
      <div className="section-head">
        <div className="section-head__title">
          <h2 id="deals-title">附近推薦</h2>
          <Badge tone="sakura" solid>
            今日優惠
          </Badge>
        </div>
        <a className="section-head__more" href="#deals">
          看全部 →
        </a>
      </div>
      <p className="deals__query">
        {query.center} · {query.date} · 半徑 {query.radius}
      </p>
      {deals.map((d) => (
        <DealCard key={d.id} store={d} />
      ))}
      <p className="deals__summary">
        今日共 {deals.length} 家，其中 {withDeal} 家查到今日有效的公開優惠。優惠與寵物規定以店家公告為準，出發前請先電洽。
      </p>
    </section>
  );
}
