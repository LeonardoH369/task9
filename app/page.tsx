import Link from 'next/link';

export default function Inicio() {
    return (
        <section className="home-grid">
            <div>
                <p className="kicker">01 / INICIO</p>
                <h1>Cuaderno<br />de diseño</h1>
                <p className="intro">Una colección de ejercicios de identidad visual, composición y tipografía.</p>
                <Link className="button" href="/proyectos">
                    Ver proyectos <span aria-hidden="true">↗</span>
                </Link>
            </div>
            <div className="poster" aria-hidden="true">
                <span>COMPOSICIÓN / 01</span>
                <div className="poster-shapes"><i /><i /><i /><i /></div>
                <span>FORMA Y COLOR</span>
            </div>
        </section>
    );
}
