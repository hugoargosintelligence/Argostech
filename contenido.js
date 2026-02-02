// BASE DE DATOS DE ARTÍCULOS DE ARGOS
// Contenido Optimizado para AEO (Respuestas Directas y Estructura)

const articulos = [
    {
        titulo: "Por qué el mantenimiento reactivo está matando tu margen",
        categoria: "Estrategia",
        fecha: "20 Nov 2025",
        imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
        resumen: "Esperar a que una máquina se rompa cuesta 10 veces más que prevenirlo. Analizamos los costes ocultos del 'ya lo arreglaremos'.",
        contenidoHTML: `
            <p>La mayoría de empresas de mantenimiento medianas operan bajo la filosofía de <em>"si funciona, no lo toques"</em>. Esto parece un ahorro a corto plazo, pero los datos de la industria 4.0 dicen lo contrario.</p>
            
            <h2>El coste invisible de la urgencia (Downtime)</h2>
            <p>Cuando una máquina crítica se para sin aviso, no solo pagas la pieza y al técnico. Estás incurriendo en costes ocultos masivos:</p>
            <ul>
                <li><strong>Horas extra de urgencia:</strong> Pagar técnicos fuera de horario habitual.</li>
                <li><strong>Logística express:</strong> Envío de repuestos urgente (hasta 300% más caro).</li>
                <li><strong>Lucro cesante:</strong> La pérdida de producción o servicio del cliente final.</li>
            </ul>
            
            <h2>Cómo cambiar el chip hacia el Preventivo</h2>
            <p>No necesitas sensores IoT de un millón de euros para empezar. El primer paso es <strong>digitalizar el conocimiento</strong>. Si tus técnicos saben qué revisar antes de que falle gracias a un asistente como Argos, pasas de "apagar fuegos" a "prevenir incendios".</p>
            
            <h3>El dato clave</h3>
            <p>En Argos hemos detectado que el <strong>40% de las averías graves</strong> dan avisos previos (ruidos, temperatura, códigos menores) que los técnicos ignoran por falta de acceso rápido al manual de mantenimiento preventivo.</p>
        `
    },

    {
        titulo: "El coste oculto del 'Teléfono Roto': Por qué tus Seniors no facturan",
        categoria: "Productividad",
        fecha: "22 Nov 2025",
        imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
        resumen: "Cada vez que un técnico junior llama a la oficina para preguntar una duda básica, estás pagando dos sueldos para resolver un solo problema.",
        contenidoHTML: `
            <p>Es la escena más común en el sector SAT: Un técnico nuevo llega a una instalación, ve un código de error que no conoce y, en lugar de buscar en la documentación técnica, saca el móvil y llama a su supervisor.</p>
            
            <h2>La Matemática de la Ineficiencia en SAT</h2>
            <p>Cuando esto ocurre, el coste operativo se duplica. Tienes al técnico junior parado esperando respuesta, y al técnico senior (cuyo coste hora es mucho más alto) dejando de hacer tareas de alto valor para actuar de soporte telefónico.</p>
            
            <p>Si tienes 10 técnicos y cada uno hace 2 llamadas al día de 10 minutos, estás perdiendo <strong>más de 15 horas a la semana</strong> de productividad pura. Es casi medio técnico a tiempo completo perdido en llamadas internas.</p>
            
            <h3>Argos como Mentor Digital</h3>
            <p>La solución no es prohibir las llamadas, es hacerlas innecesarias. <strong>Argos</strong> actúa como ese mentor que siempre está disponible. Al responder preguntas técnicas al instante mediante IA, filtramos el 80% de las dudas triviales, dejando a los Seniors libres para resolver los problemas verdaderamente complejos.</p>
        `
    },

    {
        titulo: "Tus manuales en PDF son inútiles en el móvil: La ventaja de la IA Visual",
        categoria: "Tecnología",
        fecha: "24 Nov 2025",
        // HE CAMBIADO ESTA IMAGEN POR UNA QUE FUNCIONA (Ingeniero con tablet):
        imagen: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop",
        resumen: "Hacer scroll en un documento de 500 páginas en una pantalla de 6 pulgadas no es digitalización, es tortura. Descubre la búsqueda visual.",
        contenidoHTML: `
            <p>Muchas empresas creen que se han digitalizado porque han subido todos sus manuales de maquinaria a una nube (Drive, Dropbox o SharePoint). Pero la realidad operativa en campo es muy distinta.</p>
            
            <h2>El infierno del Zoom en PDF</h2>
            <p>Imagina a un técnico con guantes de seguridad, en una sala de máquinas con poca luz, intentando encontrar el esquema eléctrico de la página 342 de un PDF en su móvil. Es lento, frustrante y propenso a errores de interpretación.</p>
            
            <h2>Extracción Inteligente vs. Lectura Tradicional</h2>
            <p>La verdadera eficiencia no es darle el libro entero al técnico, sino darle la página exacta que necesita. La tecnología de <strong>Visión Artificial de Argos</strong> no te obliga a leer el manual completo.</p> 
            
            <p>Tú le envías una foto de la máquina o le preguntas por el "esquema de conexiones del motor X", y el sistema extrae y recorta esa imagen específica del manual. Pasamos de buscar agujas en pajares a tener la solución en la mano en segundos.</p>
        `
    }
];