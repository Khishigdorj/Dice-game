// Lesson 41:
// Хувьсагчдийг оноож, тоглоом эхлэхэд бэлдэх нь.

/* Тоглож байгаа тоглогчийн ээлжийг хадгалах хувьсагч: 
Нэгдүгээр тоглогчийг 0,
Хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
*/
var activePlayer = 0;

// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч:
// Array ашиглан хийх нь.
var scores = [0, 0];

// Ээлжийн оноог түр цуглуулдаг хувьсагч :
var roundScore = 0;

/* Шоо хэд буусныг хадгалах хувьсагч :
1-6 гэсэн утгыг энэ хувьсагчид рэндомоор үүсгэж өгнө.
*/

var diceNumber = Math.floor(Math.random() * 6) + 1;
// 1-6 хүртэлх рэндом тоо.

/////////////////// Домыг хэрхэн өөрчлөх вэ?
// 1. HTML - ээс айдийг нь хайж олно.
// window.document.querySelector('#score-0').textContent = diceNumber;

/* window доторх нүдэнд харагддаг документ.
querySelector - нь домын элементийг хайж олж өгдөг функц.
.textContent =
        <div class="player-score" id="score-0">43</div>
        ийн 43.

.textContent = '100'; - нь уг объектийн text content-нд
өөр утга олгоно. 
*/

// window.document.getElementById('#score-1').innerHTML = '<em>Yes!<em>';
// .innerHTML function - text Content биш доторх HTML ашиглан өөрчлөхийг хүсэх үед ашиглана.

/* Програм ажиллахад бэлдэж бүх дүнг 0 болгох нь.
id дуудах бичилт 1.
Энэ нь олон төвөгтэй зүйлсийг дуудахад ашиглагддаг. */
// document.querySelector('#score-0').textContent = 0;
// document.querySelector('#score-1').textContent = 0;

document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';

/* 
id дуудах бичилт 2.
Энэ нь зөвхөн Айди дуудахад зориулагдсан бичилт учраас
өмнөхөө бодвол илүү хурдтай ажилладаг. */
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

// Lesson 42:
// Шоо хаях товчыг бэлдэх нь.

// 1. Уртаар
// Roll dice товчыг Дом - оос аваад click Эвент холбоно.
document.querySelector('.btn-roll').addEventListener('click', shooShid);
// .addEventListener - нь эвент холбож өгнө.
// .addEventListener('click', shooshid) - click хийх үед ямар үйлдэл хийх ёстойг араас нь залгуулан холбож өгнө.

function shooShid() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  document.querySelector('.dice').style.display = 'block';
  // .style. - ашиглан CSS өөрчлөлт хийх нь.

  document.querySelector('.dice').src = 'dice-' + diceNumber + '.png';
  /* dice-1,2,3,4,5,6 зургуудийг товтой холбож өгөх нь.
  img src = .src
  dice-1,2,3,4,5,6
  + diceNumber буюу random numbers
  + .png (dice-1,2,3,4,5,6.png)
  */
}

/* 2. Багасгасан нь. (Anonymous function)
  Энэ бичилт нь програмыг илүү хурдан ажилуулна. */
var diceDom = document.querySelector('.dice');

document
  .querySelector('.btn-roll')
  .addEventListener('click', function shooshid() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + diceNumber + '.png';

    // Lesson - 43:
    // Оноог хадгалж, тоглогчийн ээлжийг солих нь.

    // Буусан тоо нь 1 ээс ялгаатай бол оноог нь цааш хадгална.
    if (diceNumber !== 1) {
      // 1 ээс бусад тоо буусан тохиолдолд уг тоог тоглогчид нэмж өгнө.
      // roundScore = Ээлжийн оноог түр цуглуулагч хувьсагч
      roundScore = roundScore + diceNumber;
      document.getElementById('current-' + activePlayer).textContent =
        roundScore;
    } /* Хэрвээ 1 буучих юм бол идэвхтэй тоглогч 0 байвал 1 болго.
    Харин тоглогч 1 байвал 0 болго. Ингэснээр тоглогч солигдно.
    */ else {
      // 1 буусан учраас энэ тоглогчийн ээлжиндээ цуглуулсан оноог 0 болгоно.
      roundScore = 0;
      // 1 буусан учраас энэ тоглогчийн ээлжиндээ цуглуулсан оноог textContent дээр 0 болгоно.
      document.getElementById('current-' + activePlayer).textContent = 0;

      // Тэгээд тоглогчийн ээлжийг нөгөө тоглуулагч руу шилжүүлнэ.
      // if (activePlayer === 0) {
      //   activePlayer = 1;
      // } else {
      //   activePlayer = 0;
      // }

      // Гурвалсан оператороор товчхон бичих нь :
      // Хэрвээ 0 дугаар тоглогч бол activePlayer ээ 1 болгоно.
      // Харин 1 - р тоглогч бол activePlayer ээ 0 болгоно.
      activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

      // Улаан цэгийг шилжүүлнэ.
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
      // toggle нь уг класст active гэх таг байвал устгана, байхгүй бол нэмнэ.

      // document.querySelector('.player-0-panel').classList.remove('active');
      //.player-0-panel гэх тагны active class - ийг хасаж өгнө.
      // document.querySelector('.player-1-panel').classList.add('active');
      //.player-0-panel гэх тагны active class - ийг нэмэх нь.

      // Тоглогч солигдох явцад шоог түр алга болгоно.
      diceDom.style.display = 'none';
    }
  });

// Lesson 44 : Hold(btn-hold) товчыг ажиллагаанд оруулах нь.
// 1. Товчыг дарах үед яахыг зааж өгнө.
document.querySelector('.btn-hold').addEventListener('click', function () {
  // Тоглож буй хүний цуглуулсан ээлжний оноог глобал оноон дээр нь нэмж өгнө.
  // scores[0] гэдэг нь 1-р тоглогч. Харин [1] нь 2-р тоглогч юм.
  // if (activePlayer === 0) {
  //   scores[0] = score[0] + roundScore;
  // } else {
  //   scores[1] = score[1] + roundScore;
  // }
  scores[activePlayer] = scores[activePlayer] + roundScore;

  // Харин одоо дэлгэц дээрх тоог өөрчлөнө.
  document.getElementById('score-' + activePlayer).textContent =
    scores[activePlayer];

  // Уг тоглогчийн оноо 100 - аас их эсэхийг шалгана.
  // Тэгээд 100 - аас их байвал Winner.
  // Мөн доорх үйлдлүүд рүү дамжихгүй.
  if (scores[activePlayer] >= 20) {
    document.getElementById('name-' + activePlayer).textContent = 'ЯЛАГЧ !!!';
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.add('winner');
    // .player-1-panel
    document
      .querySelector('.player-' + activePlayer + '-panel')
      .classList.remove('active');
    // active буюу улаан бөөрөнхийг хасах нь.
  } else {
    // Тоглогчийн ээлжийг солино.
    // Сольж өгдөг функцаа дуудаж өгөв.
    switchToNextPlayer();
  }
});

// Тоглогчоо шилжүүлдэг функц бичих нь:
function switchToNextPlayer() {
  // Ээлжийн оноог нь дээш шилжүүлсэн учраас буцаагаад 0 болгоно.
  roundScore = 0;
  document.getElementById('current-' + activePlayer).textContent = '0';

  // Тоглогчийн ээлжийг сольно.
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }

  // Улаан цэгийг шилжүүлнэ.
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  // toggle нь уг класст active гэх таг байвал устгана, байхгүй бол нэмнэ.

  // Шоог түр алга болно.
  diceDom.style.display = 'none';
}

// Lesson 45: New Game Button
document.querySelector('.btn-new').addEventListener('click', function () {});
