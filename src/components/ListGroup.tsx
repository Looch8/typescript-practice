import { useState } from "react";

function ListGroup() {
	let items = ["New York", "Chicago", "California", "Nebraska"];

	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		<>
			<h2>List</h2>
			{items.length === 0 && <p>No items found</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							console.log(selectedIndex);
						}}
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;
