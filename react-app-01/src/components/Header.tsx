
interface Props {
    className?: string;
}

export default function Header({className}: Props) {
    return (
        // flex h-full flex-col justify-between overflow-scroll bg-indigo-500
        <div className={`border-solid border-2 p-5 bg-indigo-500 ${className}`}>
            Header
        </div>
    );
}
