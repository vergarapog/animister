import React from "react";
import Animation from "./Animation";

import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

const PrimaryArea = () => {
  const [items, setItems] = React.useState(getItems);
  return (
    <main className={`h-full py-2`}>
      <section>
        <ScrollMenu>
          <div
            className={`flex space-x-4 overflow-x-scroll p-2 scrollbar-hide`}
          >
            {items.map(({ id }) => (
              <Animation
                itemId={id} // NOTE: itemId is required for track items
              />
            ))}
          </div>
        </ScrollMenu>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default PrimaryArea;
