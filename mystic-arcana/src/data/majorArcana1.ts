import { TarotCard } from "@/types/tarot";

export const majorArcana1: TarotCard[] = [
  {
    id: 0,
    name: "The Fool",
    nameKo: "광대",
    arcana: "major",
    number: 0,
    element: "Air",
    elementKo: "공기",
    zodiac: "Uranus",
    zodiacKo: "천왕성",
    planet: "Uranus",
    planetKo: "천왕성",
    keywords: {
      upright: [
        "new beginnings",
        "innocence",
        "spontaneity",
        "free spirit",
        "adventure",
      ],
      uprightKo: ["새로운 시작", "순수함", "자발성", "자유로운 영혼", "모험"],
      reversed: [
        "recklessness",
        "fear of change",
        "naivety",
        "foolishness",
        "stagnation",
      ],
      reversedKo: [
        "무모함",
        "변화에 대한 두려움",
        "순진함",
        "어리석음",
        "정체",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Fool represents the beginning of a new journey filled with wonder, optimism, and unlimited potential. It encourages you to take a leap of faith, trusting that the universe will support you. Embrace the unknown with an open heart and childlike curiosity.",
        generalKo:
          "광대는 경이로움, 낙관, 그리고 무한한 잠재력으로 가득 찬 새로운 여정의 시작을 나타냅니다. 우주가 당신을 지지해 줄 것이라 믿으며 과감한 도약을 하라고 격려합니다. 열린 마음과 아이 같은 호기심으로 미지의 세계를 받아들이세요.",
        love: "In love, The Fool signals a fresh, exciting romantic beginning or a period of renewed passion in an existing relationship. You may meet someone unexpectedly or feel called to approach love with a carefree, open attitude. Let go of past baggage and embrace vulnerability.",
        loveKo:
          "사랑에서 광대는 신선하고 흥미진진한 로맨스의 시작이나 기존 관계에서의 열정 재충전 시기를 알립니다. 예상치 못하게 누군가를 만나거나 걱정 없이 열린 태도로 사랑에 다가가라는 부름을 느낄 수 있습니다. 과거의 짐을 내려놓고 취약함을 받아들이세요.",
        career:
          "A new career opportunity or a completely different professional path may be presenting itself. The Fool encourages you to take risks and explore unconventional options. Trust your instincts even if the path ahead is unclear.",
        careerKo:
          "새로운 직업 기회나 완전히 다른 전문적인 길이 나타날 수 있습니다. 광대는 위험을 감수하고 비전통적인 옵션을 탐색하라고 격려합니다. 앞길이 불분명하더라도 직감을 믿으세요.",
        finance:
          "Financially, The Fool suggests a period of new ventures or investments. While optimism is warranted, ensure you balance enthusiasm with basic due diligence. An unexpected opportunity for financial growth may appear.",
        financeKo:
          "재정적으로 광대는 새로운 벤처나 투자의 시기를 암시합니다. 낙관주의가 타당하지만 기본적인 조사와 열정의 균형을 맞추세요. 재정 성장을 위한 예상치 못한 기회가 나타날 수 있습니다.",
        health:
          "The Fool brings a burst of vitality and renewed energy. It is an excellent time to start a new fitness routine or adopt healthier habits. Your body and mind are ready for a fresh approach to wellness.",
        healthKo:
          "광대는 활력의 폭발과 새로운 에너지를 가져옵니다. 새로운 운동 루틴을 시작하거나 더 건강한 습관을 채택하기에 훌륭한 시기입니다. 당신의 몸과 마음은 웰니스에 대한 새로운 접근 방식을 받아들일 준비가 되어 있습니다.",
        spirituality:
          "The Fool invites you to explore spirituality with fresh eyes, free from dogma or preconceived notions. This is a time for spiritual exploration and discovering new practices that resonate with your soul. Trust the journey even without a clear destination.",
        spiritualityKo:
          "광대는 교리나 선입견 없이 새로운 눈으로 영성을 탐험하도록 초대합니다. 이것은 영적 탐구와 영혼에 공명하는 새로운 수련을 발견하는 시기입니다. 명확한 목적지 없이도 여정을 신뢰하세요.",
      },
      reversed: {
        general:
          "The reversed Fool warns of recklessness, poor planning, or a fear of taking necessary risks. You may be acting impulsively without considering consequences, or conversely, holding back from a necessary leap due to excessive caution. Find the balance between courage and prudence.",
        generalKo:
          "역방향 광대는 무모함, 부족한 계획, 또는 필요한 위험을 감수하는 것에 대한 두려움을 경고합니다. 결과를 고려하지 않고 충동적으로 행동하거나, 반대로 지나친 조심으로 필요한 도약을 미루고 있을 수 있습니다. 용기와 신중함 사이의 균형을 찾으세요.",
        love: "In love reversed, The Fool may indicate commitment issues or fear of getting hurt. You might be rushing into a relationship without thinking, or avoiding love altogether. Past disappointments may be clouding your judgment about new romantic possibilities.",
        loveKo:
          "역방향 사랑에서 광대는 헌신 문제나 상처받는 것에 대한 두려움을 나타낼 수 있습니다. 생각 없이 관계에 뛰어들거나 사랑을 완전히 피하고 있을 수 있습니다. 과거의 실망이 새로운 로맨틱한 가능성에 대한 판단을 흐리게 할 수 있습니다.",
        career:
          "Reversed, The Fool warns against quitting your job impulsively or making career changes without proper preparation. You may feel stuck but lack a concrete plan to move forward. Take time to strategize before making dramatic professional changes.",
        careerKo:
          "역방향으로 광대는 충동적으로 직장을 그만두거나 적절한 준비 없이 직업을 바꾸는 것을 경고합니다. 막혀 있다고 느끼지만 전진할 구체적인 계획이 부족할 수 있습니다. 극적인 직업 변화를 하기 전에 전략을 세우는 시간을 가지세요.",
        finance:
          "Financial recklessness is highlighted by the reversed Fool. Avoid risky investments, gambling, or overspending on a whim. Ground your financial decisions in reality and seek advice before committing to major expenditures.",
        financeKo:
          "역방향 광대는 재정적 무모함을 강조합니다. 위험한 투자, 도박, 또는 충동적인 과소비를 피하세요. 재정적 결정을 현실에 기반하고 주요 지출을 결정하기 전에 조언을 구하세요.",
        health:
          "The reversed Fool warns against ignoring health warning signs or taking unnecessary physical risks. You may be neglecting basic self-care or engaging in reckless behavior that threatens your well-being. Slow down and listen to your body.",
        healthKo:
          "역방향 광대는 건강 경고 신호를 무시하거나 불필요한 신체적 위험을 감수하는 것을 경고합니다. 기본적인 자기 관리를 소홀히 하거나 안녕을 위협하는 무모한 행동을 하고 있을 수 있습니다. 속도를 늦추고 몸의 말을 들으세요.",
        spirituality:
          "Spiritually reversed, The Fool suggests spiritual bypassing or an unwillingness to do the deeper inner work. You may be chasing spiritual experiences without integration, or feeling lost and disconnected from your path. Ground yourself before seeking higher truths.",
        spiritualityKo:
          "영적으로 역방향인 광대는 영적 우회나 더 깊은 내면 작업을 하려는 의지 부족을 암시합니다. 통합 없이 영적 경험을 쫓거나 길에서 길을 잃고 단절감을 느낄 수 있습니다. 더 높은 진리를 추구하기 전에 자신을 안정시키세요.",
      },
    },
    symbolism:
      "The Fool stands at the edge of a cliff, gazing upward at the sky with a white rose in one hand and a small bundle on a stick in the other. A small white dog leaps at his heels, symbolizing loyalty and protection. The bright sun behind him represents the divine energy guiding his journey into the unknown.",
    symbolismKo:
      "광대는 절벽 가장자리에 서서 한 손에 흰 장미를, 다른 손에 막대에 달린 작은 보따리를 들고 하늘을 바라봅니다. 작은 흰 개가 그의 발뒤꿈치에서 뛰어오르며 충성과 보호를 상징합니다. 그 뒤의 밝은 태양은 미지의 세계로의 여정을 인도하는 신성한 에너지를 나타냅니다.",
    advice:
      "Take the leap of faith. Trust in the journey and embrace new beginnings without fear. The universe supports those who dare to follow their heart.",
    adviceKo:
      "믿음의 도약을 하세요. 여정을 신뢰하고 두려움 없이 새로운 시작을 받아들이세요. 우주는 마음을 따르는 용기를 가진 자를 지지합니다.",
    yesOrNo: "yes",
    numerology:
      "Zero represents infinite potential, the void before creation, and the circle of life. It is both nothing and everything, the starting point of all possibilities.",
    numerologyKo:
      "0은 무한한 잠재력, 창조 이전의 공허, 그리고 생명의 순환을 나타냅니다. 그것은 아무것도 아닌 동시에 모든 것이며, 모든 가능성의 출발점입니다.",
    affirmation:
      "I trust in the journey of life and embrace each new beginning with joy and courage.",
    affirmationKo:
      "나는 삶의 여정을 신뢰하며 기쁨과 용기로 각각의 새로운 시작을 받아들입니다.",
    cardBackEmoji: "🃏",
    visualDescription:
      "A young person in colorful clothing stands at the edge of a cliff under a bright sun, holding a white rose and a small bundle, with a white dog at their feet and mountains in the background.",
  },
  {
    id: 1,
    name: "The Magician",
    nameKo: "마법사",
    arcana: "major",
    number: 1,
    element: "Fire",
    elementKo: "불",
    zodiac: "Mercury",
    zodiacKo: "수성",
    planet: "Mercury",
    planetKo: "수성",
    keywords: {
      upright: [
        "manifestation",
        "willpower",
        "skill",
        "resourcefulness",
        "concentration",
      ],
      uprightKo: ["현현", "의지력", "기술", "재치", "집중"],
      reversed: [
        "manipulation",
        "trickery",
        "wasted talent",
        "illusion",
        "deception",
      ],
      reversedKo: ["조종", "속임수", "낭비된 재능", "환상", "기만"],
    },
    meaning: {
      upright: {
        general:
          "The Magician signifies that you have all the tools, skills, and resources needed to manifest your desires. Channel your willpower and focus to bring your goals into reality. This is a time of great creative power and inspired action.",
        generalKo:
          "마법사는 당신의 욕구를 실현하는 데 필요한 모든 도구, 기술, 자원을 가지고 있음을 의미합니다. 의지력과 집중력을 발휘하여 목표를 현실로 만드세요. 이것은 위대한 창조적 힘과 영감 받은 행동의 시기입니다.",
        love: "The Magician in love suggests you have the power to attract the relationship you desire. Your charisma and confidence are at their peak. If in a relationship, you can rekindle the spark through clear communication and focused intention.",
        loveKo:
          "사랑에서 마법사는 원하는 관계를 끌어당길 힘이 있음을 암시합니다. 카리스마와 자신감이 최고조에 달했습니다. 관계 중이라면 명확한 소통과 집중된 의도를 통해 불꽃을 다시 살릴 수 있습니다.",
        career:
          "Professionally, The Magician indicates a time of great skill and competence. New opportunities are within your grasp, and you have everything you need to succeed. Take initiative and show your talents—others will notice.",
        careerKo:
          "직업적으로 마법사는 훌륭한 기술과 역량의 시기를 나타냅니다. 새로운 기회가 손에 닿을 거리에 있으며 성공에 필요한 모든 것을 갖추고 있습니다. 주도권을 잡고 재능을 보여주세요—다른 사람들이 알아볼 것입니다.",
        finance:
          "The Magician brings positive financial energy, indicating new income opportunities or successful investments. Your ability to turn ideas into profit is heightened. Apply focus and strategy to maximize your financial potential.",
        financeKo:
          "마법사는 긍정적인 재정 에너지를 가져와 새로운 수입 기회나 성공적인 투자를 나타냅니다. 아이디어를 수익으로 전환하는 능력이 향상됩니다. 재정적 잠재력을 극대화하기 위해 집중력과 전략을 적용하세요.",
        health:
          "The Magician suggests you have the power to take charge of your health. A new treatment or wellness practice could yield excellent results. Your mind-body connection is strong—use visualization and positive intention to aid healing.",
        healthKo:
          "마법사는 건강을 주도할 힘이 있음을 암시합니다. 새로운 치료법이나 웰니스 수련이 훌륭한 결과를 낼 수 있습니다. 심신 연결이 강하므로 시각화와 긍정적 의도를 활용하여 치유를 돕으세요.",
        spirituality:
          "The Magician represents spiritual mastery and the ability to bridge the divine and material worlds. You are a channel for higher wisdom. Practice focused meditation and conscious creation to deepen your spiritual connection.",
        spiritualityKo:
          "마법사는 영적 숙달과 신성한 세계와 물질 세계를 잇는 능력을 나타냅니다. 당신은 더 높은 지혜의 통로입니다. 집중 명상과 의식적 창조를 수련하여 영적 연결을 심화하세요.",
      },
      reversed: {
        general:
          "The reversed Magician warns of manipulation, deceit, or untapped potential going to waste. Someone may be using their skills for selfish purposes, or you may be struggling to focus your energy effectively. Beware of tricksters and examine your own motivations.",
        generalKo:
          "역방향 마법사는 조종, 기만, 또는 낭비되는 미개발 잠재력을 경고합니다. 누군가가 이기적인 목적으로 기술을 사용하고 있거나 에너지를 효과적으로 집중하는 데 어려움을 겪고 있을 수 있습니다. 사기꾼을 경계하고 자신의 동기를 점검하세요.",
        love: "Reversed in love, The Magician may indicate dishonesty or manipulation in a relationship. Someone may not be who they appear to be. Guard against partners who use charm as a weapon and ensure open, honest communication.",
        loveKo:
          "역방향 사랑에서 마법사는 관계에서의 부정직이나 조종을 나타낼 수 있습니다. 누군가가 보이는 것과 다를 수 있습니다. 매력을 무기로 사용하는 파트너를 경계하고 열린, 정직한 소통을 보장하세요.",
        career:
          "The reversed Magician suggests you may not be using your professional talents to their fullest, or someone at work is being deceptive. Watch for colleagues who take credit for your work. Refocus your energy on meaningful projects.",
        careerKo:
          "역방향 마법사는 직업적 재능을 최대한 활용하지 못하고 있거나 직장에서 누군가가 기만적이라는 것을 암시합니다. 당신의 공을 가로채는 동료를 주의하세요. 의미 있는 프로젝트에 에너지를 다시 집중하세요.",
        finance:
          "Financial deception or poor use of resources is indicated. Be wary of scams, get-rich-quick schemes, or dishonest financial advisors. Review your financial plans carefully and avoid impulsive decisions.",
        financeKo:
          "재정적 기만이나 자원의 잘못된 사용이 나타납니다. 사기, 빠른 부자 계획, 또는 부정직한 재정 고문을 경계하세요. 재정 계획을 신중하게 검토하고 충동적인 결정을 피하세요.",
        health:
          "The reversed Magician warns against ignoring medical advice or falling for unproven health treatments. You may lack the motivation to follow through on health goals. Seek qualified guidance and avoid quick-fix solutions.",
        healthKo:
          "역방향 마법사는 의학적 조언을 무시하거나 검증되지 않은 건강 치료에 빠지는 것을 경고합니다. 건강 목표를 실행할 동기가 부족할 수 있습니다. 자격 있는 안내를 구하고 빠른 해결책을 피하세요.",
        spirituality:
          "Reversed, The Magician may indicate spiritual ego or using spiritual knowledge to manipulate others. You might be disconnected from your authentic spiritual practice. Return to the basics and practice humility on your spiritual path.",
        spiritualityKo:
          "역방향으로 마법사는 영적 자아 또는 다른 사람을 조종하기 위해 영적 지식을 사용하는 것을 나타낼 수 있습니다. 진정한 영적 수련에서 단절되어 있을 수 있습니다. 기본으로 돌아가 영적 길에서 겸손을 실천하세요.",
      },
    },
    symbolism:
      "The Magician stands before a table bearing the four suit symbols—a cup, pentacle, sword, and wand—representing mastery over all elements. One hand points to the sky and the other to the earth, channeling divine energy into material creation. An infinity symbol hovers above his head, and a garden of roses and lilies blooms at his feet.",
    symbolismKo:
      "마법사는 네 가지 슈트 상징물—잔, 오각별, 검, 지팡이—이 놓인 테이블 앞에 서서 모든 원소에 대한 숙달을 나타냅니다. 한 손은 하늘을, 다른 손은 땅을 가리키며 신성한 에너지를 물질적 창조로 전달합니다. 무한대 기호가 머리 위에 떠 있고 장미와 백합의 정원이 발밑에서 피어납니다.",
    advice:
      "You already have everything you need. Focus your will, trust your abilities, and take decisive action to manifest your vision into reality.",
    adviceKo:
      "이미 필요한 모든 것을 가지고 있습니다. 의지를 집중하고 능력을 신뢰하며 비전을 현실로 만들기 위해 결단력 있는 행동을 취하세요.",
    yesOrNo: "yes",
    numerology:
      "One represents new beginnings, leadership, individuality, and the primal creative force. It is the number of initiative and self-determination.",
    numerologyKo:
      "1은 새로운 시작, 리더십, 개성, 그리고 원초적 창조력을 나타냅니다. 주도성과 자기 결정의 숫자입니다.",
    affirmation:
      "I have all the power and resources I need to create the life I desire.",
    affirmationKo:
      "나는 원하는 삶을 창조하는 데 필요한 모든 힘과 자원을 가지고 있습니다.",
    cardBackEmoji: "🎩",
    visualDescription:
      "A robed figure stands before a table with a cup, pentacle, sword, and wand, one hand raised to the sky and one pointing down, with an infinity symbol above his head and a lush garden below.",
  },
  {
    id: 2,
    name: "The High Priestess",
    nameKo: "여사제",
    arcana: "major",
    number: 2,
    element: "Water",
    elementKo: "물",
    zodiac: "Moon",
    zodiacKo: "달",
    planet: "Moon",
    planetKo: "달",
    keywords: {
      upright: [
        "intuition",
        "mystery",
        "subconscious",
        "inner wisdom",
        "sacred knowledge",
      ],
      uprightKo: ["직관", "신비", "잠재의식", "내면의 지혜", "신성한 지식"],
      reversed: [
        "secrets",
        "repressed intuition",
        "disconnection",
        "withdrawal",
        "silence",
      ],
      reversedKo: ["비밀", "억압된 직관", "단절", "철수", "침묵"],
    },
    meaning: {
      upright: {
        general:
          "The High Priestess calls you to trust your intuition and look beyond the surface of things. Hidden knowledge is accessible to you now through meditation, dreams, and inner reflection. Be still, listen to your inner voice, and let wisdom reveal itself in its own time.",
        generalKo:
          "여사제는 직관을 신뢰하고 사물의 표면 너머를 바라보라고 부릅니다. 명상, 꿈, 내면의 성찰을 통해 숨겨진 지식에 접근할 수 있습니다. 고요히 머물며 내면의 목소리를 듣고 지혜가 스스로 드러나도록 하세요.",
        love: "In love, The High Priestess suggests trusting your gut feelings about a person or relationship. There may be more beneath the surface than meets the eye. Allow emotional connections to deepen naturally without forcing or rushing things.",
        loveKo:
          "사랑에서 여사제는 사람이나 관계에 대한 직감을 신뢰하라고 암시합니다. 보이는 것 이상의 것이 표면 아래에 있을 수 있습니다. 강요하거나 서두르지 않고 감정적 연결이 자연스럽게 깊어지도록 하세요.",
        career:
          "The High Priestess in career readings advises patience and observation before making moves. Trust your instincts about workplace dynamics. Hidden information may soon come to light that will influence your professional decisions.",
        careerKo:
          "직업 리딩에서 여사제는 움직이기 전에 인내와 관찰을 조언합니다. 직장 역학에 대한 본능을 신뢰하세요. 직업적 결정에 영향을 미칠 숨겨진 정보가 곧 밝혀질 수 있습니다.",
        finance:
          "Financially, The High Priestess advises caution and patience. Not all financial information is available yet, so avoid making major decisions until the full picture is clear. Trust your intuition if something feels off about a deal.",
        financeKo:
          "재정적으로 여사제는 주의와 인내를 조언합니다. 모든 재정 정보가 아직 나오지 않았으므로 전체 그림이 명확해질 때까지 주요 결정을 피하세요. 거래에 대해 뭔가 잘못된 느낌이 들면 직관을 신뢰하세요.",
        health:
          "The High Priestess encourages you to listen to your body's subtle signals. Pay attention to symptoms that conventional approaches may overlook. Explore holistic or intuitive healing modalities, and consider how emotional well-being affects your physical health.",
        healthKo:
          "여사제는 몸의 미묘한 신호에 귀 기울이라고 격려합니다. 기존 접근법이 간과할 수 있는 증상에 주의를 기울이세요. 전인적이거나 직관적인 치유 방식을 탐색하고 정서적 안녕이 신체 건강에 어떻게 영향을 미치는지 고려하세요.",
        spirituality:
          "The High Priestess is deeply connected to spiritual wisdom and the divine feminine. This is a powerful time for meditation, dreamwork, and developing psychic abilities. Trust the messages that come from your subconscious mind.",
        spiritualityKo:
          "여사제는 영적 지혜와 신성한 여성성에 깊이 연결되어 있습니다. 명상, 꿈 작업, 그리고 초감각적 능력을 개발하기에 강력한 시기입니다. 잠재의식에서 오는 메시지를 신뢰하세요.",
      },
      reversed: {
        general:
          "The reversed High Priestess indicates you are ignoring your intuition or that secrets are being kept from you. You may feel disconnected from your inner wisdom or overwhelmed by external noise. Take time for solitude and quiet reflection to reconnect with your deeper knowing.",
        generalKo:
          "역방향 여사제는 직관을 무시하거나 비밀이 숨겨져 있음을 나타냅니다. 내면의 지혜에서 단절되거나 외부 소음에 압도당하고 있을 수 있습니다. 더 깊은 앎과 다시 연결하기 위해 고독과 조용한 성찰의 시간을 가지세요.",
        love: "Reversed in love, The High Priestess warns of hidden agendas, secrets, or lack of emotional depth. A partner may be withholding important information. Trust issues may surface, requiring honest conversation and vulnerability.",
        loveKo:
          "역방향 사랑에서 여사제는 숨겨진 의도, 비밀, 또는 감정적 깊이의 부족을 경고합니다. 파트너가 중요한 정보를 숨기고 있을 수 있습니다. 신뢰 문제가 표면화되어 정직한 대화와 취약함이 요구될 수 있습니다.",
        career:
          "Information is being withheld at work, or you're not trusting your professional instincts. Office politics or hidden agendas may be at play. Gather more facts before making career decisions and be cautious about who you confide in.",
        careerKo:
          "직장에서 정보가 숨겨지고 있거나 직업적 본능을 신뢰하지 않고 있습니다. 사내 정치나 숨겨진 의제가 작용하고 있을 수 있습니다. 직업적 결정을 내리기 전에 더 많은 사실을 수집하고 누구에게 털어놓을지 주의하세요.",
        finance:
          "The reversed High Priestess warns of hidden financial information or deceptive financial dealings. Someone may not be transparent about money matters. Review all contracts and fine print carefully before committing.",
        financeKo:
          "역방향 여사제는 숨겨진 재정 정보나 기만적인 재정 거래를 경고합니다. 누군가가 금전 문제에 대해 투명하지 않을 수 있습니다. 약속하기 전에 모든 계약과 세부 사항을 신중하게 검토하세요.",
        health:
          "You may be ignoring subtle health symptoms or resisting intuitive approaches to healing. The reversed High Priestess urges you to seek second opinions and not dismiss what your body is telling you. Emotional repression could be manifesting as physical symptoms.",
        healthKo:
          "미묘한 건강 증상을 무시하거나 직관적인 치유 접근을 거부하고 있을 수 있습니다. 역방향 여사제는 세컨드 오피니언을 구하고 몸이 말하는 것을 무시하지 말라고 촉구합니다. 감정 억압이 신체적 증상으로 나타날 수 있습니다.",
        spirituality:
          "Reversed, The High Priestess suggests spiritual disconnection or blocked intuition. You may be overthinking your spiritual journey instead of feeling it. Simplify your practice, spend time in nature, and allow silence to restore your connection to the divine.",
        spiritualityKo:
          "역방향으로 여사제는 영적 단절이나 차단된 직관을 암시합니다. 영적 여정을 느끼는 대신 과도하게 생각하고 있을 수 있습니다. 수련을 단순화하고 자연 속에서 시간을 보내며 침묵이 신성과의 연결을 회복하도록 하세요.",
      },
    },
    symbolism:
      "The High Priestess sits between two pillars—one black (Boaz) and one white (Jachin)—representing duality and the threshold between worlds. She holds a Torah scroll partially hidden by her robes, symbolizing esoteric knowledge. A crescent moon rests at her feet, and a veil decorated with pomegranates hangs behind her.",
    symbolismKo:
      "여사제는 두 기둥—하나는 검은색(보아스), 하나는 흰색(야킨)—사이에 앉아 이원성과 세계 사이의 문턱을 나타냅니다. 그녀는 예복으로 부분적으로 숨겨진 토라 두루마리를 들고 비밀스러운 지식을 상징합니다. 초승달이 발밑에 놓여 있고 석류로 장식된 베일이 뒤에 걸려 있습니다.",
    advice:
      "Be still and listen to the whispers of your soul. The answers you seek lie within, not in the external world. Trust your intuition.",
    adviceKo:
      "고요히 머물며 영혼의 속삭임에 귀를 기울이세요. 찾고 있는 답은 외부 세계가 아닌 내면에 있습니다. 직관을 신뢰하세요.",
    yesOrNo: "maybe",
    numerology:
      "Two represents duality, balance, partnership, and the subconscious mind. It speaks to the need for harmony between opposing forces and patience in waiting for truth to emerge.",
    numerologyKo:
      "2는 이원성, 균형, 파트너십, 그리고 잠재의식을 나타냅니다. 상반된 힘 사이의 조화와 진리가 드러나기를 기다리는 인내의 필요성을 말합니다.",
    affirmation:
      "I trust my inner wisdom and allow my intuition to guide me through the mysteries of life.",
    affirmationKo:
      "나는 내면의 지혜를 신뢰하며 직관이 삶의 신비를 통해 나를 인도하도록 합니다.",
    cardBackEmoji: "🌙",
    visualDescription:
      "A serene woman in blue robes sits between a black and white pillar, holding a partially concealed scroll, with a crescent moon at her feet and a pomegranate-patterned veil behind her.",
  },
  {
    id: 3,
    name: "The Empress",
    nameKo: "여제",
    arcana: "major",
    number: 3,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Venus",
    zodiacKo: "금성",
    planet: "Venus",
    planetKo: "금성",
    keywords: {
      upright: ["abundance", "fertility", "nurturing", "nature", "sensuality"],
      uprightKo: ["풍요", "다산", "양육", "자연", "관능"],
      reversed: [
        "dependence",
        "creative block",
        "neglect",
        "smothering",
        "insecurity",
      ],
      reversedKo: ["의존", "창작 장벽", "방치", "과잉보호", "불안감"],
    },
    meaning: {
      upright: {
        general:
          "The Empress heralds a period of abundance, creativity, and nurturing energy. She encourages you to connect with nature, embrace your senses, and allow the beauty of life to flow through you. This is a time of growth, comfort, and maternal care.",
        generalKo:
          "여제는 풍요, 창의성, 양육 에너지의 시기를 알립니다. 자연과 연결하고 감각을 받아들이며 삶의 아름다움이 당신을 통해 흐르도록 격려합니다. 이것은 성장, 안락함, 모성 돌봄의 시기입니다.",
        love: "The Empress in love brings warmth, sensuality, and deep emotional connection. A relationship is blossoming with tenderness and mutual care. If single, you radiate attractiveness and may draw a loving partner who appreciates your nurturing nature.",
        loveKo:
          "사랑에서 여제는 따뜻함, 관능, 깊은 감정적 연결을 가져옵니다. 관계가 부드러움과 상호 돌봄으로 꽃피고 있습니다. 싱글이라면 매력을 발산하며 양육적 성격을 감상하는 사랑스러운 파트너를 끌어들일 수 있습니다.",
        career:
          "Creativity flourishes in your career now. Projects grow and bear fruit under The Empress's influence. Collaborative work environments and creative fields are especially favored. Nurture your projects like a garden and watch them thrive.",
        careerKo:
          "지금 직업에서 창의성이 꽃핍니다. 여제의 영향 아래 프로젝트가 성장하고 결실을 맺습니다. 협력적 작업 환경과 창조적 분야가 특히 유리합니다. 프로젝트를 정원처럼 돌보며 번성하는 것을 지켜보세요.",
        finance:
          "Financial abundance and material comfort are indicated. Money flows more easily, and investments may yield fruitful returns. The Empress encourages enjoying your wealth while also being generous with others.",
        financeKo:
          "재정적 풍요와 물질적 안락이 나타납니다. 돈이 더 쉽게 흐르고 투자가 좋은 수익을 낼 수 있습니다. 여제는 재산을 즐기면서 다른 사람에게도 관대하라고 격려합니다.",
        health:
          "The Empress is an excellent omen for health, especially reproductive health and fertility. Your body is in a natural state of vitality. Focus on nourishing yourself with wholesome food, fresh air, and gentle movement.",
        healthKo:
          "여제는 건강, 특히 생식 건강과 다산에 훌륭한 징조입니다. 몸이 자연스러운 활력 상태에 있습니다. 건강한 음식, 신선한 공기, 부드러운 운동으로 자신을 돌보는 데 집중하세요.",
        spirituality:
          "The Empress connects you to the sacred feminine and the spiritual wisdom found in nature. Ground yourself through earth-based practices and honor the cycles of creation. Your spiritual growth blossoms through embodied, sensory experience.",
        spiritualityKo:
          "여제는 신성한 여성성과 자연에서 발견되는 영적 지혜에 연결합니다. 대지 기반 수련을 통해 접지하고 창조의 순환을 경외하세요. 체화된 감각적 경험을 통해 영적 성장이 꽃핍니다.",
      },
      reversed: {
        general:
          "The reversed Empress indicates creative blocks, neglect of self-care, or smothering behavior. You may be giving too much to others at the expense of your own needs, or conversely, experiencing a disconnection from your nurturing side. Restore balance by tending to your own garden first.",
        generalKo:
          "역방향 여제는 창작 장벽, 자기 관리 방치, 또는 과잉보호 행동을 나타냅니다. 자신의 필요를 희생하면서 다른 사람에게 너무 많이 주거나, 반대로 양육적 측면에서의 단절을 경험하고 있을 수 있습니다. 먼저 자신의 정원을 돌보며 균형을 회복하세요.",
        love: "Reversed in love, The Empress warns of codependency, jealousy, or emotional suffocation. Boundaries may be blurred, and one partner may be overly controlling or neglectful. Restore healthy independence within the relationship.",
        loveKo:
          "역방향 사랑에서 여제는 공동의존, 질투, 또는 감정적 질식을 경고합니다. 경계가 흐려지고 한 파트너가 지나치게 통제적이거나 방치적일 수 있습니다. 관계 내에서 건강한 독립성을 회복하세요.",
        career:
          "Creative stagnation or dissatisfaction with your work environment is indicated. You may feel undervalued or creatively stifled. Consider whether your current path truly nurtures your talents, and seek environments that support your growth.",
        careerKo:
          "창의적 정체나 작업 환경에 대한 불만이 나타납니다. 과소평가되거나 창의적으로 억눌린 느낌을 받을 수 있습니다. 현재의 길이 진정으로 재능을 돌보고 있는지 고려하고 성장을 지원하는 환경을 찾으세요.",
        finance:
          "The reversed Empress may indicate overspending on luxuries, financial insecurity, or unhealthy attachment to material possessions. Practice mindful spending and build a more secure financial foundation before indulging.",
        financeKo:
          "역방향 여제는 사치품에 대한 과소비, 재정적 불안감, 또는 물질적 소유에 대한 건강하지 못한 집착을 나타낼 수 있습니다. 탐닉하기 전에 신중한 소비를 실천하고 더 안전한 재정 기반을 구축하세요.",
        health:
          "The reversed Empress suggests neglecting physical health or overindulging in unhealthy pleasures. You may be ignoring your body's needs or experiencing fertility or hormonal challenges. Prioritize self-care and seek professional guidance when needed.",
        healthKo:
          "역방향 여제는 신체 건강 방치나 건강하지 못한 쾌락에 대한 과도한 탐닉을 암시합니다. 몸의 필요를 무시하거나 다산 또는 호르몬 문제를 겪고 있을 수 있습니다. 자기 관리를 우선시하고 필요할 때 전문적 안내를 구하세요.",
        spirituality:
          "Reversed, The Empress indicates disconnection from nature and the divine feminine. You may be overly focused on the material world at the expense of spiritual nourishment. Reconnect with the earth, tend to your inner garden, and practice gratitude.",
        spiritualityKo:
          "역방향으로 여제는 자연과 신성한 여성성에서의 단절을 나타냅니다. 영적 자양분을 희생하면서 물질 세계에 지나치게 집중하고 있을 수 있습니다. 대지와 다시 연결하고 내면의 정원을 돌보며 감사를 실천하세요.",
      },
    },
    symbolism:
      "The Empress reclines on a luxurious throne in a lush, verdant landscape, wearing a crown of twelve stars and a gown decorated with pomegranates. A heart-shaped shield bearing the symbol of Venus rests beside her. A field of golden wheat ripens in the foreground, and a flowing stream winds through the forest behind her.",
    symbolismKo:
      "여제는 무성하고 푸른 풍경 속 호화로운 왕좌에 기대앉아 있으며 열두 개의 별 왕관을 쓰고 석류로 장식된 가운을 입고 있습니다. 비너스 상징이 새겨진 하트 모양 방패가 옆에 놓여 있습니다. 황금빛 밀밭이 전경에서 익어가고 흐르는 시냇물이 뒤의 숲을 통해 굽이칩니다.",
    advice:
      "Nurture yourself and others with love, patience, and generosity. Connect with nature, embrace your creativity, and allow abundance to flow into your life.",
    adviceKo:
      "사랑, 인내, 관대함으로 자신과 다른 사람을 돌보세요. 자연과 연결하고 창의성을 받아들이며 풍요가 삶에 흐르도록 하세요.",
    yesOrNo: "yes",
    numerology:
      "Three represents creativity, growth, expression, and the synthesis of opposing forces. It is the number of creation born from the union of two energies.",
    numerologyKo:
      "3은 창의성, 성장, 표현, 상반된 힘의 합성을 나타냅니다. 두 에너지의 합일에서 태어난 창조의 숫자입니다.",
    affirmation:
      "I am abundant, creative, and deeply connected to the nurturing energy of the earth.",
    affirmationKo:
      "나는 풍요롭고 창의적이며 대지의 양육 에너지에 깊이 연결되어 있습니다.",
    cardBackEmoji: "🌿",
    visualDescription:
      "A regal woman in a star-crowned gown reclines on a cushioned throne amidst a lush garden, with golden wheat, a flowing stream, and a Venus-marked shield beside her.",
  },
  {
    id: 4,
    name: "The Emperor",
    nameKo: "황제",
    arcana: "major",
    number: 4,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries",
    zodiacKo: "양자리",
    keywords: {
      upright: [
        "authority",
        "structure",
        "stability",
        "leadership",
        "discipline",
      ],
      uprightKo: ["권위", "구조", "안정", "리더십", "규율"],
      reversed: [
        "tyranny",
        "rigidity",
        "domination",
        "inflexibility",
        "lack of control",
      ],
      reversedKo: ["폭정", "경직", "지배", "유연성 부족", "통제력 상실"],
    },
    meaning: {
      upright: {
        general:
          "The Emperor represents authority, structure, and the power of rational thought. He calls you to establish order, set clear boundaries, and take command of your situation. Through discipline and strategic planning, you can build lasting foundations for success.",
        generalKo:
          "황제는 권위, 구조, 이성적 사고의 힘을 나타냅니다. 질서를 확립하고 명확한 경계를 설정하며 상황을 지휘하라고 부릅니다. 규율과 전략적 계획을 통해 성공을 위한 지속적인 기반을 구축할 수 있습니다.",
        love: "In love, The Emperor suggests a stable, committed relationship built on mutual respect and clear expectations. A partner who provides security and structure may enter your life. Existing relationships benefit from honest discussion about roles and boundaries.",
        loveKo:
          "사랑에서 황제는 상호 존중과 명확한 기대 위에 세워진 안정적이고 헌신적인 관계를 암시합니다. 안정감과 구조를 제공하는 파트너가 삶에 들어올 수 있습니다. 기존 관계는 역할과 경계에 대한 솔직한 논의로 이익을 얻습니다.",
        career:
          "The Emperor brings professional authority and recognition. You are or will be in a position of leadership. Structure your work systematically, demonstrate competence, and others will follow your lead. Promotions and positions of power are favored.",
        careerKo:
          "황제는 직업적 권위와 인정을 가져옵니다. 리더십의 위치에 있거나 곧 그렇게 될 것입니다. 체계적으로 업무를 구성하고 역량을 보여주면 다른 사람들이 따를 것입니다. 승진과 권력의 위치가 유리합니다.",
        finance:
          "Financial stability and disciplined money management are highlighted. The Emperor advises creating budgets, building savings, and approaching finances with a long-term strategic mindset. Material security comes through careful planning.",
        financeKo:
          "재정적 안정과 규율 있는 자금 관리가 강조됩니다. 황제는 예산을 세우고 저축을 쌓으며 장기적 전략적 사고방식으로 재정에 접근하라고 조언합니다. 물질적 안정은 신중한 계획을 통해 옵니다.",
        health:
          "The Emperor encourages a disciplined approach to health—structured exercise routines, regular check-ups, and consistent healthy habits. Your physical resilience is strong when supported by routine and self-discipline.",
        healthKo:
          "황제는 건강에 대한 규율 있는 접근—체계적인 운동 루틴, 정기 검진, 일관된 건강 습관—을 격려합니다. 루틴과 자기 규율로 지지될 때 신체적 회복력이 강합니다.",
        spirituality:
          "The Emperor invites you to bring structure to your spiritual practice. Establish regular rituals, study spiritual traditions systematically, and apply wisdom practically in daily life. Spiritual growth comes through disciplined commitment.",
        spiritualityKo:
          "황제는 영적 수련에 구조를 가져오라고 초대합니다. 규칙적인 의식을 세우고 영적 전통을 체계적으로 공부하며 일상생활에서 실질적으로 지혜를 적용하세요. 영적 성장은 규율 있는 헌신을 통해 옵니다.",
      },
      reversed: {
        general:
          "The reversed Emperor warns of authoritarianism, excessive control, or a lack of discipline. You may be either too rigid in your approach or losing control of a situation entirely. Examine whether authority is being used wisely or abusively in your life.",
        generalKo:
          "역방향 황제는 권위주의, 과도한 통제, 또는 규율 부족을 경고합니다. 접근 방식이 너무 경직되어 있거나 상황의 통제력을 완전히 잃고 있을 수 있습니다. 권위가 현명하게 사용되고 있는지 아니면 남용되고 있는지 점검하세요.",
        love: "Reversed in love, The Emperor may indicate a controlling or domineering partner, power struggles, or a relationship lacking warmth. Rigidity and stubbornness are creating distance. Both partners need to practice flexibility and emotional openness.",
        loveKo:
          "역방향 사랑에서 황제는 통제적이거나 지배적인 파트너, 권력 투쟁, 또는 따뜻함이 부족한 관계를 나타낼 수 있습니다. 경직과 고집이 거리를 만들고 있습니다. 두 파트너 모두 유연성과 감정적 개방을 실천해야 합니다.",
        career:
          "A tyrannical boss, rigid work environment, or loss of professional authority may be causing frustration. You might feel powerless or, conversely, be exerting too much control. Seek balance between leadership and collaboration.",
        careerKo:
          "폭군 같은 상사, 경직된 근무 환경, 또는 직업적 권위 상실이 좌절감을 유발하고 있을 수 있습니다. 무력하다고 느끼거나, 반대로 너무 많은 통제를 행사하고 있을 수 있습니다. 리더십과 협력 사이의 균형을 찾으세요.",
        finance:
          "Financial chaos or overly rigid financial control is indicated. You may be either too reckless or too restrictive with money. Find the middle ground between responsible saving and enjoying the fruits of your labor.",
        financeKo:
          "재정적 혼란이나 지나치게 경직된 재정 통제가 나타납니다. 돈에 대해 너무 무모하거나 너무 제한적일 수 있습니다. 책임감 있는 저축과 노동의 결실을 즐기는 것 사이의 중간 지점을 찾으세요.",
        health:
          "The reversed Emperor may indicate health issues related to stress from overwork or excessive rigidity. Stubbornness about seeking treatment or ignoring symptoms can lead to problems. Allow yourself to rest and be flexible with your health routines.",
        healthKo:
          "역방향 황제는 과로나 과도한 경직에서 오는 스트레스 관련 건강 문제를 나타낼 수 있습니다. 치료를 받거나 증상을 무시하는 것에 대한 고집이 문제로 이어질 수 있습니다. 스스로 쉬고 건강 루틴에 유연해지세요.",
        spirituality:
          "Reversed, The Emperor warns against spiritual rigidity or dogmatic thinking. You may be clinging to rules and structures that no longer serve your growth. Allow space for mystery, surrender, and the flow of the divine beyond intellectual understanding.",
        spiritualityKo:
          "역방향으로 황제는 영적 경직이나 독단적 사고를 경고합니다. 성장에 더 이상 도움이 되지 않는 규칙과 구조에 집착하고 있을 수 있습니다. 신비, 항복, 그리고 지적 이해를 넘어선 신성의 흐름을 위한 공간을 허용하세요.",
      },
    },
    symbolism:
      "The Emperor sits on a stone throne carved with four ram heads, symbolizing Aries and the power of Mars. He wears red robes over armor, representing passion tempered by protection. An ankh scepter rests in his right hand and an orb in his left, signifying dominion over life and the material world. Barren mountains rise behind him, showing mastery through endurance.",
    symbolismKo:
      "황제는 양자리와 화성의 힘을 상징하는 네 개의 숫양 머리가 새겨진 돌 왕좌에 앉아 있습니다. 보호로 절제된 열정을 나타내는 갑옷 위에 붉은 예복을 입고 있습니다. 오른손에는 앙크 홀을, 왼손에는 보주를 들고 삶과 물질 세계에 대한 통치권을 의미합니다. 황량한 산이 뒤에 솟아 인내를 통한 숙달을 보여줍니다.",
    advice:
      "Take charge of your life with discipline and clear purpose. Build strong foundations, set boundaries, and lead with wisdom and fairness.",
    adviceKo:
      "규율과 명확한 목적으로 삶을 주도하세요. 강한 기반을 구축하고 경계를 설정하며 지혜와 공정함으로 이끄세요.",
    yesOrNo: "yes",
    numerology:
      "Four represents stability, structure, order, and solid foundations. It is the number of practical achievement and building enduring systems.",
    numerologyKo:
      "4는 안정, 구조, 질서, 견고한 기반을 나타냅니다. 실질적 성취와 지속 가능한 시스템 구축의 숫자입니다.",
    affirmation:
      "I lead my life with strength, discipline, and unwavering purpose.",
    affirmationKo: "나는 힘, 규율, 흔들림 없는 목적으로 삶을 이끕니다.",
    cardBackEmoji: "👑",
    visualDescription:
      "A stern ruler in red robes and armor sits on a ram-carved stone throne against barren mountains, holding an ankh scepter and an orb.",
  },
  {
    id: 5,
    name: "The Hierophant",
    nameKo: "교황",
    arcana: "major",
    number: 5,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Taurus",
    zodiacKo: "황소자리",
    keywords: {
      upright: [
        "tradition",
        "spiritual wisdom",
        "conformity",
        "mentorship",
        "institution",
      ],
      uprightKo: ["전통", "영적 지혜", "순응", "멘토십", "제도"],
      reversed: [
        "rebellion",
        "subversion",
        "unconventionality",
        "personal beliefs",
        "restriction",
      ],
      reversedKo: ["반란", "전복", "비관습성", "개인적 신념", "제약"],
    },
    meaning: {
      upright: {
        general:
          "The Hierophant represents tradition, spiritual guidance, and established institutions. He encourages you to seek knowledge through conventional wisdom, a mentor, or an organized system of learning. Conformity and shared values provide a sense of belonging and purpose.",
        generalKo:
          "교황은 전통, 영적 안내, 확립된 제도를 나타냅니다. 전통적 지혜, 멘토, 또는 체계적인 학습 시스템을 통해 지식을 추구하라고 격려합니다. 순응과 공유된 가치관은 소속감과 목적의식을 제공합니다.",
        love: "The Hierophant in love points to traditional relationships, commitment, and shared values. Marriage, engagement, or deepening commitment through shared beliefs may be on the horizon. Relationships grounded in mutual respect and common values thrive.",
        loveKo:
          "사랑에서 교황은 전통적 관계, 헌신, 공유된 가치관을 가리킵니다. 결혼, 약혼, 또는 공유된 신념을 통한 헌신의 심화가 다가올 수 있습니다. 상호 존중과 공통 가치에 기반한 관계가 번성합니다.",
        career:
          "The Hierophant suggests working within established systems, seeking a mentor, or pursuing formal education. Traditional career paths, organizations, and structured environments are favored. A teacher or advisor can significantly advance your professional development.",
        careerKo:
          "교황은 확립된 시스템 내에서 일하거나 멘토를 구하거나 정규 교육을 추구할 것을 암시합니다. 전통적 직업 경로, 조직, 구조화된 환경이 유리합니다. 선생님이나 조언자가 직업적 발전을 크게 앞당길 수 있습니다.",
        finance:
          "Conservative financial strategies are recommended. Follow established financial practices, seek professional advice, and avoid unconventional money schemes. Steady, traditional investment approaches will serve you well.",
        financeKo:
          "보수적인 재정 전략이 권장됩니다. 확립된 재정 관행을 따르고 전문적 조언을 구하며 비전통적 금전 계획을 피하세요. 꾸준하고 전통적인 투자 접근이 도움이 될 것입니다.",
        health:
          "The Hierophant advises following conventional medical advice and trusted health practitioners. Established treatment protocols and proven methods are preferred. Consider group wellness activities or community-supported health practices.",
        healthKo:
          "교황은 전통적 의학 조언과 신뢰할 수 있는 건강 전문가를 따르라고 조언합니다. 확립된 치료 프로토콜과 검증된 방법이 선호됩니다. 그룹 웰니스 활동이나 커뮤니티 지원 건강 수련을 고려하세요.",
        spirituality:
          "The Hierophant represents organized religion, spiritual tradition, and the wisdom of established teachings. Join a spiritual community, study sacred texts, or find a spiritual teacher. The path of devoted practice within tradition brings deep insight.",
        spiritualityKo:
          "교황은 조직화된 종교, 영적 전통, 확립된 가르침의 지혜를 나타냅니다. 영적 공동체에 참여하거나 성스러운 텍스트를 공부하거나 영적 스승을 찾으세요. 전통 내에서의 헌신적 수련의 길이 깊은 통찰을 가져옵니다.",
      },
      reversed: {
        general:
          "The reversed Hierophant encourages breaking free from rigid traditions, questioning authority, and forging your own spiritual path. Conventional approaches may feel limiting or inauthentic. It is time to challenge the status quo and honor your personal truth.",
        generalKo:
          "역방향 교황은 경직된 전통에서 벗어나고 권위에 의문을 제기하며 자신만의 영적 길을 개척하라고 격려합니다. 전통적 접근이 제한적이거나 진정성이 없게 느껴질 수 있습니다. 현상 유지에 도전하고 개인적 진실을 존중할 때입니다.",
        love: "Reversed in love, The Hierophant signals unconventional relationships or a rejection of traditional expectations. You or your partner may resist societal norms about how relationships should look. Honor what truly works for you rather than conforming to others' expectations.",
        loveKo:
          "역방향 사랑에서 교황은 비전통적 관계나 전통적 기대의 거부를 신호합니다. 당신이나 파트너가 관계가 어떠해야 하는지에 대한 사회적 규범에 저항할 수 있습니다. 다른 사람의 기대에 맞추기보다 진정으로 효과가 있는 것을 존중하세요.",
        career:
          "The reversed Hierophant in career suggests dissatisfaction with rigid corporate structures or traditional career paths. You may feel called to pursue an unconventional vocation. Consider entrepreneurship, freelancing, or forging a unique professional identity.",
        careerKo:
          "직업에서 역방향 교황은 경직된 기업 구조나 전통적 직업 경로에 대한 불만을 암시합니다. 비전통적 직업을 추구하라는 부름을 느낄 수 있습니다. 창업, 프리랜싱, 또는 독특한 전문적 정체성 구축을 고려하세요.",
        finance:
          "Conventional financial advice may not apply to your situation. The reversed Hierophant invites you to explore alternative financial strategies or think outside the box about money. Just ensure your unorthodox approach is well-researched.",
        financeKo:
          "전통적 재정 조언이 상황에 맞지 않을 수 있습니다. 역방향 교황은 대안적 재정 전략을 탐색하거나 돈에 대해 틀 밖에서 생각하도록 초대합니다. 비정통적 접근이 충분히 연구되었는지만 확인하세요.",
        health:
          "The reversed Hierophant may encourage exploring alternative or complementary health modalities that go beyond conventional medicine. You may benefit from holistic approaches, but ensure they are evidence-based and used in conjunction with professional medical advice.",
        healthKo:
          "역방향 교황은 전통 의학을 넘어서는 대체 또는 보완적 건강 방식을 탐색하도록 격려할 수 있습니다. 전인적 접근에서 이익을 얻을 수 있지만 증거 기반이며 전문 의학적 조언과 함께 사용되는지 확인하세요.",
        spirituality:
          "Reversed, The Hierophant urges you to question dogma and develop a personal spiritual philosophy. Organized religion may feel restrictive. Your unique spiritual path may draw from multiple traditions or involve direct, unmediated experience of the divine.",
        spiritualityKo:
          "역방향으로 교황은 교리에 의문을 제기하고 개인적 영적 철학을 발전시키라고 촉구합니다. 조직화된 종교가 제한적으로 느껴질 수 있습니다. 독특한 영적 길은 여러 전통에서 가져오거나 직접적이고 매개되지 않은 신성 경험을 포함할 수 있습니다.",
      },
    },
    symbolism:
      "The Hierophant sits on a throne between two grey pillars, wearing triple papal crowns representing the three worlds of consciousness. He raises his right hand in a religious blessing with two fingers pointing to heaven. Two crossed keys lie at his feet symbolizing the keys to spiritual knowledge, and two acolytes kneel before him seeking his guidance.",
    symbolismKo:
      "교황은 두 개의 회색 기둥 사이 왕좌에 앉아 의식의 세 세계를 나타내는 삼중 교황 왕관을 쓰고 있습니다. 오른손을 들어 두 손가락으로 하늘을 가리키며 종교적 축복을 내립니다. 교차된 두 열쇠가 발밑에 놓여 영적 지식의 열쇠를 상징하고 두 시종이 그의 앞에 무릎 꿇어 안내를 구합니다.",
    advice:
      "Seek wisdom from tradition and experienced teachers. There is value in established systems of knowledge—learn from them before forging your own path.",
    adviceKo:
      "전통과 경험 많은 스승에게서 지혜를 구하세요. 확립된 지식 체계에 가치가 있습니다—자신의 길을 개척하기 전에 그것들로부터 배우세요.",
    yesOrNo: "maybe",
    numerology:
      "Five represents change, freedom, challenges to the established order, and learning through experience. It disrupts the stability of four to bring growth through testing.",
    numerologyKo:
      "5는 변화, 자유, 기존 질서에 대한 도전, 경험을 통한 학습을 나타냅니다. 4의 안정을 흔들어 시험을 통한 성장을 가져옵니다.",
    affirmation:
      "I honor the wisdom of tradition while staying true to my own spiritual path.",
    affirmationKo: "나는 자신의 영적 길에 충실하면서 전통의 지혜를 경외합니다.",
    cardBackEmoji: "⛪",
    visualDescription:
      "A religious figure in elaborate papal robes and a triple crown sits between grey pillars, raising a hand in blessing while two acolytes kneel before him and two crossed keys rest at his feet.",
  },
  {
    id: 6,
    name: "The Lovers",
    nameKo: "연인",
    arcana: "major",
    number: 6,
    element: "Air",
    elementKo: "공기",
    zodiac: "Gemini",
    zodiacKo: "쌍둥이자리",
    keywords: {
      upright: ["love", "harmony", "relationships", "choices", "alignment"],
      uprightKo: ["사랑", "조화", "관계", "선택", "정렬"],
      reversed: [
        "disharmony",
        "imbalance",
        "misalignment",
        "indecision",
        "broken trust",
      ],
      reversedKo: ["부조화", "불균형", "불일치", "우유부단", "깨진 신뢰"],
    },
    meaning: {
      upright: {
        general:
          "The Lovers represents deep connections, important choices, and alignment between heart and mind. A significant decision may be before you, one that requires you to honor your deepest values. This card affirms love, unity, and the courage to choose authentically.",
        generalKo:
          "연인은 깊은 연결, 중요한 선택, 마음과 정신 사이의 정렬을 나타냅니다. 가장 깊은 가치관을 존중해야 하는 중대한 결정이 앞에 있을 수 있습니다. 이 카드는 사랑, 일치, 진정성 있게 선택하는 용기를 확인합니다.",
        love: "The Lovers is one of the most powerful cards for romantic relationships. A soulful, passionate connection is present or approaching. This card speaks of deep love, physical attraction, and a relationship where both partners choose each other wholeheartedly.",
        loveKo:
          "연인은 로맨틱 관계에서 가장 강력한 카드 중 하나입니다. 영혼이 담긴 열정적 연결이 현재 있거나 다가오고 있습니다. 이 카드는 깊은 사랑, 신체적 끌림, 두 파트너가 전심으로 서로를 선택하는 관계를 말합니다.",
        career:
          "A pivotal career choice lies ahead that requires you to follow your passion. The Lovers advises choosing work that aligns with your values rather than simply chasing money or status. Partnerships and collaborations are strongly favored.",
        careerKo:
          "열정을 따라야 하는 중요한 직업적 선택이 앞에 있습니다. 연인은 단순히 돈이나 지위를 쫓기보다 가치관에 맞는 일을 선택하라고 조언합니다. 파트너십과 협력이 강력하게 유리합니다.",
        finance:
          "Financial decisions should be guided by your values and long-term vision. The Lovers suggests aligning your spending and investments with what truly matters to you. A financial partnership or joint venture may be beneficial.",
        financeKo:
          "재정적 결정은 가치관과 장기적 비전에 의해 인도되어야 합니다. 연인은 지출과 투자를 진정으로 중요한 것에 맞추라고 암시합니다. 재정 파트너십이나 합작 벤처가 유익할 수 있습니다.",
        health:
          "The Lovers emphasizes the mind-body-spirit connection in health. Emotional harmony contributes to physical well-being. Relationships that are loving and supportive can have a profoundly positive effect on your health.",
        healthKo:
          "연인은 건강에서 정신-신체-영혼 연결을 강조합니다. 감정적 조화가 신체적 안녕에 기여합니다. 사랑스럽고 지지적인 관계가 건강에 깊이 긍정적인 영향을 미칠 수 있습니다.",
        spirituality:
          "The Lovers invites you to unite the divine masculine and feminine within yourself. Spiritual growth comes through relationship—with others and with the divine. Practice love as a spiritual discipline and seek unity in all things.",
        spiritualityKo:
          "연인은 자신 안에서 신성한 남성성과 여성성을 합일하도록 초대합니다. 영적 성장은 관계를 통해 옵니다—다른 사람과, 그리고 신성과의 관계. 사랑을 영적 수련으로 실천하고 모든 것에서 합일을 추구하세요.",
      },
      reversed: {
        general:
          "The reversed Lovers indicates disharmony, difficult choices, or misaligned values. You may be at a crossroads, torn between two paths that seem equally compelling. Internal conflict between desire and duty needs resolution. Reconnect with your core values to find clarity.",
        generalKo:
          "역방향 연인은 부조화, 어려운 선택, 또는 일치하지 않는 가치관을 나타냅니다. 두 길 사이에서 갈림길에 서 있을 수 있습니다. 욕망과 의무 사이의 내면적 갈등이 해결이 필요합니다. 명확성을 찾기 위해 핵심 가치관과 다시 연결하세요.",
        love: "Reversed in love, The Lovers warns of broken trust, infidelity, or a fundamental mismatch in values between partners. Communication has broken down and the emotional connection feels strained. Honest self-reflection about what you truly need is essential.",
        loveKo:
          "역방향 사랑에서 연인은 깨진 신뢰, 불륜, 또는 파트너 간 근본적인 가치관 불일치를 경고합니다. 소통이 무너지고 감정적 연결이 긴장되어 있습니다. 진정으로 필요한 것에 대한 정직한 자기 성찰이 필수적입니다.",
        career:
          "You may be in a career that conflicts with your personal values, or facing a professional partnership that is not working. The reversed Lovers urges you to realign your professional life with your authentic self rather than staying in a mismatched situation.",
        careerKo:
          "개인적 가치관과 충돌하는 직업에 있거나 잘 맞지 않는 직업적 파트너십에 직면하고 있을 수 있습니다. 역방향 연인은 불일치한 상황에 머물기보다 직업 생활을 진정한 자아와 재정렬하라고 촉구합니다.",
        finance:
          "Financial disagreements or conflicting priorities around money may be causing stress. Joint financial decisions are proving difficult. Take time to clarify your values around money and ensure financial choices reflect what is truly important.",
        financeKo:
          "돈을 둘러싼 재정적 의견 불일치나 상충하는 우선순위가 스트레스를 유발하고 있을 수 있습니다. 공동 재정 결정이 어려워지고 있습니다. 돈에 대한 가치관을 명확히 하고 재정 선택이 진정으로 중요한 것을 반영하는지 확인하세요.",
        health:
          "The reversed Lovers may indicate health imbalances caused by emotional turmoil or relationship stress. Internal conflict manifests physically. Address the emotional root causes and seek to restore harmony in your relationships and within yourself.",
        healthKo:
          "역방향 연인은 감정적 혼란이나 관계 스트레스로 인한 건강 불균형을 나타낼 수 있습니다. 내면적 갈등이 신체적으로 나타납니다. 감정적 근본 원인을 다루고 관계와 자신 안에서 조화를 회복하려고 노력하세요.",
        spirituality:
          "Reversed, The Lovers suggests a spiritual disconnection or inner conflict between competing beliefs. You may be struggling to integrate different aspects of your spiritual self. Seek inner harmony and allow your heart to guide your spiritual choices.",
        spiritualityKo:
          "역방향으로 연인은 영적 단절이나 경쟁하는 신념 사이의 내면적 갈등을 암시합니다. 영적 자아의 다른 측면을 통합하는 데 어려움을 겪고 있을 수 있습니다. 내면의 조화를 추구하고 마음이 영적 선택을 인도하도록 하세요.",
      },
    },
    symbolism:
      "An angel (often identified as Raphael) watches over a naked man and woman standing in the Garden of Eden. Behind the woman stands the Tree of Knowledge with a serpent coiled around it, and behind the man stands the Tree of Life with twelve flames. A mountain rises between them, and the sun shines brightly overhead.",
    symbolismKo:
      "천사(종종 라파엘로 확인됨)가 에덴 동산에 서 있는 벌거벗은 남녀를 지켜보고 있습니다. 여자 뒤에는 뱀이 감긴 지식의 나무가, 남자 뒤에는 열두 개의 불꽃이 있는 생명의 나무가 서 있습니다. 산이 그들 사이에 솟아 있고 태양이 머리 위에서 밝게 빛납니다.",
    advice:
      "Follow your heart and choose what aligns with your deepest values. Love is the highest form of wisdom—let it guide your most important decisions.",
    adviceKo:
      "마음을 따르고 가장 깊은 가치관에 맞는 것을 선택하세요. 사랑은 가장 높은 형태의 지혜입니다—가장 중요한 결정을 인도하게 하세요.",
    yesOrNo: "yes",
    numerology:
      "Six represents harmony, balance, love, and responsibility. It is the number of union, beauty, and the integration of opposites into a harmonious whole.",
    numerologyKo:
      "6은 조화, 균형, 사랑, 책임을 나타냅니다. 합일, 아름다움, 상반된 것들의 조화로운 통합의 숫자입니다.",
    affirmation:
      "I choose love and alignment in all my relationships and decisions.",
    affirmationKo: "나는 모든 관계와 결정에서 사랑과 정렬을 선택합니다.",
    cardBackEmoji: "💑",
    visualDescription:
      "An angel blesses a naked couple standing in a paradise garden, with the Tree of Knowledge and the Tree of Life behind them, a mountain in the center, and a radiant sun above.",
  },
  {
    id: 7,
    name: "The Chariot",
    nameKo: "전차",
    arcana: "major",
    number: 7,
    element: "Water",
    elementKo: "물",
    zodiac: "Cancer",
    zodiacKo: "게자리",
    keywords: {
      upright: ["determination", "willpower", "victory", "control", "ambition"],
      uprightKo: ["결단력", "의지력", "승리", "통제", "야망"],
      reversed: [
        "aggression",
        "lack of direction",
        "defeat",
        "scattered energy",
        "opposition",
      ],
      reversedKo: ["공격성", "방향 상실", "패배", "분산된 에너지", "반대"],
    },
    meaning: {
      upright: {
        general:
          "The Chariot signals triumph through determination and willpower. You are overcoming obstacles by maintaining focus and harnessing opposing forces. Victory is within reach, but it requires discipline, confidence, and unwavering commitment to your goal.",
        generalKo:
          "전차는 결단력과 의지력을 통한 승리를 신호합니다. 집중력을 유지하고 상반된 힘을 활용하여 장애물을 극복하고 있습니다. 승리가 손에 닿을 거리에 있지만 규율, 자신감, 목표에 대한 흔들림 없는 헌신이 필요합니다.",
        love: "The Chariot in love suggests pursuing your romantic desires with confidence and determination. If you desire a relationship, go after it boldly. In existing relationships, this card encourages working through challenges together with shared resolve.",
        loveKo:
          "사랑에서 전차는 자신감과 결단력으로 로맨틱한 욕구를 추구하라고 암시합니다. 관계를 원한다면 대담하게 추구하세요. 기존 관계에서 이 카드는 공유된 결의로 함께 도전을 극복하라고 격려합니다.",
        career:
          "Professional success through sheer determination is indicated. You have the drive and focus to achieve ambitious career goals. Push forward with confidence, and don't let obstacles deter you. Recognition and advancement are likely.",
        careerKo:
          "순수한 결단력을 통한 직업적 성공이 나타납니다. 야심 찬 직업적 목표를 달성할 추진력과 집중력이 있습니다. 자신감을 가지고 전진하며 장애물에 굴하지 마세요. 인정과 승진이 예상됩니다.",
        finance:
          "Financial victory comes through disciplined effort and clear planning. The Chariot suggests taking control of your finances with determination. Debt can be conquered, savings goals achieved, and financial independence attained through persistent effort.",
        financeKo:
          "규율 있는 노력과 명확한 계획을 통해 재정적 승리가 옵니다. 전차는 결단력으로 재정을 통제하라고 암시합니다. 부채를 정복하고 저축 목표를 달성하며 끈기 있는 노력으로 재정적 독립을 이룰 수 있습니다.",
        health:
          "The Chariot brings strong willpower to overcome health challenges. Whether recovering from illness or committing to a fitness regimen, your determination will carry you through. Channel your competitive energy into positive health outcomes.",
        healthKo:
          "전차는 건강 문제를 극복할 강한 의지력을 가져옵니다. 질병에서 회복하든 피트니스 체계에 전념하든 결단력이 당신을 이끌어 줄 것입니다. 경쟁적 에너지를 긍정적인 건강 결과로 전환하세요.",
        spirituality:
          "The Chariot encourages spiritual progress through disciplined practice and mastery of the self. Balance your inner polarities—light and shadow, emotion and reason—and move forward on your spiritual path with focused intention.",
        spiritualityKo:
          "전차는 규율 있는 수련과 자기 숙달을 통한 영적 진보를 격려합니다. 내면의 양극성—빛과 그림자, 감정과 이성—을 균형 맞추고 집중된 의도로 영적 길에서 전진하세요.",
      },
      reversed: {
        general:
          "The reversed Chariot warns of loss of direction, lack of control, or aggression born from frustration. Your willpower may be scattered, or you're trying to force outcomes that cannot be controlled. Step back, reassess your approach, and find a more balanced way forward.",
        generalKo:
          "역방향 전차는 방향 상실, 통제력 부족, 또는 좌절에서 비롯된 공격성을 경고합니다. 의지력이 분산되어 있거나 통제할 수 없는 결과를 강요하려 하고 있습니다. 한 발 물러나 접근 방식을 재평가하고 더 균형 잡힌 전진 방법을 찾으세요.",
        love: "Reversed in love, The Chariot indicates power struggles, controlling behavior, or a relationship that has lost its sense of direction. One or both partners may be pulling in different directions. Release the need to control and find common ground.",
        loveKo:
          "역방향 사랑에서 전차는 권력 투쟁, 통제적 행동, 또는 방향감을 잃은 관계를 나타냅니다. 한쪽 또는 양쪽 파트너가 다른 방향으로 당기고 있을 수 있습니다. 통제의 필요를 내려놓고 공통점을 찾으세요.",
        career:
          "The reversed Chariot suggests professional setbacks due to scattered focus or aggressive tactics that backfire. You may be pushing too hard or in the wrong direction. Pause, recalibrate your strategy, and ensure your ambitions are realistic.",
        careerKo:
          "역방향 전차는 분산된 집중이나 역효과를 내는 공격적 전술로 인한 직업적 좌절을 암시합니다. 너무 세게 밀어붙이거나 잘못된 방향으로 가고 있을 수 있습니다. 멈추고 전략을 재조정하며 야망이 현실적인지 확인하세요.",
        finance:
          "Financial plans may be going off track due to impulsive decisions or lack of focused strategy. The reversed Chariot warns against reckless spending or aggressive financial moves. Slow down and bring more discipline to your financial management.",
        financeKo:
          "충동적 결정이나 집중된 전략 부족으로 재정 계획이 궤도에서 벗어날 수 있습니다. 역방향 전차는 무모한 지출이나 공격적인 재정 움직임을 경고합니다. 속도를 줄이고 재정 관리에 더 많은 규율을 가져오세요.",
        health:
          "The reversed Chariot warns against pushing your body too hard or neglecting the need for rest. Overtraining, stress-related illness, or ignoring physical limitations could lead to setbacks. Balance determination with self-compassion and adequate recovery.",
        healthKo:
          "역방향 전차는 몸을 너무 세게 밀어붙이거나 휴식의 필요를 무시하는 것을 경고합니다. 과도한 훈련, 스트레스 관련 질병, 또는 신체적 한계를 무시하면 좌절로 이어질 수 있습니다. 결단력과 자기 연민, 적절한 회복의 균형을 맞추세요.",
        spirituality:
          "Reversed, The Chariot suggests forcing spiritual progress or using willpower to bypass necessary inner work. Not everything can be conquered through sheer determination. Sometimes surrender and acceptance are the path to true spiritual advancement.",
        spiritualityKo:
          "역방향으로 전차는 영적 진보를 강요하거나 의지력으로 필요한 내면 작업을 우회하려 하는 것을 암시합니다. 모든 것을 순수한 결단력으로 정복할 수 있는 것은 아닙니다. 때로는 항복과 수용이 진정한 영적 진보의 길입니다.",
      },
    },
    symbolism:
      "A warrior stands in a chariot drawn by one black and one white sphinx, representing opposing forces held in balance. The chariot bears a star canopy and the warrior wears armor decorated with crescent moons and alchemical symbols. A walled city lies behind, showing the departure from comfort into the world of action.",
    symbolismKo:
      "전사가 하나의 검은색과 하나의 흰색 스핑크스가 끄는 전차에 서 있으며 균형 잡힌 상반된 힘을 나타냅니다. 전차에는 별 천개가 있고 전사는 초승달과 연금술 기호로 장식된 갑옷을 입고 있습니다. 성벽으로 둘러싸인 도시가 뒤에 놓여 안락함에서 행동의 세계로의 출발을 보여줍니다.",
    advice:
      "Stay focused, stay determined, and stay in control. Victory is yours if you harness your willpower and refuse to be defeated by obstacles.",
    adviceKo:
      "집중하고 결단력을 유지하며 통제를 유지하세요. 의지력을 활용하고 장애물에 패배하기를 거부하면 승리는 당신의 것입니다.",
    yesOrNo: "yes",
    numerology:
      "Seven represents introspection, analysis, spiritual seeking, and victory through inner strength. It is the number of the philosopher and the seeker who achieves mastery through persistent effort.",
    numerologyKo:
      "7은 내성, 분석, 영적 추구, 내면의 힘을 통한 승리를 나타냅니다. 끈기 있는 노력으로 숙달을 달성하는 철학자와 탐구자의 숫자입니다.",
    affirmation:
      "I am focused, determined, and unstoppable in the pursuit of my goals.",
    affirmationKo:
      "나는 목표 추구에 있어 집중하고 결단력 있으며 멈출 수 없습니다.",
    cardBackEmoji: "🏎️",
    visualDescription:
      "An armored warrior stands triumphantly in a canopied chariot pulled by a black and white sphinx, with a walled city in the background under a starry sky.",
  },
  {
    id: 8,
    name: "Strength",
    nameKo: "힘",
    arcana: "major",
    number: 8,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    keywords: {
      upright: [
        "inner strength",
        "courage",
        "compassion",
        "patience",
        "gentle power",
      ],
      uprightKo: ["내면의 힘", "용기", "연민", "인내", "부드러운 힘"],
      reversed: [
        "self-doubt",
        "weakness",
        "insecurity",
        "raw emotion",
        "loss of confidence",
      ],
      reversedKo: [
        "자기 의심",
        "약점",
        "불안감",
        "가공되지 않은 감정",
        "자신감 상실",
      ],
    },
    meaning: {
      upright: {
        general:
          "Strength represents the power of the human spirit—courage, patience, and compassion in the face of adversity. True strength comes not from force, but from inner resolve and the ability to tame your inner beasts with gentleness. You have the resilience to overcome any challenge.",
        generalKo:
          "힘은 인간 정신의 힘—역경 속에서의 용기, 인내, 연민—을 나타냅니다. 진정한 힘은 물리적 힘이 아니라 내면의 결의와 부드러움으로 내면의 짐승을 길들이는 능력에서 옵니다. 어떤 도전도 극복할 회복력이 있습니다.",
        love: "Strength in love speaks to a deep, resilient bond built on patience, understanding, and mutual respect. Love conquers through kindness, not force. If facing relationship challenges, gentle persistence and open-hearted communication will see you through.",
        loveKo:
          "사랑에서 힘은 인내, 이해, 상호 존중 위에 세워진 깊고 회복력 있는 유대를 말합니다. 사랑은 힘이 아닌 친절함으로 정복합니다. 관계 문제에 직면해 있다면 부드러운 끈기와 열린 마음의 소통이 해결해 줄 것입니다.",
        career:
          "Your professional challenges require inner strength and patience rather than aggressive action. Lead with empathy and quiet confidence. Your ability to remain calm under pressure and handle difficult situations with grace will earn you respect and advancement.",
        careerKo:
          "직업적 도전은 공격적 행동보다 내면의 힘과 인내를 요구합니다. 공감과 조용한 자신감으로 이끄세요. 압박 속에서 침착함을 유지하고 어려운 상황을 우아하게 처리하는 능력이 존경과 승진을 가져올 것입니다.",
        finance:
          "Financial strength comes from patience and self-control. Resist the urge for quick gains and instead build wealth through steady, disciplined effort. Your financial resilience will carry you through uncertain times.",
        financeKo:
          "재정적 힘은 인내와 자기 통제에서 옵니다. 빠른 이익에 대한 충동을 억제하고 대신 꾸준하고 규율 있는 노력으로 부를 쌓으세요. 재정적 회복력이 불확실한 시기를 극복하게 해 줄 것입니다.",
        health:
          "Strength is an encouraging card for health recovery. Your inner fortitude supports physical healing. Approach health challenges with patience and compassion toward yourself. Mind-body practices like yoga and meditation can be particularly beneficial.",
        healthKo:
          "힘은 건강 회복에 고무적인 카드입니다. 내면의 강인함이 신체적 치유를 지원합니다. 자신에 대한 인내와 연민으로 건강 문제에 접근하세요. 요가와 명상 같은 심신 수련이 특히 유익할 수 있습니다.",
        spirituality:
          "Strength on a spiritual level represents mastery over the ego and the integration of your primal nature with your higher self. Spiritual courage means facing your shadows with compassion. True power lies in vulnerability and the gentle mastery of the self.",
        spiritualityKo:
          "영적 수준에서 힘은 자아에 대한 숙달과 원초적 본성을 높은 자아와 통합하는 것을 나타냅니다. 영적 용기는 연민으로 그림자를 마주하는 것을 의미합니다. 진정한 힘은 취약함과 부드러운 자기 숙달에 있습니다.",
      },
      reversed: {
        general:
          "The reversed Strength card indicates self-doubt, insecurity, or an inability to access your inner power. You may feel overwhelmed by challenges or succumbing to fear and anxiety. Remember that your strength is always within you—reconnect with your courage and self-compassion.",
        generalKo:
          "역방향 힘 카드는 자기 의심, 불안감, 또는 내면의 힘에 접근하지 못하는 상태를 나타냅니다. 도전에 압도되거나 두려움과 불안에 굴복하고 있을 수 있습니다. 힘은 항상 당신 안에 있음을 기억하세요—용기와 자기 연민과 다시 연결하세요.",
        love: "Reversed in love, Strength suggests insecurity, jealousy, or emotional fragility undermining a relationship. You or your partner may be struggling with self-worth issues. Rebuild confidence through self-love before expecting others to fill the void.",
        loveKo:
          "역방향 사랑에서 힘은 불안감, 질투, 또는 관계를 약화시키는 감정적 취약함을 암시합니다. 당신이나 파트너가 자기 가치 문제로 어려움을 겪고 있을 수 있습니다. 다른 사람이 빈자리를 채워주기를 기대하기 전에 자기 사랑을 통해 자신감을 재건하세요.",
        career:
          "Self-doubt or a loss of professional confidence may be holding you back. The reversed Strength card urges you not to give in to imposter syndrome or workplace intimidation. Reconnect with your competencies and trust in your abilities.",
        careerKo:
          "자기 의심이나 직업적 자신감 상실이 당신을 붙잡고 있을 수 있습니다. 역방향 힘 카드는 사기꾼 증후군이나 직장 내 위협에 굴복하지 말라고 촉구합니다. 역량과 다시 연결하고 능력을 신뢰하세요.",
        finance:
          "Financial insecurity or lack of confidence in financial decisions may be an issue. You might be giving up too easily on financial goals or feeling powerless about your economic situation. Small, consistent actions can rebuild your financial confidence.",
        financeKo:
          "재정적 불안감이나 재정 결정에 대한 자신감 부족이 문제일 수 있습니다. 재정 목표를 너무 쉽게 포기하거나 경제적 상황에 대해 무력감을 느끼고 있을 수 있습니다. 작고 일관된 행동이 재정적 자신감을 재건할 수 있습니다.",
        health:
          "The reversed Strength card warns of depleted energy, burnout, or losing the will to fight health challenges. You may need to ask for help rather than trying to be strong on your own. Rest, recover, and allow others to support your healing process.",
        healthKo:
          "역방향 힘 카드는 고갈된 에너지, 번아웃, 또는 건강 문제와 싸울 의지를 잃는 것을 경고합니다. 혼자 강해지려 하기보다 도움을 요청해야 할 수 있습니다. 쉬고 회복하며 다른 사람이 치유 과정을 지원하도록 하세요.",
        spirituality:
          "Reversed, Strength suggests spiritual exhaustion or losing faith in yourself. You may feel spiritually weak or disconnected from your inner power. Return to the basics of your spiritual practice and be gentle with yourself during this period of renewal.",
        spiritualityKo:
          "역방향으로 힘은 영적 소진이나 자신에 대한 믿음 상실을 암시합니다. 영적으로 약하거나 내면의 힘에서 단절된 느낌을 받을 수 있습니다. 영적 수련의 기본으로 돌아가고 이 갱신의 시기 동안 자신에게 부드럽게 대하세요.",
      },
    },
    symbolism:
      "A woman gently closes the jaws of a lion, demonstrating that true power comes from love, not force. An infinity symbol hovers above her head, echoing The Magician's mastery. She wears a garland of flowers and a white robe, symbolizing purity of spirit. The golden background and green landscape represent vitality and the natural world.",
    symbolismKo:
      "여인이 부드럽게 사자의 턱을 닫으며 진정한 힘이 물리력이 아닌 사랑에서 온다는 것을 보여줍니다. 무한대 기호가 머리 위에 떠 있어 마법사의 숙달을 반영합니다. 꽃 화환과 흰 가운을 입어 영혼의 순수함을 상징합니다. 황금빛 배경과 녹색 풍경은 활력과 자연 세계를 나타냅니다.",
    advice:
      "Meet challenges with quiet courage and compassion. Your greatest power lies not in force, but in the gentle mastery of yourself and your emotions.",
    adviceKo:
      "조용한 용기와 연민으로 도전을 맞이하세요. 가장 큰 힘은 물리력이 아니라 자신과 감정의 부드러운 숙달에 있습니다.",
    yesOrNo: "yes",
    numerology:
      "Eight represents mastery, abundance, balance of power, and karmic cycles. It is the number of infinite potential and the strength that comes from integrating all aspects of the self.",
    numerologyKo:
      "8은 숙달, 풍요, 힘의 균형, 업적 순환을 나타냅니다. 무한한 잠재력과 자아의 모든 측면을 통합함에서 오는 힘의 숫자입니다.",
    affirmation:
      "I am strong, courageous, and compassionate. I meet all challenges with grace and inner power.",
    affirmationKo:
      "나는 강하고 용감하며 연민이 있습니다. 모든 도전을 우아함과 내면의 힘으로 맞이합니다.",
    cardBackEmoji: "🦁",
    visualDescription:
      "A serene woman in white robes gently holds open the jaws of a calm lion, with an infinity symbol above her head, surrounded by a golden sky and verdant landscape.",
  },
  {
    id: 9,
    name: "The Hermit",
    nameKo: "은둔자",
    arcana: "major",
    number: 9,
    element: "Earth",
    elementKo: "땅",
    zodiac: "Virgo",
    zodiacKo: "처녀자리",
    keywords: {
      upright: [
        "soul-searching",
        "introspection",
        "solitude",
        "inner guidance",
        "wisdom",
      ],
      uprightKo: ["자아 탐구", "내성", "고독", "내면의 인도", "지혜"],
      reversed: [
        "isolation",
        "loneliness",
        "withdrawal",
        "anti-social",
        "lost",
      ],
      reversedKo: ["고립", "외로움", "은퇴", "비사회적", "길 잃음"],
    },
    meaning: {
      upright: {
        general:
          "The Hermit calls you to withdraw from the noise of the world and seek answers within. A period of solitude and deep reflection is needed for personal growth. Like the wise sage atop the mountain, your inner light will guide you to the truth you seek.",
        generalKo:
          "은둔자는 세상의 소음에서 물러나 내면에서 답을 찾으라고 부릅니다. 개인적 성장을 위해 고독과 깊은 성찰의 시기가 필요합니다. 산꼭대기의 현명한 현자처럼 내면의 빛이 추구하는 진리로 인도할 것입니다.",
        love: "The Hermit in love suggests a time of reflection on what you truly need in a relationship. If single, this is a period for self-discovery before entering a partnership. In a relationship, you may need space to understand your own heart before deepening the connection.",
        loveKo:
          "사랑에서 은둔자는 관계에서 진정으로 필요한 것에 대한 성찰의 시간을 암시합니다. 싱글이라면 파트너십에 들어가기 전 자기 발견의 시기입니다. 관계 중이라면 연결을 심화하기 전에 자신의 마음을 이해하기 위한 공간이 필요할 수 있습니다.",
        career:
          "The Hermit advises stepping back from career pressures to gain perspective. You may need time alone to evaluate your professional direction. A mentor figure may appear, or you may find clarity through quiet contemplation of your true calling.",
        careerKo:
          "은둔자는 관점을 얻기 위해 직업 압박에서 한 발 물러나라고 조언합니다. 직업 방향을 평가하기 위해 혼자만의 시간이 필요할 수 있습니다. 멘토 인물이 나타나거나 진정한 소명에 대한 조용한 관조를 통해 명확성을 찾을 수 있습니다.",
        finance:
          "The Hermit encourages careful, solitary evaluation of your financial situation. Step away from external advice and trends to assess what truly matters for your financial well-being. Simplicity and frugality may bring unexpected peace.",
        financeKo:
          "은둔자는 재정 상황에 대한 신중한 독자적 평가를 격려합니다. 외부 조언과 트렌드에서 벗어나 재정적 안녕을 위해 진정으로 중요한 것을 평가하세요. 단순함과 절약이 예상치 못한 평화를 가져올 수 있습니다.",
        health:
          "The Hermit suggests that healing comes through rest, solitude, and inner peace. You may benefit from reducing stimulation and spending quiet time in nature. Mental health is especially highlighted—mindfulness and contemplative practices bring restoration.",
        healthKo:
          "은둔자는 치유가 휴식, 고독, 내면의 평화를 통해 온다고 암시합니다. 자극을 줄이고 자연 속에서 조용한 시간을 보내는 것이 유익할 수 있습니다. 정신 건강이 특히 강조됩니다—마음챙김과 관조적 수련이 회복을 가져옵니다.",
        spirituality:
          "The Hermit is one of the most spiritual cards in the deck. This is a powerful time for meditation, retreat, and deepening your spiritual practice. Seek the divine through silence and solitude. Your inner teacher holds the wisdom you need.",
        spiritualityKo:
          "은둔자는 덱에서 가장 영적인 카드 중 하나입니다. 명상, 은퇴, 영적 수련 심화에 강력한 시기입니다. 침묵과 고독을 통해 신성을 추구하세요. 내면의 스승이 필요한 지혜를 보유하고 있습니다.",
      },
      reversed: {
        general:
          "The reversed Hermit warns of excessive isolation, loneliness, or avoidance of necessary self-reflection. You may be withdrawing too much from the world or, conversely, refusing to spend needed time alone. Find the balance between healthy solitude and meaningful connection.",
        generalKo:
          "역방향 은둔자는 과도한 고립, 외로움, 또는 필요한 자기 성찰의 회피를 경고합니다. 세상에서 너무 많이 물러나거나, 반대로 필요한 혼자만의 시간을 거부하고 있을 수 있습니다. 건강한 고독과 의미 있는 연결 사이의 균형을 찾으세요.",
        love: "Reversed in love, The Hermit indicates unhealthy isolation or fear of intimacy. You may be pushing potential partners away or withdrawing from an existing relationship. Loneliness is not the same as healthy solitude—reach out and reconnect with others.",
        loveKo:
          "역방향 사랑에서 은둔자는 건강하지 못한 고립이나 친밀감에 대한 두려움을 나타냅니다. 잠재적 파트너를 밀어내거나 기존 관계에서 철수하고 있을 수 있습니다. 외로움은 건강한 고독과 같지 않습니다—손을 뻗어 다른 사람과 다시 연결하세요.",
        career:
          "Professional isolation or a refusal to collaborate is holding you back. The reversed Hermit warns against working in a silo or disconnecting from your professional community. Seek mentorship, collaboration, and fresh perspectives from others.",
        careerKo:
          "직업적 고립이나 협력 거부가 당신을 붙잡고 있습니다. 역방향 은둔자는 홀로 일하거나 직업 커뮤니티에서 단절되는 것을 경고합니다. 멘토십, 협력, 다른 사람들의 새로운 관점을 구하세요.",
        finance:
          "The reversed Hermit suggests either excessive financial worry in isolation or avoidance of financial responsibilities. You may benefit from seeking financial counsel rather than trying to figure everything out alone. Don't let pride prevent you from asking for help.",
        financeKo:
          "역방향 은둔자는 고립 속 과도한 재정적 걱정이나 재정적 책임 회피를 암시합니다. 모든 것을 혼자 해결하려 하기보다 재정 상담을 구하는 것이 유익할 수 있습니다. 자존심이 도움을 구하는 것을 방해하지 않게 하세요.",
        health:
          "The reversed Hermit warns against neglecting health through excessive isolation or refusing to seek medical help. Social isolation can negatively affect both mental and physical health. Reconnect with supportive people and don't face health challenges alone.",
        healthKo:
          "역방향 은둔자는 과도한 고립이나 의학적 도움을 구하는 것을 거부하여 건강을 방치하는 것을 경고합니다. 사회적 고립은 정신적, 신체적 건강 모두에 부정적 영향을 미칠 수 있습니다. 지지적인 사람들과 다시 연결하고 건강 문제를 혼자 맞서지 마세요.",
        spirituality:
          "Reversed, The Hermit suggests spiritual isolation that has become unhealthy, or a refusal to begin the inner work you know is necessary. You may be spiritually lost or using isolation as an escape from growth. Seek a spiritual community or guide to help you find your way.",
        spiritualityKo:
          "역방향으로 은둔자는 건강하지 못하게 된 영적 고립이나 필요하다고 아는 내면 작업을 시작하는 것을 거부하는 것을 암시합니다. 영적으로 길을 잃었거나 성장으로부터의 도피로 고립을 사용하고 있을 수 있습니다. 길을 찾는 데 도움이 될 영적 공동체나 안내자를 구하세요.",
      },
    },
    symbolism:
      "An old wise man stands atop a snowy mountain, cloaked in grey robes, holding a lantern containing a six-pointed star (the Seal of Solomon) in one hand and a tall staff in the other. The lantern lights only a few steps ahead, symbolizing that wisdom reveals itself gradually. The mountain peak represents spiritual attainment and the solitary journey of self-mastery.",
    symbolismKo:
      "늙은 현자가 눈 덮인 산꼭대기에 회색 예복을 입고 서서 한 손에는 여섯 꼭지 별(솔로몬의 인장)이 들어 있는 등불을, 다른 손에는 긴 지팡이를 들고 있습니다. 등불은 몇 걸음 앞만 비추어 지혜가 점진적으로 드러남을 상징합니다. 산봉우리는 영적 성취와 자기 숙달의 고독한 여정을 나타냅니다.",
    advice:
      "Seek solitude and listen to your inner voice. The answers you need are within you—take time for quiet reflection and trust the wisdom that emerges.",
    adviceKo:
      "고독을 추구하고 내면의 목소리에 귀 기울이세요. 필요한 답은 당신 안에 있습니다—조용한 성찰의 시간을 갖고 떠오르는 지혜를 신뢰하세요.",
    yesOrNo: "maybe",
    numerology:
      "Nine represents completion, wisdom, humanitarianism, and the culmination of a cycle. It is the number of the sage who has traveled the full journey and now shares their light with others.",
    numerologyKo:
      "9는 완성, 지혜, 인류애, 순환의 정점을 나타냅니다. 전체 여정을 여행하고 이제 빛을 다른 사람과 나누는 현자의 숫자입니다.",
    affirmation:
      "I find peace in solitude and trust the wisdom that comes from within.",
    affirmationKo: "나는 고독에서 평화를 찾고 내면에서 오는 지혜를 신뢰합니다.",
    cardBackEmoji: "🏔️",
    visualDescription:
      "An elderly sage in grey robes stands on a snow-covered mountain peak, holding a glowing lantern with a six-pointed star and a tall wooden staff, gazing into the darkness below.",
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameKo: "운명의 수레바퀴",
    arcana: "major",
    number: 10,
    element: "Fire",
    elementKo: "불",
    zodiac: "Jupiter",
    zodiacKo: "목성",
    planet: "Jupiter",
    planetKo: "목성",
    keywords: {
      upright: ["destiny", "cycles", "turning point", "luck", "change"],
      uprightKo: ["운명", "순환", "전환점", "행운", "변화"],
      reversed: [
        "bad luck",
        "resistance to change",
        "setbacks",
        "stagnation",
        "karma",
      ],
      reversedKo: ["불운", "변화에 대한 저항", "좌절", "정체", "업보"],
    },
    meaning: {
      upright: {
        general:
          "The Wheel of Fortune signals a turning point in your life—fate is spinning in your favor. Cycles are shifting, and what goes around comes around. Embrace change with optimism, as the universe is aligning events in your favor. Good luck and new opportunities are on the horizon.",
        generalKo:
          "운명의 수레바퀴는 삶의 전환점을 신호합니다—운명이 당신에게 유리하게 돌아가고 있습니다. 순환이 변하고 있으며 뿌린 대로 거둡니다. 우주가 사건들을 유리하게 정렬하고 있으므로 낙관적으로 변화를 받아들이세요. 행운과 새로운 기회가 다가오고 있습니다.",
        love: "The Wheel of Fortune brings a fateful change in your love life. A destined meeting or a significant shift in an existing relationship is likely. Trust that the universe is guiding your romantic path. Serendipity and synchronicity play a role in your love story.",
        loveKo:
          "운명의 수레바퀴는 사랑 생활에 운명적 변화를 가져옵니다. 운명적 만남이나 기존 관계의 중요한 변화가 예상됩니다. 우주가 로맨틱한 길을 인도하고 있음을 신뢰하세요. 세렌디피티와 동시성이 사랑 이야기에 역할을 합니다.",
        career:
          "A fortunate career change or unexpected professional opportunity is coming. The Wheel turns in your favor, bringing promotions, new positions, or exciting projects. Be ready to seize the moment when opportunity knocks.",
        careerKo:
          "운이 좋은 직업 변화나 예상치 못한 전문적 기회가 옵니다. 수레바퀴가 유리하게 돌아가며 승진, 새 직책, 또는 흥미진진한 프로젝트를 가져옵니다. 기회가 문을 두드릴 때 순간을 포착할 준비를 하세요.",
        finance:
          "Financial luck is on the upswing. Unexpected windfalls, profitable investments, or positive financial changes are indicated. The Wheel of Fortune reminds you that financial cycles are natural—save during abundance to prepare for leaner times.",
        financeKo:
          "재정적 행운이 상승세에 있습니다. 예상치 못한 횡재, 수익성 있는 투자, 또는 긍정적 재정 변화가 나타납니다. 운명의 수레바퀴는 재정 순환이 자연스러운 것임을 상기시킵니다—빈약한 시기에 대비하여 풍요 시 저축하세요.",
        health:
          "The Wheel of Fortune brings positive changes to health. Recovery accelerates, and health conditions may improve unexpectedly. Embrace new health routines and trust in your body's natural healing cycles. A change in treatment or lifestyle may prove beneficial.",
        healthKo:
          "운명의 수레바퀴는 건강에 긍정적 변화를 가져옵니다. 회복이 가속되고 건강 상태가 예상치 않게 호전될 수 있습니다. 새로운 건강 루틴을 받아들이고 몸의 자연적 치유 순환을 신뢰하세요. 치료나 생활 방식의 변화가 유익할 수 있습니다.",
        spirituality:
          "The Wheel of Fortune represents the spiritual law of karma and the cyclical nature of existence. Every experience serves your soul's evolution. Trust the divine timing of your spiritual journey and know that everything happens for a reason.",
        spiritualityKo:
          "운명의 수레바퀴는 업보의 영적 법칙과 존재의 순환적 본질을 나타냅니다. 모든 경험이 영혼의 진화에 기여합니다. 영적 여정의 신성한 타이밍을 신뢰하고 모든 것이 이유 있게 일어남을 알으세요.",
      },
      reversed: {
        general:
          "The reversed Wheel of Fortune indicates a downturn, bad luck, or resistance to inevitable change. You may feel that forces beyond your control are working against you. Remember that every downturn is temporary—the wheel will turn again. Use this time to build resilience and learn from setbacks.",
        generalKo:
          "역방향 운명의 수레바퀴는 하락, 불운, 또는 피할 수 없는 변화에 대한 저항을 나타냅니다. 통제 밖의 힘이 당신에게 불리하게 작용하고 있다고 느낄 수 있습니다. 모든 하락은 일시적임을 기억하세요—수레바퀴는 다시 돌 것입니다. 이 시간을 활용하여 회복력을 기르고 좌절에서 배우세요.",
        love: "Reversed in love, The Wheel of Fortune suggests relationship setbacks or feeling stuck in a romantic rut. External circumstances may be putting pressure on your love life. Patience is key—the cycle will shift, and better times will come.",
        loveKo:
          "역방향 사랑에서 운명의 수레바퀴는 관계 좌절이나 로맨틱한 정체감에 갇힌 느낌을 암시합니다. 외부 상황이 사랑 생활에 압력을 가하고 있을 수 있습니다. 인내가 핵심입니다—순환이 변하고 더 나은 시기가 올 것입니다.",
        career:
          "Professional setbacks or unexpected disruptions may occur. The reversed Wheel warns against resisting necessary career changes. What seems like bad luck may be redirecting you toward a better path. Stay adaptable and look for the lesson in every challenge.",
        careerKo:
          "직업적 좌절이나 예상치 못한 중단이 발생할 수 있습니다. 역방향 수레바퀴는 필요한 직업 변화에 저항하는 것을 경고합니다. 불운처럼 보이는 것이 더 나은 길로 재방향을 설정하고 있을 수 있습니다. 적응력을 유지하고 모든 도전에서 교훈을 찾으세요.",
        finance:
          "Financial setbacks or unexpected expenses are possible. The reversed Wheel of Fortune reminds you that financial cycles include downturns. Avoid risky financial behavior and focus on building stability. This difficult period will pass.",
        financeKo:
          "재정적 좌절이나 예상치 못한 지출이 가능합니다. 역방향 운명의 수레바퀴는 재정 순환에 하락도 포함됨을 상기시킵니다. 위험한 재정 행동을 피하고 안정성 구축에 집중하세요. 이 어려운 시기는 지나갈 것입니다.",
        health:
          "Health setbacks or recurring issues may resurface. The reversed Wheel suggests that health challenges are part of a cycle that will eventually improve. Don't lose hope—continue with treatment, maintain healthy habits, and trust in the process of healing.",
        healthKo:
          "건강 좌절이나 재발하는 문제가 다시 나타날 수 있습니다. 역방향 수레바퀴는 건강 문제가 결국 개선될 순환의 일부임을 암시합니다. 희망을 잃지 마세요—치료를 계속하고 건강한 습관을 유지하며 치유 과정을 신뢰하세요.",
        spirituality:
          "Reversed, The Wheel of Fortune invites you to examine your karma and the cycles you may be repeating. Spiritual stagnation is temporary, but requires conscious effort to overcome. Reflect on the patterns in your life and what the universe is trying to teach you.",
        spiritualityKo:
          "역방향으로 운명의 수레바퀴는 업보와 반복하고 있을 수 있는 순환을 점검하도록 초대합니다. 영적 정체는 일시적이지만 극복하기 위해 의식적 노력이 필요합니다. 삶의 패턴과 우주가 가르치려는 것에 대해 성찰하세요.",
      },
    },
    symbolism:
      "A great wheel floats in the sky surrounded by clouds, with the figures of a sphinx, a serpent, and Anubis riding its rim, representing the rising, falling, and balancing forces of fate. In the four corners sit the four fixed signs of the zodiac—the angel (Aquarius), the eagle (Scorpio), the lion (Leo), and the bull (Taurus)—each reading from a book of wisdom.",
    symbolismKo:
      "커다란 수레바퀴가 구름에 둘러싸여 하늘에 떠 있으며 스핑크스, 뱀, 아누비스의 형상이 가장자리에 타고 있어 운명의 상승, 하락, 균형 잡는 힘을 나타냅니다. 네 모서리에는 황도대의 네 고정 별자리—천사(물병자리), 독수리(전갈자리), 사자(사자자리), 황소(황소자리)—가 각각 지혜의 책을 읽으며 앉아 있습니다.",
    advice:
      "Embrace change as the natural order of life. What rises will fall, and what falls will rise again. Trust in divine timing and know that fortune favors the adaptable.",
    adviceKo:
      "변화를 삶의 자연스러운 질서로 받아들이세요. 올라가는 것은 내려오고 내려간 것은 다시 올라갑니다. 신성한 타이밍을 신뢰하고 행운은 적응력 있는 자에게 미소 짓는다는 것을 알으세요.",
    yesOrNo: "yes",
    numerology:
      "Ten represents completion of a cycle, wholeness, and the return to one at a higher level. It combines the independence of one with the infinite potential of zero, signifying the end of one chapter and the beginning of the next.",
    numerologyKo:
      "10은 순환의 완성, 전체성, 더 높은 수준에서의 하나로의 복귀를 나타냅니다. 1의 독립성과 0의 무한한 잠재력을 결합하여 한 장의 끝과 다음 장의 시작을 의미합니다.",
    affirmation:
      "I trust in the cycles of life and embrace every change as an opportunity for growth.",
    affirmationKo:
      "나는 삶의 순환을 신뢰하며 모든 변화를 성장의 기회로 받아들입니다.",
    cardBackEmoji: "🎡",
    visualDescription:
      "A great golden wheel floats among clouds, bearing a sphinx at the top, a serpent descending on one side, and Anubis rising on the other, with four winged creatures reading books in each corner.",
  },
];
