import { Badge, Card, Icon } from '../ds';

function ParkCard({ park }) {
  return (
    <Card as="article" tone={park.events.length ? 'matcha' : 'white'} padding="14px 16px">
      <div className="park__head">
        <span className="park__icon">
          <Icon name="tree" size={22} />
        </span>
        <div className="deal__info">
          <span className="deal__name">{park.name}</span>
          <span className="deal__meta">{park.distance}</span>
          <span className="deal__pet">
            <Icon name="paw-print" size={12} />
            {park.petRule}
          </span>
        </div>
      </div>
      <div className="deal__offer">
        {park.events.length ? (
          <ul className="park__events">
            {park.events.map((e) => (
              <li key={e.title}>
                <span className="park__time">{e.time}</span>
                <div className="park__event">
                  <span className="park__title">
                    {e.pet && <Icon name="paw-print" size={14} weight="fill" />}
                    {e.title}
                    <Badge tone={e.pet ? 'sakura' : 'honey'}>{e.price}</Badge>
                  </span>
                  <span className="park__detail">{e.detail}</span>
                  {e.note && <span className="park__note">※ {e.note}</span>}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <span className="deal__item deal__item--muted">今日未找到公開活動</span>
        )}
        {park.pending.map((p) => (
          <span key={p} className="park__pending">
            <Badge tone="lavender">日期待確認</Badge>
            {p}
          </span>
        ))}
        <a className="deal__source" href={park.source} target="_blank" rel="noreferrer">
          來源 <Icon name="arrow-square-out" size={12} />
        </a>
      </div>
    </Card>
  );
}

export function ParkEvents({ parks, query }) {
  const withEvents = parks.filter((p) => p.events.length).length;
  return (
    <section className="deals" aria-labelledby="parks-title">
      <div className="section-head">
        <div className="section-head__title">
          <h2 id="parks-title">今日公園活動</h2>
          <Badge tone="matcha" solid>
            {withEvents} 處有活動
          </Badge>
        </div>
      </div>
      <p className="deals__query">
        {query.center} · {query.date} · 半徑 {query.radius}
      </p>
      {parks.map((p) => (
        <ParkCard key={p.id} park={p} />
      ))}
      <p className="deals__summary">
        今天 {parks.length} 處公園中有 {withEvents} 處查到活動。戶外活動可能因天候調整，出發前請看主辦單位公告。
      </p>
    </section>
  );
}
