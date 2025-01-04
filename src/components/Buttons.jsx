export const Buttons = ({disabled, onBtnClick, children})=>{
    return (
        <div 
            className={`px-8 py-2 ${disabled? "bg-green-300": "bg-blue-200"} rounded-lg text-center cursor-pointer`} 
            onClick={onBtnClick}
            >
            {children}
        </div>
    )
}