import { useEffect, useState } from "react";
import type { Reflection } from "../types/Reflection";

export const useReflections = () => {
  const [good, setGood] = useState("");
  const [goodList, setGoodList] = useState<Reflection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./storage/data.json");
      const jsonData = await res.json();
      setGoodList([jsonData]);
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

  return { good, goodList, handleChange, handleSubmit };
};
