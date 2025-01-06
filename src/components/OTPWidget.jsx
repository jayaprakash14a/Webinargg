import { useEffect, useRef, useState } from "react"

export const OTPWidget = ({ boxCount, setOTP, isValid }) => {

    const [boxCollection, setBoxCollection] = useState([]);
    const inputRefs = useRef([]);
    const boxes = new Array(boxCount).fill(boxCount);

    function handleOnChange(e, index) {
        let valid = false;

        if(!e.currentTarget.value){
            inputRefs.current[index-1] && inputRefs.current[index-1].focus();
        }else{
            const numberRegex = /[0-9]/;
            valid = numberRegex.test(e.currentTarget.value.toString());
        }

        if (valid) {
            inputRefs.current[index].value = e.nativeEvent.data;
            inputRefs.current[index+1] && inputRefs.current[index+1].focus();
        } else {
            e.currentTarget.value = null;
        }

        let otpStr = "";
        for(let i=0; i<boxCount; i++){
            
            otpStr += inputRefs.current[i].value;
        }
        setOTP(otpStr);


    }

    useEffect(() => {

        setBoxCollection([...boxes.map((x, index) => {
            return <input key={index} type="text"
                ref={(elem) => (inputRefs.current[index] = elem)}
                className={`bg-blue-500 rounded-lg border px-2.5 text-xs text-gray-200 border-gray-200 mb-8 w-8 h-8 ${isValid ? "border-gray-200" : "border-red-500"} `}
                onChange={(e) => handleOnChange(e, index)}
            />
        })]);

    }, [isValid])

    return (
        <>
            <div className="flex gap-4 justify-center">
                {boxCollection}
            </div>
        </>
    )
}