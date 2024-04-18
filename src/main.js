const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Fungsi untuk menampilkan pesan chat dari Local Storage
function displayChat() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    // Mendapatkan semua pesan dari Local Storage
    var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    // Menampilkan setiap pesan dalam chat box
    messages.forEach(function(message) {
        var messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        chatBox.appendChild(messageDiv);
    });
}

// Fungsi untuk mengirim pesan
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value.trim();

    if (message !== "") {
        // Mendapatkan semua pesan dari Local Storage
        var messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

        // Menambahkan pesan baru
        messages.push(message);

        // Menyimpan pesan ke Local Storage
        localStorage.setItem("chatMessages", JSON.stringify(messages));

        // Menampilkan kembali pesan-pesan
        displayChat();

        // Mengosongkan input setelah pesan terkirim
        messageInput.value = "";
    }
}

// Memanggil fungsi displayChat saat halaman dimuat
document.addEventListener("DOMContentLoaded", displayChat);

// Memanggil fungsi sendMessage saat tombol Kirim ditekan
document.getElementById("send-button").addEventListener("click", sendMessage);
