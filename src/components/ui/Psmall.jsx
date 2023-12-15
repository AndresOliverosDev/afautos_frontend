const Psmall = ({props,text}) => {
    return (
        <p 
        className="mx-4 text-xs font-normal"
        {...props}
        >
            {text}
        </p>
    )
}
export default Psmall;