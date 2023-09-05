export const classNames = (
    styles: string,
    modes: Record<string, boolean | string> = {},
    additional: string[] = [],
):string => [
    styles,
    ...Object.entries(modes)
        .filter(([_, value]) => Boolean(value))
        .map(([key, value]) => (value ? key : '')),
    ...additional.filter(Boolean),
].join(' ');
