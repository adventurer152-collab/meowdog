import { IconButton, Input } from '../ds';

export function SearchBar() {
  return (
    <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
      <Input icon="magnifying-glass" enterKeyHint="search" placeholder="今天想帶毛孩去哪？" aria-label="搜尋" style={{ flex: 1 }} />
      <IconButton icon="map-trifold" label="地圖找地點" variant="primary" />
    </form>
  );
}
