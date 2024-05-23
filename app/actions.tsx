"use server";

import { AnimeProp } from "@/components/AnimeCard";
import AnimeCard from "@/components/AnimeCard";
import page from "./page";
import { copyFileSync } from "fs";

export async function fetchAnima(page: number) {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );
  const data: AnimeProp[] = await response.json();
  const value = data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));

  return value;
}
