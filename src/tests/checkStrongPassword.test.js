const password = require('../questions/checkStrongPassword');

describe('checkStrongPassword', () => {
    test('Should validate string', () => {
        expect(() => password(1)).toThrow("Senha não é uma string!");
    });

    test('Should return message for empty result', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('')).toBe(undefined);
        expect(spyLog).toBeCalledWith(expect.stringMatching("Faltam 5 critérios para senha segura."));

        spyLog.mockRestore();
    });

    test('Should validate one number', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('1')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Faltam 4 critérios para senha segura.\n" +
            "Precisa conter 6 caracteres\n" +
            "Deve conter no minimo 1 letra minuscula\n" +
            "Deve conter no minimo 1 letra maiuscula\n" +
            "Precisa de um desses caracteres especiais: !@#$%^&*()-+");

        spyLog.mockRestore();
    });

    test('Should validate one lowercase', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('a')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Faltam 4 critérios para senha segura.\n" +
            "Precisa conter 6 caracteres\n" +
            "Precisa conter no mínimo 1 digito\n" +
            "Deve conter no minimo 1 letra maiuscula\n" +
            "Precisa de um desses caracteres especiais: !@#$%^&*()-+");

        spyLog.mockRestore();
    });

    test('Should validate one uppercase', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('A')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Faltam 4 critérios para senha segura.\n" +
            "Precisa conter 6 caracteres\n" +
            "Precisa conter no mínimo 1 digito\n" +
            "Deve conter no minimo 1 letra minuscula\n" +
            "Precisa de um desses caracteres especiais: !@#$%^&*()-+");

        spyLog.mockRestore();
    });

    test('Should validate one special caracter', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('@')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Faltam 4 critérios para senha segura.\n" +
            "Precisa conter 6 caracteres\n" +
            "Precisa conter no mínimo 1 digito\n" +
            "Deve conter no minimo 1 letra minuscula\n" +
            "Deve conter no minimo 1 letra maiuscula");

        spyLog.mockRestore();
    });

    test('Should validate six caracter', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('123456')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Faltam 3 critérios para senha segura.\n" +
            "Deve conter no minimo 1 letra minuscula\n" +
            "Deve conter no minimo 1 letra maiuscula\n" +
            "Precisa de um desses caracteres especiais: !@#$%^&*()-+");

        spyLog.mockRestore();
    });

    test('Should right message strong password', () => {
        const spyLog = jest.spyOn(console, 'log');

        expect(password('Raf@e1')).toBe(undefined);
        expect(spyLog).toBeCalledWith("Senha segura!");

        spyLog.mockRestore();
    });
});