import { LightningElement } from 'lwc';

export default class LwcComp12_Tabset extends LightningElement {
    tabSelected = 'Name';

    myname = 'Roopa';
    age = '25';
    city = 'Bangalore';

    handleTabChange(event) {
        this.tabSelected = event.target.value;
    }
}