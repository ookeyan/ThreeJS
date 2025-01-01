import { Canvas } from '@react-three/fiber'
import Store from './components/Store';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Canvas>
        <Store/>
      </Canvas>
    </div>
  )
}

export default App
