import React from 'react';
const Wall = () => {
    return (
        <mesh>
          <boxGeometry args={[10, 10, 0.1]} />
          <meshPhysicalMaterial
            transmission={1} // Make the material transparent
            opacity={0.5} // Control the opacity
            roughness={0} // Smooth surface
            metalness={0} // Non-metallic
            clearcoat={1} // Add a clear coat layer
            clearcoatRoughness={0} // Smooth clear coat
            />
        </mesh>
    );
};
export default Wall;