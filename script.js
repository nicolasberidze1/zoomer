    const catMenu = document.getElementById('catMenu');
    const loaderBar = document.getElementById('loaderBar');

    catMenu.addEventListener('click', () => {
        // წინა ანიმაციის გასუფთავება
        loaderBar.classList.remove('loading');
        // reflow — ბრაუზერს ვაიძულებთ reset-ს, რომ ანიმაცია თავიდან დაიწყოს
        void loaderBar.offsetWidth;
        // ანიმაციის გაშვება
        loaderBar.classList.add('loading');
    });

    // ანიმაციის დასრულების შემდეგ ბარი გაქრება
    loaderBar.addEventListener('animationend', () => {
        loaderBar.classList.remove('loading');
    });