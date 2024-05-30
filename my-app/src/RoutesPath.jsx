import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Appartment from './pages/Appartement'
import Error from './pages/Error'

function RoutesPath(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appartment/:id" element={<Appartment />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default RoutesPath