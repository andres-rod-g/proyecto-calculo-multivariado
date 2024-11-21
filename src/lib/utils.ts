import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { evaluate, parse } from 'mathjs';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
  };
};


// Función para resolver la expresión paso a paso manteniendo la operación
export function resolverExpresionPasoAPasoLatex(expresionLatex: string): string[] {
  const pasos: string[] = [];

  // Paso 1: Mostrar la expresión original en formato LaTeX
  pasos.push(`$${expresionLatex}$`);

  // Paso 2: Convertir el LaTeX a una expresión matemática comprensible por math.js
  let expresionMath = expresionLatex.replace(/\\cdot/g, '*')
                                     .replace(/\\plus/g, '+')
                                     .replace(/\\minus/g, '-')
                                     .replace(/\\times/g, '*')
                                     .replace(/\\div/g, '/')
                                     .replace(/\\sqrt/g, 'sqrt')
                                     .replace(/\\left\(/g, '(')
                                     .replace(/\\right\)/g, ')');

  // Parsear la expresión para desglosar las operaciones
  let parsedExpr = parse(expresionMath);
  let exprActual = parsedExpr.toString();

  // Desglosamos la operación con cada paso
  let evaluada;
  
  // Desglosar paréntesis paso a paso
  while (exprActual.includes('(')) {
      let parenExpresion = /(\([^\(\)]*\))/g.exec(exprActual);
      if (parenExpresion) {
          // Extraer la subexpresión dentro de los paréntesis
          let subExpresion = parenExpresion[0];
          pasos.push(`$${exprActual}$`);
          
          // Evaluamos esa subexpresión
          evaluada = evaluate(subExpresion);
          // Sustituimos la subexpresión evaluada en la expresión original
          exprActual = exprActual.replace(subExpresion, evaluada.toString());
      }
  }

  // Evaluamos las divisiones como fracciones usando `\frac`
  exprActual = exprActual.replace(/(\d+(\.\d+)?)(\/)(\d+(\.\d+)?)/g, (match, p1, p2, p3, p4) => {
      return `\\frac{${p1}}{${p4}}`;  // Reemplaza las divisiones por fracciones en LaTeX
  });

  // Mostrar el paso después de la última evaluación
  pasos.push(`$${exprActual}$`);

  // Evaluamos el resultado final
  evaluada = evaluate(exprActual);

  // Paso final con el resultado
  pasos.push(`$${evaluada}$`);

  return pasos;
}

