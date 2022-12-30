import Link from "next/link";

export default function ContactForm() {
  return (
    <div>
      <Link href="/">
        <h1>ProPsique</h1>
      </Link>
      
      <form action="/send-data-here" method="post">
        <label for="first">Nombre:</label>
        <input type="text" id="first" name="first" />
        <label for="last">Apellido:</label>
        <input type="text" id="last" name="last" />
        <textarea type="text"></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
