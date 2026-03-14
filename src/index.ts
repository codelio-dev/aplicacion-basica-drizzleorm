import { eq } from "drizzle-orm";
import { db } from "./db/database";
import { authors } from "./db/schema";

async function main() {
	// Crear una pareja de nuevos autores
	const newAuthor = await db
		.insert(authors)
		.values({
			name: "Pedro Pablo",
			email: "pedro.pablo@example.com",
		})
		.returning();
	console.log("Nuevo autor creado:", newAuthor);

	const secondNewAuthor = await db
		.insert(authors)
		.values({
			name: "Jose Juan",
			email: "jose.juan@example.com",
		})
		.returning();
	console.log("Segundo autor creado:", secondNewAuthor);

	// Leer todos los autores
	const allAuthors = await db.select().from(authors);
	console.log("Todos los autores:", allAuthors);

	// Leer un autor por correo electrónico
	const author = await db
		.select()
		.from(authors)
		.where(eq(authors.email, "pedro.pablo@example.com"));
	console.log("Autor encontrado:", author);

	// Actualizar el nombre de un autor
	const updatedAuthor = await db
		.update(authors)
		.set({
			name: "Pedro P.",
		})
		.where(eq(authors.email, "pedro.pablo@example.com"));
	console.log("Autor actualizado:", updatedAuthor);

	// Eliminar un autor
	const deletedAuthor = await db
		.delete(authors)
		.where(eq(authors.email, "pedro.pablo@example.com"));
	console.log("Autor eliminado:", deletedAuthor);
}

main();
