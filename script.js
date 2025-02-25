function startHack() {
    alert("AMANKAN");
    document.body.innerHTML = "<h1 style='color:red;'>HAHA DATA MU TERPANTAU, AKTIFITAS MU TEREKAM!!!!!</h1>";
    setTimeout(() => {
        window.location.href = "https://google.com"; // Redirect ke halaman lain
    }, 5000);
}
