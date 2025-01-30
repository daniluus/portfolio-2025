import Navbar2 from './Navbar2'

function Header() {
    return (
        <header className="flex items-center justify-between px-6 py-4">
                <div>
                    <h1 className="sans font-bold text-2xl">DANILO MELLO</h1>
                    <p className="text-sm">motion graphic & front end dev</p>
                </div>

                <Navbar2 />

            </header>
    )
}

export default Header