import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Cart = ({position}) =>{
  const {scene} = useGLTF('/models/shopping_cart/scene.gltf');  
  
  // Clone the scene for independent instances
  const clone = scene.clone();
  return <primitive object={clone} scale={[3, 3, 3]} position={position}/>;
}
export default Cart;