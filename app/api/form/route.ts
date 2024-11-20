import type { IContactForm } from '@/Info/info.interface';
import { NextResponse } from 'next/server';

/**
 * Обрабатывает POST-запросы для отправки формы обратной связи.
 *
 * @remarks
 * Эта функция ожидает JSON-полезную нагрузку, содержащую поля `name`, `email` и `message`.
 *
 * @param req - Объект запроса, содержащий JSON-полезную нагрузку.
 *
 * @returns Объект ответа, содержащий JSON с сообщением об ошибке или успехе.
 *
 * @throws Возвращает исключение, если поля `name`, `email` или `message` отсутствуют в запросе.
 */
export async function POST(req: Request) {
    const body: IContactForm = await req.json();
    
    if (!body.name || !body.email || !body.message) {
        return NextResponse.json({ error: 'Требуется имя, электронная почта и сообщение' }, { status: 400 });
    }
    
    return NextResponse.json({ data: 'Успешно!' }, { status: 200 });
}
