import { NextApiRequest, NextApiResponse } from 'next'

// Интерфейс для данных запроса
interface RequestBody {
	name: string;
	email: string;
	message: string;
}

// Обработчик для метода POST
export async function POST(req: NextApiRequest, res: NextApiResponse) {
	const body: RequestBody = req.body;
	
	if (!body.name || !body.email || !body.message) {
		return res.status(400).json({ data: 'Name, email, and message are required' });
	}
	
	return res.status(200).json({ data: 'Success!' });
}

