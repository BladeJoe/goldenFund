
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((faq, i) => {
    const question = faq.querySelector(".question");
    const answer = faq.querySelector(".answer");
    const hr = faq.querySelector("hr");
    const plus = faq.querySelector(".plus");

    question.addEventListener("click", () => {
        const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

        faqs.forEach((f, idx) => {
            const a = f.querySelector(".answer");
            const h = f.querySelector("hr");
            const p = f.querySelector(".plus");

            const active = idx === i && !isOpen;

            f.classList.toggle("active", active);
            f.style.background = active ? "var(--member-gdnt)" : "var(--white)";
            f.style.color = active ? "white" : "var(--black1)";

            h.style.margin = active ? "20px 0" : "0";
            h.style.border = active ? "1px solid var(--link)" : "none";
            h.style.width = active ? "100%" : "0";
            h.style.opacity = active ? "1" : "0";
            h.style.maxHeight = active ? "20px" : "0";

            if (active) {
                a.style.transition = "none";
                a.style.maxHeight = "0";
                a.offsetHeight; // force reflow
                a.style.transition = "max-height 0.3s ease, opacity 0.3s ease";
                a.style.maxHeight = a.scrollHeight + "px";
                a.style.opacity = "1";
            } else {
                a.style.maxHeight = "0";
                a.style.opacity = "0";
            }

            p.style.transform = active ? "rotate(-45deg)" : "rotate(0deg)";
        });
    });
});