import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useBox } from '@react-three/cannon';

function Box(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  const [pepe] = useLoader(TextureLoader, ['pepe.jpg']);

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial displacementScale={0.5} map={pepe} />
    </mesh>
  );
}

export default Box;
