const questions = [
    {
        number: 1,
        question: "¿Qué servicio permite backups cross-region automáticos?",
        options: ["S3 Glacier", "EBS Snapshots manual", "AWS Backup", "CloudTrail"],
        correct: 2,
        explanation: "AWS Backup permite programar backups automáticos, incluyendo copias cross-region."
    },
    {
        number: 2,
        question: "¿Qué servicio es serverless?",
        options: ["Lightsail", "ECS", "AWS Lambda", "EC2"],
        correct: 2,
        explanation: "Lambda ejecuta código sin administrar servidores."
    },
    {
        number: 3,
        question: "¿Qué solución serverless permite crear APIs?",
        options: ["EC2", "API Gateway", "Lambda", "S3"],
        correct: 1,
        explanation: "API Gateway crea, gestiona y publica APIs sin servidores."
    },
    {
        number: 4,
        question: "¿Qué modelo de precios usa AWS?",
        options: ["Pago por hardware físico", "Pago por uso", "Licencias perpetuas", "Pago anual obligatorio"],
        correct: 1,
        explanation: "AWS usa modelo pay-as-you-go."
    },
    {
        number: 5,
        question: "¿Qué servicio permite integración CI/CD?",
        options: ["CloudFront", "CodePipeline", "EC2", "S3"],
        correct: 1,
        explanation: "Automatiza build, test y deploy."
    },
    {
        number: 6,
        question: "¿Qué servicio permite monitoreo de logs?",
        options: ["Config", "SNS", "CloudWatch Logs", "CloudTrail"],
        correct: 2,
        explanation: "CloudWatch Logs almacena y analiza logs."
    },
    {
        number: 7,
        question: "¿Qué servicio administra rutas de DNS?",
        options: ["Route 53", "VPC", "Transit Gateway", "Direct Connect"],
        correct: 0,
        explanation: "Route 53 es DNS administrado."
    },
    {
        number: 8,
        question: "¿Qué servicio se usa para administrar usuarios y permisos?",
        options: ["CloudTrail", "KMS", "Config", "IAM"],
        correct: 3,
        explanation: "IAM gestiona identidades, roles y permisos."
    },
    {
        number: 9,
        question: "¿Qué servicio ejecuta contenedores sin servidores?",
        options: ["EC2", "Batch", "EKS", "AWS Fargate"],
        correct: 3,
        explanation: "Fargate ejecuta contenedores sin administrar EC2."
    },
    {
        number: 10,
        question: "¿Qué servicio consulta logs centralizados?",
        options: ["Config Rules", "CloudWatch Logs Insights", "Athena", "EC2"],
        correct: 1,
        explanation: "Permite hacer consultas SQL-like sobre logs."
    },
    {
        number: 11,
        question: "¿Qué servicio evalúa configuraciones según reglas?",
        options: ["AWS Config", "IAM", "S3 Access Logs", "Kinesis"],
        correct: 0,
        explanation: "Config evalúa cumplimiento mediante rules."
    },
    {
        number: 12,
        question: "¿Qué servicio analiza vulnerabilidades?",
        options: ["IAM", "Amazon Inspector", "Shield", "GuardDuty"],
        correct: 1,
        explanation: "Inspector detecta vulnerabilidades en EC2 y contenedores."
    },
    {
        number: 13,
        question: "¿Qué servicio protege contra DDoS?",
        options: ["IAM", "AWS Shield", "Inspector", "GuardDuty"],
        correct: 1,
        explanation: "Shield protege ante ataques DDoS."
    },
    {
        number: 14,
        question: "¿Qué elemento permite tráfico en una VPC?",
        options: ["IAM Policies", "Security Groups", "CloudTrail Logs", "KMS Keys"],
        correct: 1,
        explanation: "Los security groups actúan como firewalls virtuales."
    },
    {
        number: 15,
        question: "¿Qué servicio permite facturación consolidada?",
        options: ["AWS Budgets", "AWS Cost Explorer", "QuickSight", "AWS Organizations"],
        correct: 3,
        explanation: "Organizations unifica facturas de múltiples cuentas."
    },
    {
        number: 16,
        question: "¿Qué servicio implementa el modelo pub/sub?",
        options: ["SNS", "SQS", "Glue", "SES"],
        correct: 0,
        explanation: "SNS envía mensajes a múltiples destinos."
    },
    {
        number: 17,
        question: "¿Qué servicio permite colas distribuidas?",
        options: ["SNS", "SQS", "ECS", "CloudTrail"],
        correct: 1,
        explanation: "SQS desacopla aplicaciones mediante colas."
    },
    {
        number: 18,
        question: "¿Qué servicio consulta datos en S3 con SQL?",
        options: ["Glue", "Athena", "EC2 con DB", "RDS"],
        correct: 1,
        explanation: "Athena consulta datos en S3 sin servidores."
    },
    {
        number: 19,
        question: "¿Qué servicio permite ML en tiempo real?",
        options: ["Kinesis Data Analytics", "S3", "Redshift", "EC2"],
        correct: 0,
        explanation: "Procesa streams en tiempo real con ML integrado."
    },
    {
        number: 20,
        question: "Seleccione características del modelo compartido (2):",
        options: ["AWS protege infraestructura física", "Cliente administra centros de datos", "Cliente configura accesos y datos", "AWS administra tus datos"],
        correct: [0, 2],
        explanation: "AWS protege la nube, el cliente protege lo que pone en ella.",
        multipleAnswers: true
    },
    {
        number: 21,
        question: "¿Qué servicio permite replicación entre buckets?",
        options: ["Glacier", "Snapshots", "S3 Cross-Region Replication", "FSx Replication"],
        correct: 2,
        explanation: "CRR replica objetos entre regiones automáticamente."
    },
    {
        number: 22,
        question: "¿Qué servicio consolida facturación?",
        options: ["Cost Explorer", "AWS Organizations", "IAM", "Budgets"],
        correct: 1,
        explanation: "Organizations unifica pagos."
    },
    {
        number: 23,
        question: "Ejecutar Lambda al subir un archivo S3:",
        options: ["AWS Lambda", "S3", "Kinesis", "EC2"],
        correct: 0,
        explanation: "S3 dispara un evento Lambda al subir archivos."
    },
    {
        number: 24,
        question: "¿Qué herramienta estima costos?",
        options: ["Cost Anomaly Detection", "Budgets", "AWS Pricing Calculator", "Cost Explorer"],
        correct: 2,
        explanation: "Simula costos antes de desplegar recursos."
    },
    {
        number: 25,
        question: "Ejecutar contenedores sin administrar infraestructura:",
        options: ["EC2", "DynamoDB", "AWS Fargate", "S3"],
        correct: 2,
        explanation: "Fargate es serverless para contenedores."
    },
    {
        number: 26,
        question: "Detectar actividad sospechosa en la cuenta:",
        options: ["Macie", "Trusted Advisor", "Inspector", "GuardDuty"],
        correct: 3,
        explanation: "Analiza comportamientos anómalos y amenazas."
    },
    {
        number: 27,
        question: "¿Qué describe Glacier?",
        options: ["CDN", "Almacenamiento barato para archivado", "Cómputo", "Base de datos"],
        correct: 1,
        explanation: "Glacier es para archivos a largo plazo."
    },
    {
        number: 28,
        question: "¿Qué servicio detecta actividades sospechosas?",
        options: ["Shield", "IAM", "GuardDuty", "Glue"],
        correct: 2,
        explanation: "GuardDuty identifica amenazas."
    },
    {
        number: 29,
        question: "¿Qué servicio detecta configuraciones riesgosas en S3?",
        options: ["Athena", "IAM Analyzer", "S3 Block Public Access", "Glue Catalog"],
        correct: 2,
        explanation: "Previene exposición pública accidental."
    },
    {
        number: 30,
        question: "¿Qué acelera migración de datos masivos?",
        options: ["S3 Transfer Acceleration", "Snowball", "WorkSpaces", "CloudFront"],
        correct: 1,
        explanation: "Snowball usa dispositivos físicos para mover grandes volúmenes."
    },
    {
        number: 31,
        question: "¿Qué beneficio ofrece AWS Organizations?",
        options: ["Más almacenamiento", "Acceso root compartido", "Reducir regiones", "Control centralizado de políticas"],
        correct: 3,
        explanation: "Permite aplicar políticas y administrar múltiples cuentas."
    },
    {
        number: 32,
        question: "¿Qué servicio administra colas de mensajes?",
        options: ["SQS", "Kinesis", "SNS", "SES"],
        correct: 0,
        explanation: "SQS gestiona colas y desacopla sistemas."
    },
    {
        number: 33,
        question: "¿Qué servicio ofrece MySQL/PostgreSQL administrado?",
        options: ["DynamoDB", "Redshift", "S3", "RDS"],
        correct: 3,
        explanation: "RDS gestiona bases de datos relacionales."
    },
    {
        number: 34,
        question: "¿Qué servicio permite cifrado?",
        options: ["IAM", "S3 sin cifrado", "Trusted Advisor", "AWS KMS"],
        correct: 3,
        explanation: "KMS gestiona claves y cifrado."
    },
    {
        number: 35,
        question: "Principio de seguridad donde solo se otorgan permisos necesarios:",
        options: ["Privilegio mínimo", "Acceso total", "Permisos compartidos", "Root"],
        correct: 0,
        explanation: "Minimiza riesgos de seguridad."
    },
    {
        number: 36,
        question: "Controlar quién accede a recursos en AWS:",
        options: ["Cognito", "CloudTrail", "IAM", "Shield"],
        correct: 2,
        explanation: "IAM gestiona permisos."
    },
    {
        number: 37,
        question: "¿Qué plan incluye un TAM?",
        options: ["Enterprise", "Basic", "Starter", "Developer"],
        correct: 0,
        explanation: "Solo el plan Enterprise trae TAM dedicado."
    },
    {
        number: 38,
        question: "¿Qué opción requiere compromiso 1–3 años para ahorro?",
        options: ["Free Tier", "Savings Plans", "On-Demand", "Spot"],
        correct: 1,
        explanation: "Savings Plans reducen costos con compromiso."
    },
    {
        number: 39,
        question: "AWS Well-Architected Framework describe:",
        options: ["Facturación", "Buenas prácticas de arquitectura", "Monitoreo", "Almacenamiento"],
        correct: 1,
        explanation: "Guía para construir sistemas confiables y eficientes."
    },
    {
        number: 40,
        question: "¿Qué servicio centraliza alertas de seguridad?",
        options: ["Config", "CloudTrail", "SNS", "Security Hub"],
        correct: 3,
        explanation: "Centraliza hallazgos de seguridad."
    },
    {
        number: 41,
        question: "¿Qué servicio administra certificados SSL/TLS?",
        options: ["Inspector", "ACM", "IAM", "Route53"],
        correct: 1,
        explanation: "ACM gestiona y renueva certificados automáticamente."
    },
    {
        number: 42,
        question: "¿Qué servicio ofrece almacenamiento de archivos administrado?",
        options: ["Glacier", "S3", "EFS", "DynamoDB"],
        correct: 2,
        explanation: "EFS es un sistema de archivos escalable y compartido."
    },
    {
        number: 43,
        question: "¿Qué servicio administra claves de cifrado?",
        options: ["IAM", "Shield", "KMS", "Glacier"],
        correct: 2,
        explanation: "KMS crea y administra claves de cifrado."
    },
    {
        number: 44,
        question: "¿Qué servicio permite análisis en petabytes?",
        options: ["EBS", "Redshift", "EC2", "S3"],
        correct: 1,
        explanation: "Redshift es un data warehouse masivo."
    },
    {
        number: 45,
        question: "¿Qué servicio registra acciones de usuarios en AWS?",
        options: ["CloudTrail", "ACM", "CloudWatch Logs", "Budgets"],
        correct: 0,
        explanation: "CloudTrail audita todas las acciones en la cuenta."
    },
    {
        number: 46,
        question: "¿Qué caracteriza a un servicio administrado?",
        options: ["Mantenimiento manual", "Cliente actualiza software", "AWS gestiona infraestructura", "Cliente gestiona hardware"],
        correct: 2,
        explanation: "AWS se encarga del mantenimiento."
    },
    {
        number: 47,
        question: "¿Qué servicio publica notificaciones?",
        options: ["EFS", "SQS", "SNS", "GuardDuty"],
        correct: 2,
        explanation: "SNS publica notificaciones a suscriptores."
    },
    {
        number: 48,
        question: "Seleccione servicios de analítica (2):",
        options: ["Glacier", "Athena", "IAM", "Redshift"],
        correct: [1, 3],
        explanation: "Athena y Redshift son servicios analíticos.",
        multipleAnswers: true
    },
    {
        number: 49,
        question: "¿Qué servicio monitorea postura global de seguridad?",
        options: ["Security Hub", "CloudTrail", "SNS", "Config"],
        correct: 0,
        explanation: "Security Hub centraliza hallazgos de seguridad."
    },
    {
        number: 50,
        question: "¿Qué servicio permite consultar S3 con SQL?",
        options: ["RDS", "Athena", "Glue", "Redshift"],
        correct: 1,
        explanation: "Athena consulta S3 sin servidores."
    },
    {
        number: 51,
        question: "¿Qué servicio permite reconocimiento de imágenes?",
        options: ["Rekognition", "Macie", "Lex", "Polly"],
        correct: 0,
        explanation: "Rekognition detecta objetos, rostros y texto."
    },
    {
        number: 52,
        question: "¿Qué ayuda a detectar anomalías en gastos?",
        options: ["Cost Explorer", "Billing Dashboard", "Cost Anomaly Detection", "Budgets"],
        correct: 2,
        explanation: "Detecta gastos inusuales automáticamente."
    },
    {
        number: 53,
        question: "Guardar archivos poco usados pero con acceso rápido:",
        options: ["S3 Standard-IA", "EFS", "Redshift", "Glacier Deep Archive"],
        correct: 0,
        explanation: "Standard-IA da acceso rápido a bajo costo."
    },
    {
        number: 54,
        question: "¿Qué servicio audita actividades en la cuenta?",
        options: ["Security Hub", "CloudTrail", "Config", "KMS"],
        correct: 1,
        explanation: "CloudTrail registra todas las acciones."
    },
    {
        number: 55,
        question: "Mejorar velocidad global del sitio web:",
        options: ["Glacier", "EBS", "AWS Backup", "CloudFront"],
        correct: 3,
        explanation: "CloudFront es un CDN global."
    },
    {
        number: 56,
        question: "ML sin administrar infraestructura:",
        options: ["EC2", "Athena", "Glue", "SageMaker"],
        correct: 3,
        explanation: "SageMaker facilita ML sin servidores."
    },
    {
        number: 57,
        question: "BD analítica columnar:",
        options: ["DynamoDB", "Redshift", "RDS", "Neptune"],
        correct: 1,
        explanation: "Redshift usa formato columnar para análisis."
    },
    {
        number: 58,
        question: "¿Quién cifra los datos del cliente?",
        options: ["AWS Infra", "Modelo compartido", "Partners", "Cliente"],
        correct: 3,
        explanation: "El cliente debe cifrar y proteger sus datos."
    },
    {
        number: 59,
        question: "Reducir costos ajustando capacidad automáticamente:",
        options: ["Reservadas", "EC2 24/7", "Auto Scaling", "Lightsail"],
        correct: 2,
        explanation: "Auto Scaling reduce capacidad en horas de baja demanda."
    },
    {
        number: 60,
        question: "Escaneo de imágenes de contenedores:",
        options: ["EC2 Inspector", "Lambda Scan", "ECR Image Scanning", "SNS"],
        correct: 2,
        explanation: "ECR analiza vulnerabilidades en imágenes."
    },
    {
        number: 61,
        question: "¿Qué administra el cliente?",
        options: ["Red troncal", "Regiones y zonas", "Datos y configuraciones", "Hardware"],
        correct: 2,
        explanation: "El cliente controla sus datos y permisos."
    },
    {
        number: 62,
        question: "Ideal para ingestión en streaming:",
        options: ["RDS", "EC2", "Kinesis", "S3"],
        correct: 2,
        explanation: "Kinesis procesa streams en tiempo real."
    },
    {
        number: 63,
        question: "Ventaja principal de la nube:",
        options: ["Escalabilidad bajo demanda", "Actualizaciones manuales", "Dependencia hardware local", "Alta inversión inicial"],
        correct: 0,
        explanation: "Permite escalar recursos según demanda."
    },
    {
        number: 64,
        question: "Responsabilidad del cliente:",
        options: ["Reemplazar discos", "Mantener centros de datos", "Administrar hardware", "Configurar permisos IAM"],
        correct: 3,
        explanation: "El cliente gestiona accesos y políticas."
    },
    {
        number: 65,
        question: "¿Qué servicio permite crear una red privada virtual?",
        options: ["IAM", "DynamoDB", "VPC", "S3"],
        correct: 2,
        explanation: "Amazon VPC permite crear una red privada virtual con control total de subredes, rutas, gateways y seguridad."
    }
];

let answeredQuestions = 0;
const userAnswers = {};

function renderQuestions() {
    const container = document.getElementById('questionsContainer');

    questions.forEach((q, index) => {
        const card = document.createElement('div');
        card.className = 'question-card';
        card.id = `question-${index}`;

        const questionNumber = document.createElement('span');
        questionNumber.className = 'question-number';
        questionNumber.textContent = `Pregunta ${q.number}`;

        const questionText = document.createElement('h2');
        questionText.className = 'question-text';
        questionText.textContent = q.question;

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        optionsDiv.id = `options-${index}`;

        q.options.forEach((option, optIndex) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            optionDiv.dataset.index = optIndex;
            optionDiv.textContent = `${String.fromCharCode(97 + optIndex)}. ${option}`;
            optionDiv.onclick = () => selectOption(index, optIndex);
            optionsDiv.appendChild(optionDiv);
        });

        const button = document.createElement('button');
        button.className = 'show-answer-btn';
        button.id = `btn-${index}`;
        button.textContent = 'Ver respuesta correcta';
        button.disabled = true;
        button.onclick = () => showAnswer(index);

        const explanation = document.createElement('div');
        explanation.className = 'explanation';
        explanation.id = `explanation-${index}`;

        const explanationTitle = document.createElement('div');
        explanationTitle.className = 'explanation-title';
        explanationTitle.id = `explanation-title-${index}`;

        const explanationText = document.createElement('div');
        explanationText.className = 'explanation-text';
        explanationText.textContent = q.explanation;

        explanation.appendChild(explanationTitle);
        explanation.appendChild(explanationText);

        card.appendChild(questionNumber);
        card.appendChild(questionText);
        card.appendChild(optionsDiv);
        card.appendChild(button);
        card.appendChild(explanation);

        container.appendChild(card);
    });
}

function selectOption(questionIndex, optionIndex) {
    const question = questions[questionIndex];
    const optionsDiv = document.getElementById(`options-${questionIndex}`);
    const options = optionsDiv.querySelectorAll('.option');
    const button = document.getElementById(`btn-${questionIndex}`);

    // Si ya se mostró la respuesta, no permitir más cambios
    if (userAnswers[questionIndex] && userAnswers[questionIndex].revealed) {
        return;
    }

    // Si es pregunta de múltiples respuestas
    if (question.multipleAnswers) {
        // Inicializar array si no existe
        if (!userAnswers[questionIndex]) {
            userAnswers[questionIndex] = { selected: [], revealed: false };
        }

        const selectedArray = userAnswers[questionIndex].selected;
        const clickedOption = options[optionIndex];

        // Toggle selección
        if (selectedArray.includes(optionIndex)) {
            // Deseleccionar
            selectedArray.splice(selectedArray.indexOf(optionIndex), 1);
            clickedOption.classList.remove('selected');
        } else {
            // Seleccionar
            selectedArray.push(optionIndex);
            clickedOption.classList.add('selected');
        }

        // Habilitar botón si al menos una opción está seleccionada
        button.disabled = selectedArray.length === 0;
    } else {
        // Pregunta de una sola respuesta
        // Limpiar selección anterior
        options.forEach(opt => opt.classList.remove('selected'));

        // Seleccionar nueva opción
        options[optionIndex].classList.add('selected');
        userAnswers[questionIndex] = { selected: optionIndex, revealed: false };

        // Habilitar botón
        button.disabled = false;
    }
}

function showAnswer(index) {
    const question = questions[index];
    const optionsDiv = document.getElementById(`options-${index}`);
    const options = optionsDiv.querySelectorAll('.option');
    const button = document.getElementById(`btn-${index}`);
    const explanation = document.getElementById(`explanation-${index}`);
    const explanationTitle = document.getElementById(`explanation-title-${index}`);

    // Marcar como revelado
    userAnswers[index].revealed = true;

    // Deshabilitar todas las opciones
    options.forEach(opt => opt.classList.add('disabled'));

    // Verificar si es correcta o incorrecta
    let isCorrect = false;

    if (question.multipleAnswers) {
        // Pregunta de múltiples respuestas
        const userSelected = userAnswers[index].selected.sort();
        const correctAnswers = [...question.correct].sort();

        isCorrect = JSON.stringify(userSelected) === JSON.stringify(correctAnswers);

        // Marcar respuestas correctas e incorrectas
        options.forEach((opt, idx) => {
            if (correctAnswers.includes(idx)) {
                opt.classList.add('correct');
            }
            if (userSelected.includes(idx) && !correctAnswers.includes(idx)) {
                opt.classList.add('incorrect');
                opt.classList.remove('selected');
            }
        });
    } else {
        // Pregunta de una sola respuesta
        const userSelected = userAnswers[index].selected;
        isCorrect = userSelected === question.correct;

        // Marcar respuesta correcta
        options[question.correct].classList.add('correct');

        // Si la respuesta del usuario es incorrecta, marcarla
        if (!isCorrect) {
            options[userSelected].classList.add('incorrect');
            options[userSelected].classList.remove('selected');
        }
    }

    // Mostrar título según resultado
    if (isCorrect) {
        explanationTitle.innerHTML = '<span style="color: #28a745;">✓ ¡Correcto!</span>';
    } else {
        explanationTitle.innerHTML = '<span style="color: #dc3545;">✗ Incorrecto</span>';
    }

    // Ocultar botón y mostrar explicación
    button.classList.add('hidden');
    explanation.classList.add('visible');

    // Actualizar progreso
    answeredQuestions++;
    updateProgress();
}

function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const percentage = (answeredQuestions / questions.length) * 100;

    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${answeredQuestions} / ${questions.length}`;
}

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

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
    initDarkMode();
});
