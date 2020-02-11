const defaultWord = '🏄‍♀️';

const hello = (word: string = defaultWord): string => {
  return `Hello ${word}! `;
};
