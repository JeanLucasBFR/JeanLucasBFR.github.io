document.addEventListener("DOMContentLoaded", () => {
    const prevButtons = document.querySelectorAll(".prev");
    const nextButtons = document.querySelectorAll(".next");
    const projetos = document.querySelectorAll(".projetos-box");

    //Função para atualizar a imagem ativa e a posição do carrossel
    function updateSlide(projeto, index) {
        const slides = projeto.querySelectorAll(".img-slide img");
        const indicators = projeto.querySelectorAll(".indicador");
        const totalSlides = slides.length;

        //Atualizar as imagens, movendo-as de acordo com o índice
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${index * 100}%)`; // Deslocamento das imagens
        });

        //Atualizar indicadores
        indicators.forEach((indicator, i) => {
            if (i === index) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    //Lógica para os botões de anterior
    prevButtons.forEach((btn) => {
        let currentSlideIndex = 0;
        const projeto = btn.closest(".projetos-box");

        btn.addEventListener("click", () => {
            const slides = projeto.querySelectorAll(".img-slide img");
            currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
            updateSlide(projeto, currentSlideIndex);
        });
    });

    //Lógica para os botões de próximo
    nextButtons.forEach((btn) => {
        let currentSlideIndex = 0;
        const projeto = btn.closest(".projetos-box");

        btn.addEventListener("click", () => {
            const slides = projeto.querySelectorAll(".img-slide img");
            currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
            updateSlide(projeto, currentSlideIndex);
        });
    });

    //Inicializar as iamgens, definindo o primeiro slide visível
    projetos.forEach((projeto) => {
        updateSlide(projeto, 0);  
    });
});

