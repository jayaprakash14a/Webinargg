import { useState } from "react"
import { Buttons } from "./Buttons"
import { useNavigate } from "react-router-dom";

export const AgeVerification = ({})=>{
    const [disabled, setDisabled] = useState(true);

    const navigate = useNavigate();

    function validateAge(value){
        const yearREgex = /[0-9]+/;
        const valid = yearREgex.test(value);

        setDisabled(!valid);

        return valid;
    }
    function onBtnClick(){
        if(disabled)
            return
        navigate("/login");

    }

    function onAgeChange(e){
        if(!validateAge(e.currentTarget.value)){

        }

        
    }

    return(
        <>
            <div className="flex flex-col items-center">
                <div className="mb-8 text-xl font-medium">Verify Your Age</div>
                <div className="text-sm text-gray-400 mb-3">Please confirm your birth year. This data will not be stored</div>
                <div className="flex flex-col w-full px-10">
                    <input type="text" placeholder="Your Birth Year" className="bg-blue-500 rounded-lg px-2 py-3 text-xs text-gray-200 border-gray-200 mb-8"
                        onChange={onAgeChange}
                    />
                    <Buttons disabled={disabled} onBtnClick={onBtnClick} >Continue</Buttons>
                </div>
                
            </div>
        </>
    )
}