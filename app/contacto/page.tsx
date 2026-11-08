import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Contacto' };

export default function Contacto() {
    return (
        <section className="contact-grid">
            <div>
                <p className="kicker">03 / CONTACTO</p>
                <h1>Contacto</h1>
                <p className="intro">Usa el repositorio para dejar comentarios sobre los ejercicios o reportar un problema de navegación.</p>
            </div>
            <article className="contact-card">
                <p className="kicker">CANAL DE CONTACTO</p>
                <h2>GitHub</h2>
                <p>Abre un issue con la sección que estabas consultando y una descripción de lo que encontraste.</p>
                <a className="button" href="https://github.com/LeonardoH369/menus/issues">
                    Ir a los issues <span aria-hidden="true">↗</span>
                </a>
            </article>
        </section>
    );
}
