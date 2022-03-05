import type {NextPage} from "next";

import {useState, useEffect} from "react";

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

  return <div>Hello Stores</div>;
};

export default Home;
