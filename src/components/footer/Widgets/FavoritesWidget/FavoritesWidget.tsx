import Title from '../common/Title/Title';
import DefinitionsList from '../common/lists/DifinitionsList'

interface IProps {
  title: string,
  items: object
}
// выводит часто посещаемые страницы
export default function FavoritesWidget({ title, items } : IProps ) {
  return (
    <div className="Favorites-widget">
      <Title title={title} />
      <DefinitionsList items={items} />
    </div>
  );
}