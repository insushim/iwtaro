import { TarotCard } from "@/types/tarot";

export const majorArcana2: TarotCard[] = [
  {
    id: 11,
    name: "Justice",
    nameKo: "정의",
    arcana: "major",
    number: 11,
    element: "Air",
    elementKo: "공기",
    zodiac: "Libra",
    zodiacKo: "천칭자리",
    keywords: {
      upright: ["justice", "fairness", "truth", "cause and effect", "law"],
      uprightKo: ["정의", "공정", "진실", "인과응보", "법"],
      reversed: [
        "unfairness",
        "dishonesty",
        "lack of accountability",
        "injustice",
      ],
      reversedKo: ["불공정", "부정직", "책임 회피", "부정의"],
    },
    meaning: {
      upright: {
        general:
          "Justice represents fairness, truth, and the law of cause and effect. You are being called to account for your actions and to make decisions based on integrity and honesty. The scales of Justice remind you that every action has a consequence, and balance must be restored.",
        generalKo:
          "정의 카드는 공정함, 진실, 그리고 인과의 법칙을 나타냅니다. 당신은 자신의 행동에 대해 책임을 지고, 정직과 성실함에 기반한 결정을 내려야 합니다. 정의의 저울은 모든 행동에는 결과가 따르며, 균형이 회복되어야 함을 상기시킵니다.",
        love: "In love, Justice indicates a relationship built on mutual respect, equality, and honest communication. If you have been fair and loving, you will receive the same in return. Legal matters related to relationships, such as marriage or divorce, may be highlighted.",
        loveKo:
          "사랑에서 정의 카드는 상호 존중, 평등, 솔직한 소통 위에 세워진 관계를 나타냅니다. 당신이 공정하고 사랑스러웠다면 같은 것을 돌려받을 것입니다. 결혼이나 이혼 같은 관계와 관련된 법적 문제가 부각될 수 있습니다.",
        career:
          "Justice in career readings suggests that fairness will prevail in workplace matters. Legal contracts, negotiations, or disputes will be resolved justly. Your hard work and ethical behavior will be recognized and rewarded appropriately.",
        careerKo:
          "직업 관련 리딩에서 정의 카드는 직장 문제에서 공정함이 승리할 것을 암시합니다. 법적 계약, 협상 또는 분쟁이 정당하게 해결될 것입니다. 당신의 노력과 윤리적 행동이 인정받고 적절히 보상받을 것입니다.",
        finance:
          "Financial justice is at play—what you have sown, you shall reap. Fair financial dealings will bring positive returns. Be honest in all monetary transactions, and ensure contracts and agreements are balanced and equitable.",
        financeKo:
          "재정적 정의가 작용하고 있습니다—뿌린 대로 거둘 것입니다. 공정한 금전 거래는 긍정적인 수익을 가져올 것입니다. 모든 금전 거래에서 정직하고, 계약과 합의가 균형 잡히고 공평한지 확인하세요.",
        health:
          "Justice in health suggests the need for balance in your lifestyle. The consequences of past health choices are manifesting now. Take a balanced approach to diet, exercise, and rest, and seek proper medical advice for any concerns.",
        healthKo:
          "건강에서 정의 카드는 생활방식의 균형이 필요함을 시사합니다. 과거 건강 선택의 결과가 지금 나타나고 있습니다. 식이, 운동, 휴식에 균형 잡힌 접근을 취하고, 우려 사항에 대해 적절한 의료 조언을 구하세요.",
        spirituality:
          "Justice calls you to examine your karma and the spiritual law of cause and effect. Align your actions with your highest values and seek truth in all spiritual matters. This is a time to practice radical honesty with yourself.",
        spiritualityKo:
          "정의 카드는 당신의 카르마와 영적 인과법칙을 살펴볼 것을 요청합니다. 행동을 최고의 가치와 일치시키고 모든 영적 문제에서 진실을 추구하세요. 자신에게 철저한 정직을 실천할 때입니다.",
      },
      reversed: {
        general:
          "Reversed Justice warns of dishonesty, unfairness, or a refusal to accept responsibility. Someone may be avoiding accountability or manipulating the truth. Legal matters may not go in your favor, or there may be bias and corruption at play.",
        generalKo:
          "역방향 정의 카드는 부정직, 불공정, 또는 책임을 받아들이기를 거부함을 경고합니다. 누군가가 책임을 회피하거나 진실을 조작하고 있을 수 있습니다. 법적 문제가 당신에게 유리하지 않을 수 있으며, 편견과 부패가 작용할 수 있습니다.",
        love: "Reversed Justice in love indicates inequality, dishonesty, or unfair treatment in a relationship. One partner may be taking more than they give, or there could be deception. Unresolved conflicts need to be addressed with honesty.",
        loveKo:
          "역방향 정의 카드는 관계에서의 불평등, 부정직 또는 불공정한 대우를 나타냅니다. 한 파트너가 주는 것보다 더 많이 가져가고 있을 수 있으며, 속임수가 있을 수 있습니다. 해결되지 않은 갈등을 정직하게 다뤄야 합니다.",
        career:
          "Injustice may be occurring in your workplace. You might face unfair treatment, discrimination, or unethical practices. Be cautious with legal documents and contracts, as the terms may not be in your best interest.",
        careerKo:
          "직장에서 불의가 발생하고 있을 수 있습니다. 불공정한 대우, 차별 또는 비윤리적 관행에 직면할 수 있습니다. 법적 문서와 계약서에 주의하세요. 조건이 당신에게 최선이 아닐 수 있습니다.",
        finance:
          "Financial unfairness or dishonest dealings may be affecting you. Be wary of scams, unfair contracts, or hidden fees. Avoid cutting corners in financial matters, as the consequences will catch up with you.",
        financeKo:
          "재정적 불공정 또는 부정직한 거래가 당신에게 영향을 미칠 수 있습니다. 사기, 불공정한 계약 또는 숨겨진 수수료를 경계하세요. 재정 문제에서 편법을 쓰지 마세요. 결과가 당신을 따라잡을 것입니다.",
        health:
          "You may be ignoring the consequences of unhealthy habits or avoiding necessary medical attention. There could be a lack of balance in your health routine. Take responsibility for your wellbeing and seek honest assessments of your health.",
        healthKo:
          "건강하지 못한 습관의 결과를 무시하거나 필요한 의료 조치를 피하고 있을 수 있습니다. 건강 루틴에 균형이 부족할 수 있습니다. 자신의 건강에 책임을 지고 정직한 건강 평가를 받으세요.",
        spirituality:
          "You may be avoiding spiritual truths or refusing to accept the karmic consequences of your actions. Self-deception is blocking your growth. Examine where you are being dishonest with yourself and commit to a path of integrity.",
        spiritualityKo:
          "영적 진실을 회피하거나 행동의 카르마적 결과를 받아들이기를 거부하고 있을 수 있습니다. 자기기만이 성장을 막고 있습니다. 자신에게 부정직한 부분을 살펴보고 성실함의 길에 전념하세요.",
      },
    },
    symbolism:
      "The figure of Justice sits between two pillars, holding a sword in the right hand representing logic and decision, and scales in the left hand representing intuition and balance. The crown signifies ordered thought, and the red robe symbolizes passion for justice. The square clasp at the throat represents the law of balance.",
    symbolismKo:
      "정의의 인물은 두 기둥 사이에 앉아, 오른손에 논리와 결정을 나타내는 검을, 왼손에 직관과 균형을 나타내는 저울을 들고 있습니다. 왕관은 질서 있는 사고를 의미하고, 빨간 로브는 정의에 대한 열정을 상징합니다. 목의 사각형 걸쇠는 균형의 법칙을 나타냅니다.",
    advice:
      "Be honest with yourself and others. Take responsibility for your actions and seek fairness in all dealings. The truth will come to light.",
    adviceKo:
      "자신과 다른 사람에게 정직하세요. 행동에 책임을 지고 모든 거래에서 공정함을 추구하세요. 진실은 밝혀질 것입니다.",
    yesOrNo: "maybe",
    numerology:
      "Number 11 represents higher intuition, spiritual insight, and the balance between the material and spiritual worlds. It is a master number that calls for fairness and alignment with truth.",
    numerologyKo:
      "숫자 11은 높은 직관, 영적 통찰, 물질 세계와 영적 세계의 균형을 나타냅니다. 공정함과 진실에 대한 정렬을 요구하는 마스터 넘버입니다.",
    affirmation:
      "I act with integrity and accept the consequences of my choices.",
    affirmationKo: "나는 성실하게 행동하고 내 선택의 결과를 받아들입니다.",
    cardBackEmoji: "⚖️",
    visualDescription:
      "A crowned figure sits on a stone throne between two grey pillars, holding a double-edged sword upright in the right hand and golden scales in the left. A red robe drapes over one shoulder, with a green mantle beneath. A purple veil hangs between the pillars behind.",
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameKo: "매달린 사람",
    arcana: "major",
    number: 12,
    element: "Water",
    elementKo: "물",
    zodiac: "Pisces",
    zodiacKo: "물고기자리",
    planet: "Neptune",
    planetKo: "해왕성",
    keywords: {
      upright: [
        "surrender",
        "letting go",
        "new perspective",
        "sacrifice",
        "pause",
      ],
      uprightKo: ["항복", "내려놓음", "새로운 관점", "희생", "멈춤"],
      reversed: ["resistance", "stalling", "indecision", "needless sacrifice"],
      reversedKo: ["저항", "지연", "우유부단", "불필요한 희생"],
    },
    meaning: {
      upright: {
        general:
          "The Hanged Man represents a voluntary pause, suspension, and seeing the world from a completely new perspective. This is a time to let go of control, surrender to the flow of life, and allow wisdom to come through stillness. What seems like a sacrifice now will lead to profound insight and spiritual growth.",
        generalKo:
          "매달린 사람은 자발적인 멈춤, 유예, 그리고 완전히 새로운 관점에서 세상을 보는 것을 나타냅니다. 통제를 내려놓고, 삶의 흐름에 항복하며, 고요함을 통해 지혜가 오도록 허용할 때입니다. 지금 희생처럼 보이는 것이 깊은 통찰과 영적 성장으로 이어질 것입니다.",
        love: "In love, The Hanged Man suggests pausing to reassess your relationship from a different angle. You may need to sacrifice personal desires for the greater good of the partnership. If single, this is a time to release old patterns and see love with fresh eyes.",
        loveKo:
          "사랑에서 매달린 사람은 다른 각도에서 관계를 재평가하기 위해 멈출 것을 제안합니다. 관계의 더 큰 이익을 위해 개인적 욕구를 희생해야 할 수 있습니다. 싱글이라면 오래된 패턴을 버리고 새로운 눈으로 사랑을 볼 때입니다.",
        career:
          "Your career may feel stalled, but this pause is purposeful. Use this time to reflect on your professional path and consider new approaches. A project may be delayed, but this allows for better planning and a shift in strategy that will prove beneficial.",
        careerKo:
          "경력이 정체된 것처럼 느껴질 수 있지만, 이 멈춤은 목적이 있습니다. 이 시간을 활용해 직업 경로를 돌아보고 새로운 접근법을 고려하세요. 프로젝트가 지연될 수 있지만, 이것이 더 나은 계획과 유익한 전략 전환을 가능하게 합니다.",
        finance:
          "Financial matters require patience and a willingness to wait. Investments may not yield immediate returns, but patience will be rewarded. Consider looking at your financial situation from a new angle—unconventional approaches may reveal hidden opportunities.",
        financeKo:
          "재정 문제는 인내와 기다림의 의지가 필요합니다. 투자가 즉각적인 수익을 내지 않을 수 있지만, 인내는 보상받을 것입니다. 재정 상황을 새로운 각도에서 바라보세요—비전통적 접근이 숨겨진 기회를 드러낼 수 있습니다.",
        health:
          "The Hanged Man in health suggests slowing down and listening to your body. Rest and recuperation are essential right now. Consider alternative healing modalities or approaches you haven't tried before. Stress reduction through meditation or mindfulness is strongly indicated.",
        healthKo:
          "건강에서 매달린 사람은 속도를 줄이고 몸의 소리를 들을 것을 제안합니다. 지금 휴식과 회복이 필수적입니다. 시도해보지 않은 대안적 치유법이나 접근법을 고려하세요. 명상이나 마음챙김을 통한 스트레스 감소가 강하게 권장됩니다.",
        spirituality:
          "This is a powerful time for spiritual awakening and enlightenment. Surrender your ego and allow divine wisdom to flow through you. Meditation, contemplation, and spiritual practices that require stillness will bring profound revelations and inner peace.",
        spiritualityKo:
          "영적 각성과 깨달음을 위한 강력한 시간입니다. 에고를 내려놓고 신성한 지혜가 흐르도록 허용하세요. 명상, 관조, 그리고 고요함을 필요로 하는 영적 수련이 깊은 깨달음과 내면의 평화를 가져올 것입니다.",
      },
      reversed: {
        general:
          "Reversed, The Hanged Man indicates resistance to necessary change or an unwillingness to see things differently. You may be making needless sacrifices or feeling stuck because you refuse to let go. Stop clinging to the old way and open yourself to new perspectives.",
        generalKo:
          "역방향 매달린 사람은 필요한 변화에 대한 저항 또는 다르게 보려는 의지의 부족을 나타냅니다. 불필요한 희생을 하고 있거나 놓아주기를 거부해서 막혀있다고 느낄 수 있습니다. 오래된 방식에 집착하는 것을 멈추고 새로운 관점에 자신을 열어두세요.",
        love: "You may be resisting change in your love life or refusing to see a relationship for what it truly is. Stubbornness and an unwillingness to compromise are creating stagnation. Let go of rigid expectations and be open to a different way of connecting.",
        loveKo:
          "연애에서 변화를 거부하거나 관계의 실체를 보려 하지 않을 수 있습니다. 고집과 타협 의지 부족이 정체를 만들고 있습니다. 경직된 기대를 내려놓고 다른 방식의 연결에 열려 있으세요.",
        career:
          "You are resisting a necessary career change or clinging to a path that no longer serves you. Procrastination and indecision are keeping you stuck. Take action rather than continuing to wait—the pause has gone on long enough.",
        careerKo:
          "필요한 경력 변화를 거부하거나 더 이상 도움이 되지 않는 길에 매달리고 있습니다. 미루기와 우유부단이 당신을 묶어두고 있습니다. 계속 기다리기보다 행동을 취하세요—멈춤은 충분히 길었습니다.",
        finance:
          "You may be stubbornly clinging to a failing financial strategy or making unnecessary sacrifices. Stop throwing good money after bad. It's time to take practical action rather than waiting for circumstances to change on their own.",
        financeKo:
          "실패하는 재정 전략에 고집스럽게 매달리거나 불필요한 희생을 하고 있을 수 있습니다. 좋은 돈을 나쁜 데 쏟는 것을 멈추세요. 상황이 저절로 바뀌기를 기다리기보다 실질적 행동을 취할 때입니다.",
        health:
          "You may be ignoring your body's need for rest, or conversely, using illness as an excuse to avoid life. Stagnant energy needs to be moved. Break out of unhealthy patterns and take proactive steps toward healing rather than remaining passive.",
        healthKo:
          "몸이 필요로 하는 휴식을 무시하거나, 반대로 질병을 삶을 회피하는 핑계로 사용하고 있을 수 있습니다. 정체된 에너지를 움직여야 합니다. 건강하지 못한 패턴에서 벗어나 수동적으로 남기보다 치유를 향한 적극적 조치를 취하세요.",
        spirituality:
          "Spiritual stagnation may result from resisting the surrender needed for growth. You might be going through the motions of spiritual practice without true commitment. Release your ego's need for control and allow genuine transformation to occur.",
        spiritualityKo:
          "성장에 필요한 항복을 거부하면서 영적 정체가 올 수 있습니다. 진정한 헌신 없이 영적 수련의 형식만 따르고 있을 수 있습니다. 에고의 통제 욕구를 내려놓고 진정한 변화가 일어나도록 허용하세요.",
      },
    },
    symbolism:
      "A man hangs upside down from a living T-shaped tree by one foot, with the other leg crossed behind the knee forming a figure four. His face is serene, with a golden halo around his head, symbolizing enlightenment through surrender. The tree represents the World Tree connecting heaven and earth, and the red pants symbolize passion while the blue tunic represents knowledge.",
    symbolismKo:
      "한 남자가 살아있는 T자형 나무에 한 발로 거꾸로 매달려 있으며, 다른 다리는 무릎 뒤에서 교차하여 4자를 형성합니다. 그의 얼굴은 평온하고 머리 주위에 금빛 후광이 있어 항복을 통한 깨달음을 상징합니다. 나무는 천지를 연결하는 세계수를 나타내며, 빨간 바지는 열정을, 파란 튜닉은 지식을 상징합니다.",
    advice:
      "Let go and see things from a new perspective. Sometimes the greatest wisdom comes from stillness and surrender rather than action.",
    adviceKo:
      "내려놓고 새로운 관점에서 사물을 보세요. 때로는 가장 큰 지혜가 행동이 아닌 고요함과 항복에서 옵니다.",
    yesOrNo: "maybe",
    numerology:
      "Number 12 reduces to 3 (1+2), representing creative expression and the synthesis of body, mind, and spirit. It signifies the completion of a cycle and the wisdom gained through experience and sacrifice.",
    numerologyKo:
      "숫자 12는 3으로 환원되며(1+2), 창조적 표현과 몸, 마음, 정신의 통합을 나타냅니다. 한 주기의 완성과 경험 및 희생을 통해 얻은 지혜를 의미합니다.",
    affirmation:
      "I surrender to the flow of life and trust that stillness brings wisdom.",
    affirmationKo:
      "나는 삶의 흐름에 항복하고 고요함이 지혜를 가져다준다고 믿습니다.",
    cardBackEmoji: "🙃",
    visualDescription:
      "A serene man hangs upside down from a T-shaped wooden cross made from a living tree with green leaves. His right foot is tied to the beam, his left leg crosses behind the right knee. A golden halo glows around his head. He wears red pants and a blue tunic, with his hands behind his back.",
  },
  {
    id: 13,
    name: "Death",
    nameKo: "죽음",
    arcana: "major",
    number: 13,
    element: "Water",
    elementKo: "물",
    zodiac: "Scorpio",
    zodiacKo: "전갈자리",
    keywords: {
      upright: ["endings", "transformation", "transition", "change", "release"],
      uprightKo: ["끝", "변환", "전환", "변화", "해방"],
      reversed: [
        "resistance to change",
        "fear of endings",
        "stagnation",
        "inability to move on",
      ],
      reversedKo: [
        "변화에 대한 저항",
        "끝에 대한 두려움",
        "정체",
        "나아가지 못함",
      ],
    },
    meaning: {
      upright: {
        general:
          "Death signifies profound transformation, endings that make way for new beginnings, and the natural cycle of life. This is not a card of literal death, but of necessary change and metamorphosis. Something in your life is coming to a close, clearing the path for a fresh chapter filled with renewed purpose.",
        generalKo:
          "죽음 카드는 심오한 변환, 새로운 시작을 위한 끝, 그리고 삶의 자연스러운 순환을 의미합니다. 이것은 문자 그대로의 죽음이 아니라 필요한 변화와 변태의 카드입니다. 삶의 무언가가 마무리되고 있으며, 새로운 목적으로 가득 찬 새 장을 위한 길을 열고 있습니다.",
        love: "In love, Death indicates a major transformation in your relationship. An old dynamic is ending to make room for something more authentic. If single, you are shedding old relationship patterns and beliefs that have kept you from finding genuine love. Embrace this metamorphosis.",
        loveKo:
          "사랑에서 죽음 카드는 관계의 큰 변환을 나타냅니다. 더 진정성 있는 것을 위한 공간을 만들기 위해 오래된 역학이 끝나고 있습니다. 싱글이라면 진정한 사랑을 찾는 것을 막아온 오래된 관계 패턴과 신념을 벗어던지고 있습니다.",
        career:
          "A significant career change is underway. A job, project, or professional identity is coming to an end, but this creates space for new opportunities aligned with your true path. Embrace the transition rather than clinging to what was.",
        careerKo:
          "중대한 경력 변화가 진행 중입니다. 직업, 프로젝트 또는 직업적 정체성이 끝나가고 있지만, 이것은 진정한 길에 맞는 새로운 기회를 위한 공간을 만듭니다. 과거에 매달리기보다 전환을 받아들이세요.",
        finance:
          "Financial transformation is occurring. Old sources of income may be ending, but new ones are emerging. This is a time to release attachment to material security and trust that the financial changes happening now are leading you to a more sustainable situation.",
        financeKo:
          "재정적 변환이 일어나고 있습니다. 오래된 수입원이 끝날 수 있지만 새로운 것이 나타나고 있습니다. 물질적 안정에 대한 집착을 내려놓고, 지금 일어나는 재정 변화가 더 지속 가능한 상황으로 이끌고 있음을 믿을 때입니다.",
        health:
          "Death in health readings signifies the end of an old health pattern and the beginning of a new one. Old habits must die for healing to occur. This can indicate recovery from illness, a major lifestyle change, or the release of long-held stress and emotional baggage.",
        healthKo:
          "건강 리딩에서 죽음 카드는 오래된 건강 패턴의 끝과 새로운 패턴의 시작을 의미합니다. 치유가 일어나려면 오래된 습관이 죽어야 합니다. 질병으로부터의 회복, 주요 생활방식 변화, 또는 오래 지니고 있던 스트레스와 감정적 짐의 해방을 나타낼 수 있습니다.",
        spirituality:
          "You are undergoing a spiritual death and rebirth. Old beliefs, identities, and ego attachments are falling away, making room for a deeper, more authentic spiritual connection. This is the dark night of the soul that precedes illumination.",
        spiritualityKo:
          "영적 죽음과 재탄생을 겪고 있습니다. 오래된 신념, 정체성, 에고의 집착이 떨어져 나가며, 더 깊고 진정한 영적 연결을 위한 공간을 만들고 있습니다. 이것은 깨달음에 앞서는 영혼의 어두운 밤입니다.",
      },
      reversed: {
        general:
          "Reversed Death indicates resistance to inevitable change, fear of letting go, or clinging to something that has already ended. You may be fighting a losing battle against transformation. Stagnation results when you refuse to release what no longer serves you.",
        generalKo:
          "역방향 죽음 카드는 피할 수 없는 변화에 대한 저항, 놓아줌에 대한 두려움, 또는 이미 끝난 것에 매달림을 나타냅니다. 변환에 대해 이길 수 없는 싸움을 하고 있을 수 있습니다. 더 이상 도움이 되지 않는 것을 놓아주기를 거부하면 정체가 됩니다.",
        love: "You are holding onto a relationship that has run its course or refusing to let go of past heartbreak. Fear of being alone or fear of change is keeping you trapped in an unhealthy dynamic. Release the old to make room for love that truly nourishes you.",
        loveKo:
          "수명이 다한 관계에 매달리거나 과거의 상처를 놓아주기를 거부하고 있습니다. 혼자가 되는 것에 대한 두려움이나 변화에 대한 두려움이 건강하지 못한 역학에 갇히게 하고 있습니다. 진정으로 자양분을 주는 사랑을 위한 공간을 만들기 위해 오래된 것을 놓아주세요.",
        career:
          "You may be clinging to a dead-end job or career path out of fear. Refusing to accept that a professional chapter has ended is causing stagnation and frustration. Accept the ending gracefully and trust that new professional opportunities await.",
        careerKo:
          "두려움 때문에 막다른 직업이나 경력 경로에 매달리고 있을 수 있습니다. 직업적 장이 끝났음을 받아들이기를 거부하는 것이 정체와 좌절을 야기하고 있습니다. 끝을 우아하게 받아들이고 새로운 직업적 기회가 기다리고 있음을 믿으세요.",
        finance:
          "Financial stagnation results from refusing to change your approach to money. You may be holding onto losing investments or an outdated financial plan. Let go of what is no longer working and be open to new financial strategies.",
        financeKo:
          "돈에 대한 접근을 바꾸기를 거부하면서 재정적 정체가 발생합니다. 손실이 나는 투자나 시대에 뒤떨어진 재정 계획에 매달리고 있을 수 있습니다. 더 이상 효과가 없는 것을 놓아주고 새로운 재정 전략에 열려 있으세요.",
        health:
          "You are resisting the lifestyle changes needed for better health. Clinging to old habits that are harming you will only prolong suffering. Acknowledge what needs to end—whether it's a bad diet, lack of exercise, or toxic stress—and commit to change.",
        healthKo:
          "더 나은 건강을 위해 필요한 생활방식 변화를 거부하고 있습니다. 해를 끼치는 오래된 습관에 매달리는 것은 고통만 연장시킬 뿐입니다. 나쁜 식단, 운동 부족, 독성 스트레스 등 끝내야 할 것을 인정하고 변화에 전념하세요.",
        spirituality:
          "You are resisting a necessary spiritual transformation, clinging to outdated beliefs or spiritual identity. Ego death feels threatening, but it is essential for growth. Stop fighting the dissolution of old patterns and trust the rebirth process.",
        spiritualityKo:
          "필요한 영적 변환을 거부하고, 시대에 뒤떨어진 신념이나 영적 정체성에 매달리고 있습니다. 에고의 죽음이 위협적으로 느껴지지만 성장에 필수적입니다. 오래된 패턴의 해체와 싸우는 것을 멈추고 재탄생 과정을 믿으세요.",
      },
    },
    symbolism:
      "A skeleton in black armor rides a white horse, carrying a black flag with a white five-petaled rose, the Mystic Rose of life. Before the horse, a king lies fallen, a bishop pleads, and a maiden and child await. The sun sets between two towers in the background, symbolizing the ending of a day and the promise of a new dawn. The river in the background flows toward the horizon, signifying the constant flow of life.",
    symbolismKo:
      "검은 갑옷을 입은 해골이 백마를 타고, 생명의 신비로운 장미인 흰 다섯 잎 장미가 그려진 검은 깃발을 들고 있습니다. 말 앞에 왕이 쓰러져 있고, 주교가 간청하며, 처녀와 아이가 기다립니다. 배경에서 태양이 두 탑 사이로 지고 있어 하루의 끝과 새 새벽의 약속을 상징합니다. 배경의 강은 수평선을 향해 흘러 삶의 끊임없는 흐름을 나타냅니다.",
    advice:
      "Embrace the ending before you. Transformation is not something to fear—it is the doorway to rebirth and renewal. Let go gracefully.",
    adviceKo:
      "당신 앞의 끝을 받아들이세요. 변환은 두려워할 것이 아니라 재탄생과 갱신의 문입니다. 우아하게 놓아주세요.",
    yesOrNo: "no",
    numerology:
      "Number 13 is associated with transformation, upheaval, and the destruction of the old to make way for the new. In tarot, it signifies the completion of one cycle and the initiation of another, representing the eternal dance of death and rebirth.",
    numerologyKo:
      "숫자 13은 변환, 격변, 그리고 새로운 것을 위해 오래된 것의 파괴와 관련됩니다. 타로에서 한 주기의 완성과 또 다른 주기의 시작을 의미하며, 죽음과 재탄생의 영원한 춤을 나타냅니다.",
    affirmation:
      "I release what no longer serves me and welcome transformation with open arms.",
    affirmationKo:
      "나는 더 이상 도움이 되지 않는 것을 놓아주고 열린 마음으로 변환을 환영합니다.",
    cardBackEmoji: "💀",
    visualDescription:
      "A skeleton in black armor rides a pale white horse across a barren landscape. It carries a black banner bearing a white mystic rose. Before the horse, a fallen king, a pleading bishop, a fainting maiden, and a curious child. In the background, the sun sets between two towers over a distant river.",
  },
  {
    id: 14,
    name: "Temperance",
    nameKo: "절제",
    arcana: "major",
    number: 14,
    element: "Fire",
    elementKo: "불",
    zodiac: "Sagittarius",
    zodiacKo: "궁수자리",
    keywords: {
      upright: ["balance", "moderation", "patience", "harmony", "purpose"],
      uprightKo: ["균형", "절제", "인내", "조화", "목적"],
      reversed: ["imbalance", "excess", "impatience", "lack of harmony"],
      reversedKo: ["불균형", "과잉", "성급함", "조화 부족"],
    },
    meaning: {
      upright: {
        general:
          "Temperance represents balance, moderation, and the art of blending opposites into harmony. An angelic figure pours water between two cups, symbolizing the flow between conscious and subconscious, material and spiritual. This card calls you to find the middle path, exercise patience, and trust the process of gradual transformation.",
        generalKo:
          "절제 카드는 균형, 절제, 그리고 반대되는 것들을 조화롭게 혼합하는 기술을 나타냅니다. 천사 같은 인물이 두 잔 사이로 물을 부으며, 의식과 무의식, 물질과 영성 사이의 흐름을 상징합니다. 이 카드는 중도의 길을 찾고, 인내를 발휘하며, 점진적 변환 과정을 믿으라고 요청합니다.",
        love: "Temperance in love signifies a harmonious, balanced relationship built on mutual respect and patience. If in a relationship, you are finding the right blend of togetherness and independence. If single, this card suggests that love will come when you find balance within yourself first.",
        loveKo:
          "사랑에서 절제 카드는 상호 존중과 인내 위에 세워진 조화로운 균형 잡힌 관계를 나타냅니다. 관계 중이라면 함께함과 독립의 적절한 조합을 찾고 있습니다. 싱글이라면 먼저 자신 안에서 균형을 찾을 때 사랑이 올 것을 암시합니다.",
        career:
          "Balance and patience are key to your career success right now. Avoid extreme measures and instead take a measured, moderate approach. Collaboration and the blending of different skills or ideas will produce the best results. A period of steady, purposeful progress is indicated.",
        careerKo:
          "지금 경력 성공의 핵심은 균형과 인내입니다. 극단적 조치를 피하고 대신 신중하고 절제된 접근을 취하세요. 협력과 다양한 기술이나 아이디어의 혼합이 최고의 결과를 만들어낼 것입니다. 꾸준하고 목적 있는 진전의 시기가 나타납니다.",
        finance:
          "Financial moderation is advised. Avoid extravagant spending or overly risky investments. A balanced approach to saving and spending will serve you well. Patience with financial growth will yield better long-term results than quick schemes.",
        financeKo:
          "재정적 절제가 권장됩니다. 사치스러운 지출이나 지나치게 위험한 투자를 피하세요. 저축과 지출에 균형 잡힌 접근이 도움이 될 것입니다. 재정 성장에 대한 인내가 빠른 계획보다 더 나은 장기 결과를 가져올 것입니다.",
        health:
          "Temperance strongly indicates the need for a balanced, holistic approach to health. Moderation in diet, exercise, and lifestyle habits is essential. Healing is occurring gradually—be patient with your body. Integrative medicine combining conventional and alternative approaches may be beneficial.",
        healthKo:
          "절제 카드는 건강에 대한 균형 잡힌 총체적 접근의 필요성을 강하게 나타냅니다. 식이, 운동, 생활 습관에서의 절제가 필수적입니다. 치유가 점진적으로 일어나고 있으니 몸에 인내하세요. 전통적 접근과 대안적 접근을 결합한 통합 의학이 도움이 될 수 있습니다.",
        spirituality:
          "Temperance calls for spiritual balance and the integration of all aspects of yourself. You are learning to walk the middle path, blending earthly experience with spiritual wisdom. Practice patience in your spiritual development—enlightenment is a gradual process.",
        spiritualityKo:
          "절제 카드는 영적 균형과 자신의 모든 측면의 통합을 요청합니다. 세속적 경험과 영적 지혜를 혼합하며 중도의 길을 걷는 것을 배우고 있습니다. 영적 발전에서 인내를 실천하세요—깨달음은 점진적인 과정입니다.",
      },
      reversed: {
        general:
          "Reversed Temperance indicates imbalance, excess, or a lack of moderation. You may be going to extremes, overindulging, or forcing things rather than allowing them to unfold naturally. Impatience is disrupting the harmony you need. Recalibrate and find your center again.",
        generalKo:
          "역방향 절제 카드는 불균형, 과잉, 또는 절제의 부족을 나타냅니다. 극단으로 가거나, 과도하게 탐닉하거나, 자연스럽게 펼쳐지도록 하기보다 억지로 밀어붙이고 있을 수 있습니다. 성급함이 필요한 조화를 방해하고 있습니다. 재조정하고 다시 중심을 찾으세요.",
        love: "Imbalance in your relationship is causing conflict. One partner may be giving too much while the other takes. Extremes of jealousy, possessiveness, or emotional volatility are disrupting harmony. Step back and work on restoring equilibrium.",
        loveKo:
          "관계의 불균형이 갈등을 일으키고 있습니다. 한 파트너가 너무 많이 주는 반면 다른 쪽은 가져가기만 할 수 있습니다. 질투, 소유욕, 감정적 불안정의 극단이 조화를 방해하고 있습니다. 한 발 물러서서 균형 회복을 위해 노력하세요.",
        career:
          "You may be overworking or underperforming—neither extreme is sustainable. Conflict with colleagues may stem from a lack of cooperation or competing agendas. Find a way to bring balance back to your professional life before burnout takes hold.",
        careerKo:
          "과로하거나 실적이 부진할 수 있습니다—어느 극단도 지속 가능하지 않습니다. 동료와의 갈등은 협력 부족이나 경쟁적 의제에서 비롯될 수 있습니다. 번아웃이 오기 전에 직업 생활에 균형을 되찾을 방법을 찾으세요.",
        finance:
          "Financial excess or poor money management is indicated. Overspending, gambling, or making impulsive financial decisions will lead to problems. Pull back from extremes and create a balanced budget that supports your long-term goals.",
        financeKo:
          "재정적 과잉 또는 부실한 자금 관리가 나타납니다. 과소비, 도박 또는 충동적인 재정 결정은 문제를 초래할 것입니다. 극단에서 물러나 장기 목표를 지원하는 균형 잡힌 예산을 만드세요.",
        health:
          "Health problems may be stemming from excess—too much stress, overexertion, unhealthy eating habits, or substance abuse. Your body is out of balance. Take immediate steps to restore equilibrium through moderation and self-care.",
        healthKo:
          "건강 문제가 과잉에서 비롯될 수 있습니다—과도한 스트레스, 과로, 건강하지 못한 식습관 또는 약물 남용. 몸이 균형을 잃었습니다. 절제와 자기 관리를 통해 균형을 회복하기 위한 즉각적인 조치를 취하세요.",
        spirituality:
          "You have lost your spiritual balance, perhaps by becoming too extreme in your beliefs or neglecting your spiritual practice entirely. Reconnect with your inner wisdom and find the middle path. Avoid spiritual bypassing or using spirituality as an escape from reality.",
        spiritualityKo:
          "영적 균형을 잃었습니다. 아마도 신념에서 너무 극단적이 되었거나 영적 수련을 완전히 소홀히 했을 수 있습니다. 내면의 지혜와 다시 연결하고 중도의 길을 찾으세요. 영적 우회나 영성을 현실 도피 수단으로 사용하는 것을 피하세요.",
      },
    },
    symbolism:
      "An angel with large wings stands with one foot on land and one in the water, representing the balance between material and emotional realms. The angel pours liquid between two golden cups, symbolizing the flow and blending of opposites. A path leads to mountains in the background where a golden crown of light shines, representing the higher path. The triangle within the square on the angel's robe represents the spirit contained within matter.",
    symbolismKo:
      "큰 날개를 가진 천사가 한 발은 땅에, 한 발은 물에 두고 서 있으며, 물질적 영역과 감정적 영역 사이의 균형을 나타냅니다. 천사가 두 황금 잔 사이로 액체를 부으며 반대되는 것의 흐름과 혼합을 상징합니다. 배경의 산으로 이어지는 길에 황금 빛의 왕관이 빛나며 더 높은 길을 나타냅니다. 천사 로브의 사각형 안 삼각형은 물질 안에 담긴 정신을 나타냅니다.",
    advice:
      "Practice moderation and patience. Find the middle ground between extremes, and trust that harmony will come through balance.",
    adviceKo:
      "절제와 인내를 실천하세요. 극단 사이의 중간 지점을 찾고, 균형을 통해 조화가 올 것을 믿으세요.",
    yesOrNo: "yes",
    numerology:
      "Number 14 reduces to 5 (1+4), representing change, freedom, and dynamic energy. It signifies the need to integrate opposing forces and find balance amidst transformation.",
    numerologyKo:
      "숫자 14는 5로 환원되며(1+4), 변화, 자유, 역동적 에너지를 나타냅니다. 대립하는 힘을 통합하고 변환 속에서 균형을 찾을 필요성을 의미합니다.",
    affirmation:
      "I find harmony through balance, patience, and moderation in all things.",
    affirmationKo: "나는 모든 것에서 균형, 인내, 절제를 통해 조화를 찾습니다.",
    cardBackEmoji: "⏳",
    visualDescription:
      "A radiant angel with large red wings stands at the edge of a pool, one foot on a rock and the other dipped in the water. The angel wears a white robe with a triangle enclosed in a square on the chest. Two golden cups are held, with liquid flowing between them in an arc. A winding path leads to distant mountains beneath a golden sunrise.",
  },
  {
    id: 15,
    name: "The Devil",
    nameKo: "악마",
    arcana: "major",
    number: 15,
    element: "Earth",
    elementKo: "흙",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    keywords: {
      upright: [
        "bondage",
        "materialism",
        "shadow self",
        "addiction",
        "temptation",
      ],
      uprightKo: ["속박", "물질주의", "그림자 자아", "중독", "유혹"],
      reversed: ["release", "freedom", "detachment", "breaking free"],
      reversedKo: ["해방", "자유", "초연", "탈출"],
    },
    meaning: {
      upright: {
        general:
          "The Devil represents bondage to material desires, addictions, and the shadow aspects of yourself that you refuse to acknowledge. The chains are loose—you have the power to free yourself but choose to remain bound. This card confronts you with the illusions, dependencies, and unhealthy patterns that are controlling your life.",
        generalKo:
          "악마 카드는 물질적 욕망에 대한 속박, 중독, 그리고 인정하기를 거부하는 그림자 측면을 나타냅니다. 사슬은 느슨합니다—자신을 해방시킬 힘이 있지만 묶여 있기를 선택합니다. 이 카드는 삶을 지배하는 환상, 의존성, 건강하지 못한 패턴과 마주하게 합니다.",
        love: "The Devil in love readings can indicate an intense, passionate but potentially unhealthy attachment. There may be codependency, jealousy, possessiveness, or a relationship based primarily on physical attraction. Examine whether your relationship empowers or imprisons you.",
        loveKo:
          "사랑 리딩에서 악마 카드는 강렬하고 열정적이지만 잠재적으로 건강하지 못한 애착을 나타낼 수 있습니다. 공의존, 질투, 소유욕, 또는 주로 육체적 매력에 기반한 관계가 있을 수 있습니다. 관계가 당신에게 힘을 주는지 감금하는지 살펴보세요.",
        career:
          "You may feel trapped in a job or career that doesn't fulfill you, staying only for money or status. Workaholism, office politics, or ethical compromises may be chaining you to an unsatisfying situation. Recognize that you have the power to make different choices.",
        careerKo:
          "돈이나 지위 때문에만 머물며, 충족시키지 못하는 직업이나 경력에 갇혀있다고 느낄 수 있습니다. 워커홀릭, 사내 정치, 윤리적 타협이 당신을 불만족스러운 상황에 묶어두고 있을 수 있습니다. 다른 선택을 할 힘이 있음을 인식하세요.",
        finance:
          "Financial bondage through debt, overspending, or materialism is highlighted. You may be chasing money at the expense of your wellbeing, or addicted to the temporary high of spending. Examine your relationship with money and material possessions honestly.",
        financeKo:
          "빚, 과소비 또는 물질주의를 통한 재정적 속박이 부각됩니다. 웰빙을 희생하며 돈을 쫓거나, 소비의 일시적 쾌감에 중독되어 있을 수 있습니다. 돈과 물질적 소유에 대한 관계를 정직하게 살펴보세요.",
        health:
          "The Devil warns of addictions, overindulgence, or ignoring the mind-body connection. Substance abuse, unhealthy eating patterns, or neglecting mental health may be taking a toll. It's time to confront these shadows and seek help if needed.",
        healthKo:
          "악마 카드는 중독, 과도한 탐닉, 또는 심신 연결을 무시하는 것을 경고합니다. 약물 남용, 건강하지 못한 식습관, 정신 건강 소홀이 대가를 치르고 있을 수 있습니다. 이 그림자를 직면하고 필요하면 도움을 구할 때입니다.",
        spirituality:
          "The Devil challenges you to confront your shadow self—the parts of you that you hide, deny, or project onto others. True spiritual freedom comes from integrating these shadow aspects, not suppressing them. Explore what beliefs or fears are keeping you spiritually imprisoned.",
        spiritualityKo:
          "악마 카드는 그림자 자아—숨기고, 부인하거나, 다른 사람에게 투사하는 자신의 부분—을 직면하도록 도전합니다. 진정한 영적 자유는 이 그림자 측면을 억압하는 것이 아니라 통합하는 데서 옵니다. 어떤 신념이나 두려움이 당신을 영적으로 가두고 있는지 탐구하세요.",
      },
      reversed: {
        general:
          "Reversed Devil signals breaking free from bondage, releasing addictions, and reclaiming your power. You are becoming aware of the chains that have held you and are ready to shed them. This is a powerful moment of liberation and self-empowerment.",
        generalKo:
          "역방향 악마 카드는 속박에서 벗어나기, 중독 해방, 그리고 자신의 힘을 되찾기를 나타냅니다. 자신을 묶어두었던 사슬을 인식하게 되었고 그것을 벗어던질 준비가 되었습니다. 이것은 해방과 자기 역량 강화의 강력한 순간입니다.",
        love: "You are breaking free from an unhealthy relationship pattern, codependency, or toxic dynamic. The courage to leave a harmful relationship or transform its dynamics is emerging. You are reclaiming your independence and self-worth in love.",
        loveKo:
          "건강하지 못한 관계 패턴, 공의존 또는 독성 역학에서 벗어나고 있습니다. 해로운 관계를 떠나거나 그 역학을 변환하는 용기가 나타나고 있습니다. 사랑에서 독립성과 자존감을 되찾고 있습니다.",
        career:
          "You are liberating yourself from a toxic work environment or career path that no longer aligns with your values. Breaking free from golden handcuffs or an unfulfilling position takes courage, but you are ready to reclaim your professional autonomy.",
        careerKo:
          "더 이상 가치관에 맞지 않는 독성 직장 환경이나 경력 경로에서 자신을 해방시키고 있습니다. 황금 수갑이나 불만족스러운 직위에서 벗어나는 것은 용기가 필요하지만, 직업적 자율성을 되찾을 준비가 되었습니다.",
        finance:
          "You are breaking the cycle of financial dependency, debt, or materialism. A healthier relationship with money is developing as you release attachment to material excess. Financial freedom comes from changing your mindset about what truly matters.",
        financeKo:
          "재정적 의존, 빚 또는 물질주의의 순환을 끊고 있습니다. 물질적 과잉에 대한 집착을 놓아주면서 돈과의 더 건강한 관계가 발전하고 있습니다. 재정적 자유는 진정으로 중요한 것에 대한 마인드셋 변화에서 옵니다.",
        health:
          "Recovery from addiction or unhealthy patterns is underway. You are taking back control of your health by confronting the habits that have been harming you. This is a time of healing and reclaiming your physical and mental wellbeing.",
        healthKo:
          "중독이나 건강하지 못한 패턴으로부터의 회복이 진행 중입니다. 해를 끼쳐온 습관을 직면하며 건강에 대한 통제권을 되찾고 있습니다. 신체적, 정신적 웰빙을 치유하고 되찾는 시간입니다.",
        spirituality:
          "A spiritual awakening is freeing you from illusions, fears, and limiting beliefs. You are integrating your shadow self and finding true liberation through self-awareness. This is a profound breakthrough on your spiritual journey.",
        spiritualityKo:
          "영적 각성이 환상, 두려움, 제한적 신념에서 당신을 해방시키고 있습니다. 그림자 자아를 통합하고 자기 인식을 통해 진정한 해방을 찾고 있습니다. 이것은 영적 여정에서의 심오한 돌파구입니다.",
      },
    },
    symbolism:
      "A horned, bat-winged devil figure sits on a half-cube pedestal, to which a naked man and woman are chained with loose chains around their necks. The inverted pentagram above the devil's head symbolizes the triumph of matter over spirit. The figures have small horns and tails, showing they are gradually becoming more like the Devil. The dark background represents ignorance and the unconscious.",
    symbolismKo:
      "뿔이 있고 박쥐 날개를 가진 악마가 반 큐브 받침대 위에 앉아 있으며, 벌거벗은 남녀가 목에 느슨한 사슬로 묶여 있습니다. 악마 머리 위의 역오각형은 정신에 대한 물질의 승리를 상징합니다. 인물들은 작은 뿔과 꼬리가 있어 점차 악마를 닮아가고 있음을 보여줍니다. 어두운 배경은 무지와 무의식을 나타냅니다.",
    advice:
      "Examine what is binding you and recognize that you have the power to break free. Face your shadow honestly and reclaim your autonomy.",
    adviceKo:
      "무엇이 당신을 묶고 있는지 살펴보고 벗어날 힘이 있음을 인식하세요. 그림자를 정직하게 직면하고 자율성을 되찾으세요.",
    yesOrNo: "no",
    numerology:
      "Number 15 reduces to 6 (1+5), the number of harmony and love, but here it represents the shadow side of these qualities—obsession, codependency, and the misuse of desire. It warns against mistaking attachment for love.",
    numerologyKo:
      "숫자 15는 6으로 환원되며(1+5), 조화와 사랑의 숫자이지만, 여기서는 이 자질의 그림자 측면—집착, 공의존, 욕망의 오용—을 나타냅니다. 집착을 사랑으로 착각하는 것을 경고합니다.",
    affirmation:
      "I have the power to free myself from anything that no longer serves my highest good.",
    affirmationKo:
      "나는 더 이상 최고의 선에 도움이 되지 않는 모든 것에서 자신을 해방할 힘이 있습니다.",
    cardBackEmoji: "😈",
    visualDescription:
      "A large horned devil with bat wings and an inverted pentagram on its forehead perches atop a black half-cube. Below, a nude man and woman stand chained by loose chains around their necks. Both figures have small horns and tails. The devil holds a flaming torch pointed downward. The background is pure black.",
  },
  {
    id: 16,
    name: "The Tower",
    nameKo: "탑",
    arcana: "major",
    number: 16,
    element: "Fire",
    elementKo: "불",
    zodiac: "Aries",
    zodiacKo: "양자리",
    planet: "Mars",
    planetKo: "화성",
    keywords: {
      upright: [
        "sudden change",
        "upheaval",
        "revelation",
        "destruction",
        "awakening",
      ],
      uprightKo: ["갑작스러운 변화", "격변", "폭로", "파괴", "각성"],
      reversed: [
        "fear of change",
        "avoiding disaster",
        "delayed destruction",
        "resisting upheaval",
      ],
      reversedKo: [
        "변화에 대한 두려움",
        "재난 회피",
        "지연된 파괴",
        "격변에 대한 저항",
      ],
    },
    meaning: {
      upright: {
        general:
          "The Tower represents sudden, disruptive change that shatters false structures and illusions. Like a lightning bolt striking a tower, this card brings revelation and upheaval that, while shocking, ultimately clears away what was built on unstable foundations. This destruction makes way for authentic rebuilding.",
        generalKo:
          "탑 카드는 거짓된 구조와 환상을 산산이 부수는 갑작스럽고 파괴적인 변화를 나타냅니다. 탑에 번개가 치듯, 이 카드는 충격적이지만 궁극적으로 불안정한 기초 위에 세워진 것을 제거하는 폭로와 격변을 가져옵니다. 이 파괴는 진정한 재건을 위한 길을 만듭니다.",
        love: "A sudden revelation or upheaval shakes the foundations of a relationship. Secrets may be exposed, false pretenses shattered, or a relationship may end abruptly. While painful, this clears the way for authentic connections built on truth rather than illusion.",
        loveKo:
          "갑작스러운 폭로나 격변이 관계의 기반을 흔듭니다. 비밀이 폭로되거나, 거짓된 겉치레가 산산조각 나거나, 관계가 갑자기 끝날 수 있습니다. 고통스럽지만, 이것은 환상이 아닌 진실 위에 세워진 진정한 연결을 위한 길을 엽니다.",
        career:
          "A sudden job loss, company restructuring, or career upheaval is indicated. While destabilizing, this dismantling of old structures creates opportunities you couldn't have accessed otherwise. The career you rebuild from the rubble will be more authentic and fulfilling.",
        careerKo:
          "갑작스러운 실직, 회사 구조조정 또는 경력 격변이 나타납니다. 불안정하지만, 오래된 구조의 해체는 다른 방법으로는 접근할 수 없었던 기회를 만듭니다. 잔해에서 다시 세우는 경력이 더 진정성 있고 충족감 있을 것입니다.",
        finance:
          "A financial shock—market crash, unexpected expense, or loss of income—may occur. While distressing, this forces you to reevaluate your financial foundation and build something more resilient. The structures that collapse were not sustainable.",
        financeKo:
          "시장 붕괴, 예상치 못한 지출 또는 소득 상실 등 재정적 충격이 발생할 수 있습니다. 괴로울 수 있지만, 이것은 재정적 기반을 재평가하고 더 탄력적인 것을 구축하도록 강제합니다. 무너진 구조는 지속 가능하지 않았습니다.",
        health:
          "A sudden health crisis or wake-up call may occur. This could be a diagnosis, accident, or collapse from ignored health warnings. While alarming, it forces necessary changes and a complete reassessment of your health approach.",
        healthKo:
          "갑작스러운 건강 위기나 경각심을 불러일으키는 사건이 발생할 수 있습니다. 진단, 사고 또는 무시된 건강 경고로 인한 붕괴일 수 있습니다. 놀랍지만, 필요한 변화와 건강 접근 방식의 완전한 재평가를 강제합니다.",
        spirituality:
          "A spiritual crisis or dark night of the soul shatters your existing belief system. Ego structures crumble, illusions are destroyed, and you are forced into a raw, unfiltered encounter with truth. This devastating breakthrough is the birth pangs of genuine spiritual awakening.",
        spiritualityKo:
          "영적 위기나 영혼의 어두운 밤이 기존 신념 체계를 산산조각 냅니다. 에고 구조가 무너지고, 환상이 파괴되며, 진실과의 가공되지 않은 직접적 만남으로 내몰립니다. 이 파괴적 돌파구는 진정한 영적 각성의 산고입니다.",
      },
      reversed: {
        general:
          "Reversed Tower suggests you are resisting inevitable change or narrowly avoiding a disaster. The upheaval may be less dramatic but still transformative. You might be sensing that something is about to collapse but trying to hold it together. Sometimes this card indicates an internal transformation rather than external destruction.",
        generalKo:
          "역방향 탑 카드는 피할 수 없는 변화를 거부하거나 재난을 가까스로 피하고 있음을 암시합니다. 격변이 덜 극적이지만 여전히 변혁적일 수 있습니다. 무언가가 무너지려 하는 것을 감지하면서도 버티려 하고 있을 수 있습니다. 때로 이 카드는 외부 파괴가 아닌 내면의 변환을 나타냅니다.",
        love: "You may be sensing that your relationship is on shaky ground but refusing to acknowledge it. By avoiding the necessary confrontation, you are prolonging the inevitable. Alternatively, you may have narrowly avoided a breakup and are trying to rebuild on cracked foundations.",
        loveKo:
          "관계가 불안한 기반 위에 있음을 감지하면서도 인정하기를 거부하고 있을 수 있습니다. 필요한 대면을 피함으로써 피할 수 없는 것을 연장하고 있습니다. 또는 이별을 가까스로 피하고 금이 간 기초 위에서 재건하려 하고 있을 수 있습니다.",
        career:
          "You may sense a career upheaval coming but are trying to prevent it. While you might delay the inevitable, the underlying instability needs to be addressed. Use this warning to prepare and plan rather than simply bracing for impact.",
        careerKo:
          "경력 격변이 오는 것을 감지하면서도 방지하려 하고 있을 수 있습니다. 피할 수 없는 것을 지연시킬 수 있지만, 근본적인 불안정성을 다뤄야 합니다. 이 경고를 단순히 충격에 대비하기보다 준비하고 계획하는 데 활용하세요.",
        finance:
          "A financial crisis may be averted or softened, but the underlying problems remain. Use this reprieve to strengthen your financial foundation. Don't mistake the delay of disaster for its absence—structural changes are still needed.",
        financeKo:
          "재정 위기가 회피되거나 완화될 수 있지만, 근본적인 문제는 남아있습니다. 이 유예를 재정적 기반을 강화하는 데 활용하세요. 재난의 지연을 부재로 착각하지 마세요—구조적 변화가 여전히 필요합니다.",
        health:
          "You may be getting warning signs about your health that you are choosing to ignore. A health scare might pass, but the underlying condition needs attention. Take this as a wake-up call to make preventive changes before a major crisis hits.",
        healthKo:
          "무시하기로 선택한 건강 경고 신호를 받고 있을 수 있습니다. 건강 공포가 지나갈 수 있지만, 근본적인 상태에 주의가 필요합니다. 이것을 큰 위기가 닥치기 전에 예방적 변화를 만들라는 경각심으로 받아들이세요.",
        spirituality:
          "An internal spiritual revolution is happening beneath the surface. Old beliefs are crumbling quietly, and you may be resisting the transformation. Allow the internal restructuring to occur—the old spiritual framework is no longer serving you.",
        spiritualityKo:
          "내면의 영적 혁명이 표면 아래에서 일어나고 있습니다. 오래된 신념이 조용히 무너지고 있으며, 변환을 거부하고 있을 수 있습니다. 내면의 재구축이 일어나도록 허용하세요—오래된 영적 틀은 더 이상 도움이 되지 않습니다.",
      },
    },
    symbolism:
      "A tall stone tower is struck by a bolt of lightning from a dark sky, blowing off the golden crown at its peak. Flames burst from the windows as two figures—a crowned king and another person—fall headfirst from the tower. Twenty-two flames in the shape of the Hebrew letter Yod rain down, representing divine will. The tower represents false structures built by ego, and the lightning is divine truth destroying illusion.",
    symbolismKo:
      "높은 석탑에 어두운 하늘에서 번개가 내리쳐 꼭대기의 황금 왕관을 날려버립니다. 창문에서 불꽃이 터지며 왕관을 쓴 왕과 다른 사람 두 명이 탑에서 거꾸로 떨어집니다. 히브리 문자 요드 모양의 22개 불꽃이 비처럼 내려 신의 뜻을 나타냅니다. 탑은 에고가 세운 거짓 구조를, 번개는 환상을 파괴하는 신성한 진실을 나타냅니다.",
    advice:
      "Accept that some structures must fall for truth to emerge. What is being destroyed was not serving you. Trust that you can rebuild something stronger and more authentic.",
    adviceKo:
      "진실이 드러나려면 일부 구조가 무너져야 함을 받아들이세요. 파괴되는 것은 당신에게 도움이 되지 않았습니다. 더 강하고 진정한 것을 재건할 수 있음을 믿으세요.",
    yesOrNo: "no",
    numerology:
      "Number 16 reduces to 7 (1+6), the number of introspection and spiritual seeking. The Tower's destruction forces you inward, toward deeper understanding and a more authentic foundation.",
    numerologyKo:
      "숫자 16은 7로 환원되며(1+6), 내성과 영적 탐구의 숫자입니다. 탑의 파괴는 더 깊은 이해와 더 진정한 기초를 향해 내면으로 향하도록 강제합니다.",
    affirmation:
      "I release false structures and trust in the wisdom of necessary change.",
    affirmationKo: "나는 거짓된 구조를 놓아주고 필요한 변화의 지혜를 믿습니다.",
    cardBackEmoji: "🗼",
    visualDescription:
      "A tall grey stone tower perched on a rocky peak is struck by a brilliant bolt of lightning. The golden crown at the top is blown off. Flames erupt from the windows and top. Two figures tumble headfirst from the burning tower against a dark sky filled with falling drops of fire shaped like the Hebrew letter Yod.",
  },
  {
    id: 17,
    name: "The Star",
    nameKo: "별",
    arcana: "major",
    number: 17,
    element: "Air",
    elementKo: "공기",
    zodiac: "Aquarius",
    zodiacKo: "물병자리",
    keywords: {
      upright: ["hope", "inspiration", "renewal", "serenity", "spirituality"],
      uprightKo: ["희망", "영감", "갱신", "평온", "영성"],
      reversed: ["despair", "disconnection", "lack of faith", "discouragement"],
      reversedKo: ["절망", "단절", "믿음 부족", "낙담"],
    },
    meaning: {
      upright: {
        general:
          "The Star brings hope, healing, and renewed faith after a period of destruction or difficulty. Like the calm after a storm, this card assures you that serenity and inspiration are flowing into your life. You are connected to your higher purpose and the universe is supporting your journey.",
        generalKo:
          "별 카드는 파괴나 어려움의 시기 이후 희망, 치유, 새로운 믿음을 가져옵니다. 폭풍 후의 고요함처럼, 이 카드는 평온과 영감이 삶에 흘러들고 있음을 확인해줍니다. 더 높은 목적에 연결되어 있으며 우주가 여정을 지원하고 있습니다.",
        love: "The Star in love brings hope and healing to your romantic life. After heartbreak or difficulty, love is being renewed with a sense of optimism and authenticity. If single, you are radiating an attractive, genuine energy that draws others to you. Trust that the right person will appear.",
        loveKo:
          "사랑에서 별 카드는 로맨틱한 삶에 희망과 치유를 가져옵니다. 실연이나 어려움 후에 낙관과 진정성의 감각으로 사랑이 새롭게 됩니다. 싱글이라면 다른 사람을 끌어당기는 매력적이고 진정한 에너지를 발산하고 있습니다. 적절한 사람이 나타날 것을 믿으세요.",
        career:
          "Hope and inspiration revitalize your career. You may discover a new calling or find renewed purpose in your current work. Creative inspiration flows freely, and your authentic self-expression attracts opportunities. This is a favorable time for pursuing your dreams.",
        careerKo:
          "희망과 영감이 경력에 활력을 줍니다. 새로운 소명을 발견하거나 현재 업무에서 새로운 목적을 찾을 수 있습니다. 창작적 영감이 자유롭게 흐르고, 진정한 자기표현이 기회를 끌어당깁니다. 꿈을 추구하기에 유리한 시기입니다.",
        finance:
          "Financial hope and renewed optimism surround your monetary situation. After a difficult period, things are looking up. Generous giving and receiving are in flow. Trust that the universe will provide, and maintain a positive attitude toward your financial future.",
        financeKo:
          "재정적 희망과 새로운 낙관이 금전 상황을 둘러싸고 있습니다. 어려운 시기 이후 상황이 좋아지고 있습니다. 관대한 주고받음이 흐르고 있습니다. 우주가 제공할 것을 믿고 재정적 미래에 대해 긍정적 태도를 유지하세요.",
        health:
          "The Star is one of the most positive cards for health, indicating healing, recovery, and renewed vitality. If you have been ill, improvement is coming. A sense of peace and wellbeing washes over you. Holistic and spiritual healing practices are especially beneficial now.",
        healthKo:
          "별 카드는 건강에 가장 긍정적인 카드 중 하나로, 치유, 회복, 새로운 활력을 나타냅니다. 아팠다면 호전이 오고 있습니다. 평화와 웰빙의 감각이 밀려옵니다. 총체적이고 영적인 치유 수련이 지금 특히 유익합니다.",
        spirituality:
          "The Star represents deep spiritual connection, divine guidance, and cosmic consciousness. You are aligned with your higher self and receiving inspiration from the universe. This is a time of spiritual renewal, meditation, and connecting with the infinite source of wisdom within you.",
        spiritualityKo:
          "별 카드는 깊은 영적 연결, 신성한 인도, 우주적 의식을 나타냅니다. 높은 자아와 정렬되어 있으며 우주로부터 영감을 받고 있습니다. 영적 갱신, 명상, 그리고 내면의 무한한 지혜의 원천과 연결되는 시간입니다.",
      },
      reversed: {
        general:
          "Reversed Star indicates a loss of hope, faith, or inspiration. You may feel disconnected from your purpose, discouraged, or unable to see the light at the end of the tunnel. Depression, pessimism, or spiritual disconnection may be clouding your vision. This is temporary—reconnect with what inspires you.",
        generalKo:
          "역방향 별 카드는 희망, 믿음 또는 영감의 상실을 나타냅니다. 목적에서 단절되었거나, 낙담하거나, 터널 끝의 빛을 볼 수 없다고 느낄 수 있습니다. 우울, 비관 또는 영적 단절이 시야를 흐리게 할 수 있습니다. 이것은 일시적입니다—영감을 주는 것과 다시 연결하세요.",
        love: "Despair or disillusionment has crept into your love life. You may have lost faith in finding love or feel disconnected from your partner. The romantic idealism has faded, leaving you feeling empty. Reconnect with self-love first, and hope will return to your relationships.",
        loveKo:
          "절망이나 환멸이 사랑 생활에 스며들었습니다. 사랑을 찾는 믿음을 잃었거나 파트너로부터 단절감을 느낄 수 있습니다. 로맨틱한 이상주의가 사라져 공허함을 느끼고 있습니다. 먼저 자기 사랑과 다시 연결하면 관계에 희망이 돌아올 것입니다.",
        career:
          "You may feel uninspired or disconnected from your professional purpose. Creative blocks, lack of motivation, or a sense that your career has lost its meaning are weighing on you. Reconnect with your original passion and remember why you started this path.",
        careerKo:
          "직업적 목적에서 영감을 잃거나 단절감을 느낄 수 있습니다. 창작 블록, 동기 부족, 경력이 의미를 잃었다는 감각이 무겁게 다가옵니다. 원래의 열정과 다시 연결하고 이 길을 시작한 이유를 기억하세요.",
        finance:
          "Financial pessimism or a sense of hopelessness about money matters may be overwhelming you. You might feel that no matter what you do, your financial situation won't improve. This mindset becomes self-fulfilling—shift your perspective and take small, positive steps forward.",
        financeKo:
          "재정적 비관주의나 금전 문제에 대한 절망감이 압도할 수 있습니다. 무엇을 해도 재정 상황이 나아지지 않을 것 같다고 느낄 수 있습니다. 이 마인드셋은 자기실현적 예언이 됩니다—관점을 전환하고 작고 긍정적인 발걸음을 내딛으세요.",
        health:
          "A loss of hope or motivation is affecting your health recovery. You may feel disconnected from your body or pessimistic about healing. Reconnect with activities that bring you joy and seek support from others. Your body's healing potential is greater than you realize.",
        healthKo:
          "희망이나 동기의 상실이 건강 회복에 영향을 미치고 있습니다. 몸과 단절되었거나 치유에 비관적으로 느낄 수 있습니다. 기쁨을 주는 활동과 다시 연결하고 다른 사람들의 지원을 구하세요. 몸의 치유 잠재력은 생각보다 큽니다.",
        spirituality:
          "You feel spiritually disconnected, lost, or abandoned. The divine presence seems distant, and your faith is wavering. This is a test of trust—even in darkness, the stars still shine. Return to simple spiritual practices and remember that this disconnection is part of the journey.",
        spiritualityKo:
          "영적으로 단절되었거나, 길을 잃었거나, 버림받았다고 느낍니다. 신성한 존재가 멀게 느껴지고 믿음이 흔들리고 있습니다. 이것은 신뢰의 시험입니다—어둠 속에서도 별은 여전히 빛납니다. 단순한 영적 수련으로 돌아가고 이 단절이 여정의 일부임을 기억하세요.",
      },
    },
    symbolism:
      "A nude woman kneels at the edge of a pool, pouring water from two jugs—one onto the land and one into the water, representing the flow between conscious and subconscious. Above her, one large eight-pointed yellow star and seven smaller white stars shine in a clear night sky. A bird (ibis) perches on a tree in the background, symbolizing the soul and thought. Her nudity represents purity and spiritual openness.",
    symbolismKo:
      "벌거벗은 여인이 웅덩이 가장자리에 무릎을 꿇고, 두 주전자에서 물을 붓습니다—하나는 땅 위에, 하나는 물속에—의식과 무의식 사이의 흐름을 나타냅니다. 그녀 위에 하나의 큰 팔각 노란 별과 일곱 개의 작은 흰 별이 맑은 밤하늘에 빛납니다. 배경의 나무에 새(따오기)가 앉아 영혼과 사고를 상징합니다. 그녀의 나체는 순수함과 영적 개방성을 나타냅니다.",
    advice:
      "Have faith that healing and renewal are on their way. You are exactly where you need to be. Let hope and inspiration guide your next steps.",
    adviceKo:
      "치유와 갱신이 오고 있다는 믿음을 가지세요. 당신은 정확히 있어야 할 곳에 있습니다. 희망과 영감이 다음 걸음을 인도하게 하세요.",
    yesOrNo: "yes",
    numerology:
      "Number 17 reduces to 8 (1+7), representing abundance, power, and cosmic order. The Star channels this energy as spiritual abundance, the power of hope, and alignment with the divine order of the universe.",
    numerologyKo:
      "숫자 17은 8로 환원되며(1+7), 풍요, 힘, 우주적 질서를 나타냅니다. 별 카드는 이 에너지를 영적 풍요, 희망의 힘, 우주의 신성한 질서와의 정렬로 전합니다.",
    affirmation:
      "I am connected to the infinite source of hope, healing, and inspiration.",
    affirmationKo: "나는 희망, 치유, 영감의 무한한 원천에 연결되어 있습니다.",
    cardBackEmoji: "⭐",
    visualDescription:
      "A naked woman kneels at the edge of a shimmering pool under a starlit sky. She pours water from two pitchers, one into the pool and one onto the green land. Above her shines one large golden eight-pointed star surrounded by seven smaller white stars. Behind her, a green hill with a tree on which a red ibis perches.",
  },
  {
    id: 18,
    name: "The Moon",
    nameKo: "달",
    arcana: "major",
    number: 18,
    element: "Water",
    elementKo: "물",
    zodiac: "Pisces",
    zodiacKo: "물고기자리",
    keywords: {
      upright: ["illusion", "intuition", "subconscious", "fear", "anxiety"],
      uprightKo: ["환상", "직관", "무의식", "두려움", "불안"],
      reversed: [
        "clarity",
        "release of fear",
        "truth revealed",
        "overcoming anxiety",
      ],
      reversedKo: ["명확함", "두려움 해방", "진실 드러남", "불안 극복"],
    },
    meaning: {
      upright: {
        general:
          "The Moon represents the realm of the subconscious, illusions, and the fears that lurk in the shadows. Things are not as they seem—deception, confusion, or hidden truths may be at play. Trust your intuition to navigate this uncertain period, but be cautious of letting fear and anxiety overwhelm your judgment.",
        generalKo:
          "달 카드는 무의식의 영역, 환상, 그리고 그림자 속에 숨어있는 두려움을 나타냅니다. 사물이 보이는 것과 다릅니다—기만, 혼란 또는 숨겨진 진실이 작용하고 있을 수 있습니다. 이 불확실한 시기를 헤쳐나가기 위해 직관을 믿되, 두려움과 불안이 판단을 압도하지 않도록 주의하세요.",
        love: "The Moon in love warns of deception, misunderstandings, or hidden emotions in a relationship. You or your partner may not be seeing things clearly, or someone may be hiding something. Trust your gut instinct, but avoid making major decisions until the fog lifts and clarity returns.",
        loveKo:
          "사랑에서 달 카드는 관계에서의 기만, 오해 또는 숨겨진 감정을 경고합니다. 당신이나 파트너가 상황을 명확하게 보지 못할 수 있으며, 누군가가 무언가를 숨기고 있을 수 있습니다. 직감을 믿되, 안개가 걷히고 명확함이 돌아올 때까지 중요한 결정을 피하세요.",
        career:
          "Career confusion, unclear communication, or hidden agendas at work are indicated. You may not have all the information you need to make an important decision. Be wary of office politics and people who are not being straightforward. Wait for clarity before making major career moves.",
        careerKo:
          "경력 혼란, 불분명한 소통, 또는 직장에서의 숨은 의도가 나타납니다. 중요한 결정을 내리는 데 필요한 모든 정보를 가지고 있지 않을 수 있습니다. 사내 정치와 솔직하지 못한 사람들을 경계하세요. 중요한 경력 이동 전에 명확해질 때까지 기다리세요.",
        finance:
          "Financial matters are clouded in uncertainty. Hidden costs, unclear investments, or deceptive financial advice may lead you astray. This is not the time for risky financial decisions. Wait until you have complete clarity before committing money to any venture.",
        financeKo:
          "재정 문제가 불확실성에 둘러싸여 있습니다. 숨겨진 비용, 불분명한 투자 또는 기만적 재정 조언이 당신을 잘못된 길로 이끌 수 있습니다. 위험한 재정 결정을 내릴 때가 아닙니다. 어떤 사업에 돈을 투자하기 전에 완전한 명확성이 올 때까지 기다리세요.",
        health:
          "The Moon in health warns of undiagnosed conditions, anxiety-related symptoms, or psychosomatic illness. Mental health concerns, particularly anxiety and depression, may be heightened. Pay attention to your dreams and emotional states, as they may be revealing important health information.",
        healthKo:
          "건강에서 달 카드는 진단되지 않은 상태, 불안 관련 증상 또는 심인성 질병을 경고합니다. 정신 건강 문제, 특히 불안과 우울이 고조될 수 있습니다. 꿈과 감정 상태에 주의를 기울이세요. 중요한 건강 정보를 드러내고 있을 수 있습니다.",
        spirituality:
          "The Moon invites you to explore the depths of your subconscious mind. Dreams, visions, and intuitive flashes carry important messages. This is a powerful time for shadow work, exploring past lives, and developing psychic abilities. Navigate the darkness with trust in your inner light.",
        spiritualityKo:
          "달 카드는 무의식의 깊이를 탐구하도록 초대합니다. 꿈, 비전, 직관적 섬광이 중요한 메시지를 담고 있습니다. 그림자 작업, 전생 탐구, 초감각적 능력 개발에 강력한 시간입니다. 내면의 빛에 대한 신뢰로 어둠을 헤쳐나가세요.",
      },
      reversed: {
        general:
          "Reversed Moon signals the lifting of confusion and the revelation of truth. Fears and anxieties that have been plaguing you are subsiding as clarity returns. Secrets are being revealed, and you can finally see situations for what they truly are. The fog is lifting.",
        generalKo:
          "역방향 달 카드는 혼란의 해소와 진실의 드러남을 신호합니다. 괴롭히던 두려움과 불안이 명확함이 돌아오면서 가라앉고 있습니다. 비밀이 드러나고 있으며, 드디어 상황의 실체를 볼 수 있습니다. 안개가 걷히고 있습니다.",
        love: "Clarity is returning to your love life. Misunderstandings are being resolved, and hidden truths are coming to light. You can now see your relationship or romantic situation with clear eyes. Fears and insecurities around love are being released.",
        loveKo:
          "사랑 생활에 명확함이 돌아오고 있습니다. 오해가 해소되고 숨겨진 진실이 밝혀지고 있습니다. 이제 관계나 연애 상황을 맑은 눈으로 볼 수 있습니다. 사랑에 대한 두려움과 불안감이 해방되고 있습니다.",
        career:
          "Professional clarity is emerging. Workplace confusion, hidden agendas, or miscommunications are being resolved. You can now see the true landscape of your career situation and make informed decisions. Trust is being restored in professional relationships.",
        careerKo:
          "직업적 명확함이 나타나고 있습니다. 직장의 혼란, 숨겨진 의도 또는 소통 오류가 해결되고 있습니다. 이제 경력 상황의 진짜 모습을 보고 정보에 입각한 결정을 내릴 수 있습니다. 직업적 관계에서 신뢰가 회복되고 있습니다.",
        finance:
          "Financial clarity is returning after a period of confusion. Hidden fees, deceptive schemes, or unclear situations are being revealed. You can now make more informed financial decisions based on accurate information rather than speculation.",
        financeKo:
          "혼란의 시기 이후 재정적 명확함이 돌아오고 있습니다. 숨겨진 수수료, 기만적 계획 또는 불분명한 상황이 드러나고 있습니다. 이제 추측이 아닌 정확한 정보에 기반하여 더 나은 재정 결정을 내릴 수 있습니다.",
        health:
          "Health anxieties are subsiding as accurate diagnosis or understanding emerges. Mental health is improving as fears release their grip. You are gaining clarity about your health situation and can now take informed action.",
        healthKo:
          "정확한 진단이나 이해가 나타나면서 건강 불안이 가라앉고 있습니다. 두려움이 그 지배력을 놓으면서 정신 건강이 개선되고 있습니다. 건강 상황에 대한 명확함을 얻고 있으며 이제 정보에 입각한 행동을 취할 수 있습니다.",
        spirituality:
          "The spiritual confusion and disorientation are clearing. You are emerging from a period of darkness with greater understanding and stronger intuition. The lessons of the subconscious have been integrated, and you can now see your spiritual path more clearly.",
        spiritualityKo:
          "영적 혼란과 방향 감각 상실이 맑아지고 있습니다. 더 큰 이해와 더 강한 직관으로 어둠의 시기에서 벗어나고 있습니다. 무의식의 교훈이 통합되었고, 이제 영적 길을 더 분명하게 볼 수 있습니다.",
      },
    },
    symbolism:
      "A full moon shines between two towers, with a winding path leading from a pool in the foreground to distant mountains. A crawfish emerges from the water, symbolizing the early stages of consciousness rising from the depths. A dog and a wolf howl at the moon, representing the tame and wild aspects of the mind. Drops of dew fall from the moon, signifying the descent of spiritual influence into the material world.",
    symbolismKo:
      "보름달이 두 탑 사이에서 빛나고, 전경의 웅덩이에서 먼 산까지 구불구불한 길이 이어집니다. 가재가 물에서 나오며 깊은 곳에서 올라오는 의식의 초기 단계를 상징합니다. 개와 늑대가 달을 향해 울부짖으며 마음의 길들여진 측면과 야생적 측면을 나타냅니다. 달에서 이슬방울이 떨어지며 물질 세계로의 영적 영향의 하강을 의미합니다.",
    advice:
      "Trust your intuition, but don't let fear control you. Things may not be as they seem. Wait for clarity before making important decisions.",
    adviceKo:
      "직관을 믿되 두려움이 당신을 지배하게 하지 마세요. 사물이 보이는 것과 다를 수 있습니다. 중요한 결정을 내리기 전에 명확해질 때까지 기다리세요.",
    yesOrNo: "no",
    numerology:
      "Number 18 reduces to 9 (1+8), representing completion, wisdom, and the culmination of spiritual understanding. The Moon uses this energy to illuminate the hidden depths of the psyche before the cycle completes.",
    numerologyKo:
      "숫자 18은 9로 환원되며(1+8), 완성, 지혜, 영적 이해의 정점을 나타냅니다. 달 카드는 이 에너지를 사용하여 주기가 완성되기 전에 정신의 숨겨진 깊이를 비춥니다.",
    affirmation:
      "I trust my intuition to guide me through uncertainty and into clarity.",
    affirmationKo: "나는 직관을 믿고 불확실함을 지나 명확함으로 인도받습니다.",
    cardBackEmoji: "🌙",
    visualDescription:
      "A large golden full moon with a contemplative face hangs in a dark blue sky between two grey stone towers. Below, a winding path leads from a pool of water through green hills. A crayfish crawls from the pool onto the path. On either side, a domesticated dog and a wild wolf howl at the moon. Fifteen drops of dew fall from the moon.",
  },
  {
    id: 19,
    name: "The Sun",
    nameKo: "태양",
    arcana: "major",
    number: 19,
    element: "Fire",
    elementKo: "불",
    zodiac: "Leo",
    zodiacKo: "사자자리",
    planet: "Sun",
    planetKo: "태양",
    keywords: {
      upright: ["joy", "success", "vitality", "positivity", "abundance"],
      uprightKo: ["기쁨", "성공", "활력", "긍정", "풍요"],
      reversed: [
        "temporary sadness",
        "lack of success",
        "dimmed joy",
        "overconfidence",
      ],
      reversedKo: ["일시적 슬픔", "성공 부족", "흐려진 기쁨", "과신"],
    },
    meaning: {
      upright: {
        general:
          "The Sun is one of the most positive cards in the tarot, radiating joy, success, vitality, and warmth. Everything is illuminated and clear—truth prevails, and you can see your path with absolute clarity. This is a time of celebration, achievement, and unbridled optimism. Good fortune shines upon you.",
        generalKo:
          "태양 카드는 타로에서 가장 긍정적인 카드 중 하나로, 기쁨, 성공, 활력, 따뜻함을 발산합니다. 모든 것이 밝혀지고 명확합니다—진실이 승리하고, 절대적 명확함으로 길을 볼 수 있습니다. 축하, 성취, 억제되지 않는 낙관주의의 시간입니다. 행운이 당신에게 빛나고 있습니다.",
        love: "The Sun brings warmth, happiness, and fulfillment to your love life. Relationships are joyful, honest, and vibrant. If single, you radiate confidence and attract love effortlessly. This card can also indicate pregnancy, the birth of a child, or a rekindling of romantic passion.",
        loveKo:
          "태양 카드는 사랑 생활에 따뜻함, 행복, 충족감을 가져옵니다. 관계가 즐겁고 정직하며 활기찹니다. 싱글이라면 자신감을 발산하며 쉽게 사랑을 끌어당깁니다. 이 카드는 임신, 아이의 탄생 또는 로맨틱한 열정의 재점화를 나타낼 수도 있습니다.",
        career:
          "Career success, recognition, and achievement are highlighted. You are shining in your professional life, and your talents are being noticed and rewarded. This is an excellent time for new ventures, promotions, or public recognition. Your enthusiasm is contagious and inspiring to others.",
        careerKo:
          "경력 성공, 인정, 성취가 부각됩니다. 직업 생활에서 빛나고 있으며, 재능이 주목받고 보상받고 있습니다. 새로운 사업, 승진 또는 대중적 인정에 훌륭한 시기입니다. 당신의 열정이 전염되어 다른 사람들에게 영감을 줍니다.",
        finance:
          "Financial abundance and prosperity are indicated. Your financial outlook is bright, and success in monetary matters is likely. Investments bear fruit, income increases, and there is a sense of financial security and generosity. Share your abundance freely.",
        financeKo:
          "재정적 풍요와 번영이 나타납니다. 재정 전망이 밝고, 금전 문제에서 성공이 예상됩니다. 투자가 결실을 맺고, 수입이 증가하며, 재정적 안정감과 관대함이 있습니다. 풍요를 자유롭게 나누세요.",
        health:
          "The Sun brings excellent health, vitality, and energy. Recovery from illness is swift and complete. You feel physically strong, mentally clear, and emotionally balanced. Outdoor activities and sunlight are particularly beneficial for your wellbeing right now.",
        healthKo:
          "태양 카드는 훌륭한 건강, 활력, 에너지를 가져옵니다. 질병으로부터의 회복이 빠르고 완전합니다. 신체적으로 강하고, 정신적으로 맑으며, 감정적으로 균형 잡혀 있습니다. 야외 활동과 햇빛이 지금 웰빙에 특히 유익합니다.",
        spirituality:
          "The Sun illuminates your spiritual path with clarity and joy. You feel deeply connected to the divine, and your inner light shines brightly. This is a time of spiritual confidence, gratitude, and celebration of the miracle of existence.",
        spiritualityKo:
          "태양 카드가 명확함과 기쁨으로 영적 길을 비춥니다. 신성함과 깊이 연결되어 있으며, 내면의 빛이 밝게 빛납니다. 영적 자신감, 감사, 존재의 기적에 대한 축하의 시간입니다.",
      },
      reversed: {
        general:
          "Reversed Sun suggests that joy is temporarily dimmed, but not extinguished. You may be struggling to see the positive side of things, or your inner light feels clouded by self-doubt. Overconfidence or unrealistic optimism may be setting you up for disappointment. Reconnect with genuine gratitude to restore your brightness.",
        generalKo:
          "역방향 태양 카드는 기쁨이 일시적으로 흐려졌지만 꺼지지 않았음을 암시합니다. 사물의 긍정적 측면을 보기 어렵거나, 자기 의심으로 내면의 빛이 흐려진 것처럼 느낄 수 있습니다. 과신이나 비현실적 낙관이 실망을 위한 설정이 될 수 있습니다. 진정한 감사와 다시 연결하여 밝음을 회복하세요.",
        love: "Temporary clouds have dimmed the joy in your love life. Communication issues, minor disagreements, or a loss of spark may be dampening your happiness. The love is still there—you just need to reignite it. Don't let pessimism or pride prevent you from reconnecting.",
        loveKo:
          "일시적 구름이 사랑 생활의 기쁨을 흐리게 했습니다. 소통 문제, 작은 불일치 또는 불꽃의 상실이 행복을 위축시킬 수 있습니다. 사랑은 여전히 있습니다—다시 불을 지피면 됩니다. 비관이나 자존심이 재연결을 방해하지 않게 하세요.",
        career:
          "Success may be delayed or you are not receiving the recognition you deserve. Overconfidence may have led to mistakes or burnout. Take a step back, reassess your approach, and remember that setbacks are temporary. Your talents have not diminished.",
        careerKo:
          "성공이 지연되거나 받을 만한 인정을 받지 못하고 있을 수 있습니다. 과신이 실수나 번아웃으로 이어졌을 수 있습니다. 한 발 물러서서 접근 방식을 재평가하고, 좌절은 일시적임을 기억하세요. 재능이 줄어든 것이 아닙니다.",
        finance:
          "Financial success may be slower than expected, or overspending during good times is catching up with you. Be cautious of financial overconfidence. The fundamentals are still positive, but you may need to temper your spending and expectations.",
        financeKo:
          "재정적 성공이 예상보다 느릴 수 있거나, 좋은 시기의 과소비가 따라잡고 있습니다. 재정적 과신에 주의하세요. 기본은 여전히 긍정적이지만, 지출과 기대를 조절해야 할 수 있습니다.",
        health:
          "Health is generally positive but you may be neglecting self-care or taking your health for granted. Low energy, mild burnout, or a need for more rest may be indicated. Don't overextend yourself—even the sun sets to rest and recharge.",
        healthKo:
          "건강은 대체로 긍정적이지만 자기 관리를 소홀히 하거나 건강을 당연하게 여기고 있을 수 있습니다. 낮은 에너지, 가벼운 번아웃 또는 더 많은 휴식의 필요성이 나타날 수 있습니다. 무리하지 마세요—태양도 쉬고 재충전하기 위해 집니다.",
        spirituality:
          "Your spiritual light may feel dimmed by doubt, ego, or disconnection from your practice. Don't force spiritual joy—allow it to return naturally. Sometimes the inner sun needs to set briefly so you can appreciate the stars of deeper wisdom.",
        spiritualityKo:
          "의심, 에고 또는 수련과의 단절로 영적 빛이 흐려진 것처럼 느낄 수 있습니다. 영적 기쁨을 억지로 만들지 마세요—자연스럽게 돌아오도록 허용하세요. 때로는 내면의 태양이 잠시 지야 더 깊은 지혜의 별들을 감상할 수 있습니다.",
      },
    },
    symbolism:
      "A bright golden sun with a face shines radiantly in the sky, with straight and wavy rays alternating. A joyful naked child sits on a white horse, arms spread wide in celebration. Four sunflowers grow behind a grey stone wall, representing the four elements and the four suits of the tarot. The child's nudity symbolizes innocence and the return to the pure joy of being.",
    symbolismKo:
      "얼굴이 있는 밝은 금빛 태양이 하늘에서 찬란하게 빛나며, 직선과 물결 모양의 광선이 번갈아 나옵니다. 기쁜 벌거벗은 아이가 백마 위에 앉아 축하하며 팔을 활짝 벌립니다. 네 송이의 해바라기가 회색 석벽 뒤에서 자라며 네 원소와 타로의 네 수트를 나타냅니다. 아이의 나체는 순수함과 존재의 순수한 기쁨으로의 회귀를 상징합니다.",
    advice:
      "Embrace the joy and success that surround you. Let your inner light shine brightly and share your warmth with others. Celebrate life.",
    adviceKo:
      "당신을 둘러싼 기쁨과 성공을 받아들이세요. 내면의 빛을 밝게 빛내고 따뜻함을 다른 사람과 나누세요. 삶을 축하하세요.",
    yesOrNo: "yes",
    numerology:
      "Number 19 reduces to 10 and then to 1 (1+9=10, 1+0=1), representing new beginnings, individuality, and the completion of a major cycle. The Sun brings this energy as the triumphant emergence of the self into full, radiant expression.",
    numerologyKo:
      "숫자 19는 10으로, 다시 1로 환원되며(1+9=10, 1+0=1), 새로운 시작, 개성, 주요 주기의 완성을 나타냅니다. 태양 카드는 이 에너지를 자아의 완전하고 찬란한 표현으로의 승리적 출현으로 가져옵니다.",
    affirmation:
      "I radiate joy, confidence, and vitality. My inner light shines brightly for all to see.",
    affirmationKo:
      "나는 기쁨, 자신감, 활력을 발산합니다. 내면의 빛이 모두가 볼 수 있게 밝게 빛납니다.",
    cardBackEmoji: "☀️",
    visualDescription:
      "A massive golden sun with a smiling face radiates straight and wavy rays across a bright blue sky. Below, a naked child with outstretched arms rides a white horse before a grey stone wall. Four tall sunflowers bloom behind the wall. A red banner flutters from the child's hand. The scene is drenched in warm, golden light.",
  },
  {
    id: 20,
    name: "Judgement",
    nameKo: "심판",
    arcana: "major",
    number: 20,
    element: "Fire",
    elementKo: "불",
    zodiac: "Scorpio",
    zodiacKo: "전갈자리",
    planet: "Pluto",
    planetKo: "명왕성",
    keywords: {
      upright: [
        "judgement",
        "rebirth",
        "inner calling",
        "absolution",
        "renewal",
      ],
      uprightKo: ["심판", "부활", "내면의 부름", "사면", "갱신"],
      reversed: [
        "self-doubt",
        "refusal of calling",
        "harsh self-judgement",
        "stagnation",
      ],
      reversedKo: ["자기 의심", "부름 거부", "가혹한 자기 판단", "정체"],
    },
    meaning: {
      upright: {
        general:
          "Judgement represents a spiritual awakening, a calling from within, and the moment of reckoning where you must evaluate your life's path with honesty and clarity. Like souls rising at the sound of the angel's trumpet, you are being called to rise to your higher purpose. This is a time of rebirth, reflection, and answering your true calling.",
        generalKo:
          "심판 카드는 영적 각성, 내면에서의 부름, 그리고 정직함과 명확함으로 인생의 길을 평가해야 하는 심판의 순간을 나타냅니다. 천사의 나팔 소리에 영혼들이 일어나듯, 더 높은 목적으로 일어나도록 부름받고 있습니다. 이것은 재탄생, 반성, 진정한 소명에 응답하는 시간입니다.",
        love: "Judgement in love calls for honest evaluation of your relationship. Are you living authentically in love, or have you been settling? A reconciliation or renewal of a relationship is possible if both partners are willing to grow. If single, you are being called to release past relationship karma and open yourself to a higher form of love.",
        loveKo:
          "사랑에서 심판 카드는 관계에 대한 정직한 평가를 요청합니다. 사랑에서 진정성 있게 살고 있는지, 타협하고 있었는지? 두 파트너가 기꺼이 성장한다면 관계의 화해나 갱신이 가능합니다. 싱글이라면 과거 관계 카르마를 해방하고 더 높은 형태의 사랑에 자신을 열도록 부름받고 있습니다.",
        career:
          "A career calling or professional awakening is at hand. You may feel compelled to change your career to something more aligned with your true purpose. This is a time of honest self-assessment—are you fulfilling your professional potential? Answer the call to do work that matters.",
        careerKo:
          "경력의 소명 또는 직업적 각성이 다가오고 있습니다. 진정한 목적에 더 부합하는 것으로 경력을 바꾸고 싶은 강한 충동을 느낄 수 있습니다. 정직한 자기 평가의 시간입니다—직업적 잠재력을 발휘하고 있나요? 의미 있는 일을 하라는 부름에 응답하세요.",
        finance:
          "Financial judgement day asks you to honestly assess your relationship with money. Past financial decisions—both good and bad—are coming to fruition. This is a time to take stock, clear old debts, and make financial decisions aligned with your values and long-term vision.",
        financeKo:
          "재정적 심판의 날이 돈과의 관계를 정직하게 평가하도록 요청합니다. 과거의 재정 결정이—좋든 나쁘든—결실을 맺고 있습니다. 점검하고, 오래된 빚을 정리하며, 가치관과 장기 비전에 맞는 재정 결정을 내릴 때입니다.",
        health:
          "Judgement in health indicates a turning point in your physical wellbeing. A diagnosis may bring clarity, or you may experience a profound healing breakthrough. This card calls you to take responsibility for your health and make the changes you know you need to make.",
        healthKo:
          "건강에서 심판 카드는 신체적 웰빙의 전환점을 나타냅니다. 진단이 명확함을 가져오거나, 심오한 치유 돌파구를 경험할 수 있습니다. 이 카드는 건강에 대한 책임을 지고 필요한 변화를 만들도록 촉구합니다.",
        spirituality:
          "Judgement heralds a major spiritual awakening and the answer to your soul's calling. You are being asked to rise above earthly concerns and connect with your divine purpose. Past lives, karma, and spiritual lessons are all coming into focus. This is your moment of spiritual rebirth.",
        spiritualityKo:
          "심판 카드는 주요 영적 각성과 영혼의 부름에 대한 응답을 예고합니다. 세속적 관심을 초월하고 신성한 목적과 연결하도록 요청받고 있습니다. 전생, 카르마, 영적 교훈이 모두 초점에 들어오고 있습니다. 이것이 영적 재탄생의 순간입니다.",
      },
      reversed: {
        general:
          "Reversed Judgement indicates self-doubt, an unwillingness to answer your inner calling, or harsh self-judgement that prevents growth. You may be ignoring an important wake-up call or refusing to learn from past mistakes. Fear of change or judgement from others is holding you back from your true path.",
        generalKo:
          "역방향 심판 카드는 자기 의심, 내면의 부름에 응답하려는 의지 부족, 또는 성장을 방해하는 가혹한 자기 판단을 나타냅니다. 중요한 경각심을 무시하거나 과거 실수에서 배우기를 거부하고 있을 수 있습니다. 변화에 대한 두려움이나 타인의 판단이 진정한 길에서 벗어나게 합니다.",
        love: "You may be harshly judging yourself or your partner, preventing the relationship from healing and growing. Inability to forgive past mistakes—your own or others'—is creating stagnation. Release self-blame and judgement to allow love to flow again.",
        loveKo:
          "자신이나 파트너를 가혹하게 판단하여 관계가 치유되고 성장하는 것을 방해하고 있을 수 있습니다. 과거 실수를—자신이든 타인이든—용서하지 못하는 것이 정체를 만들고 있습니다. 사랑이 다시 흐르도록 자책과 판단을 놓아주세요.",
        career:
          "You are ignoring a professional calling or allowing self-doubt to prevent you from pursuing your true career path. Fear of failure or criticism is keeping you stuck. Stop judging yourself so harshly and take the leap toward work that fulfills you.",
        careerKo:
          "직업적 소명을 무시하거나 자기 의심이 진정한 경력 경로를 추구하는 것을 방해하도록 허용하고 있습니다. 실패나 비판에 대한 두려움이 묶어두고 있습니다. 자신을 그렇게 가혹하게 판단하는 것을 멈추고 충족시키는 일을 향해 도약하세요.",
        finance:
          "You may be avoiding an honest assessment of your financial situation. Past financial mistakes are weighing on you with guilt rather than serving as lessons. Release judgement about past decisions and focus on making better choices going forward.",
        financeKo:
          "재정 상황에 대한 정직한 평가를 피하고 있을 수 있습니다. 과거 재정 실수가 교훈이 아닌 죄책감으로 무겁게 다가옵니다. 과거 결정에 대한 판단을 놓아주고 앞으로 더 나은 선택을 하는 데 집중하세요.",
        health:
          "You may be ignoring health wake-up calls or being too harsh on yourself about your physical condition. Guilt and self-criticism about health choices are not productive—they only add stress. Accept where you are and commit to moving forward with compassion.",
        healthKo:
          "건강 경각심을 무시하거나 신체 상태에 대해 너무 가혹하게 대하고 있을 수 있습니다. 건강 선택에 대한 죄책감과 자기비판은 생산적이지 않으며 스트레스만 더합니다. 현재 위치를 받아들이고 연민으로 앞으로 나아가기에 전념하세요.",
        spirituality:
          "Spiritual self-doubt or the rejection of your higher calling is blocking your growth. You may be afraid of the transformation that answering your spiritual calling would require. Stop hiding from your destiny and embrace the spiritual rebirth that awaits you.",
        spiritualityKo:
          "영적 자기 의심이나 더 높은 소명의 거부가 성장을 막고 있습니다. 영적 소명에 응답하는 것이 요구하는 변환이 두려울 수 있습니다. 운명에서 숨는 것을 멈추고 기다리고 있는 영적 재탄생을 받아들이세요.",
      },
    },
    symbolism:
      "The archangel Gabriel blows a great trumpet from the clouds, bearing a flag with a red cross on white. Below, grey-skinned figures—men, women, and children—rise from open coffins with arms raised in supplication and joy. Mountains of ice or blue water fill the background, representing the boundary between the conscious and unconscious. The scene depicts the resurrection and the final call to spiritual awakening.",
    symbolismKo:
      "대천사 가브리엘이 구름에서 큰 나팔을 불며, 흰색에 빨간 십자가가 있는 깃발을 들고 있습니다. 아래에서 회색 피부의 인물들—남녀노소—이 열린 관에서 탄원과 기쁨으로 팔을 들고 일어납니다. 얼음 산이나 푸른 물이 배경을 채우며 의식과 무의식의 경계를 나타냅니다. 이 장면은 부활과 영적 각성으로의 최종 부름을 묘사합니다.",
    advice:
      "Listen to your inner calling and answer it with courage. Evaluate your life honestly, release self-judgement, and rise to become the person you are meant to be.",
    adviceKo:
      "내면의 부름을 듣고 용기로 응답하세요. 삶을 정직하게 평가하고, 자기 판단을 놓아주며, 되어야 할 사람으로 일어나세요.",
    yesOrNo: "yes",
    numerology:
      "Number 20 reduces to 2 (2+0), representing duality, partnership, and balance. Judgement uses this energy to balance the scales of the soul, reconciling past and present, action and consequence, in preparation for the final integration.",
    numerologyKo:
      "숫자 20은 2로 환원되며(2+0), 이중성, 파트너십, 균형을 나타냅니다. 심판 카드는 이 에너지를 사용하여 최종 통합을 준비하며 영혼의 저울의 균형을 맞추고 과거와 현재, 행동과 결과를 조화시킵니다.",
    affirmation:
      "I answer my soul's calling and rise to my highest purpose with courage and clarity.",
    affirmationKo:
      "나는 영혼의 부름에 응답하고 용기와 명확함으로 가장 높은 목적으로 일어납니다.",
    cardBackEmoji: "📯",
    visualDescription:
      "An angel with golden hair and great wings emerges from grey clouds, blowing a long golden trumpet adorned with a white flag bearing a red cross. Below, nude grey figures rise from stone coffins, their arms raised to the heavens. A man, woman, and child stand in the foreground. Blue mountains and water stretch across the distant background.",
  },
  {
    id: 21,
    name: "The World",
    nameKo: "세계",
    arcana: "major",
    number: 21,
    element: "Earth",
    elementKo: "흙",
    zodiac: "Capricorn",
    zodiacKo: "염소자리",
    planet: "Saturn",
    planetKo: "토성",
    keywords: {
      upright: [
        "completion",
        "accomplishment",
        "wholeness",
        "harmony",
        "fulfillment",
      ],
      uprightKo: ["완성", "성취", "전체성", "조화", "충족"],
      reversed: [
        "incompletion",
        "lack of closure",
        "stagnation",
        "unfulfilled goals",
      ],
      reversedKo: ["미완성", "마무리 부족", "정체", "미달성 목표"],
    },
    meaning: {
      upright: {
        general:
          "The World represents the successful completion of a major life cycle, the achievement of wholeness, and the integration of all lessons learned. You have reached a milestone of accomplishment, and the world is open to you. This is a time of celebration, fulfillment, and the beginning of a new, elevated cycle.",
        generalKo:
          "세계 카드는 주요 삶의 주기의 성공적 완성, 전체성의 달성, 배운 모든 교훈의 통합을 나타냅니다. 성취의 이정표에 도달했으며, 세계가 당신에게 열려 있습니다. 축하, 충족, 그리고 새로운 고양된 주기의 시작의 시간입니다.",
        love: "The World in love indicates a deeply fulfilling, harmonious relationship that has reached a state of wholeness and completion. You and your partner have grown together and achieved a beautiful balance. If single, you are whole and complete within yourself, which attracts a truly compatible partner.",
        loveKo:
          "사랑에서 세계 카드는 전체성과 완성의 상태에 도달한 깊이 충족감 있고 조화로운 관계를 나타냅니다. 파트너와 함께 성장하며 아름다운 균형을 이루었습니다. 싱글이라면 자신 안에서 완전하고 완성되어 있어 진정으로 호환되는 파트너를 끌어당깁니다.",
        career:
          "A major career achievement or the successful completion of a significant project is indicated. You are at the pinnacle of your professional journey for this cycle. Recognition, fulfillment, and a sense of mastery mark this accomplishment. A new professional chapter is about to begin.",
        careerKo:
          "주요 경력 성취 또는 중요한 프로젝트의 성공적 완성이 나타납니다. 이 주기에서 직업적 여정의 정상에 있습니다. 인정, 충족감, 숙달의 감각이 이 성취를 표시합니다. 새로운 직업적 장이 곧 시작됩니다.",
        finance:
          "Financial completion and abundance are celebrated. A long-term financial goal has been achieved, or you have reached a point of financial security and satisfaction. This is a time of reaping rewards for past diligence and wise financial decisions.",
        financeKo:
          "재정적 완성과 풍요가 축하됩니다. 장기적 재정 목표가 달성되었거나, 재정적 안정과 만족의 지점에 도달했습니다. 과거의 근면과 현명한 재정 결정에 대한 보상을 거두는 시간입니다.",
        health:
          "The World in health signifies excellent overall wellbeing, recovery, and vitality. A health journey has reached a positive milestone. You feel whole, balanced, and healthy in body, mind, and spirit. This is a time to celebrate your health and maintain the practices that brought you here.",
        healthKo:
          "건강에서 세계 카드는 전반적으로 훌륭한 웰빙, 회복, 활력을 의미합니다. 건강 여정이 긍정적 이정표에 도달했습니다. 몸, 마음, 정신에서 완전하고, 균형 잡히고, 건강하게 느낍니다. 건강을 축하하고 여기까지 이끈 습관을 유지할 시간입니다.",
        spirituality:
          "The World represents spiritual fulfillment, cosmic consciousness, and the completion of a spiritual cycle. You have integrated the lessons of all the previous Major Arcana cards and achieved a state of wholeness and enlightenment. A new, higher spiritual journey now beckons.",
        spiritualityKo:
          "세계 카드는 영적 충족, 우주적 의식, 영적 주기의 완성을 나타냅니다. 이전 모든 메이저 아르카나 카드의 교훈을 통합하고 전체성과 깨달음의 상태를 달성했습니다. 새로운 더 높은 영적 여정이 이제 손짓합니다.",
      },
      reversed: {
        general:
          "Reversed World indicates incomplete goals, a lack of closure, or the frustration of being so close to completion yet unable to cross the finish line. Something is preventing you from achieving the wholeness you seek. Unfinished business, loose ends, or a reluctance to move to the next cycle may be holding you back.",
        generalKo:
          "역방향 세계 카드는 미완성 목표, 마무리 부족, 또는 완성에 너무 가까이 있으면서도 결승선을 통과할 수 없는 좌절을 나타냅니다. 추구하는 전체성을 달성하는 것을 방해하는 무언가가 있습니다. 미완의 일, 느슨한 끝, 또는 다음 주기로 넘어가기를 꺼리는 것이 붙잡고 있을 수 있습니다.",
        love: "A relationship feels incomplete or is missing something essential for wholeness. You may be close to achieving harmony but something keeps falling short. Alternatively, you might be afraid to commit fully or to move to the next stage. Address what is unfinished to achieve the connection you desire.",
        loveKo:
          "관계가 불완전하게 느껴지거나 전체성에 필수적인 무언가가 빠져 있습니다. 조화에 가까워지고 있지만 무언가가 계속 부족합니다. 또는 완전히 헌신하거나 다음 단계로 나아가는 것이 두려울 수 있습니다. 원하는 연결을 달성하기 위해 미완성된 것을 다루세요.",
        career:
          "A project or career goal is not yet complete, and you feel frustrated by delays or obstacles near the finish line. You may be lacking the final piece needed for professional fulfillment. Revisit what still needs attention and push through to completion.",
        careerKo:
          "프로젝트나 경력 목표가 아직 완성되지 않았고, 결승선 근처의 지연이나 장애물에 좌절감을 느끼고 있습니다. 직업적 충족에 필요한 마지막 조각이 부족할 수 있습니다. 아직 주의가 필요한 것을 다시 살펴보고 완성까지 밀고 나가세요.",
        finance:
          "Financial goals remain just out of reach, or you feel a lack of financial fulfillment despite your efforts. There may be unresolved financial matters or debts that prevent you from feeling complete. Address these loose ends to achieve the financial wholeness you seek.",
        financeKo:
          "재정 목표가 손이 닿지 않는 곳에 남아있거나, 노력에도 불구하고 재정적 충족감이 부족합니다. 완성감을 막는 해결되지 않은 재정 문제나 빚이 있을 수 있습니다. 추구하는 재정적 전체성을 달성하기 위해 이 느슨한 끝을 처리하세요.",
        health:
          "Health recovery may be slower or incomplete. You might feel like full wellness is just out of reach. Don't give up—continue your healing practices and address any overlooked aspects of your wellbeing. Complete healing requires addressing body, mind, and spirit together.",
        healthKo:
          "건강 회복이 더 느리거나 불완전할 수 있습니다. 완전한 건강이 손이 닿지 않는 곳에 있는 것처럼 느낄 수 있습니다. 포기하지 마세요—치유 수련을 계속하고 웰빙의 간과된 측면을 다루세요. 완전한 치유는 몸, 마음, 정신을 함께 다루어야 합니다.",
        spirituality:
          "You feel close to spiritual wholeness but something remains unintegrated. A lesson from the past needs to be fully processed before you can move to the next level. Don't rush the completion—ensure that every aspect of your spiritual journey has been honored and understood.",
        spiritualityKo:
          "영적 전체성에 가까이 있지만 무언가가 통합되지 않은 채 남아있습니다. 다음 단계로 넘어가기 전에 과거의 교훈을 완전히 처리해야 합니다. 완성을 서두르지 마세요—영적 여정의 모든 측면이 존중되고 이해되었는지 확인하세요.",
      },
    },
    symbolism:
      "A dancing figure is enclosed within a large oval laurel wreath, symbolizing completion and victory. The figure holds two wands, representing balance and the ability to manifest. In the four corners, the symbols of the four evangelists appear: the angel (Aquarius/Air), the eagle (Scorpio/Water), the lion (Leo/Fire), and the bull (Taurus/Earth), representing the four fixed signs of the zodiac and the four elements in perfect balance. The wreath is bound by two red ribbons forming infinity symbols.",
    symbolismKo:
      "춤추는 인물이 완성과 승리를 상징하는 큰 타원형 월계관 안에 둘러싸여 있습니다. 인물은 두 개의 지팡이를 들고 있으며, 균형과 현현 능력을 나타냅니다. 네 모서리에 네 복음전도자의 상징이 나타납니다: 천사(물병자리/공기), 독수리(전갈자리/물), 사자(사자자리/불), 황소(황소자리/흙)—네 고정 별자리와 완벽한 균형의 네 원소를 나타냅니다. 월계관은 무한 기호를 형성하는 두 개의 빨간 리본으로 묶여 있습니다.",
    advice:
      "Celebrate your accomplishments and the completion of this cycle. You have earned this moment of wholeness. Prepare to step into a new chapter with the wisdom you have gained.",
    adviceKo:
      "성취와 이 주기의 완성을 축하하세요. 이 전체성의 순간을 얻었습니다. 얻은 지혜와 함께 새로운 장에 들어설 준비를 하세요.",
    yesOrNo: "yes",
    numerology:
      "Number 21 reduces to 3 (2+1), representing creative expression, joy, and synthesis. The World brings the energy of 3 as the joyful culmination and creative synthesis of all the lessons of the Major Arcana journey.",
    numerologyKo:
      "숫자 21은 3으로 환원되며(2+1), 창조적 표현, 기쁨, 통합을 나타냅니다. 세계 카드는 메이저 아르카나 여정의 모든 교훈의 기쁨 넘치는 정점과 창조적 통합으로 3의 에너지를 가져옵니다.",
    affirmation:
      "I celebrate the completion of this cycle and embrace the wholeness within me.",
    affirmationKo:
      "나는 이 주기의 완성을 축하하고 내 안의 전체성을 받아들입니다.",
    cardBackEmoji: "🌍",
    visualDescription:
      "A dancing figure draped in a purple sash holds a wand in each hand, enclosed within a great green laurel wreath tied with two red ribbons. In the four corners of the card: an angel (upper left), an eagle (upper right), a lion (lower right), and a bull (lower left), each surrounded by clouds. The sky behind is bright blue, representing infinite possibility.",
  },
];
