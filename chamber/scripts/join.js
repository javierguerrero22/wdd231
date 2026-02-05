document.addEventListener('DOMContentLoaded', () =>{
    const timestampField = document.querySelector('#timestamp')

    if (timestampField){

        const now = new Date()
        timestampField.value = now.toLocaleString()

        console.log("Timestamp capturado: " + timestampField.value);
    }
})

const openButtons = document.querySelectorAll(".open-modal");
    const closeButtons = document.querySelectorAll(".close-modal");


    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.showModal();
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest("dialog").close();
        });
    });

