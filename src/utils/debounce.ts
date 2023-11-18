export const changeDebounce = <T>(
    callback: (args?: T) => void,
    ms: number = 0,
) => {
    let isFirstTimeCall = true;
    let isDelay = false;
    let timeout: ReturnType<typeof setTimeout>;

    return (args: T) => {
        if (isFirstTimeCall) {
            isFirstTimeCall = false;
            isDelay = true;
            callback(args);
            timeout = setTimeout(() => {
                isDelay = false
            }, ms);
            return;
        }
        const timeoutCallback = () => {
            isDelay = false
            callback(args);
        };
        if (!isDelay) {
            isDelay = true;
            timeout = setTimeout(timeoutCallback, ms)
        } else {
            clearTimeout(timeout);
            timeout = setTimeout(timeoutCallback, ms);
        }
    }
}