import type { Reflection } from "../types/Reflection";

export const GoodList = ({ items }: { items: Reflection[] }) => {
  return (
    <section>
      {items.map((item) => (
        <div>
          <p>{item.good}</p>
          <p>{item.date.toString()}</p>
        </div>
      ))}
    </section>
  );
};
