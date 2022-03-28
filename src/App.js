import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list";
import SearchBox from "./components/search-box/search-box";

import "./App.css";

const App = () => {
	const [heroes, setHeroes] = useState([]);
	const [searchField, setSearchField] = useState("");
	const [filteredHeroes, setFilteredHeroes] = useState([]);

	useEffect(() => {
		fetch("http://hp-api.herokuapp.com/api/characters")
			.then(response => response.json())
			.then(heroes => setHeroes(heroes));
	});

	useEffect(() => {
		setFilteredHeroes(
			heroes.filter(hero => {
				return hero.name.toLowerCase().includes(searchField);
			}),
		);
	}, [heroes, searchField]);

	const onSearchChange = event => {
		const searchField = event.target.value.toLowerCase();

		setSearchField(searchField);
	};

	return (
		<div className="App">
			<h1 className="app-title">Harry Potter Heroes</h1>
			<SearchBox onChange={onSearchChange} placeholder="search heroes" />
			<CardList heroes={filteredHeroes} />
		</div>
	);
};

export default App;
