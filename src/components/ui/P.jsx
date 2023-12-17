const P = ({props,text,styles}) => {
    return (
        <p 
        className={`mx-4 text-sm font-normal text-left ${styles}`}
        {...props}
        >
            {text}
        </p>
    )
}
export default P;