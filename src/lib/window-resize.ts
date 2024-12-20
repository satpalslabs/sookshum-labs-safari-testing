import { useEffect, useState } from "react"

function WindowResize() {
    const [size, setSize] = useState<{
        width: number | undefined;
        height: number | undefined
    }>({
        width: undefined,
        height: undefined
    })

    const handleResize = () => setSize(() => ({
        width: window.innerWidth,
        height: window.innerHeight
    }))

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        // Clean up the event listener on component unmount
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return size;
}
export default WindowResize;