import { Column } from "./_components/column";
import { Item } from "./_components/item";

const DragAndDropPage = () => {
  return (
    <div className="flex gap-4">
      <Column>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </Column>
      <Column>
        <Item>Item 4</Item>
        <Item>Item 5</Item>
        <Item>Item 6</Item>
      </Column>
    </div>
  );
};

export default DragAndDropPage;
