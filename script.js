document.addEventListener('DOMContentLoaded', () => {
    const personCards = document.querySelectorAll('.person-card');
    const detailView = document.getElementById('detail-view');
    const backButton = document.getElementById('back-button');

    const detailName = document.getElementById('detail-name');
    const detailBio = document.getElementById('detail-bio');
    const detailImage = document.getElementById('detail-image');

    const peopleData = {
        "1": {
            name: "VORTEX",
            bio: "Vortex, Tayfa Katliam'ın en ön safında yer alan, hızı ve çevikliğiyle tanınan bir operatördür. Stratejik noktalara sızma ve düşman hatlarını bozma konusunda uzmandır.",
            image: "PHOTO 1"
        },
        "2": {
            name: "KRONOS",
            bio: "Kronos, ekibin beynidir. Savaş alanındaki her hareketi önceden kestirir ve ekibi en az kayıpla zafere ulaştıracak planları hazırlar.",
            image: "PHOTO 2"
        },
        "3": {
            name: "ALPHA-7",
            bio: "Alpha-7, Tayfa Katliam'ın kurucusu ve lideridir. Kararlılığı ve liderlik vasıflarıyla ekibi her türlü zorluğun altından çekip çıkarır.",
            image: "PHOTO 3"
        },
        "4": {
            name: "SPECTRE",
            bio: "Spectre, gölgelerin içinden hareket eder. Uzun mesafeli atışlardaki kusursuz isabetiyle düşmanları daha ne olduğunu anlamadan etkisiz hale getirir.",
            image: "PHOTO 4"
        },
        "5": {
            name: "TITAN",
            bio: "Titan, ekibin yıkılmaz kalesidir. Ağır mühimmat ve savunma sistemleri konusundaki uzmanlığıyla ekibin arkasını kollar ve ateş gücü sağlar.",
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
