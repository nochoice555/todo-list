import React, { Suspense, useContext } from 'react';
import { TodosContext } from '../store/todos-context';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import { Physics } from '@react-three/cannon';
import Flor from './Flor';

function BackGround(props) {
  const todoCtx = useContext(TodosContext);

  return (
    <div className="absolute h-screen w-screen">
      <Suspense fallback={null}>
        <Canvas>
          <Physics>
            <ambientLight intensity={0.1} />
            <pointLight position={[10, 10, 10]} />
            {todoCtx.boxIsAdded && <Box />}
            <Box />
            <Box position={[-2, 0, 2]} />
            <Box position={[1, -2, 0]} />
            <Box position={[1, -1, 0]} />
            <Box position={[1, 0, 0]} />
            <Box position={[1, 1, 0]} />
            <Box position={[1, 2, 0]} />
            <Box position={[-1, 1, 0]} />
            <Flor position={[0, -2, -2]} />
          </Physics>
        </Canvas>
      </Suspense>
    </div>
  );
}

export default BackGround;
