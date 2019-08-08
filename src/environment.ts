class Config {
    public APP_NAME?: string;

    constructor(appName: string) {
        this.APP_NAME = appName;
    }
}

let environment: Config;

if (process.env.REACT_APP_ENV === 'production') {
    environment = new Config('APP IN PROD');
}

if (process.env.REACT_APP_ENV === 'development') {
    environment = new Config('APP IN DEV');
}

if (process.env.REACT_APP_ENV === 'test') {
    environment = new Config('APP IN TEST');
}

export {environment}