import {useState} from 'react';
interface ButtonProperties{
    color: string;
    children: string;
}
export function Button(props: ButtonProperties){
    const [counter,setCounter] = useState(1);

    function increment(){
        setCounter(counter+1);
    }

    return (
        <button type="button" style={{backgroundColor: props.color}} onClick={increment}>
            {props.children}
            <strong>({counter})</strong>
        </button>
    );
}