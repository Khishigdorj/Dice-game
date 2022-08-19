// Lesson 41:
/* Тоглогчийн ээлжийг хадгалах хувьсагч: 
Нэгдүгээр тоглогчийг 0,
Хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
*/
var activePlayer = 1;

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
  });

// Lesson - 43:
