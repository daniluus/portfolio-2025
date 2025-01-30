import { Outlet } from "react-router-dom"
import Header from '../../components/Header'

function Home() {

    return (
        <div className='relative h-screen'>
            
            <Header />

            <main className="px-4 py-6">
                <Outlet />
            </main>

            <footer className='lg:bottom-0 w-screen text-center h-10'>
                &copy; Designed and Developed by Danilo<span className="font-bold">Mello</span>
            </footer>
        </div>
    )
}

export default Home