export default class AssistantHelpers {

    private _hasPermissions: boolean | undefined

    constructor() {

    }

    
    public checkForPermissions(): boolean | undefined {
        // check for microphone access permissions.

        return this._hasPermissions
    }
}