import { Observable } from "tns-core-modules/data/observable";
import { topmost } from "tns-core-modules/ui/frame/frame";

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    onTap() {
        topmost().showModal("alert/alert-page", {
            context: undefined,
            closeCallback: () => { }
        });
    }
}
