import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import AdminShell from './admin-shell';
import 'admin-lte/dist/css/adminlte.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './globals.css';

export const metadata: Metadata = {
    title: { default: 'Panel de Cuaderno de diseño', template: '%s | Panel de Cuaderno de diseño' },
    description: 'Tarea 9. Las tres secciones de la Actividad 11 dentro de un panel AdminLTE.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="es">
            <body>
                <AdminShell>{children}</AdminShell>
            </body>
        </html>
    );
}
