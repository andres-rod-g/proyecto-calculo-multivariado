import { Tab, Tabs } from "@nextui-org/tabs"
import { Icon } from "@iconify/react/dist/iconify.js";
import InfoContainerComponent from "./common/infoContainer.component";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";
import RetroGrid from "./ui/retro-grid";

import "mafs/core.css";
import "mafs/font.css";
import 'katex/dist/katex.min.css';

import { Input } from "@nextui-org/input";
import { resolverExpresionPasoAPasoLatex } from "@/lib/utils";

import Latex from "react-latex-next"
import { FIGURES, type IFigure } from "@/constants/figures";
import graphRenderer from "./graphRender/graphRenderer.component";

const IndexComponent = () => {
    const [selectedDimension, setSelectedDimension] = useState<React.Key>("2D");
    const [objectData, setObjectData] = useState<{ [key: string]: number }>({})

    const [selectedFigure, setSelectedFigure] = useState<IFigure | null>(FIGURES[0]);

    const handleChangeObjectData = (id: string, value: number) => {
        let temp = objectData;
        temp[id] = value
        setObjectData({ ...temp })
    }

    useEffect(() => {
        setSelectedFigure(null)
    }, [selectedDimension])

    useEffect(() => {
        setObjectData({})
        let data: { [key: string]: number } = {}

        selectedFigure?.figureData.map((v) => {
            console.log({ [v.id]: v.initialValue })
            data[v.id] = v.initialValue
        })

        setObjectData(data)
    }, [selectedFigure])

    return (
        <div className=" flex flex-col w-full h-full min-h-dvh items-center p-4 space-y-4">

            <div className="flex flex-col max-w-[50%] w-full min-w-[500px] space-y-4">
                <div className=" relative flex flex-col h-[300px] bg-default-50 p-8 rounded-xl shadow-sm w-full items-center justify-center overflow-hidden">
                    <h1 className=" text-default-800 font-bold text-3xl mb-4 text-center">Calculadora de Áreas con explicaciones de sus fórmulas en integrales y visualizador</h1>
                    <h2 className=" text-default-500 text-center"><strong>Desarrollado por:</strong> <br />Helga Julianna Eraso Vargas <br />Andrés Felipe Rodríguez Gallego <br /><br /> <strong>FESC - 2024/2</strong></h2>
                    <RetroGrid className="" />
                </div>
            </div>

            <Tabs
                aria-label="Options"
                color="primary"
                variant="bordered"
                // @ts-ignore
                selectedKey={selectedDimension}
                onSelectionChange={setSelectedDimension}
            >
                <Tab
                    key="2D"
                    className={`${selectedDimension === "2D" ? "text-white" : ""}`}
                    title={
                        <div className="flex items-center space-x-2">
                            <Icon fontSize={20} icon="solar:widget-2-bold" />
                            <span>Figuras 2D</span>
                        </div>
                    }
                />
                <Tab
                    key="3D"
                    className={`${selectedDimension === "3D" ? "text-white" : ""}`}
                    title={
                        <div className="flex items-center space-x-2">
                            <Icon fontSize={20} icon="solar:box-minimalistic-bold" />
                            <span>Figuras 3D</span>
                        </div>
                    }
                />
            </Tabs>

            <div className="flex flex-col max-w-[50%] w-full min-w-[500px] space-y-4">
                <InfoContainerComponent
                    title="Figura"
                    description="Selecciona la forma correspondiente e introduce los valores."
                >
                    <Select
                        label="Selecciona la Figura"
                        selectedKeys={[selectedFigure?.id] as Iterable<any>}
                        onChange={(e) => setSelectedFigure(FIGURES.findLast((v) => v.id === e.target.value) as IFigure)}
                        startContent={
                            <Icon fontSize={20} icon="solar:widget-2-bold" />}
                    >
                        {FIGURES.filter((v) => v.type === selectedDimension).map((v, i) =>
                            <SelectItem
                                key={v.id}
                                startContent={
                                    <Icon icon={v.icon} />
                                }
                            >
                                {v.label}
                            </SelectItem>
                        )}
                    </Select>
                </InfoContainerComponent>
                {
                    selectedFigure &&
                    <>
                        <InfoContainerComponent
                            title="Paso a Paso"
                            description="En esta sección se puede visualizar el paso a paso de la operación."
                        >
                            <div className=" flex flex-col items-center text-center space-y-10">
                                {
                                    selectedFigure.latexSteps.map((v, i) => {
                                        return (
                                            <div className=" flex flex-col w-full text-start">
                                                <h2 className=" font-medium text-medium">{v.title}</h2>
                                                <p className=" text-default-400 mb-8"><Latex>{v.description}</Latex></p>
                                                <div className=" flex flex-col space-y-8 text-center">
                                                    {
                                                        v.latex.map((l) => {
                                                            return (
                                                                <Latex>{l}</Latex>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </InfoContainerComponent>
                        <InfoContainerComponent
                            title="Datos de la figura"
                            description="En esta sección, deberás escribir todos los campos y secciones correspondientes a cada figura."
                        >
                            {
                                selectedFigure.figureData.map((v) => {
                                    return (
                                        <Input
                                            label={v.label}
                                            value={objectData[v.id]?.toString()}
                                            onChange={(e) => {
                                                if (e.target.value === "") return
                                                handleChangeObjectData(v.id, parseFloat(e.target.value))
                                            }}
                                            description={v.description}
                                        />
                                    )
                                })
                            }
                        </InfoContainerComponent>
                        <InfoContainerComponent
                            title="Gráfico"
                            description="Se muestra una representación gráfica."
                        >
                            <div className=" rounded-lg overflow-hidden">
                                {
                                    graphRenderer({
                                        id: selectedFigure.id,
                                        object: objectData
                                    })
                                }
                            </div>
                        </InfoContainerComponent>
                    </>
                }
            </div>
        </div>
    )
}

export default IndexComponent