import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkbox from './Navbar/Checkbox';
import Navbar from './Navbar/Navbar';
import grid from './Navbar/grid';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element="Home" />
					<Route path="/services" element="Services" />
					<Route path="/about" element="About" />
					<Route path="/contact" element="Contact" />
				</Routes> 
				{/* <Checkbox /> */}
			 </Router>
			{/* <grid /> */}
		</div>
	);
}

export default App;
