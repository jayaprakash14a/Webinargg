import { useState } from "react";
import { OTPWidget } from "./OTPWidget"
import { Buttons } from "./Buttons";

export const OTPVerification = ({}) => {

    const [isValid, setIsValid] = useState(true);
    const [verified, setVerified] = useState(false);
    const [boxCount, setBoxCount] = useState(6);
    const [otp, setOTP] = useState("");
    function validationcheck(e){
        const numberRegex = /[0-9]/;
        numberRegex.test(e.currentTarget.value.toString());
        setIsValid(false);
    }

    function onBtnClick(){
        if(otp && otp.length === boxCount){
            setVerified(true);
            setBoxCount(6);
        }else{
            setIsValid(false);
        }
    }

    return (
        <>
            <div className="flex flex-col items-center w-fit justify-center">
            {!verified ? <>
                <div className="mb-8 text-xl font-medium">Check Your Email For A Code</div>
                <div className="text-sm text-gray-400 mb-3">Please enter the verification code sent to your email id </div>
                <div className="w-full flex flex-col items-center">
                    <OTPWidget boxCount={boxCount} setOTP={setOTP} isValid={isValid} />
                    {!isValid && <div className="text-red-500 mb-4">Please enter valid otp</div>}
                    <Buttons onBtnClick={onBtnClick} >Verify</Buttons>
                </div></>
                :
                <div className="text-green-700 mt-2">Verified successfully</div>
            }
            </div>
        </>
    )
}