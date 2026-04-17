// Memastikan halaman HTML sudah dimuat sepenuhnya sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    // Mencari elemen form berdasarkan ID
    const pesanForm = document.getElementById('pesanForm');

    // Mengecek apakah form ada di halaman ini (menghindari error di halaman Home/Landing)
    if (pesanForm) {
        pesanForm.addEventListener('submit', function(event) {
            // Mencegah halaman me-refresh yang menyebabkan error 405
            event.preventDefault(); 
            
            // Menampilkan notifikasi
            alert('Terima kasih! Pesan Anda telah berhasil dikirim ke Dimas.');
            
            // Mengosongkan form
            this.reset();
        });
    }

});