import { Canvas } from '@react-three/fiber'
import Shelf from './components/Shelf';
import './App.css'

function App() {

  return (
    <div className='App'>
      <Canvas>
        <Shelf/>
      </Canvas>
    </div>
  )
}

export default App
