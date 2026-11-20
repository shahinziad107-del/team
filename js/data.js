// ============================================================
// data.js — Strategic Leadership & Flexibility Educational Site
// All content derived from the lecture video and presentation only.
// Rule: Do NOT invent examples, dates, figures, or references
// not found in the source material.
// ============================================================

const SITE_META = {
  titleAr: "Strategic Leadership and Strategic Flexibility",
  titleEn: "Strategic Leadership and Flexibility",
  subtitle: "From Strategic Planning to Leadership and Flexibility in a Changing Environment",
  totalSlides: 36,
  totalParts: 5,
  totalQuestions: 15,
  sourceNote: "Content is based only on the lecture video and the attached presentation. Do not add external information to explanations or answers unless it is clearly marked as external."
};

// ============================================================
// PARTS DATA
// ============================================================
const PARTS = [
  {
    id: "part-1",
    number: 1,
    titleAr: "Planning and Strategic Change",
    titleEn: "Planning and Strategic Change",
    slideNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
    summary: "يبدأ هذا الجزء من داخل وظيفة التخطيط كواحدة من وظائف الإدارة الأربع، ثم ينتقل إلى التخطيط الاستراتيجي كطبقة طويلة المدى. يطرح مثال انخفاض مبيعات الأقراص المدمجة وانتقال السوق إلى الوسائط الرقمية، ويقارن استجابة Best Buy التي ملأت المساحة بالآلات الموسيقية مع استجابة Walmart التي أعادت تخصيص المساحة لمنتجات أخرى.",
    concepts: [
      { term: "The Four Management Functions", desc: "التخطيط، التنظيم، القيادة، الرقابة — المحاضرة تبدأ من التخطيط وتنتقل منه إلى الاستراتيجية." },
      { term: "Strategic Planning", desc: "الطبقة طويلة المدى داخل وظيفة التخطيط — الطبقة التي تواجه البيئة المتغيرة أولاً." },
      { term: "Declining CD Sales", desc: "المحاضر يفتح قصة الاضطراب بانخفاض الأقراص المدمجة كمنتج مادي." },
      { term: "Digital Media", desc: "تجاوزت الوسائط الرقمية سوق الموسيقى المادي بحلول الفترة التي تصفها المحاضرة." },
      { term: "Best Buy Response", desc: "ملأت المساحة المحررة بالآلات الموسيقية — سبب مختلف لدخول العميل نفس المتجر." },
      { term: "Walmart Response", desc: "أعادت تخصيص نفس المساحة لمنتجات أخرى بدلاً من تركها لفئة في تراجع." }
    ],
    examples: [
      { title: "Best Buy والآلات الموسيقية", text: "عندما انخفضت مبيعات الأقراص المدمجة، حوّلت Best Buy المساحة إلى بيع الآلات الموسيقية — تكيف داخل نفس شكل المتجر." },
      { title: "Walmart وإعادة التخصيص", text: "نفس فئة المنتج فقدت الطلب، فأعادت Walmart تخصيص المساحة لمنتجات أخرى." }
    ],
    diagramType: "comparison",
    diagramData: {
      title: "One Disruption, Different Responses",
      center: "Declining CD Sales",
      branches: [
        { label: "Market", detail: "الوسائط الرقمية تحل محل الأقراص" },
        { label: "Best Buy", detail: "Filling the Space with Musical Instruments" },
        { label: "Walmart", detail: "Reallocating the Space to Other Products" }
      ]
    },
    quickQuestion: {
      q: "What did Best Buy do with the space freed after CD sales declined?",
      options: ["It closed that section", "It filled it with musical instruments", "It stored unsold merchandise"],
      correct: 1
    }
  },
  {
    id: "part-2",
    number: 2,
    titleAr: "Strategic Leadership",
    titleEn: "Strategic Leadership",
    slideNumbers: [9, 10, 11, 12, 13, 14, 15],
    summary: "يعرّف هذا الجزء القيادة الاستراتيجية بأنها القدرة على التوقع والتخيل، والحفاظ على المرونة، والتفكير الاستراتيجي، والعمل مع الآخرين لبدء التغيير. يستخدم مثال Amazon التي تنوعت من الكتب والإلكترونيات والألعاب إلى الملابس والأزياء الأعلى سعراً. يذكر حكاية الحذاء مقاس 8 ويحدد أربعة مناصب قيادية عليا.",
    concepts: [
      { term: "Definition of Strategic Leadership", desc: "القدرة على التوقع والتخيل، والحفاظ على المرونة، والتفكير الاستراتيجي، والعمل مع الآخرين لبدء التغيير." },
      { term: "Anticipating and Envisioning", desc: "رؤية مستقبل للمنظمة قبل أن تجعله البيئة واضحاً." },
      { term: "Maintaining Flexibility", desc: "إبقاء الخطة مفتوحة للمراجعة أثناء تنفيذها." },
      { term: "Strategic Thinking", desc: "قراءة القرارات في ضوء الاتجاه الأطول للمنظمة، وليس هذا الربع فقط." },
      { term: "Working with Others", desc: "بدء التغيير من خلال الناس، نحو مستقبل تنظيمي قابل للتحقيق وذي قيمة." },
      { term: "The Four Executive Positions", desc: "CEO و COO و CFO و CIO — المستوى الذي تجلس فيه القيادة الاستراتيجية." }
    ],
    examples: [
      { title: "تنويع Amazon", text: "انتقلت Amazon من الكتب والإلكترونيات والألعاب إلى الملابس والأزياء الأعلى سعراً — عميل مختلف وقرار شراء مختلف." },
      { title: "حكاية الحذاء مقاس 8", text: "حكاية ذكرها المحاضر لتوضيح الالتزام بخدمة النشاط الجديد — توظيف نساء بدوام كامل لمراجعة واختبار أحذية مقاس 8. هذه ليست إحصاءً مستقلاً أو حقيقة موثقة من مصدر خارجي." }
    ],
    diagramType: "portfolio",
    diagramData: {
      title: "Amazon Expansion",
      stages: [
        { label: "Starting Point", items: ["Books", "Electronics", "Toys"] },
        { label: "Expansion", items: ["Higher-Priced Clothing and Fashion"] }
      ]
    },
    quickQuestion: {
      q: "What are the four elements in the lecture’s definition of strategic leadership?",
      options: [
        "Budgeting, hiring, reporting, auditing",
        "Anticipating, flexibility, strategic thinking, working with others",
        "Demand forecasting, pricing, promotion, distribution"
      ],
      correct: 1
    }
  },
  {
    id: "part-3",
    number: 3,
    titleAr: "Strategic Roles and Effective Leadership",
    titleEn: "Strategic Roles and Effective Leadership",
    slideNumbers: [16, 17, 18, 19, 20, 21, 22],
    summary: "يقدم هذا الجزء ثمانية أدوار استراتيجية يجب أن تغطيها القيادة العليا، ثم ثمانية مكونات للقيادة الاستراتيجية الفعالة. الأدوار ليست ثمانية مناصب لثمانية أشخاص، بل هي العمل الذي يجب على القيادة تغطيته مهما كان المسمى الوظيفي.",
    concepts: [
      { term: "Chief Strategist", desc: "يمسك بالاستراتيجية نفسها — الاتجاه الذي تلتزم به المنظمة." },
      { term: "Structural Architect", desc: "يشكل المنظمة بحيث يكون للاستراتيجية مكان تعيش فيه." },
      { term: "Information and Control Systems Developer", desc: "يبني ما تعرفه المنظمة وما تقيسه." },
      { term: "Key Decision Maker", desc: "يتخذ الخيارات التي لا يستطيع باقي المنظمة اتخاذها." },
      { term: "Visionary Leader", desc: "يعطي المنظمة صورة عن المستقبل تستحق السعي نحوها." },
      { term: "Political Actor", desc: "يعمل مع المصالح والتحالفات داخل المنظمة وحولها." },
      { term: "Environmental Change Monitor and Interpreter", desc: "يراقب البيئة ويقرأ ما تعنيه الإشارات." },
      { term: "Strategy Designer", desc: "يحول التحليل والنية إلى استراتيجية فعلية." }
    ],
    examples: [],
    effectiveLeadership: [
      { num: 1, title: "Determining Purpose and Vision", desc: "بيان ما هي المنظمة وما تحاول أن تصبح." },
      { num: 2, title: "Exploiting and Maintaining Core Competencies", desc: "البناء على ما تجيده المنظمة والحفاظ على قوته." },
      { num: 3, title: "Developing Human Capital", desc: "الاستثمار في الأشخاص الذين تعتمد عليهم الاستراتيجية." },
      { num: 4, title: "Creating and Sustaining Culture", desc: "جعل أسلوب العمل المشترك يدعم الاستراتيجية بدلاً من مقاومتها." },
      { num: 5, title: "Creating and Maintaining Relationships", desc: "الحفاظ على الروابط التي تسمح للعمل بالتدفق عبر المنظمة." },
      { num: 6, title: "Reframing Dominant Views", desc: "التشكيك في الافتراضات التي توقفت المنظمة عن فحصها." },
      { num: 7, title: "Emphasizing Ethical Decisions and Practices", desc: "معاملة الأخلاق كجزء من كيفية اختيار الاستراتيجية." },
      { num: 8, title: "Establishing Balanced Controls", desc: "رقابة كافية للبقاء على المسار دون تجميد القدرة على التغيير." }
    ],
    diagramType: "radial",
    diagramData: {
      title: "Eight Strategic Roles",
      center: "Strategy",
      items: [
        "Chief Strategist",
        "Structural Architect",
        "Systems Developer",
        "Decision Maker",
        "Visionary Leader",
        "Political Actor",
        "Environmental Monitor",
        "Strategy Designer"
      ]
    },
    quickQuestion: {
      q: "The eight strategic roles are eight positions for eight different people — true or false?",
      options: ["True", "False — they are the work leadership must cover regardless of the job title"],
      correct: 1
    }
  },
  {
    id: "part-4",
    number: 4,
    titleAr: "Strategic Flexibility in Uncertainty",
    titleEn: "Strategic Flexibility in Uncertainty",
    slideNumbers: [23, 24, 25, 26, 27, 28, 29],
    summary: "يتناول هذا الجزء لماذا تحتاج المنظمة إلى المرونة عندما يكون عدم اليقين هو الحالة الطبيعية. يقدم حالتين: Spartan Motors التي غيّرت دورة التخطيط من خطة سنوية مع مراجعة ربع سنوية إلى خطة ثلاث سنوات مع تحديث شهري تحت قيادة John Sztykiel، وJ.C. Penney التي وضعت خطة نمو لخمس سنوات عام 2007 ثم اضطرت لاستخدام خطة مؤقتة بعد تغير الظروف الاقتصادية.",
    concepts: [
      { term: "Recession Reveals Rigidity", desc: "خطة مبنية لظروف مستقرة ليس لديها إجابة عندما تنهار الظروف." },
      { term: "Uncertainty Is the Normal Condition", desc: "المحاضرة تعامل الاضطراب على أنه البيئة التي يجب أن تعمل فيها الاستراتيجية الآن." },
      { term: "Monitor Then Respond", desc: "الاختبار هو ما إذا كانت النتائج تُظهر أن الاستراتيجية تعمل — ومدى سرعة رد الفعل عندما لا تعمل." },
      { term: "Bridge Plan", desc: "خطة قصيرة المدى لعبور الوضع الفوري، دون التظاهر بأن الخطة الأصلية لا تزال سارية." }
    ],
    examples: [
      { title: "Spartan Motors — النمط القديم", text: "خطة استراتيجية سنوية + خطة مالية لثلاث سنوات، تُراجع ربع سنوياً فقط." },
      { title: "Spartan Motors — النمط الجديد", text: "تحت قيادة CEO John Sztykiel: خطة استراتيجية لثلاث سنوات، تُحدّث شهرياً من قبل الإدارة العليا." },
      { title: "J.C. Penney — خطة 2007", text: "خطة نمو لخمس سنوات وُضعت قبل تغير الظروف الاقتصادية." },
      { title: "J.C. Penney — الخطة المؤقتة", text: "عندما تغيرت الافتراضات، وُضعت خطة مؤقتة مبدئية لعبور الفجوة — مكتوبة لتُستبدل لا لتُدافع عنها." }
    ],
    diagramType: "timeline",
    diagramData: {
      title: "Spartan Motors: Changing the Planning Cadence",
      before: { label: "Earlier Pattern", items: ["Annual Strategic Plan", "Three-Year Financial Plan", "Quarterly Review"] },
      after: { label: "New Pattern (John Sztykiel)", items: ["Three-Year Strategic Plan", "Monthly Update", "Top Management Reviews"] }
    },
    quickQuestion: {
      q: "What happened to J.C. Penney’s 2007 plan?",
      options: [
        "It was implemented in full without change",
        "It was never written",
        "It was disrupted by conditions, and a bridge plan was used"
      ],
      correct: 2
    }
  },
  {
    id: "part-5",
    number: 5,
    titleAr: "Developing Strategic Flexibility",
    titleEn: "Developing Strategic Flexibility",
    slideNumbers: [30, 31, 32, 33],
    summary: "يقدم هذا الجزء ثماني ممارسات لتطوير المرونة الاستراتيجية، مرتبة في أربعة أزواج عملية: وحدة الهدف مع الموارد القابلة لإعادة التوزيع، واستكشاف البدائل مع مراقبة النتائج، والانفتاح على المعلومات السلبية مع الأفكار الخارجية، والإبقاء على أكثر من بديل مع التعلم من الأخطاء.",
    concepts: [
      { term: "Unity of Purpose", desc: "الفريق القيادي يتحرك معاً؛ الأجندات المتنافسة داخل القيادة تمنع أي تحول." },
      { term: "Redeployable Resources", desc: "موارد يمكن نقلها إلى حيث يحتاجها الوضع الجديد." },
      { term: "Exploring Alternatives", desc: "معاملة البيئة كشيء يُستكشف، لا كشيء مفهوم سلفاً." },
      { term: "Monitoring and Measuring Results", desc: "بدون القياس لا توجد إشارة بأن الاستراتيجية تحتاج إلى تغيير." },
      { term: "Openness to Negative Information", desc: "تشجيع الموظفين على الإبلاغ عما يسير خطأ بينما لا يزال يمكن التصرف." },
      { term: "External Ideas and Perspectives", desc: "إدخال آراء لا تولدها المنظمة بنفسها." },
      { term: "Maintaining Multiple Alternatives", desc: "الحفاظ على أكثر من خيار حي حتى لا تكون خطة واحدة هي الطريق الوحيد." },
      { term: "Learning from Mistakes", desc: "معاملة الخطوة الفاشلة كمعلومة للقرار التالي." }
    ],
    examples: [],
    diagramType: "grid",
    diagramData: {
      title: "Eight Practices in Four Pairs",
      pairs: [
        { header: "Shared Purpose", items: ["Unity of Purpose", "Redeployable Resources"] },
        { header: "Broad Attention", items: ["Exploring Alternatives", "Monitoring and Measuring Results"] },
        { header: "Open Information", items: ["Openness to Negative Information", "External Ideas and Perspectives"] },
        { header: "Preserved Options", items: ["Maintaining Multiple Alternatives", "Learning from Mistakes"] }
      ]
    },
    quickQuestion: {
      q: "Which practice helps an organization hear bad news early?",
      options: [
        "Rewarding only positive reports",
        "Encouraging employees to share negative information",
        "Restricting information to top management"
      ],
      correct: 1
    }
  }
];

// ============================================================
// SLIDES DATA (36 slides)
// ============================================================
const SLIDES = [
  { num: 1, partId: "part-1", titleEn: "Strategic Leadership and Strategic Flexibility", titleAr: "Strategic Leadership and Strategic Flexibility", hasChart: false, isMCQ: false, image: "assets/slides/slide-01.png" },
  { num: 2, partId: "part-1", titleEn: "Planning and Strategic Change", titleAr: "Planning and Strategic Change", hasChart: false, isMCQ: false, image: "assets/slides/slide-02.png" },
  { num: 3, partId: "part-1", titleEn: "Planning in Management", titleAr: "Planning in Management", hasChart: true, isMCQ: false, image: "assets/slides/slide-03.png" },
  { num: 4, partId: "part-1", titleEn: "Planning Inside the Management Functions", titleAr: "Planning Inside the Management Functions", hasChart: true, isMCQ: false, image: "assets/slides/slide-04.png" },
  { num: 5, partId: "part-1", titleEn: "When Physical Music Media Declines", titleAr: "When Physical Music Media Declines", hasChart: false, isMCQ: false, image: "assets/slides/slide-05.png" },
  { num: 6, partId: "part-1", titleEn: "One Disruption, Three Responses", titleAr: "One Disruption, Three Responses", hasChart: true, isMCQ: false, image: "assets/slides/slide-06.png" },
  { num: 7, partId: "part-1", titleEn: "Best Buy and Walmart Adapt", titleAr: "Best Buy and Walmart Adapt", hasChart: false, isMCQ: false, image: "assets/slides/slide-07.png" },
  { num: 8, partId: "part-1", titleEn: "Best Buy and Walmart, Side by Side", titleAr: "Best Buy and Walmart, Side by Side", hasChart: true, isMCQ: false, image: "assets/slides/slide-08.png" },
  { num: 9, partId: "part-2", titleEn: "Strategic Leadership", titleAr: "Strategic Leadership", hasChart: false, isMCQ: false, image: "assets/slides/slide-09.png" },
  { num: 10, partId: "part-2", titleEn: "What Strategic Leadership Means", titleAr: "What Strategic Leadership Means", hasChart: false, isMCQ: false, image: "assets/slides/slide-10.png" },
  { num: 11, partId: "part-2", titleEn: "Amazon: Diversification as Adaptation", titleAr: "Amazon: Diversification as Adaptation", hasChart: true, isMCQ: false, image: "assets/slides/slide-11.png" },
  { num: 12, partId: "part-2", titleEn: "Amazon: From Three Categories to Fashion", titleAr: "Amazon: From Three Categories to Fashion", hasChart: true, isMCQ: false, image: "assets/slides/slide-12.png" },
  { num: 13, partId: "part-2", titleEn: "The Size-8 Shoe Story", titleAr: "The Size-8 Shoe Story", hasChart: false, isMCQ: false, image: "assets/slides/slide-13.png" },
  { num: 14, partId: "part-2", titleEn: "Top Management and Strategic Work", titleAr: "Top Management and Strategic Work", hasChart: true, isMCQ: false, image: "assets/slides/slide-14.png" },
  { num: 15, partId: "part-2", titleEn: "Where Strategic Leadership Sits", titleAr: "Where Strategic Leadership Sits", hasChart: true, isMCQ: false, image: "assets/slides/slide-15.png" },
  { num: 16, partId: "part-3", titleEn: "Strategic Roles and Effective Leadership", titleAr: "Strategic Roles and Effective Leadership", hasChart: false, isMCQ: false, image: "assets/slides/slide-16.png" },
  { num: 17, partId: "part-3", titleEn: "Eight Strategic Roles — 1 to 4", titleAr: "Eight Strategic Roles — 1 to 4", hasChart: true, isMCQ: false, image: "assets/slides/slide-17.png" },
  { num: 18, partId: "part-3", titleEn: "Eight Strategic Roles — 5 to 8", titleAr: "Eight Strategic Roles — 5 to 8", hasChart: true, isMCQ: false, image: "assets/slides/slide-18.png" },
  { num: 19, partId: "part-3", titleEn: "Eight Roles, One Strategy", titleAr: "Eight Roles, One Strategy", hasChart: true, isMCQ: false, image: "assets/slides/slide-19.png" },
  { num: 20, partId: "part-3", titleEn: "Effective Strategic Leadership — 1 to 4", titleAr: "Effective Strategic Leadership — 1 to 4", hasChart: false, isMCQ: false, image: "assets/slides/slide-20.png" },
  { num: 21, partId: "part-3", titleEn: "Effective Strategic Leadership — 5 to 8", titleAr: "Effective Strategic Leadership — 5 to 8", hasChart: false, isMCQ: false, image: "assets/slides/slide-21.png" },
  { num: 22, partId: "part-3", titleEn: "Eight Components in Three Layers", titleAr: "Eight Components in Three Layers", hasChart: true, isMCQ: false, image: "assets/slides/slide-22.png" },
  { num: 23, partId: "part-4", titleEn: "Strategic Flexibility in Uncertainty", titleAr: "Strategic Flexibility in Uncertainty", hasChart: false, isMCQ: false, image: "assets/slides/slide-23.png" },
  { num: 24, partId: "part-4", titleEn: "Why Strategic Flexibility Matters", titleAr: "Why Strategic Flexibility Matters", hasChart: false, isMCQ: false, image: "assets/slides/slide-24.png" },
  { num: 25, partId: "part-4", titleEn: "Spartan Motors: The Earlier Pattern", titleAr: "Spartan Motors: The Earlier Pattern", hasChart: true, isMCQ: false, image: "assets/slides/slide-25.png" },
  { num: 26, partId: "part-4", titleEn: "Spartan Motors: A More Flexible Pattern", titleAr: "Spartan Motors: A More Flexible Pattern", hasChart: true, isMCQ: false, image: "assets/slides/slide-26.png" },
  { num: 27, partId: "part-4", titleEn: "Spartan Motors: Changing the Cadence", titleAr: "Spartan Motors: Changing the Cadence", hasChart: true, isMCQ: false, image: "assets/slides/slide-27.png" },
  { num: 28, partId: "part-4", titleEn: "J.C. Penney and the Bridge Plan", titleAr: "J.C. Penney and the Bridge Plan", hasChart: true, isMCQ: false, image: "assets/slides/slide-28.png" },
  { num: 29, partId: "part-4", titleEn: "J.C. Penney: The Bridge Plan", titleAr: "J.C. Penney: The Bridge Plan", hasChart: true, isMCQ: false, image: "assets/slides/slide-29.png" },
  { num: 30, partId: "part-5", titleEn: "Developing Strategic Flexibility", titleAr: "Developing Strategic Flexibility", hasChart: false, isMCQ: false, image: "assets/slides/slide-30.png" },
  { num: 31, partId: "part-5", titleEn: "Eight Flexibility Practices — 1 to 4", titleAr: "Eight Flexibility Practices — 1 to 4", hasChart: false, isMCQ: false, image: "assets/slides/slide-31.png" },
  { num: 32, partId: "part-5", titleEn: "Eight Flexibility Practices — 5 to 8", titleAr: "Eight Flexibility Practices — 5 to 8", hasChart: false, isMCQ: false, image: "assets/slides/slide-32.png" },
  { num: 33, partId: "part-5", titleEn: "Eight Practices, Four Working Pairs", titleAr: "Eight Practices, Four Working Pairs", hasChart: true, isMCQ: false, image: "assets/slides/slide-33.png" },
  { num: 34, partId: null, titleEn: "Review MCQ 1-5", titleAr: "Review MCQ 1–5", hasChart: false, isMCQ: true, image: "assets/slides/slide-34.png" },
  { num: 35, partId: null, titleEn: "Review MCQ 6-10", titleAr: "Review MCQ 6–10", hasChart: false, isMCQ: true, image: "assets/slides/slide-35.png" },
  { num: 36, partId: null, titleEn: "Review MCQ 11-15", titleAr: "Review MCQ 11–15", hasChart: false, isMCQ: true, image: "assets/slides/slide-36.png" }
];

// ============================================================
// QUIZ QUESTIONS (15 MCQ from the presentation)
// ============================================================
const QUIZ = [
  {
    id: "q1", partId: "part-1",
    question: "In the lecture, which management function does strategic planning belong to?",
    options: ["Organizing", "Leading", "Planning", "Controlling"],
    correctIndex: 2,
    explanation: "المحاضرة تبدأ من وظيفة التخطيط وتنتقل منها إلى التخطيط الاستراتيجي كطبقة طويلة المدى."
  },
  {
    id: "q2", partId: "part-1",
    question: "Which product opens the lecture’s disruption example by declining?",
    options: ["Printed catalogs", "Compact discs", "Musical instruments", "Vinyl records"],
    correctIndex: 1,
    explanation: "المحاضر يفتح قصة الاضطراب بانخفاض الأقراص المدمجة (CDs) كمنتج مادي."
  },
  {
    id: "q3", partId: "part-1",
    question: "What surpassed the physical music market according to the lecture?",
    options: ["Digital Media", "Live concerts", "Radio broadcasting", "Used sales"],
    correctIndex: 0,
    explanation: "الوسائط الرقمية تجاوزت سوق الموسيقى المادي القديم بحلول الفترة التي تصفها المحاضرة."
  },
  {
    id: "q4", partId: "part-1",
    question: "How did Best Buy use the space freed after CD sales declined?",
    options: ["It closed that section", "It moved customer service there", "It filled it with musical instruments", "It stored unsold merchandise"],
    correctIndex: 2,
    explanation: "المساحة التي كانت تُستخدم لبيع الأقراص حُولت إلى بيع الآلات الموسيقية — سبب مختلف لدخول العميل نفس المتجر."
  },
  {
    id: "q5", partId: "part-1",
    question: "What does the Walmart comparison add?",
    options: ["That a different response was possible", "That only one response can succeed", "That only small retailers were affected", "That Walmart continued selling CDs"],
    correctIndex: 0,
    explanation: "المحاضرة تستخدم كلتا الشركتين لإظهار أن نفس الاضطراب يمكن أن ينتج استجابات مختلفة ومتعمدة بنفس القدر."
  },
  {
    id: "q6", partId: "part-2",
    question: "Which group completes the lecture’s definition of strategic leadership?",
    options: [
      "Budgeting, hiring, reporting, auditing",
      "Anticipating, maintaining flexibility, strategic thinking, working with others",
      "Demand forecasting, pricing, promotion, distribution",
      "Hiring, training, evaluation, rewards"
    ],
    correctIndex: 1,
    explanation: "التعريف كما ورد في المحاضرة: القدرة على التوقع والتخيل، والحفاظ على المرونة، والتفكير الاستراتيجي، والعمل مع الآخرين لبدء التغيير."
  },
  {
    id: "q7", partId: "part-2",
    question: "According to the lecture, Amazon moved from books, electronics, and toys to…?",
    options: ["Grocery retail", "Higher-Priced Clothing and Fashion", "Musical instruments", "Commercial vehicles"],
    correctIndex: 1,
    explanation: "المحاضرة تصف دخول Amazon إلى الملابس والأزياء الأعلى سعراً — عميل مختلف وقرار شراء مختلف."
  },
  {
    id: "q8", partId: "part-2",
    question: "Why does the lecturer tell the size-8 shoe story?",
    options: [
      "To report sales figures for a new category",
      "To show the commitment required to serve a new business",
      "To criticize Amazon’s pricing",
      "To formally define diversification"
    ],
    correctIndex: 1,
    explanation: "حكاية ذكرها المحاضر لتوضيح الالتزام بخدمة النشاط الجديد، وليست إحصاءً مستقلاً أو حقيقة موثقة من مصدر خارجي."
  },
  {
    id: "q9", partId: "part-2",
    question: "Which four roles sit at the top of the organization?",
    options: [
      "CEO, COO, CFO, and CIO",
      "CEO, CMO, CHRO, and CTO",
      "Owner, manager, supervisor, and team leader",
      "President, secretary, treasurer, and auditor"
    ],
    correctIndex: 0,
    explanation: "المحاضرة تسمي CEO و COO و CFO و CIO كالمستوى الذي تجلس فيه القيادة الاستراتيجية."
  },
  {
    id: "q10", partId: "part-3",
    question: "Which of the following is one of the eight strategic roles mentioned?",
    options: ["Head of logistics", "Chief Strategist", "Union representative", "Brand ambassador"],
    correctIndex: 1,
    explanation: "كبير الاستراتيجيين (Chief Strategist) هو أحد الأدوار الثمانية التي ذكرتها المحاضرة."
  },
  {
    id: "q11", partId: "part-3",
    question: "Which component is part of effective strategic leadership in the lecture?",
    options: ["Developing Human Capital", "Reducing product variety", "Centralizing all decisions", "Avoiding external perspectives"],
    correctIndex: 0,
    explanation: "تطوير رأس المال البشري — الاستثمار في الأشخاص الذين تعتمد عليهم الاستراتيجية — هو أحد المكونات الثمانية."
  },
  {
    id: "q12", partId: "part-4",
    question: "In the earlier Spartan Motors pattern, how often was the plan reviewed?",
    options: ["Weekly", "Monthly", "Quarterly", "Once every five years"],
    correctIndex: 2,
    explanation: "في النمط السابق، كانت الخطة المالية لثلاث سنوات تُراجع ربع سنوياً — اللحظة المنتظمة الوحيدة التي تلتقي فيها الخطة بالواقع."
  },
  {
    id: "q13", partId: "part-4",
    question: "What did John Sztykiel change at Spartan Motors?",
    options: [
      "The planning horizon and the frequency of plan reviews",
      "Only the company’s product line",
      "The company’s ownership",
      "Nothing; the plan remained annual"
    ],
    correctIndex: 0,
    explanation: "التغيير مرتبط بالـ CEO، ومع الإدارة العليا: خطة استراتيجية لثلاث سنوات تُحدّث شهرياً بدلاً من خطة سنوية تُراجع ربع سنوياً."
  },
  {
    id: "q14", partId: "part-4",
    question: "What happened to J.C. Penney’s 2007 plan?",
    options: [
      "It was never written",
      "It was implemented in full without change",
      "It was disrupted, and a bridge plan was used",
      "It became a music strategy"
    ],
    correctIndex: 2,
    explanation: "الافتراضات التي بُنيت عليها الخطة توقفت عن الصحة، فوُضعت خطة مؤقتة (Bridge Plan) لعبور الوضع الفوري."
  },
  {
    id: "q15", partId: "part-5",
    question: "Which practice helps an organization hear bad news early?",
    options: [
      "Rewarding only positive reports",
      "Encouraging employees to share negative information",
      "Restricting information to top management",
      "Measuring results once a year"
    ],
    correctIndex: 1,
    explanation: "الانفتاح على المعلومات السلبية — تشجيع الموظفين على الإبلاغ عما يسير خطأ بينما لا يزال يمكن التصرف."
  }
];

// ============================================================
// SCRIPTS (Arabic, Egyptian dialect, lecture-ready)
// ============================================================
const SCRIPTS = {
  "part-1": `طيب يا جماعة، النهاردة هنبدأ من أول حاجة في الإدارة — وظائف الإدارة الأربع: التخطيط، والتنظيم، والقيادة، والرقابة.

[انتقال — شريحة 3]

إحنا في المحاضرة دي هنركز على التخطيط. التخطيط هو اللي بيحدد الأهداف ويقرر إزاي نوصلها. لكن مش أي تخطيط — إحنا بنتكلم عن التخطيط الاستراتيجي، اللي هو الطبقة بعيدة المدى جوه وظيفة التخطيط.

[انتقال — شريحة 4]

يعني إيه؟ يعني التخطيط بيحدد الاتجاه، والتنظيم بيرتب الشغل والموارد عشان ينفذ الخطة، والقيادة بتوجه الناس، والرقابة بتراقب النتائج. المحاضرة مش بتعامل الأربع وظائف دي كحاجات منفصلة — التخطيط هو اللي بيحدد الاتجاه اللي الباقي لازم يخدمه.

[انتقال — شريحة 5]

طيب خلونا ناخد مثال. الأقراص المدمجة — الـ CDs — مبيعاتها وقعت. الوسائط الرقمية أخدت السوق. ده مش حظ وحش، ده اضطراب — تغيّر في تكنولوجيا المستهلك هو اللي فرض الاستجابة الاستراتيجية.

السؤال بقى: إيه اللي يعمله بائع التجزئة بالمساحة اللي كانت مبنية لمنتج السوق سابه ورا؟

[انتقال — شريحة 6]

هنا بقى الحكاية بتبقى مثيرة. الاضطراب واحد — الأقراص المدمجة خسرت السوق. لكن الاستجابة اختلفت.

§مثال§ Best Buy — أخدت المساحة اللي كانت بتبيع فيها CDs وحطت فيها آلات موسيقية. سبب مختلف خالص إن العميل يدخل نفس المحل.

§مثال§ Walmart — نفس المساحة اتعاد تخصيصها لمنتجات تانية، بدل ما تفضل واقفة لفئة في تراجع.

[انتقال — شريحة 7-8]

الدرس اللي المحاضرة بتسحبه: لما التكنولوجيا بتغير السوق، الاستجابة الاستراتيجية هي التكيف وتنويع العرض — مش الدفاع عن الرف القديم. الاضطراب كان مشترك، لكن الاستجابة لأ. واختيار الاستجابة ده قرار تخطيط.`,

  "part-2": `دلوقتي هنتكلم عن القيادة الاستراتيجية — يعني إيه قيادة استراتيجية؟

[انتقال — شريحة 10]

التعريف كما ورد في المحاضرة: القيادة الاستراتيجية هي القدرة على التوقع والتخيل — إنك تشوف مستقبل للمنظمة قبل ما البيئة تخليه واضح. والحفاظ على المرونة — تخلّي الخطة مفتوحة للمراجعة وهي بتتنفذ. والتفكير الاستراتيجي — تقرأ القرارات على ضوء الاتجاه الأطول للمنظمة، مش الربع ده بس. والعمل مع الآخرين — تبدأ التغيير من خلال الناس، ناحية مستقبل تنظيمي قابل للتحقيق وذي قيمة.

[انتقال — شريحة 11]

§مثال§ خدوا عندكم Amazon. المحاضرة بتوصف إزاي Amazon بدأت بالكتب والإلكترونيات والألعاب — دي كانت الأرض الأصلية بتاعتها. بعد كده دخلت في الملابس والأزياء الأعلى سعراً. ده عميل مختلف وقرار شراء مختلف خالص.

[انتقال — شريحة 12]

النقطة اللي المحاضرة بتعملها مش إن كل شركة لازم تتنوع، لكن إن القيادة الاستراتيجية مستعدة تنقل المنظمة لبيزنس ماكانتش فيه من الأول.

[انتقال — شريحة 13]

§مثال§ وعشان تاخد البيزنس الجديد بجدية، المحاضر بيحكي إن Amazon وظّفت ستات بدوام كامل عشان يراجعوا ويختبروا أحذية مقاس 8. دي حكاية ذكرها المحاضر لتوضيح الالتزام بالنشاط الجديد — مش إحصاء مستقل أو حقيقة موثقة من مصدر خارجي. الدخول في بيزنس جديد مش بيان صحفي — محتاج القدرة والاهتمام إنك تخدم البيزنس ده صح.

[انتقال — شريحة 14-15]

القيادة الاستراتيجية بتقعد على قمة المنظمة. المحاضرة بتسمي أربع أدوار في المستوى ده: الـ CEO اللي بيحدد الاتجاه، والـ COO اللي بيحوّل الاتجاه لعمليات فعلية، والـ CFO اللي بيمسك الموارد المالية اللي الاستراتيجية بتعتمد عليها، والـ CIO اللي بيمتلك أنظمة المعلومات اللي الخطة بتتقرأ من خلالها. المحاضرة بتقول إن الشغل في المستوى ده مش إدارة يومية.`,

  "part-3": `نيجي بقى للأدوار الاستراتيجية — ثمانية أدوار لازم القيادة العليا تغطيها.

[انتقال — شريحة 17]

الأربع الأولانيين: كبير الاستراتيجيين — اللي ماسك الاستراتيجية نفسها والاتجاه اللي المنظمة ملتزمة بيه. المهندس الهيكلي — اللي بيشكّل المنظمة بحيث يكون للاستراتيجية مكان تعيش فيه. مطور نظم المعلومات والرقابة — اللي بيبني اللي المنظمة بتعرفه واللي بتقيسه. صانع القرار الرئيسي — اللي بياخد الخيارات اللي باقي المنظمة مش قادرة تاخدها.

[انتقال — شريحة 18]

الأربع التانيين: القائد صاحب الرؤية — اللي بيدي المنظمة صورة عن المستقبل تستاهل نمشي ناحيتها. الفاعل السياسي — اللي بيشتغل مع المصالح والتحالفات جوه المنظمة وحواليها. مراقب ومفسر التغيير البيئي — اللي بيراقب البيئة ويقرأ الإشارات يعني إيه. مصمم الاستراتيجية — اللي بيحوّل التحليل والنية لاستراتيجية فعلية.

[انتقال — شريحة 19]

مهم جداً — الثمان أدوار دي مش ثمان وظائف لثمان ناس. المحاضرة بتقدمهم كالشغل اللي لازم القيادة الاستراتيجية تغطيه، مهما كان المسمى الوظيفي على الباب.

[انتقال — شريحة 20-21]

دلوقتي مكونات القيادة الاستراتيجية الفعالة — ثمانية مكونات: تحديد الهدف والرؤية، واستغلال الكفاءات الجوهرية والحفاظ عليها، وتطوير رأس المال البشري، وخلق الثقافة واستدامتها، وإنشاء العلاقات والحفاظ عليها، وإعادة صياغة وجهات النظر السائدة — يعني تشكك في الافتراضات اللي المنظمة بطلت تفحصها. والتأكيد على القرارات والممارسات الأخلاقية، ووضع ضوابط متوازنة — رقابة كافية تخليك على المسار من غير ما تجمد القدرة على التغيير.

[انتقال — شريحة 22]

المحاضرة بتعرض الثمان مكونات في ثلاث طبقات: وجّه المنظمة، وابني اللي محتاجاه، وخليها صادقة. اتجاه من غير قدرة بيوقف، وقدرة من غير ضوابط بتنحرف.`,

  "part-4": `طيب دلوقتي نيجي للمرونة الاستراتيجية — ليه المنظمة محتاجة مرونة أصلاً؟

[انتقال — شريحة 24]

أول حاجة: الركود بيكشف الجمود. خطة مبنية لظروف مستقرة ملهاش إجابة لما الظروف تنهار. تاني حاجة: عدم اليقين هو الحالة الطبيعية — المحاضرة بتتعامل مع الاضطراب على إنه البيئة اللي الاستراتيجية لازم تشتغل فيها دلوقتي. والاختبار هو: هل النتائج بتوري إن الاستراتيجية شغالة؟ وأد إيه المنظمة بترد بسرعة لما النتائج تقول لأ.

[انتقال — شريحة 25]

§مثال§ خدوا عندكم Spartan Motors — شركة بتبني مركبات متخصصة. قبل التغيير اللي المحاضرة بتوصفه، التخطيط كان ماشي على وثيقتين: خطة استراتيجية سنوية، وخطة مالية لثلاث سنوات بتتراجع ربع سنوياً. الأفق كان قصير، والوثيقة نفسها كانت ثابتة بعد ما تتكتب.

المحاضرة بتربط النمط الجامد ده بأداء ضعيف في المبيعات والأرباح.

[انتقال — شريحة 26-27]

§مثال§ إيه اللي اتغير؟ تحت قيادة الـ CEO اللي اسمه John Sztykiel: خطة استراتيجية لثلاث سنوات بتتحدّث كل شهر من الإدارة العليا. الأفق طال بينما دورة المراجعة قصرت. التخطيط بقى روتين — مش حدث سنوي. المبدأ: قصّر المسافة بين كتابة الخطة والتأكد إنها لسه الخطة الصح.

[انتقال — شريحة 28-29]

§مثال§ الحالة التانية: J.C. Penney. في 2007 عملوا خطة نمو لخمس سنوات. بعد كده الظروف الاقتصادية اتغيرت — الافتراضات اللي الخطة كانت مبنية عليها بطلت تمشي. فعملوا إيه؟ عملوا خطة مؤقتة — Bridge Plan — خطة قصيرة المدى مبدئية عشان تعدّي الموقف الحالي، من غير ما يتظاهروا إن خطة الخمس سنوات لسه شغالة.

الكلمة اللي المحاضرة بتستخدمها هي "مبدئية" — الخطة المؤقتة مكتوبة عشان تتبدل، مش عشان يتدافع عنها. ده اللي بيخليها مرنة. من غير الخطة المؤقتة، الاختيار بينهار لاتنين وحشين: تحتفظ بخطة البيئة كذّبتها، أو تسيب التخطيط خالص.`,

  "part-5": `الجزء الأخير — إزاي نطوّر المرونة الاستراتيجية؟ ثمان ممارسات.

[انتقال — شريحة 31]

الأربع الأولانيين: وحدة الهدف — الفريق القيادي لازم يتحرك مع بعض؛ أجندات متنافسة جوه القيادة بتمنع أي تحول. الموارد القابلة لإعادة التوزيع — موارد تقدر تنقلها للمكان اللي الوضع الجديد محتاجها فيه. استكشاف البدائل — عامل البيئة كحاجة بتستكشفها، مش حاجة مفهومة خلاص. مراقبة النتائج وقياسها — من غير قياس مفيش إشارة إن الاستراتيجية محتاجة تتغير.

[انتقال — شريحة 32]

الأربع التانيين: الانفتاح على المعلومات السلبية — شجّع الموظفين يبلّغوا عن اللي ماشي غلط وهو لسه ممكن نتصرف. الأفكار ووجهات النظر الخارجية — جيب آراء المنظمة مش بتولدها لوحدها. الإبقاء على أكثر من بديل — خلي أكتر من خيار حي عشان خطة واحدة ما تكونش الطريق الوحيد. التعلم من الأخطاء — عامل الخطوة الفاشلة كمعلومة للقرار الجاي.

[انتقال — شريحة 33]

المحاضرة بترتب الثمان ممارسات في أربع أزواج: هدف مشترك — وحدة الهدف مع موارد قابلة لإعادة التوزيع. انتباه واسع — استكشاف البدائل مع مراقبة النتائج. معلومات مفتوحة — الانفتاح على المعلومات السلبية مع أفكار خارجية. خيارات محفوظة — أكتر من بديل مع التعلم من الأخطاء.

الأزواج الأربع دي وسيلة مساعدة للمراجعة، مش ادعاء من المحاضر نفسه.

كده يا جماعة خلصنا المحتوى. تعالوا نختبر نفسنا بـ 15 سؤال مراجعة على كل اللي اتكلمنا فيه.`
};

// Allowed file extensions for uploads
const ALLOWED_EXTENSIONS = ['.pptx', '.pdf', '.docx', '.png', '.jpg', '.jpeg', '.webp', '.txt', '.md'];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
