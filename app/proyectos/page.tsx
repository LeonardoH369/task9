import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Proyectos' };
export const dynamic = 'force-dynamic';

type Project = {
    id: number;
    category: string;
    title: string;
    description: string;
    artwork: 'identity' | 'type' | 'grid';
};

const artwork = {
    identity: <div className="card-art art-one" aria-hidden="true"><i /><i /></div>,
    type: <div className="card-art art-two" aria-hidden="true">Aa</div>,
    grid: <div className="card-art art-three" aria-hidden="true"><i /><i /><i /></div>,
};

async function loadProjects(): Promise<Project[] | null> {
    const base = process.env.API_BASE_URL || 'http://127.0.0.1:3221';
    try {
        const response = await fetch(new URL('/api/projects', base), {
            cache: 'no-store',
            signal: AbortSignal.timeout(5000),
        });
        if (!response.ok) return null;
        return await response.json();
    } catch {
        return null;
    }
}

export default async function Proyectos() {
    const projects = await loadProjects();

    return (
        <>
            <p className="kicker">02 / PROYECTOS</p>
            <h1>Proyectos</h1>
            <p className="intro">Ejercicios de identidad, tipografía y composición.</p>
            {projects === null ? (
                <p role="status">Los proyectos no están disponibles por el momento.</p>
            ) : projects.length === 0 ? (
                <p>Aún no hay proyectos en el catálogo.</p>
            ) : (
                <div className="cards">
                    {projects.map((project) => (
                        <article className="card" key={project.id}>
                            {artwork[project.artwork]}
                            <p className="kicker">{project.category}</p>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </article>
                    ))}
                </div>
            )}
        </>
    );
}
