import { ReflectionForm } from "./components/ReflectionForm";
import { GoodList } from "./components/GoodList";
import { useReflections } from "./hooks/useReflections";

function App() {
  const { good, goodList, handleChange, handleSubmit } = useReflections();

  return (
    <>
      <h1>ふりかえり</h1>
      <ReflectionForm
        value={good}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <h2>一覧</h2>
      <GoodList items={goodList} />
    </>
  );
}

export default App;
