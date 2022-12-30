import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (

    <div>
        <Link className="link" href="/">
          <h1>ProPsique</h1>
        </Link>
      <h1>Adriana Martín</h1>
      <Image
        className="fotoPerfil"
        src="/byn.JPG"
        alt="prueba"
        width={250}
        height={300}
      />
      
        <p className="description">
          Hola, soy Adriana Matín. Soy Psícologa y llevo muchos años ejerciendo.
          Me dedico a tratar a diferentes perfiles. Puedes venir a tomar un café
          y que solucionemos el mundo.
        </p>
      
    <div className="direction">
      <p>☎️ 630.97.64.30 </p>
      <p>🏠 calle berrocal,3</p>
      <p>
      🕛 10:00-14:00 //
        16:30-19:00
      </p>
    </div>
      
    </div>
  );
}
