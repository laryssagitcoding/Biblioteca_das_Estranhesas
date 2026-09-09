document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function() {
        const proximoId = this.getAttribute('data-proximo');

        document.querySelectorAll('.passo').forEach(passo => {
            passo.classList.remove('ativo');
        });

        document.getElementById(`passo-${proximoId}`).classList.add('ativo');
    });
});
function mudarPasso(passo) {
    document.querySelectorAll(".passo").forEach((el) => el.classList.remove("ativo"));
    document.getElementById(`passo-${passo}`).classList.add("ativo");
}