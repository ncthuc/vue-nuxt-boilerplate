export const DEVICE_TYPE = {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
};

export const deviceEnquire = function (callback) {
    const matchDesktop = {
        match: () => {
            callback && callback(DEVICE_TYPE.DESKTOP)
        }
    };

    const matchLablet = {
        match: () => {
            callback && callback(DEVICE_TYPE.TABLET)
        }
    };

    const matchMobile = {
        match: () => {
            callback && callback(DEVICE_TYPE.MOBILE)
        }
    };

    if (process.client) {
        let enquireJs = require('enquire.js');
        enquireJs
            .register('screen and (max-width: 576px)', matchMobile)
            .register('screen and (min-width: 576px) and (max-width: 1199px)', matchLablet)
            .register('screen and (min-width: 1200px)', matchDesktop)
    }
};
