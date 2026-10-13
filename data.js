
// =========================================
// CONFIGURACIÓN DE JSONBIN.IO
// =========================================
const JSONBIN_API_KEY = '$2a$10$YQykE910K/GcHae2ZiN8jeOiLhg0qhC6x0zjJSwiL5we/3cZlJx4O'; // ⚠️ Tu Master Key
const JSONBIN_BASE_URL = 'https://api.jsonbin.io/v3';

// ⚠️ PEGA AQUÍ EL ID DEL BIN QUE CREASTE MANUALMENTE
const BIN_ID = '6acde58fac6210605a2ce020'; 

// =========================================
// DATOS DEL PLAN DE ESTUDIOS
// =========================================
const studyPlan = {
    totalCredits: 160,
    electivesOptions: {
        ELE001: ["Cooperación Internacional y Gestión de Proyectos", "Desarrollo Sostenible y Medio Ambiente"],
        ELE002: ["Marketing Político y Gubernamental", "Filosofía política contemporánea", "Políticas públicas ciencia tecnología e innovación", "Análisis de coyuntura y medios de comunicación"],
        ELE003: ["Economía de Defensa", "Integración y seguridad regional"],
        ELE004: ["Estudios de Medio Oriente", "Estudios Norteamericanos", "Seminario I (Asia y África)", "Conflicts in Latin America"],
        ELE005: ["Gerencia Pública", "Partidos Políticos en Europa"],
        ELE006: ["Negocios Internacionales"]
    },
    semesters: [
        {
            number: 1, credits: 16, locked: false,
            subjects: [
                { code: "GEO001", name: "Geopolítica", credits: 3, component: "international", prerequisites: [] },
                { code: "POL001", name: "Introducción a la Política", credits: 4, component: "political", prerequisites: [] },
                { code: "MET001", name: "Metodología de la Investigación I", credits: 3, component: "investigative", prerequisites: [] },
                { code: "MAT001", name: "Matemáticas", credits: 3, component: "mathematical", prerequisites: [] },
                { code: "EXP001", name: "Expresión Oral y Escrita", credits: 2, component: "sociohumanistic", prerequisites: [] },
                { code: "CAT001", name: "Cátedra Neogranadina", credits: 1, component: "complementary", prerequisites: [] }
            ]
        },
        {
            number: 2, credits: 19, locked: true,
            subjects: [
                { code: "INT001", name: "Introducción a las Relaciones Internacionales", credits: 4, component: "international", prerequisites: [] },
                { code: "IDE001", name: "Ideas Políticas", credits: 4, component: "political", prerequisites: ["POL001"] },
                { code: "TEO001", name: "Teoría del Estado", credits: 4, component: "juridical", prerequisites: [] },
                { code: "ECO001", name: "Introducción a la Economía", credits: 4, component: "economic", prerequisites: [] },
                { code: "CUL001", name: "Expresión Cultural y Deportiva", credits: 3, component: "sociohumanistic", prerequisites: [] }
            ]
        },
        {
            number: 3, credits: 20, locked: true,
            subjects: [
                { code: "TEO002", name: "Teoría de las Relaciones Internacionales", credits: 4, component: "international", prerequisites: ["INT001"] },
                { code: "TEP001", name: "Teoría Política", credits: 4, component: "political", prerequisites: ["IDE001"] },
                { code: "DER001", name: "Derecho Constitucional Colombiano", credits: 4, component: "juridical", prerequisites: ["TEO001"] },
                { code: "MET002", name: "Metodología de la Investigación II", credits: 3, component: "investigative", prerequisites: ["MET001"] },
                { code: "EST001", name: "Estadística I", credits: 3, component: "mathematical", prerequisites: ["MAT001"] },
                { code: "HUM001", name: "Humanidades I", credits: 2, component: "sociohumanistic", prerequisites: [] }
            ]
        },
        {
            number: 4, credits: 19, locked: true,
            subjects: [
                { code: "SIS001", name: "Sistema Internacional", credits: 4, component: "international", prerequisites: ["TEO002"] },
                { code: "SPC001", name: "Sistemas Políticos Comparados", credits: 4, component: "political", prerequisites: ["TEP001"] },
                { code: "DIN001", name: "Derecho Internacional", credits: 4, component: "juridical", prerequisites: ["DER001"] },
                { code: "MIC001", name: "Microeconomía", credits: 4, component: "economic", prerequisites: ["ECO001"] },
                { code: "EST002", name: "Estadística II", credits: 3, component: "mathematical", prerequisites: ["EST001"] }
            ]
        },
        {
            number: 5, credits: 18, locked: true,
            subjects: [
                { code: "PEC001", name: "Política Exterior Comparada", credits: 4, component: "international", prerequisites: ["SIS001"] },
                { code: "PLC001", name: "Política Latinoamericana Comparada", credits: 4, component: "political", prerequisites: ["SPC001"] },
                { code: "DIE001", name: "Derecho Internacional Económico", credits: 4, component: "juridical", prerequisites: ["DIN001"] },
                { code: "MAC001", name: "Macroeconomía", credits: 4, component: "economic", prerequisites: ["MIC001"] },
                { code: "HUM002", name: "Humanidades II", credits: 2, component: "sociohumanistic", prerequisites: ["HUM001"] }
            ]
        },
        {
            number: 6, credits: 17, locked: true,
            subjects: [
                { code: "NEC001", name: "Negociación y Resolución de Conflictos", credits: 4, component: "international", prerequisites: ["PEC001"] },
                { code: "PUB001", name: "Políticas Públicas", credits: 4, component: "political", prerequisites: ["PLC001"] },
                { code: "DDC001", name: "Derecho Diplomático y Consular", credits: 3, component: "juridical", prerequisites: ["DIE001"] },
                { code: "ECC001", name: "Economía Colombiana", credits: 4, component: "economic", prerequisites: ["MAC001"] },
                { code: "HUM003", name: "Humanidades III", credits: 2, component: "sociohumanistic", prerequisites: ["HUM002"] }
            ]
        },
        {
            number: 7, credits: 18, locked: true,
            subjects: [
                { code: "TAV001", name: "Teorías Avanzadas de las relaciones internacionales", credits: 4, component: "international", prerequisites: ["NEC001"] },
                { code: "SEP001", name: "Sistema Electoral y Opinión Pública", credits: 4, component: "political", prerequisites: ["PUB001"] },
                { code: "DDH001", name: "Derechos Humanos y Derecho Internacional Humanitario", credits: 4, component: "juridical", prerequisites: ["DDC001"] },
                { code: "EIN001", name: "Economía Internacional", credits: 4, component: "economic", prerequisites: ["ECC001"] },
                { code: "SIN001", name: "Seminario de Investigación", credits: 2, component: "investigative", prerequisites: ["MET002"] }
            ]
        },
        {
            number: 8, credits: 18, locked: true,
            subjects: [
                { code: "SEG001", name: "Seguridad Internacional", credits: 4, component: "international", prerequisites: ["TAV001"] },
                { code: "ELE001", name: "Componente Electivo I", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "ELE002", name: "Componente Electivo II", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "ELE003", name: "Componente Electivo III", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "ETI001", name: "Ética Profesional", credits: 2, component: "sociohumanistic", prerequisites: [] }
            ]
        },
        {
            number: 9, credits: 18, locked: true,
            subjects: [
                { code: "ELE004", name: "Componente Electivo IV", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "ELE005", name: "Componente Electivo V", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "ELE006", name: "Componente Electivo VI", credits: 4, component: "elective", prerequisites: [], isElective: true },
                { code: "PAS001", name: "Pasantía", credits: 6, component: "investigative", prerequisites: [], isInternship: true }
            ]
        }
    ]
};

// =========================================
// ESTADO DE LA APLICACIÓN
// =========================================
let approvedSubjects = new Set();
let enrolledSubjects = new Set();
let currentSemester = 1;
let selectedElectives = {};
let selectedSedes = {};
let grades = {};
let currentUser = null;

// =========================================
// FUNCIONES DE JSONBIN.IO (USANDO ID FIJO)
// =========================================

async function updateCloudBin(userData) {
    try {
        const response = await fetch(`${JSONBIN_BASE_URL}/b/${BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) throw new Error('Error al actualizar bin');
        
        console.log('✅ Datos sincronizados en la nube');
        return true;
    } catch (error) {
        console.error('❌ Error actualizando bin:', error);
        return false;
    }
}

async function loadFromCloud() {
    try {
        const response = await fetch(`${JSONBIN_BASE_URL}/b/${BIN_ID}/latest`, {
            headers: {
                'X-Master-Key': JSONBIN_API_KEY
            }
        });
        
        if (!response.ok) throw new Error('Error al cargar desde la nube');
        
        const data = await response.json();
        const userData = data.record;
        
        approvedSubjects = new Set(userData.approvedSubjects || []);
        enrolledSubjects = new Set(userData.enrolledSubjects || []);
        currentSemester = userData.currentSemester || 1;
        selectedElectives = userData.selectedElectives || {};
        selectedSedes = userData.selectedSedes || {};
        grades = userData.grades || {};
        
        console.log('✅ Datos cargados desde la nube');
        return true;
    } catch (error) {
        console.error('❌ Error cargando desde la nube:', error);
        return false;
    }
}

function saveState() {
    const state = {
        approvedSubjects: Array.from(approvedSubjects),
        enrolledSubjects: Array.from(enrolledSubjects),
        currentSemester: currentSemester,
        selectedElectives: selectedElectives,
        selectedSedes: selectedSedes,
        grades: grades,
        lastUpdate: new Date().toISOString()
    };
    localStorage.setItem('mallaCurricularState', JSON.stringify(state));
    
    if (currentUser) {
        syncToCloud();
    }
}

let syncTimeout;
function syncToCloud() {
    clearTimeout(syncTimeout);
    syncTimeout = setTimeout(async () => {
        const state = {
            approvedSubjects: Array.from(approvedSubjects),
            enrolledSubjects: Array.from(enrolledSubjects),
            currentSemester: currentSemester,
            selectedElectives: selectedElectives,
            selectedSedes: selectedSedes,
            grades: grades,
            lastUpdate: new Date().toISOString()
        };
        
        await updateCloudBin(state);
    }, 1500);
}

function loadState() {
    const savedState = localStorage.getItem('mallaCurricularState');
    if (savedState) {
        const state = JSON.parse(savedState);
        approvedSubjects = new Set(state.approvedSubjects || []);
        enrolledSubjects = new Set(state.enrolledSubjects || []);
        currentSemester = state.currentSemester || 1;
        selectedElectives = state.selectedElectives || {};
        selectedSedes = state.selectedSedes || {};
        grades = state.grades || {};
    }
}

// =========================================
// SISTEMA DE NOTIFICACIONES
// =========================================

function showNotification(message, type = 'info') {
    const existing = document.querySelector('.custom-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'custom-notification';
    
    const colors = {
        success: 'var(--accent-emerald)',
        error: 'var(--accent-red)',
        info: 'var(--accent-cyan)',
        warning: 'var(--accent-amber)'
    };
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
        z-index: 10000;
        font-weight: 600;
        font-size: 0.95rem;
        animation: slideInRight 0.4s ease;
        max-width: 350px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease';
        setTimeout(() => notification.remove(), 400);
    }, 3000);
}

const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyle);

// =========================================
// INICIALIZACIÓN Y EVENTOS
// =========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    renderSemesters();
    updateStats();
    
    const modal = document.getElementById('electiveModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    if (closeBtn) {
        closeBtn.onclick = () => modal.style.display = "none";
    }
    window.onclick = (event) => { 
        if (event.target == modal) modal.style.display = "none"; 
    };

    const loginOverlay = document.getElementById('loginOverlay');
    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');
    document.body.classList.add('dark-mode');

    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const user = document.getElementById('loginUser').value;
            const pass = document.getElementById('loginPass').value;
            
            if (user === 'jk.joos' && pass === '160515') {
                currentUser = user;
                
                showNotification('🔄 Cargando tu progreso...', 'info');
                
                // Siempre cargar desde la nube (usando el ID fijo)
                const loaded = await loadFromCloud();
                if (loaded) {
                    renderSemesters();
                    updateStats();
                    showNotification('✅ Progreso cargado desde la nube', 'success');
                } else {
                    showNotification('⚠️ Empezando desde cero', 'warning');
                }
                
                loginOverlay.style.opacity = '0';
                setTimeout(() => { loginOverlay.style.display = 'none'; }, 500);
            } else {
                loginError.style.display = 'block';
                document.getElementById('loginUser').value = '';
                document.getElementById('loginPass').value = '';
                loginForm.style.animation = 'shake 0.5s';
                showNotification('❌ Credenciales incorrectas', 'error');
                setTimeout(() => { loginForm.style.animation = ''; }, 500);
            }
        });
    }
});

function initializeApp() {
    const semestersContainer = document.getElementById('semestersContainer');
    
    semestersContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-approve')) {
            approveSubject(e.target.getAttribute('data-code'));
            showNotification('✅ Materia aprobada', 'success');
        }
        else if (e.target.classList.contains('btn-enroll')) {
            enrollSubject(e.target.getAttribute('data-code'));
            showNotification('📚 Materia matriculada', 'info');
        }
        else if (e.target.classList.contains('btn-unenroll')) {
            unenrollSubject(e.target.getAttribute('data-code'));
            showNotification('🗑️ Materia desmatriculada', 'warning');
        }
        else if (e.target.classList.contains('btn-unapprove')) {
            unapproveSubject(e.target.getAttribute('data-code'));
            showNotification('↩️ Materia desaprobada', 'warning');
        }
        else if (e.target.classList.contains('btn-select')) {
            openElectiveModal(e.target.getAttribute('data-elective-code'));
        }
    });

    semestersContainer.addEventListener('change', function(e) {
        if (e.target.classList.contains('sede-select')) {
            selectedSedes[e.target.getAttribute('data-code')] = e.target.value;
            saveState();
            showNotification('📍 Sede actualizada', 'info');
        } else if (e.target.classList.contains('grade-input')) {
            const code = e.target.getAttribute('data-code');
            const grade = parseFloat(e.target.value);
            if (!isNaN(grade) && grade >= 0 && grade <= 5) {
                grades[code] = grade;
                showNotification(` Nota guardada: ${grade}`, 'success');
            } else {
                delete grades[code];
            }
            saveState();
            renderSemesters();
            updateStats();
        }
    });
}

// =========================================
// LÓGICA DE RENDERIZADO
// =========================================
function renderSemesters() {
    const container = document.getElementById('semestersContainer');
    container.innerHTML = '';
    
    studyPlan.semesters.forEach(semester => {
        const semesterElement = document.createElement('div');
        semesterElement.className = 'semester';
        
        let subjectsHTML = '';
        let approvedCount = 0, totalCount = 0, gradesSum = 0, gradesCount = 0;
        
        semester.subjects.forEach(subject => {
            totalCount++;
            const isApproved = approvedSubjects.has(subject.code);
            const isEnrolled = enrolledSubjects.has(subject.code);
            
            if (isApproved) {
                approvedCount++;
                if (grades[subject.code] !== undefined) {
                    gradesSum += grades[subject.code];
                    gradesCount++;
                }
            }
            
            const isAvailable = checkSubjectAvailability(subject, semester);
            let subjectClass = 'subject', statusText = '', statusClass = '', buttonHTML = '', sedeSelectHTML = '';
            
            if (isEnrolled || isApproved) {
                const currentSede = selectedSedes[subject.code] || 'bogota';
                sedeSelectHTML = `<div class="subject-sede"><label>Sede:</label><select class="sede-select" data-code="${subject.code}"><option value="bogota" ${currentSede === 'bogota' ? 'selected' : ''}>Bogotá</option><option value="cajica" ${currentSede === 'cajica' ? 'selected' : ''}>Cajicá</option></select></div>`;
            }
            
            if (isApproved) {
                const grade = grades[subject.code];
                if (grade && grade >= 3) { subjectClass += ' subject-approved-high'; statusText = 'Aprobada'; statusClass = 'status-approved'; } 
                else if (grade && grade < 3) { subjectClass += ' subject-approved'; statusText = 'No Aprobada'; statusClass = 'status-failed'; } 
                else { subjectClass += ' subject-approved'; statusText = 'Aprobada'; statusClass = 'status-approved'; }
                buttonHTML = `<button class="subject-action btn-unapprove" data-code="${subject.code}">Desaprobar</button>`;
            } else if (isEnrolled) {
                subjectClass += ' subject-current'; statusText = 'Matriculada'; statusClass = 'status-current';
                buttonHTML = `<button class="subject-action btn-approve" data-code="${subject.code}">Aprobar</button> <button class="subject-action btn-unenroll" data-code="${subject.code}">Desmatricular</button>`;
            } else if (isAvailable && !semester.locked) {
                subjectClass += ' subject-available'; statusText = 'Por Matricular'; statusClass = 'status-available';
                buttonHTML = `<button class="subject-action btn-enroll" data-code="${subject.code}">Matricular</button>`;
            } else {
                subjectClass += ' subject-locked'; statusText = 'Bloqueada'; statusClass = 'status-locked';
            }
            
            if (subject.isElective && !selectedElectives[subject.code]) {
                buttonHTML = `<button class="subject-action btn-select" data-code="${subject.code}" data-elective-code="${subject.code}">Seleccionar</button>`;
            }
            
            let prerequisitesHTML = subject.prerequisites.length > 0 ? `<div class="prerequisites">Prerrequisitos: ${subject.prerequisites.join(', ')}</div>` : '';
            let specialLabel = subject.isInternship ? '<div style="font-size:0.7rem; background:#f59e0b; color:white; padding:2px 6px; border-radius:3px; margin-top:5px; display:inline-block;">Pasantía</div>' : '';
            
            subjectsHTML += `
                <div class="${subjectClass}" data-code="${subject.code}">
                    <div class="subject-header">
                        <div class="subject-code">${subject.code}</div>
                        <div class="subject-credits">${subject.credits} créditos</div>
                        ${isApproved ? `<div class="subject-grade"><label>Nota:</label><input type="number" class="grade-input" data-code="${subject.code}" value="${grades[subject.code] || ''}" min="0" max="5" step="0.1"></div>` : ''}
                    </div>
                    <div class="subject-name">${subject.isElective ? (selectedElectives[subject.code] || subject.name) : subject.name}</div>
                    <div class="subject-component component-${subject.component}">
                        <i class="fas fa-${getComponentIcon(subject.component)}"></i>
                        <span>${getComponentName(subject.component)}</span>
                    </div>
                    ${specialLabel}
                    ${prerequisitesHTML}
                    <div class="subject-footer">
                        <div class="subject-status ${statusClass}">${statusText}</div>
                        ${buttonHTML}
                        ${sedeSelectHTML}
                    </div>
                </div>
            `;
        });
        
        const average = gradesCount > 0 ? (gradesSum / gradesCount).toFixed(2) : null;
        const isHighAverage = average && parseFloat(average) > 3.5;
        
        semesterElement.innerHTML = `
            <div class="semester-header">
                <div class="semester-title">SEMESTRE ${romanize(semester.number)}</div>
                <div class="semester-info">
                    <div class="semester-credits">${semester.credits} Créditos</div>
                    ${average ? `<div class="semester-average${isHighAverage ? ' semester-average-high' : ' semester-average-low'}">${average}</div>` : ''}
                </div>
            </div>
            <div class="subjects-container">${subjectsHTML}</div>
            ${!semester.locked ? `<div class="semester-progress"><div>Progreso: ${approvedCount} de ${totalCount} materias</div>${approvedCount === totalCount && totalCount > 0 ? `<div class="semester-complete${isHighAverage ? '' : '-low'}">${isHighAverage ? '✓ Aprobado y feliz' : '✓ Semestre completado'}</div>` : ''}</div>` : ''}
        `;
        container.appendChild(semesterElement);
    });
}

function checkSubjectAvailability(subject, semester) {
    if (semester.locked) return false;
    for (const prereq of subject.prerequisites) {
        if (!approvedSubjects.has(prereq)) return false;
    }
    if (subject.isInternship) {
        let total = 0, approved = 0;
        studyPlan.semesters.forEach(sem => sem.subjects.forEach(sub => {
            if (!sub.isInternship) { total++; if (approvedSubjects.has(sub.code)) approved++; }
        }));
        return approved === total;
    }
    return true;
}

function approveSubject(code) {
    approvedSubjects.add(code);
    enrolledSubjects.delete(code);
    renderSemesters(); updateStats(); saveState();
}

function enrollSubject(code) {
    enrolledSubjects.add(code);
    renderSemesters(); updateStats(); saveState();
}

function unenrollSubject(code) {
    enrolledSubjects.delete(code);
    renderSemesters(); updateStats(); saveState();
}

function unapproveSubject(code) {
    approvedSubjects.delete(code);
    enrolledSubjects.delete(code);
    delete grades[code];
    renderSemesters(); updateStats(); saveState();
}

function updateStats() {
    let totalCredits = 0, approvedCredits = 0, approvedCount = 0, totalSubjects = 0, gradesSum = 0, gradesCount = 0;
    
    studyPlan.semesters.forEach(semester => {
        semester.subjects.forEach(subject => {
            totalSubjects++; totalCredits += subject.credits;
            if (approvedSubjects.has(subject.code)) {
                approvedCredits += subject.credits; approvedCount++;
                if (grades[subject.code] !== undefined) { gradesSum += grades[subject.code]; gradesCount++; }
            }
        });
    });
    
    const progressPercentage = Math.round((approvedCredits / studyPlan.totalCredits) * 100);
    const overallGPA = gradesCount > 0 ? (gradesSum / gradesCount).toFixed(2) : '0.00';
    
    document.getElementById('totalCredits').textContent = totalCredits;
    document.getElementById('approvedCredits').textContent = approvedCredits;
    const approvedSubjectsEl = document.getElementById('approvedSubjects');
    approvedSubjectsEl.textContent = approvedCount;
    approvedSubjectsEl.className = `stat-value ${approvedCount === totalSubjects ? 'stat-complete' : 'stat-incomplete'}`;
    document.getElementById('overallGPA').textContent = overallGPA;
    document.getElementById('progressPercentage').textContent = `${progressPercentage}%`;
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
}

function romanize(num) {
    const roman = { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX', 10: 'X' };
    return roman[num] || num.toString();
}

function getComponentIcon(component) {
    const icons = { 'international': 'globe-americas', 'political': 'landmark', 'economic': 'chart-line', 'juridical': 'balance-scale', 'investigative': 'microscope', 'mathematical': 'calculator', 'sociohumanistic': 'users', 'complementary': 'puzzle-piece', 'elective': 'star' };
    return icons[component] || 'circle';
}

function getComponentName(component) {
    const names = { 'international': 'Internacional', 'political': 'Político', 'economic': 'Económico', 'juridical': 'Jurídico', 'investigative': 'Investigativo', 'mathematical': 'Matemático', 'sociohumanistic': 'Sociohumanístico', 'complementary': 'Complementario', 'elective': 'Electivo' };
    return names[component] || component;
}

function openElectiveModal(electiveCode) {
    const modal = document.getElementById('electiveModal');
    const optionsContainer = document.getElementById('electiveOptions');
    optionsContainer.innerHTML = '';
    
    (studyPlan.electivesOptions[electiveCode] || []).forEach(option => {
        const div = document.createElement('div');
        div.className = 'elective-option';
        div.textContent = option;
        div.onclick = function() { selectElective(electiveCode, option); modal.style.display = "none"; };
        optionsContainer.appendChild(div);
    });
    modal.style.display = "block";
}

function selectElective(code, name) {
    selectedElectives[code] = name;
    renderSemesters();
    saveState();
    showNotification('⭐ Electiva seleccionada: ' + name, 'success');
}
