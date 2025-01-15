import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from "../About/About"
import PersonalProject from "../PersonalProjects/PersonalProjects"

function Home() {

    return (
        <div className='relative h-screen'>
            <header className="flex items-center justify-between px-6 py-4">
                <div>
                    <h1 className="sans font-bold text-2xl">DANILO MELLO</h1>
                    <p className="text-sm">motion graphic & front end dev</p>
                </div>


                <nav>
                    <ul className="flex gap-4">
                        <Router>
                        <li><Link to="/About">ABOUT</Link></li>
                        <li className="font-black"><Link to="/PersonalProject">PERSONAL PROJECTS</Link></li>
                        </Router>
                        <li>
                            <ul className="flex gap-4">
                                <li>Be</li>
                                <li>In</li>
                                <li>Ins</li>
                                <li>Fiv</li>
                                <li>GiT</li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </header>

            <main className="px-4 py-6">
                <Router>
                    <Routes>
                        <Route path="/About" element={<About />} />
                        <Route path="/PersonalProject" element={<PersonalProject />} />
                    </Routes>
                </Router>
            </main>

            <footer className='absolute bottom-0 w-screen text-center h-10'>
                &copy; Designed and Developed by Danilo<span className="font-bold">Mello</span>
            </footer>
        </div>
    )
}

export default Home