CREATE TABLE IF NOT EXISTS projects (
    id INT UNSIGNED NOT NULL PRIMARY KEY,
    category VARCHAR(40) NOT NULL,
    title VARCHAR(120) NOT NULL,
    description VARCHAR(300) NOT NULL,
    artwork ENUM('identity', 'type', 'grid') NOT NULL
) DEFAULT CHARACTER SET utf8mb4;

INSERT IGNORE INTO projects (id, category, title, description, artwork) VALUES
    (1, 'Identidad', 'Estudio de marca', 'Un símbolo geométrico y una paleta de dos tonos para una identidad gráfica.', 'identity'),
    (2, 'Tipografía', 'Jerarquía editorial', 'Contraste de tamaños y pesos para distinguir títulos, subtítulos y cuerpo de texto.', 'type'),
    (3, 'Composición', 'Retícula modular', 'Una serie de módulos repetidos con variaciones de color y proporción.', 'grid');
