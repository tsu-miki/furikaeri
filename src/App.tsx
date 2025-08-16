import { useEffect, useState } from "react";
import { ReflectionForm } from "./components/ReflectionForm";
import type { Reflection } from "./types/Reflection";

function App() {
  const [good, setGood] = useState("");
  const [goodList, setGoodList] = useState<Reflection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./storage/data.json");
      const jsonData = await res.json();
      setGoodList([jsonData, ...goodList]);
    };

    fetchData();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(good);
    setGood("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGood(e.target.value);
  };

  return (
    <>
      <h1>ふりかえり</h1>
      <ReflectionForm
        value={good}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h2>一覧</h2>
      <section>
        {goodList.map((item) => (
          <div>
            <p>{item.good}</p>
            <p>{item.date.toString()}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
