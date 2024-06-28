import { MouseEvent } from "react";

function ListGroup() {
	let items = ["New York", "Chicago", "California", "Nebraska"];

	const handleClick = (event: MouseEvent) => console.log(event);

	return (
		<>
			<h2>List</h2>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item) => (
					<li
						key={item}
						onClick={handleClick}
						className="list-group-item"
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
