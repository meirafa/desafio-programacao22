const drawStairs = require('../questions/drawStairs');

describe('drawStairs', () => {
    test('Should return message error if string', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(drawStairs('a')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Precisa ser um número");

        spyLog.mockRestore();
    });

    test('Should validate number zero', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(drawStairs('0')).toBe(undefined);
        expect(spyLog).toBeCalledWith("");

        spyLog.mockRestore();
    });

    test('Should validate number one', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(drawStairs('1')).toBe(undefined);
        expect(spyLog).toBeCalledWith("*");

        spyLog.mockRestore();
    });

    test('Should validate any number', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(drawStairs('6')).toBe(undefined);
        expect(spyLog).toBeCalledWith("     *\n" +
            "    **\n" +
            "   ***\n" +
            "  ****\n" +
            " *****\n" +
            "******");

        spyLog.mockRestore();
    });
});