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

const timeRanges = {
  자: [0, 1], // 자시: 23:00 ~ 01:00
  축: [1, 3], // 축시: 01:00 ~ 03:00
  인: [3, 5], // 인시: 03:00 ~ 05:00
  묘: [5, 7], // 묘시: 05:00 ~ 07:00
  진: [7, 9], // 진시: 07:00 ~ 09:00
  사: [9, 11], // 사시: 09:00 ~ 11:00
  오: [11, 13], // 오시: 11:00 ~ 13:00
  미: [13, 15], // 미시: 13:00 ~ 15:00
  신: [15, 17], // 신시: 15:00 ~ 17:00
  유: [17, 19], // 유시: 17:00 ~ 19:00
  술: [19, 21], // 술시: 19:00 ~ 21:00
  해: [21, 23], // 해시: 21:00 ~ 23:00
};

function getTimeRange(hour) {
  for (const [key, [start, end]] of Object.entries(timeRanges)) {
    if (hour >= start && hour < end) {
      return key;
    }
  }
  return null;
}

function calculateYinYangAndFiveElements(year) {
  const yinYang = ['양', '음'];
  const fiveElements = ['목', '화', '토', '금', '수'];

  // 음양 계산
  const yearLastDigit = year % 10;
  const isYin = yearLastDigit % 2 === 0;
  const yinYangElement = isYin ? yinYang[1] : yinYang[0];

  // 오행 계산
  const yearMod = year % 10;
  const fiveElementsIndex = yearMod % 5;
  const fiveElementsElement = fiveElements[fiveElementsIndex];

  return {
    yinYang: yinYangElement,
    fiveElements: fiveElementsElement,
  };
}

function getSajuAnalysis(year, month, day, hours) {
  const { yinYang, fiveElements } = calculateYinYangAndFiveElements(year);

  // 생년월일과 출생시간을 키로 사용하여 사주 분석 결과를 가져옵니다.
  const dateKey = `${year}-${month.toString().padStart(2, '0')}-${day
    .toString()
    .padStart(2, '0')}`;
  const timeKey = getTimeRange(hours);

  // 시간에 따라 시주 결정
  const sajuAnalysis = sajuDetails[dateKey] || {
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
  };

  return {
    yinYang,
    fiveElements,
    sajuAnalysis,
  };
}

// 요청 처리 함수
async function handleRequest(req, res) {
  const { name, birth, birthTime } = req.body;

  // 생년월일 및 출생시간을 Date 객체로 변환
  const [year, month, day] = birth.split('-').map(Number);
  const [hours] = birthTime.split(':').map(Number);

  // 사주 분석
  const analysis = getSajuAnalysis(year, month, day, hours);

  // 응답 반환
  res.json({
    code: 'OK',
    message: '음양오행분석에 성공하였습니다',
    data: analysis,
  });
}

export { handleRequest };
