import React, { useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useBox } from '@react-three/cannon';

function Box(props) {
  const [ref] = useBox(() => ({ mass: 1, position: [0, 5, 0], ...props }));
  const [clicked, setClicked] = useState(false);
  const [pepe] = useLoader(TextureLoader, ['pepe.jpg']);

  return (
    <mesh
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={() => setClicked(!clicked)}
    >
      <boxGeometry />
      <meshStandardMaterial displacementScale={0.5} map={pepe} />
    </mesh>
  );
}

export default Box;
