import type { TarotCard } from "@/types/tarot";

export const wandsCards: TarotCard[] = [
  {
    id: 22,
    name: "Ace of Wands",
    nameKo: "완드의 에이스",
    arcana: "minor",
    suit: "wands",
    number: 1,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries, Leo, Sagittarius",
    zodiacKo: "양자리, 사자자리, 궁수자리",
    keywords: {
      upright: [
        "inspiration",
        "new beginnings",
        "creativity",
        "potential",
        "power",
      ],
      uprightKo: ["영감", "새로운 시작", "창의성", "잠재력", "힘"],
      reversed: [
        "delays",
        "lack of motivation",
        "hesitation",
        "creative block",
        "missed opportunity",
      ],
      reversedKo: ["지연", "동기 부족", "망설임", "창작 장애", "놓친 기회"],
    },
    meaning: {
      upright: {
        general:
          "The Ace of Wands heralds a powerful new beginning filled with creative energy and inspiration. A spark of passion ignites within you, urging you to pursue a bold new venture or idea. This is the seed of pure potential waiting to be cultivated.",
        generalKo:
          "완드의 에이스는 창의적 에너지와 영감으로 가득한 강력한 새로운 시작을 알립니다. 열정의 불꽃이 당신 안에서 타오르며 대담한 새로운 모험이나 아이디어를 추구하도록 촉구합니다. 이것은 순수한 잠재력의 씨앗으로 키워나가기를 기다리고 있습니다.",
        love: "A thrilling new romantic connection or a passionate renewal in your current relationship is on the horizon. You feel a magnetic attraction and an exciting sense of possibility in love. Follow your heart boldly.",
        loveKo:
          "설레는 새로운 로맨틱한 연결이나 현재 관계에서의 열정적인 갱신이 다가오고 있습니다. 사랑에 있어 자석 같은 끌림과 흥미로운 가능성을 느끼게 됩니다. 대담하게 마음을 따르세요.",
        career:
          "An exciting new career opportunity, project, or entrepreneurial venture is presenting itself. Your creative vision and enthusiasm will open doors. This is an ideal time to take initiative and start something new.",
        careerKo:
          "흥미로운 새로운 경력 기회, 프로젝트 또는 창업 벤처가 나타나고 있습니다. 당신의 창의적 비전과 열정이 문을 열어줄 것입니다. 주도권을 잡고 새로운 것을 시작하기에 이상적인 시기입니다.",
        finance:
          "New financial opportunities are emerging, possibly through a creative endeavor or entrepreneurial idea. The energy is ripe for bold investments or income streams. Trust your instincts but plan wisely.",
        financeKo:
          "창의적 노력이나 창업 아이디어를 통해 새로운 재정적 기회가 나타나고 있습니다. 대담한 투자나 수입원을 위한 에너지가 무르익고 있습니다. 직감을 믿되 현명하게 계획하세요.",
        health:
          "A surge of vitality and physical energy is flowing through you. This is an excellent time to start a new fitness routine or health regimen. Channel this fiery energy into active pursuits.",
        healthKo:
          "활력과 신체 에너지의 급증이 당신을 통해 흐르고 있습니다. 새로운 운동 루틴이나 건강 관리를 시작하기에 훌륭한 시기입니다. 이 불같은 에너지를 활동적인 추구에 쏟으세요.",
        spirituality:
          "A profound spiritual awakening or a new spiritual path is calling to you. You feel a deep inner fire that connects you to your higher purpose. Embrace this transformative energy and explore new spiritual practices.",
        spiritualityKo:
          "깊은 영적 각성이나 새로운 영적 길이 당신을 부르고 있습니다. 더 높은 목적과 연결되는 깊은 내면의 불을 느끼게 됩니다. 이 변화의 에너지를 받아들이고 새로운 영적 수련을 탐구하세요.",
      },
      reversed: {
        general:
          "You may be experiencing creative blocks, delays, or a lack of motivation. An idea or project that once excited you now feels stagnant. Reconnect with your inner passion and consider what is truly holding you back.",
        generalKo:
          "창작 장애, 지연 또는 동기 부족을 경험하고 있을 수 있습니다. 한때 당신을 흥분시켰던 아이디어나 프로젝트가 이제 정체된 것처럼 느껴집니다. 내면의 열정과 다시 연결하고 무엇이 진정으로 당신을 막고 있는지 생각해 보세요.",
        love: "Romantic efforts may feel stalled or uninspired. There could be a lack of spark or passion in your love life. Reflect on whether fear or self-doubt is preventing you from opening your heart.",
        loveKo:
          "로맨틱한 노력이 정체되거나 영감이 부족하게 느껴질 수 있습니다. 연애에 불꽃이나 열정이 부족할 수 있습니다. 두려움이나 자기 의심이 마음을 여는 것을 막고 있는지 돌아보세요.",
        career:
          "Career plans may face unexpected obstacles or delays. You might feel stuck in a job that no longer ignites your passion. Re-evaluate your goals and find ways to reignite your professional drive.",
        careerKo:
          "경력 계획이 예상치 못한 장애물이나 지연에 직면할 수 있습니다. 더 이상 열정을 불러일으키지 않는 직장에 갇혀 있다고 느낄 수 있습니다. 목표를 재평가하고 직업적 추진력을 다시 불태울 방법을 찾으세요.",
        finance:
          "Financial ventures may not be yielding the expected results. Impulsive spending or poorly planned investments could cause setbacks. Take a step back and reassess your financial strategies.",
        financeKo:
          "재정적 벤처가 기대한 결과를 내지 못할 수 있습니다. 충동적인 지출이나 계획이 부족한 투자가 차질을 일으킬 수 있습니다. 한 발 물러서서 재정 전략을 재평가하세요.",
        health:
          "Your energy levels may feel depleted or you might struggle to maintain a consistent health routine. Burnout or lack of motivation could be affecting your well-being. Rest and recharge before pushing forward.",
        healthKo:
          "에너지 수준이 고갈되었거나 일관된 건강 루틴을 유지하는 데 어려움을 겪을 수 있습니다. 번아웃이나 동기 부족이 웰빙에 영향을 미칠 수 있습니다. 앞으로 나아가기 전에 쉬고 재충전하세요.",
        spirituality:
          "You may feel disconnected from your spiritual path or lack the enthusiasm for inner exploration. Spiritual practices might feel like going through the motions. Seek out what once inspired you and be patient with your journey.",
        spiritualityKo:
          "영적 길에서 단절감을 느끼거나 내면 탐구에 대한 열정이 부족할 수 있습니다. 영적 수련이 형식적으로 느껴질 수 있습니다. 한때 당신에게 영감을 주었던 것을 찾고 여정에 인내심을 가지세요.",
      },
    },
    symbolism:
      "In the Rider-Waite-Smith deck, a hand emerges from a cloud holding a sprouting wand, symbolizing divine inspiration and the gift of creative potential. The lush landscape below with a castle in the distance represents the fertile ground and future achievements that await. Leaves fall from the wand, signifying growth and the natural unfolding of new ideas.",
    symbolismKo:
      "라이더-웨이트-스미스 덱에서 구름 속에서 나온 손이 싹이 트는 지팡이를 잡고 있으며, 이는 신성한 영감과 창의적 잠재력의 선물을 상징합니다. 멀리 성이 보이는 아래의 푸른 풍경은 비옥한 땅과 기다리고 있는 미래의 성취를 나타냅니다. 지팡이에서 잎이 떨어지며 성장과 새로운 아이디어의 자연스러운 전개를 의미합니다.",
    advice:
      "Seize this moment of creative inspiration and act on it boldly. The universe is offering you a powerful spark — nurture it into a flame.",
    adviceKo:
      "이 창의적 영감의 순간을 포착하고 대담하게 행동하세요. 우주가 당신에게 강력한 불꽃을 제공하고 있습니다 — 그것을 불꽃으로 키워나가세요.",
    yesOrNo: "yes",
    numerology:
      "One represents new beginnings, raw potential, and the initial spark of creation. It is the seed from which all things grow.",
    numerologyKo:
      "1은 새로운 시작, 원초적 잠재력, 그리고 창조의 최초 불꽃을 나타냅니다. 모든 것이 자라나는 씨앗입니다.",
    affirmation: "I embrace new beginnings with courage and creative fire.",
    affirmationKo: "나는 용기와 창의적인 불꽃으로 새로운 시작을 받아들입니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A hand emerging from clouds holds a sprouting wooden wand over a lush green landscape with a distant castle.",
  },
  {
    id: 23,
    name: "Two of Wands",
    nameKo: "완드의 2",
    arcana: "minor",
    suit: "wands",
    number: 2,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries",
    zodiacKo: "양자리",
    keywords: {
      upright: [
        "planning",
        "future vision",
        "decisions",
        "discovery",
        "progress",
      ],
      uprightKo: ["계획", "미래 비전", "결정", "발견", "진보"],
      reversed: [
        "fear of change",
        "indecision",
        "lack of planning",
        "playing it safe",
        "restlessness",
      ],
      reversedKo: [
        "변화에 대한 두려움",
        "우유부단",
        "계획 부족",
        "안전한 선택",
        "불안",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Two of Wands signals a time of planning and looking toward the future with confidence. You stand at a crossroads with the world at your feet, ready to make bold decisions. Your initial success has given you the foundation to dream bigger.",
        generalKo:
          "완드의 2는 자신감을 가지고 미래를 바라보며 계획을 세우는 시기를 알립니다. 세상을 발 아래 두고 교차로에 서서 대담한 결정을 내릴 준비가 되어 있습니다. 초기 성공이 더 큰 꿈을 꿀 수 있는 기반을 마련해 주었습니다.",
        love: "You are contemplating the future direction of your love life and considering what you truly desire in a partner. If in a relationship, you may be planning next steps together. Be open to expanding your horizons in love.",
        loveKo:
          "연애의 미래 방향을 고민하고 파트너에게서 진정으로 원하는 것이 무엇인지 생각하고 있습니다. 관계 중이라면 함께 다음 단계를 계획하고 있을 수 있습니다. 사랑에서 지평을 넓히는 것에 열린 마음을 가지세요.",
        career:
          "You are mapping out your career path and considering ambitious new directions. Partnerships or collaborations may play a key role in your plans. Trust your vision and take calculated steps forward.",
        careerKo:
          "경력 경로를 구상하고 야심찬 새로운 방향을 고려하고 있습니다. 파트너십이나 협업이 계획에서 핵심 역할을 할 수 있습니다. 비전을 믿고 계산된 발걸음을 내딛으세요.",
        finance:
          "Financial planning and long-term investment strategies are highlighted. You may be evaluating different options for growing your wealth. Take the time to research before committing to a financial path.",
        financeKo:
          "재정 계획과 장기 투자 전략이 강조됩니다. 자산을 늘리기 위한 다양한 옵션을 평가하고 있을 수 있습니다. 재정적 경로에 전념하기 전에 조사할 시간을 가지세요.",
        health:
          "You are thinking about long-term health goals and creating a sustainable wellness plan. Consider exploring new approaches to fitness or nutrition. Planning now will lead to lasting results.",
        healthKo:
          "장기적인 건강 목표에 대해 생각하고 지속 가능한 웰니스 계획을 세우고 있습니다. 피트니스나 영양에 대한 새로운 접근법을 탐색해 보세요. 지금의 계획이 지속적인 결과로 이어질 것입니다.",
        spirituality:
          "You are expanding your spiritual awareness and considering new philosophical perspectives. The world of spirit feels vast and full of potential. Allow your curiosity to guide you toward deeper understanding.",
        spiritualityKo:
          "영적 인식을 확장하고 새로운 철학적 관점을 고려하고 있습니다. 영의 세계가 광대하고 잠재력으로 가득 차 있다고 느낍니다. 호기심이 더 깊은 이해로 인도하도록 허용하세요.",
      },
      reversed: {
        general:
          "Fear of the unknown or indecision is preventing you from moving forward. You may be clinging to your comfort zone rather than taking a leap of faith. Overthinking is paralyzing your progress.",
        generalKo:
          "미지에 대한 두려움이나 우유부단함이 앞으로 나아가는 것을 막고 있습니다. 도약하기보다 안전지대에 매달리고 있을 수 있습니다. 과도한 생각이 진전을 마비시키고 있습니다.",
        love: "You may be afraid to commit or take a relationship to the next level. Indecision about what you want in love is causing stagnation. Confront your fears and be honest about your desires.",
        loveKo:
          "헌신하거나 관계를 다음 단계로 발전시키는 것이 두려울 수 있습니다. 사랑에서 원하는 것에 대한 우유부단함이 정체를 일으키고 있습니다. 두려움에 맞서고 욕구에 솔직해지세요.",
        career:
          "You may be stuck in analysis paralysis regarding your career direction. Fear of failure is keeping you from pursuing your ambitions. Break free from overthinking and take the first step.",
        careerKo:
          "경력 방향에 대해 분석 마비에 빠져 있을 수 있습니다. 실패에 대한 두려움이 야망을 추구하지 못하게 하고 있습니다. 과도한 생각에서 벗어나 첫 걸음을 내딛으세요.",
        finance:
          "Lack of financial planning or fear of risk is keeping your money stagnant. You may be avoiding necessary financial decisions. Seek advice and create a realistic plan to move forward.",
        financeKo:
          "재정 계획의 부족이나 위험에 대한 두려움이 돈을 정체시키고 있습니다. 필요한 재정적 결정을 피하고 있을 수 있습니다. 조언을 구하고 현실적인 계획을 세워 앞으로 나아가세요.",
        health:
          "You may be procrastinating on health decisions or avoiding medical checkups. A lack of clear health goals is making it hard to stay motivated. Start small and build momentum gradually.",
        healthKo:
          "건강 결정을 미루거나 건강 검진을 피하고 있을 수 있습니다. 명확한 건강 목표의 부재가 동기를 유지하기 어렵게 만들고 있습니다. 작게 시작하고 점진적으로 추진력을 쌓으세요.",
        spirituality:
          "You may feel spiritually stagnant or unsure which path to follow. The abundance of options feels overwhelming rather than exciting. Ground yourself and trust that clarity will come with patience.",
        spiritualityKo:
          "영적으로 정체되어 있거나 어떤 길을 따를지 확신이 없을 수 있습니다. 풍부한 선택지가 흥미롭기보다 압도적으로 느껴집니다. 자신을 안정시키고 인내심으로 명확성이 올 것을 믿으세요.",
      },
    },
    symbolism:
      "A well-dressed figure stands atop a castle battlement, holding a globe in one hand and a wand in the other, gazing out over the vast sea. The globe symbolizes the world of possibilities before them, while the wand represents their creative power. The second wand is mounted to the wall, suggesting a secure foundation already established.",
    symbolismKo:
      "잘 차려입은 인물이 성벽 위에 서서 한 손에는 지구본을, 다른 손에는 지팡이를 들고 광활한 바다를 바라보고 있습니다. 지구본은 그들 앞에 펼쳐진 가능성의 세계를 상징하며, 지팡이는 창의적 힘을 나타냅니다. 두 번째 지팡이는 벽에 고정되어 이미 확립된 안정적인 기반을 암시합니다.",
    advice:
      "Plan boldly and envision your future with clarity. The world is ready for you — step beyond what is familiar.",
    adviceKo:
      "대담하게 계획하고 미래를 명확하게 구상하세요. 세상이 당신을 위해 준비되어 있습니다 — 익숙한 것 너머로 나아가세요.",
    yesOrNo: "yes",
    numerology:
      "Two represents duality, partnership, and the balance between planning and action. It is the moment of decision before movement begins.",
    numerologyKo:
      "2는 이중성, 파트너십, 그리고 계획과 행동 사이의 균형을 나타냅니다. 움직임이 시작되기 전 결정의 순간입니다.",
    affirmation:
      "I plan my future with confidence and embrace the unknown with courage.",
    affirmationKo:
      "나는 자신감을 가지고 미래를 계획하며 용기로 미지의 것을 받아들입니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A noble figure on a castle wall holds a globe while gazing across the ocean, with two wands framing the scene.",
  },
  {
    id: 24,
    name: "Three of Wands",
    nameKo: "완드의 3",
    arcana: "minor",
    suit: "wands",
    number: 3,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries",
    zodiacKo: "양자리",
    keywords: {
      upright: [
        "expansion",
        "foresight",
        "overseas opportunities",
        "growth",
        "progress",
      ],
      uprightKo: ["확장", "선견지명", "해외 기회", "성장", "진보"],
      reversed: [
        "obstacles",
        "delays in plans",
        "frustration",
        "lack of foresight",
        "playing small",
      ],
      reversedKo: [
        "장애물",
        "계획 지연",
        "좌절",
        "선견지명 부족",
        "소극적 태도",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Three of Wands signifies expansion, progress, and the early results of your efforts coming to fruition. Your plans are underway and the horizon holds great promise. Ships are returning with the rewards of your foresight and courage.",
        generalKo:
          "완드의 3은 확장, 진보, 그리고 당신의 노력의 초기 결과가 열매를 맺고 있음을 의미합니다. 계획이 진행 중이며 지평선에 큰 약속이 담겨 있습니다. 선견지명과 용기의 보상을 가지고 배가 돌아오고 있습니다.",
        love: "Your love life is expanding into exciting new territory. Long-distance connections or cross-cultural romance may be highlighted. Relationships are growing beyond initial boundaries into deeper, more fulfilling territory.",
        loveKo:
          "연애가 흥미로운 새로운 영역으로 확장되고 있습니다. 장거리 연결이나 다문화 로맨스가 강조될 수 있습니다. 관계가 초기 경계를 넘어 더 깊고 만족스러운 영역으로 성장하고 있습니다.",
        career:
          "Professional growth and expansion are on the horizon. International business, trade, or broader market opportunities may arise. Your strategic planning is paying off and recognition is coming.",
        careerKo:
          "직업적 성장과 확장이 눈앞에 있습니다. 국제 비즈니스, 무역 또는 더 넓은 시장 기회가 생길 수 있습니다. 전략적 계획이 결실을 맺고 인정을 받게 됩니다.",
        finance:
          "Financial growth through expansion, investments, or international ventures is indicated. Returns on previous investments may begin to materialize. Continue to think big and plan strategically.",
        financeKo:
          "확장, 투자 또는 국제적 벤처를 통한 재정적 성장이 나타납니다. 이전 투자에 대한 수익이 구체화되기 시작할 수 있습니다. 계속 크게 생각하고 전략적으로 계획하세요.",
        health:
          "Your health journey is showing positive momentum and you are seeing the results of consistent effort. Travel or a change of scenery could be beneficial for your well-being. Keep building on the healthy habits you have established.",
        healthKo:
          "건강 여정이 긍정적인 추진력을 보이고 있으며 꾸준한 노력의 결과를 보고 있습니다. 여행이나 환경의 변화가 웰빙에 도움이 될 수 있습니다. 확립한 건강한 습관을 계속 쌓아가세요.",
        spirituality:
          "Your spiritual practice is expanding and deepening, bringing new insights and connections. Exploring wisdom traditions from other cultures may enrich your journey. Trust that your spiritual investments are bearing fruit.",
        spiritualityKo:
          "영적 수련이 확장되고 심화되어 새로운 통찰과 연결을 가져오고 있습니다. 다른 문화의 지혜 전통을 탐구하는 것이 여정을 풍요롭게 할 수 있습니다. 영적 투자가 열매를 맺고 있다는 것을 믿으세요.",
      },
      reversed: {
        general:
          "Plans may be experiencing unexpected delays or obstacles are blocking your path to expansion. Frustration mounts as things are not moving as quickly as hoped. Reassess your strategy and consider whether your expectations are realistic.",
        generalKo:
          "계획이 예상치 못한 지연을 겪고 있거나 장애물이 확장의 길을 막고 있을 수 있습니다. 일이 희망만큼 빨리 움직이지 않아 좌절감이 커지고 있습니다. 전략을 재평가하고 기대가 현실적인지 고려하세요.",
        love: "Long-distance relationships may be struggling or travel plans with a partner could fall through. You might feel that your love life is not expanding as you wished. Patience and honest communication are needed.",
        loveKo:
          "장거리 관계가 어려움을 겪고 있거나 파트너와의 여행 계획이 무산될 수 있습니다. 연애가 바라던 대로 확장되지 않고 있다고 느낄 수 있습니다. 인내심과 솔직한 소통이 필요합니다.",
        career:
          "Career expansion plans may hit roadblocks or international deals could fall through. You might feel that your professional growth has plateaued. Revisit your approach and look for alternative paths.",
        careerKo:
          "경력 확장 계획이 장애물에 부딪히거나 국제 거래가 무산될 수 있습니다. 직업적 성장이 정체기에 도달했다고 느낄 수 있습니다. 접근 방식을 재검토하고 대안적 경로를 찾으세요.",
        finance:
          "Expected financial returns may be delayed or investments might underperform. Overextending yourself financially through risky ventures is cautioned against. Pull back and consolidate before attempting further expansion.",
        financeKo:
          "기대한 재정적 수익이 지연되거나 투자가 기대에 못 미칠 수 있습니다. 위험한 벤처를 통해 재정적으로 과도하게 확장하는 것에 대해 주의가 필요합니다. 더 확장을 시도하기 전에 물러서서 통합하세요.",
        health:
          "Health goals may feel out of reach or travel-related health issues could arise. You might be spreading yourself too thin and neglecting self-care. Slow down and focus on what is within your immediate control.",
        healthKo:
          "건강 목표가 손이 닿지 않는 곳에 있다고 느끼거나 여행 관련 건강 문제가 발생할 수 있습니다. 너무 많은 곳에 에너지를 분산시키고 자기 관리를 소홀히 하고 있을 수 있습니다. 속도를 줄이고 즉시 통제할 수 있는 것에 집중하세요.",
        spirituality:
          "You may feel like your spiritual growth has stalled or that you are seeking answers in the wrong places. Avoid spiritual bypassing and face the inner work that needs to be done. Return to the basics of your practice.",
        spiritualityKo:
          "영적 성장이 정체되었거나 잘못된 곳에서 답을 찾고 있다고 느낄 수 있습니다. 영적 회피를 피하고 해야 할 내면의 작업에 직면하세요. 수련의 기본으로 돌아가세요.",
      },
    },
    symbolism:
      "A figure stands on a cliff overlooking the sea, watching ships sail toward distant lands. Three wands are planted firmly in the ground beside them. The ships represent ventures and plans set in motion, while the cliffside vantage point symbolizes the foresight and vision needed to see opportunities beyond the horizon.",
    symbolismKo:
      "인물이 절벽 위에 서서 먼 땅을 향해 항해하는 배들을 바라보고 있습니다. 세 개의 지팡이가 그들 옆 땅에 단단히 박혀 있습니다. 배는 실행에 옮긴 벤처와 계획을 나타내며, 절벽의 전망대는 지평선 너머의 기회를 보기 위해 필요한 선견지명과 비전을 상징합니다.",
    advice:
      "Your ships are coming in. Continue looking forward with confidence and prepare to receive the fruits of your labor.",
    adviceKo:
      "당신의 배가 돌아오고 있습니다. 자신감을 가지고 계속 앞을 바라보며 노력의 열매를 받을 준비를 하세요.",
    yesOrNo: "yes",
    numerology:
      "Three represents growth, creativity, and the first manifestation of efforts. It is the number of expansion and collaboration.",
    numerologyKo:
      "3은 성장, 창의성, 그리고 노력의 첫 번째 발현을 나타냅니다. 확장과 협력의 숫자입니다.",
    affirmation:
      "My vision expands beyond limitations and my efforts bring abundant rewards.",
    affirmationKo:
      "나의 비전은 한계를 넘어 확장되며 나의 노력은 풍요로운 보상을 가져옵니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A cloaked figure on a cliff watches merchant ships sailing across a golden sea, with three tall wands standing beside them.",
  },
  {
    id: 25,
    name: "Four of Wands",
    nameKo: "완드의 4",
    arcana: "minor",
    suit: "wands",
    number: 4,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries",
    zodiacKo: "양자리",
    keywords: {
      upright: [
        "celebration",
        "harmony",
        "homecoming",
        "community",
        "stability",
      ],
      uprightKo: ["축하", "조화", "귀향", "공동체", "안정"],
      reversed: [
        "lack of harmony",
        "instability",
        "transition",
        "feeling unwelcome",
        "conflict at home",
      ],
      reversedKo: [
        "조화 부족",
        "불안정",
        "과도기",
        "환영받지 못하는 느낌",
        "가정 갈등",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Four of Wands is a joyful card of celebration, stability, and homecoming. A milestone has been reached and it is time to enjoy the fruits of your labor with those you love. Community, togetherness, and a sense of belonging fill this moment.",
        generalKo:
          "완드의 4는 축하, 안정, 귀향의 즐거운 카드입니다. 이정표에 도달했으며 사랑하는 사람들과 함께 노력의 열매를 즐길 시간입니다. 공동체, 유대감, 소속감이 이 순간을 가득 채웁니다.",
        love: "A relationship is reaching a beautiful milestone — an engagement, wedding, or moving in together may be on the cards. Deep happiness and stability in your romantic life bring cause for celebration. Love feels like home.",
        loveKo:
          "관계가 아름다운 이정표에 도달하고 있습니다 — 약혼, 결혼 또는 동거가 이루어질 수 있습니다. 로맨틱한 삶의 깊은 행복과 안정이 축하의 이유를 가져옵니다. 사랑이 집처럼 느껴집니다.",
        career:
          "A professional achievement deserves recognition and celebration. Team successes, company milestones, or completing a major project bring collective joy. Enjoy this accomplishment before moving on to the next challenge.",
        careerKo:
          "전문적 성취가 인정과 축하를 받을 자격이 있습니다. 팀 성공, 회사 이정표 또는 주요 프로젝트 완료가 집단적 기쁨을 가져옵니다. 다음 도전으로 넘어가기 전에 이 성취를 즐기세요.",
        finance:
          "Financial stability has been achieved and there is reason to feel secure. A real estate purchase, home improvement, or investment in your living situation may be favorable. Celebrate your financial progress wisely.",
        financeKo:
          "재정적 안정이 달성되었으며 안심할 이유가 있습니다. 부동산 구매, 주택 개선 또는 주거 환경에 대한 투자가 유리할 수 있습니다. 재정적 진전을 현명하게 축하하세요.",
        health:
          "Your health is in a good place and you are enjoying the benefits of balance and stability. Social connections and community activities enhance your well-being. Celebrate your body and the vitality it provides.",
        healthKo:
          "건강이 좋은 상태에 있으며 균형과 안정의 혜택을 누리고 있습니다. 사회적 연결과 공동체 활동이 웰빙을 향상시킵니다. 몸과 그것이 제공하는 활력을 축하하세요.",
        spirituality:
          "You are finding spiritual community and a sense of sacred belonging. Rituals, ceremonies, or group spiritual practices bring deep fulfillment. Honor the sacred space you have created within and around you.",
        spiritualityKo:
          "영적 공동체와 신성한 소속감을 찾고 있습니다. 의식, 행사 또는 그룹 영적 수련이 깊은 충만감을 가져옵니다. 내면과 주변에 만들어 놓은 신성한 공간을 존중하세요.",
      },
      reversed: {
        general:
          'Celebrations may feel hollow or a sense of instability threatens your peace. Conflict within the home or community may be causing tension. Re-evaluate what "home" and "belonging" truly mean to you.',
        generalKo:
          '축하가 공허하게 느껴지거나 불안정감이 평화를 위협하고 있을 수 있습니다. 가정이나 공동체 내의 갈등이 긴장을 일으키고 있을 수 있습니다. "집"과 "소속감"이 진정으로 무엇을 의미하는지 재평가하세요.',
        love: "A relationship may be going through a rough patch, with disagreements about shared living or future plans. You might feel unwelcome or unsupported by your partner. Address the underlying issues before they erode your foundation.",
        loveKo:
          "공동 생활이나 미래 계획에 대한 불일치로 관계가 어려운 시기를 겪고 있을 수 있습니다. 파트너에게 환영받지 못하거나 지지받지 못한다고 느낄 수 있습니다. 기반을 잠식하기 전에 근본적인 문제를 해결하세요.",
        career:
          "Workplace harmony may be disrupted by internal conflicts or lack of team cohesion. A project completion might go unrecognized or feel unfulfilling. Seek to restore balance and clear communication among colleagues.",
        careerKo:
          "내부 갈등이나 팀 결속력 부족으로 직장 내 조화가 깨질 수 있습니다. 프로젝트 완료가 인정받지 못하거나 불만족스럽게 느껴질 수 있습니다. 동료들 사이의 균형과 명확한 소통을 회복하세요.",
        finance:
          "Home-related expenses or property issues may cause financial stress. Plans for a major purchase might need to be reconsidered. Ensure your financial foundation is solid before making commitments.",
        financeKo:
          "주거 관련 비용이나 부동산 문제가 재정적 스트레스를 유발할 수 있습니다. 대규모 구매 계획을 재고해야 할 수 있습니다. 약속을 하기 전에 재정적 기반이 견고한지 확인하세요.",
        health:
          "Stress from home or family situations may be taking a toll on your health. You might feel ungrounded or unable to relax in your own space. Prioritize creating a peaceful environment that supports your well-being.",
        healthKo:
          "가정이나 가족 상황으로 인한 스트레스가 건강에 영향을 미칠 수 있습니다. 자신의 공간에서 안정감을 느끼지 못하거나 휴식을 취하지 못할 수 있습니다. 웰빙을 지원하는 평화로운 환경을 만드는 것을 우선시하세요.",
        spirituality:
          "You may feel disconnected from your spiritual community or struggle to find a sense of sacred space. Inner turmoil is disrupting your spiritual practice. Focus on rebuilding your inner sanctuary before seeking external connection.",
        spiritualityKo:
          "영적 공동체와 단절감을 느끼거나 신성한 공간을 찾는 데 어려움을 겪을 수 있습니다. 내면의 혼란이 영적 수련을 방해하고 있습니다. 외부 연결을 추구하기 전에 내면의 안식처를 재건하는 데 집중하세요.",
      },
    },
    symbolism:
      "Four wands form a canopy adorned with flowers and garlands, creating a welcoming gateway. Two figures dance joyfully beneath the structure while a castle and community gather in the background. The flower-draped wands represent celebration and the creation of sacred, festive space, while the castle signifies security and established foundations.",
    symbolismKo:
      "네 개의 지팡이가 꽃과 화환으로 장식된 캐노피를 형성하여 환영하는 입구를 만듭니다. 두 인물이 구조물 아래에서 기쁘게 춤추고 뒤에서는 성과 공동체가 모여 있습니다. 꽃으로 장식된 지팡이는 축하와 신성하고 축제적인 공간의 창조를 나타내며, 성은 안전과 확립된 기반을 의미합니다.",
    advice:
      "Pause to celebrate how far you have come. Share your joy with loved ones and let gratitude fill your heart.",
    adviceKo:
      "얼마나 멀리 왔는지 멈추어 축하하세요. 사랑하는 사람들과 기쁨을 나누고 감사함이 마음을 채우도록 하세요.",
    yesOrNo: "yes",
    numerology:
      "Four represents stability, structure, and solid foundations. It is the number of security and grounded achievement.",
    numerologyKo:
      "4는 안정, 구조, 그리고 견고한 기반을 나타냅니다. 보안과 근거 있는 성취의 숫자입니다.",
    affirmation:
      "I celebrate my achievements and welcome joy and harmony into my life.",
    affirmationKo: "나는 성취를 축하하고 기쁨과 조화를 내 삶에 환영합니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "Two joyful figures dance beneath a garland-draped canopy of four wands, with a castle and welcoming crowd behind them.",
  },
  {
    id: 26,
    name: "Five of Wands",
    nameKo: "완드의 5",
    arcana: "minor",
    suit: "wands",
    number: 5,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    keywords: {
      upright: [
        "conflict",
        "competition",
        "disagreement",
        "challenge",
        "tension",
      ],
      uprightKo: ["갈등", "경쟁", "불일치", "도전", "긴장"],
      reversed: [
        "avoiding conflict",
        "resolution",
        "compromise",
        "inner conflict",
        "harmony restored",
      ],
      reversedKo: ["갈등 회피", "해결", "타협", "내면 갈등", "조화 회복"],
    },
    meaning: {
      upright: {
        general:
          "The Five of Wands brings competitive energy, conflicts, and clashing perspectives. Multiple forces are vying for attention and tension is high. While challenging, this friction can spark growth if channeled constructively.",
        generalKo:
          "완드의 5는 경쟁적 에너지, 갈등, 상충하는 관점을 가져옵니다. 여러 세력이 관심을 끌기 위해 경쟁하고 긴장이 높습니다. 도전적이지만 이 마찰은 건설적으로 활용하면 성장을 촉진할 수 있습니다.",
        love: "Arguments, jealousy, or competition for attention may be straining your love life. Multiple suitors or conflicting desires create confusion. Clear communication is essential to navigate these turbulent waters.",
        loveKo:
          "다툼, 질투 또는 관심을 위한 경쟁이 연애를 긴장시키고 있을 수 있습니다. 여러 구혼자나 상충하는 욕구가 혼란을 만듭니다. 이 격동의 물결을 헤쳐나가기 위해 명확한 소통이 필수적입니다.",
        career:
          "Workplace competition, office politics, or disagreements among colleagues are creating a tense environment. Projects may involve too many opinions and not enough direction. Rise above the chaos by focusing on your contribution.",
        careerKo:
          "직장 내 경쟁, 사내 정치 또는 동료 간의 불일치가 긴장된 환경을 만들고 있습니다. 프로젝트에 너무 많은 의견이 있고 방향이 충분하지 않을 수 있습니다. 자신의 기여에 집중하여 혼란 위에 서세요.",
        finance:
          "Financial competition or conflicting advice about money matters may cause confusion. Be cautious of get-rich-quick schemes or investments where too many parties are involved. Stay focused on your own financial strategy.",
        financeKo:
          "재정적 경쟁이나 금전 문제에 대한 상충하는 조언이 혼란을 일으킬 수 있습니다. 너무 많은 당사자가 관여하는 빠른 부자 되기 계획이나 투자에 주의하세요. 자신의 재정 전략에 집중하세요.",
        health:
          "Stress from conflicts may be manifesting as physical tension, headaches, or inflammation. Competitive activities or sports may lead to minor injuries. Find healthy outlets for your frustrated energy.",
        healthKo:
          "갈등으로 인한 스트레스가 신체적 긴장, 두통 또는 염증으로 나타날 수 있습니다. 경쟁적 활동이나 스포츠가 경미한 부상으로 이어질 수 있습니다. 좌절한 에너지를 위한 건강한 출구를 찾으세요.",
        spirituality:
          "Inner conflicts or conflicting spiritual beliefs are creating turmoil. You may be struggling to reconcile different teachings or philosophies. Embrace the tension as part of your growth rather than seeking premature resolution.",
        spiritualityKo:
          "내면의 갈등이나 상충하는 영적 신념이 혼란을 일으키고 있습니다. 다른 가르침이나 철학을 조화시키는 데 어려움을 겪고 있을 수 있습니다. 조기 해결을 추구하기보다 성장의 일부로 긴장을 받아들이세요.",
      },
      reversed: {
        general:
          "Conflicts are beginning to resolve, or you may be avoiding necessary confrontation. Internal strife is quieting down and compromise is possible. Be willing to find common ground without sacrificing your core values.",
        generalKo:
          "갈등이 해결되기 시작하거나 필요한 대립을 피하고 있을 수 있습니다. 내부 갈등이 잠잠해지고 있으며 타협이 가능합니다. 핵심 가치를 희생하지 않으면서 공통점을 찾을 의향을 가지세요.",
        love: "Romantic conflicts may be calming down as both partners seek compromise. Alternatively, you might be suppressing valid concerns to keep the peace. True harmony requires honest dialogue, not just the absence of fighting.",
        loveKo:
          "양쪽 파트너가 타협을 모색하면서 로맨틱한 갈등이 가라앉고 있을 수 있습니다. 또는 평화를 유지하기 위해 타당한 우려를 억누르고 있을 수 있습니다. 진정한 조화는 싸움의 부재가 아닌 솔직한 대화를 필요로 합니다.",
        career:
          "Workplace tensions are easing or you are finding ways to work around disagreements. However, avoiding conflict altogether may lead to resentment building up. Address issues diplomatically but firmly.",
        careerKo:
          "직장 내 긴장이 완화되거나 불일치를 해결할 방법을 찾고 있습니다. 그러나 갈등을 완전히 회피하면 원한이 쌓일 수 있습니다. 외교적이지만 단호하게 문제를 해결하세요.",
        finance:
          "Financial disputes may be reaching resolution or you are finding peaceful solutions to money conflicts. Avoid sweeping financial disagreements under the rug. Address them honestly for lasting stability.",
        financeKo:
          "재정 분쟁이 해결에 도달하거나 금전 갈등에 대한 평화로운 해결책을 찾고 있습니다. 재정적 불일치를 숨기지 마세요. 지속적인 안정을 위해 솔직하게 해결하세요.",
        health:
          "Health-related stress is beginning to subside. Inner conflicts about lifestyle choices may be resolving. Take this calmer period to establish sustainable healthy habits.",
        healthKo:
          "건강 관련 스트레스가 가라앉기 시작하고 있습니다. 생활방식 선택에 대한 내면의 갈등이 해결되고 있을 수 있습니다. 이 평온한 기간을 활용하여 지속 가능한 건강한 습관을 확립하세요.",
        spirituality:
          "Internal spiritual conflicts are finding resolution and you are reaching a place of inner peace. The struggle between different beliefs is softening into acceptance. Allow integration to happen naturally.",
        spiritualityKo:
          "내면의 영적 갈등이 해결되고 있으며 내적 평화의 자리에 도달하고 있습니다. 다른 신념 사이의 갈등이 수용으로 부드러워지고 있습니다. 통합이 자연스럽게 일어나도록 허용하세요.",
      },
    },
    symbolism:
      "Five figures brandish wands in what appears to be a chaotic skirmish, yet none seem to land a blow. The scene suggests mock battle or competitive sport rather than true warfare. The diverse clothing of the figures represents different backgrounds and perspectives clashing, while the open ground indicates that no one holds a definitive advantage.",
    symbolismKo:
      "다섯 인물이 혼란스러운 접전처럼 보이는 상황에서 지팡이를 휘두르지만 아무도 타격을 가하지 못하는 것 같습니다. 이 장면은 실제 전쟁보다 모의 전투나 경쟁 스포츠를 암시합니다. 인물들의 다양한 복장은 서로 다른 배경과 관점의 충돌을 나타내며, 열린 땅은 아무도 결정적 우위를 점하지 못함을 나타냅니다.",
    advice:
      "Embrace healthy competition as a catalyst for growth. Channel the friction into creative solutions rather than destructive arguments.",
    adviceKo:
      "건강한 경쟁을 성장의 촉매제로 받아들이세요. 마찰을 파괴적 논쟁이 아닌 창의적 해결책으로 전환하세요.",
    yesOrNo: "maybe",
    numerology:
      "Five represents challenge, change, and disruption. It is the number that tests the stability of what was built.",
    numerologyKo:
      "5는 도전, 변화, 그리고 혼란을 나타냅니다. 구축된 것의 안정성을 시험하는 숫자입니다.",
    affirmation:
      "I channel conflict into constructive growth and rise above competition with grace.",
    affirmationKo:
      "나는 갈등을 건설적인 성장으로 전환하고 품위 있게 경쟁 위에 섭니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "Five figures in diverse clothing clash wands in a spirited but chaotic melee on open ground.",
  },
  {
    id: 27,
    name: "Six of Wands",
    nameKo: "완드의 6",
    arcana: "minor",
    suit: "wands",
    number: 6,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    keywords: {
      upright: [
        "victory",
        "recognition",
        "success",
        "triumph",
        "public acclaim",
      ],
      uprightKo: ["승리", "인정", "성공", "개선", "공적 칭찬"],
      reversed: [
        "fall from grace",
        "ego",
        "lack of recognition",
        "self-doubt",
        "empty victory",
      ],
      reversedKo: ["추락", "자만심", "인정 부족", "자기 의심", "공허한 승리"],
    },
    meaning: {
      upright: {
        general:
          "The Six of Wands is a triumphant card of victory, public recognition, and well-earned success. You are being celebrated for your achievements and your confidence radiates. Ride this wave of acclaim with humility and gratitude.",
        generalKo:
          "완드의 6은 승리, 공적 인정, 그리고 정당하게 얻은 성공의 개선적인 카드입니다. 성취에 대해 칭찬받고 있으며 자신감이 빛나고 있습니다. 겸손과 감사함으로 이 칭찬의 물결을 타세요.",
        love: "Your love life is flourishing and others admire your relationship. You may feel like a power couple, basking in mutual admiration and success. Singles may attract attention through their confidence and charisma.",
        loveKo:
          "연애가 번성하고 있으며 다른 사람들이 당신의 관계를 부러워합니다. 상호 존경과 성공에 빛나는 파워 커플처럼 느낄 수 있습니다. 싱글은 자신감과 카리스마를 통해 관심을 끌 수 있습니다.",
        career:
          "Professional recognition, promotion, or public acclaim for your work is coming your way. You are standing out among your peers and your leadership is being acknowledged. This is your moment to shine.",
        careerKo:
          "직업적 인정, 승진 또는 작업에 대한 공적 칭찬이 다가오고 있습니다. 동료들 사이에서 돋보이며 리더십이 인정받고 있습니다. 빛날 당신의 순간입니다.",
        finance:
          "Financial success and the rewards of smart decisions are being realized. A profitable venture or return on investment brings satisfaction. Your financial acumen is gaining recognition.",
        financeKo:
          "재정적 성공과 현명한 결정의 보상이 실현되고 있습니다. 수익성 있는 벤처나 투자 수익이 만족을 가져옵니다. 재정적 안목이 인정받고 있습니다.",
        health:
          "You are achieving health milestones and feeling victorious in your wellness journey. Recovery from illness is strong and positive. Celebrate your body's strength and resilience.",
        healthKo:
          "건강 이정표를 달성하고 있으며 웰니스 여정에서 승리감을 느끼고 있습니다. 질병으로부터의 회복이 강하고 긍정적입니다. 몸의 힘과 회복력을 축하하세요.",
        spirituality:
          "Your spiritual growth is being recognized by your community or peers. You may be called to share your wisdom or lead others on their spiritual path. Let your inner light inspire those around you.",
        spiritualityKo:
          "영적 성장이 공동체나 동료들에게 인정받고 있습니다. 지혜를 나누거나 다른 사람들의 영적 길을 이끌도록 부름받을 수 있습니다. 내면의 빛이 주변 사람들에게 영감을 주도록 하세요.",
      },
      reversed: {
        general:
          "Success may feel hollow or recognition is not forthcoming despite your efforts. Ego and arrogance could be undermining your achievements. Stay grounded and remember that true success is measured from within.",
        generalKo:
          "성공이 공허하게 느껴지거나 노력에도 불구하고 인정이 오지 않을 수 있습니다. 자만심과 오만이 성취를 약화시킬 수 있습니다. 겸손함을 유지하고 진정한 성공은 내면에서 측정된다는 것을 기억하세요.",
        love: "Relationship dynamics may be off-balance, with one partner seeking too much validation or attention. Public perception of your relationship may not match the private reality. Focus on genuine connection over appearances.",
        loveKo:
          "한 파트너가 너무 많은 인정이나 관심을 구하면서 관계 역학이 불균형할 수 있습니다. 관계에 대한 공적 인식이 사적 현실과 일치하지 않을 수 있습니다. 외모보다 진정한 연결에 집중하세요.",
        career:
          "Your achievements at work may go unnoticed or a colleague takes credit for your contributions. Self-doubt or impostor syndrome could be undermining your confidence. Own your accomplishments and advocate for yourself.",
        careerKo:
          "직장에서의 성취가 눈에 띄지 않거나 동료가 당신의 기여에 대한 공을 가져갈 수 있습니다. 자기 의심이나 가면 증후군이 자신감을 약화시킬 수 있습니다. 성취를 인정하고 자신을 옹호하세요.",
        finance:
          "Financial gains may not be as impressive as they appear, or spending to maintain appearances is draining your resources. Be honest about your true financial position and adjust accordingly.",
        financeKo:
          "재정적 이익이 보이는 것만큼 인상적이지 않거나 체면을 유지하기 위한 지출이 자원을 고갈시키고 있을 수 있습니다. 진정한 재정 상태에 솔직해지고 그에 따라 조정하세요.",
        health:
          "You may be pushing yourself too hard to achieve health goals or comparing yourself unfavorably to others. Seeking external validation for your physical appearance can be harmful. Focus on how you feel rather than how you look.",
        healthKo:
          "건강 목표를 달성하기 위해 너무 무리하거나 자신을 다른 사람과 불리하게 비교하고 있을 수 있습니다. 외모에 대한 외부 인정을 추구하는 것은 해로울 수 있습니다. 어떻게 보이는지보다 어떻게 느끼는지에 집중하세요.",
        spirituality:
          "Spiritual ego or seeking recognition for your spiritual accomplishments may be leading you astray. True spiritual growth is an inner journey, not a performance. Release the need for external validation and deepen your authentic practice.",
        spiritualityKo:
          "영적 자만심이나 영적 성취에 대한 인정을 추구하는 것이 당신을 잘못된 길로 이끌고 있을 수 있습니다. 진정한 영적 성장은 공연이 아닌 내면의 여정입니다. 외부 인정의 필요를 놓아주고 진정한 수련을 깊게 하세요.",
      },
    },
    symbolism:
      "A victorious rider on horseback carries a wand crowned with a laurel wreath, while a cheering crowd accompanies the parade. The horse represents strength and forward momentum, and the wreath symbolizes honor and achievement. The crowd reflects public recognition and the support of the community in celebrating the hero's triumph.",
    symbolismKo:
      "승리한 기수가 말 위에서 월계관으로 장식된 지팡이를 들고 환호하는 군중이 행렬을 함께합니다. 말은 힘과 전진하는 추진력을 나타내며, 화환은 명예와 성취를 상징합니다. 군중은 영웅의 승리를 축하하는 공적 인정과 공동체의 지지를 반영합니다.",
    advice:
      "Accept recognition gracefully and let your success inspire others. Stay humble — true leaders lift those around them.",
    adviceKo:
      "인정을 품위 있게 받아들이고 성공이 다른 사람들에게 영감을 주도록 하세요. 겸손하세요 — 진정한 리더는 주변 사람들을 끌어올립니다.",
    yesOrNo: "yes",
    numerology:
      "Six represents harmony, balance, and reward after struggle. It is the number of victory achieved through perseverance.",
    numerologyKo:
      "6은 조화, 균형, 그리고 투쟁 후의 보상을 나타냅니다. 인내를 통해 달성한 승리의 숫자입니다.",
    affirmation:
      "I celebrate my victories with gratitude and share my success with those who supported me.",
    affirmationKo:
      "나는 감사함으로 승리를 축하하고 나를 지지해 준 사람들과 성공을 나눕니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A triumphant rider on a white horse carries a laurel-crowned wand through a cheering crowd.",
  },
  {
    id: 28,
    name: "Seven of Wands",
    nameKo: "완드의 7",
    arcana: "minor",
    suit: "wands",
    number: 7,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    keywords: {
      upright: [
        "defense",
        "perseverance",
        "standing your ground",
        "courage",
        "determination",
      ],
      uprightKo: ["방어", "인내", "입장 고수", "용기", "결의"],
      reversed: [
        "giving up",
        "overwhelm",
        "exhaustion",
        "vulnerability",
        "surrender",
      ],
      reversedKo: ["포기", "압도", "탈진", "취약성", "항복"],
    },
    meaning: {
      upright: {
        general:
          "The Seven of Wands calls you to stand your ground and defend your position against opposition. You have worked hard to reach this point and now must protect what you have achieved. Your determination and courage will see you through this challenge.",
        generalKo:
          "완드의 7은 반대에 맞서 입장을 고수하고 자신의 위치를 방어할 것을 요구합니다. 이 지점에 도달하기 위해 열심히 일했으며 이제 성취한 것을 지켜야 합니다. 결의와 용기가 이 도전을 극복하게 해줄 것입니다.",
        love: "You may need to fight for your relationship or defend your choices in love against outside criticism. Standing firm in your commitment shows strength and devotion. Do not let others undermine what you have built together.",
        loveKo:
          "관계를 위해 싸우거나 외부 비판에 맞서 사랑의 선택을 방어해야 할 수 있습니다. 헌신에 단호하게 서는 것은 강인함과 헌신을 보여줍니다. 다른 사람들이 함께 쌓아온 것을 약화시키지 않도록 하세요.",
        career:
          "You are facing competition or challenges to your professional position. Colleagues or rivals may be trying to undermine you. Stand firm, demonstrate your worth, and do not back down from what you have earned.",
        careerKo:
          "전문적 위치에 대한 경쟁이나 도전에 직면하고 있습니다. 동료나 라이벌이 당신을 약화시키려 할 수 있습니다. 단호하게 서서 가치를 보여주고 얻은 것에서 물러서지 마세요.",
        finance:
          "Financial challenges or competition for resources may require you to protect your assets. Others may challenge your financial decisions or try to claim what is yours. Be firm but fair in protecting your financial interests.",
        financeKo:
          "재정적 도전이나 자원에 대한 경쟁이 자산을 보호하도록 요구할 수 있습니다. 다른 사람들이 재정적 결정에 이의를 제기하거나 당신의 것을 차지하려 할 수 있습니다. 재정적 이익을 보호하는 데 단호하되 공정하세요.",
        health:
          "You are battling against health challenges with determination and resilience. Do not give up on your health goals even when progress feels slow. Your fighting spirit is your greatest asset in recovery.",
        healthKo:
          "결의와 회복력으로 건강 도전에 맞서 싸우고 있습니다. 진전이 느리게 느껴지더라도 건강 목표를 포기하지 마세요. 투쟁 정신이 회복에 가장 큰 자산입니다.",
        spirituality:
          "Your spiritual beliefs may be tested or challenged by others. Stand firm in your truth while remaining open to growth. True conviction comes from inner knowing, not external approval.",
        spiritualityKo:
          "영적 신념이 다른 사람들에 의해 시험되거나 도전받을 수 있습니다. 성장에 열려 있으면서 진실에 단호하게 서세요. 진정한 확신은 외부 승인이 아닌 내면의 앎에서 옵니다.",
      },
      reversed: {
        general:
          "You may feel overwhelmed by the constant need to defend yourself or your position. Exhaustion from fighting is causing you to consider giving up. Assess whether this battle is truly worth fighting or if strategic retreat is wiser.",
        generalKo:
          "자신이나 자신의 위치를 방어해야 하는 끊임없는 필요에 압도당하고 있을 수 있습니다. 싸움으로 인한 탈진이 포기를 고려하게 만들고 있습니다. 이 싸움이 정말로 싸울 가치가 있는지 전략적 후퇴가 더 현명한지 평가하세요.",
        love: "You may be feeling too tired to fight for your relationship any longer. The constant need to defend your love is wearing you down. Consider whether the relationship is sustainable or if it is time to let go.",
        loveKo:
          "더 이상 관계를 위해 싸우기에 너무 지쳤다고 느낄 수 있습니다. 사랑을 방어해야 하는 끊임없는 필요가 당신을 지치게 하고 있습니다. 관계가 지속 가능한지 또는 놓아줄 때인지 고려하세요.",
        career:
          "Workplace battles have left you drained and questioning whether the struggle is worth it. You may feel like giving up on a project or position. Sometimes strategic withdrawal is not defeat but wisdom.",
        careerKo:
          "직장 내 싸움이 당신을 소진시키고 투쟁이 가치가 있는지 의문을 품게 했습니다. 프로젝트나 직위를 포기하고 싶을 수 있습니다. 때로는 전략적 철수가 패배가 아니라 지혜입니다.",
        finance:
          "Financial pressures and the constant fight to stay afloat may be overwhelming you. Consider seeking professional financial advice rather than fighting alone. There is no shame in asking for help.",
        financeKo:
          "재정적 압박과 버티기 위한 끊임없는 싸움이 당신을 압도하고 있을 수 있습니다. 혼자 싸우기보다 전문 재정 조언을 구하는 것을 고려하세요. 도움을 요청하는 것은 부끄러운 일이 아닙니다.",
        health:
          "Your body is showing signs of exhaustion from prolonged stress or fighting. It may be time to surrender to rest and allow yourself to heal. Pushing through when depleted only makes things worse.",
        healthKo:
          "장기적인 스트레스나 싸움으로 인한 탈진의 징후가 나타나고 있습니다. 쉼에 항복하고 스스로 치유할 시간일 수 있습니다. 고갈된 상태에서 밀어붙이는 것은 상황을 악화시킬 뿐입니다.",
        spirituality:
          "You may be losing faith or feeling too exhausted to maintain your spiritual practice. The constant inner battle is draining your spirit. Surrender does not mean failure — sometimes letting go is the most spiritual act.",
        spiritualityKo:
          "믿음을 잃거나 영적 수련을 유지하기에 너무 지쳤다고 느낄 수 있습니다. 끊임없는 내면의 전투가 정신을 고갈시키고 있습니다. 항복은 실패를 의미하지 않습니다 — 때로는 놓아줌이 가장 영적인 행위입니다.",
      },
    },
    symbolism:
      "A lone figure stands on an elevated position, wielding a wand defensively against six wands attacking from below. The high ground represents the advantage of position earned through past effort. The mismatched shoes suggest being caught off guard, yet still choosing to fight. The scene embodies courageous defense against adversity.",
    symbolismKo:
      "한 인물이 높은 위치에 서서 아래에서 공격하는 여섯 개의 지팡이에 맞서 방어적으로 지팡이를 휘두르고 있습니다. 높은 위치는 과거의 노력으로 얻은 위치의 이점을 나타냅니다. 맞지 않는 신발은 불시에 당했지만 여전히 싸우기를 선택한 것을 암시합니다. 이 장면은 역경에 맞선 용감한 방어를 구현합니다.",
    advice:
      "Hold your ground with conviction. The challenges you face are a testament to your success — those who have nothing worth protecting face no opposition.",
    adviceKo:
      "확신을 가지고 입장을 고수하세요. 직면한 도전은 성공의 증거입니다 — 지킬 가치가 있는 것이 없는 사람은 반대에 직면하지 않습니다.",
    yesOrNo: "yes",
    numerology:
      "Seven represents challenge, inner strength, and the test of faith. It is the number of perseverance and spiritual fortitude.",
    numerologyKo:
      "7은 도전, 내적 힘, 그리고 믿음의 시험을 나타냅니다. 인내와 영적 불굴의 숫자입니다.",
    affirmation:
      "I stand firm in my truth and defend what I have worked hard to build.",
    affirmationKo: "나는 진실에 단호하게 서서 열심히 쌓아온 것을 지킵니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A determined figure on a hilltop defends against six wands thrusting up from challengers below.",
  },
  {
    id: 29,
    name: "Eight of Wands",
    nameKo: "완드의 8",
    arcana: "minor",
    suit: "wands",
    number: 8,
    element: "Fire",
    elementKo: "불",
    zodiac: "Sagittarius",
    zodiacKo: "궁수자리",
    keywords: {
      upright: [
        "swift action",
        "movement",
        "momentum",
        "rapid progress",
        "travel",
      ],
      uprightKo: ["신속한 행동", "움직임", "추진력", "빠른 진보", "여행"],
      reversed: [
        "delays",
        "stagnation",
        "frustration",
        "miscommunication",
        "rushing",
      ],
      reversedKo: ["지연", "정체", "좌절", "소통 오류", "서두름"],
    },
    meaning: {
      upright: {
        general:
          "The Eight of Wands signals rapid movement, swift action, and things falling into place at great speed. Everything is accelerating and obstacles are clearing from your path. Ride this momentum and act quickly while the energy is in your favor.",
        generalKo:
          "완드의 8은 빠른 움직임, 신속한 행동, 그리고 모든 것이 빠른 속도로 제자리에 들어맞고 있음을 알립니다. 모든 것이 가속되고 있으며 장애물이 길에서 사라지고 있습니다. 에너지가 유리한 동안 이 추진력을 타고 빠르게 행동하세요.",
        love: "Romance is moving quickly and passion is intensifying. A whirlwind relationship, sudden confession, or rapid deepening of feelings is likely. Enjoy the excitement while staying true to your values.",
        loveKo:
          "로맨스가 빠르게 진행되고 있으며 열정이 강해지고 있습니다. 급격한 관계, 갑작스러운 고백 또는 감정의 급격한 깊어짐이 있을 수 있습니다. 가치관에 충실하면서 흥분을 즐기세요.",
        career:
          "Career opportunities are arriving rapidly and projects are gaining momentum. Quick decisions and fast execution are required. Strike while the iron is hot and capitalize on this wave of professional energy.",
        careerKo:
          "경력 기회가 빠르게 도착하고 있으며 프로젝트가 추진력을 얻고 있습니다. 빠른 결정과 신속한 실행이 필요합니다. 쇠가 뜨거울 때 치고 이 직업적 에너지의 파도를 활용하세요.",
        finance:
          "Financial matters are moving quickly — payments arriving, deals closing, or investments bearing fruit rapidly. Act decisively on financial opportunities as they may not wait. This is a period of abundant cash flow.",
        financeKo:
          "재정 문제가 빠르게 움직이고 있습니다 — 지불이 도착하고, 거래가 마감되거나 투자가 빠르게 열매를 맺고 있습니다. 기다려주지 않을 수 있는 재정적 기회에 결단력 있게 행동하세요. 풍부한 현금 흐름의 기간입니다.",
        health:
          "Recovery and healing are happening faster than expected. Your energy levels are surging and you feel vibrant and alive. Channel this vitality into positive health actions while the momentum is strong.",
        healthKo:
          "회복과 치유가 예상보다 빠르게 진행되고 있습니다. 에너지 수준이 급등하고 있으며 활기차고 살아있다고 느낍니다. 추진력이 강한 동안 이 활력을 긍정적인 건강 활동으로 전환하세요.",
        spirituality:
          "Spiritual insights and revelations are arriving rapidly, almost faster than you can process them. Messages from the universe are clear and aligned with your path. Stay open and receptive to this accelerated spiritual download.",
        spiritualityKo:
          "영적 통찰과 깨달음이 거의 처리할 수 있는 것보다 빠르게 도착하고 있습니다. 우주의 메시지가 명확하고 당신의 길과 일치합니다. 이 가속화된 영적 다운로드에 열려 있고 수용적으로 머무세요.",
      },
      reversed: {
        general:
          "Plans are stalling and the momentum you relied on is slowing. Miscommunication or premature action may be causing setbacks. Patience is needed — forcing things will only create more obstacles.",
        generalKo:
          "계획이 멈추고 있으며 의지했던 추진력이 느려지고 있습니다. 소통 오류나 성급한 행동이 차질을 일으키고 있을 수 있습니다. 인내심이 필요합니다 — 강요하면 더 많은 장애물만 만들 것입니다.",
        love: "A relationship may be moving too fast or important messages are being miscommunicated. Slow down and ensure both partners are on the same page. Rushing into commitment without clarity leads to regret.",
        loveKo:
          "관계가 너무 빠르게 진행되거나 중요한 메시지가 잘못 전달되고 있을 수 있습니다. 속도를 줄이고 양쪽 파트너가 같은 페이지에 있는지 확인하세요. 명확성 없이 헌신에 서두르면 후회로 이어집니다.",
        career:
          "Projects may be stalling or facing unexpected delays. Miscommunication with colleagues or clients is causing frustration. Step back, clarify expectations, and avoid rushing important decisions.",
        careerKo:
          "프로젝트가 정체되거나 예상치 못한 지연에 직면할 수 있습니다. 동료나 고객과의 소통 오류가 좌절을 일으키고 있습니다. 한 발 물러서서 기대를 명확히 하고 중요한 결정을 서두르지 마세요.",
        finance:
          "Financial transactions may be delayed or payments could be held up. Hasty financial decisions made without proper research may backfire. Slow down and double-check all financial arrangements.",
        financeKo:
          "금융 거래가 지연되거나 지불이 보류될 수 있습니다. 적절한 조사 없이 내린 성급한 재정적 결정이 역효과를 낼 수 있습니다. 속도를 줄이고 모든 재정적 준비를 다시 확인하세요.",
        health:
          "Recovery may be slower than anticipated or you are pushing yourself too hard too fast. Listen to your body and respect its healing timeline. Rushing recovery often leads to setbacks.",
        healthKo:
          "회복이 예상보다 느리거나 너무 빠르게 너무 무리하고 있을 수 있습니다. 몸의 말에 귀 기울이고 치유 일정을 존중하세요. 회복을 서두르면 종종 차질로 이어집니다.",
        spirituality:
          "Spiritual revelations may feel overwhelming or you might be struggling to integrate new insights. Information overload can scatter your energy. Ground yourself and process one insight at a time.",
        spiritualityKo:
          "영적 계시가 압도적으로 느껴지거나 새로운 통찰을 통합하는 데 어려움을 겪고 있을 수 있습니다. 정보 과부하가 에너지를 분산시킬 수 있습니다. 자신을 안정시키고 한 번에 하나의 통찰을 처리하세요.",
      },
    },
    symbolism:
      "Eight wands fly through the air in parallel formation over a peaceful river landscape, nearing the ground. The absence of any human figure emphasizes pure, uninhibited movement and speed. The clear sky and open landscape suggest no obstacles remain in the path. The river below symbolizes the flow of emotions and life energy moving in harmony with the swift wands.",
    symbolismKo:
      "여덟 개의 지팡이가 평화로운 강 풍경 위로 평행하게 공중을 날아 지면에 가까워지고 있습니다. 인물의 부재는 순수하고 방해받지 않는 움직임과 속도를 강조합니다. 맑은 하늘과 열린 풍경은 길에 장애물이 남아있지 않음을 암시합니다. 아래의 강은 빠른 지팡이와 조화롭게 움직이는 감정과 생명 에너지의 흐름을 상징합니다.",
    advice:
      "Act swiftly and decisively. The universe has cleared your path — do not hesitate when everything is aligning in your favor.",
    adviceKo:
      "신속하고 결단력 있게 행동하세요. 우주가 길을 열어주었습니다 — 모든 것이 유리하게 정렬되고 있을 때 망설이지 마세요.",
    yesOrNo: "yes",
    numerology:
      "Eight represents power, mastery, and accelerated momentum. It is the number of karmic return and rapid manifestation.",
    numerologyKo:
      "8은 힘, 숙달, 그리고 가속화된 추진력을 나타냅니다. 인과응보와 빠른 실현의 숫자입니다.",
    affirmation:
      "I move swiftly with confidence, aligned with the flow of the universe.",
    affirmationKo:
      "나는 우주의 흐름과 일치하여 자신감 있게 신속하게 움직입니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "Eight wands soar diagonally through a clear sky over a peaceful river valley, symbolizing rapid forward motion.",
  },
  {
    id: 30,
    name: "Nine of Wands",
    nameKo: "완드의 9",
    arcana: "minor",
    suit: "wands",
    number: 9,
    element: "Fire",
    elementKo: "불",
    zodiac: "Sagittarius",
    zodiacKo: "궁수자리",
    keywords: {
      upright: [
        "resilience",
        "persistence",
        "last stand",
        "boundaries",
        "inner strength",
      ],
      uprightKo: ["회복력", "끈기", "최후의 저항", "경계", "내면의 힘"],
      reversed: [
        "burnout",
        "stubbornness",
        "paranoia",
        "giving up",
        "overwhelm",
      ],
      reversedKo: ["번아웃", "고집", "편집증", "포기", "압도"],
    },
    meaning: {
      upright: {
        general:
          "The Nine of Wands represents resilience, persistence, and the strength to endure. You have been through many battles and carry the wounds to prove it, yet you stand ready for one more challenge. The finish line is near — do not give up now.",
        generalKo:
          "완드의 9는 회복력, 끈기, 그리고 견디는 힘을 나타냅니다. 많은 전투를 겪었으며 이를 증명하는 상처를 가지고 있지만 한 번 더 도전할 준비가 되어 있습니다. 결승선이 가까이 있습니다 — 지금 포기하지 마세요.",
        love: "Past heartbreaks have made you cautious in love, but your resilience is admirable. Guard your heart wisely but do not let old wounds prevent new love from entering. Trust is built gradually through consistent action.",
        loveKo:
          "과거의 상처가 사랑에서 조심스럽게 만들었지만 회복력은 존경할 만합니다. 마음을 현명하게 보호하되 오래된 상처가 새로운 사랑이 들어오는 것을 막지 않도록 하세요. 신뢰는 일관된 행동을 통해 점진적으로 쌓입니다.",
        career:
          "You have fought hard for your professional position and face one final challenge before reaching your goal. Fatigue is real but the end is in sight. Summon your remaining strength and push through.",
        careerKo:
          "직업적 위치를 위해 열심히 싸웠으며 목표에 도달하기 전 마지막 도전에 직면하고 있습니다. 피로는 현실이지만 끝이 보입니다. 남은 힘을 모아 밀고 나가세요.",
        finance:
          "Financial struggles have tested your resolve but you are close to achieving stability. Maintain your boundaries around spending and protect the progress you have made. One more push will get you to solid ground.",
        financeKo:
          "재정적 어려움이 결의를 시험했지만 안정 달성에 가까워지고 있습니다. 지출에 대한 경계를 유지하고 이룬 진전을 보호하세요. 한 번 더 밀어붙이면 견고한 기반에 도달할 것입니다.",
        health:
          "Your body has been through a lot and you are drawing on deep reserves of strength. Do not ignore signs of fatigue — rest is not weakness but strategic recovery. You are closer to full health than you realize.",
        healthKo:
          "몸이 많은 것을 겪었으며 깊은 힘의 비축분을 활용하고 있습니다. 피로의 징후를 무시하지 마세요 — 휴식은 약함이 아니라 전략적 회복입니다. 완전한 건강에 생각하는 것보다 가까이 있습니다.",
        spirituality:
          "Your spiritual journey has tested you profoundly and you carry the wisdom of experience. Stay vigilant but do not become rigid in your beliefs. The final test is often about trust and surrender.",
        spiritualityKo:
          "영적 여정이 당신을 깊이 시험했으며 경험의 지혜를 가지고 있습니다. 경계를 유지하되 신념에 경직되지 마세요. 마지막 시험은 종종 신뢰와 항복에 관한 것입니다.",
      },
      reversed: {
        general:
          "You are reaching a breaking point from prolonged struggle and may be on the verge of burnout. Stubbornness is keeping you in a fight that may no longer serve you. Know when to rest and when to let go.",
        generalKo:
          "장기적인 투쟁으로 인한 한계점에 도달하고 있으며 번아웃 직전일 수 있습니다. 고집이 더 이상 도움이 되지 않는 싸움에 머물게 하고 있습니다. 언제 쉬어야 하고 언제 놓아줘야 하는지 아세요.",
        love: "You may be so guarded from past hurts that you are pushing away potential partners. Paranoia about being hurt again is keeping you isolated. Consider whether your walls are protecting you or imprisoning you.",
        loveKo:
          "과거의 상처로 너무 방어적이 되어 잠재적 파트너를 밀어내고 있을 수 있습니다. 다시 상처받을 것에 대한 편집증이 고립시키고 있습니다. 벽이 당신을 보호하는 것인지 가두는 것인지 고려하세요.",
        career:
          "Professional burnout is taking a serious toll and continuing to push may cause collapse. Stubbornly refusing to delegate or ask for help is making things worse. Take a step back before you break down.",
        careerKo:
          "직업적 번아웃이 심각한 타격을 주고 있으며 계속 밀어붙이면 무너질 수 있습니다. 위임하거나 도움을 요청하기를 완고하게 거부하는 것이 상황을 악화시키고 있습니다. 무너지기 전에 한 발 물러서세요.",
        finance:
          "Financial exhaustion from constant struggle is overwhelming. You may be too stubborn to accept help or change your approach to money. Reassess your financial strategies and consider seeking professional guidance.",
        financeKo:
          "끊임없는 투쟁으로 인한 재정적 탈진이 압도적입니다. 도움을 받거나 돈에 대한 접근 방식을 바꾸기에 너무 완고할 수 있습니다. 재정 전략을 재평가하고 전문적 지도를 구하는 것을 고려하세요.",
        health:
          "Your body is sending urgent signals that it needs rest and recovery. Ignoring burnout symptoms will lead to serious health consequences. Put down your defenses and allow yourself to heal completely.",
        healthKo:
          "몸이 휴식과 회복이 필요하다는 긴급 신호를 보내고 있습니다. 번아웃 증상을 무시하면 심각한 건강 결과로 이어질 것입니다. 방어를 내려놓고 완전히 치유되도록 허용하세요.",
        spirituality:
          "Spiritual fatigue has left you feeling disconnected and disillusioned. You have been fighting spiritual battles for too long without rest. Surrender to grace and allow divine support to carry you for a while.",
        spiritualityKo:
          "영적 피로가 단절감과 환멸감을 남겼습니다. 너무 오랫동안 쉬지 않고 영적 전투를 해왔습니다. 은총에 항복하고 잠시 동안 신성한 지지가 당신을 이끌도록 허용하세요.",
      },
    },
    symbolism:
      "A weary, bandaged figure leans on a wand while eight more wands stand in a row behind them like a defensive wall. The bandage on the head speaks of past injuries and battles endured. Despite visible exhaustion, the figure remains standing and watchful, embodying the essence of resilience and the determination to see things through to the end.",
    symbolismKo:
      "지치고 붕대를 감은 인물이 지팡이에 기대고 있으며 뒤에 여덟 개의 지팡이가 방어벽처럼 줄지어 서 있습니다. 머리의 붕대는 과거의 부상과 견딘 전투를 말해줍니다. 눈에 보이는 탈진에도 불구하고 인물은 서서 경계를 유지하며, 회복력과 끝까지 해내겠다는 결의의 본질을 구현합니다.",
    advice:
      "You are stronger than you know. The final challenge is before you — summon your courage and push through. Rest is earned, not given.",
    adviceKo:
      "당신은 아는 것보다 더 강합니다. 마지막 도전이 앞에 있습니다 — 용기를 모아 밀고 나가세요. 휴식은 주어지는 것이 아니라 얻는 것입니다.",
    yesOrNo: "yes",
    numerology:
      "Nine represents near-completion, wisdom through experience, and the final test before fulfillment. It is the number of the seasoned warrior.",
    numerologyKo:
      "9는 거의 완성, 경험을 통한 지혜, 그리고 성취 전 마지막 시험을 나타냅니다. 노련한 전사의 숫자입니다.",
    affirmation:
      "I am resilient and draw strength from every challenge I have overcome.",
    affirmationKo: "나는 회복력이 있으며 극복한 모든 도전에서 힘을 끌어냅니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A bandaged but defiant figure leans on a wand before a row of eight standing wands, watchful and ready.",
  },
  {
    id: 31,
    name: "Ten of Wands",
    nameKo: "완드의 10",
    arcana: "minor",
    suit: "wands",
    number: 10,
    element: "Fire",
    elementKo: "불",
    zodiac: "Sagittarius",
    zodiacKo: "궁수자리",
    keywords: {
      upright: [
        "burden",
        "responsibility",
        "hard work",
        "overcommitment",
        "carrying too much",
      ],
      uprightKo: ["짐", "책임", "노력", "과도한 약속", "너무 많이 짊어짐"],
      reversed: [
        "release",
        "delegation",
        "letting go",
        "breaking point",
        "lightening the load",
      ],
      reversedKo: ["해방", "위임", "놓아줌", "한계점", "짐 덜기"],
    },
    meaning: {
      upright: {
        general:
          "The Ten of Wands shows you carrying a heavy burden of responsibilities, commitments, and obligations. You have taken on too much and the weight is bending your back. While your dedication is admirable, it is time to evaluate what you can delegate or release.",
        generalKo:
          "완드의 10은 책임, 약속, 의무의 무거운 짐을 지고 있는 모습을 보여줍니다. 너무 많은 것을 떠맡았으며 그 무게가 등을 구부리고 있습니다. 헌신은 존경할 만하지만 무엇을 위임하거나 놓을 수 있는지 평가할 때입니다.",
        love: "The weight of relationship responsibilities is feeling overwhelming. You may be carrying the emotional burden for both partners. Open an honest dialogue about sharing the load before resentment builds.",
        loveKo:
          "관계 책임의 무게가 압도적으로 느껴지고 있습니다. 양쪽 파트너의 감정적 짐을 혼자 지고 있을 수 있습니다. 원한이 쌓이기 전에 짐을 나누는 것에 대해 솔직한 대화를 나누세요.",
        career:
          "You are overworked and carrying the weight of too many projects or responsibilities. The drive to succeed has led to burnout territory. Prioritize ruthlessly and learn to say no to additional commitments.",
        careerKo:
          "과로하고 있으며 너무 많은 프로젝트나 책임의 무게를 지고 있습니다. 성공하려는 욕구가 번아웃 영역으로 이끌었습니다. 무자비하게 우선순위를 정하고 추가적인 약속에 거절하는 법을 배우세요.",
        finance:
          "Financial obligations and debts may feel crushing. You may be working multiple jobs or taking on extra work just to keep up. Consider restructuring your financial commitments and seek relief where possible.",
        financeKo:
          "재정적 의무와 빚이 압도적으로 느껴질 수 있습니다. 따라가기 위해 여러 직업을 가지거나 추가 업무를 하고 있을 수 있습니다. 재정적 약속을 재구성하고 가능한 곳에서 완화를 모색하세요.",
        health:
          "Physical exhaustion and stress-related health issues are likely. Your body cannot sustain this pace indefinitely. Prioritize rest, delegate tasks, and address the root causes of your overwhelm before your health suffers further.",
        healthKo:
          "신체적 탈진과 스트레스 관련 건강 문제가 있을 수 있습니다. 몸이 이 속도를 무한정 유지할 수 없습니다. 휴식을 우선시하고, 일을 위임하며, 건강이 더 악화되기 전에 압도감의 근본 원인을 해결하세요.",
        spirituality:
          "Spiritual practices may feel like another obligation rather than a source of renewal. You are carrying so many worldly burdens that your spirit is weighed down. Simplify your commitments to make room for spiritual nourishment.",
        spiritualityKo:
          "영적 수련이 갱신의 원천이 아닌 또 다른 의무처럼 느껴질 수 있습니다. 너무 많은 세속적 짐을 지고 있어 영혼이 무겁습니다. 영적 양분을 위한 공간을 만들기 위해 약속을 간소화하세요.",
      },
      reversed: {
        general:
          "You are beginning to release burdens that no longer serve you, or you have reached a breaking point that forces change. Learning to delegate and set boundaries is essential for your well-being. Freedom comes when you drop what was never yours to carry.",
        generalKo:
          "더 이상 도움이 되지 않는 짐을 내려놓기 시작하거나 변화를 강요하는 한계점에 도달했습니다. 위임하고 경계를 설정하는 법을 배우는 것이 웰빙에 필수적입니다. 원래 당신이 져야 할 것이 아닌 것을 내려놓을 때 자유가 옵니다.",
        love: "You are finally letting go of toxic relationship patterns or releasing the need to control everything in your love life. Sharing responsibilities with your partner brings relief and renewed connection. Love becomes lighter when both carry their share.",
        loveKo:
          "마침내 독성 관계 패턴을 놓아주거나 연애에서 모든 것을 통제하려는 필요를 놓아주고 있습니다. 파트너와 책임을 나누면 안도감과 새로운 연결이 옵니다. 양쪽이 각자의 몫을 지면 사랑이 가벼워집니다.",
        career:
          "You are learning to delegate, say no, or restructure your workload for better balance. The relief of releasing unnecessary responsibilities is palpable. Focus on what truly matters and let go of the rest.",
        careerKo:
          "위임하고, 거절하거나, 더 나은 균형을 위해 업무량을 재구성하는 법을 배우고 있습니다. 불필요한 책임을 놓는 안도감이 분명합니다. 진정으로 중요한 것에 집중하고 나머지는 놓아주세요.",
        finance:
          "Financial burdens are being addressed through debt restructuring, budgeting, or letting go of expensive commitments. The weight is starting to lift as you take practical steps toward financial freedom.",
        financeKo:
          "부채 구조조정, 예산 책정 또는 비용이 많이 드는 약속을 놓아줌으로써 재정적 부담이 해결되고 있습니다. 재정적 자유를 향한 실질적인 조치를 취하면서 무게가 줄어들기 시작하고 있습니다.",
        health:
          "You are finally prioritizing rest and reducing the stress that was harming your health. Recovery begins as you learn to put yourself first. Your body is grateful for the relief you are giving it.",
        healthKo:
          "마침내 건강을 해치던 스트레스를 줄이고 휴식을 우선시하고 있습니다. 자신을 먼저 생각하는 법을 배우면서 회복이 시작됩니다. 몸이 주는 안도에 감사하고 있습니다.",
        spirituality:
          "You are releasing spiritual burdens and returning to a simpler, more authentic practice. The weight of trying to be everything to everyone is lifting. Rediscover the joy of spiritual practice without obligation.",
        spiritualityKo:
          "영적 부담을 내려놓고 더 단순하고 진정한 수련으로 돌아가고 있습니다. 모두에게 모든 것이 되려는 부담이 줄어들고 있습니다. 의무 없이 영적 수련의 기쁨을 재발견하세요.",
      },
    },
    symbolism:
      "A figure struggles to carry ten heavy wands bundled together, walking toward a distant town. Their back is bent under the weight and they can barely see the path ahead. The town in the distance represents the goal that is almost within reach despite the tremendous burden. The image powerfully conveys the cost of taking on too much without asking for help.",
    symbolismKo:
      "한 인물이 묶인 열 개의 무거운 지팡이를 지고 먼 마을을 향해 걸어가며 고군분투하고 있습니다. 무게에 등이 구부러지고 앞길을 거의 볼 수 없습니다. 멀리 보이는 마을은 엄청난 부담에도 거의 손에 닿을 수 있는 목표를 나타냅니다. 이미지는 도움을 요청하지 않고 너무 많은 것을 떠맡는 대가를 강력하게 전달합니다.",
    advice:
      "Put down what is not yours to carry. Prioritize ruthlessly and delegate freely — your worth is not measured by how much you endure.",
    adviceKo:
      "당신이 져야 할 것이 아닌 것은 내려놓으세요. 무자비하게 우선순위를 정하고 자유롭게 위임하세요 — 당신의 가치는 얼마나 견디는지로 측정되지 않습니다.",
    yesOrNo: "maybe",
    numerology:
      "Ten represents completion, the end of a cycle, and the culmination of all that has come before. It signals the need for renewal.",
    numerologyKo:
      "10은 완성, 한 순환의 끝, 그리고 이전에 온 모든 것의 정점을 나타냅니다. 갱신의 필요를 알립니다.",
    affirmation:
      "I release what no longer serves me and carry only what is truly mine.",
    affirmationKo:
      "나는 더 이상 도움이 되지 않는 것을 놓아주고 진정으로 나의 것만 지닙니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A stooped figure struggles to carry ten bundled wands toward a distant village, their back bent under the heavy load.",
  },
  {
    id: 32,
    name: "Page of Wands",
    nameKo: "완드의 시종",
    arcana: "minor",
    suit: "wands",
    number: 11,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries, Leo, Sagittarius",
    zodiacKo: "양자리, 사자자리, 궁수자리",
    keywords: {
      upright: [
        "enthusiasm",
        "exploration",
        "discovery",
        "free spirit",
        "adventure",
      ],
      uprightKo: ["열정", "탐험", "발견", "자유로운 영혼", "모험"],
      reversed: [
        "impatience",
        "lack of direction",
        "procrastination",
        "scattered energy",
        "setbacks",
      ],
      reversedKo: ["조급함", "방향 부족", "미루기", "분산된 에너지", "좌절"],
    },
    meaning: {
      upright: {
        general:
          "The Page of Wands is a messenger of exciting news, creative inspiration, and the call to adventure. A youthful, enthusiastic energy invites you to explore new ideas and follow your passions. Embrace your curiosity and approach life with wonder and excitement.",
        generalKo:
          "완드의 시종은 흥미로운 소식, 창의적 영감, 그리고 모험에 대한 부름의 전령입니다. 젊고 열정적인 에너지가 새로운 아이디어를 탐구하고 열정을 따르도록 초대합니다. 호기심을 받아들이고 경이와 흥분으로 삶에 다가가세요.",
        love: "A flirtatious, playful energy enters your love life, bringing excitement and fun. A new admirer may appear, or you may feel inspired to pursue someone boldly. Let yourself be spontaneous and open to romantic adventure.",
        loveKo:
          "장난스럽고 유쾌한 에너지가 연애에 들어와 흥분과 즐거움을 가져옵니다. 새로운 숭배자가 나타나거나 대담하게 누군가를 추구하도록 영감을 받을 수 있습니다. 자발적이고 로맨틱한 모험에 열린 자세를 유지하세요.",
        career:
          "An exciting new opportunity or creative project sparks your professional enthusiasm. This may be a new job offer, a training opportunity, or a chance to explore a different field. Approach it with the eagerness and openness of a beginner.",
        careerKo:
          "흥미로운 새로운 기회나 창의적 프로젝트가 직업적 열정에 불을 붙입니다. 새로운 취업 제안, 교육 기회 또는 다른 분야를 탐구할 기회일 수 있습니다. 초심자의 열의와 개방성으로 다가가세요.",
        finance:
          "News about financial opportunities or a creative way to earn money may arrive. Your entrepreneurial spirit is awakening with fresh ideas. Start small, learn as you go, and let your enthusiasm guide your financial exploration.",
        financeKo:
          "재정적 기회에 대한 소식이나 돈을 버는 창의적인 방법이 도착할 수 있습니다. 신선한 아이디어로 기업가 정신이 깨어나고 있습니다. 작게 시작하고, 진행하면서 배우고, 열정이 재정적 탐구를 인도하도록 하세요.",
        health:
          "A fresh, energetic approach to health and fitness is calling you. Try a new sport, dance class, or outdoor activity that excites you. Your youthful energy and enthusiasm make this an ideal time to start new health habits.",
        healthKo:
          "건강과 피트니스에 대한 신선하고 에너지 넘치는 접근이 당신을 부르고 있습니다. 흥미를 끄는 새로운 스포츠, 댄스 수업 또는 야외 활동을 시도해 보세요. 젊은 에너지와 열정이 새로운 건강 습관을 시작하기에 이상적인 시기로 만듭니다.",
        spirituality:
          "A new spiritual interest or teaching is igniting your curiosity. Approach your spiritual exploration with the openness and wonder of a child. Every experience is a learning opportunity on this exciting path of discovery.",
        spiritualityKo:
          "새로운 영적 관심이나 가르침이 호기심에 불을 붙이고 있습니다. 아이의 개방성과 경이로 영적 탐구에 다가가세요. 모든 경험은 이 흥미로운 발견의 길에서 배움의 기회입니다.",
      },
      reversed: {
        general:
          "Enthusiasm may be waning or you feel directionless despite having many ideas. Scattered energy and lack of follow-through prevent meaningful progress. Focus your fire on one thing at a time rather than chasing every spark.",
        generalKo:
          "열정이 식고 있거나 많은 아이디어에도 불구하고 방향성을 잃었다고 느낄 수 있습니다. 분산된 에너지와 후속 조치 부족이 의미 있는 진전을 막고 있습니다. 모든 불꽃을 쫓기보다 한 번에 하나에 집중하세요.",
        love: "Impatience or unreliable behavior may be causing problems in your love life. You or a partner may be acting immature or commitment-phobic. Ground your romantic energy and show up consistently for those you care about.",
        loveKo:
          "조급함이나 신뢰할 수 없는 행동이 연애에 문제를 일으키고 있을 수 있습니다. 당신이나 파트너가 미성숙하게 행동하거나 약속을 두려워할 수 있습니다. 로맨틱한 에너지를 안정시키고 소중한 사람들을 위해 꾸준히 나타나세요.",
        career:
          "Career ideas keep changing or projects are started but never finished. Lack of commitment and impatience with the learning process hold you back. Pick one path and give it your full attention before jumping to the next.",
        careerKo:
          "경력 아이디어가 계속 바뀌거나 프로젝트가 시작되지만 완료되지 않습니다. 배움 과정에 대한 약속 부족과 조급함이 당신을 가로막고 있습니다. 다음으로 넘어가기 전에 하나의 길을 선택하고 전적으로 주의를 기울이세요.",
        finance:
          "Impulsive financial decisions or failing to follow through on money-making plans could set you back. The excitement of a new idea fades before it bears fruit. Develop financial discipline alongside your creative inspiration.",
        financeKo:
          "충동적인 재정 결정이나 돈을 버는 계획을 끝까지 이행하지 않으면 후퇴할 수 있습니다. 새로운 아이디어의 흥분이 열매를 맺기 전에 사라집니다. 창의적 영감과 함께 재정적 규율을 기르세요.",
        health:
          "Health goals are started with great enthusiasm but quickly abandoned. You may jump from one health trend to another without giving any a chance to work. Commitment and consistency are more valuable than excitement.",
        healthKo:
          "건강 목표가 큰 열정으로 시작되지만 빨리 포기됩니다. 어떤 것에도 효과를 발휘할 기회를 주지 않고 한 건강 트렌드에서 다른 것으로 뛰어다닐 수 있습니다. 헌신과 일관성이 흥분보다 더 가치 있습니다.",
        spirituality:
          "Spiritual dilettantism — sampling many traditions without going deep in any — may be keeping you on the surface. Resist the urge to chase every new teaching and instead commit to deepening one practice. Depth requires patience.",
        spiritualityKo:
          "영적 딜레탕티즘 — 어떤 전통에도 깊이 들어가지 않고 많은 것을 맛보는 것 — 이 표면에 머물게 할 수 있습니다. 모든 새로운 가르침을 쫓으려는 충동에 저항하고 대신 하나의 수련을 깊게 하는 데 전념하세요. 깊이에는 인내가 필요합니다.",
      },
    },
    symbolism:
      "A young figure stands in a barren landscape holding a wand with both hands, gazing at it with wonder and fascination. Their brightly colored tunic decorated with salamanders (symbols of fire) shows their passionate nature. The barren yet open landscape represents unlimited potential and the blank canvas on which adventures will be painted.",
    symbolismKo:
      "젊은 인물이 황량한 풍경에 서서 양손으로 지팡이를 잡고 경이와 매혹으로 바라보고 있습니다. 도롱뇽(불의 상징)으로 장식된 화려한 색의 튜닉이 그들의 열정적 성격을 보여줍니다. 황량하지만 열린 풍경은 무한한 잠재력과 모험이 그려질 빈 캔버스를 나타냅니다.",
    advice:
      "Follow your curiosity with courage and enthusiasm. Every great journey begins with a single step of wonder.",
    adviceKo:
      "용기와 열정으로 호기심을 따르세요. 모든 위대한 여정은 경이의 한 걸음으로 시작됩니다.",
    yesOrNo: "yes",
    numerology:
      "Eleven (Page) represents youthful energy, new messages, and the beginning of a journey. It combines the new start of one with the duality of learning.",
    numerologyKo:
      "11(시종)은 젊은 에너지, 새로운 메시지, 그리고 여정의 시작을 나타냅니다. 1의 새로운 시작과 배움의 이중성을 결합합니다.",
    affirmation:
      "I approach life with curiosity, enthusiasm, and a fearless spirit of adventure.",
    affirmationKo:
      "나는 호기심, 열정, 그리고 두려움 없는 모험 정신으로 삶에 다가갑니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A youthful figure in a salamander-patterned tunic gazes at a sprouting wand with wonder in a vast open landscape.",
  },
  {
    id: 33,
    name: "Knight of Wands",
    nameKo: "완드의 기사",
    arcana: "minor",
    suit: "wands",
    number: 12,
    element: "Fire",
    elementKo: "불",
    zodiac: "Sagittarius",
    zodiacKo: "궁수자리",
    keywords: {
      upright: ["action", "adventure", "passion", "courage", "impulsiveness"],
      uprightKo: ["행동", "모험", "열정", "용기", "충동"],
      reversed: [
        "recklessness",
        "aggression",
        "delays",
        "frustration",
        "burnout",
      ],
      reversedKo: ["무모함", "공격성", "지연", "좌절", "번아웃"],
    },
    meaning: {
      upright: {
        general:
          "The Knight of Wands charges forward with fiery passion, courage, and an unstoppable drive for adventure. Bold action and fearless pursuit of your goals are the hallmarks of this energy. Embrace your inner warrior and charge toward what sets your soul on fire.",
        generalKo:
          "완드의 기사는 불같은 열정, 용기, 그리고 멈출 수 없는 모험에 대한 욕구로 앞으로 돌진합니다. 대담한 행동과 목표에 대한 두려움 없는 추구가 이 에너지의 특징입니다. 내면의 전사를 받아들이고 영혼에 불을 붙이는 것을 향해 돌진하세요.",
        love: "A passionate, exciting romantic energy sweeps into your life like a whirlwind. A bold, charismatic person may enter your world, or existing passion reignites. Enjoy the thrill but ensure the fire sustains rather than burns out.",
        loveKo:
          "열정적이고 흥미로운 로맨틱 에너지가 회오리바람처럼 삶에 밀려옵니다. 대담하고 카리스마 있는 사람이 세계에 들어오거나 기존 열정이 다시 타오를 수 있습니다. 스릴을 즐기되 불이 꺼지지 않고 지속되도록 하세요.",
        career:
          "You are charging ahead with ambitious career plans and fearless energy. A dynamic project, travel for work, or bold career move is imminent. Your confidence and drive will open doors that caution would leave closed.",
        careerKo:
          "야심찬 경력 계획과 두려움 없는 에너지로 앞으로 돌진하고 있습니다. 역동적인 프로젝트, 출장 또는 대담한 경력 이동이 임박합니다. 자신감과 추진력이 신중함이 닫아놓을 문을 열어줄 것입니다.",
        finance:
          "Bold financial moves or entrepreneurial ventures are energized. Your willingness to take calculated risks could lead to significant gains. Channel your financial passion with strategy to maximize returns.",
        financeKo:
          "대담한 재정적 움직임이나 기업가적 벤처가 활성화되고 있습니다. 계산된 위험을 감수하려는 의지가 상당한 이익으로 이어질 수 있습니다. 수익을 극대화하기 위해 전략으로 재정적 열정을 이끌어가세요.",
        health:
          "High energy and a passion for physical activity make this an excellent time for intense exercise or athletic pursuits. Your body craves movement and adventure. Channel this fire into challenging physical goals.",
        healthKo:
          "높은 에너지와 신체 활동에 대한 열정이 격렬한 운동이나 운동 추구에 훌륭한 시기를 만듭니다. 몸이 움직임과 모험을 갈구합니다. 이 불을 도전적인 신체 목표로 전환하세요.",
        spirituality:
          "A passionate quest for spiritual truth is driving you forward. You seek experiences rather than just knowledge, wanting to feel the divine fire directly. Let your spiritual warrior lead you into transformative experiences.",
        spiritualityKo:
          "영적 진실에 대한 열정적 탐구가 당신을 앞으로 이끌고 있습니다. 단순한 지식이 아닌 경험을 추구하며 신성한 불을 직접 느끼고 싶어합니다. 영적 전사가 변화의 경험으로 이끌도록 하세요.",
      },
      reversed: {
        general:
          "Reckless behavior, impulsive decisions, or frustration from stalled plans may be causing problems. Your fire is either burning out of control or has been extinguished. Rein in your impulses and find a sustainable pace before you crash.",
        generalKo:
          "무모한 행동, 충동적 결정 또는 멈춘 계획에 대한 좌절이 문제를 일으키고 있을 수 있습니다. 불이 통제 불능으로 타오르거나 꺼졌을 수 있습니다. 충동을 억제하고 추락하기 전에 지속 가능한 속도를 찾으세요.",
        love: "A relationship may be suffering from reckless behavior, jealousy, or an inability to commit. Someone in the dynamic is acting impulsively without considering consequences. Passion without responsibility leads to destruction.",
        loveKo:
          "무모한 행동, 질투 또는 헌신 불능으로 관계가 고통받고 있을 수 있습니다. 관계 역학에서 누군가 결과를 고려하지 않고 충동적으로 행동하고 있습니다. 책임 없는 열정은 파괴로 이어집니다.",
        career:
          "Impulsive career decisions or aggressive behavior at work may be backfiring. Frustration from delays might be causing you to act rashly. Take a breath and think strategically rather than reactively.",
        careerKo:
          "충동적인 경력 결정이나 직장에서의 공격적 행동이 역효과를 내고 있을 수 있습니다. 지연에 대한 좌절이 성급하게 행동하게 만들고 있을 수 있습니다. 반응적으로가 아닌 전략적으로 생각하세요.",
        finance:
          "Financial recklessness or gambling with resources may lead to losses. Impulsive purchases or risky investments made in the heat of the moment could backfire. Cool your financial fire and think before you spend.",
        financeKo:
          "재정적 무모함이나 자원을 가지고 도박하는 것이 손실로 이어질 수 있습니다. 순간의 열기 속에서 내린 충동적 구매나 위험한 투자가 역효과를 낼 수 있습니다. 재정적 불을 식히고 쓰기 전에 생각하세요.",
        health:
          "Overexertion, sports injuries, or burnout from pushing too hard are likely. Your aggressive approach to fitness may be doing more harm than good. Balance intensity with proper rest and recovery.",
        healthKo:
          "과도한 노력, 스포츠 부상 또는 너무 세게 밀어붙여서 생긴 번아웃이 있을 수 있습니다. 피트니스에 대한 공격적 접근이 득보다 실이 될 수 있습니다. 적절한 휴식과 회복으로 강도의 균형을 맞추세요.",
        spirituality:
          "Spiritual arrogance or rushing through practices without depth may be holding you back. You might be seeking thrilling spiritual experiences rather than genuine transformation. Slow down and let the fire burn steadily rather than in explosive bursts.",
        spiritualityKo:
          "영적 오만이나 깊이 없이 수련을 서두르는 것이 당신을 가로막고 있을 수 있습니다. 진정한 변화보다 스릴 넘치는 영적 경험을 추구하고 있을 수 있습니다. 속도를 줄이고 폭발적 분출보다 꾸준히 불이 타도록 하세요.",
      },
    },
    symbolism:
      "An armored knight on a rearing horse charges forward, holding a wand aloft with determination. The horse represents raw power and drive, while the knight's armor adorned with salamanders signifies mastery over fire. The barren desert landscape suggests the knight's willingness to venture into unknown and challenging territory, fueled purely by passion and courage.",
    symbolismKo:
      "갑옷을 입은 기사가 뒷발로 선 말 위에서 결연하게 지팡이를 높이 들고 앞으로 돌진합니다. 말은 원초적 힘과 추진력을 나타내며, 도롱뇽으로 장식된 기사의 갑옷은 불에 대한 숙달을 의미합니다. 황량한 사막 풍경은 순수한 열정과 용기에 의해 미지의 도전적인 영역으로 뛰어들려는 기사의 의지를 암시합니다.",
    advice:
      "Act boldly and pursue your passions with fearless energy. The world rewards those who dare to charge forward.",
    adviceKo:
      "대담하게 행동하고 두려움 없는 에너지로 열정을 추구하세요. 세상은 앞으로 돌진하는 자에게 보상합니다.",
    yesOrNo: "yes",
    numerology:
      "Twelve (Knight) represents dynamic action, the quest for experience, and the mastery of fire through movement. It is the number of the restless seeker.",
    numerologyKo:
      "12(기사)는 역동적 행동, 경험의 추구, 그리고 움직임을 통한 불의 숙달을 나타냅니다. 쉬지 않는 탐구자의 숫자입니다.",
    affirmation:
      "I charge forward with passion, courage, and unstoppable determination.",
    affirmationKo:
      "나는 열정, 용기, 그리고 멈출 수 없는 결의로 앞으로 돌진합니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "An armored knight on a rearing horse charges through a desert, holding a wand high with fiery determination.",
  },
  {
    id: 34,
    name: "Queen of Wands",
    nameKo: "완드의 여왕",
    arcana: "minor",
    suit: "wands",
    number: 13,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    keywords: {
      upright: [
        "confidence",
        "independence",
        "warmth",
        "determination",
        "charisma",
      ],
      uprightKo: ["자신감", "독립", "따뜻함", "결의", "카리스마"],
      reversed: [
        "jealousy",
        "insecurity",
        "selfishness",
        "demanding",
        "temperamental",
      ],
      reversedKo: ["질투", "불안", "이기심", "요구적", "변덕스러움"],
    },
    meaning: {
      upright: {
        general:
          "The Queen of Wands embodies confidence, warmth, and magnetic charisma. She is a natural leader who inspires others through her vibrant energy and unwavering determination. Channel her fierce independence and creative vision to command your world with grace and power.",
        generalKo:
          "완드의 여왕은 자신감, 따뜻함, 자석 같은 카리스마를 구현합니다. 그녀는 활기찬 에너지와 흔들리지 않는 결의로 다른 사람들에게 영감을 주는 타고난 리더입니다. 그녀의 치열한 독립성과 창의적 비전을 이끌어 품위와 힘으로 세상을 다스리세요.",
        love: "You radiate a magnetic, confident energy that draws admirers to you. In a relationship, you are both passionate and nurturing, creating a warm and dynamic partnership. Embrace your sensuality and let your natural charm light up your love life.",
        loveKo:
          "숭배자들을 끌어들이는 자석 같은 자신감 넘치는 에너지를 발산하고 있습니다. 관계에서 열정적이면서도 양육적이어서 따뜻하고 역동적인 파트너십을 만듭니다. 관능성을 받아들이고 자연스러운 매력이 연애를 밝히도록 하세요.",
        career:
          "Your professional confidence and natural leadership are commanding respect and opening opportunities. You inspire your team and lead with both vision and warmth. Others are drawn to your energy and want to follow your lead.",
        careerKo:
          "전문적 자신감과 타고난 리더십이 존경을 이끌어내고 기회를 열고 있습니다. 팀에 영감을 주며 비전과 따뜻함 모두로 이끕니다. 다른 사람들이 에너지에 끌리며 리드를 따르고 싶어합니다.",
        finance:
          "Financial confidence and creative income strategies are serving you well. Your bold approach to money management and ability to spot opportunities lead to prosperity. Trust your instincts and invest in what you are passionate about.",
        financeKo:
          "재정적 자신감과 창의적 수입 전략이 잘 작용하고 있습니다. 돈 관리에 대한 대담한 접근과 기회를 발견하는 능력이 번영으로 이끕니다. 직감을 믿고 열정을 가진 것에 투자하세요.",
        health:
          "Vital, vibrant health energy flows through you. Your positive attitude and active lifestyle contribute to excellent well-being. You inspire others to take care of their health through your own radiant example.",
        healthKo:
          "활력 넘치고 생기 넘치는 건강 에너지가 당신을 통해 흐르고 있습니다. 긍정적 태도와 활동적인 생활방식이 훌륭한 웰빙에 기여합니다. 빛나는 모범을 통해 다른 사람들이 건강을 돌보도록 영감을 줍니다.",
        spirituality:
          "Your spiritual practice is vibrant, confident, and deeply personal. You lead by example and others are drawn to your spiritual fire. Trust your intuition and let your inner queen guide your spiritual path with authority and grace.",
        spiritualityKo:
          "영적 수련이 활기차고 자신감 있으며 깊이 개인적입니다. 모범으로 이끌며 다른 사람들이 영적 불에 끌립니다. 직관을 믿고 내면의 여왕이 권위와 품위로 영적 길을 이끌도록 하세요.",
      },
      reversed: {
        general:
          "Insecurity, jealousy, or demanding behavior may be undermining your natural confidence. The shadow side of your fire is manifesting as control, manipulation, or temperamental outbursts. Reconnect with your authentic self and address the fears driving this behavior.",
        generalKo:
          "불안, 질투 또는 요구적 행동이 자연스러운 자신감을 약화시키고 있을 수 있습니다. 불의 그림자 면이 통제, 조작 또는 변덕스러운 폭발로 나타나고 있습니다. 진정한 자아와 다시 연결하고 이 행동을 유발하는 두려움을 해결하세요.",
        love: "Jealousy, possessiveness, or insecurity may be poisoning your romantic relationships. You might be demanding too much attention or reacting with temperamental outbursts. Address your inner wounds before they damage your connections.",
        loveKo:
          "질투, 소유욕 또는 불안이 로맨틱한 관계를 해칠 수 있습니다. 너무 많은 관심을 요구하거나 변덕스러운 폭발로 반응하고 있을 수 있습니다. 연결을 손상시키기 전에 내면의 상처를 해결하세요.",
        career:
          "Workplace dynamics may be suffering from power struggles, gossip, or an overbearing leadership style. Insecurity about your abilities might cause you to overcompensate or micromanage. Lead with empowerment rather than control.",
        careerKo:
          "권력 다툼, 험담 또는 지나치게 압도적인 리더십 스타일로 직장 역학이 고통받고 있을 수 있습니다. 능력에 대한 불안이 과잉 보상하거나 미시 관리하게 만들 수 있습니다. 통제보다 권한 부여로 이끄세요.",
        finance:
          "Impulsive spending driven by emotional needs or keeping up appearances may be harming your finances. Financial jealousy or comparing your wealth to others creates toxic energy. Focus on your own financial path with confidence.",
        financeKo:
          "감정적 필요나 체면 유지에 의한 충동적 지출이 재정을 해칠 수 있습니다. 재정적 질투나 부를 다른 사람과 비교하는 것이 독성 에너지를 만듭니다. 자신감을 가지고 자신의 재정적 길에 집중하세요.",
        health:
          "Stress from emotional turmoil or trying to maintain a perfect image may be affecting your health. Burnout from overextending yourself in all directions is likely. Let go of the need to appear invincible and take genuine care of yourself.",
        healthKo:
          "감정적 혼란이나 완벽한 이미지를 유지하려는 스트레스가 건강에 영향을 미칠 수 있습니다. 모든 방향으로 과도하게 확장하여 번아웃이 발생할 수 있습니다. 무적으로 보이려는 필요를 놓아주고 진정으로 자신을 돌보세요.",
        spirituality:
          "Spiritual pride or using spiritual authority to manipulate others may be leading you away from authentic growth. The fire within has become about ego rather than illumination. Humble yourself and return to the source of your spiritual power.",
        spiritualityKo:
          "영적 자만심이나 다른 사람을 조종하기 위해 영적 권위를 사용하는 것이 진정한 성장에서 멀어지게 할 수 있습니다. 내면의 불이 조명이 아닌 자아에 관한 것이 되었습니다. 자신을 낮추고 영적 힘의 원천으로 돌아가세요.",
      },
    },
    symbolism:
      "A regal queen sits upon a throne adorned with lions and sunflowers, holding a wand in one hand and a sunflower in the other. A black cat sits at her feet, representing her intuitive and mysterious side. The sunflowers symbolize joy, vitality, and growth, while the lions represent courage and royal authority. Her confident posture radiates warmth and self-assurance.",
    symbolismKo:
      "위엄 있는 여왕이 사자와 해바라기로 장식된 왕좌에 앉아 한 손에는 지팡이를, 다른 손에는 해바라기를 들고 있습니다. 검은 고양이가 발치에 앉아 직관적이고 신비로운 면을 나타냅니다. 해바라기는 기쁨, 활력, 성장을 상징하며 사자는 용기와 왕실의 권위를 나타냅니다. 자신감 있는 자세가 따뜻함과 자기 확신을 발산합니다.",
    advice:
      "Own your power and lead with both confidence and compassion. Your fire is a gift — use it to warm and inspire those around you.",
    adviceKo:
      "힘을 소유하고 자신감과 연민 모두로 이끄세요. 당신의 불은 선물입니다 — 주변 사람들을 따뜻하게 하고 영감을 주는 데 사용하세요.",
    yesOrNo: "yes",
    numerology:
      "Thirteen (Queen) represents mature feminine power, nurturing authority, and the mastery of creative fire. It is the number of magnetic leadership.",
    numerologyKo:
      "13(여왕)은 성숙한 여성의 힘, 양육하는 권위, 그리고 창의적 불의 숙달을 나타냅니다. 자석 같은 리더십의 숫자입니다.",
    affirmation:
      "I lead with confidence and warmth, inspiring others through my authentic fire.",
    affirmationKo:
      "나는 자신감과 따뜻함으로 이끌며 진정한 불꽃으로 다른 사람들에게 영감을 줍니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A confident queen on a lion-and-sunflower throne holds a wand and sunflower, with a black cat at her feet.",
  },
  {
    id: 35,
    name: "King of Wands",
    nameKo: "완드의 왕",
    arcana: "minor",
    suit: "wands",
    number: 14,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries, Leo",
    zodiacKo: "양자리, 사자자리",
    keywords: {
      upright: [
        "leadership",
        "vision",
        "entrepreneurship",
        "honor",
        "bold action",
      ],
      uprightKo: ["리더십", "비전", "기업가 정신", "명예", "대담한 행동"],
      reversed: [
        "tyranny",
        "arrogance",
        "impulsiveness",
        "ruthlessness",
        "overbearing",
      ],
      reversedKo: ["폭정", "오만", "충동성", "무자비", "독단적"],
    },
    meaning: {
      upright: {
        general:
          "The King of Wands represents visionary leadership, bold entrepreneurship, and the mastery of creative fire. He leads with charisma, honor, and an inspiring vision that rallies others to his cause. Step into your role as a leader and use your passion to create lasting change.",
        generalKo:
          "완드의 왕은 비전 있는 리더십, 대담한 기업가 정신, 그리고 창의적 불의 숙달을 나타냅니다. 카리스마, 명예, 그리고 다른 사람들을 결집시키는 영감을 주는 비전으로 이끕니다. 리더로서의 역할에 나서고 열정을 사용하여 지속적인 변화를 만드세요.",
        love: "A confident, passionate partner or energy is dominant in your love life. Leadership in the relationship comes naturally and is balanced with deep devotion. This is a love that burns bright and stands strong through any challenge.",
        loveKo:
          "자신감 있고 열정적인 파트너나 에너지가 연애에서 지배적입니다. 관계에서의 리더십이 자연스럽게 오며 깊은 헌신과 균형을 이룹니다. 이것은 밝게 타오르며 어떤 도전도 견디는 사랑입니다.",
        career:
          "You are stepping into a powerful leadership role or launching an ambitious venture with confidence. Your entrepreneurial vision and ability to inspire teams set you apart. This is your time to lead boldly and make your mark.",
        careerKo:
          "강력한 리더십 역할에 나서거나 자신감을 가지고 야심찬 벤처를 시작하고 있습니다. 기업가적 비전과 팀에 영감을 주는 능력이 당신을 차별화합니다. 대담하게 이끌고 족적을 남길 시간입니다.",
        finance:
          "Financial mastery and bold wealth-building strategies characterize this period. Your entrepreneurial approach to money and willingness to take calculated risks lead to impressive gains. You manage resources with both vision and practical wisdom.",
        financeKo:
          "재정적 숙달과 대담한 부 구축 전략이 이 시기를 특징짓습니다. 돈에 대한 기업가적 접근과 계산된 위험을 감수하려는 의지가 인상적인 이익으로 이어집니다. 비전과 실용적 지혜 모두로 자원을 관리합니다.",
        health:
          "Strong vitality and a commanding approach to your health serve you well. You lead by example in fitness and wellness, inspiring others with your discipline and energy. Maintain this powerful approach while ensuring you do not neglect rest.",
        healthKo:
          "강한 활력과 건강에 대한 당당한 접근이 잘 작용하고 있습니다. 피트니스와 웰니스에서 모범을 보이며 규율과 에너지로 다른 사람들에게 영감을 줍니다. 휴식을 소홀히 하지 않으면서 이 강력한 접근을 유지하세요.",
        spirituality:
          "You embody spiritual leadership with authority and integrity. Your spiritual fire burns bright and steady, guiding others through your example. Lead your spiritual community with vision, honor, and genuine service.",
        spiritualityKo:
          "권위와 성실함으로 영적 리더십을 구현합니다. 영적 불이 밝고 꾸준하게 타오르며 모범을 통해 다른 사람들을 인도합니다. 비전, 명예, 진정한 봉사로 영적 공동체를 이끄세요.",
      },
      reversed: {
        general:
          "Leadership qualities may be manifesting as tyranny, arrogance, or an overbearing need for control. Your fire has become destructive rather than creative, burning bridges and alienating allies. Temper your power with humility and consider the impact of your actions on others.",
        generalKo:
          "리더십 자질이 폭정, 오만 또는 통제에 대한 압도적 필요로 나타나고 있을 수 있습니다. 불이 창의적이기보다 파괴적이 되어 다리를 불태우고 동맹을 소외시키고 있습니다. 겸손으로 힘을 다스리고 행동이 다른 사람들에게 미치는 영향을 고려하세요.",
        love: "Domineering or controlling behavior is damaging your relationship. Arrogance and a need to always be right create conflict and resentment. True love requires partnership and equality, not a power hierarchy.",
        loveKo:
          "독재적이거나 통제적인 행동이 관계를 손상시키고 있습니다. 오만함과 항상 옳아야 하는 필요가 갈등과 원한을 만듭니다. 진정한 사랑은 권력 계층이 아닌 파트너십과 평등을 필요로 합니다.",
        career:
          "An authoritarian leadership style is alienating colleagues and damaging team morale. Your ambition may be blinding you to the needs and contributions of others. Great leaders empower their teams, not dominate them.",
        careerKo:
          "권위주의적 리더십 스타일이 동료를 소외시키고 팀 사기를 떨어뜨리고 있습니다. 야망이 다른 사람들의 필요와 기여를 보지 못하게 할 수 있습니다. 위대한 리더는 팀을 지배하는 것이 아니라 권한을 부여합니다.",
        finance:
          "Reckless financial decisions driven by arrogance or overconfidence may lead to significant losses. A tyrannical approach to money — either hoarding or gambling recklessly — needs correction. Seek counsel and practice financial humility.",
        financeKo:
          "오만이나 과신에 의한 무모한 재정적 결정이 상당한 손실로 이어질 수 있습니다. 돈에 대한 독재적 접근 — 비축하거나 무모하게 도박하는 것 — 은 수정이 필요합니다. 조언을 구하고 재정적 겸손을 실천하세요.",
        health:
          "An aggressive, all-or-nothing approach to health may be causing harm. Pushing through pain or ignoring your body's limits in pursuit of dominance over your physicality is dangerous. Respect your body's wisdom and lead your health with balance.",
        healthKo:
          "건강에 대한 공격적이고 전부 아니면 전무 방식이 해를 끼칠 수 있습니다. 신체에 대한 지배를 추구하며 고통을 무시하거나 몸의 한계를 무시하는 것은 위험합니다. 몸의 지혜를 존중하고 균형으로 건강을 이끄세요.",
        spirituality:
          "Spiritual authority may have become ego-driven, with a tendency to impose your beliefs on others. Using spiritual power for personal gain or status corrupts the gift. Return to servant leadership and let your spirit be guided by love rather than power.",
        spiritualityKo:
          "영적 권위가 자아 중심적이 되어 신념을 다른 사람에게 강요하는 경향이 있을 수 있습니다. 개인적 이득이나 지위를 위해 영적 힘을 사용하는 것은 선물을 부패시킵니다. 섬기는 리더십으로 돌아가고 힘보다 사랑에 의해 영이 인도되도록 하세요.",
      },
    },
    symbolism:
      "A powerful king sits on a throne decorated with lions and salamanders, holding a living, sprouting wand. A small salamander rests at his feet, symbolizing his complete mastery over the element of fire. His robe is adorned with salamanders and lions, reflecting both courage and the ability to walk through fire unscathed. His gaze is forward and visionary, embodying the leader who shapes the future.",
    symbolismKo:
      "강력한 왕이 사자와 도롱뇽으로 장식된 왕좌에 앉아 살아 있고 싹이 트는 지팡이를 들고 있습니다. 작은 도롱뇽이 발치에 앉아 불의 원소에 대한 완전한 숙달을 상징합니다. 그의 로브는 도롱뇽과 사자로 장식되어 용기와 불 속을 무사히 걸을 수 있는 능력을 반영합니다. 미래를 형성하는 리더를 구현하며 전방을 바라보는 비전 있는 시선을 가지고 있습니다.",
    advice:
      "Lead with vision, integrity, and bold action. Your fire has the power to transform the world — wield it with wisdom and honor.",
    adviceKo:
      "비전, 성실함, 대담한 행동으로 이끄세요. 당신의 불은 세상을 변화시킬 힘을 가지고 있습니다 — 지혜와 명예로 휘두르세요.",
    yesOrNo: "yes",
    numerology:
      "Fourteen (King) represents mature masculine power, sovereign authority, and the full mastery of creative fire. It is the number of the visionary ruler.",
    numerologyKo:
      "14(왕)는 성숙한 남성의 힘, 주권적 권위, 그리고 창의적 불의 완전한 숙달을 나타냅니다. 비전 있는 통치자의 숫자입니다.",
    affirmation:
      "I lead with vision and honor, using my fire to inspire and uplift the world around me.",
    affirmationKo:
      "나는 비전과 명예로 이끌며, 불을 사용하여 주변 세계에 영감을 주고 고양시킵니다.",
    cardBackEmoji: "🔥",
    visualDescription:
      "A commanding king on a lion-and-salamander throne holds a sprouting wand, with a salamander at his feet.",
  },
];
