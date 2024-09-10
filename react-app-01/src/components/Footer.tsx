
interface Props {
    className?: string;
}

export default function Footer({className}: Props) {
    return (
        <div className={`border-solid border-2 p-5 bg-green-500 ${className}`}>
            Footer
        </div>
    );
}
