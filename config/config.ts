export default class Config {
    constructor() {

        // if no cfg, then create one
        if (!this.checkForCfg()) {
            this.createCfgFile()
        }

    }

    private createCfgFile(): void {
        // create cfg file in ./config/config.json - creates a default config
    }

    private loadCfg(): void {
        // load cfg file in ./config/config.json
    }

    private checkForCfg(): boolean {

        // if cfg file exists then return out of method
        if (null) {
            return true
        }

        return false
    }
}