"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import AnimeCard, { AnimeProp } from "./AnimeCard";
import { useInView } from "react-intersection-observer";
import { fetchAnima } from "@/app/actions";

function LoadMore({
  setData,
  data,
  page,
  setPage,
}: {
  setData: Function;
  data: JSX.Element[];
  page: number;
  setPage: Function;
}) {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      fetchAnima(page).then((res) => {
        setData([...data, ...res]);
        console.log(page);
      });
      setPage((prevPage: number) => prevPage + 1);
    }
  }, [inView]);

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
