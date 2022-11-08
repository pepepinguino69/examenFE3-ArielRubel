
import { useState } from "react";

export default function Post({posteo, aumentar }) {
	const [likes, setLikes] = useState(posteo.likes);

	const likear = () => {
		setLikes(likes + 1);
		aumentar();
	};

	return (
		<div className='posteo'>
      <h3>{posteo.titulo}</h3>
			<p>{posteo.texto}</p>
			<h5>likes: {likes < 10 ? likes : <span>Mas de 10 likes</span>} </h5>
			<button onClick={likear}>Like
				
			</button>
		</div>
	)
}