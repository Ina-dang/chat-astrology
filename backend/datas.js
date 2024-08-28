// 사주 분석에 필요한 사주 정보를 설정합니다
const sajuDetails = {
  '1985-02-14': {
    day: {
      title: '을축',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '축', type: '토' },
      },
      description:
        '을축 (乙丑): 을(乙)의 나무와 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 노력하는 것을 중시하는 성향을 나타냅니다. 축(丑)은 지혜와 근면성을 상징하며, 을(乙)은 부드러움과 협력을 중시합니다.',
    },
    month: {
      title: '갑오',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '오', type: '화' },
      },
      description:
        '갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 활동적이며, 오(午)는 열정과 에너지를 상징합니다. 갑(甲)은 적극적이고 강한 성격을 나타냅니다.',
    },
    year: {
      title: '을해',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '해', type: '수' },
      },
      description:
        '을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 섬세하고 직관적이며, 해(亥)는 감정의 깊이를 상징합니다. 을(乙)은 부드러움과 협력을 중시합니다.',
    },
    time: {
      title: '정미',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '미', type: '토' },
      },
      description:
        '정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.',
    },
  },
  '1992-06-21': {
    day: {
      title: '임자',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '자', type: '수' },
      },
      description:
        '임자 (壬子): 임(壬)의 물과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 지혜롭으며, 자(子)는 직관과 인내를 상징합니다.',
    },
    month: {
      title: '계축',
      pre: {
        first: { title: '계', type: '수' },
        second: { title: '축', type: '토' },
      },
      description:
        '계축 (癸丑): 계(癸)의 물과 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.',
    },
    year: {
      title: '신유',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '유', type: '수' },
      },
      description:
        '신유 (辛酉): 신(辛)의 금과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 분석적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.',
    },
    time: {
      title: '정해',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '해', type: '수' },
      },
      description:
        '정해 (丁亥): 정(丁)의 불과 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 창의적이고 감정이 풍부하며, 해(亥)는 깊은 감정을 상징합니다.',
    },
  },
  '2000-03-10': {
    day: {
      title: '임자',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '자', type: '수' },
      },
      description:
        '임자 (壬子): 임(壬)의 물과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 지혜롭으며, 자(子)는 직관과 인내를 상징합니다.',
    },
    month: {
      title: '계축',
      pre: {
        first: { title: '계', type: '수' },
        second: { title: '축', type: '토' },
      },
      description:
        '계축 (癸丑): 계(癸)의 물과 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.',
    },
    year: {
      title: '신유',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '유', type: '수' },
      },
      description:
        '신유 (辛酉): 신(辛)의 금과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 분석적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.',
    },
    time: {
      title: '정해',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '해', type: '수' },
      },
      description:
        '정해 (丁亥): 정(丁)의 불과 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 창의적이고 감정이 풍부하며, 해(亥)는 깊은 감정을 상징합니다.',
    },
  },
  '1978-11-30': {
    day: {
      title: '갑인',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '인', type: '목' },
      },
      description:
        '갑인 (甲寅): 갑(甲)의 나무와 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 대담하고 진취적이며, 인(寭)은 열정과 의지를 상징합니다.',
    },
    month: {
      title: '을유',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '유', type: '수' },
      },
      description:
        '을유 (乙酉): 을(乙)의 나무와 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 지혜롭고 섬세하며, 세심한 성격을 나타냅니다.',
    },
    year: {
      title: '병술',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '술', type: '토' },
      },
      description:
        '병술 (丙戌): 병(丙)의 불과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.',
    },
    time: {
      title: '경오',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '오', type: '화' },
      },
      description:
        '경오 (庚午): 경(庚)의 금과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 열정을 가지며, 오(午)는 활동성과 에너지를 상징합니다.',
    },
  },
  '1995-05-15': {
    day: {
      title: '신미',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '미', type: '토' },
      },
      description:
        '신미 (辛未): 신(辛)의 금과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 세심하고 신중하며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.',
    },
    month: {
      title: '임자',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '자', type: '수' },
      },
      description:
        '임자 (壬子): 임(壬)의 물과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 지혜롭습니다.',
    },
    year: {
      title: '을해',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '해', type: '수' },
      },
      description:
        '을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 섬세하고 직관적이며, 해(亥)는 감정의 깊이를 상징합니다.',
    },
    time: {
      title: '병술',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '술', type: '토' },
      },
      description:
        '병술 (丙戌): 병(丙)의 불과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.',
    },
  },
  '2001-12-01': {
    day: {
      title: '경인',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '인', type: '목' },
      },
      description:
        '경인 (庚寅): 경(庚)의 금과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 강한 의지와 대담성을 가지며, 인(寭)은 열정과 의지를 상징합니다.',
    },
    month: {
      title: '갑오',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '오', type: '화' },
      },
      description:
        '갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 활동적이며, 오(午)는 열정과 에너지를 상징합니다.',
    },
    year: {
      title: '계축',
      pre: {
        first: { title: '계', type: '수' },
        second: { title: '축', type: '토' },
      },
      description:
        '계축 (癸丑): 계(癸)의 물과 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.',
    },
    time: {
      title: '을미',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '미', type: '토' },
      },
      description:
        '을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 창의적이고 실용적이며, 미(未)는 풍부한 상상력과 안정성을 상징합니다.',
    },
  },
  '1964-07-28': {
    day: {
      title: '을미',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '미', type: '토' },
      },
      description:
        '을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 미(未)는 상상력과 안정성을 상징합니다.',
    },
    month: {
      title: '병자',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '자', type: '수' },
      },
      description:
        '병자 (丙子): 병(丙)의 불과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 열정적이고 직관적이며, 자(子)는 감정의 깊이를 상징합니다.',
    },
    year: {
      title: '임술',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '술', type: '토' },
      },
      description:
        '임술 (壬戌): 임(壬)의 물과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.',
    },
    time: {
      title: '정오',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '오', type: '화' },
      },
      description:
        '정오 (丁午): 정(丁)의 불과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 열정적이고 활동적이며, 오(午)는 에너지와 열정을 상징합니다.',
    },
  },
  '1988-04-19': {
    day: {
      title: '병진',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '진', type: '토' },
      },
      description:
        '병진 (丙辰): 병(丙)의 불과 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 진(辰)은 창의력과 상상력을 상징합니다.',
    },
    month: {
      title: '갑신',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '신', type: '수' },
      },
      description:
        '갑신 (甲申): 갑(甲)의 나무와 신(申)의 금이 조화를 이루는 조합입니다. 이 조합은 대담하고 지혜롭으며, 신(申)은 분석력과 명확성을 상징합니다.',
    },
    year: {
      title: '을미',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '미', type: '토' },
      },
      description:
        '을미 (乙未): 을(乙)의 나무와 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 미(未)는 상상력과 안정성을 상징합니다.',
    },
    time: {
      title: '경오',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '오', type: '화' },
      },
      description:
        '경오 (庚午): 경(庚)의 금과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 활동적이며, 오(午)는 열정과 에너지를 상징합니다.',
    },
  },
  '2005-09-15': {
    day: {
      title: '임술',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '술', type: '토' },
      },
      description:
        '임술 (壬戌): 임(壬)의 물과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.',
    },
    month: {
      title: '계유',
      pre: {
        first: { title: '계', type: '수' },
        second: { title: '유', type: '수' },
      },
      description:
        '계유 (癸酉): 계(癸)의 물과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 실용적이고 섬세하며, 유(酉)는 세심함과 정확성을 상징합니다.',
    },
    year: {
      title: '병신',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '신', type: '수' },
      },
      description:
        '병신 (丙申): 병(丙)의 불과 신(申)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 지혜롭으며, 신(申)은 분석력과 명확성을 상징합니다.',
    },
    time: {
      title: '정미',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '미', type: '토' },
      },
      description:
        '정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.',
    },
  },
  '1999-10-02': {
    day: {
      title: '경자',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '자', type: '수' },
      },
      description:
        '경자 (庚子): 경(庚)의 금과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 직관적이며, 자(子)는 감정의 깊이를 상징합니다.',
    },
    month: {
      title: '을축',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '축', type: '토' },
      },
      description:
        '을축 (乙丑): 을(乙)의 나무와 축(丑)의 흙이 조화를 이루는 조합입니다. 이 조합은 실용적이고 신중하며, 축(丑)은 근면성과 지혜를 상징합니다.',
    },
    year: {
      title: '임오',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '오', type: '화' },
      },
      description:
        '임오 (壬午): 임(壬)의 물과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 열정적이며, 오(午)는 에너지와 열정을 상징합니다.',
    },
    time: {
      title: '경오',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '오', type: '화' },
      },
      description:
        '경오 (庚午): 경(庚)의 금과 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 강한 의지와 활동적이며, 오(午)는 열정과 에너지를 상징합니다.',
    },
  },
  '1974-08-07': {
    day: {
      title: '병술',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '술', type: '토' },
      },
      description:
        '병술 (丙戌): 병(丙)의 불과 술(戌)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 술(戌)은 인내와 지혜를 상징합니다.',
    },
    month: {
      title: '정미',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '미', type: '토' },
      },
      description:
        '정미 (丁未): 정(丁)의 불과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 열정적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.',
    },
    year: {
      title: '경인',
      pre: {
        first: { title: '경', type: '수' },
        second: { title: '인', type: '목' },
      },
      description:
        '경인 (庚寅): 경(庚)의 금과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 강한 의지와 대담성을 가지며, 인(寭)은 열정과 의지를 상징합니다.',
    },
    time: {
      title: '신자',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '자', type: '수' },
      },
      description:
        '신자 (辛子): 신(辛)의 금과 자(子)의 물이 조화를 이루는 조합입니다. 이 조합은 세심하고 감정이 풍부하며, 자(子)는 직관과 인내를 상징합니다.',
    },
  },
  '2008-02-29': {
    day: {
      title: '을묘',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '묘', type: '목' },
      },
      description:
        '을묘 (乙卯): 을(乙)의 나무와 묘(卯)의 나무가 조화를 이루는 조합입니다. 이 조합은 실용적이고 직관적이며, 묘(卯)는 창의력과 감수성을 상징합니다.',
    },
    month: {
      title: '정유',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '유', type: '수' },
      },
      description:
        '정유 (丁酉): 정(丁)의 불과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 분석적이며, 유(酉)는 세심함과 정확성을 상징합니다.',
    },
    year: {
      title: '신미',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '미', type: '토' },
      },
      description:
        '신미 (辛未): 신(辛)의 금과 미(未)의 흙이 조화를 이루는 조합입니다. 이 조합은 분석적이고 실용적이며, 미(未)는 상상력과 안정성을 상징합니다.',
    },
    time: {
      title: '임인',
      pre: {
        first: { title: '임', type: '수' },
        second: { title: '인', type: '목' },
      },
      description:
        '임인 (壬寅): 임(壬)의 물과 인(寅)의 나무가 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 대담하며, 인(寭)은 열정과 의지를 상징합니다.',
    },
  },
  '1971-03-08': {
    day: {
      title: '갑진',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '진', type: '토' },
      },
      description:
        '갑진 (甲辰): 갑(甲)의 나무와 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 대담하고 실용적이며, 진(辰)은 창의력과 상상력을 상징합니다.',
    },
    month: {
      title: '을사',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '사', type: '화' },
      },
      description:
        '을사 (乙巳): 을(乙)의 나무와 사(巳)의 불이 조화를 이루는 조합입니다. 이 조합은 실용적이고 열정적이며, 사(巳)는 감정의 깊이와 열정을 상징합니다.',
    },
    year: {
      title: '정유',
      pre: {
        first: { title: '정', type: '화' },
        second: { title: '유', type: '수' },
      },
      description:
        '정유 (丁酉): 정(丁)의 불과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 열정적이고 분석적이며, 유(酉)는 세심함과 정확성을 상징합니다.',
    },
    time: {
      title: '신묘',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '묘', type: '목' },
      },
      description:
        '신묘 (辛卯): 신(辛)의 금과 묘(卯)의 나무가 조화를 이루는 조합입니다. 이 조합은 세심하고 창의적이며, 묘(卯)는 감수성과 직관력을 상징합니다.',
    },
  },
  '1993-07-07': {
    day: {
      title: '갑오',
      pre: {
        first: { title: '갑', type: '목' },
        second: { title: '오', type: '화' },
      },
      description:
        '갑오 (甲午): 갑(甲)의 나무와 오(午)의 불이 조화를 이루는 조합입니다. 이 조합은 대담하고 열정적이며, 오(午)는 에너지와 활력을 상징합니다.',
    },
    month: {
      title: '병진',
      pre: {
        first: { title: '병', type: '화' },
        second: { title: '진', type: '토' },
      },
      description:
        '병진 (丙辰): 병(丙)의 불과 진(辰)의 흙이 조화를 이루는 조합입니다. 이 조합은 창의적이고 추진력이 강하며, 진(辰)은 안정성과 지혜를 상징합니다.',
    },
    year: {
      title: '신유',
      pre: {
        first: { title: '신', type: '수' },
        second: { title: '유', type: '수' },
      },
      description:
        '신유 (辛酉): 신(辛)의 금과 유(酉)의 금이 조화를 이루는 조합입니다. 이 조합은 분석적이고 세심하며, 유(酉)는 정확성과 철저함을 상징합니다.',
    },
    time: {
      title: '을해',
      pre: {
        first: { title: '을', type: '목' },
        second: { title: '해', type: '수' },
      },
      description:
        '을해 (乙亥): 을(乙)의 나무와 해(亥)의 물이 조화를 이루는 조합입니다. 이 조합은 감정이 풍부하고 직관적이며, 해(亥)는 감정의 깊이와 직관력을 상징합니다.',
    },
  },
};

const fortuneDatas = [
  {
    id: 1,
    message: '오늘은 당신의 노력이 결실을 맺는 날입니다.',
  },
  {
    id: 2,
    message: '새로운 기회가 당신의 앞에 펼쳐질 것입니다.',
  },
  {
    id: 3,
    message: '긍정적인 태도가 당신에게 좋은 운을 가져다줍니다.',
  },
  {
    id: 4,
    message: '친구와의 우정이 오늘 하루를 빛나게 합니다.',
  },
  {
    id: 5,
    message: '오늘은 새로운 취미를 시작해보기에 좋은 날입니다.',
  },
  {
    id: 6,
    message: '작은 친절이 큰 행복을 가져올 것입니다.',
  },
  {
    id: 7,
    message: '당신의 직감이 오늘 특별히 정확합니다.',
  },
  {
    id: 8,
    message: '모든 어려움은 일시적이니 포기하지 마세요.',
  },
  {
    id: 9,
    message: '자신을 믿고 새로운 도전을 해보세요.',
  },
  {
    id: 10,
    message: '오늘은 당신이 계획했던 일에 착수하기 좋은 날입니다.',
  },
  {
    id: 11,
    message: '오늘은 평소보다 더 많은 웃음을 나누세요.',
  },
  {
    id: 12,
    message: '주변 사람들에게서 큰 영감을 얻게 될 것입니다.',
  },
  {
    id: 13,
    message: '자신의 의견을 표현하는 것을 두려워하지 마세요.',
  },
  {
    id: 14,
    message: '오늘의 작은 결정이 미래의 큰 변화를 가져올 것입니다.',
  },
  {
    id: 15,
    message: '기대하지 않은 곳에서 행운이 찾아올 것입니다.',
  },
  {
    id: 16,
    message: '도전적인 하루를 보낼 준비를 하세요. 성장의 기회입니다.',
  },
  {
    id: 17,
    message: '친구의 조언이 당신에게 큰 도움이 될 것입니다.',
  },
  {
    id: 18,
    message: '잠시 멈추고 자신을 돌보는 시간을 가지세요.',
  },
  {
    id: 19,
    message: '진심 어린 감사의 표현이 주변을 따뜻하게 합니다.',
  },
  {
    id: 20,
    message: '과거의 실수로부터 배우는 지혜를 가지세요.',
  },
  {
    id: 21,
    message: '오늘은 당신이 진정 원하는 것을 찾는 날입니다.',
  },
  {
    id: 22,
    message: '긍정적인 변화가 곧 당신의 삶에 찾아옵니다.',
  },
  {
    id: 23,
    message: '오래된 꿈을 다시 생각해볼 시간이 되었습니다.',
  },
  {
    id: 24,
    message: '당신의 친절은 누군가의 하루를 밝게 만들 것입니다.',
  },
  {
    id: 25,
    message: '기다려온 소식이 오늘 당신을 찾습니다.',
  },
  {
    id: 26,
    message: '작은 시작이 큰 성공으로 이어질 것입니다.',
  },
  {
    id: 27,
    message: '당신의 용기는 주변 사람들에게 영감을 줍니다.',
  },
  {
    id: 28,
    message: '새로운 만남이 당신에게 큰 기쁨을 가져올 것입니다.',
  },
  {
    id: 29,
    message: '오늘은 마음을 열고 새로운 경험을 받아들이세요.',
  },
  {
    id: 30,
    message: '당신이 원하는 변화는 당신의 손끝에 있습니다.',
  },
  {
    id: 31,
    message: '새로운 시작은 항상 두려움과 설렘을 동반합니다.',
  },
  {
    id: 32,
    message: '오늘 만나는 사람에게 따뜻한 미소를 건네보세요.',
  },
  {
    id: 33,
    message: '변화는 불편할지 몰라도, 성장을 가져다줍니다.',
  },
  {
    id: 34,
    message: '내일의 걱정은 잠시 내려놓고 현재를 즐기세요.',
  },
  {
    id: 35,
    message: '당신의 노력이 곧 보상을 받을 것입니다.',
  },
  {
    id: 36,
    message: '삶의 작은 기쁨들을 놓치지 마세요.',
  },
  {
    id: 37,
    message: '주위의 소중한 사람들에게 감사를 표현하세요.',
  },
  {
    id: 38,
    message: '당신의 직감이 맞을 것입니다. 그 직감을 믿으세요.',
  },
  {
    id: 39,
    message: '고민이 해결되는 길이 열릴 것입니다.',
  },
  {
    id: 40,
    message: '어려운 상황에서도 긍정적인 마음을 유지하세요.',
  },
];

export { fortuneDatas, sajuDetails };
