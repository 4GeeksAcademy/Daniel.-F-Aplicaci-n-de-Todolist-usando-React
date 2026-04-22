import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <>TodoForm</>
			<>TodoItem</>
			<>TodoList</>
		</div>
	);
};

export default Home;