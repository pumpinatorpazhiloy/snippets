import { db } from "@/db";
import { redirect } from "next/navigation";

export default function CreateSnippet() {

	async function createSnippet(formData: FormData) {
		// this nees to be a server acition
		'use server';

		// check the users inputs and make sure theyre vallid
		const title = formData.get('title') as string;
		const code = formData.get('code') as string;
		// create a new record in the db
		const snippet = await db.snippet.create({
			data: {
				title,
            code
			}
		});

		console.log(snippet);
		// redirect the user back to the root route
		redirect('/');
	}

	return (
		 <form action={createSnippet}>
			 <h3 className="font-bold m-3">Create a Sniooet</h3>
			 <div className="flex flex-col gap-4">
				 <div className="flex gap-4">
					 <label className="w-12" htmlFor="title">Title</label>
					 <input type="text" name="title" className="border rounded p-2 w-full"/>
				 </div>
			 </div>
			 <div className="flex flex-col gap-4">
				 <div className="flex gap-4">
					 <label className="w-12" htmlFor="code">Code</label>
					 <textarea name="code" id="code" className="border rounded p-2 w-full"/>
				 </div>
				 <button type="submit" className="border rounded p-2 bg-blue-200">Create</button>
			 </div>
		 </form>
	);
 }