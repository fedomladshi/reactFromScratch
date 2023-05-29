export const classNames = (styles: string, modes: Record<string, boolean>, additional?: string[]):string=>  {
     return `${styles} ${Object.entries(modes).map(([key,value]) => value ? key : '').join('')} ${additional.join('')}` 
};