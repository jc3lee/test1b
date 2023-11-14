"use client";

import { useEffect, useState } from "react";
import useSWR from "swr";

export default function ApiExample() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, isLoading, error } = useSWR("api/hello", fetcher);
  // const [data, setData] = useState();
  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("/api/hello");
  //     const resJson = await res.json();
  //     setData(resJson);
  //   })();
  // }, []);
  console.log("data", data);
  console.log("isLoading", isLoading);
  console.log("error", error);
  return (
    <div className="flex flex-col content-center w-full">
      <h1 className=" text-center text-4xl mt-8">Dashboard</h1>
      {!data && !isLoading && <p className=" text-center mt-4">Please login</p>}
      {data && (
        <p className=" text-center mt-4">{JSON.stringify(data, null, 2)}</p>
      )}
    </div>
  );
}
