import Title from '../common/Title/Title';
import List from '../common/lists/List'

interface IProps {
  title: string,
  items: object
}
// выводит список разделов виджета "Карта Германии"
export default function GermanMapWidget({ title, items } : IProps) {
  return (
    <div className="German-map-widget">
      <Title title={title} />
      <List items={items} />
    </div>
  );
}