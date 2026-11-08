'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState, type ReactNode } from 'react';

const items = [
    { path: '/', label: 'Inicio', icon: 'bi-house-door' },
    { path: '/proyectos', label: 'Proyectos', icon: 'bi-grid' },
    { path: '/contacto', label: 'Contacto', icon: 'bi-envelope' },
];

export default function AdminShell({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null);

    function closeSidebar() {
        setSidebarOpen(false);
        if (toggle.current?.offsetParent) toggle.current.focus();
    }

    return (
        <div
            className={`app-wrapper task9 sidebar-expand-lg${sidebarOpen ? ' sidebar-open' : ''}`}
            onKeyDown={(event) => {
                if (event.key === 'Escape' && sidebarOpen) closeSidebar();
            }}
        >
            <header className="app-header navbar">
                <div className="container-fluid panel-header">
                    <div className="header-start">
                        <button
                            ref={toggle}
                            type="button"
                            className="menu-toggle d-lg-none"
                            aria-label={sidebarOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-controls="menu-lateral"
                            aria-expanded={sidebarOpen}
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <i className="bi bi-list" aria-hidden="true" />
                        </button>
                        <span className="panel-title">Panel de administración</span>
                    </div>
                    <span className="task-label">Tarea 9</span>
                </div>
            </header>

            <aside id="menu-lateral" className="app-sidebar" data-bs-theme="dark">
                <div className="sidebar-brand">
                    <Link href="/" className="brand-link" onClick={() => sidebarOpen && closeSidebar()}>
                        <span className="brand-mark" aria-hidden="true">✳</span>
                        <span>Cuaderno de diseño</span>
                    </Link>
                </div>
                <div className="sidebar-wrapper">
                    <nav aria-label="Menú lateral">
                        <ul className="nav sidebar-menu flex-column">
                            {items.map(({ path, label, icon }) => {
                                const active = pathname === path;
                                return (
                                    <li className="nav-item" key={path}>
                                        <Link
                                            href={path}
                                            className={`nav-link${active ? ' active' : ''}`}
                                            aria-current={active ? 'page' : undefined}
                                            onClick={() => sidebarOpen && closeSidebar()}
                                        >
                                            <i className={`nav-icon bi ${icon}`} aria-hidden="true" />
                                            <span>{label}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>

            {sidebarOpen && <button className="mobile-overlay d-lg-none" aria-label="Cerrar navegación" onClick={closeSidebar} />}

            <main className="app-main" id="contenido">
                <div className="app-content">
                    <div className="content-inner">{children}</div>
                </div>
            </main>

            <footer className="app-footer">
                <strong>Leonardo Hinojosa Castro</strong>
                <span>Actividad 11 · Cuaderno de diseño</span>
            </footer>
        </div>
    );
}
