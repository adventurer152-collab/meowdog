import { CategoryGrid } from './components/CategoryGrid.jsx';
import { DailyStars } from './components/DailyStars.jsx';
import { Deals } from './components/Deals.jsx';
import { Hero } from './components/Hero.jsx';
import { ParkEvents } from './components/ParkEvents.jsx';
import { SearchBar } from './components/SearchBar.jsx';
import { TabBar } from './components/TabBar.jsx';
import { categories, deals, dealsQuery, hero, parks, parksQuery, stars, tabs } from './data.js';

export default function App() {
  return (
    <div className="device">
      <div className="screen">
        <main>
          <Hero {...hero} />
          <SearchBar />
          <CategoryGrid items={categories} />
          <Deals deals={deals} query={dealsQuery} />
          <ParkEvents parks={parks} query={parksQuery} />
          <DailyStars stars={stars} />
        </main>
        <TabBar tabs={tabs} />
      </div>
    </div>
  );
}
