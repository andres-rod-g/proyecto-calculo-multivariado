import { Circle, Coordinates, Mafs, useMovablePoint, vec } from "mafs";

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
                return <Mafs viewBox={{ y: [-2, 2] }}>
                    <Coordinates.Cartesian />
                    <Circle center={[0, 0]} radius={object.radius} />
                </Mafs>;
            case "elipse":
                return <></>
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
                return <></>
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