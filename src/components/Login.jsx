import { useRef, useState } from "react"
import { Buttons } from "./Buttons";
import { useNavigate } from "react-router-dom";

export const Login = ({}) => {

    const userRef = useRef();
    const [disabled, setDisabled] = useState(true);
    const [isValid, setIsValid] = useState(true);

    const navigate = useNavigate();

    function validateEmail(val){
        const emailRegex = /^[^\s@]+[@][^\s@]+[.][^\s@]+$/;

        return emailRegex.test(val);
    }

    function onEmailChange(){
        const valid = validateEmail(userRef.current.value);
        setIsValid(valid);
        setDisabled(!valid);
    }

    function onBtnClick(){
        const emailid = userRef.current.value;
        if(emailid && emailid.length >0 && isValid){
            navigate("/user-verification");
        }
    }

    return(
        <>
            
            <div className="flex flex-col items-center w-80 justify-center">
                <div className="mb-8 text-xl font-medium">Let's Get Started</div>
                <div className="w-full flex flex-col items-center   ">
                    <input type="text" ref={userRef} placeholder="Email Id" className={`bg-blue-500 rounded-lg border px-2 py-3 text-xs text-gray-200 border-gray-200 mb-8 w-full ${isValid ? "border-gray-200" : "border-red-500"} `}
                            onChange={onEmailChange}
                        />
                    {!isValid && <div className="text-red-500 mb-4">Please enter valid email</div>}
                    <Buttons disabled={disabled} onBtnClick={onBtnClick} >Continue</Buttons>
                </div>
            </div>
        </>
    )
}