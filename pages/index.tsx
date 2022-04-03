import type {NextPage} from "next";

import Link from "next/link";
import {useState, useEffect} from "react";

import StoreCard from "../components/StoreCard";
import {Store} from "../types";

const Home: NextPage = () => {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    fetch("/api/stores")
      .then((res) => res.json())
      .then((stores: Store[]) => setStores(stores));
  }, []);

  if (!stores.length) {
    return <span>cargando...</span>;
  }

  return (
    <main style={{display: "flex", flexDirection: "column", gap: 12}}>
      {stores.map((store) => (
        // eslint-disable-next-line @next/next/link-passhref
        <Link key={store.id} href={`/${store.id}`}>
          <a>
            <StoreCard key={store.id} store={store} />
          </a>
        </Link>
      ))}
    </main>
  );
};

export default Home;
