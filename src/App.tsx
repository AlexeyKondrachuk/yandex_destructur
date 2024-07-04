
import News from './components/header/News/news';
import newsCategories from './data/newsCategories';
import newsNames from './data/newsNames';
import ExchangeRates from './components/header/ExchangeRates/ExchangeRates';
import currencyRates from './data/currencyRates';
import Ads from './components/header/Ads/Ads';
import Search from './components/body/search';
import searchСategories from './data/searchCategories';
import Image from './components/header/common/image/image';
import Widgets from './components/footer/Widgets/Widgets';
import WeatherWidget from './components/footer/Widgets/WeatherWidget/WeatherWidget';
import FavoritesWidget from './components/footer/Widgets/FavoritesWidget/FavoritesWidget';
import favoritePages from './data/favoritePages';
import GermanMapWidget from './components/footer/Widgets/GermanMapWidget/GermanMapWidget';
import germanMapItems from './data/germanMapitems';
import TVProgramWidget from './components/footer/Widgets/TVProgramWidget/TVProgramWidget';
import TVPrograms from './data/TVProgram';
import EtherWidget from './components/footer/Widgets/EtherWidget/EtherWidget';
import ether from './data/ether';

import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <div className="App-wrapper">
          <div className="App-header__main">
            <News newsCategories={newsCategories} newsNames={newsNames} />

            <ExchangeRates currencyRates={currencyRates} />
          </div>

          <Ads
            title="Работа над ошибками"
            description="Смотрите на Яндексе и запоминайте"
          >
            <Image
              containerClass="Ads__image-container"
              imgClass="Ads-image"
              src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-oboi-nadpis-shkola-6.jpg"
              alt="Plug"
            />
          </Ads>
        </div>
      </header>

      <div className="App-body">
        <div className="App-wrapper">

          <Search
            searchСategories={searchСategories}
            searchBarLabel="Яндекс"
            searchBtnName="Найти"
            searchAdvice="Найдётся всё. Например,"
            searchExample="фаза луны сегодня"
          />

          <Image
            containerClass="Banner"
            imgClass="Banner-image"
            src="https://gimn4-ustdzheguta-r91.gosweb.gosuslugi.ru/netcat_files/222/2902/3e2c4407_ab90_47b3_84a5_54d8ab57fc99.jpg"
            alt="Plug"
          />

        </div>
      </div>

      <footer className="App-footer">
        <div className="App-wrapper">

          <Widgets>
            <WeatherWidget
              title="Погода"
              averageTemperature="+17"
              morningTemperature="+17"
              daytimeTemperature="+20"
            />
            <GermanMapWidget
              title="Карта Германии"
              items={germanMapItems}
            />
            <EtherWidget
              title="Эфир"
              items={ether}
            />
            <FavoritesWidget
              title="Посещаемое"
              items={favoritePages}
            />
            <TVProgramWidget
              title="Телепрограмма"
              items={TVPrograms}
            />
          </Widgets>

        </div>
      </footer>
    </>
  );
}

export default App;
