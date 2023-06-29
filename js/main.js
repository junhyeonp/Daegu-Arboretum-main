// 견학 체험

const exersises = document.querySelectorAll('#reserve .exersise');
const labels = document.querySelectorAll('#reserve label');
const lineAdds = document.querySelectorAll('#reserve .line-add');
const explains = document.querySelectorAll('#reserve .explain');
exersises.forEach((exersise) => {
  exersise.innerHTML = `
  <div class="header">
    <div class="btn prevDay"></div>
    <h2 class="dateTitle"></h2>
    <div class="btn nextDay"></div>
  </div>
  <div class="reservation-wrapper">
    <div class="rap">
          <div class="grid dateHead">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>
          <div class="grid dateBoard"></div>
        </div>

        <!-- resev box -->
        <div class="reservation_block">
          <h3><span class="currentDate"></span><span>예약현황 확인</span></h3>
          <div class="time">
            <button>
              <span><i class="fa-regular fa-clock"></i></span>9:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>10:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>11:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>12:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>13:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>14:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>15:00
            </button>
            <button>
              <span><i class="fa-regular fa-clock"></i></span>16:00
            </button>
          </div>
          <button class="resev_check">예약확인<i class="fa-solid fa-check"></i></button>
        </div>
      </div>
  </div>
  `;
});

labels.forEach((label, labelKey) => {
  label.addEventListener('click', () => {
    explains.forEach((explain, exsKey) => {
      if (labelKey !== exsKey) {
        explain.classList.remove('isBlock');
      } else {
        explain.classList.toggle('isBlock');
      }
    });
    exersises.forEach((exersise, exKey) => {
      if (labelKey !== exKey) {
        exersise.classList.remove('isBlock');
      } else {
        exersise.classList.toggle('isBlock');
      }
    });
    lineAdds.forEach((line, liKey) => {
      if (labelKey !== liKey) {
        line.classList.remove('isGreen');
      } else {
        line.classList.toggle('isGreen');
      }
    });
  });
});

// calender
const makeCalendar = (date) => {
  const currentYear = new Date(date).getFullYear();
  const currentMonth = new Date(date).getMonth() + 1;

  const firstDay = new Date(date.setDate(1)).getDay();
  const lastDay = new Date(currentYear, currentMonth, 0).getDate();

  const limitDay = firstDay + lastDay;
  const nextDay = Math.ceil(limitDay / 7) * 7;

  let htmlDummy = '';
  // 한달 전 날짜 표시
  for (let i = 0; i < firstDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  // 이번달  날짜 표시
  for (let i = 1; i <= lastDay; i++) {
    htmlDummy += `<div class='color'>${i}</div>`;
  }

  for (let i = limitDay; i < nextDay; i++) {
    htmlDummy += `<div class="noColor"></div>`;
  }

  const dateBoards = document.querySelectorAll(`.dateBoard`);

  dateBoards.forEach((dateBoard) => {
    dateBoard.innerHTML = htmlDummy;
  });

  const dateTitles = document.querySelectorAll(`.dateTitle`);
  dateTitles.forEach((dateTitle) => {
    dateTitle.textContent = `${currentYear}년 ${currentMonth}월`;
  });
};

const date = new Date();
makeCalendar(date);
// prev month
const prevs = document.querySelectorAll(`.prevDay`);
prevs.forEach((prev) => {
  prev.onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() - 1)));
  };
});

// next month
const nexts = document.querySelectorAll(`.nextDay`);
nexts.forEach((next) => {
  next.onclick = () => {
    makeCalendar(new Date(date.setMonth(date.getMonth() + 1)));
  };
});

const currentDate = document.querySelector('.currentDate');
const divs = document.querySelectorAll('.color');
divs.forEach((div) => {
  div.addEventListener('click', () => {
    divs.forEach((value) => {
      if (div !== value) {
        value.classList.remove('changeBg');
      } else {
        div.classList.toggle('changeBg');
      }
    });
  });
});

// button

const buttons = document.querySelectorAll('.time button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    buttons.forEach((value) => {
      if (button !== value) {
        value.classList.remove('changeBg');
      } else {
        button.classList.toggle('changeBg');
      }
    });
  });
});

// 상세페이지 탭 구현
const tapLis = document.querySelectorAll('.tap li');
const svgs = document.querySelectorAll('.tap li svg');
const tapContents = document.querySelectorAll('.tap_container > .tab_content');

tapLis.forEach((tapLi, key) => {
  tapLi.addEventListener('click', (e) => {
    e.preventDefault();
    tapLis.forEach((tapLi2, key2) => {
      if (key !== key2) {
        tapLi2.classList.remove('active');
      } else {
        tapLi2.classList.toggle('active');
      }
    });

    tapContents.forEach((tapContent, tapkey) => {
      if (key !== tapkey) {
        tapContent.classList.remove('active');
      } else {
        tapContent.classList.toggle('active');
      }
    });

    svgs.forEach((svg, k) => {
      if (key !== k) {
        svg.classList.remove('activeSv');
      } else {
        svg.classList.toggle('activeSv');
      }
    });
  });
});
