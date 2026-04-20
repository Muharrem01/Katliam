document.addEventListener('DOMContentLoaded', () => {
    const personCards = document.querySelectorAll('.person-card');
    const detailView = document.getElementById('detail-view');
    const backButton = document.getElementById('back-button');

    const detailName = document.getElementById('detail-name');
    const detailBio = document.getElementById('detail-bio');
    const detailImage = document.getElementById('detail-image');

    const peopleData = {
        "1": {
            name: "KİŞİ 1",
            bio: "Buraya Kişi 1'in biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "PHOTO 1"
        },
        "2": {
            name: "KİŞİ 2",
            bio: "Buraya Kişi 2'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "PHOTO 2"
        },
        "3": {
            name: "KİŞİ 3",
            bio: "Buraya Kişi 3'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "PHOTO 3"
        },
        "4": {
            name: "KİŞİ 4",
            bio: "Buraya Kişi 4'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "PHOTO 4"
        },
        "5": {
            name: "KİŞİ 5",
            bio: "Buraya Kişi 5'nin biyografisi gelecek. Henüz bilgi girişi yapılmadı.",
            image: "PHOTO 5"
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

                detailView.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    backButton.addEventListener('click', () => {
        detailView.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
});
