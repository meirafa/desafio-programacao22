const anagrama = require('../questions/checkCountAnagrama');

describe('checkCountAnagrama', () =>{
    test('Should return message error', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(anagrama(105)).toBe(undefined);
        expect(spyLog).toBeCalledWith("Não é permitido número!");
    })
});