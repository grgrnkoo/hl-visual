'use client'

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function LogoModel() {
    const { scene } = useGLTF("/models/hyperliquid-mesh-only2.glb");
    console.log('scene', scene);

    return (
        <div>
            <h1>LogoModel</h1>
        </div>
    );
}