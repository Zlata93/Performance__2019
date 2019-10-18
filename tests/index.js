const assert = require('assert');

describe('Главная страница', () => {
    // hermione.skip.in('firefox', 'ломается с ошибкой OffsetViewportError: Can not capture the specified region of the viewport.');
    it('успешно загрузилась', function () {
        return this.browser
            .url('/')
            .isExisting('.header-logo')
            .then(exists => {
                assert.ok(exists, 'Главная страница загрузилась')
            })
            .assertView('plain', 'body');
    });
});

describe('Главная страница низ', () => {
    // hermione.skip.in('firefox', 'ломается с ошибкой OffsetViewportError: Can not capture the specified region of the viewport.');
    it('успешно загрузилась', function () {
        return this.browser
            .url('/')
            // .$('footer')
            // .scroll('footer', 1000)
            .moveToObject('footer')
            .then(exists => {
                assert.ok(exists, 'низ страницы')
            })
            .assertView('plain', 'body');
    });
});
