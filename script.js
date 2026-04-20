document.addEventListener('DOMContentLoaded', () => {
    const personCards = document.querySelectorAll('.person-card');
    const detailView = document.getElementById('detail-view');
    const backButton = document.getElementById('back-button');
    
    const detailName = document.getElementById('detail-name');
    const detailBio = document.getElementById('detail-bio');
    const detailImage = document.getElementById('detail-image');

    // Bu veriler ileride gerçek fotoğraf ve biyografilerle güncellenecek
    const peopleData = {
        "1": {
            name: "Kişi 1",
            bio: "Buraya Kişi 1'in biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "Fotoğraf Bekleniyor"
        },
        "2": {
            name: "Kişi 2",
            bio: "Buraya Kişi 2'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "Fotoğraf Bekleniyor"
        },
        "3": {
            name: "Kişi 3",
            bio: "Buraya Kişi 3'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "Fotoğraf Bekleniyor"
        },
        "4": {
            name: "Kişi 4",
            bio: "Buraya Kişi 4'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "Fotoğraf Bekleniyor"
        },
        "5": {
            name: "Kişi 5",
            bio: "Buraya Kişi 5'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "Fotoğraf Bekleniyor"
        }
    };

    personCards.forEach(card => {
        card.addEventListener('click', () => {
            const personId = card.getAttribute('data-person');
            const data = peopleData[personId];

            if (data) {
                detailName.textContent = data.name;
                detailBio.textContent = data.bio;
                detailImage.textContent = data.image;
                
                // Detay sayfasını göster
                detailView.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Kaydırmayı engelle
            }
        });
    });

    backButton.addEventListener('click', () => {
        // Detay sayfasını gizle
        detailView.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Kaydırmayı geri aç
    });
});
