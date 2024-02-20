import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippetEditForm";

interface SnippetProps {
	params: {
		id: string
	}
}

export default async function SnippetEdit(props: SnippetProps) {

	const id = parseInt(props.params.id);

	const snippet = await db.snippet.findFirst({
      where: { id }
   });

	if(!snippet) {
		return notFound();
	}

	return(
		<>
			<SnippetEditForm snippet={snippet}/>
		</>
	)
}