document.addEventListener('DOMContentLoaded', () => {
    const personCards = document.querySelectorAll('.person-card');
    const homeView = document.getElementById('home-view');
    const detailView = document.getElementById('detail-view');
    const backButton = document.getElementById('back-button');
    
    const detailName = document.getElementById('detail-name');
    const detailBio = document.getElementById('detail-bio');
    const detailRole = document.getElementById('detail-role');
    const detailImageContainer = document.getElementById('detail-image-container');

    // Bu veriler ileride gerçek fotoğraf ve biyografilerle güncellenecek
    const peopleData = {
        "1": {
            name: "VORTEX",
            role: "POINTMAN",
            bio: "Vortex, Tayfa Katliam'ın en ön safında yer alan, hızı ve çevikliğiyle tanınan bir operatördür. Stratejik noktalara sızma ve düşman hatlarını bozma konusunda uzmandır.",
            imageText: "PHOTO 1"
        },
        "2": {
            name: "KRONOS",
            role: "STRATEGIST",
            bio: "Kronos, ekibin beynidir. Savaş alanındaki her hareketi önceden kestirir ve ekibi en az kayıpla zafere ulaştıracak planları hazırlar.",
            imageText: "PHOTO 2"
        },
        "3": {
            name: "ALPHA-7",
            role: "SQUAD LEADER",
            bio: "Alpha-7, Tayfa Katliam'ın kurucusu ve lideridir. Kararlılığı ve liderlik vasıflarıyla ekibi her türlü zorluğun altından çekip çıkarır.",
            imageText: "PHOTO 3"
        },
        "4": {
            name: "SPECTRE",
            role: "SNIPER",
            bio: "Spectre, gölgelerin içinden hareket eder. Uzun mesafeli atışlardaki kusursuz isabetiyle düşmanları daha ne olduğunu anlamadan etkisiz hale getirir.",
            imageText: "PHOTO 4"
        },
        "5": {
            name: "TITAN",
            role: "SUPPORT",
            bio: "Titan, ekibin yıkılmaz kalesidir. Ağır mühimmat ve savunma sistemleri konusundaki uzmanlığıyla ekibin arkasını kollar ve ateş gücü sağlar.",
            imageText: "PHOTO 5"
        }
    };

    personCards.forEach(card => {
        card.addEventListener('click', () => {
            const personId = card.getAttribute('data-person');
            const data = peopleData[personId];

            if (data) {
                // Verileri doldur
                detailName.textContent = data.name;
                detailBio.textContent = data.bio;
                detailRole.textContent = data.role;
                detailImageContainer.textContent = data.imageText;
                
                // Görünümü değiştir
                homeView.classList.add('hidden-view');
                detailView.classList.remove('hidden-view');
                
                // Sayfanın başına kaydır
                window.scrollTo(0, 0);
            }
        });
    });

    backButton.addEventListener('click', () => {
        detailView.classList.add('hidden-view');
        homeView.classList.remove('hidden-view');
        window.scrollTo(0, 0);
    });
});
