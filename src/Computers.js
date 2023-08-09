import * as THREE from 'three'
import { useMemo, useContext, createContext, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Merged, useTexture, Image, RenderTexture, PerspectiveCamera, Text } from '@react-three/drei'
import { SpinningBox } from './SpinningBox'
THREE.ColorManagement.legacyMode = false

/*
The following was auto-generated by: npx gltfjsx computers.glb --transform --instance
By using the --instance flag it detects similar geometry and instances it, thereby minimizing draw-calls

Author: Rafael Rodrigues (https://sketchfab.com/RafaelBR873D)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/old-computers-7bb6e720499a467b8e0427451d180063
Title: Old Computers
*/

const context = createContext()
export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/computers_1-transformed.glb')
  const instances = useMemo(
    () => ({
      Object: nodes.Object_4,
      Object1: nodes.Object_16,
      Object3: nodes.Object_52,
      Object13: nodes.Object_172,
      Object14: nodes.Object_174,
      Object23: nodes.Object_22,
      Object24: nodes.Object_26,
      Object32: nodes.Object_178,
      Object36: nodes.Object_28,
      Object45: nodes.Object_206,
      Object46: nodes.Object_207,
      Object47: nodes.Object_215,
      Object48: nodes.Object_216,
      Sphere: nodes.Sphere
    }),
    [nodes]
  )
  return (
    <Merged castShadow receiveShadow meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  )
}

export function Computers(props) {
  const { nodes: n, materials: m } = useGLTF('/computers_1-transformed.glb')
  const instances = useContext(context)
  return (
    <group {...props} dispose={null}>
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-4.8, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-2.4, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[0, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[2.4, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[4.8, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[7.2, 7.4, -2.61]} scale={[1.5, 1.5, 1]} />

      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-4.8, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-2.4, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[0, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[2.4, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[4.8, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[7.2, 5.55, -2.61]} scale={[1.5, 1.5, 1]} />

      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-4.8, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-2.4, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[0, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[2.4, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[4.8, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[7.2, 3.7, -2.61]} scale={[1.5, 1.5, 1]} />

      <ScreenInteractive delay={0} frame="Object_206" panel="Object_216" position={[-4.8, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenInteractive small text=" WE         WE          fsssdf WE" delay={0} frame="Object_206" panel="Object_207" position={[-2.4, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenInteractive small text="BUY                     BUYY     BUY     l k" delay={2} frame="Object_206" panel="Object_207" position={[0, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenInteractive small text="YOUR   YOURRRr  YOUR" delay={3} frame="Object_206" panel="Object_207" position={[2.4, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenInteractive small text="RUGS" delay={4} frame="Object_206" panel="Object_216" position={[4.8, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenInteractive delay={5} frame="Object_206" panel="Object_216" position={[7.2, 1.85, -2.61]} scale={[1.5, 1.5, 1]} />

      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-4.8, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[-2.4, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[0, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[2.4, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[4.8, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <ScreenText invert frame="Object_212" panel="Object_216" x={-5} y={5} position={[7.2, 0, -2.61]} scale={[1.5, 1.5, 1]} />
      <Leds instances={instances} />
    </group>
  )
}

/* This component renders a monitor (taken out of the gltf model)
   It renders a custom scene into a texture and projects it onto monitors screen */
function Screen({ frame, panel, children, ...props }) {
  const { nodes, materials } = useGLTF('/computers_1-transformed.glb')

  return (
    <group {...props}>
      <mesh castShadow receiveShadow geometry={nodes[frame].geometry} material={materials.Texture} />
      <mesh geometry={nodes[panel].geometry}>
        <meshBasicMaterial toneMapped={false}>
          <RenderTexture width={512} height={512} attach="map" anisotropy={16}>
            {children}
          </RenderTexture>
        </meshBasicMaterial>
      </mesh>
    </group>
  )
}

/* Renders a monitor with some text */
function ScreenText({ invert, x = 0, y = 1.2, ...props }) {
  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 15]} />
      <color attach="background" args={[invert ? 'black' : '#35c19f']} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Image position={[0, 1.05, 0]} scale={[4, 2.5, 1]} url="/background.png" />
    </Screen>
  )
}

/* Renders a monitor with a spinning box */
function ScreenInteractive({ small = false, text, delay = 0, invert, x = 0, y = 0.6, ...props }) {
  const textRef = useRef()
  const rand = 10000

  // useFrame((state) => (textRef.current.position.x = x + Math.sin(rand + state.clock.elapsedTime / 4 + delay / 3.3) * 13))

  return (
    <Screen {...props}>
      <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 10]} />
      <color attach="background" args={['orange']} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.75} />
      <pointLight position={[-10, -10, -10]} />
      {/* <SpinningBox position={[-3.15, 0.75, 0]} scale={0.5} /> */}
      {/* <Text font="/rightgrotesk-spatialblack.otf" position={[-delay * 4, y, 0]} ref={textRef} fontSize={1} letterSpacing={-0.1} color={!invert ? 'black' : '#35c19f'} anchorX={"left"}>
        WE{'   '}BUY{'   '}YOUR{'   '}RUGS
      </Text> */}
      <Text
        font="/rightgrotesk-spatialblack.otf"
        position={[0, y, 0]}
        ref={textRef}
        fontSize={small ? 0.75 : 1}
        letterSpacing={-0.1}
        color={!invert ? 'black' : '#35c19f'}
        anchorX={'center'}>
        {text}
      </Text>
    </Screen>
  )
}

// Renders flashing LED's
function Leds({ instances }) {
  const ref = useRef()
  const { nodes } = useGLTF('/computers_1-transformed.glb')
  useMemo(() => {
    nodes.Sphere.material = new THREE.MeshBasicMaterial()
    nodes.Sphere.material.toneMapped = false
  }, [])
  useFrame((state) => {
    ref.current.children.forEach((instance) => {
      const rand = Math.abs(2 + instance.position.x)
      const t = Math.round((1 + Math.sin(rand * 10000 + state.clock.elapsedTime * rand)) / 2)
      instance.color.setRGB(0, t * 1.1, t)
    })
  })
  return (
    <group ref={ref}>
      <instances.Sphere position={[-4, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.6, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[0.8, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[3.2, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[5.6, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[8.0, 7.55, -2.3]} scale={0.01} color={[1, 2, 1]} />

      <instances.Sphere position={[-4, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.6, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[0.8, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[3.2, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[5.6, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[8.0, 5.7, -2.3]} scale={0.01} color={[1, 2, 1]} />

      <instances.Sphere position={[-4, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.6, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[0.8, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[3.2, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[5.6, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[8.0, 3.85, -2.3]} scale={0.01} color={[1, 2, 1]} />

      <instances.Sphere position={[-4, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.6, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[0.8, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[3.2, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[5.6, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[8.0, 2, -2.3]} scale={0.01} color={[1, 2, 1]} />

      <instances.Sphere position={[-4, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[-1.6, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[0.8, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[3.2, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[5.6, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
      <instances.Sphere position={[8.0, 0.15, -2.3]} scale={0.01} color={[1, 2, 1]} />
    </group>
  )
}
