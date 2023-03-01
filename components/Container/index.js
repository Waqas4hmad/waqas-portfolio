
export default function Container({ children, rest }) {
    return (
        <div className={` w-full mx-auto md:w-[95%] `} {...rest}>
            {children}
        </div>
    )
}
