import { categories } from '@/constants/categories';
import { Badge } from './Badge';
import { Icon } from './Icon';

const getStyle = (name: string) => {
  const category = categories.find(
    e => e.name.some(f => f === name),
  );
  return category?.style || {
    icon: 'i-lucide-hash',
  };
};

export const Tag = ({
  name,
}: {
  name: string;
}) => {
  const style = getStyle(name);

  return (
    <Badge variant={style.color ? 'none' : 'secondary'} size='sm' className={style.color}>
      <Icon className={style.icon} />
      {name}
    </Badge>
  );
};
