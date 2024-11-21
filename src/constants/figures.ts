
export interface IFigure {
    id: string;
    label: string;
    type: "2D" | "3D";
    icon: string;
    figureData: IFigureData[]
    latexSteps: IFigureStep[]
}

interface IFigureData {
    id: string;
    label: string;
    description?: string;
    initialValue: number;
}

interface IFigureStep {
    latex: string[];
    title: string;
    description: string;
}


export const FIGURES: IFigure[] = [
    {
        id: "triangulo",
        label: "Triángulo",
        type: "2D",
        icon: "tabler:triangle",
        figureData: [
            {
                id: "base",
                label: "Base",
                initialValue: 1
            },
            {
                id: "altura",
                label: "Altura",
                initialValue: 1
            },
        ],
        latexSteps: [
            {
                "title": "Integral",
                "description": "",
                "latex": [
                    "$\\int_0^a \\frac{h}{a}x dx + \\int_a^b \\left(h - \\frac{h}{b-a}(x-a)\\right) dx$"
                ]
            },
            {
                "title": "Paso 1 - Solución de la Primera Integral",
                "description": "Lo primero que se hace es resolver la primera integral de la expresión.",
                "latex": [
                    "$\\int_0^a \\frac{h}{a}x dx$",
                    "$= \\frac{h}{a} \\int_0^a x dx$",
                    "$= \\frac{h}{a} \\left[\\frac{1}{2}x^2\\right]_0^a$",
                    "$= \\frac{1}{2}ah$"
                ]
            },
            {
                "title": "Paso 2 - Solución de la Segunda Integral",
                "description": "Ahora resolvemos la segunda integral.",
                "latex": [
                    "$\\int_a^b \\left(h - \\frac{h}{b-a}(x-a)\\right) dx$",
                    "$= \\int_a^b \\left(h - \\frac{h}{b-a}x + \\frac{ah}{b-a}\\right) dx$",
                    "$= \\left[hx - \\frac{h}{2(b-a)}x^2 + \\frac{ah}{b-a}x\\right]_a^b$",
                    "$= \\frac{1}{2}bh - \\frac{1}{2}ah$"
                ]
            },
            {
                "title": "Sumando ambas áreas",
                "description": "Sumamos los resultados de ambas integrales.",
                "latex": [
                    "$A = \\frac{1}{2}ah + \\frac{1}{2}bh - \\frac{1}{2}ah$",
                    "$= \\frac{1}{2}bh$"
                ]
            },
            {
                "title": "Solución",
                "description": "La solución final para la integral es:",
                "latex": [
                    "$A = \\frac{1}{2}bh$"
                ]
            }
        ]
    },
    {
        id: "circulo",
        label: "Círculo",
        type: "2D",
        icon: "tabler:circle",
        figureData: [
            {
                id: "radio",
                label: "Radio",
                initialValue: 1
            },
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el área del círculo",
                "description": "Vamos a resolver la integral que representa la mitad del área de un círculo con radio $r$.",
                "latex": [
                    "$\\int \\sqrt{r^2 - x^2} \\, dx$"
                ]
            },
            {
                "title": "Paso 1 - Uso de sustitución trigonométrica",
                "description": "Utilizamos la sustitución $x = r \\sin(\\theta)$, lo que implica que $dx = r \\cos(\\theta) \\, d\\theta$. Así, $\\sqrt{r^2 - x^2} = r \\cos(\\theta)$.",
                "latex": [
                    "$x = r \\sin(\\theta)$",
                    "$dx = r \\cos(\\theta) \\, d\\theta$",
                    "$\\sqrt{r^2 - x^2} = r \\cos(\\theta)$"
                ]
            },
            {
                "title": "Paso 2 - Transformación de la integral",
                "description": "Sustituimos en la integral original:",
                "latex": [
                    "$\\int \\sqrt{r^2 - x^2} \\, dx = \\int r \\cos(\\theta) \\cdot r \\cos(\\theta) \\, d\\theta$",
                    "$= r^2 \\int \\cos^2(\\theta) \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 3 - Resolución usando la identidad trigonométrica",
                "description": "Usamos la identidad $\\cos^2(\\theta) = \\frac{1 + \\cos(2\\theta)}{2}$ para simplificar la integral:",
                "latex": [
                    "$r^2 \\int \\cos^2(\\theta) \\, d\\theta = r^2 \\int \\frac{1 + \\cos(2\\theta)}{2} \\, d\\theta$",
                    "$= \\frac{r^2}{2} \\int (1 + \\cos(2\\theta)) \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 4 - Integración término a término",
                "description": "Integramos cada término de forma independiente.",
                "latex": [
                    "$= \\frac{r^2}{2} \\left( \\theta + \\frac{\\sin(2\\theta)}{2} \\right)$"
                ]
            },
            {
                "title": "Paso 5 - Sustitución de límites y evaluación",
                "description": "Volvemos a la variable $x$ usando $\\theta = \\arcsin\\left(\\frac{x}{r}\\right)$ y evaluamos los límites.",
                "latex": [
                    "El área final es $A = \\pi r^2$"
                ]
            }
        ]

    },
    {
        id: "rectangulo",
        label: "Rectángulo",
        type: "2D",
        icon: "tabler:rectangle",
        figureData: [
            {
                id: "base",
                label: "Base",
                initialValue: 1
            },
            {
                id: "altura",
                label: "Altura",
                initialValue: 1
            },
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el área del rectángulo",
                "description": "Resolvemos la integral doble que representa el área de un rectángulo con dimensiones de $a$ en $x$ y $b$ en $y$.",
                "latex": [
                    "$A = \\int_0^a \\int_0^b \\, dy \\, dx$"
                ]
            },
            {
                "title": "Paso 1 - Resolver la Integral Interior",
                "description": "Resolvemos primero la integral con respecto a $y$, manteniendo $x$ como una constante.",
                "latex": [
                    "$\\int_0^a \\int_0^b \\, dy \\, dx = \\int_0^a \\left[ y \\right]_0^b \\, dx$",
                    "$= \\int_0^a (b - 0) \\, dx$",
                    "$= \\int_0^a b \\, dx$"
                ]
            },
            {
                "title": "Paso 2 - Resolver la Integral Exterior",
                "description": "Integramos ahora con respecto a $x$.",
                "latex": [
                    "$\\int_0^a b \\, dx = b \\int_0^a \\, dx$",
                    "$= b \\cdot [x]_0^a$",
                    "$= b \\cdot (a - 0)$",
                    "$= ab$"
                ]
            },
            {
                "title": "Solución",
                "description": "El área del rectángulo es:",
                "latex": [
                    "$A = ab$"
                ]
            }
        ]

    },
    {
        id: "elipse",
        label: "Elipse",
        type: "2D",
        icon: "tabler:circle",
        figureData: [
            {
                id: "a",
                label: "Semieje mayor",
                description: "Distancia desde el centro hasta el borde de la elipse en la dirección del eje mayor.",
                initialValue: 1
            },
            {
                id: "b",
                label: "Semieje menor",
                description: "Distancia desde el centro hasta el borde de la elipse en la dirección del eje menor.",
                initialValue: 1
            },
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el área de una elipse",
                "description": "Resolvemos la integral que representa el área de una elipse con semiejes $a$ y $b$. La elipse tiene la ecuación $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ y calculamos el área en el primer cuadrante y luego multiplicamos por 4.",
                "latex": [
                    "$A = 4 \\int_0^a \\int_0^{b \\sqrt{1 - \\frac{x^2}{a^2}}} dy \\, dx$"
                ]
            },
            {
                "title": "Paso 1 - Resolver la Integral Interior",
                "description": "Primero integramos con respecto a $y$, manteniendo $x$ constante.",
                "latex": [
                    "$\\int_0^a \\int_0^{b \\sqrt{1 - \\frac{x^2}{a^2}}} dy \\, dx = \\int_0^a \\left[ y \\right]_0^{b \\sqrt{1 - \\frac{x^2}{a^2}}} \\, dx$",
                    "$= \\int_0^a b \\sqrt{1 - \\frac{x^2}{a^2}} \\, dx$"
                ]
            },
            {
                "title": "Paso 2 - Sustitución para la Integral Exterior",
                "description": "Utilizamos una sustitución trigonométrica $x = a \\sin(\\theta)$, para simplificar la integral. Entonces, $dx = a \\cos(\\theta) \\, d\\theta$ y el límite superior cambia cuando $x = a$ a $\\theta = \\frac{\\pi}{2}$.",
                "latex": [
                    "$\\int_0^a b \\sqrt{1 - \\frac{x^2}{a^2}} \\, dx = \\int_0^{\\frac{\\pi}{2}} b \\sqrt{1 - \\sin^2(\\theta)} \\cdot a \\cos(\\theta) \\, d\\theta$",
                    "$= ab \\int_0^{\\frac{\\pi}{2}} \\cos^2(\\theta) \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 3 - Uso de Identidad para Simplificar",
                "description": "Usamos la identidad $\\cos^2(\\theta) = \\frac{1 + \\cos(2\\theta)}{2}$ y resolvemos la integral.",
                "latex": [
                    "$ab \\int_0^{\\frac{\\pi}{2}} \\cos^2(\\theta) \\, d\\theta = ab \\int_0^{\\frac{\\pi}{2}} \\frac{1 + \\cos(2\\theta)}{2} \\, d\\theta$",
                    "$= \\frac{ab}{2} \\int_0^{\\frac{\\pi}{2}} (1 + \\cos(2\\theta)) \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 4 - Evaluación de la Integral",
                "description": "Integramos término a término y evaluamos los límites.",
                "latex": [
                    "$= \\frac{ab}{2} \\left[ \\theta + \\frac{\\sin(2\\theta)}{2} \\right]_0^{\\frac{\\pi}{2}}$",
                    "$= \\frac{ab}{2} \\cdot \\frac{\\pi}{2}$",
                    "$= \\frac{\\pi ab}{4}$"
                ]
            },
            {
                "title": "Solución",
                "description": "El área total de la elipse es entonces:",
                "latex": [
                    "$A = \\pi ab$"
                ]
            }
        ]
    },
    {
        id: "esfera",
        label: "Esfera",
        type: "3D",
        icon: "tabler:sphere",
        figureData: [
            {
                id: "r",
                label: "Radio",
                description: "Distancia desde el centro hasta cualquier punto de la superficie de la esfera.",
                initialValue: 1
            }
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el área de la esfera",
                "description": "Resolvemos la integral que representa el área superficial de una esfera de radio $r$. La fórmula para el área superficial de una esfera es $4\\pi r^2$. Vamos a derivarla utilizando coordenadas esféricas.",
                "latex": [
                    "$A = 4 \\int_0^{\\pi} \\int_0^{2\\pi} r^2 \\sin(\\theta) \\, d\\phi \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 1 - Resolver la Integral Interior",
                "description": "Integramos con respecto a $\\phi$ (azimutal), manteniendo $\\theta$ constante.",
                "latex": [
                    "$\\int_0^{\\pi} \\int_0^{2\\pi} r^2 \\sin(\\theta) \\, d\\phi \\, d\\theta = \\int_0^{\\pi} r^2 \\sin(\\theta) [\\phi]_0^{2\\pi} \\, d\\theta$",
                    "$= \\int_0^{\\pi} r^2 \\sin(\\theta) (2\\pi) \\, d\\theta$",
                    "$= 2\\pi r^2 \\int_0^{\\pi} \\sin(\\theta) \\, d\\theta$"
                ]
            },
            {
                "title": "Paso 2 - Resolver la Integral Exterior",
                "description": "Integramos con respecto a $\\theta$ (polar).",
                "latex": [
                    "$2\\pi r^2 \\int_0^{\\pi} \\sin(\\theta) \\, d\\theta = 2\\pi r^2 [-\\cos(\\theta)]_0^{\\pi}$",
                    "$= 2\\pi r^2 [-(\\cos(\\pi) - \\cos(0))]$",
                    "$= 2\\pi r^2 [-( -1 - 1)]$",
                    "$= 2\\pi r^2 (2)$",
                    "$= 4\\pi r^2$"
                ]
            },
            {
                "title": "Solución",
                "description": "El área superficial de la esfera es:",
                "latex": [
                    "$A = 4\\pi r^2$"
                ]
            }
        ]
    },
    {
        id: "cubo",
        label: "Cubo",
        type: "3D",
        icon: "tabler:cube",
        figureData: [
            {
                id: "l",
                label: "Longitud del lado",
                description: "Medida de cada arista del cubo.",
                initialValue: 1
            }
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el volumen del cubo",
                "description": "Calculamos el volumen de un cubo con arista de longitud $a$ usando una integral triple.",
                "latex": [
                    "$V = \\int_0^a \\int_0^a \\int_0^a \\, dz \\, dy \\, dx$"
                ]
            },
            {
                "title": "Paso 1 - Resolver la Integral Interior",
                "description": "Integramos primero con respecto a $z$, manteniendo $x$ y $y$ constantes.",
                "latex": [
                    "$\\int_0^a \\int_0^a \\int_0^a \\, dz \\, dy \\, dx = \\int_0^a \\int_0^a \\left[ z \\right]_0^a \\, dy \\, dx$",
                    "$= \\int_0^a \\int_0^a (a - 0) \\, dy \\, dx$",
                    "$= \\int_0^a \\int_0^a a \\, dy \\, dx$"
                ]
            },
            {
                "title": "Paso 2 - Resolver la Integral Media",
                "description": "Ahora integramos con respecto a $y$, manteniendo $x$ constante.",
                "latex": [
                    "$\\int_0^a \\int_0^a a \\, dy \\, dx = \\int_0^a a \\left[ y \\right]_0^a \\, dx$",
                    "$= \\int_0^a a \\cdot a \\, dx$",
                    "$= \\int_0^a a^2 \\, dx$"
                ]
            },
            {
                "title": "Paso 3 - Resolver la Integral Exterior",
                "description": "Integramos finalmente con respecto a $x$.",
                "latex": [
                    "$\\int_0^a a^2 \\, dx = a^2 \\int_0^a \\, dx$",
                    "$= a^2 \\cdot [x]_0^a$",
                    "$= a^2 \\cdot a$",
                    "$= a^3$"
                ]
            },
            {
                "title": "Solución",
                "description": "El volumen del cubo es:",
                "latex": [
                    "$V = a^3$"
                ]
            }
        ]
    },
    {
        id: "cono",
        label: "Cono",
        type: "3D",
        icon: "tabler:cone",
        figureData: [
            {
                id: "r",
                label: "Radio de la base",
                description: "El radio de la base circular del cono.",
                initialValue: 1
            },
            {
                id: "h",
                label: "Altura",
                description: "La distancia desde la base hasta el vértice del cono.",
                initialValue: 1
            }
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el volumen del cono",
                "description": "Calculamos el volumen de un cono con altura $h$ y radio de la base $r$ usando una integral doble en coordenadas cilíndricas.",
                "latex": [
                    "$V = \\int_0^h \\int_0^{\\frac{r}{h}z} 2\\pi r' \\, dr' \\, dz$"
                ]
            },
            {
                "title": "Paso 1 - Configuración de la Integral en Coordenadas Cilíndricas",
                "description": "Establecemos la integral en coordenadas cilíndricas, donde el radio de cada sección horizontal varía linealmente de $0$ a $r$ en función de la altura $z$. Para cada altura $z$, el radio es $r' = \\frac{r}{h}z$.",
                "latex": [
                    "$V = \\int_0^h \\int_0^{\\frac{r}{h}z} 2\\pi r' \\, dr' \\, dz$"
                ]
            },
            {
                "title": "Paso 2 - Resolver la Integral Interior",
                "description": "Integramos con respecto a $r'$ primero.",
                "latex": [
                    "$\\int_0^h \\int_0^{\\frac{r}{h}z} 2\\pi r' \\, dr' \\, dz = \\int_0^h 2\\pi \\left[ \\frac{r'^2}{2} \\right]_0^{\\frac{r}{h}z} \\, dz$",
                    "$= \\int_0^h 2\\pi \\cdot \\frac{1}{2} \\left( \\frac{r}{h}z \\right)^2 \\, dz$",
                    "$= \\int_0^h \\pi \\cdot \\frac{r^2}{h^2} z^2 \\, dz$"
                ]
            },
            {
                "title": "Paso 3 - Resolver la Integral Exterior",
                "description": "Integramos ahora con respecto a $z$.",
                "latex": [
                    "$\\pi \\cdot \\frac{r^2}{h^2} \\int_0^h z^2 \\, dz = \\pi \\cdot \\frac{r^2}{h^2} \\left[ \\frac{z^3}{3} \\right]_0^h$",
                    "$= \\pi \\cdot \\frac{r^2}{h^2} \\cdot \\frac{h^3}{3}$",
                    "$= \\frac{1}{3} \\pi r^2 h$"
                ]
            },
            {
                "title": "Solución",
                "description": "El volumen del cono es:",
                "latex": [
                    "$V = \\frac{1}{3} \\pi r^2 h$"
                ]
            }
        ]
    },
    {
        id: "cilindro",
        label: "Cilindro",
        type: "3D",
        icon: "tabler:cylinder",
        figureData: [
            {
                id: "r",
                label: "Radio de la base",
                description: "El radio de la base circular del cilindro.",
                initialValue: 1
            },
            {
                id: "h",
                label: "Altura",
                description: "La distancia entre las dos bases del cilindro (altura del cilindro).",
                initialValue: 1
            }
        ],
        latexSteps: [
            {
                "title": "Integral para hallar el área lateral del cilindro",
                "description": "Calculamos el área lateral de un cilindro de radio $r$ y altura $h$ utilizando una integral en coordenadas cilíndricas.",
                "latex": [
                    "$A = \\int_0^{2\\pi} \\int_0^h r \, dz \, d\\theta$"
                ]
            },
            {
                "title": "Paso 1 - Configuración de la Integral",
                "description": "La integral está en coordenadas cilíndricas, donde $r$ es el radio de la base del cilindro, y $h$ es la altura. El ángulo $\\theta$ varía de $0$ a $2\\pi$, y $z$ varía de $0$ a $h$.",
                "latex": [
                    "$A = \\int_0^{2\\pi} \\int_0^h r \, dz \, d\\theta$"
                ]
            },
            {
                "title": "Paso 2 - Resolver la Integral Interior",
                "description": "Integramos con respecto a $z$ primero, manteniendo $\\theta$ constante.",
                "latex": [
                    "$\\int_0^{2\\pi} \\int_0^h r \, dz \, d\\theta = \\int_0^{2\\pi} r [z]_0^h \, d\\theta$",
                    "$= \\int_0^{2\\pi} r h \, d\\theta$"
                ]
            },
            {
                "title": "Paso 3 - Resolver la Integral Exterior",
                "description": "Ahora integramos con respecto a $\\theta$. Como $r$ y $h$ son constantes, la integral con respecto a $\\theta$ es simplemente una multiplicación por $2\\pi$.",
                "latex": [
                    "$\\int_0^{2\\pi} r h \, d\\theta = r h [\\theta]_0^{2\\pi}$",
                    "$= r h (2\\pi - 0)$",
                    "$= 2\\pi r h$"
                ]
            },
            {
                "title": "Solución",
                "description": "El área lateral del cilindro es:",
                "latex": [
                    "$A = 2\\pi r h$"
                ]
            }
        ]
    },
]