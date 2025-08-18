import { useEffect, useState } from "react";
import type { Reflection } from "../types/Reflection";

export const useReflections = () => {
  const [good, setGood] = useState("");
  const [goodList, setGoodList] = useState<Reflection[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./storage/data.json");
      const jsonData = await res.json();
      setGoodList(jsonData);
    };

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = new Date();
    const newReflection: Reflection = {
      good: good.trim(),
      date: now.toLocaleDateString("ja-JP", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }),
    };

    const updatedGoodList = [...goodList, newReflection];

    try {
      const response = await fetch("./storage/data.json", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedGoodList, null, 2),
      });

      if (response.ok) {
        setGoodList(updatedGoodList);
        setGood("");
      }
    } catch (error) {
      console.error("Failed to save reflection:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setGood(e.target.value);
  };

  return { good, goodList, handleChange, handleSubmit };
};
