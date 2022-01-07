import React, { useState } from 'react';


const Navbar = () => {

    const [isClosed,setClosed] = useState(false);

    return (
        <div className="flex">
            {!isClosed && (
                <aside className='bg-white w-64 min-h-screen flex flex-col'>
                <div className='bg-white border-r border-b px-4 h-10 flex items-center'>
                    <span className='text-blue-50 py-2'>
                        Application
                    </span>
                </div>
                <div className='border-r flex-grow'>
                    <nav>
                        <ul>
                            <li className='p-3'>
                                <a href="">Home</a>
                            </li>
                            <li className='p-3'>
                                <a href="">Clientes</a>
                            </li>
                            <li className='p-3'>
                                <a href="">Proveedores</a>
                            </li>
                            <li className='p-3'>
                                <a href="">Configuración</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            )}
            
            <main className='flex-grow flex flex-col min-h-screen'>
                <header className="bg-white border-b h-10 flex items-center justify-center">
                    <button onClick={()=>setClosed(false)}>Open</button>
                    <button onClick={()=>setClosed(true)}>Closed</button>
                    <div className='flex flex-grow items-center justify-between px-3'>
                        <h1>Home</h1>
                        <button className='text-blue-700 underline'>
                            Log in
                        </button>
                    </div>
                </header>
            </main>

        </div>
    )
}

export default Navbar
