import { CardList } from "./CardList";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { plants } from "../data/db.js";
import { useState } from "react";

export const Main = () => {
	const [data, setData] = useState(plants)
  return (
		<>
			<Header />
			<main className="container-xl mt-5">
				<h2 className="text-center">Nuestra Colección</h2>
				<div className="row mt-5">
					<CardList data={data} />
				</div>
			</main>
			<Footer />
		</>
  );
}
