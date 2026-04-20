document.addEventListener('DOMContentLoaded', () => {
    const personCards = document.querySelectorAll('.person-card');
    const detailView = document.getElementById('detail-view');
    const backButton = document.getElementById('back-button');

    const detailName = document.getElementById('detail-name');
    const detailBio = document.getElementById('detail-bio');
    const detailImage = document.getElementById('detail-image');

    const peopleData = {
        "1": {
            name: "Muharrem Kural",
            bio: "Burdur'da doğan bu adam gayesizliği ile tanınır, ona bulaşmadıkça kimseye zararı olmaz. Kalbi temizdir.",
            image: "kisi1.jpg"
        },
        "2": {
            name: "Çınar Güngör",
            bio: "Denizli'nin bir köyünde büyüyen bu elemanın nereli olduğu belli değildir. Bazen çok hareketli ve sinirlidir. Beyninin içinde her şeyi düşündüğünü iddia eder.",
            image: "kisi2.jpg"
        },
        "3": {
            name: "Ali Osman Beytemir",
            bio: "Denizlinin unutulmuş bir ilçesinde doğup büyüyen bu lavuk dobra herifin tekidir aslında iyi karakterlidir ama bazen mal mal hareketlerde bulunabilir.",
            image: "kisi3.jpg"
        },
        "4": {
            name: "Elif Sena Bingöl",
            bio: "Özellikle yaptığı malca hareketlerle akıllarda yer edinen bu kız büyümeyi unuttuğu çenesiyle PAÜ denen okulda hayata devam etmektedir.",
            image: "kisi4.jpg"
        },
        "5": {
            name: "Şeval Erkol",
            bio: "Hümanistlik üstüne master yapmış biri olarak ikili ilişkiler içinde kalan bu kız beklenmedik hareketler yaparak sizleri şaşırtabilir.",
            image: "kisi5.jpeg"
        }
    };

    personCards.forEach(card => {
        card.addEventListener('click', () => {
            const personId = card.getAttribute('data-person');
            const data = peopleData[personId];

            if (data) {
                detailName.textContent = data.name;
                detailBio.textContent = data.bio;
                
                // Resim varsa img etiketi oluştur, yoksa placeholder metni yaz
                if (data.image && data.image.includes('.')) {
                    detailImage.innerHTML = `<img src="${data.image}" alt="${data.name}" style="width:100%; height:100%; object-fit:cover;">`;
                } else {
                    detailImage.textContent = data.image;
                }

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
