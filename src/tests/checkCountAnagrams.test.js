const anagrams = require('../questions/checkCountAnagrams');

describe('checkCountAnagrams', () => {
    test('Should return message error', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(anagrams(105)).toBe(undefined);
        expect(spyLog).toBeCalledWith("Não é permitido número!");

        spyLog.mockRestore();
    });

    test('Should return right message for empty result', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(anagrams('a')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Não há anagramas!");

        spyLog.mockRestore();
    });

    test('Should return right message for result if anagrams', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(anagrams('ovo')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Total de 2 anagramas. Que são: [o,o] [ov,vo]");

        spyLog.mockRestore();
    });
});