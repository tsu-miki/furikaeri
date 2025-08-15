import { useState } from "react";
import { ReflectionForm } from "./components/ReflectionForm";

function App() {
  const [good, setGood] = useState("");

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
    </>
  );
}

export default App;
