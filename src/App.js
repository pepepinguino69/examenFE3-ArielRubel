import React from 'react'
import { useState } from "react";
import Posteos from "./components/Posteos.js"
import Estatus from "./components/Estatus.js";

function App() {
  const [total, setTotal] = useState(0);
  const aumentar = () => {
		setTotal(total + 1);
		// setTotal((actual) => actual + 1)
	};
  return (
		<div className="App">
      <Estatus total={total} />
			<Posteos aumentar={aumentar} />
		</div>
	);
}

export default App;
