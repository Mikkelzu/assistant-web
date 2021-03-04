import AudioInputModule from '../audio-input/audio-input-module'
export default class AssistantHelpers {

    private _hasPermissions: boolean | undefined
    private audioInputModule: any

    constructor() {

    }

    
    public checkForPermissions(): boolean | undefined {
        // check for microphone access permissions.

        return this._hasPermissions
    }

    public listenForCreateTodo(): void {
        // create a todo with specific parameters from microphone input
        // figure out how to do mic input and NLP (natural language processing) - first only support English

        this.audioInputModule = new AudioInputModule()

        
    }
}