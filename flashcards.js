const flashcards = [
    {
        term: "AWS Backup",
        definition: "Servicio centralizado que automatiza y consolida backups en servicios AWS. Permite programar copias de seguridad cross-region, gestionar políticas de retención y cumplimiento."
    },
    {
        term: "AWS Lambda",
        definition: "Servicio de computación serverless que ejecuta código en respuesta a eventos sin necesidad de aprovisionar o administrar servidores. Pagas solo por el tiempo de ejecución."
    },
    {
        term: "Amazon API Gateway",
        definition: "Servicio completamente administrado que facilita la creación, publicación, mantenimiento, monitoreo y protección de APIs REST y WebSocket a cualquier escala."
    },
    {
        term: "Amazon S3 (Simple Storage Service)",
        definition: "Servicio de almacenamiento de objetos escalable, duradero y de alta disponibilidad. Ideal para backups, archivos estáticos, data lakes y hosting de sitios web estáticos."
    },
    {
        term: "Amazon S3 Glacier",
        definition: "Clase de almacenamiento de S3 de bajo costo diseñada para archivado de datos a largo plazo. Ofrece recuperación flexible desde minutos hasta horas."
    },
    {
        term: "S3 Standard-IA (Infrequent Access)",
        definition: "Clase de almacenamiento S3 para datos que se acceden con poca frecuencia pero requieren acceso rápido cuando se necesitan. Costo menor que S3 Standard."
    },
    {
        term: "S3 Cross-Region Replication (CRR)",
        definition: "Funcionalidad que replica automáticamente objetos entre buckets S3 en diferentes regiones AWS para cumplimiento, baja latencia y recuperación ante desastres."
    },
    {
        term: "S3 Block Public Access",
        definition: "Característica de seguridad que previene la exposición pública accidental de buckets y objetos S3 mediante configuraciones centralizadas."
    },
    {
        term: "S3 Transfer Acceleration",
        definition: "Funcionalidad que acelera las transferencias de archivos a S3 utilizando la red de edge locations de CloudFront."
    },
    {
        term: "Amazon EC2 (Elastic Compute Cloud)",
        definition: "Servicio de servidores virtuales escalables en la nube. Permite ejecutar aplicaciones con control completo sobre configuración, sistema operativo y recursos."
    },
    {
        term: "Amazon ECS (Elastic Container Service)",
        definition: "Servicio de orquestación de contenedores completamente administrado que facilita ejecutar, detener y administrar contenedores Docker en un clúster."
    },
    {
        term: "Amazon EKS (Elastic Kubernetes Service)",
        definition: "Servicio administrado de Kubernetes que facilita ejecutar Kubernetes en AWS sin necesidad de instalar y operar tu propio plano de control de Kubernetes."
    },
    {
        term: "AWS Fargate",
        definition: "Motor de computación serverless para contenedores que funciona con ECS y EKS. Elimina la necesidad de aprovisionar y administrar servidores."
    },
    {
        term: "Amazon Lightsail",
        definition: "Servicio diseñado para desarrolladores que necesitan servidores virtuales, almacenamiento, bases de datos y redes a un precio bajo y predecible."
    },
    {
        term: "AWS CodePipeline",
        definition: "Servicio de integración y entrega continua (CI/CD) que automatiza las fases de compilación, prueba e implementación de tu código."
    },
    {
        term: "Amazon CloudFront",
        definition: "Red de entrega de contenido (CDN) global que distribuye contenido a usuarios finales con baja latencia y altas velocidades de transferencia."
    },
    {
        term: "Amazon CloudWatch",
        definition: "Servicio de monitoreo y observabilidad que proporciona datos y estadísticas procesables para monitorear aplicaciones, responder a cambios de rendimiento y optimizar recursos."
    },
    {
        term: "CloudWatch Logs",
        definition: "Funcionalidad de CloudWatch que permite centralizar, almacenar y analizar logs de aplicaciones y sistemas AWS."
    },
    {
        term: "CloudWatch Logs Insights",
        definition: "Servicio de análisis de logs interactivo que permite realizar consultas y análisis sobre logs almacenados en CloudWatch usando un lenguaje de consulta."
    },
    {
        term: "AWS CloudTrail",
        definition: "Servicio que registra y audita todas las llamadas a la API de AWS en tu cuenta. Esencial para seguridad, cumplimiento y auditoría."
    },
    {
        term: "Amazon Route 53",
        definition: "Servicio de DNS escalable y altamente disponible que conecta solicitudes de usuarios a infraestructura en AWS o externa. Incluye registro de dominios."
    },
    {
        term: "Amazon VPC (Virtual Private Cloud)",
        definition: "Servicio que permite crear una red virtual aislada lógicamente en AWS donde puedes lanzar recursos con control completo sobre configuración de red, subredes y seguridad."
    },
    {
        term: "Security Groups",
        definition: "Firewall virtual a nivel de instancia que controla el tráfico entrante y saliente. Funcionan con reglas de permiso (stateful)."
    },
    {
        term: "AWS Direct Connect",
        definition: "Servicio que establece una conexión de red dedicada desde tu centro de datos a AWS, proporcionando mayor ancho de banda y experiencia de red más consistente."
    },
    {
        term: "AWS Transit Gateway",
        definition: "Servicio que conecta VPCs y redes on-premises a través de un hub central, simplificando la arquitectura de red."
    },
    {
        term: "AWS IAM (Identity and Access Management)",
        definition: "Servicio que gestiona el acceso a servicios y recursos AWS de manera segura mediante usuarios, grupos, roles y políticas."
    },
    {
        term: "AWS Config",
        definition: "Servicio que evalúa, audita y evalúa las configuraciones de recursos AWS. Permite rastrear cambios de configuración y verificar cumplimiento."
    },
    {
        term: "Amazon Inspector",
        definition: "Servicio automatizado de evaluación de seguridad que analiza vulnerabilidades en aplicaciones y desviaciones de mejores prácticas."
    },
    {
        term: "AWS Shield",
        definition: "Servicio administrado de protección DDoS que protege aplicaciones ejecutadas en AWS. Shield Standard es gratuito, Shield Advanced es de pago."
    },
    {
        term: "Amazon GuardDuty",
        definition: "Servicio de detección de amenazas que monitorea continuamente actividad maliciosa y comportamiento no autorizado en tu cuenta AWS."
    },
    {
        term: "Amazon Macie",
        definition: "Servicio de seguridad que usa machine learning para descubrir, clasificar y proteger datos sensibles en S3 automáticamente."
    },
    {
        term: "AWS KMS (Key Management Service)",
        definition: "Servicio administrado que facilita crear y controlar claves de cifrado utilizadas para cifrar datos en servicios AWS."
    },
    {
        term: "AWS Certificate Manager (ACM)",
        definition: "Servicio que aprovisiona, administra y despliega certificados SSL/TLS públicos y privados para usar con servicios AWS."
    },
    {
        term: "AWS Security Hub",
        definition: "Servicio que centraliza y prioriza hallazgos de seguridad desde múltiples servicios AWS y herramientas de terceros."
    },
    {
        term: "AWS Trusted Advisor",
        definition: "Herramienta que proporciona recomendaciones en tiempo real para optimizar costos, mejorar rendimiento, seguridad y tolerancia a fallos."
    },
    {
        term: "AWS Organizations",
        definition: "Servicio de administración de cuentas que consolida múltiples cuentas AWS en una organización con facturación unificada y control centralizado de políticas."
    },
    {
        term: "AWS Budgets",
        definition: "Servicio que permite establecer presupuestos personalizados y recibir alertas cuando los costos o uso excedan umbrales definidos."
    },
    {
        term: "AWS Cost Explorer",
        definition: "Herramienta que permite visualizar, entender y administrar costos y uso de AWS a lo largo del tiempo con gráficos detallados."
    },
    {
        term: "AWS Pricing Calculator",
        definition: "Herramienta que permite estimar costos de servicios AWS antes de implementarlos, creando presupuestos detallados."
    },
    {
        term: "Cost Anomaly Detection",
        definition: "Servicio que usa machine learning para detectar gastos inusuales e inesperados en tu cuenta AWS automáticamente."
    },
    {
        term: "Amazon SNS (Simple Notification Service)",
        definition: "Servicio de mensajería pub/sub completamente administrado que permite enviar notificaciones a múltiples suscriptores (email, SMS, HTTP, Lambda)."
    },
    {
        term: "Amazon SQS (Simple Queue Service)",
        definition: "Servicio de cola de mensajes completamente administrado que permite desacoplar y escalar microservicios, sistemas distribuidos y aplicaciones serverless."
    },
    {
        term: "Amazon SES (Simple Email Service)",
        definition: "Servicio de envío de correo electrónico basado en la nube, escalable y rentable para correos transaccionales y de marketing."
    },
    {
        term: "Amazon Kinesis",
        definition: "Plataforma para recopilar, procesar y analizar datos de streaming en tiempo real como video, audio, logs y clickstreams."
    },
    {
        term: "Kinesis Data Analytics",
        definition: "Servicio que permite procesar y analizar datos de streaming en tiempo real utilizando SQL o Apache Flink, con machine learning integrado."
    },
    {
        term: "Amazon Athena",
        definition: "Servicio de consultas interactivo serverless que permite analizar datos en S3 usando SQL estándar sin necesidad de infraestructura."
    },
    {
        term: "AWS Glue",
        definition: "Servicio ETL (Extract, Transform, Load) serverless que facilita preparar y cargar datos para análisis, con catálogo de datos integrado."
    },
    {
        term: "Amazon RDS (Relational Database Service)",
        definition: "Servicio administrado de bases de datos relacionales que soporta MySQL, PostgreSQL, MariaDB, Oracle, SQL Server y Amazon Aurora."
    },
    {
        term: "Amazon DynamoDB",
        definition: "Base de datos NoSQL de clave-valor y documentos completamente administrada, con rendimiento de milisegundos de un dígito a cualquier escala."
    },
    {
        term: "Amazon Redshift",
        definition: "Servicio de data warehouse completamente administrado a escala de petabytes que usa almacenamiento columnar para análisis rápidos."
    },
    {
        term: "Amazon Neptune",
        definition: "Servicio de base de datos de grafos completamente administrado para aplicaciones que trabajan con conjuntos de datos altamente conectados."
    },
    {
        term: "Amazon EBS (Elastic Block Store)",
        definition: "Volúmenes de almacenamiento de bloques persistente y de alto rendimiento diseñados para usar con EC2. Soporta snapshots para backups."
    },
    {
        term: "Amazon EFS (Elastic File System)",
        definition: "Sistema de archivos elástico, escalable y completamente administrado para usar con servicios en la nube AWS y recursos on-premises."
    },
    {
        term: "Amazon FSx",
        definition: "Familia de servicios de sistemas de archivos completamente administrados para Windows File Server, Lustre, NetApp ONTAP y OpenZFS."
    },
    {
        term: "AWS Snowball",
        definition: "Dispositivo físico de transferencia de datos que mueve terabytes o petabytes de datos hacia y desde AWS de manera segura."
    },
    {
        term: "Amazon WorkSpaces",
        definition: "Servicio de escritorio virtual administrado que permite aprovisionar escritorios Windows o Linux en la nube."
    },
    {
        term: "Amazon SageMaker",
        definition: "Servicio completamente administrado para construir, entrenar y desplegar modelos de machine learning rápidamente."
    },
    {
        term: "Amazon Rekognition",
        definition: "Servicio de análisis de imágenes y videos basado en deep learning que identifica objetos, personas, texto, escenas y actividades."
    },
    {
        term: "Amazon Lex",
        definition: "Servicio para construir interfaces conversacionales (chatbots) usando voz y texto con la misma tecnología de Alexa."
    },
    {
        term: "Amazon Polly",
        definition: "Servicio que convierte texto en voz realista usando tecnologías avanzadas de deep learning en múltiples idiomas y voces."
    },
    {
        term: "AWS Batch",
        definition: "Servicio que permite ejecutar trabajos batch a cualquier escala de manera eficiente, provisionando automáticamente recursos óptimos."
    },
    {
        term: "Amazon Cognito",
        definition: "Servicio de identidad que permite agregar registro de usuarios, inicio de sesión y control de acceso a aplicaciones web y móviles."
    },
    {
        term: "Amazon QuickSight",
        definition: "Servicio de business intelligence (BI) serverless escalable que permite crear visualizaciones y dashboards interactivos."
    },
    {
        term: "AWS Auto Scaling",
        definition: "Servicio que ajusta automáticamente la capacidad de recursos para mantener rendimiento constante al menor costo posible."
    },
    {
        term: "Amazon ECR (Elastic Container Registry)",
        definition: "Registro de contenedores Docker completamente administrado que facilita almacenar, administrar y desplegar imágenes de contenedores con escaneo de vulnerabilidades."
    },
    {
        term: "Instancias Reservadas (Reserved Instances)",
        definition: "Modelo de precios que ofrece descuentos significativos (hasta 75%) a cambio de compromiso de uso de 1 o 3 años."
    },
    {
        term: "Savings Plans",
        definition: "Modelo de precios flexible que ofrece descuentos a cambio de compromiso de uso consistente (medido en $/hora) durante 1 o 3 años."
    },
    {
        term: "Instancias Spot",
        definition: "Modelo de precios que permite usar capacidad de computación EC2 no utilizada con descuentos de hasta 90%, pero AWS puede interrumpirlas."
    },
    {
        term: "Instancias On-Demand",
        definition: "Modelo de precios estándar donde pagas por capacidad de computación por hora o segundo sin compromisos a largo plazo."
    },
    {
        term: "AWS Free Tier",
        definition: "Programa que ofrece uso gratuito de servicios AWS durante 12 meses (algunos servicios siempre gratis) para nuevos clientes."
    },
    {
        term: "Modelo de Responsabilidad Compartida",
        definition: "Marco que define qué aspectos de seguridad administra AWS (seguridad DE la nube) y cuáles son responsabilidad del cliente (seguridad EN la nube)."
    },
    {
        term: "Principio de Privilegio Mínimo",
        definition: "Práctica de seguridad donde se otorgan solo los permisos mínimos necesarios para realizar una tarea específica."
    },
    {
        term: "AWS Well-Architected Framework",
        definition: "Conjunto de mejores prácticas y principios para diseñar y operar sistemas confiables, seguros, eficientes y rentables en AWS."
    },
    {
        term: "Pilar de Excelencia Operacional",
        definition: "Pilar del Well-Architected Framework enfocado en ejecutar y monitorear sistemas para entregar valor empresarial y mejorar continuamente."
    },
    {
        term: "Pilar de Seguridad",
        definition: "Pilar del Well-Architected Framework enfocado en proteger información, sistemas y activos mediante controles de seguridad y evaluaciones de riesgo."
    },
    {
        term: "Pilar de Confiabilidad",
        definition: "Pilar del Well-Architected Framework enfocado en la capacidad de recuperarse de interrupciones y cumplir con demanda dinámica."
    },
    {
        term: "Pilar de Eficiencia de Rendimiento",
        definition: "Pilar del Well-Architected Framework enfocado en usar recursos de computación eficientemente para cumplir requisitos del sistema."
    },
    {
        term: "Pilar de Optimización de Costos",
        definition: "Pilar del Well-Architected Framework enfocado en obtener el mejor retorno de inversión al menor costo posible."
    },
    {
        term: "TAM (Technical Account Manager)",
        definition: "Recurso dedicado incluido en el plan Enterprise Support que proporciona guía técnica, mejores prácticas y coordinación con AWS."
    },
    {
        term: "AWS Support - Plan Basic",
        definition: "Plan de soporte gratuito que incluye acceso a documentación, whitepapers, foros y Trusted Advisor (limitado)."
    },
    {
        term: "AWS Support - Plan Developer",
        definition: "Plan de soporte para entornos de desarrollo/testing con respuesta en horario laboral y acceso a Cloud Support Associates."
    },
    {
        term: "AWS Support - Plan Business",
        definition: "Plan de soporte para cargas de trabajo de producción con respuesta 24/7 y acceso completo a Trusted Advisor."
    },
    {
        term: "AWS Support - Plan Enterprise",
        definition: "Plan de soporte para cargas críticas de negocio con TAM dedicado, respuesta en 15 minutos para casos críticos y revisiones de arquitectura."
    },
    {
        term: "Zona de Disponibilidad (AZ)",
        definition: "Centro de datos aislado dentro de una región AWS con alimentación, redes y conectividad redundantes para alta disponibilidad."
    },
    {
        term: "Región AWS",
        definition: "Área geográfica que contiene múltiples zonas de disponibilidad aisladas y físicamente separadas conectadas con redes de baja latencia."
    },
    {
        term: "Edge Location",
        definition: "Punto de presencia de AWS usado por CloudFront para almacenar en caché contenido cerca de usuarios finales y reducir latencia."
    },
    {
        term: "Elasticidad",
        definition: "Capacidad de escalar recursos hacia arriba o abajo automáticamente según demanda, pagando solo por lo que usas."
    },
    {
        term: "Alta Disponibilidad",
        definition: "Diseño de sistemas que permanecen operacionales y accesibles incluso cuando componentes fallan, usando redundancia entre múltiples AZs."
    },
    {
        term: "Tolerancia a Fallos",
        definition: "Capacidad de un sistema de seguir funcionando correctamente incluso cuando uno o más componentes fallan."
    },
    {
        term: "Recuperación ante Desastres (DR)",
        definition: "Conjunto de políticas y procedimientos para recuperar o continuar operaciones de tecnología tras un desastre natural o causado por humanos."
    }
];

let currentCard = 0;
let isFlipped = false;

const flashcard = document.getElementById('flashcard');
const frontContent = document.getElementById('frontContent');
const backContent = document.getElementById('backContent');
const cardCounter = document.getElementById('cardCounter');
const progressFill = document.getElementById('progressFill');
const totalCards = document.getElementById('totalCards');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function loadCard() {
    const card = flashcards[currentCard];

    // Reset flip
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }

    // Update content
    frontContent.innerHTML = `<h2>${card.term}</h2>`;
    backContent.innerHTML = `
        <h3>${card.term}</h3>
        <p>${card.definition}</p>
    `;

    // Update counter
    cardCounter.textContent = `${currentCard + 1} / ${flashcards.length}`;

    // Update progress
    const progress = ((currentCard + 1) / flashcards.length) * 100;
    progressFill.style.width = `${progress}%`;

    // Update buttons
    prevBtn.disabled = currentCard === 0;
    nextBtn.disabled = currentCard === flashcards.length - 1;
}

function flipCard() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextCard() {
    if (currentCard < flashcards.length - 1) {
        currentCard++;
        loadCard();
    }
}

function prevCard() {
    if (currentCard > 0) {
        currentCard--;
        loadCard();
    }
}

// Event listeners
flashcard.addEventListener('click', flipCard);
nextBtn.addEventListener('click', nextCard);
prevBtn.addEventListener('click', prevCard);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        nextCard();
    } else if (e.key === 'ArrowLeft') {
        prevCard();
    } else if (e.key === ' ') {
        e.preventDefault();
        flipCard();
    }
});

// Dark Mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const icon = darkModeToggle.querySelector('.icon');

    // Check saved preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        icon.textContent = '☀️';
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        icon.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDark);
    });
}

// Initialize
totalCards.textContent = flashcards.length;
loadCard();
initDarkMode();
