import useSpline from '@splinetool/r3f-spline'

export default function Forest({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/aoYZfxZTGP3lIG1O/scene.splinecode')

  return (
    <>
      <color args={['#fbf1d6']} attach="background" />
      <group {...props} dispose={null} position={[0, -2, 0]} scale={0.02}>
        <directionalLight
          castShadow
          color="#f2f0eb"
          intensity={0.7}
          name="Directional Light"
          position={[-933.05, 2013.36, 1463.42]}
          scale={1}
          shadow-camera-bottom={-5000}
          shadow-camera-far={100000}
          shadow-camera-left={-5000}
          shadow-camera-near={-10000}
          shadow-camera-right={5000}
          shadow-camera-top={5000}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ground.geometry}
          material={materials.Ground}
          name="ground"
          position={[0, 0, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1}
        />
        <group name="scene" position={[400.52, 348.03, -151.01]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['bread 2'].geometry}
            material={materials.brown}
            name="bread 2"
            position={[935.84, -258.91, 419.58]}
            rotation={[-1.63, -0.03, -0.08]}
            scale={0.68}
          />
          <group name="basket" position={[960.69, -291.85, 427.32]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Torus.geometry}
              material={materials.beige}
              name="Torus"
              position={[-3.17, -9.6, -1.59]}
              rotation={[-1.57, 0.33, -3.14]}
              scale={[1.03, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.bread.geometry}
              material={materials.brown}
              name="bread"
              position={[11.3, 9.42, 8.32]}
              rotation={[-1.14, -0.27, -1.05]}
              scale={0.68}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={materials.beige}
              name="Cube"
              position={[-9.45, -20.61, -3.31]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
          </group>
          <group name="panel" position={[-36.99, -134.43, 279.07]} rotation={[-Math.PI, -0.52, -Math.PI]} scale={1}>
            <group name="Text" position={[2.5, 90.5, -37.04]} rotation={[-Math.PI, 0.9, -Math.PI]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.C.geometry}
                material={materials['brown dark']}
                name="C"
                position={[-51.25, -6.36, -0.58]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.A.geometry}
                material={materials['brown dark']}
                name="A"
                position={[-34.43, -6.36, -0.56]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.M.geometry}
                material={materials['brown dark']}
                name="M"
                position={[-17.34, -6.36, -0.55]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.P.geometry}
                material={materials['brown dark']}
                name="P"
                position={[4.47, -6.36, -0.53]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.I.geometry}
                material={materials['brown dark']}
                name="I"
                position={[20.2, -6.36, -0.51]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.N.geometry}
                material={materials['brown dark']}
                name="N"
                position={[27.82, -6.36, -0.51]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.G.geometry}
                material={materials['brown dark']}
                name="G"
                position={[47.08, -6.36, -0.49]}
                rotation={[0, 0.11, 0]}
                scale={[1.31, 1.39, 1.19]}
              />
            </group>
            <group name="Text1" position={[21.34, 13.77, -14.54]} rotation={[-Math.PI, 0.29, -Math.PI]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.F.geometry}
                material={materials['brown dark']}
                name="F"
                position={[-42.15, -12, -0.23]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.O.geometry}
                material={materials['brown dark']}
                name="O"
                position={[-26.91, -12, -0.2]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.R.geometry}
                material={materials['brown dark']}
                name="R"
                position={[-5.91, -12, -0.15]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.E.geometry}
                material={materials['brown dark']}
                name="E"
                position={[11.59, -12, -0.11]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.S.geometry}
                material={materials['brown dark']}
                name="S"
                position={[27.15, -12, -0.08]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.T.geometry}
                material={materials['brown dark']}
                name="T"
                position={[41.71, -12, -0.05]}
                rotation={[0, 0, 0]}
                scale={1}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 8'].geometry}
              material={materials.brown}
              name="Cube 8"
              position={[26.36, 12.32, -4.58]}
              rotation={[0, -0.28, Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 7'].geometry}
              material={materials.brown}
              name="Cube 7"
              position={[-16.35, 89.5, -47.68]}
              rotation={[-Math.PI, 0.9, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 6'].geometry}
              material={materials['brown dark']}
              name="Cube 6"
              position={[0.45, -35.39, 0.11]}
              rotation={[0, Math.PI / 2, 0]}
            />
          </group>
          <group name="fence" position={[2227.99, -266.12, -821.87]} rotation={[-Math.PI, 1.48, -Math.PI]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 5'].geometry}
              material={materials.brown}
              name="Cube 5"
              position={[0.43, -34.33, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 4'].geometry}
              material={materials.brown}
              name="Cube 4"
              position={[0.43, 6.08, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 3'].geometry}
              material={materials.brown}
              name="Cube 3"
              position={[81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 2'].geometry}
              material={materials.brown}
              name="Cube 2"
              position={[-1.99, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube1.geometry}
              material={materials.brown}
              name="Cube1"
              position={[-81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
          </group>
          <group name="fence1" position={[1736.58, -266.12, -1652.91]} rotation={[-Math.PI, 0.87, -Math.PI]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 51'].geometry}
              material={materials.brown}
              name="Cube 51"
              position={[0.43, -34.33, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 41'].geometry}
              material={materials.brown}
              name="Cube 41"
              position={[0.43, 6.08, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 31'].geometry}
              material={materials.brown}
              name="Cube 31"
              position={[81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 21'].geometry}
              material={materials.brown}
              name="Cube 21"
              position={[-1.99, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube2.geometry}
              material={materials.brown}
              name="Cube2"
              position={[-81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
          </group>
          <group name="fence2" position={[1917, -266.12, -1522.52]} rotation={[-Math.PI, 0.45, -Math.PI]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 52'].geometry}
              material={materials.brown}
              name="Cube 52"
              position={[0.43, -34.33, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 42'].geometry}
              material={materials.brown}
              name="Cube 42"
              position={[0.43, 6.08, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 32'].geometry}
              material={materials.brown}
              name="Cube 32"
              position={[81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 22'].geometry}
              material={materials.brown}
              name="Cube 22"
              position={[-1.99, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube3.geometry}
              material={materials.brown}
              name="Cube3"
              position={[-81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
          </group>
          <group name="fence3" position={[1583.43, -266.12, -1834.17]} rotation={[-Math.PI, 0.85, -Math.PI]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 53'].geometry}
              material={materials.brown}
              name="Cube 53"
              position={[0.43, -34.33, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 43'].geometry}
              material={materials.brown}
              name="Cube 43"
              position={[0.43, 6.08, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 33'].geometry}
              material={materials.brown}
              name="Cube 33"
              position={[81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 23'].geometry}
              material={materials.brown}
              name="Cube 23"
              position={[-1.99, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube4.geometry}
              material={materials.brown}
              name="Cube4"
              position={[-81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
          </group>
          <group name="fence4" position={[2249.43, -266.12, -1048.52]} rotation={[0, 1.37, 0]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 54'].geometry}
              material={materials.brown}
              name="Cube 54"
              position={[0.43, -34.33, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 44'].geometry}
              material={materials.brown}
              name="Cube 44"
              position={[0.43, 6.08, 6.92]}
              scale={[0.97, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 34'].geometry}
              material={materials.brown}
              name="Cube 34"
              position={[81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 24'].geometry}
              material={materials.brown}
              name="Cube 24"
              position={[-1.99, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube5.geometry}
              material={materials.brown}
              name="Cube5"
              position={[-81.86, -15.72, -3.96]}
              scale={[0.77, 1, 1]}
            />
          </group>
          <group
            name="saw"
            position={[-1321.09, -137.82, 1853.83]}
            rotation={[-0.15, -0.76, -0.09]}
            scale={[1, 1.01, 1]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Boolean.geometry}
              material={nodes.Boolean.material}
              name="Boolean"
              position={[86.3, 0, 59.46]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube6.geometry}
              material={materials.stone}
              name="Cube6"
              position={[-12.83, 1.18, -16.71]}
              rotation={[-Math.PI / 2, 0, -0.65]}
              scale={1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials.beige}
            name="Cylinder"
            position={[694.75, -206.49, 503.32]}
            scale={[1.33, 0.47, 1.33]}
          />
          <group name="bridge" position={[-284.79, -330.39, 1146.46]} scale={1}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 55'].geometry}
              material={materials['brown dark']}
              name="Cube 55"
              position={[97.29, -1.2, -325.12]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 45'].geometry}
              material={materials['brown dark']}
              name="Cube 45"
              position={[97.29, -1.2, 205.52]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 35'].geometry}
              material={materials['brown dark']}
              name="Cube 35"
              position={[97.29, -1.2, 77.79]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 56'].geometry}
              material={materials['brown dark']}
              name="Cube 56"
              position={[-87.03, -1.2, -326.63]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 46'].geometry}
              material={materials['brown dark']}
              name="Cube 46"
              position={[-87.03, -1.2, 204.02]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 25'].geometry}
              material={materials['brown dark']}
              name="Cube 25"
              position={[-87.03, -1.2, 76.28]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 36'].geometry}
              material={materials['brown dark']}
              name="Cube 36"
              position={[118.65, -1.2, -177.29]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube7.geometry}
              material={materials['brown dark']}
              name="Cube7"
              position={[-44.14, -1.2, -177.29]}
              rotation={[-3.14, -1.5, -1.56]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank.geometry}
              material={materials['brown dark']}
              name="plank"
              position={[4.61, 60.77, 151.06]}
              rotation={[-1.48, 0, -1.61]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank1.geometry}
              material={materials.brown}
              name="plank1"
              position={[21.2, 60.63, -139.95]}
              rotation={[-1.59, 0, -1.61]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank2.geometry}
              material={materials.brown}
              name="plank2"
              position={[25.63, 16.02, 3.78]}
              rotation={[-1.6, -0.46, -1.58]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank3.geometry}
              material={materials.brown}
              name="plank3"
              position={[30.17, 45.65, -291.42]}
              rotation={[-1.7, 0, -1.58]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank4.geometry}
              material={materials['brown dark']}
              name="plank4"
              position={[7.83, 54.3, 71.89]}
              rotation={[-1.79, 0.01, -1.6]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank5.geometry}
              material={materials.brown}
              name="plank5"
              position={[24.18, 54.3, -213.41]}
              rotation={[-1.79, 0.01, -1.6]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank6.geometry}
              material={materials.brown}
              name="plank6"
              position={[-215.23, -11.13, -67.8]}
              rotation={[-1.64, 0.11, -1]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank7.geometry}
              material={materials.brown}
              name="plank7"
              position={[14.67, 54.3, -70.94]}
              rotation={[-1.79, 0, -1.62]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank8.geometry}
              material={materials.brown}
              name="plank8"
              position={[-4.7, 33.49, 224.72]}
              rotation={[-1.3, -0.03, 1.49]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank9.geometry}
              material={materials['brown dark']}
              name="plank9"
              position={[31.1, 25.87, -359.18]}
              rotation={[-1.99, 0, -1.57]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank10.geometry}
              material={materials.brown}
              name="plank10"
              position={[-11.26, 1.97, 289.36]}
              rotation={[-1.23, -0.03, 1.48]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank11.geometry}
              material={materials['brown dark']}
              name="plank11"
              position={[-4.19, -12.63, -419.75]}
              rotation={[-1.91, 0, -1.58]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank12.geometry}
              material={materials['brown dark']}
              name="plank12"
              position={[-86.7, 30.84, -68.07]}
              rotation={[-1.57, 0.01, -0.06]}
              scale={[1, 0.86, 1.48]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.plank13.geometry}
              material={materials['brown dark']}
              name="plank13"
              position={[107.05, 30.84, -58.52]}
              rotation={[-1.57, 0.01, -0.06]}
              scale={[1, 0.86, 1.48]}
            />
          </group>
          <group name="rocks" position={[-247.13, -345.59, -248.68]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock.geometry}
              material={materials.stone}
              name="rock"
              position={[-1925.49, 7.11, 133.98]}
              rotation={[0, 1.42, 0]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock1.geometry}
              material={materials.stone}
              name="rock1"
              position={[-1994.61, 29.62, 98.22]}
              rotation={[0, 1.47, 0]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock2.geometry}
              material={materials.stone}
              name="rock2"
              position={[-1875, 66.05, 233.92]}
              rotation={[0, 1.42, 0]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock3.geometry}
              material={materials.stone}
              name="rock3"
              position={[-2110.39, 22.21, 100.49]}
              rotation={[-Math.PI, 0.93, -Math.PI]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock4.geometry}
              material={materials.stone}
              name="rock4"
              position={[-1971.46, 35.72, 361.45]}
              rotation={[Math.PI, 1.03, Math.PI]}
              scale={2.28}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock5.geometry}
              material={materials.stone}
              name="rock5"
              position={[-2124.23, 13.03, 366.04]}
              rotation={[-Math.PI, -1.17, -Math.PI]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock6.geometry}
              material={materials.stone}
              name="rock6"
              position={[-2172.56, 13.37, 164.93]}
              rotation={[-Math.PI, -0.12, -Math.PI]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock7.geometry}
              material={materials.stone}
              name="rock7"
              position={[1056.31, 6.39, 1565.75]}
              rotation={[Math.PI, -1.5, Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 2'].geometry}
              material={materials.stone}
              name="rock 2"
              position={[-1945.67, 6.39, -1708.58]}
              rotation={[Math.PI, 1.24, -Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock8.geometry}
              material={materials.stone}
              name="rock8"
              position={[-364.95, 6.39, 1637.06]}
              rotation={[Math.PI, 1.24, -Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 4'].geometry}
              material={materials.stone}
              name="rock 4"
              position={[-561.55, 38.44, 2301.97]}
              rotation={[0, 0.92, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock9.geometry}
              material={materials.stone}
              name="rock9"
              position={[-1517.54, 38.44, 1487.74]}
              rotation={[0, 1.43, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Merged Geometry 3'].geometry}
              material={materials.stone}
              name="Merged Geometry 3"
              position={[678.19, 64.95, -1275.08]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Merged Geometry'].geometry}
              material={materials.stone}
              name="Merged Geometry"
              position={[-360.21, 64.95, -515.51]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Merged Geometry 2'].geometry}
              material={materials.stone}
              name="Merged Geometry 2"
              position={[-1355.87, 62.54, -1461.8]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock10.geometry}
              material={materials.stone}
              name="rock10"
              position={[-178.95, 41.7, 311.67]}
              rotation={[0, -1.4, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock11.geometry}
              material={materials.stone}
              name="rock11"
              position={[392.3, 27.46, 325.1]}
              rotation={[0, -0.77, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock12.geometry}
              material={materials.stone}
              name="rock12"
              position={[-1104.62, 27.46, -1546.09]}
              rotation={[Math.PI, 0.74, -Math.PI]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock13.geometry}
              material={materials.stone}
              name="rock13"
              position={[-1265.38, 63.85, 1391.63]}
              rotation={[0, -0.57, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock14.geometry}
              material={materials.stone}
              name="rock14"
              position={[367.36, 43.66, 127.96]}
              rotation={[-Math.PI / 2, 0, 1.87]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock15.geometry}
              material={materials.stone}
              name="rock15"
              position={[788.35, 65.78, 1459.87]}
              rotation={[-Math.PI / 2, 0, 2.84]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock16.geometry}
              material={materials.stone}
              name="rock16"
              position={[-2017.55, 63.54, 843.88]}
              rotation={[-Math.PI / 2, 0, -3]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock17.geometry}
              material={materials.stone}
              name="rock17"
              position={[-95.24, -5.84, 268.76]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock18.geometry}
              material={materials.stone}
              name="rock18"
              position={[953.05, -5.84, 422.98]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock19.geometry}
              material={materials.stone}
              name="rock19"
              position={[-32.83, -5.84, -104.15]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock20.geometry}
              material={materials.stone}
              name="rock20"
              position={[-510.89, -5.52, 632.31]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock21.geometry}
              material={materials.stone}
              name="rock21"
              position={[-1673.78, -5.52, -47.56]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock22.geometry}
              material={materials.stone}
              name="rock22"
              position={[-1757.64, -5.52, 36.17]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock23.geometry}
              material={materials.stone}
              name="rock23"
              position={[-1767.19, -5.52, 67.63]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock24.geometry}
              material={materials.stone}
              name="rock24"
              position={[-1627.44, -5.84, -93.67]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock25.geometry}
              material={materials.stone}
              name="rock25"
              position={[-1657.09, -5.84, 4]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 3'].geometry}
              material={materials.stone}
              name="rock 3"
              position={[-930.52, -5.84, 2304.93]}
              rotation={[-Math.PI / 2, 0, 3.11]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock26.geometry}
              material={materials.stone}
              name="rock26"
              position={[-1673.8, -5.84, 860.94]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock27.geometry}
              material={materials.stone}
              name="rock27"
              position={[-821.76, -5.84, -1079.37]}
              rotation={[-Math.PI / 2, 0, -0.93]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock28.geometry}
              material={materials.stone}
              name="rock28"
              position={[-1847.94, -6.2, 47.44]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 5'].geometry}
              material={materials.stone}
              name="rock 5"
              position={[-2428.64, -6.2, -1870.88]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock29.geometry}
              material={materials.stone}
              name="rock29"
              position={[-941.95, -6.2, 47.44]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 31'].geometry}
              material={materials.stone}
              name="rock 31"
              position={[-652.51, -6.2, 1925.41]}
              rotation={[-Math.PI / 2, 0, -2.24]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock30.geometry}
              material={materials.stone}
              name="rock30"
              position={[-1644.11, -6.2, 977.88]}
              rotation={[-Math.PI / 2, 0, -2.51]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock31.geometry}
              material={materials.stone}
              name="rock31"
              position={[-2172.7, 5.28, 340.86]}
              rotation={[0, 1.42, 0]}
              scale={1.01}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock32.geometry}
              material={materials.stone}
              name="rock32"
              position={[-2193.61, 5.85, 308.62]}
              rotation={[2.67, -1.18, 2.79]}
              scale={0.11}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock33.geometry}
              material={materials.stone}
              name="rock33"
              position={[-814.28, -6.2, -840.28]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock34.geometry}
              material={materials.stone}
              name="rock34"
              position={[-1690.73, -5.91, 6.32]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 51'].geometry}
              material={materials.stone}
              name="rock 51"
              position={[-2271.42, -5.91, -1912]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock35.geometry}
              material={materials.stone}
              name="rock35"
              position={[-784.74, -5.91, 6.32]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock36.geometry}
              material={materials.stone}
              name="rock36"
              position={[1058.48, -5.91, 434.47]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock37.geometry}
              material={materials.stone}
              name="rock37"
              position={[-442.03, -5.91, 674.92]}
              rotation={[-Math.PI / 2, 0, -0.86]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock38.geometry}
              material={materials.stone}
              name="rock38"
              position={[1868.26, -5.91, -202.85]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock39.geometry}
              material={materials.stone}
              name="rock39"
              position={[72.6, -5.91, -92.66]}
              rotation={[-Math.PI / 2, 0, 1.49]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['rock 32'].geometry}
              material={materials.stone}
              name="rock 32"
              position={[-691.82, -5.91, 2028.07]}
              rotation={[-Math.PI / 2, 0, 3.11]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock40.geometry}
              material={materials.stone}
              name="rock40"
              position={[-1708.92, -5.91, 1066.67]}
              rotation={[-Math.PI / 2, 0, 2.85]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock41.geometry}
              material={materials.stone}
              name="rock41"
              position={[-790.73, -5.91, -969.41]}
              rotation={[-Math.PI / 2, 0, -0.93]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock42.geometry}
              material={materials.stone}
              name="rock42"
              position={[921.82, -6.64, 291.65]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock43.geometry}
              material={materials.stone}
              name="rock43"
              position={[-33.56, -6.64, -208.47]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.rock44.geometry}
              material={materials.stone}
              name="rock44"
              position={[-671.79, -6.64, -775.1]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group name="water lily" position={[-185.83, -340.87, 1211.2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['water lily1'].geometry}
              material={materials['green dark']}
              name="water lily1"
              position={[211.32, 2.39, -204.08]}
              rotation={[-Math.PI / 2, 0, -0.93]}
              scale={[1, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['water lily2'].geometry}
              material={materials['green dark']}
              name="water lily2"
              position={[-520.93, 2.39, -223.55]}
              rotation={[-Math.PI / 2, 0, -2.29]}
              scale={[1, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['water lily3'].geometry}
              material={materials['green dark']}
              name="water lily3"
              position={[89.32, 2.39, -292.73]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={[1, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['water lily4'].geometry}
              material={materials['green dark']}
              name="water lily4"
              position={[630.12, 2.39, 318.92]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={[1, 1, 0.71]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['water lily5'].geometry}
              material={materials['green dark']}
              name="water lily5"
              position={[-645.72, 2.39, -334.02]}
              rotation={[-Math.PI / 2, 0, 2.42]}
              scale={[1, 1, 0.71]}
            />
          </group>
          <group name="trees" position={[0, -68.18, 394.55]}>
            <group name="Group 60" position={[2259.34, -282.75, -1731.86]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone.geometry}
                material={materials.green}
                name="Cone"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 15'].geometry}
                material={materials.brown}
                name="Cylinder 15"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 59" position={[1316.94, -282.75, -2445.91]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone1.geometry}
                material={materials.green}
                name="Cone1"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 151'].geometry}
                material={materials.brown}
                name="Cylinder 151"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 61" position={[611.54, -282.75, -5641.67]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone2.geometry}
                material={materials.green}
                name="Cone2"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 152'].geometry}
                material={materials.brown}
                name="Cylinder 152"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 36" position={[611.54, -282.75, -3972.73]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone3.geometry}
                material={materials.green}
                name="Cone3"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 153'].geometry}
                material={materials.brown}
                name="Cylinder 153"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 62" position={[-3031.49, -282.75, -5186.91]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone4.geometry}
                material={materials.green}
                name="Cone4"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 154'].geometry}
                material={materials.brown}
                name="Cylinder 154"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 35" position={[-1665.89, -282.75, -3627.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone5.geometry}
                material={materials.green}
                name="Cone5"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 155'].geometry}
                material={materials.brown}
                name="Cylinder 155"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 34" position={[2786.66, -282.75, -2754.67]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone6.geometry}
                material={materials.green}
                name="Cone6"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 156'].geometry}
                material={materials.brown}
                name="Cylinder 156"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 33" position={[1683.61, -282.75, 463.15]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone7.geometry}
                material={materials['green dark']}
                name="Cone7"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 157'].geometry}
                material={materials.brown}
                name="Cylinder 157"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 38" position={[4174.51, -282.75, -781.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone8.geometry}
                material={materials['green dark']}
                name="Cone8"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 158'].geometry}
                material={materials.brown}
                name="Cylinder 158"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 67" position={[3830.9, -282.75, 2319.95]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone9.geometry}
                material={materials['green dark']}
                name="Cone9"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 159'].geometry}
                material={materials.brown}
                name="Cylinder 159"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 37" position={[2084.56, -282.75, 1981.92]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone10.geometry}
                material={materials['green dark']}
                name="Cone10"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1510'].geometry}
                material={materials.brown}
                name="Cylinder 1510"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 65" position={[-1697.19, -282.75, 4936.78]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone11.geometry}
                material={materials['green dark']}
                name="Cone11"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1511'].geometry}
                material={materials.brown}
                name="Cylinder 1511"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 31" position={[-1697.19, -282.75, 3402.94]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone12.geometry}
                material={materials['green dark']}
                name="Cone12"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1512'].geometry}
                material={materials.brown}
                name="Cylinder 1512"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 64" position={[-5091.83, -282.75, 2977.71]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone13.geometry}
                material={materials['green dark']}
                name="Cone13"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1513'].geometry}
                material={materials.brown}
                name="Cylinder 1513"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 30" position={[-4174.51, -282.75, 1234.16]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone14.geometry}
                material={materials['green dark']}
                name="Cone14"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1514'].geometry}
                material={materials.brown}
                name="Cylinder 1514"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 63" position={[-5498.68, -282.75, -442]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone15.geometry}
                material={materials.green}
                name="Cone15"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1515'].geometry}
                material={materials.brown}
                name="Cylinder 1515"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 29" position={[-4241.58, -282.75, -1571.64]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone16.geometry}
                material={materials.green}
                name="Cone16"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1516'].geometry}
                material={materials.brown}
                name="Cylinder 1516"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 27" position={[-1187.06, -282.75, -1833.36]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone17.geometry}
                material={materials['green dark']}
                name="Cone17"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1517'].geometry}
                material={materials.brown}
                name="Cylinder 1517"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 57" position={[-2292.78, -282.75, -2079.54]} rotation={[0, -0.1, 0]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone18.geometry}
                material={materials.green}
                name="Cone18"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1518'].geometry}
                material={materials.brown}
                name="Cylinder 1518"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group
              name="Group 58"
              position={[2092.44, -282.75, 82.51]}
              rotation={[-Math.PI, -0.59, -Math.PI]}
              scale={1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone19.geometry}
                material={materials.green}
                name="Cone19"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1519'].geometry}
                material={materials.brown}
                name="Cylinder 1519"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 21" position={[-402.63, -282.75, -2157.14]} rotation={[0, -1, 0]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone20.geometry}
                material={materials.green}
                name="Cone20"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1520'].geometry}
                material={materials.brown}
                name="Cylinder 1520"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 45" position={[-848.03, -282.75, 1882.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone21.geometry}
                material={materials['green dark']}
                name="Cone21"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1521'].geometry}
                material={materials.brown}
                name="Cylinder 1521"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 571" position={[-2834.39, -282.75, -2005.5]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone22.geometry}
                material={materials['green dark']}
                name="Cone22"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1522'].geometry}
                material={materials.brown}
                name="Cylinder 1522"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 581" position={[2167.65, -282.75, -461.81]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone23.geometry}
                material={materials['green dark']}
                name="Cone23"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1523'].geometry}
                material={materials.brown}
                name="Cylinder 1523"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 50" position={[-796.96, -282.75, -2535.74]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone24.geometry}
                material={materials['green dark']}
                name="Cone24"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1524'].geometry}
                material={materials.brown}
                name="Cylinder 1524"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 582" position={[2505.16, -282.75, -270.42]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone25.geometry}
                material={materials['green dark']}
                name="Cone25"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1525'].geometry}
                material={materials.brown}
                name="Cylinder 1525"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 48" position={[-755.95, -282.75, -2873.54]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone26.geometry}
                material={materials['green dark']}
                name="Cone26"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1526'].geometry}
                material={materials.brown}
                name="Cylinder 1526"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 572" position={[-3078.86, -282.75, -1661.05]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone27.geometry}
                material={materials['green dark']}
                name="Cone27"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1527'].geometry}
                material={materials.brown}
                name="Cylinder 1527"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 583" position={[1815.74, -282.75, 840.01]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone28.geometry}
                material={materials['green dark']}
                name="Cone28"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1528'].geometry}
                material={materials.brown}
                name="Cylinder 1528"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 47" position={[-1431.14, -282.75, -2728.91]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone29.geometry}
                material={materials['green dark']}
                name="Cone29"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1529'].geometry}
                material={materials.brown}
                name="Cylinder 1529"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 52" position={[-2872.44, -282.75, 1310.67]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone30.geometry}
                material={materials['green dark']}
                name="Cone30"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1530'].geometry}
                material={materials.brown}
                name="Cylinder 1530"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 573" position={[-2346.84, -282.75, -2352.71]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone31.geometry}
                material={materials['green dark']}
                name="Cone31"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1531'].geometry}
                material={materials.brown}
                name="Cylinder 1531"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 584" position={[2010.12, -282.75, 328.68]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone32.geometry}
                material={materials['green dark']}
                name="Cone32"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1532'].geometry}
                material={materials.brown}
                name="Cylinder 1532"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 53" position={[-102.47, -282.75, -2369.13]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone33.geometry}
                material={materials['green dark']}
                name="Cone33"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1533'].geometry}
                material={materials.brown}
                name="Cylinder 1533"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 574" position={[-2177.5, -282.75, -2787.38]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone34.geometry}
                material={materials['green dark']}
                name="Cone34"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1534'].geometry}
                material={materials.brown}
                name="Cylinder 1534"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 585" position={[2064.97, -282.75, 650.18]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone35.geometry}
                material={materials['green dark']}
                name="Cone35"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1535'].geometry}
                material={materials.brown}
                name="Cylinder 1535"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 51" position={[223.81, -282.75, -2506.26]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone36.geometry}
                material={materials['green dark']}
                name="Cone36"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1536'].geometry}
                material={materials.brown}
                name="Cylinder 1536"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 575" position={[-2741.01, -282.75, -2343.38]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone37.geometry}
                material={materials['green dark']}
                name="Cone37"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1537'].geometry}
                material={materials.brown}
                name="Cylinder 1537"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 586" position={[2200.95, -282.75, -203.56]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone38.geometry}
                material={materials['green dark']}
                name="Cone38"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1538'].geometry}
                material={materials.brown}
                name="Cylinder 1538"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 46" position={[-474.12, -282.75, -2672.33]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone39.geometry}
                material={materials['green dark']}
                name="Cone39"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1539'].geometry}
                material={materials.brown}
                name="Cylinder 1539"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 576" position={[-2756.16, -282.75, -1590.57]} rotation={[0, 0.9, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone40.geometry}
                material={materials['green dark']}
                name="Cone40"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1540'].geometry}
                material={materials.brown}
                name="Cylinder 1540"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 587" position={[2531.83, -282.75, -588.44]} rotation={[0, -1.56, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone41.geometry}
                material={materials['green dark']}
                name="Cone41"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1541'].geometry}
                material={materials.brown}
                name="Cylinder 1541"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 44" position={[-1073.65, -282.75, -2903.86]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone42.geometry}
                material={materials['green dark']}
                name="Cone42"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1542'].geometry}
                material={materials.brown}
                name="Cylinder 1542"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 43" position={[-3039.48, -282.75, -1312.83]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone43.geometry}
                material={materials['green dark']}
                name="Cone43"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1543'].geometry}
                material={materials.brown}
                name="Cylinder 1543"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 26" position={[-1869.16, -282.75, -1312.83]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone44.geometry}
                material={materials['green dark']}
                name="Cone44"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1544'].geometry}
                material={materials.brown}
                name="Cylinder 1544"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 25" position={[-2578.39, -282.75, -643.91]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone45.geometry}
                material={materials['green dark']}
                name="Cone45"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1545'].geometry}
                material={materials.brown}
                name="Cylinder 1545"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 577" position={[-2472.88, -286.81, -2583.45]} rotation={[0, 0.9, 0]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone46.geometry}
                material={materials['green dark']}
                name="Cone46"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1546'].geometry}
                material={materials.brown}
                name="Cylinder 1546"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 588" position={[2378.88, -286.81, 380.96]} rotation={[0, -1.56, 0]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone47.geometry}
                material={materials['green dark']}
                name="Cone47"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1547'].geometry}
                material={materials.brown}
                name="Cylinder 1547"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 56" position={[-119.44, -286.81, -2737.26]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone48.geometry}
                material={materials['green dark']}
                name="Cone48"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1548'].geometry}
                material={materials.brown}
                name="Cylinder 1548"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 578" position={[-2561.2, -286.81, -2107.81]} rotation={[0, 0.9, 0]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone49.geometry}
                material={materials['green dark']}
                name="Cone49"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1549'].geometry}
                material={materials.brown}
                name="Cylinder 1549"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 589" position={[1925.8, -286.81, -182.66]} rotation={[0, -1.56, 0]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone50.geometry}
                material={materials['green dark']}
                name="Cone50"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1550'].geometry}
                material={materials.brown}
                name="Cylinder 1550"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 55" position={[-547.13, -286.81, -2385.11]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone51.geometry}
                material={materials['green dark']}
                name="Cone51"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1551'].geometry}
                material={materials.brown}
                name="Cylinder 1551"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 5810" position={[2392.56, -286.81, -1.48]} rotation={[0, -1.56, 0]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone52.geometry}
                material={materials['green dark']}
                name="Cone52"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1552'].geometry}
                material={materials.brown}
                name="Cylinder 1552"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 54" position={[-1157.1, -286.81, -2652.18]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone53.geometry}
                material={materials['green dark']}
                name="Cone53"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1553'].geometry}
                material={materials.brown}
                name="Cylinder 1553"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 41" position={[-2361.75, -286.81, 395.13]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone54.geometry}
                material={materials['green dark']}
                name="Cone54"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1554'].geometry}
                material={materials.brown}
                name="Cylinder 1554"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 40" position={[-2318.69, -286.81, 597.25]} scale={0.73}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone55.geometry}
                material={materials.green}
                name="Cone55"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1555'].geometry}
                material={materials.brown}
                name="Cylinder 1555"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 42" position={[-2606.45, -282.75, 492.34]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone56.geometry}
                material={materials['green dark']}
                name="Cone56"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1556'].geometry}
                material={materials.brown}
                name="Cylinder 1556"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 24" position={[-2049.48, -282.75, 514.25]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone57.geometry}
                material={materials['green dark']}
                name="Cone57"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1557'].geometry}
                material={materials.brown}
                name="Cylinder 1557"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 23" position={[-2108.9, -282.75, 1465.65]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone58.geometry}
                material={materials['green dark']}
                name="Cone58"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1558'].geometry}
                material={materials.brown}
                name="Cylinder 1558"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 39" position={[1111.47, -282.75, -1773.9]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone59.geometry}
                material={materials['green dark']}
                name="Cone59"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1559'].geometry}
                material={materials.brown}
                name="Cylinder 1559"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 22" position={[-4.27, -282.75, -1039.22]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone60.geometry}
                material={materials['green dark']}
                name="Cone60"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1560'].geometry}
                material={materials.brown}
                name="Cylinder 1560"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 20" position={[-482.35, -282.75, 75.66]} rotation={[-Math.PI, -0.9, -Math.PI]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone61.geometry}
                material={materials['green dark']}
                name="Cone61"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1561'].geometry}
                material={materials.brown}
                name="Cylinder 1561"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 19" position={[-3188.21, -282.75, -23.22]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone62.geometry}
                material={materials['green dark']}
                name="Cone62"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1562'].geometry}
                material={materials.brown}
                name="Cylinder 1562"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 18" position={[-1016.3, -282.75, 1438.93]} rotation={[0, 0.94, 0]} scale={1}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone63.geometry}
                material={materials['green dark']}
                name="Cone63"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1563'].geometry}
                material={materials.brown}
                name="Cylinder 1563"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group
              name="Group 17"
              position={[-195.81, -282.75, 1748.88]}
              rotation={[-Math.PI, -0.71, -Math.PI]}
              scale={1}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone64.geometry}
                material={materials['green dark']}
                name="Cone64"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1564'].geometry}
                material={materials.brown}
                name="Cylinder 1564"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 66" position={[916.81, -282.75, 4115.46]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone65.geometry}
                material={materials['green dark']}
                name="Cone65"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1565'].geometry}
                material={materials.brown}
                name="Cylinder 1565"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
            <group name="Group 16" position={[176.68, -282.75, 2694.69]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cone66.geometry}
                material={materials['green dark']}
                name="Cone66"
                position={[0, 388.54, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cylinder 1566'].geometry}
                material={materials.brown}
                name="Cylinder 1566"
                position={[-0.58, 104.76, -1.15]}
              />
            </group>
          </group>
          <group name="north " position={[167, -262.59, -93.45]} rotation={[Math.PI, -1.38, Math.PI]} scale={0.94}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Ellipse.geometry}
              material={materials['']}
              name="Ellipse"
              position={[-0.61, 0, 0.69]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 61'].geometry}
              material={materials.beige}
              name="Cube 61"
              position={[0, 1.82, 12.52]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={0.74}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 57'].geometry}
              material={materials.red}
              name="Cube 57"
              position={[0, 1.82, -13.36]}
              rotation={[-Math.PI / 2, 0, -Math.PI]}
              scale={0.74}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 5'].geometry}
              material={materials['']}
              name="Cylinder 5"
              position={[0, -8.32, -0.42]}
              rotation={[0, 0, -Math.PI]}
              scale={1.26}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 4'].geometry}
              material={materials['']}
              name="Cylinder 4"
              position={[0, 24.32, 0]}
              scale={1.38}
            />
          </group>
          <group name="map" position={[245.82, 5.08, -1199.19]} rotation={[Math.PI, -0.51, Math.PI]} scale={0.77}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Shape 6'].geometry}
              material={materials.beige}
              name="Shape 6"
              position={[-60.84, -27.01, -8.53]}
              rotation={[-1.58, -0.42, -3.03]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Shape 4'].geometry}
              material={materials.beige}
              name="Shape 4"
              position={[2.03, -53.94, -19.83]}
              rotation={[-1.58, -0.42, -0.07]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Shape 5'].geometry}
              material={materials.beige}
              name="Shape 5"
              position={[63.54, -26, -47.31]}
              rotation={[-Math.PI / 2, 0.42, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Shape 3'].geometry}
              material={materials.beige}
              name="Shape 3"
              position={[-59.38, -26.49, -8.29]}
              rotation={[-Math.PI / 2, 0.42, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Shape 2'].geometry}
              material={materials['Shape 2 Material']}
              name="Shape 2"
              position={[-59.53, 58.41, -10.04]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 26'].geometry}
              material={materials['Cube 26 Material']}
              name="Cube 26"
              position={[1.96, -56.26, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group name="lamp 2" position={[1009.37, -311.65, 283.15]} rotation={[-Math.PI, 0.98, -Math.PI]} scale={0.77}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={materials['']}
              name="Sphere"
              position={[0.26, 0.01, 61.07]}
              scale={1.18}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 27'].geometry}
              material={materials['']}
              name="Cube 27"
              position={[1.38, 16.89, -45.09]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 3'].geometry}
              material={materials.black}
              name="Cylinder 3"
              position={[1.57, -1.78, -30.21]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.06}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 2'].geometry}
              material={materials['']}
              name="Cylinder 2"
              position={[1.57, -1.78, 17]}
              rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
              scale={1.38}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder1.geometry}
              material={materials.black}
              name="Cylinder1"
              position={[0, 0, 32.9]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.carrot.geometry}
            material={materials.orange}
            name="carrot"
            position={[555.75, -175.43, 599.12]}
            rotation={[2.97, 0.16, -0.87]}
            scale={0.81}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 29'].geometry}
              material={materials['Cube 29 Material']}
              name="Cube 29"
              position={[-0.85, 7.88, 74.41]}
              rotation={[-1.58, 0.22, -3.14]}
              scale={0.46}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 291'].geometry}
              material={materials.green}
              name="Cube 291"
              position={[-5.85, 2.88, 77.41]}
              rotation={[-1.57, -1.02, -3.13]}
              scale={0.46}
            />
          </mesh>
          <group name="knif" position={[625.85, -166.69, 595.23]} rotation={[0, 0.21, 0]} scale={2.56}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 37'].geometry}
              material={materials['brown dark']}
              name="Cube 37"
              position={[0.05, 0.13, -16.13]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 28'].geometry}
              material={materials.stone}
              name="Cube 28"
              position={[0, 0, 10.13]}
              rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.cheese.geometry}
            material={materials['']}
            name="cheese"
            position={[723.89, -141.02, 520.6]}
            rotation={[0, -1.34, 0.03]}
            scale={1.44}
          />
          <group name="table" position={[622.94, -246.8, 531.73]} rotation={[0, -1.17, 0]} scale={1.13}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 9'].geometry}
              material={materials['brown dark']}
              name="Cube 9"
              position={[-70.26, -19.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 14'].geometry}
              material={materials['']}
              name="Cube 14"
              position={[-1.44, -44.82, -110.75]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 13'].geometry}
              material={materials['']}
              name="Cube 13"
              position={[-1.44, -44.82, 113.38]}
              rotation={[0, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 91'].geometry}
              material={materials['']}
              name="Cube 91"
              position={[-101.26, -19.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 12'].geometry}
              material={materials['']}
              name="Cube 12"
              position={[-80.69, -34.17, -116.9]}
              rotation={[0, 0, 2.53]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 11'].geometry}
              material={materials['']}
              name="Cube 11"
              position={[-80.69, -34.17, 120.31]}
              rotation={[0, 0, 2.53]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 121'].geometry}
              material={materials['']}
              name="Cube 121"
              position={[79.26, -33.45, -116.9]}
              rotation={[0, 0, -2.62]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 10'].geometry}
              material={materials['']}
              name="Cube 10"
              position={[79.26, -33.45, 120.31]}
              rotation={[0, 0, -2.62]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 81'].geometry}
              material={materials['']}
              name="Cube 81"
              position={[101.26, -19.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 82'].geometry}
              material={materials['brown dark']}
              name="Cube 82"
              position={[70.26, -19.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 71'].geometry}
              material={materials['']}
              name="Cube 71"
              position={[62.95, 19.03, 0]}
              rotation={[-1.57, 0.07, 0.02]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 62'].geometry}
              material={materials['brown dark']}
              name="Cube 62"
              position={[31.95, 19.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 58'].geometry}
              material={materials['']}
              name="Cube 58"
              position={[5.73, 21.52, 0.08]}
              rotation={[-1.56, -0.04, 0.01]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 47'].geometry}
              material={materials['']}
              name="Cube 47"
              position={[-28.55, 19.03, 0]}
              rotation={[-1.56, -0.09, 0.01]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 38'].geometry}
              material={materials['brown dark']}
              name="Cube 38"
              position={[-59.55, 17.03, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
          </group>
          <group name="grass" position={[-605.09, -347.11, -23.08]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass1.geometry}
              material={materials.green}
              name="grass1"
              position={[1675.17, -0.77, -2693.73]}
              rotation={[-Math.PI / 2, 0, 0.08]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass2.geometry}
              material={materials['grass2 Material']}
              name="grass2"
              position={[1710.49, 1952.91, -2053.18]}
              rotation={[-1.17, 0.05, 0.12]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 4'].geometry}
              material={materials.green}
              name="grass 4"
              position={[1964.87, 0.05, 208.8]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass3.geometry}
              material={materials.green}
              name="grass3"
              position={[1051.67, 0.05, -1440.49]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 7'].geometry}
              material={materials.green}
              name="grass 7"
              position={[169.94, 0.05, -1047.05]}
              rotation={[-Math.PI / 2, 0, 2.56]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 6'].geometry}
              material={materials.green}
              name="grass 6"
              position={[-945.19, 0.05, -1725.2]}
              rotation={[-Math.PI / 2, 0, -2.18]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 8'].geometry}
              material={materials.green}
              name="grass 8"
              position={[-2401.03, 0.05, 159.94]}
              rotation={[-Math.PI / 2, 0, -1.07]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 11'].geometry}
              material={materials.green}
              name="grass 11"
              position={[1407.35, 0.05, 608.57]}
              rotation={[-Math.PI / 2, 0, 0.81]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 5'].geometry}
              material={materials.green}
              name="grass 5"
              position={[-339.57, 0.05, 801.7]}
              rotation={[-Math.PI / 2, 0, -0.64]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass4.geometry}
              material={materials.green}
              name="grass4"
              position={[-2342.55, 0.05, 246.2]}
              rotation={[-Math.PI / 2, 0, 0.34]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 9'].geometry}
              material={materials.green}
              name="grass 9"
              position={[-1502.46, 0.05, 1380.53]}
              rotation={[-Math.PI / 2, 0, -1.24]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 2'].geometry}
              material={materials.green}
              name="grass 2"
              position={[-618.23, 0.05, -1876.28]}
              rotation={[-Math.PI / 2, 0, -1.24]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass5.geometry}
              material={materials.green}
              name="grass5"
              position={[-2254.74, 0.05, -328.9]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 10'].geometry}
              material={materials.white}
              name="grass 10"
              position={[-829.37, 0.08, 114.65]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['grass 3'].geometry}
              material={materials['grass 3 Material']}
              name="grass 3"
              position={[-829.37, 0.05, 114.65]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.grass6.geometry}
              material={materials.green}
              name="grass6"
              position={[-1460.81, 0.05, -1419.08]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={2}
            />
          </group>
          <group name="mushrooms" position={[-972.78, -316.43, -684.12]}>
            <group name="mushroom 3" position={[1618.81, -1.47, -655.35]} rotation={[0, -0.47, 0]} scale={1.16}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 39'].geometry}
                material={materials.red}
                name="Cube 39"
                position={[0, 15.46, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 210'].geometry}
                material={materials.beige}
                name="Cube 210"
                position={[5.68, -11.96, 7.54]}
              />
            </group>
            <group name="mushroom 2" position={[-1618.81, -1.47, 655.35]} rotation={[0, -0.47, 0]} scale={1.16}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 310'].geometry}
                material={materials.red}
                name="Cube 310"
                position={[0, 15.46, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 211'].geometry}
                material={materials.beige}
                name="Cube 211"
                position={[5.68, -11.96, 7.54]}
              />
            </group>
            <group name="mushroom" position={[-930.37, 0.74, 29.17]} rotation={[0, -0.47, 0]} scale={1.16}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 311'].geometry}
                material={materials.red}
                name="Cube 311"
                position={[0, 15.46, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 212'].geometry}
                material={materials.beige}
                name="Cube 212"
                position={[5.68, -11.96, 7.54]}
              />
            </group>
            <group name="mushrooms 4" position={[-925.59, -3.08, 29.07]} rotation={[0, -0.47, 0]} scale={1.16}>
              <group name="mushroom 21" position={[20.46, -15.15, -0.21]} rotation={[-0.12, 0.05, -0.39]} scale={0.41}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['Cube 312'].geometry}
                  material={materials.red}
                  name="Cube 312"
                  position={[0, 15.46, 0]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['Cube 213'].geometry}
                  material={materials.beige}
                  name="Cube 213"
                  position={[5.68, -11.96, 7.54]}
                />
              </group>
            </group>
          </group>
          <group name="logs" position={[266.89, -237.59, -1163.67]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log'].geometry}
              material={materials.brown}
              name=" log"
              position={[-75.02, 5.53, -74.45]}
              rotation={[2.82, -0.76, -1.8]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log1'].geometry}
              material={materials.brown}
              name=" log1"
              position={[-89.14, -45.62, -88.46]}
              rotation={[-0.68, 0.66, -1.11]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log2'].geometry}
              material={materials.brown}
              name=" log2"
              position={[-106.65, -88.97, -105.84]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log3'].geometry}
              material={materials.brown}
              name=" log3"
              position={[-46.69, 59.28, -46.33]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log4'].geometry}
              material={materials.brown}
              name=" log4"
              position={[-46.69, 5.53, -46.33]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log5'].geometry}
              material={materials.brown}
              name=" log5"
              position={[-46.69, -45.62, -46.33]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log6'].geometry}
              material={materials.brown}
              name=" log6"
              position={[-46.69, -88.97, -46.33]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log7'].geometry}
              material={materials.brown}
              name=" log7"
              position={[-3.38, 59.28, -3.36]}
              rotation={[-2.23, -0.55, -0.98]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log8'].geometry}
              material={materials.brown}
              name=" log8"
              position={[-3.38, 5.53, -3.36]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log9'].geometry}
              material={materials.brown}
              name=" log9"
              position={[-3.38, -45.62, -3.36]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log10'].geometry}
              material={materials.brown}
              name=" log10"
              position={[-3.38, -88.97, -3.36]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log11'].geometry}
              material={materials.brown}
              name=" log11"
              position={[42.97, 59.28, 42.65]}
              rotation={[1.78, -0.21, -2.34]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log12'].geometry}
              material={materials.brown}
              name=" log12"
              position={[56.78, 5.53, 56.35]}
              rotation={[1.75, -0.18, -2.34]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log13'].geometry}
              material={materials.brown}
              name=" log13"
              position={[67.19, -45.62, 66.68]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log14'].geometry}
              material={materials.brown}
              name=" log14"
              position={[89.68, -88.97, 89]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log15'].geometry}
              material={materials.brown}
              name=" log15"
              position={[50.32, -88.97, 49.94]}
              rotation={[-Math.PI / 2, 0, -0.78]}
              scale={0.73}
            />
          </group>
          <group name="logs1" position={[-2291.41, -297.46, 8.26]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log 2'].geometry}
              material={materials.brown}
              name=" log 2"
              position={[2.13, -31.86, -26.44]}
              rotation={[1.69, 0.06, -0.97]}
              scale={0.73}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes[' log16'].geometry}
              material={materials.brown}
              name=" log16"
              position={[-17.33, 1.93, -0.17]}
              rotation={[1.77, 0.38, 0.76]}
              scale={0.73}
            />
          </group>
          <group name="books" position={[-115.32, -319.06, -67.09]} rotation={[-Math.PI, -1.03, -Math.PI]} scale={0.81}>
            <group name="book" position={[0, 64.26, 0]} rotation={[0, 0.2, 0]} scale={[0.85, 1.29, 0.59]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 313'].geometry}
                material={materials['']}
                name="Cube 313"
                position={[4.99, 0.17, -3.63]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 214'].geometry}
                material={materials['yellow 2']}
                name="Cube 214"
                position={[1.99, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name="book1" position={[-0.44, 35.86, 0]} rotation={[0, 0, 0]} scale={[0.85, 1.29, 0.66]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 314'].geometry}
                material={materials['']}
                name="Cube 314"
                position={[4.99, 0.26, -3.63]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 215'].geometry}
                material={materials['green dark']}
                name="Cube 215"
                position={[1.99, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name="book2" position={[0, 6.91, 0]} rotation={[0, 0.2, 0]} scale={[0.85, 1.29, 0.59]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 315'].geometry}
                material={materials['']}
                name="Cube 315"
                position={[4.99, 0.63, -3.63]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 216'].geometry}
                material={materials.green}
                name="Cube 216"
                position={[1.99, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
            <group name="book3" position={[-0.44, -21.49, 0]} rotation={[0, 0, 0]} scale={[0.85, 1.29, 0.66]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 316'].geometry}
                material={materials['']}
                name="Cube 316"
                position={[4.99, 0.43, -3.63]}
                rotation={[-Math.PI / 2, 0, 0]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 217'].geometry}
                material={materials.red}
                name="Cube 217"
                position={[1.99, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={1}
              />
            </group>
          </group>
          <group name="transat 2" position={[-438.51, -233.19, -182.14]} rotation={[0, 0.52, 0]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 218'].geometry}
              material={materials['']}
              name="Cube 218"
              position={[-43.6, 55.02, 0.07]}
              rotation={[0, 0, 0.77]}
              scale={[0.91, 0.95, 1.12]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 59'].geometry}
              material={materials['']}
              name="Cube 59"
              position={[0, -80.18, -64.75]}
              rotation={[0, 0, -1.27]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 48'].geometry}
              material={materials['']}
              name="Cube 48"
              position={[0, -22.29, -64.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 72'].geometry}
              material={materials['']}
              name="Cube 72"
              position={[-36.58, -38.28, -63.83]}
              scale={[1, 1.17, 0.64]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 63'].geometry}
              material={materials['']}
              name="Cube 63"
              position={[-36.58, -38.28, 65.25]}
              scale={[1, 1.17, 0.64]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 510'].geometry}
              material={materials['']}
              name="Cube 510"
              position={[0, -80.18, 64.75]}
              rotation={[0, 0, -1.27]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 317'].geometry}
              material={materials['']}
              name="Cube 317"
              position={[0, -22.29, 64.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 219'].geometry}
              material={materials['']}
              name="Cube 219"
              position={[0.89, -30.78, 57.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
          </group>
          <group name="transat" position={[-538.53, -233.19, -437.52]} rotation={[0, 0.03, 0]} scale={0.92}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 220'].geometry}
              material={materials['']}
              name="Cube 220"
              position={[-43.6, 55.02, 0.07]}
              rotation={[0, 0, 0.77]}
              scale={[0.91, 0.95, 1.12]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 511'].geometry}
              material={materials['']}
              name="Cube 511"
              position={[0, -80.18, -64.75]}
              rotation={[0, 0, -1.27]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 49'].geometry}
              material={materials['']}
              name="Cube 49"
              position={[0, -22.29, -64.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 73'].geometry}
              material={materials['']}
              name="Cube 73"
              position={[-36.58, -38.28, -63.83]}
              scale={[1, 1.17, 0.64]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 64'].geometry}
              material={materials['']}
              name="Cube 64"
              position={[-36.58, -38.28, 65.25]}
              scale={[1, 1.17, 0.64]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 512'].geometry}
              material={materials['']}
              name="Cube 512"
              position={[0, -80.18, 64.75]}
              rotation={[0, 0, -1.27]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 318'].geometry}
              material={materials['']}
              name="Cube 318"
              position={[0, -22.29, 64.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 221'].geometry}
              material={materials['']}
              name="Cube 221"
              position={[0.89, -30.78, 57.75]}
              rotation={[0, 0, 0.76]}
              scale={1}
            />
          </group>
          <group name="flowers" position={[-11.05, -300.34, 517.73]}>
            <group
              name="flower 5"
              position={[-1153.67, -6.27, 1456.36]}
              rotation={[-Math.PI, 0.45, -Math.PI]}
              scale={1.08}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 319'].geometry}
                material={materials.red}
                name="Cube 319"
                position={[-1.68, 23.04, -3.98]}
                rotation={[-1.36, -0.02, 0.22]}
                scale={[1, 0.75, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder2.geometry}
                material={materials.green}
                name="Cylinder2"
                position={[-0.49, 0.17, -4.5]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 222'].geometry}
                material={materials.green}
                name="Cube 222"
                position={[5.5, -12.34, -4.66]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group
              name="flower 4"
              position={[-1023.65, -6.27, 1118.11]}
              rotation={[-Math.PI, 0.45, -Math.PI]}
              scale={1.08}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 320'].geometry}
                material={materials.red}
                name="Cube 320"
                position={[-1.68, 23.04, -3.98]}
                rotation={[-1.36, -0.02, 0.22]}
                scale={[1, 0.75, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder3.geometry}
                material={materials.green}
                name="Cylinder3"
                position={[-0.49, 0.17, -4.5]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 223'].geometry}
                material={materials.green}
                name="Cube 223"
                position={[5.5, -12.34, -4.66]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group
              name="flower 2"
              position={[-1445.07, -6.27, -49.58]}
              rotation={[-Math.PI, 0.45, -Math.PI]}
              scale={1.08}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 321'].geometry}
                material={materials.red}
                name="Cube 321"
                position={[-1.68, 23.04, -3.98]}
                rotation={[-1.36, -0.02, 0.22]}
                scale={[1, 0.75, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder4.geometry}
                material={materials.green}
                name="Cylinder4"
                position={[-0.49, 0.17, -4.5]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 224'].geometry}
                material={materials.green}
                name="Cube 224"
                position={[5.5, -12.34, -4.66]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group
              name="flower 3"
              position={[1573.95, 2.84, -1408.9]}
              rotation={[-Math.PI, -0.8, -Math.PI]}
              scale={1.08}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 322'].geometry}
                material={materials['']}
                name="Cube 322"
                position={[-1.68, 23.04, -3.98]}
                rotation={[-1.36, -0.02, 0.22]}
                scale={[1, 0.75, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder5.geometry}
                material={materials.green}
                name="Cylinder5"
                position={[-0.49, 0.17, -4.5]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 225'].geometry}
                material={materials.green}
                name="Cube 225"
                position={[5.5, -12.34, -4.66]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
            <group
              name="flower"
              position={[-1572.1, -5.59, -1460.89]}
              rotation={[-Math.PI, 0.45, -Math.PI]}
              scale={1.08}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 323'].geometry}
                material={materials['']}
                name="Cube 323"
                position={[-1.68, 23.04, -3.98]}
                rotation={[-1.36, -0.02, 0.22]}
                scale={[1, 0.75, 1]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder6.geometry}
                material={materials.green}
                name="Cylinder6"
                position={[-0.49, 0.17, -4.5]}
                rotation={[0, 0, 0]}
                scale={1}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 226'].geometry}
                material={materials.green}
                name="Cube 226"
                position={[5.5, -12.34, -4.66]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={1}
              />
            </group>
          </group>
          <group name="lamp" position={[-108.39, -174.46, -60.52]} rotation={[Math.PI, -1.49, Math.PI]} scale={1.05}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Torus1.geometry}
              material={materials['brown dark']}
              name="Torus1"
              position={[-7.13, 30.78, -0.33]}
              rotation={[0.03, 0.02, 0]}
              scale={1.18}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 227'].geometry}
              material={materials['yellow 2']}
              name="Cube 227"
              position={[-2.44, -26.44, 3.65]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube8.geometry}
              material={materials.glass}
              name="Cube8"
              position={[0.01, -32.27, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 21'].geometry}
              material={materials['']}
              name="Cylinder 21"
              position={[0, 27.57, 0]}
              rotation={[0, 0, -Math.PI]}
              scale={0.9}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder7.geometry}
              material={materials['']}
              name="Cylinder7"
              position={[0, -66.01, 0]}
              scale={0.9}
            />
          </group>
          <group name="trunks" position={[-91.42, -234.36, 893.88]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['trunk 7'].geometry}
              material={materials['']}
              name="trunk 7"
              position={[-1351.28, -63.51, 940.5]}
              rotation={[-Math.PI, -0.92, -Math.PI]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['trunk 5'].geometry}
              material={materials['']}
              name="trunk 5"
              position={[-236.3, -63.51, 1492.68]}
              rotation={[-Math.PI, -0.92, -Math.PI]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['trunk 4'].geometry}
              material={materials['']}
              name="trunk 4"
              position={[-1213.15, -63.51, 1031.17]}
              rotation={[-Math.PI, 0.18, -Math.PI]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['trunk 6'].geometry}
              material={materials['']}
              name="trunk 6"
              position={[-1194.37, -63.51, 862.66]}
              rotation={[-Math.PI, 0.5, -Math.PI]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['trunk 3'].geometry}
              material={materials['']}
              name="trunk 3"
              position={[-492.2, -63.51, 1130.55]}
              rotation={[-Math.PI, 0.66, -Math.PI]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.trunk.geometry}
              material={materials['']}
              name="trunk"
              position={[1633.77, -63.51, -1497.53]}
              rotation={[0, 1.12, 0]}
              scale={0.77}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.trunk1.geometry}
              material={materials['']}
              name="trunk1"
              position={[-1536.05, -80.36, -208.36]}
              rotation={[-3.14, -1.2, 1.57]}
              scale={[0.25, 0.36, 0.21]}
            />
            <group name="trunk2" position={[-1598.13, -15.41, -214.16]} rotation={[0, -0.3, 0]} scale={1.13}>
              <group name="chopped" position={[3.95, 36.41, 1.94]} rotation={[0, 0, 0.25]} scale={0.85}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['Cube 410'].geometry}
                  material={materials['brown dark']}
                  name="Cube 410"
                  position={[45.01, 23.82, 32.15]}
                  rotation={[0, 0, 0.19]}
                  scale={1}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes['Cube 324'].geometry}
                  material={materials.stone}
                  name="Cube 324"
                  position={[-39.69, 3.7, 37.27]}
                />
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Cube 228'].geometry}
                material={materials.green}
                name="Cube 228"
                position={[34.08, 2.38, 13.65]}
                rotation={[-2.6, -1.26, -2.97]}
                scale={0.45}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube9.geometry}
                material={materials['green dark']}
                name="Cube9"
                position={[45.38, -6.56, 8.34]}
                rotation={[-0.38, 0.41, -0.78]}
                scale={0.45}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cylinder8.geometry}
                material={materials['']}
                name="Cylinder8"
                position={[-27.98, -39.69, 1.55]}
              />
            </group>
          </group>
          <group name="backpack" position={[-1525.3, -261.59, -349.48]} rotation={[0, -0.97, 0]} scale={1.37}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 229'].geometry}
              material={materials['']}
              name="Cube 229"
              position={[-1.09, -53.36, 26.63]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Torus 2'].geometry}
              material={materials['']}
              name="Torus 2"
              position={[16.57, -11.12, 37.58]}
              rotation={[2.21, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Torus 3'].geometry}
              material={materials['']}
              name="Torus 3"
              position={[-1.4, 44.79, 2.47]}
              rotation={[0.02, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Torus2.geometry}
              material={materials['']}
              name="Torus2"
              position={[-19.52, -11.12, 37.58]}
              rotation={[2.21, 0, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 92'].geometry}
              material={materials['']}
              name="Cube 92"
              position={[-19.52, -8.38, -22.76]}
              rotation={[-3.11, 0, Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 83'].geometry}
              material={materials['']}
              name="Cube 83"
              position={[16.57, -8.38, -22.76]}
              rotation={[-3.11, 0, Math.PI]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 74'].geometry}
              material={materials['']}
              name="Cube 74"
              position={[16.57, -10.74, 42.99]}
              rotation={[0.04, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 65'].geometry}
              material={materials['']}
              name="Cube 65"
              position={[-19.52, -10.74, 42.99]}
              rotation={[0.04, 0, 0]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 513'].geometry}
              material={materials.green}
              name="Cube 513"
              position={[45.37, -20.71, 5.13]}
              rotation={[Math.PI / 2, 1.56, -Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 411'].geometry}
              material={materials.green}
              name="Cube 411"
              position={[-45.09, -22.31, 5.13]}
              rotation={[Math.PI / 2, -1.54, Math.PI / 2]}
              scale={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 325'].geometry}
              material={materials['']}
              name="Cube 325"
              position={[-1.09, 42.22, 33.79]}
              rotation={[0, Math.PI / 2, 0]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube10.geometry}
              material={materials.green}
              name="Cube10"
              position={[-1.09, -1.42, 26.63]}
            />
          </group>
          <group name="tent" position={[-1204.43, -190.75, -556.06]} rotation={[0, 0.3, 0]} scale={1.64}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 31'].geometry}
              material={materials.brown}
              name="Cylinder 31"
              position={[78.42, 6.06, 109.56]}
              rotation={[1.56, -0.96, 1.7]}
              scale={0.63}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 22'].geometry}
              material={materials.brown}
              name="Cylinder 22"
              position={[-76.62, 6.06, -107.69]}
              rotation={[1.59, 0.96, -1.44]}
              scale={0.63}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 32'].geometry}
              material={materials.brown}
              name="Cylinder 32"
              position={[75.47, 6.67, -107.88]}
              rotation={[1.56, -0.96, 1.42]}
              scale={0.63}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder9.geometry}
              material={materials.brown}
              name="Cylinder9"
              position={[-73.67, 6.67, 109.75]}
              rotation={[1.59, 0.96, -1.72]}
              scale={0.63}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cube 326'].geometry}
              material={materials['']}
              name="Cube 326"
              position={[0.34, 6.99, -1.71]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[0.63, 0.71, 0.63]}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={nodes['Rectangle 2'].geometry}
                material={materials['yellow 2']}
                name="Rectangle 2"
                position={[-1.78, -4.36, -153.3]}
                rotation={[0, 0, 0]}
                scale={1.48}
              />
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 41'].geometry}
              material={materials['']}
              name="Cylinder 41"
              position={[-154.49, -83.85, -128.8]}
              rotation={[0.58, -1.17, 0.9]}
              scale={[1.01, 1.03, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 33'].geometry}
              material={materials['']}
              name="Cylinder 33"
              position={[155.03, -82.47, 129.28]}
              rotation={[-3.09, 1.29, -2.83]}
              scale={[1.01, 1.03, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes['Cylinder 42'].geometry}
              material={materials['']}
              name="Cylinder 42"
              position={[155.59, -83.68, -124.77]}
              rotation={[Math.PI, 0, -2.79]}
              scale={[1, 1.03, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder10.geometry}
              material={materials['']}
              name="Cylinder10"
              position={[-153.27, -82.09, 124.99]}
              rotation={[0, 0, 0.35]}
              scale={[1, 1.03, 1]}
            />
          </group>
        </group>
        <hemisphereLight color="#dbdbdb" intensity={0.75} name="Default Ambient Light" />
      </group>
    </>
  )
}
