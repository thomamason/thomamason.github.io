document.querySelectorAll('.banner-main').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const targetId = trigger.dataset.dropdownTarget;
        document.getElementById(targetId)?.classList.toggle('open');
    });
});