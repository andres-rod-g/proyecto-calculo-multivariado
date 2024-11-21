interface CustomProps {
    title: string;
    description: string;
    children?: React.ReactNode
}

const InfoContainerComponent: React.FC<CustomProps> = ({ title, description, children }) => {
    return (
        <div className=" flex flex-col bg-default-50 p-8 rounded-xl shadow-sm w-full select-none">
            <h1 className=" text-default-800 font-bold text-xl">{title}</h1>
            <p className=" text-default-400 mb-4">{description}</p>
            <div className=" flex flex-col space-y-2">
                {children}
            </div>
        </div>
    )
}

export default InfoContainerComponent