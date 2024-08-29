import type { IContactForm } from '@/Info/info.interface';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const body: IContactForm = await req.json();
	
	if (!body.name || !body.email || !body.message) {
		return NextResponse.json({ error: 'Name, email, and message is required' }, { status: 400 });
	}
	
	return NextResponse.json({ data: 'Success!' }, { status: 200 });
}
