import type {NextPage} from "next";

import {useRouter} from "next/router";
import Link from "next/link";

const Store: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      Hello Store
      <br />
      <a href="/">Volver al inicio con anchor</a>
      <br />
      <Link href="/">Volver al inicio con Link</Link>
      <br />
      <button onClick={() => router.push("/")}>Volver al inicio con button</button>
    </div>
  );
};

export default Store;
