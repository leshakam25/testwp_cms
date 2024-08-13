import DOMPurify from "isomorphic-dompurify";

export const htmlCleaner = (html: string): string => {
		return DOMPurify.sanitize(html);
};

export default htmlCleaner;


//РАБОТАЕТ ТОЛЬКО В КЛИЕНТСКИХ КОМПОНЕНТАХ
//ИСПОЛЬЗОВАТЬ ВСЕГДА С "dangerouslyInnerHTML"
//Dompurify — это библиотека JavaScript, которая обеспечивает быстрый
//и безопасный способ очистки HTML-контента.
//Она предназначена для предотвращения атак Cross-Site Scripting (XSS)
//путём удаления потенциально вредных скриптов из пользовательского ввода.
//Dompurify анализирует элементы HTML и DOM, фильтрует небезопасные теги
//и атрибуты и гарантирует, что на веб-странице будет представлен только безопасный контент.