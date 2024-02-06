document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Membuat suara notifikasi
    var notification = new Audio('notif.mp3');
    notification.play();

    // Memutar suara notifikasi selama 5 detik
    setTimeout(function () {
        notification.pause();
    }, 5000); // Tunda 5 detik sebelum memutuskan suara notifikasi

    // Membuat suara dari teks "Pesan Dari"
    var pesanDari = new Audio('pesandari.mp3');

// Membuat suara dari teks nama
const name = document.getElementById('name');
const nameValue = name.value;
const nameUtterance = new SpeechSynthesisUtterance(nameValue);

// Mengganti voice menjadi suara perempuan dalam bahasa indonesia
nameUtterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Indonesian') && voice.name.includes('Female') || voice.name.includes('Bahasa Indonesia') && voice.name.includes('Perempuan'));

// Membuat suara dari teks pesan
const comment = document.getElementById('comment');
const messageValue = comment.value;
const messageUtterance = new SpeechSynthesisUtterance(messageValue);

// Mengganti voice menjadi perempuan
messageUtterance.voice = speechSynthesis.getVoices().find(voice => voice.name.includes('Female'));

    // // Memutar suara notifikasi setelah 0 detik
    // setTimeout(function () {
    //     pesanDari.play();
    // }, 5000);

    // Memutar suara "Pesan Dari" setelah 1500 ms setelah notifikasi
    setTimeout(function () {
        pesanDari.play();
    }, 5000);

    // Memutar suara dari teks nama setelah 1500 ms setelah "Pesan Dari"
    setTimeout(function () {
        window.speechSynthesis.speak(nameUtterance);
    }, 6000);

    // Memutar suara dari teks pesan setelah 4000 ms setelah suara nama
    setTimeout(function () {
        window.speechSynthesis.speak(messageUtterance);
    }, 6500);

    const email = document.getElementById('email');

    const message = document.getElementById('message');
    message.innerHTML =
        'Mesagge from <span style="color: green;"><strong>' + name.value + '</strong></span> : <span style="color: green;"><strong>' + comment.value + '</strong></span> Your message has been sent. We will get back to you within 24 hours, Thanks You!';

    // Reset the form fields
    document.getElementById('contact-form').reset();

    // Mengembalikan warna teks mesagenya, nama, dan komentar menjadi hitam setelah 5 detik
    setTimeout(function () {
        message.innerHTML = message.innerHTML.replace(/(<span style="color: green;"><strong>[^<]+<\/strong><\/span>)/g, function (match) {
            return match.replace('style="color: green;"', 'style="color: black;"');
        });
    }, 15000);

    // Menghilangkan pesan setelah 5 detik
    setTimeout(function () {
        message.innerHTML = 'Hello, my name is Restu Ardiansyah, I am a web developer, I ask you for advice about my website?, Give me suggestions if there are mistakes about this website, and I apologize if the website is not very good and modern, Thank you';
    }, 15000);
});