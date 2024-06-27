function ListGroup() {
	const items = ["New York", "Chicago", "California", "Nebraska"];

	return (
		<>
			<h2>List</h2>
			<ul className="list-group">
				{items.map((item) => (
					<li key={item} className="list-group-item">
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
