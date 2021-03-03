import AssistantHelpers from './assistant-helpers'

export default class AssistantModule {

    private _assassitantHelpers: any
    constructor() {
        this._assassitantHelpers = new AssistantHelpers()

        if (!this._assassitantHelpers.checkForPermissions()) {
            // show that no permissions are available, request permissions;


        }
    }

    private askForPermissions(): boolean {

        // create logic to see if user has said yes or no to perms.
        // if return true, then user given perms (from input) if false then no.

        if (null) {
            return false
        }

        return true
    }



}