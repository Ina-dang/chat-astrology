// 사주 분석에 필요한 사주 정보를 설정합니다
const sajuDetails = {
  "1985-02-14": {
    day: {
      title: "을축 (乙丑)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "丑", type: "토: 土" },
      },
      description:
        "을축 (乙丑): 을(乙)의 나무와 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 노력하는 것을 중시하는 성향을 나타냅니다. 축(丑)은 지혜와 근면성을 상징하며, 을(乙)은 부드러움과 협력을 중시합니다.",
    },
    month: {
      title: "갑오 (甲午)",
      pre: {
        first: { title: "甲", type: "목: 木" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 활동적이며, 오(午)는 열정과 에너지를 상징합니다. 갑(甲)은 적극적이고 강한 성격을 나타냅니다.",
    },
    year: {
      title: "을해 (乙亥)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "亥", type: "수: 水" },
      },
      description:
        "을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 섬세하고 직관적이며, 해(亥)는 감정의 깊이를 상징합니다. 을(乙)은 부드러움과 협력을 중시합니다.",
    },
    time: {
      title: "정미 (丁未)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.",
    },
  },
  "1992-06-21": {
    day: {
      title: "임자 (壬子)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "子", type: "수: 水" },
      },
      description:
        "임자 (壬子): 임(壬)의 물과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 지혜롭습니다. 자(子)는 직관과 인내를 상징합니다.",
    },
    month: {
      title: "계축 (癸丑)",
      pre: {
        first: { title: "癸", type: "수: 水" },
        second: { title: "丑", type: "토: 土" },
      },
      description:
        "계축 (癸丑): 계(癸)의 물과 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.",
    },
    year: {
      title: "신유 (辛酉)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "酉", type: "금: 金" },
      },
      description:
        "신유 (辛酉): 신(辛)의 금과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 분석적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.",
    },
    time: {
      title: "정해 (丁亥)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "亥", type: "수: 水" },
      },
      description:
        "정해 (丁亥): 정(丁)의 불과 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 창의적이고 감정이 풍부하며, 해(亥)는 깊은 감정을 상징합니다.",
    },
  },
  "1995-05-15": {
    day: {
      title: "신미 (辛未)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "신미 (辛未): 신(辛)의 금과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 세심하고 신중하며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.",
    },
    month: {
      title: "임자 (壬子)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "子", type: "수: 水" },
      },
      description:
        "임자 (壬子): 임(壬)의 물과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 지혜롭습니다. 자(子)는 직관과 인내를 상징합니다.",
    },
    year: {
      title: "을해 (乙亥)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "亥", type: "수: 水" },
      },
      description:
        "을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 섬세하고 직관적이며, 해(亥)는 감정의 깊이를 상징합니다.",
    },
    time: {
      title: "병술 (丙戌)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "戌", type: "토: 土" },
      },
      description:
        "병술 (丙戌): 병(丙)의 불과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.",
    },
  },

  "2001-12-01": {
    day: {
      title: "경인 (庚寅)",
      pre: {
        first: { title: "庚", type: "금: 金" },
        second: { title: "寅", type: "목: 木" },
      },
      description:
        "경인 (庚寅): 경(庚)의 금과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 강한 의지와 대담성을 가지며, 인(寅)은 열정과 의지를 상징합니다.",
    },
    month: {
      title: "갑오 (甲午)",
      pre: {
        first: { title: "甲", type: "목: 木" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 활동적이며, 오(午)는 열정과 에너지를 상징합니다.",
    },
    year: {
      title: "계축 (癸丑)",
      pre: {
        first: { title: "癸", type: "수: 水" },
        second: { title: "丑", type: "토: 土" },
      },
      description:
        "계축 (癸丑): 계(癸)의 물과 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.",
    },
    time: {
      title: "을미 (乙未)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 창의적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.",
    },
  },

  "1964-07-28": {
    day: {
      title: "을미 (乙未)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 미(未)는 상상력과 안정성을 상징합니다.",
    },
    month: {
      title: "병자 (丙子)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "子", type: "수: 水" },
      },
      description:
        "병자 (丙子): 병(丙)의 불과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 열정적이고 직관적이며, 자(子)는 감정의 깊이를 상징합니다.",
    },
    year: {
      title: "임술 (壬戌)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "戌", type: "토: 土" },
      },
      description:
        "임술 (壬戌): 임(壬)의 물과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.",
    },
    time: {
      title: "정오 (丁午)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "정오 (丁午): 정(丁)의 불과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 열정적이고 활동적이며, 오(午)는 에너지와 열정을 상징합니다.",
    },
  },
  "1988-04-19": {
    day: {
      title: "병진 (丙辰)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "辰", type: "토: 土" },
      },
      description:
        "병진 (丙辰): 병(丙)의 불과 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 진(辰)은 창의력과 상상력을 상징합니다.",
    },
    month: {
      title: "갑신 (甲申)",
      pre: {
        first: { title: "甲", type: "목: 木" },
        second: { title: "申", type: "수: 水" },
      },
      description:
        "갑신 (甲申): 갑(甲)의 나무와 신(申)의 금이 조화를 이루는 조합입니다. 이 조합은 대담하고 지혜롭습니다. 신(申)은 분석력과 명확성을 상징합니다.",
    },
    year: {
      title: "을미 (乙未)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 미(未)는 상상력과 안정성을 상징합니다.",
    },
    time: {
      title: "경오 (庚午)",
      pre: {
        first: { title: "庚", type: "금: 金" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "경오 (庚午): 경(庚)의 금과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 활동적이며, 오(午)는 열정과 에너지를 상징합니다.",
    },
  },

  "2005-09-15": {
    day: {
      title: "임술 (壬戌)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "戌", type: "토: 土" },
      },
      description:
        "임술 (壬戌): 임(壬)의 물과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.",
    },
    month: {
      title: "계유 (癸酉)",
      pre: {
        first: { title: "癸", type: "수: 水" },
        second: { title: "酉", type: "금: 金" },
      },
      description:
        "계유 (癸酉): 계(癸)의 물과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 실용적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.",
    },
    year: {
      title: "병신 (丙申)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "申", type: "금: 金" },
      },
      description:
        "병신 (丙申): 병(丙)의 불과 신(申)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 지혜롭으며, 신(申)은 분석력과 명확성을 상징합니다.",
    },
    time: {
      title: "정미 (丁未)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.",
    },
  },
  "1999-10-02": {
    day: {
      title: "경자 (庚子)",
      pre: {
        first: { title: "庚", type: "금: 金" },
        second: { title: "子", type: "수: 水" },
      },
      description:
        "경자 (庚子): 경(庚)의 금과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 직관적이며, 자(子)는 감정의 깊이를 상징합니다.",
    },
    month: {
      title: "을축 (乙丑)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "丑", type: "토: 土" },
      },
      description:
        "을축 (乙丑): 을(乙)의 나무와 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.",
    },
    year: {
      title: "임오 (壬午)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "임오 (壬午): 임(壬)의 물과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 열정적이며, 오(午)는 에너지와 열정을 상징합니다.",
    },
    time: {
      title: "경오 (庚午)",
      pre: {
        first: { title: "庚", type: "금: 金" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "경오 (庚午): 경(庚)의 금과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 활동적이며, 오(午)는 열정과 에너지를 상징합니다.",
    },
  },
  "1974-08-07": {
    day: {
      title: "병술 (丙戌)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "戌", type: "토: 土" },
      },
      description:
        "병술 (丙戌): 병(丙)의 불과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.",
    },
    month: {
      title: "정미 (丁未)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.",
    },
    year: {
      title: "경인 (庚寅)",
      pre: {
        first: { title: "庚", type: "금: 金" },
        second: { title: "寅", type: "목: 木" },
      },
      description:
        "경인 (庚寅): 경(庚)의 금과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 강한 의지와 대담성을 가지며, 인(寭)은 열정과 의지를 상징합니다.",
    },
    time: {
      title: "신자 (辛子)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "子", type: "수: 水" },
      },
      description:
        "신자 (辛子): 신(辛)의 금과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 세심하고 감정이 풍부하며, 자(子)는 직관과 인내를 상징합니다.",
    },
  },
  "2008-02-29": {
    day: {
      title: "을묘 (乙卯)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "卯", type: "목: 木" },
      },
      description:
        "을묘 (乙卯): 을(乙)의 나무와 묘(卯)의 나무가 조화를 이루는 조합입니다. 이 조합은 실용적이고 직관적이며, 묘(卯)는 창의력과 감수성을 상징합니다.",
    },
    month: {
      title: "정유 (丁酉)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "酉", type: "수: 水" },
      },
      description:
        "정유 (丁酉): 정(丁)의 불과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 분석적이며, 유(酉)는 세심함과 정확성을 상징합니다.",
    },
    year: {
      title: "신미 (辛未)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "未", type: "토: 土" },
      },
      description:
        "신미 (辛未): 신(辛)의 금과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 분석적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.",
    },
    time: {
      title: "임인 (壬寅)",
      pre: {
        first: { title: "壬", type: "수: 水" },
        second: { title: "寅", type: "목: 木" },
      },
      description:
        "임인 (壬寅): 임(壬)의 물과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 대담하며, 인(寭)은 열정과 의지를 상징합니다.",
    },
  },
  "1971-03-08": {
    day: {
      title: "갑진 (甲辰)",
      pre: {
        first: { title: "甲", type: "목: 木" },
        second: { title: "辰", type: "토: 土" },
      },
      description:
        "갑진 (甲辰): 갑(甲)의 나무와 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 대담하고 실용적이며, 진(辰)은 창의력과 상상력을 상징합니다.",
    },
    month: {
      title: "을사 (乙巳)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "巳", type: "화: 火" },
      },
      description:
        "을사 (乙巳): 을(乙)의 나무와 사(巳)의 불이 조화를 이루는 조합입니다. 이 조합은 실용적이고 열정적이며, 사(巳)는 감정의 깊이와 열정을 상징합니다.",
    },
    year: {
      title: "정유 (丁酉)",
      pre: {
        first: { title: "丁", type: "화: 火" },
        second: { title: "酉", type: "수: 水" },
      },
      description:
        "정유 (丁酉): 정(丁)의 불과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 분석적이며, 유(酉)는 세심함과 정확성을 상징합니다.",
    },
    time: {
      title: "신묘 (辛卯)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "卯", type: "목: 木" },
      },
      description:
        "신묘 (辛卯): 신(辛)의 금과 묘(卯)의 나무가 조화를 이루는 조합입니다. 이 조합은 세심하고 창의적이며, 묘(卯)는 감수성과 직관력을 상징합니다.",
    },
  },
  "1993-07-07": {
    day: {
      title: "갑오 (甲午)",
      pre: {
        first: { title: "甲", type: "목: 木" },
        second: { title: "午", type: "화: 火" },
      },
      description:
        "갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 열정적이며, 오(午)는 에너지와 활력을 상징합니다.",
    },
    month: {
      title: "병진 (丙辰)",
      pre: {
        first: { title: "丙", type: "화: 火" },
        second: { title: "辰", type: "토: 土" },
      },
      description:
        "병진 (丙辰): 병(丙)의 불과 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 창의적이고 추진력이 강하며, 진(辰)은 안정성과 지혜를 상징합니다.",
    },
    year: {
      title: "신유 (辛酉)",
      pre: {
        first: { title: "辛", type: "금: 金" },
        second: { title: "酉", type: "수: 水" },
      },
      description:
        "신유 (辛酉): 신(辛)의 금과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 분석적이고 세심하며, 유(酉)는 정확성과 철저함을 상징합니다.",
    },
    time: {
      title: "을해 (乙亥)",
      pre: {
        first: { title: "乙", type: "목: 木" },
        second: { title: "亥", type: "수: 水" },
      },
      description:
        "을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 직관적이며, 해(亥)는 감정의 깊이와 직관력을 상징합니다.",
    },
  },
};

const defaultSajuData = {
  day: {
    title: "임술 (壬戌)",
    pre: {
      first: { title: "壬", type: "수: 水" },
      second: { title: "戌", type: "토: 土" },
    },
    description:
      "임술 (壬戌): 임(壬)의 물과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.",
  },
  month: {
    title: "계유 (癸酉)",
    pre: {
      first: { title: "癸", type: "수: 水" },
      second: { title: "酉", type: "금: 金" },
    },
    description:
      "계유 (癸酉): 계(癸)의 물과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 실용적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.",
  },
  year: {
    title: "병신 (丙申)",
    pre: {
      first: { title: "丙", type: "화: 火" },
      second: { title: "申", type: "금: 金" },
    },
    description:
      "병신 (丙申): 병(丙)의 불과 신(申)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 지혜롭으며, 신(申)은 분석력과 명확성을 상징합니다.",
  },
  time: {
    title: "정미 (丁未)",
    pre: {
      first: { title: "丁", type: "화: 火" },
      second: { title: "未", type: "토: 土" },
    },
    description:
      "정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.",
  },
};

const fortuneDatas = [
  {
    id: 1,
    message: "오늘은 당신의 노력이 결실을 맺는 날입니다.",
  },
  {
    id: 2,
    message: "새로운 기회가 당신의 앞에 펼쳐질 것입니다.",
  },
  {
    id: 3,
    message: "긍정적인 태도가 당신에게 좋은 운을 가져다줍니다.",
  },
  {
    id: 4,
    message: "친구와의 우정이 오늘 하루를 빛나게 합니다.",
  },
  {
    id: 5,
    message: "오늘은 새로운 취미를 시작해보기에 좋은 날입니다.",
  },
  {
    id: 6,
    message: "작은 친절이 큰 행복을 가져올 것입니다.",
  },
  {
    id: 7,
    message: "당신의 직감이 오늘 특별히 정확합니다.",
  },
  {
    id: 8,
    message: "모든 어려움은 일시적이니 포기하지 마세요.",
  },
  {
    id: 9,
    message: "자신을 믿고 새로운 도전을 해보세요.",
  },
  {
    id: 10,
    message: "오늘은 당신이 계획했던 일에 착수하기 좋은 날입니다.",
  },
  {
    id: 11,
    message: "오늘은 평소보다 더 많은 웃음을 나누세요.",
  },
  {
    id: 12,
    message: "주변 사람들에게서 큰 영감을 얻게 될 것입니다.",
  },
  {
    id: 13,
    message: "자신의 의견을 표현하는 것을 두려워하지 마세요.",
  },
  {
    id: 14,
    message: "오늘의 작은 결정이 미래의 큰 변화를 가져올 것입니다.",
  },
  {
    id: 15,
    message: "기대하지 않은 곳에서 행운이 찾아올 것입니다.",
  },
  {
    id: 16,
    message: "도전적인 하루를 보낼 준비를 하세요. 성장의 기회입니다.",
  },
  {
    id: 17,
    message: "친구의 조언이 당신에게 큰 도움이 될 것입니다.",
  },
  {
    id: 18,
    message: "잠시 멈추고 자신을 돌보는 시간을 가지세요.",
  },
  {
    id: 19,
    message: "진심 어린 감사의 표현이 주변을 따뜻하게 합니다.",
  },
  {
    id: 20,
    message: "과거의 실수로부터 배우는 지혜를 가지세요.",
  },
  {
    id: 21,
    message: "오늘은 당신이 진정 원하는 것을 찾는 날입니다.",
  },
  {
    id: 22,
    message: "긍정적인 변화가 곧 당신의 삶에 찾아옵니다.",
  },
  {
    id: 23,
    message: "오래된 꿈을 다시 생각해볼 시간이 되었습니다.",
  },
  {
    id: 24,
    message: "당신의 친절은 누군가의 하루를 밝게 만들 것입니다.",
  },
  {
    id: 25,
    message: "기다려온 소식이 오늘 당신을 찾습니다.",
  },
  {
    id: 26,
    message: "작은 시작이 큰 성공으로 이어질 것입니다.",
  },
  {
    id: 27,
    message: "당신의 용기는 주변 사람들에게 영감을 줍니다.",
  },
  {
    id: 28,
    message: "새로운 만남이 당신에게 큰 기쁨을 가져올 것입니다.",
  },
  {
    id: 29,
    message: "오늘은 마음을 열고 새로운 경험을 받아들이세요.",
  },
  {
    id: 30,
    message: "당신이 원하는 변화는 당신의 손끝에 있습니다.",
  },
  {
    id: 31,
    message: "새로운 시작은 항상 두려움과 설렘을 동반합니다.",
  },
  {
    id: 32,
    message: "오늘 만나는 사람에게 따뜻한 미소를 건네보세요.",
  },
  {
    id: 33,
    message: "변화는 불편할지 몰라도, 성장을 가져다줍니다.",
  },
  {
    id: 34,
    message: "내일의 걱정은 잠시 내려놓고 현재를 즐기세요.",
  },
  {
    id: 35,
    message: "당신의 노력이 곧 보상을 받을 것입니다.",
  },
  {
    id: 36,
    message: "삶의 작은 기쁨들을 놓치지 마세요.",
  },
  {
    id: 37,
    message: "주위의 소중한 사람들에게 감사를 표현하세요.",
  },
  {
    id: 38,
    message: "당신의 직감이 맞을 것입니다. 그 직감을 믿으세요.",
  },
  {
    id: 39,
    message: "고민이 해결되는 길이 열릴 것입니다.",
  },
  {
    id: 40,
    message: "어려운 상황에서도 긍정적인 마음을 유지하세요.",
  },
];

// 타로카드에 필요한 타로카드 정보를 설정합니다
const tarotDetails = {
  FOOL: {
    past: "과거에 무모한 결정을 내렸던 경험이 있음을 나타냅니다. 새로운 시작을 두려워하지 않고 도전했을 가능성이 큽니다.",
    present:
      "현재는 새로운 기회나 모험이 눈앞에 있으며, 그 기회를 잡아야 할 시기입니다. 자유롭고 열린 마음이 필요합니다.",
    future:
      "미래에는 새로운 여정이나 모험이 다가올 것입니다. 모험심과 호기심이 성공의 열쇠가 될 수 있습니다.",
    ko: "바보",
    origin: "The Fool",
  },
  MAGICIAN: {
    past: "과거에 자신의 능력과 자원을 잘 활용하여 성공적인 결과를 이끌어냈음을 나타냅니다.",
    present:
      "현재는 목표를 달성할 수 있는 능력과 자원이 충분히 갖춰져 있습니다. 집중과 의지가 필요합니다.",
    future:
      "미래에는 목표를 향해 전진할 수 있는 능력이 크게 향상될 것입니다. 창의성과 결단력이 중요합니다.",
    ko: "마법사",
    origin: "The Magician",
  },
  PRIESTESS: {
    past: "과거에 직관에 의존해 중요한 결정을 내렸을 가능성이 큽니다. 내면의 목소리를 잘 따랐습니다.",
    present:
      "현재는 직관에 귀 기울여야 할 시기입니다. 감정과 내면의 지혜가 중요한 역할을 할 것입니다.",
    future:
      "미래에는 더 깊은 직관과 영적 깨달음이 찾아올 것입니다. 감정과 직관을 신뢰하세요.",
    ko: "여사제",
    origin: "The High Priestess",
  },
  EMPRESS: {
    past: "과거에 풍요로움과 창의력이 중요한 역할을 했으며, 인생의 중요한 결실을 맺었을 가능성이 큽니다.",
    present:
      "현재는 풍요로운 시기로, 창의적 프로젝트나 개인적 성장에 투자할 때입니다.",
    future:
      "미래에는 풍요와 번영이 예상됩니다. 창의력과 돌봄의 에너지가 성공을 이끌 것입니다.",
    ko: "여제",
    origin: "The Empress",
  },
  EMPEROR: {
    past: "과거에는 규칙과 질서를 따르며 강력한 권위자가 있었을 가능성이 큽니다.",
    present:
      "현재는 구조와 통제가 필요한 상황입니다. 안정감과 권위를 가져오는 결정을 내려야 합니다.",
    future:
      "미래에는 안정성과 권위 있는 위치에서 결정을 내릴 기회가 생길 것입니다.",
    ko: "황제",
    origin: "The Emperor",
  },
  HIEROPHANT: {
    past: "과거에 전통적인 가치나 믿음을 따랐음을 나타냅니다.",
    present:
      "현재는 지식이나 가르침을 받아들이는 시기로, 전통적인 길을 따를 필요가 있습니다.",
    future:
      "미래에는 가르침을 전수하거나 전통을 이어받을 기회가 있을 것입니다.",
    ko: "교황",
    origin: "The Hierophant",
  },
  LOVERS: {
    past: "과거에는 중요한 관계나 선택이 당신의 삶에 큰 영향을 미쳤습니다.",
    present:
      "현재는 관계나 결정을 할 때 중요한 시기입니다. 사랑과 조화를 추구하세요.",
    future:
      "미래에는 중요한 관계가 더욱 깊어지거나, 사랑과 조화가 찾아올 것입니다.",
    ko: "연인",
    origin: "The Lovers",
  },
  CHARIOT: {
    past: "과거에는 목표를 향해 강한 의지로 전진했던 경험이 있었습니다.",
    present: "현재는 승리와 성공을 위해 인내와 결단력이 필요한 시기입니다.",
    future: "미래에는 성공과 승리를 거머쥘 기회가 찾아올 것입니다.",
    ko: "전차",
    origin: "The Chariot",
  },
  STRENGTH: {
    past: "과거에는 역경을 이겨내고 강인함을 발휘한 경험이 있었습니다.",
    present: "현재는 내면의 힘을 발휘하여 문제를 해결할 시기입니다.",
    future: "미래에는 강인한 마음과 용기가 필요할 상황이 다가올 것입니다.",
    ko: "힘",
    origin: "Strength",
  },
  HERMIT: {
    past: "과거에는 자신만의 시간을 가지며 깊은 성찰의 시기를 가졌습니다.",
    present: "현재는 고독 속에서 자신의 내면을 돌아봐야 할 시기입니다.",
    future: "미래에는 더 깊은 성찰과 내적 탐구가 필요할 것입니다.",
    ko: "은둔자",
    origin: "The Hermit",
  },
  FORTUNE: {
    past: "과거에는 운명의 변화를 경험한 적이 있습니다. 좋은 기회나 나쁜 운이 있었을 것입니다.",
    present:
      "현재는 운명의 변화가 일어나고 있습니다. 상황이 예기치 않게 변할 수 있습니다.",
    future:
      "미래에는 중요한 운명의 변화가 있을 것입니다. 긍정적인 흐름을 따르세요.",
    ko: "운명의 수레바퀴",
    origin: "Wheel of Fortune",
  },
  JUSTICE: {
    past: "과거에 공정한 결정을 내리거나, 법적인 문제와 연관된 경험이 있었습니다.",
    present:
      "현재는 정의와 균형을 중시해야 할 시기입니다. 공정한 결정을 내리세요.",
    future: "미래에는 공정성과 책임이 중요한 역할을 하게 될 것입니다.",
    ko: "정의",
    origin: "Justice",
  },
  HANGEDMAN: {
    past: "과거에 희생이나 포기의 결단을 내려 상황을 변화시켰을 가능성이 큽니다.",
    present:
      "현재는 새로운 관점에서 상황을 바라볼 필요가 있습니다. 잠시 멈춰야 할 때입니다.",
    future: "미래에는 새로운 관점이나 희생이 요구될 가능성이 있습니다.",
    ko: "매달린 남자",
    origin: "The Hanged Man",
  },
  DEATH: {
    past: "과거에는 중요한 변화나 끝맺음을 경험했습니다. 무언가를 놓아야 했던 시기입니다.",
    present: "현재는 끝맺음과 새로운 시작을 받아들여야 할 시기입니다.",
    future: "미래에는 큰 변화가 다가올 것입니다. 변화를 두려워하지 마세요.",
    ko: "죽음",
    origin: "Death",
  },
  TEMPERANCE: {
    past: "과거에는 균형과 조화를 이뤘던 시기입니다.",
    present:
      "현재는 절제와 균형을 유지해야 할 때입니다. 조화로운 접근이 필요합니다.",
    future: "미래에는 균형과 조화가 중요한 역할을 할 것입니다.",
    ko: "절제",
    origin: "Temperance",
  },
  DEVIL: {
    past: "과거에는 유혹이나 억압적인 상황에 직면했을 가능성이 큽니다.",
    present: "현재는 자신을 속박하는 것에서 벗어나야 할 시기입니다.",
    future: "미래에는 자신을 제한하는 상황이나 사람을 직면하게 될 수 있습니다.",
    ko: "악마",
    origin: "The Devil",
  },
  TOWER: {
    past: "과거에는 갑작스러운 변화나 붕괴를 경험했을 수 있습니다.",
    present:
      "현재는 예상치 못한 변화가 일어날 수 있으며, 혼란스러울 수 있습니다.",
    future:
      "미래에는 갑작스러운 변화가 다가올 것입니다. 그 변화를 받아들이세요.",
    ko: "탑",
    origin: "The Tower",
  },
  STAR: {
    past: "과거에는 희망과 영감이 중요한 역할을 했던 시기입니다.",
    present: "현재는 희망을 유지하며 영감을 받을 수 있는 시기입니다.",
    future: "미래에는 새로운 영감과 희망이 찾아올 것입니다.",
    ko: "별",
    origin: "The Star",
  },
  MOON: {
    past: "과거에는 혼란스러운 상황이나 불확실한 시기를 겪었을 가능성이 큽니다.",
    present:
      "현재는 직관과 감정을 믿어야 할 때입니다. 모든 것이 명확하지 않을 수 있습니다.",
    future: "미래에는 더 깊은 내면의 탐구와 감정적인 깨달음이 있을 것입니다.",
    ko: "달",
    origin: "The Moon",
  },
  SUN: {
    past: "과거에는 성공과 행복을 누렸던 시기입니다.",
    present:
      "현재는 긍정적인 에너지가 넘치는 시기입니다. 성공과 기쁨이 곧 찾아올 것입니다.",
    future:
      "미래에는 밝고 긍정적인 결과가 예상됩니다. 기쁨과 성공이 따를 것입니다.",
    ko: "태양",
    origin: "The Sun",
  },
  JUDGEMENT: {
    past: "과거에는 중요한 평가나 심판을 받은 경험이 있었습니다.",
    present: "현재는 과거의 행동에 대한 결과를 마주할 때입니다.",
    future: "미래에는 중요한 결정을 내려야 할 시기가 다가올 것입니다.",
    ko: "심판",
    origin: "Judgment",
  },
  WORLD: {
    past: "과거에는 완성과 성취를 이루었던 시기입니다.",
    present:
      "현재는 인생의 한 주기가 완성되어 새로운 시작을 준비하고 있습니다.",
    future: "미래에는 중요한 목표를 달성하고 완성감을 느끼게 될 것입니다.",
    ko: "세계",
    origin: "The World",
  },
};

export { fortuneDatas, sajuDetails, defaultSajuData, tarotDetails };
