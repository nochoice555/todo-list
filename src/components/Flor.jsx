import React from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useLoader } from '@react-three/fiber';
import { usePlane } from '@react-three/cannon';

function Flor(props) {
  const [space] = useLoader(TextureLoader, ['space.jpg']);
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    ...props,
  }));
  return (
    <mesh ref={ref}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial displacementScale={1} map={space} />
    </mesh>
  );
}

export default Flor;
