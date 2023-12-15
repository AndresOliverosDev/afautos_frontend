const P = ({props,text}) => {
    return (
        <p 
        className="mx-4 text-sm font-normal"
        {...props}
        >
            {text}
        </p>
    )
}
export default P;