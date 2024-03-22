import { CardItem } from "./CardItem";

export const CardList = ({ data }) => {
	return (
    <>
			{data.map((item) => (
        <CardItem
        key={item.id}
        item={item}
				/>
        ))}
      </>
	);
};
