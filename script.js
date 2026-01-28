// ================================================
// Beyza Zengin Portfolio - Language & Interactions
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initLanguageSwitch();
});

// ================================================
// Language Detection & Switching
// ================================================

function initLanguage() {
    // Check localStorage first
    let savedLang = localStorage.getItem('preferredLang');

    if (!savedLang) {
        // Detect browser language
        const browserLang = navigator.language || navigator.userLanguage;

        // If Turkish, use TR. Otherwise, default to EN
        if (browserLang.toLowerCase().startsWith('tr')) {
            savedLang = 'tr';
        } else {
            savedLang = 'en';
        }

        localStorage.setItem('preferredLang', savedLang);
    }

    // Apply language
    applyLanguage(savedLang);

    // Update active button
    updateLangButtons(savedLang);
}

function initLanguageSwitch() {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;

            // Save preference
            localStorage.setItem('preferredLang', lang);

            // Apply language
            applyLanguage(lang);

            // Update buttons
            updateLangButtons(lang);
        });
    });
}

function applyLanguage(lang) {
    // Update all elements with data-en and data-tr attributes
    const translatableElements = document.querySelectorAll('[data-en][data-tr]');

    translatableElements.forEach(el => {
        const text = lang === 'tr' ? el.dataset.tr : el.dataset.en;
        el.textContent = text;
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function updateLangButtons(activeLang) {
    const langBtns = document.querySelectorAll('.lang-btn');

    langBtns.forEach(btn => {
        if (btn.dataset.lang === activeLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
