const wordCount = () => {
    const $totalWords = Array.prototype.slice.call(document.querySelectorAll('.readTime'), 0);

    if ($totalWords.length > 0) {
        $totalWords.forEach(el => {
            const totalWords = el.innerHTML;
            const timeToRead = totalWords / 200;
            const timeInt = Math.round(timeToRead);
            el.innerHTML = timeInt;
        });
    }
};

export { wordCount };