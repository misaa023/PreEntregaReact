import { Item } from './Item';

export const ItemList = ({ items }) => {
    return (
        <div className="flex items-center gap-5 justify-around">
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
