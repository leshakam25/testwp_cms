import DOMPurify from 'dompurify';

const htmlCleaner = (html: string) => {
	return DOMPurify.sanitize(html);
}

export default htmlCleaner;