"use client";
import { JSX, useEffect, useState } from "react";
import LoadMore from "../components/LoadMore";
import { fetchAnima } from "./actions";
import { AnimeProp } from "@/components/AnimeCard";
import AnimeCard from "@/components/AnimeCard";

type AnimeCardProp = JSX.Element;

function Home() {
  const [data, setData] = useState<JSX.Element[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (data.length === 0) {
      fetchAnima(page).then((res) => {
        setData([...data, ...res]);
      });
    }
  }, []);
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data}
      </section>
      <LoadMore setData={setData} data={data} page={page} setPage={setPage} />
    </main>
  );
}

export default Home;
