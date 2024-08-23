import { NextApiRequest, NextApiResponse } from 'next';

interface RequestBody {
	firstName: string;
	email: string;
	message: string;
}

export const formHandler = (req: NextApiRequest, res: NextApiResponse) => {
	const body = req.body as RequestBody;
	
	if (!body.firstName || !body.email || !body.message) {
		return res.status(400).json({ data: 'Name, email, and message are required' });
	}
	
	return res.status(200).json({ data: 'Success!' });
};
