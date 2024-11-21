import { Circle, Coordinates, Ellipse, Mafs, Polygon, Theme, Transform, useMovablePoint, vec } from "mafs";

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
                                [-object.base/2, object.altura / 2], 
                                [object.base/2, object.altura / 2], 
                                [object.base / 2, -object.altura / 2], 
                                [-object.base / 2, -object.altura / 2],
                            ]}
                            color={Theme.blue}
                        />
                    </Mafs>
                );
            case "esfera":
return <></>
            case "cubo":
return <></>
            case "triangulo":
return <></>
            case "cono":
return <></>
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