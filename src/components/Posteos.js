import React from "react";
import posteos from "./data.json";
import Post from "./Post";

export default function Posteos({ aumentar }) {
	return (
    <div className="container">
      
      {posteos.map(elemento =><Post key={elemento.id} posteo={elemento} aumentar={aumentar} />)}
		</div>
	);
}
