import { Circle, Coordinates, Ellipse, Mafs, Polygon, Theme, Transform, useMovablePoint, vec } from "mafs";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";

interface CustomProps {
    id: string;
    object: { [key: string]: number }
}

const graphRenderer: React.FC<CustomProps> = ({
    id,
    object
}) => {

    const renderer = () => {
        switch (id) {
            case "triangulo":
                return <Mafs viewBox={{ y: [-(object.base * 1.5), object.altura * 1.5] }}>
                    <Coordinates.Cartesian
                        xAxis={{
                            lines: 1,
                            labels: (object.altura > 9 || object.base > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                        }}
                        yAxis={{
                            lines: 1,
                            labels: (object.altura > 9 || object.base > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                        }}
                    />
                    <Polygon
                        points={[[0, object.altura / 2], [object.base / 2, -object.altura / 2], [-object.base / 2, -object.altura / 2]]}
                        color={Theme.blue}
                    />
                </Mafs>;
            case "elipse":
                return (
                    <Mafs viewBox={{ y: [-(object.a * 1.5), object.b * 1.5] }} >
                        <Coordinates.Cartesian subdivisions={0.25}
                            xAxis={{
                                lines: 1,
                                labels: (object.a > 9 || object.b > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }}
                            yAxis={{
                                lines: 1,
                                labels: (object.a > 9 || object.b > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }} />
                        <Ellipse
                            center={[0, 0]}
                            radius={[Math.abs(object.a), Math.abs(object.b)]}
                        />

                        <Transform translate={[0, 0]}>
                            <Transform rotate={0}>
                                {/*
                             * Display a little hint that the
                             * point is meant to move radially
                             */}
                                {/* <Circle
                                    center={[0, 0]}
                                    radius={hintRadius}
                                    strokeStyle="dashed"
                                    strokeOpacity={0.3}
                                    fillOpacity={0}
                                /> */}

                                <Ellipse
                                    center={[0, 0]}
                                    radius={[Math.abs(object.a), Math.abs(object.b)]}
                                />
                            </Transform>
                        </Transform>
                    </Mafs>
                );
            case "circulo":
                return (
                    <Mafs viewBox={{ y: [-(object.radio * 1.5), object.radio * 1.5] }} >
                        <Coordinates.Cartesian subdivisions={0.25}
                            xAxis={{
                                lines: 1,
                                labels: (object.radio > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }}
                            yAxis={{
                                lines: 1,
                                labels: (object.radio > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }} />
                        <Circle center={[0, 0]} radius={object.radio} />
                    </Mafs>
                );
            case "rectangulo":
                return (
                    <Mafs viewBox={{ y: [-(object.base * 1.5), object.altura * 1.5] }}>
                        <Coordinates.Cartesian
                            xAxis={{
                                lines: 1,
                                labels: (object.altura > 9 || object.base > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }}
                            yAxis={{
                                lines: 1,
                                labels: (object.altura > 9 || object.base > 9 ? (n) => (isOdd(n) ? n : "") : (n) => n),
                            }}
                        />
                        <Polygon
                            points={[
                                [-object.base / 2, object.altura / 2],
                                [object.base / 2, object.altura / 2],
                                [object.base / 2, -object.altura / 2],
                                [-object.base / 2, -object.altura / 2],
                            ]}
                            color={Theme.blue}
                        />
                    </Mafs>
                );
            case "esfera":
                return (
                    <Canvas camera={{ position: [5, 5, 5], fov: 75 }} className=" aspect-square">
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <gridHelper />
                        <OrbitControls />
                        <mesh >
                            <sphereGeometry attach='geometry' args={[object.r, 32]} />

                            <meshNormalMaterial attach="material" />
                        </mesh>
                    </Canvas>
                )
            case "cubo":
                return (
                    <Canvas camera={{ position: [5, 5, 5], fov: 75 }} className=" aspect-square">
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <gridHelper />
                        <OrbitControls />
                        <mesh >
                            <boxGeometry attach='geometry' args={[object.l, object.l, object.l]} />

                            <meshNormalMaterial attach="material" />
                        </mesh>
                    </Canvas>
                )
            case "cilindro":
                return (
                    <Canvas camera={{ position: [5, 5, 5], fov: 75 }} className=" aspect-square">
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <gridHelper />
                        <OrbitControls />
                        <mesh >
                            <cylinderGeometry attach='geometry' args={[object.r, object.r, object.h, 32]} />

                            <meshNormalMaterial attach="material" />
                        </mesh>
                    </Canvas>
                )
            case "cono":
                return (
                    <Canvas camera={{ position: [5, 5, 5], fov: 75 }} className=" aspect-square">
                        <ambientLight intensity={Math.PI / 2} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                        <gridHelper />
                        <OrbitControls />
                        <mesh >
                            <coneGeometry attach='geometry' args={[object.r, object.h, 30]} />

                            <meshNormalMaterial attach="material" />
                        </mesh>
                    </Canvas>
                )
        }
    }

    return <>
        {/* {id} */}
        {renderer()}
    </>
}

function isOdd(n: number) {
    return ((n % 2) + 2) % 2 === 0
}

export default graphRenderer