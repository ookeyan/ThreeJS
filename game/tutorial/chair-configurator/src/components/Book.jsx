import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'

const Book =(props)=> {
  const { nodes, materials } = useGLTF('/models/book/book.gltf')
  const stylized = useTexture({
    map: '/texture/stylized_book/Stylized_Book_001_basecolor.jpg',
    normalMap: '/texture/stylized_book/Stylized_Book_001_normal.png',
    roughnessMap: '/texture/stylized_book/Stylized_Book_001_roughness.jpg',
    metallicMap: '/texture/stylized_book/Stylized_Book_001_metallic.jpg',
  })

  const leather = useTexture({
    map: '/texture/stylized_book/Stylized_Book_001_basecolor.jpg',
    normalMap: '/texture/brown/brown_leather_nor_gl_1k.jpg',
    roughnessMap: '/texture/brown/brown_leather_rough_1k.jpg',
    displacementMap: '/texture/brown/brown_leather_disp_1k.jpg',
    aoMap: '/texture/brown/brown_leather_ao_1k.jpg',
  })


  stylized.map.repeat.set(2, 2);
  stylized.normalMap.repeat.set(2, 2);
  stylized.roughnessMap.repeat.set(2, 2);
  stylized.metallicMap.repeat.set(2, 2);

  stylized.map.wrapS = stylized.map.wrapT = 
  stylized.roughnessMap.wrapS = stylized.roughnessMap.wrapT = 
  stylized.normalMap.wrapS = stylized.normalMap.wrapT = 
  stylized.metallicMap.wrapS = stylized.metallicMap.wrapT = 
    THREE.RepeatWrapping;

  const ThinSheet = (props) => {
    const texture = useTexture('/texture/stylized_book/madina.png') 
    return (
      <mesh {...props}>
        <planeGeometry args={[0.71, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };

  const bBlock = (props) => {
    const texture = useTexture(leather)
    return (
      <mesh {...props}>
        <boxGeometry args={[0.1, 0.1, 0.1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    );
  };


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={3}>
        <mesh geometry={nodes.Architexture_0.geometry} material={materials.Architexture}>
            <meshStandardMaterial{...leather}/>
        </mesh> 
        <ThinSheet position={[0.41, 0, 0.002]} />
        {/* <bBlock position={[0.41, 0, 0.002]} /> */}
        <mesh 
          geometry={nodes.Architexture_1.geometry} 
          material={materials.Bookpage}>
        </mesh> 
      </group>
    </group>
  )
}

useGLTF.preload('/book.gltf')
export default Book;
