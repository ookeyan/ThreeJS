import { PresentationControls, Center, useTexture} from "@react-three/drei";
import { Suspense } from "react";
import * as THREE from "three";

function Floor() {
  const flo = useTexture({
    map: "/textures/floor/herringbone_parquet_diff_1k.jpg",
    displacementMap: "/textures/floor/herringbone_parquet_disp_1k.jpg",
    normalMap: "/textures/floor/herringbone_parquet_nor_gl_1k.jpg",
    roughnessMap: "/textures/floor/herringbone_parquet_rough_1k.jpg",
    aoMap: "/textures/floor/herringbone_parquet_arm_1k.jpg",
  });

  flo.map.repeat.set(9,9);
  flo.displacementMap.repeat.set(9,9);
  flo.normalMap.repeat.set(9,9);
  flo.roughnessMap.repeat.set(9,9);
  flo.aoMap.repeat.set(9,9);

  flo.map.wrapS = flo.map.wrapT = 
  flo.displacementMap.wrapS = flo.displacementMap.wrapT =
  flo.normalMap.wrapS = flo.normalMap.wrapT =
  flo.roughnessMap.wrapS = flo.roughnessMap.wrapT =
  flo.aoMap.wrapS = flo.aoMap.wrapT =
  THREE.RepeatWrapping;
  
  return(
    <mesh position={[0,0,0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50,50, 2 ,2]}/>
      <meshStandardMaterial {...flo}/>
    </mesh>
  )
}
const Shelf = () =>{
    return (
      <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />

      <PresentationControls speed={1.5} global zoom ={0.7} polar={[-0.1, Math.PI/2]}>
        <Center environment={"city"} intensity={0.6} contactShadow={false}>
          <mesh position={[0,3.75,0]}>
            <boxGeometry/>
            <meshNormalMaterial/>
          </mesh> 
        </Center>
        <Suspense fallback={null}>
          <Floor/>
        </Suspense>
      </PresentationControls>
      </> );
};
export default Shelf;