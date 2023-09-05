import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('styles', () => {
        expect(classNames('className')).toBe('className');
    });
    test('modes', () => {
        expect(classNames(
            'className',
            {
                hovered: true, collapsed: false,
            },
        ))
            .toBe('className hovered');
    });
    test('additional', () => {
        expect(classNames(
            'className',
            {
                hovered: true, collapsed: false,
            },
            ['additional'],
        ))
            .toBe('className hovered additional');
    });
});
