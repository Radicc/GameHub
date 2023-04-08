import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  order: string;
}

const SortSelector = ({ onSelectSortOrder, order }: Props) => {
  const sortOrders = [
    { value: "relevance", name: "Relevance" },
    { value: "popularity", name: "Popularity" },
    { value: "release-date", name: "Realease Date" },
    { value: "alphabetical", name: "Alphabetical " },
  ];

  const handleUpperCase = (data: string) => {
    const newData = data ? data.charAt(0).toUpperCase() + data.slice(1) : "";
    return newData || "Relevance";
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {handleUpperCase(order)}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
