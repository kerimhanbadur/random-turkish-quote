let quotesPool = [
    'Her zaman, ne kadar yol alacağınıza değil, ne kadar yol aldığınıza odaklanın. ~Anonim',
    'Kendinizi biraz rahat bırakırsanız biraz huzurunuz olacaktır, daha çok rahat bırakırsanız daha çok huzurunuz olacaktır. ~Ajahn Chah',
    'Uçurtmalar rüzgâr gücüyle değil, o güce karşı koydukları için yükselir. ~Winston Churchill',
    'Bir kayıptan ders çıkarırsan kaybetmiş olmazsın. ~Austin O’Malley',
    'Kişi kendi gölgesi üzerinde durur ve neden karanlık olduğunu merak eder. ~Zen Atasözü',
    'Hatalar keşfin giriş kapılarıdır. ~James Joyce',
    'Hayatlarımız sadece risk aldığımızda gelişir ve alacağımız ilk ve en zor risk ise kendimize dürüst olmaktır. ~Walter Anderson',
    'Bu değişim dünyasında, gelen hiçbir şey kalmaz ve giden hiçbir şey kaybolmaz. ~Anne Sophie Swetchine',
    'Üzüntü asla yarının sıkıntısından bir şey çalmaz sadece bugünün neşesini tüketir. ~Leo Buscaglia',
    'Dünya ıstırap çekenlerle doludur. Aynı zamanda baş edenlerle de doludur. ~Helen Keller',
    'Doğru yönde birçok defa küçük adım atmak,  geriye doğru tökezletecek öne büyük bir sıçrama yapmaktan daha iyidir. ~Atasözü',
    'Bilgelik bundan sonra ne yapılacağını, beceri nasıl yapılacağını bilmektir, erdem ise yapmaktır. ~David Starr Jordan',
    'Açık olun böylelikle hayat daha kolaylaşacaktır. Bir bardak sudaki bir kaşık tuz, suyu içilmez hale getirir. Bir göldeki bir kaşık tuz ise neredeyse fark edilmez." ~Buddha',
    'Kendinize saygı duyun, sabırlı ve merhametli olun. Bunlarla, her şeyin üstesinden gelebilirsiniz. ~Jack Kornfield',
    'Evet deme gücü olmayan insanın size hayır demesine asla izin vermeyin. ~Eleanor Roosevelt',
    'Hayatın yüzde %10’u başınıza gelenler ve %90’ı ona nasıl tepki verdiğinizdir. ~Charles Swindoll',
    'Hiç korkmamışsan, utanmamışsan ya da incinmemişsen, hiç risk almamışsın demektir. ~Julia Soul',
    'Başla, yürekli ol, bilge olmak için uğraş. ~Horace',
    'Geçmişin, sizi şimdiki zamandan alı koyabilecek hiçbir gücü yoktur. Sadece geçmiş ile ilgili sıkıntılarınız bunu yapabilir. ~Eckhart Tolle',
    'Bir şeyi beğenmiyorsan değiştir, değiştiremiyorsan onunla ilgili bakış açını değiştir. ~Mary Engelbreit',
    'Yüzünü güneşe karşı dön, gölgeler arkana düşecektir. ~Maori Atasözü',
    'Hiç sahip olmadığınız bir şeyi elde etmek için, hiç yapmadığınız bir şeyi yapmanız gerekir. ~Anonim',
    'Dalın ucuna gitmekten korkma, meyve oradadır. ~H. Jackson Browne',
    'Yaşam sanatı, bırakmanın ve elinde tutmanın güzel karışımında gizlidir. ~Havelock Ellis',
    'Hepimiz imkansız durumlar olarak zekice kılık değiştiren muhteşem fırsatlar dizisiyle karşılaşırız. ~Charles R. Swindoll',
    'Sizi çökerten yük değil onu taşıdığınız yoldur. ~Lena Horne',
    'İnsanı güçlü kılan, bazı insanların düşündüğü gibi elinde tutmak değil, bazen de bırakmaktır. ~Anonim',
    'Sert bir düşüş sert bir sıçrama demektir... Eğer doğru malzemeden yapılmışsanız. ~Anonim',
    'Acı çekmemize sebep, başımıza gelen değildir; başımıza gelenle ilgili kendimize ne söylediğimizdir. ~Pema Chodron',
    'Hiçbir duygu sonsuza dek sürmez. ~Rainer Maria Rilke',
    'Kaybettiğinizde aldığınız dersi de kaybetmeyin. ~Anonim',
    'Problemlerimizi onları yaratırken kullandığımız aynı düşünce yapısı ile çözemeyiz. ~Albert Einstein',
    'Savaştığınız şey güçlenir ve direndiğiniz şey direnir. ~Eckhart Tolle',
    'Özgürlük kendinize yapılanlara karşı takındığınız tavırdır. ~Jean-Paul Sartre',
    'Problemler gelişimin bedelidir. ~Charles F. Kettering',
    'İmkansızlıklar sadece, henüz öğrenmediğimiz şeylerdir. ~Charles W. Chestnutt',
    'Sadece yeni bir şey denediğinizdeki tuhaf ve rahatsız hisle yüzleşmeye hazırsanız gelişebilirsiniz. ~Brian Tracy',
    'Sınırlarımızı kabul ettikten sonra onun ötesine gidelim. ~Albert Einstein',
    'Hiç acı çekmemek, hiç acıdan kurtulmamaktır. ~Edgar Allen Poe',
    'Uğraşmış olmak, çaba göstermiş olmak, belirli ideallere sadık olmuş olmak – sadece bu bile tek başına mücadeleye değer. ~William Penn',
    'Hayatta başlıca iki seçim vardır: koşulları olduğu gibi kabul etmek, ya da onları değiştirme sorumluluğunu kabul etmek. ~Denis Waitley',
    'Aynı zamanda kıskanç ve mutlu olamazsınız. ~Frank Tyger',
    'Aklının, hayatın tüm zorluklarını vücudunun taşıması gerektiğine inandırmasına izin verme. ~Astrid Alauda',
    'Kendini herkese göre ayarlayan kimse sonunda kendini tüketecektir. ~Raymond Hull',
    'Tümüyle canlı, tümüyle insan ve tamamen uyanık olmak sürekli olarak yuvadan atılmaktır. ~Pema Chodron',
    'Hafiflemek ve özgür olmak için endişe ve kaygılarımı bırakmaya yemin ederim. ~Thich Nhat Hanh',
    'Özgürlük her şeyi olduğu gibi kabul ettiğimiz andır. ~Karen Maezen Miller',
    'Başınıza olumsuz bir şey geldiğinde, içinde saklı derin bir ders vardır. ~Eckhart Tolle',
    'Her gün size bir armağan gibi sunulan her şeyi kabul edin. Akşam olduğunda zihnen hepsini geri verin. Böylece özgürleşirsiniz. ~Daniel Levin',
    'Arama, araştırma, sorma, kapısını çalma, talep etme-rahatla. Rahatlarsan, gelir. Rahatlarsan, oradadır. Rahatlarsan, onunla birlikte hissetmeye başlarsın. ~Osho',
    'Bazı şeyleri zor yapan, onun zor olduğunu düşünmemizdir. ~Seneca',
    'Doğru yönde bakıyorsak, yapmamız gereken tek şey yürümeye devam etmektir. ~Atasözü',
    'Bağışlamak geçmişi değiştirmez ama geleceği genişletir. ~Paul Boese',
    'Sevincimize en büyük engel kırgınlıktır. ~Pema Chodron',
    'Hiçbir şey bize bilmemiz gerekenleri öğretene kadar bir yere gitmezler. ~Pema Chodron',
    'Elmas, stresi son derece iyi idare edebilen sadece küçük bir parça kömürdür. ~Anonim',
    'Hepimizin problemleri var. Onları çözdüğümüz yol bizi farklı yapandır. ~Anonim',
    'Düştüğünden bir defa daha fazla kalkarsan üstesinden gelirsin. ~Çin Atasözü',
    'Hayatımızdaki gölgelerin çoğu kendi güneşimizin önünde durmamızdan kaynaklanır. ~Ralph Waldo Emerson',
    'Bir şeye tümüyle sahip olmayabiliriz ama birlikte her şeye sahibiz. ~Anonim',
    'Her düştüğünde, yerden bir şeyi kaldır. ~Oswald Avery',
    'İnsan ruhu ona olabilecek her şeyden daha güçlüdür. ~C.C. Scott',
    'Her gün güzel olmayabilir, fakat her gün güzel bir şeyler vardır. ~Anonim',
    'Başarısızlık yoktur. Sadece deneyimler ve onlara karşı tepkileriniz vardır. ~Tom Krause',
    'Bir şeyin cevabını bilip, bilmemeyi dilediğimizde, istediğimiz şey tavsiyedir. ~Erica Jong',
    'Asla pişman olmayın. İyiyse, mükemmeldir. Kötüyse, tecrübedir. ~Victoria Holt',
    'Sana bağlı şeyleri kontrol etmekle uğraşabilecekken, kontrol edemediğin şeylerle ilgili endişelenmek niye? ~Anonim',
    'Hayatın zorlukları seni felce uğratmak için değil, senin kim olduğunu keşfetmene yardım etmek içindir. ~Bernice Johnson Reagon',
    'Şikayet etmek aptallıktır. Ya harekete geç ya da unut. ~Stefan Sagmeister',
    'Özen ve çaba şans getirir. ~Atasözü',
    'Bir tökezleme bir düşüşü engelleyebilir. ~Atasözü',
    'Yoldaki kavis, dönüş yaptığınız takdirde, yolun sonu değildir. ~Anonim',
    'Sorunlarınızın sizi geri itmesine değil; hayallerinizin sizi ileri götürmesine izin verin. ~Anonim',
    'Kazanma isteğinden daha güçlü olanı başlama cesaretidir. ~Anonim',
    'Bugün başlanmamış bir şey asla yarın bitirilemez. ~Goethe',
    'Kıyıyı gözden kaybetmeye cesaret etmedikçe insan yeni okyanuslar keşfedemez. ~Andre Gide',
    'Korku, gerçeğe yaklaşmanın doğal bir tepkisidir. ~Pema Chodron',
    'Zorluk karşısında kararlılık karakteri üretir. ~Anonim',
    'Makul olanı yapabilir ya da mümkün olana karar verebilirsin. ~Anonim',
    'Bugün kaybedersen, yarın kazan. Meydan okumanın bu ebedi ruhunda, bir galibin kalbi vardır. ~Daisaku Ikeda',
    'Bir engel, basamak taşı da olabilir köstek de. ~Anonim',
    'Hayatın zorlukları bizi daha iyi yapmak içindir, daha acı yapmak için değil. ~Anonim',
    'Bugünün hayal kırıklıklarının yarının hayallerini gölgelemesine izin vermeyin. ~Anonim',
    'Gerçek mutluluk, koşullar ne olursa olsun, yenilmeyen güçlü bir ruhu oluşturmak demektir. ~Daisaku Ikeda'
];

var colorsPool = [
    ["#ECF5B7", "#9CB418", "#7D9014"],
    ["#B7E1CE", "#358260", "#1E4835"],
    ["#FFAB91", "#FF7043", "#E64A19"],
    ["#C3C8BC", "#919A84", "#5E6553"],
    ["#EF9A9A", "#F44336", "#D32F2F"],
    ["#E6EE9C", "#CDDC39", "#827717"],
    ["#90CAF9", "#2196F3", "#1565C0"],
    ["#CE93D8", "#AB47BC", "#6A1B9A"],
    ["#F8BBD0", "#F06292", "#E91E63"],
    ["#C5CAE9", "#7986CB", "#3F51B5"],
    ["#B0BEC5", "#78909C", "#546E7A"],
    ["#B2EBF2", "#26C6DA", "#0097A7"],
    ["#BCAAA4", "#795548", "#3E2723"]
];

let oldQuoteIndex;
let oldColorIndex;

function generateNumber(dataPool) {
    return Math.floor(Math.random() * dataPool.length);
}

function generateNewQuote() {
    let index = generateNumber(quotesPool);

    while (index === oldQuoteIndex) {
        index = generateNumber(quotesPool);
    }


    let newQuote = quotesPool[index];
    let quote = document.getElementById("quote");

    quote.innerHTML = newQuote;

    console.log(newQuote);


    let tweet = document.getElementById("tweet-quote");
    tweet.href = 'https://twitter.com/intent/tweet?hashtags=quotes&text="' + newQuote;

    oldQuoteIndex = index;
}

function generateNewColor() {
    let index = generateNumber(colorsPool);

    while (index === oldColorIndex) {
        index = generateNumber(colorsPool);
    }

    let colorShade = colorsPool[index];
    let randomQuoteButton = document.querySelectorAll(".btn")[0];
    let twitterButton = document.querySelectorAll(".btn")[1];
    let background = document.body;
    let text = document.querySelector(".container");
    let border = document.querySelector(".border");
    let randomQuoteBorder = document.querySelectorAll(".border-smaller")[0];
    let twitterBorder = document.querySelectorAll(".border-smaller")[1];

    randomQuoteButton.style.background = colorShade[0];
    twitterButton.style.background = colorShade[0];
    background.style.background = colorShade[0];
    text.style.color = colorShade[1];
    border.style.borderColor = colorShade[1];
    border.style.boxShadow = "4px 4px 0px 3px " + colorShade[2];
    randomQuoteBorder.style.borderColor = colorShade[1];
    randomQuoteBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];
    twitterBorder.style.borderColor = colorShade[1];
    twitterBorder.style.boxShadow = "3px 3px 0px 2px " + colorShade[2];

    oldColorIndex = index;

}

function onQuoteButtonClick() {
    
    let randomQuoteButton = document.querySelector(".random-quote");
    randomQuoteButton.addEventListener("click", function(){
      generateNewQuote();
      generateNewColor();
    });
}

onQuoteButtonClick();

window.onload = function () {
    generateNewQuote();
    generateNewColor();
};
