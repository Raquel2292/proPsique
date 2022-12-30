import Link from "next/link";

export default function ContactForm() {
  return (
    <div className="link">
      <Link href="/">
        <h1>ProPsique</h1>
      </Link>
      
      <div>
      <a href = "mailto: raquel.blazquez.estrada@gmail.com">Mándame un correo</a>
      </div>

      <div>
      <a href="tel:+34630976430">Teléfono</a>
      </div>
 
    </div>
  );
}
