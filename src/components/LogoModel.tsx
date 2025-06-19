'use client'

import { useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'

function Model() {
    const { scene } = useGLTF('/models/hyperliquid-mesh-only.glb');

    const ref = useRef<THREE.Group>(null)

    useFrame(() => {
      if (ref.current) {
        ref.current.rotation.y += 0.01
      }
    })

    console.log('scene', scene);

    return <primitive ref={ref} object={scene} />;
}

export default function LogoModel() {
    return (
        <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Model />
        </Canvas>
    );
}