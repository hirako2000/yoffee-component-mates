import {Button, Options} from './button';

const options: Options =  {
    name: "y-button"
}
const defaultButton = new Button(options);


const redOptions: Options =  {
    styles: {
        color: "#dd4c4c"
    },
    name: "y-red-button"
}
const redButton = new Button(redOptions);