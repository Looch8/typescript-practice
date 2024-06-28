import ListGroup from "./components/ListGroup";

function App() {
	let items = ["New York", "Chicago", "California", "Nebraska"];
	return (
		<div>
			<ListGroup heading="Cities" items={items} />
		</div>
	);
}

export default App;
