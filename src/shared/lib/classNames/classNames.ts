export type Modes = Record<string, boolean | string | undefined>;

export const classNames = (
    styles: string,
    modes: Modes = {},
    additional: Array<string | undefined> = [],
):string => [
    styles,
    ...Object.entries(modes)
        .filter(([_, value]) => Boolean(value))
        .map(([key, value]) => (value ? key : '')),
    ...additional.filter(Boolean),
].join(' ');
