import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGeometry = () => {
    const meshRef = useRef();
    const vec = new THREE.Vector3();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
            // smooth mouse interaction
            vec.set((state.mouse.x * 2), (state.mouse.y * 2), 0);
            meshRef.current.position.lerp(vec, 0.1);
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
            <MeshDistortMaterial
                color="#888888"
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0}
                metalness={1}
                wireframe={true}
            />
        </Sphere>
    );
};

const HeroScene = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 mix-blend-difference pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[2, 2, 2]} intensity={2} />
                <AnimatedGeometry />
            </Canvas>
        </div>
    );
};

export default HeroScene;
