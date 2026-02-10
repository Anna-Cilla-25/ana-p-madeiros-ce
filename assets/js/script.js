// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
    // Elementos DOM
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Verificar preferência de tema salva
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    }
    
    // Alternar tema claro/escuro
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    // Função para ativar modo escuro
    function enableDarkMode() {
        body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i> Modo Claro';
        localStorage.setItem('theme', 'dark');
    }
    
    // Função para desativar modo escuro
    function disableDarkMode() {
        body.classList.remove('dark-mode');
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i> Modo Escuro';
        localStorage.setItem('theme', 'light');
    }
    
    // Efeito de digitação no título (opcional - remove se não quiser)
    const tagline = document.querySelector('.tagline');
    const originalText = tagline.textContent;
    tagline.textContent = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            tagline.textContent += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    
    // Iniciar efeito de digitação após 1 segundo
    setTimeout(typeWriter, 1000);
    
    // Adicionar animação nas skills ao passar o mouse
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        skill.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Mostrar mensagem no console (para recrutadores curiosos)
    console.log('👋 Olá! Este é o perfil interativo de Ana Madeiros.');
    console.log('🔗 GitHub: https://github.com/ana-madeiros-ce');
    console.log('💼 LinkedIn: https://linkedin.com/in/ana-madeiros');
    console.log('🚀 Projeto desenvolvido com HTML, CSS e JavaScript puro.');
});
```
