import React from 'react'

const Login = () => {
    return (
        <div class="h-screen bg-gray-100 flex justify-center">
        <div class="py-6 px-8 h-80 mt-20 w-96 bg-white rounded shadow-xl">
          <form action="">
            <div class="mb-6">
              <label for="name" class="block text-gray-800 font-bold">Usuario</label>
              <input type="text" name="name" id="name" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            </div>
    
            <div>
              <label for="email" class="block text-gray-800 font-bold">Contraseña</label>
              <input type="text" name="email" id="email" class="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600" />
            </div>
            <button class="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">Iniciar sesión</button>
          </form>
        </div>
      </div>
    )
}

export default Login
