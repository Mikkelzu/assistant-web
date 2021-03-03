import Config from './config/config'
import AssistantModule from './assistant/assistant-module'

class Main {

    private _config: any
    constructor() {
        this._config = new Config()

        this.bootstrap()
    }

    private bootstrap(): void {
        // do bootstrap like cfg loading etc
        this._config.loadCfg()
    }
}