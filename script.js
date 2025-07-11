document.addEventListener('DOMContentLoaded', () => {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        body.classList.add('dark-mode');
    } else if (currentTheme === null && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark-mode');
    }

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Skill Bar Animation on Scroll
    const skillBars = document.querySelectorAll('.skill-bar');

    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill-level');
            const barTop = bar.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (barTop < viewportHeight - 100 && barTop > -bar.offsetHeight) { // Animate if in view
                bar.style.width = skillLevel + '%';
            } else {
                bar.style.width = '0%'; // Reset if out of view
            }
        });
    };

    animateSkillBars(); // Initial check
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('resize', animateSkillBars);

    // Custom Cursor Logic
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) { // Ensure cursor element exists
        document.addEventListener('mousemove', (e) => {
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
        });
    }
});