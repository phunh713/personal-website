import { useEffect, useState } from "react";

const useTypingText = (words: string[]) => {
	const [displayedText, setDisplayedText] = useState<string>("");
	const [finished, setFinished] = useState<boolean>(false);

	useEffect(() => {
		const textArray = words;
		let wordIndex = 0;
		let length = 1;
		const interval = setInterval(() => {
			if (wordIndex >= textArray.length) {
				setFinished(true);
				clearInterval(interval);
				return;
			}

			if (length <= textArray[wordIndex].length + 5) {
				setDisplayedText(textArray[wordIndex].substr(0, length));
				length++;
			} else {
				length = 1;
				wordIndex++;
			}
		}, 150);

        return () => {
            clearInterval(interval)
        }
	}, [words]);

	return { displayedText, finished };
};

export default useTypingText;
