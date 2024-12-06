import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Функция для обработки формы отправки.
 *
 * @remarks
 * Эта функция ожидает POST-запрос с JSON-телом, содержащим поля `firstName`, `email` и `message`.
 * Она проверяет наличие этих полей и возвращает сообщение об успехе, если все поля присутствуют.
 * В противном случае возвращается ошибка.
 *
 * @param req - Объект запроса Next.js.
 * @param res - Объект ответа Next.js.
 *
 * @returns Объект ответа Next.js с кодом состояния 200 и сообщением об успехе,
 *          либо объект ответа с кодом состояния 400 и сообщением об ошибке.
 */

interface RequestBody {
	firstName: string;
	email: string;
	message: string;
}


export const formHandler = (req: NextApiRequest, res: NextApiResponse) => {
    const body = req.body as RequestBody;
    
    if (!body.firstName || !body.email || !body.message) {
        return res.status(400).json({ data: 'Имя, электронная почта и сообщение обязательны для заполнения' });
    }
    
    return res.status(200).json({ data: 'Успешно!' });
};
