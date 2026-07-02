import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Community from './pages/Community';
import Loading from './pages/Loading';
import MyGenerations from './pages/MyGenerations';
import Plans from './pages/Plans';
import Result from './pages/Result';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />


			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/generate' element={<Generator />} />
				<Route path='/community' element={<Community />} />
				<Route path='/loading' element={<Loading />} />
				<Route path='/my-generations' element={<MyGenerations />} />
				<Route path='/plans' element={<Plans />} />
				<Route path='/results/:projectId' element={<Result />} />

			</Routes>


			<Footer />
		</>
	);
}
export default App;