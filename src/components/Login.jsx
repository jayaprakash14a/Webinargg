import { useRef, useState } from "react"
import { Buttons } from "./Buttons";

export const Login = ({}) => {

    const userRef = useRef();
    const [disabled, setDisabled] = useState(true);
    function onEmailChange(){

    }

    function onBtnClick(){

    }

    return(
        <>
            
            <div className="flex flex-col items-center w-80 justify-center">
                <div className="mb-8 text-xl font-medium">Let's Get Started</div>
                <div className="w-full">
                    <input type="text" ref={userRef} placeholder="Email Id" className="bg-blue-500 rounded-lg px-2 py-3 text-xs text-gray-200 border-gray-200 mb-8 w-full"
                            onChange={onEmailChange}
                        />
                    <Buttons disabled={disabled} onBtnClick={onBtnClick} >Continue</Buttons>
                </div>
            </div>
        </>
    )
}