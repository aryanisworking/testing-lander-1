document.addEventListener('DOMContentLoaded', () => {
    // initialize lucide icons
    if (window.lucide) {
        lucide.createIcons();
    }

    // smooth scrolling with offset
    const offset = 80;
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                e.preventDefault();
                const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // FAQ accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            // close others
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove('open');
                }
            });
            item.classList.toggle('open');
        });
    });

    // nav background change on scroll
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // mobile hamburger toggle
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', () => {
            mainNav.classList.toggle('open');
        });
    }

    // live counter
    const countEl = document.getElementById('player-count');
    let count = 18290;
    if (countEl) {
        count = parseInt(countEl.textContent.replace(/,/g, ''), 10) || count;
        setInterval(() => {
            const inc = Math.floor(Math.random() * 5); // 0-4
            count += inc;
            countEl.textContent = count.toLocaleString();
        }, 3000);
    }
});
