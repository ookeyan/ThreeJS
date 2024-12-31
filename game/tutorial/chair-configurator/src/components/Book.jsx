import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Book =(props)=> {
  const { nodes, materials } = useGLTF('/models/book/book.gltf')
  const stylized = useTexture({
    map: '/texture/stylized_book/Stylized_Book_001_basecolor.jpg',
    normalMap: '/texture/stylized_book/Stylized_Book_001_normal.png',
    roughnessMap: '/texture/stylized_book/Stylized_Book_001_roughness.jpg',
    metallicMap: '/texture/stylized_book/Stylized_Book_001_metallic.jpg',
  })

  const leather = useTexture({
    map: '/texture/leather/Leather_004_COLOR.png',
    displacementMap: '/texture/leather/Leather_004_DISP.png',
    normalMap: '/texture/leather/Leather_004_NRM.png',
    aoMap: '/texture/leather/Leather_004_OCC.png',
  })

  const ThinSheet = (props) => {
    const texture = useTexture('/texture/stylized_book/madina.png')
  
    return (
      <mesh {...props}>
        <planeGeometry args={[0.71, 1, 1]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    )
  }


  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={4}>
        <mesh geometry={nodes.Architexture_0.geometry} material={materials.Architexture}>
            <meshStandardMaterial{...stylized}/>
        </mesh> 
        <ThinSheet position={[0.41, 0, 0.002]} />
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
