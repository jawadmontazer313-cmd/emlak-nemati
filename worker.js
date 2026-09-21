// ═══════════════════════════════════════════════════════════
// Robat Nemati - Complete Bot (v21 - WebApp + Patched)
// ═══════════════════════════════════════════════════════════

const SITE_MAIN = "https://emlaknemati.ir";
const CHANNEL_URL = "https://t.me/emlak_nemati";
const BOT_URL = "https://t.me/emlaknematibot";
const DEFAULT_LISTING_PHOTO = "https://emlaknemati.ir/default-listing.jpg";
// ☝️ این آدرس رو با یه عکس قشنگ از دفتر/نمونه ملک خودت عوض کن

const TX = {
  fa: {
    welcome: "سلام! به املاک نعمتی خوش آمدید.\n\n🌐 <b>مشاهده سایت:</b>\n" + SITE_MAIN + "\n\n📢 <b>کانال تلگرام:</b>\n" + CHANNEL_URL,
    langPrompt: "لطفا زبان خود را انتخاب کنید:", langLabel: "زبان فعلی: فارسی",
    menuPrompt: "یکی از گزینه ها را انتخاب کنید:",
    menuViewSell: "🏠 آگهی های فروش", menuViewRent: "🔑 آگهی های رهن و اجاره",
    menuListSell: "📝 ثبت آگهی فروش", menuListRent: "📋 ثبت آگهی رهن و اجاره",
    menuConsult: "💬 مشاوره رایگان", menuSite: "🌐 مشاهده سایت",
    back: "بازگشت", cancel: "لغو", skip: "رد کردن",
    requestBtn: "📩 درخواست این ملک",
    reqSent: "درخواست شما ثبت شد. کارشناس ما با شما تماس می گیرد.",
    reqAskPhone: "برای هماهنگی بازدید، لطفا شماره تماس خود را بفرستید.\n\nمثال: ۰۹۱۲۳۴۵۶۷۸۹\n\n⚠️ شماره شما فقط برای کارشناسان املاک نعمتی استفاده میشه و توی کانال منتشر نمیشه.",
    reqThanks: "ممنون! درخواست شما با شماره ثبت شد. کارشناس ما به زودی تماس می گیرد.",
    reqWithoutPhone: "درخواست شما ثبت شد (بدون شماره). کارشناس ما از طریق تلگرام با شما تماس می گیرد.",
    askTime: "چه ساعتی برای بازدید راحت‌ترید؟",
    timeSlot1: "🌅 امروز عصر (۱۶-۱۹)", timeSlot2: "🌤️ فردا صبح (۹-۱۲)", timeSlot3: "🌆 فردا عصر (۱۶-۱۹)",
    timeCancel: "❌ لغو",
    reqWithTime: "✅ رزرو شما ثبت شد!\n\nکارشناس ما در زمان انتخابی با شما تماس می‌گیرد.",
    noPhoneFound: "شماره معتبر پیدا نشد. لطفا به صورت ۰۹xxxxxxxxx بفرستید یا رد کردن را بزنید.",
    filterTitle: "آگهی ها", filterPrompt: "چطور میخوای جستجو کنی?", filterAll: "📂 همه آگهی ها",
    filterBudgetPrompt: "بودجه خود را انتخاب کنید:",
    budgetUnder2: "زیر ۲ میلیارد", budget2to5: "۲ تا ۵ میلیارد", budget5to10: "۵ تا ۱۰ میلیارد", budgetOver10: "بالای ۱۰ میلیارد",
    budgetUnder500Rent: "زیر ۵۰۰ میلیون رهن", budget500to1Rent: "۵۰۰ میلیون تا ۱ میلیارد رهن",
    budget1to2Rent: "۱ تا ۲ میلیارد رهن", budgetOver2Rent: "بالای ۲ میلیارد رهن",
    noResults: "متاسفانه آگهی ای مطابق فیلتر شما پیدا نشد.",
    fileReqOffer: "میخوای درخواست فایل یابی ثبت کنم؟",
    fileReqYes: "بله، ثبت کن", fileReqNo: "نه، بی خیال",
    fileReqPrompt: "لطفا جزئیات درخواستت رو بنویس.",
    fileReqSaved: "درخواست فایل یابی ثبت شد. اگر آگهی مطابق پیدا شد، بهت خبر میدم.",
    viewMore: "برای دیدن آگهی های بیشتر: /more", totalListings: "تعداد کل",
    listingTypeSell: "🏠 فروش", listingTypeRent: "🔑 رهن و اجاره",
    introSell: "ثبت آگهی فروش\n\nلطفا همه اطلاعات را یکجا بفرستید.",
    introListRent: "ثبت آگهی رهن و اجاره\n\nلطفا همه اطلاعات را یکجا بفرستید.",
    introConsult: "مشاوره رایگان\n\nسلام! چه سوالی دارید؟",
    savedOk: "آگهی ثبت شد. ممنون!", cancelled: "لغو شد.", backToMenu: "به منوی اصلی برگشتید.",
    noListings: "هنوز آگهی ای ثبت نشده.", listingNotFound: "این آگهی پیدا نشد.",
    askMedia: "عکس یا ویدیو از ملک دارید؟ (اگر ندارید: رد کردن)",
    mediaAgain: "لطفا عکس یا ویدیو بفرستید یا رد کردن را بزنید.",
    voiceErr: "متاسفانه ویس شما را نفهمیدم.",
    phoneHidden: "شماره تماس پس از درخواست بازدید اعلام می شود.",
    siteMsg: "🌐 سایت: " + SITE_MAIN + "\n\n📢 کانال: " + CHANNEL_URL,
    qPropertyTypeSell: "نوع ملک و متراژ؟\n\nمثال: آپارتمان ۱۲۰ متری",
    qPropertyTypeRent: "نوع ملک و متراژ؟\n\nمثال: آپارتمان ۱۲۰ متری",
    qDocument: "وضعیت سند؟\n\nمثال: تک برگ، شش دانگ",
    qLocation: "آدرس یا محله؟\n\n💡 آدرس کامل رو بنویس (خیابان، کوچه، پلاک)\n\n⚠️ آدرس کامل فقط توی داشبورد ادمین می‌مونه. توی سایت و کانال، فقط محله نمایش داده می‌شه.",
    qPrice: "قیمت مورد نظر؟\n\nمثال: ۶ میلیارد",
    qPriceRent: "مبلغ رهن و اجاره؟\n\nمثال: ۵۰۰ میلیون رهن و ۱۰ میلیون اجاره",
    qSize: "متراژ؟\n\nمثال: ۱۰۰ متر",
    qNotes: "توضیحات اضافه (اختیاری)\n\n⚠️ بدون شماره تلفن",
    qPhone: "شماره تماس؟\n\nمثال: ۰۹۱۲۳۴۵۶۷۸۹",
    qName: "نام و نام خانوادگی؟\n\nمثال: علی احمدی",
    qYearBuilt: "سال ساخت ملک؟\n\nمثال: ۱۳۹۵\n(اگه نمی‌دونی: رد کردن)",
    qRooms: "تعداد اتاق؟\n\nمثال: ۲ خواب\n(اگه زمین یا مغازه هست: رد کردن)",
    qFloor: "طبقه؟\n\nمثال: طبقه ۳ از ۵\n(اگه ویلایی یا زمین هست بنویس: زمینی)",
    qAmenities: "امکانات ملک؟\n\nهرکدوم رو داری بنویس (با فاصله):\n• آسانسور\n• پارکینگ\n• انباری\n• بالکن\n\n💡 مثال: آسانسور پارکینگ انباری\n(اگه هیچ‌کدوم نداری: رد کردن)",
    lblPricePerMeter: "قیمت هر متر",
    notesHasPhone: "⚠️ رفیق، توی توضیحات شماره پیدا کردم.\n\n❌ لطفاً بدون شماره بنویس.",
    webappIntro: "📸 <b>قدم ۱ از ۲ — عکس و ویدیو</b>\n\nاز ملکت عکس یا ویدیو داری؟\n\nهر تعداد که می‌خوای بفرست 👇\n\nوقتی تموم شد، دکمه <b>«✅ تمومه، برو فرم»</b> رو بزن.",
    webappMediaReceived: "✅ فایل ثبت شد.\n\n📎 تعداد فایل‌های ثبت‌شده: <b>{count}</b>\n\nبازم بفرست یا دکمه <b>«✅ تمومه، برو فرم»</b> رو بزن.",
    webappMediaIntro: "✅ عکس‌ها ذخیره شد!\n\nحالا <b>قدم ۲ از ۲</b>:\nفرم اطلاعات ملک رو پر کن 👇",
    webappNoMedia: "⏭️ بدون عکس ادامه می‌دیم.\n\nحالا فرم اطلاعات ملک رو پر کن 👇",
    webappBtnDone: "✅ تمومه، برو فرم",
    webappBtnSkip: "⏭️ عکس ندارم، مستقیم برو فرم",
    webappBtnForm: "📝 باز کردن فرم ثبت آگهی",
    webappHint: "☝️ دکمه بالا رو بزن تا فرم باز شه"
  },
  en: {
    welcome: "Welcome to Nemati Real Estate.\n\n🌐 Website: " + SITE_MAIN + "\n📢 Channel: " + CHANNEL_URL,
    langPrompt: "Please choose your language:", langLabel: "Language: English",
    menuPrompt: "Choose an option:",
    menuViewSell: "🏠 Listings for Sale", menuViewRent: "🔑 Listings for Rent",
    menuListSell: "📝 List my property for Sale", menuListRent: "📋 List my property for Rent",
    menuConsult: "💬 Free Consultation", menuSite: "🌐 Visit Website",
    back: "Back", cancel: "Cancel", skip: "Skip",
    requestBtn: "📩 Request this property", reqSent: "Your request is registered.",
    reqAskPhone: "Please send your phone number.", reqThanks: "Thanks!", reqWithoutPhone: "Request registered.",
    askTime: "What time works best?",
    timeSlot1: "🌅 Today evening (16-19)", timeSlot2: "🌤️ Tomorrow morning (9-12)", timeSlot3: "🌆 Tomorrow evening (16-19)",
    timeCancel: "❌ Cancel", reqWithTime: "✅ Booking confirmed!",
    noPhoneFound: "No valid phone found.",
    filterTitle: "Listings", filterPrompt: "How do you want to search?", filterAll: "📂 All listings",
    filterBudgetPrompt: "Choose your budget:",
    budgetUnder2: "Under 2B", budget2to5: "2-5B", budget5to10: "5-10B", budgetOver10: "Over 10B",
    budgetUnder500Rent: "Under 500M", budget500to1Rent: "500M-1B",
    budget1to2Rent: "1-2B", budgetOver2Rent: "Over 2B",
    noResults: "No listings matched.",
    fileReqOffer: "Register file request?", fileReqYes: "Yes", fileReqNo: "No",
    fileReqPrompt: "Write your request details.", fileReqSaved: "Registered.",
    viewMore: "More: /more", totalListings: "Total",
    listingTypeSell: "🏠 Sale", listingTypeRent: "🔑 Rent",
    introSell: "List for Sale", introListRent: "List for Rent",
    introConsult: "Free Consultation", savedOk: "Saved.",
    cancelled: "Cancelled.", backToMenu: "Back to menu.",
    noListings: "No listings.", listingNotFound: "Not found.",
    askMedia: "Photos/videos? (or Skip)", mediaAgain: "Send photo/video or Skip.",
    voiceErr: "Could not understand.", phoneHidden: "Contact after viewing request.",
    siteMsg: "🌐 Website: " + SITE_MAIN + "\n📢 Channel: " + CHANNEL_URL,
    qPropertyTypeSell: "Property type and size?", qPropertyTypeRent: "Property type and size?",
    qDocument: "Document?", qLocation: "Full address?", qPrice: "Price?",
    qPriceRent: "Deposit and rent?", qSize: "Size?", qNotes: "Notes (optional, no phone).",
    qPhone: "Phone?", qName: "Full name?",
    qYearBuilt: "Year built?", qRooms: "Number of rooms?", qFloor: "Floor?",
    qAmenities: "Amenities? (elevator, parking, storage, balcony)",
    lblPricePerMeter: "Price per sqm",
    notesHasPhone: "⚠️ Phone found. Please rewrite without phone.",
    webappIntro: "📸 Step 1 of 2 — Photos & Videos\n\nSend any number of photos or videos.\nWhen done, press «✅ Done, go to form».",
    webappMediaReceived: "✅ File saved.\n\n📎 Total files: {count}\n\nSend more or press «✅ Done, go to form».",
    webappMediaIntro: "✅ Media saved!\n\nNow step 2: fill the form 👇",
    webappNoMedia: "⏭️ Continuing without media.\n\nNow fill the form 👇",
    webappBtnDone: "✅ Done, go to form",
    webappBtnSkip: "⏭️ No media, go to form",
    webappBtnForm: "📝 Open listing form",
    webappHint: "☝️ Press the button above to open the form"
  },
  ar: {
    welcome: "مرحبا بكم في عقارات نعمتي.\n\n🌐 الموقع: " + SITE_MAIN + "\n📢 القناة: " + CHANNEL_URL,
    langPrompt: "الرجاء اختيار اللغة:", langLabel: "اللغة: العربية",
    menuPrompt: "اختر أحد الخيارات:",
    menuViewSell: "🏠 إعلانات البيع", menuViewRent: "🔑 إعلانات الإيجار",
    menuListSell: "📝 تسجيل عقاري للبيع", menuListRent: "📋 تسجيل عقاري للإيجار",
    menuConsult: "💬 استشارة مجانية", menuSite: "🌐 زيارة الموقع",
    back: "رجوع", cancel: "إلغاء", skip: "تخطي",
    requestBtn: "📩 طلب هذا العقار", reqSent: "تم التسجيل.",
    reqAskPhone: "أرسل رقم هاتفك.", reqThanks: "شكرا!", reqWithoutPhone: "تم التسجيل.",
    askTime: "ما هو الوقت المناسب؟",
    timeSlot1: "🌅 اليوم مساء (16-19)", timeSlot2: "🌤️ غدا صباحا (9-12)", timeSlot3: "🌆 غدا مساء (16-19)",
    timeCancel: "❌ إلغاء", reqWithTime: "✅ تم الحجز!",
    noPhoneFound: "رقم غير صالح.",
    filterTitle: "الإعلانات", filterPrompt: "كيف تريد البحث؟", filterAll: "📂 كل الإعلانات",
    filterBudgetPrompt: "اختر ميزانيتك:",
    budgetUnder2: "أقل من 2 مليار", budget2to5: "2-5 مليار", budget5to10: "5-10 مليار", budgetOver10: "أكثر من 10 مليار",
    budgetUnder500Rent: "أقل من 500 مليون", budget500to1Rent: "500 مليون - 1 مليار",
    budget1to2Rent: "1-2 مليار", budgetOver2Rent: "أكثر من 2 مليار",
    noResults: "لا توجد نتائج.",
    fileReqOffer: "تسجيل طلب؟", fileReqYes: "نعم", fileReqNo: "لا",
    fileReqPrompt: "اكتب التفاصيل.", fileReqSaved: "تم التسجيل.",
    viewMore: "للمزيد: /more", totalListings: "المجموع",
    listingTypeSell: "🏠 بيع", listingTypeRent: "🔑 إيجار",
    introSell: "تسجيل للبيع", introListRent: "تسجيل للإيجار",
    introConsult: "استشارة مجانية", savedOk: "تم الحفظ.",
    cancelled: "ألغي.", backToMenu: "عودة للقائمة.",
    noListings: "لا إعلانات.", listingNotFound: "غير موجود.",
    askMedia: "صور/فيديو؟", mediaAgain: "أرسل صورة أو تخطي.",
    voiceErr: "لم أفهم.", phoneHidden: "يعلن بعد الطلب.",
    siteMsg: "🌐 الموقع: " + SITE_MAIN + "\n📢 القناة: " + CHANNEL_URL,
    qPropertyTypeSell: "نوع العقار والمساحة؟", qPropertyTypeRent: "نوع العقار والمساحة؟",
    qDocument: "حالة السند؟", qLocation: "العنوان الكامل؟", qPrice: "السعر؟",
    qPriceRent: "التأمين والإيجار؟", qSize: "المساحة؟", qNotes: "ملاحظات.",
    qPhone: "رقم الهاتف؟", qName: "الاسم؟",
    qYearBuilt: "سنة البناء؟", qRooms: "عدد الغرف؟", qFloor: "الطابق؟",
    qAmenities: "المرافق؟ (مصعد، موقف، مخزن، شرفة)",
    lblPricePerMeter: "سعر المتر",
    notesHasPhone: "⚠️ تم العثور على رقم.",
    webappIntro: "📸 الخطوة 1 من 2\n\nأرسل صور أو فيديو.\nعند الانتهاء اضغط «✅ تم، اذهب للاستمارة».",
    webappMediaReceived: "✅ تم الحفظ.\n\n📎 عدد الملفات: {count}",
    webappMediaIntro: "✅ تم حفظ الوسائط!\n\nاملأ الاستمارة 👇",
    webappNoMedia: "⏭️ بدون وسائط.\n\nاملأ الاستمارة 👇",
    webappBtnDone: "✅ تم، اذهب للاستمارة",
    webappBtnSkip: "⏭️ لا وسائط، اذهب للاستمارة",
    webappBtnForm: "📝 فتح استمارة التسجيل",
    webappHint: "☝️ اضغط الزر أعلاه"
  }
};

// ═══════════════════════════════════════════════════════════
// 🧠 MEMORY
// ═══════════════════════════════════════════════════════════

const HISTORY_LIMIT = 6;
const HISTORY_TTL = 7 * 24 * 3600;

async function getHistory(env, chatId) {
  try { const h = await env.DATA.get(`chat_history_${chatId}`, "json"); return Array.isArray(h) ? h : []; }
  catch (e) { return []; }
}
async function saveHistory(env, chatId, history) {
  try { await env.DATA.put(`chat_history_${chatId}`, JSON.stringify(history.slice(-HISTORY_LIMIT)), { expirationTtl: HISTORY_TTL }); } catch (e) {}
}
async function addToHistory(env, chatId, role, content) {
  if (!content) return;
  const h = await getHistory(env, chatId);
  h.push({ role, content, ts: Date.now() });
  await saveHistory(env, chatId, h);
}
async function clearHistory(env, chatId) {
  try { await env.DATA.delete(`chat_history_${chatId}`); } catch (e) {}
}

// ═══════════════════════════════════════════════════════════
// 🔔 SERIOUS INTENT DETECTION
// ═══════════════════════════════════════════════════════════

function detectSeriousIntent(text) {
  if (!text) return null;
  const t = String(text);
  if (/(?:میخوام\s*بخرم|میخوام\s*خرید|خریدارم|قصد\s*خرید|برا\s*خرید|میخرم|بخرم|معامله|قرارداد|امضا|امضاء|واریز|پیش\s*پرداخت|بیعانه)/i.test(t)) return "💰 قصد خرید";
  if (/(?:پسندیدم|خوشم\s*اومد|قبول\s*دارم|همین\s*رو\s*میخوام|همینو\s*میخوام|این\s*ملک\s*رو\s*میخوام|مناسب\s*هست|مناسبه)/i.test(t)) return "⭐ علاقه جدی به ملک";
  if (/(?:الان\s*میام|الان\s*بیام|همین\s*امروز\s*میام|فردا\s*صبح\s*میام|میام\s*ببینم|برای\s*بازدید\s*میام|کی\s*بیام|کِی\s*بیام)/i.test(t)) return "🚶 قصد بازدید فوری";
  if (/(?:زنگ\s*بزنید|زنگ\s*بزن|تماس\s*بگیرید|تماس\s*بگیر|شماره\s*بدید|شماره\s*بده)/i.test(t)) return "📞 درخواست تماس";
  if (/(?:فوری|فوریه|خیلی\s*فوری|عجله|زودتر|سریع)/i.test(t)) return "⚡ فوری";
  return null;
}

async function getAdminChatId(env) {
  if (env.ADMIN_CHAT_ID && String(env.ADMIN_CHAT_ID).trim()) return String(env.ADMIN_CHAT_ID).trim();
  try {
    const kvId = await env.DATA.get("admin_chat_id");
    if (kvId && String(kvId).trim()) return String(kvId).trim();
  } catch (e) {}
  return null;
}

async function alertAdminSerious(env, chatId, userName, userUsername, userText, intentType) {
  try {
    const adminId = await getAdminChatId(env);
    if (!adminId) return false;
    let msg = `🔴 <b>هشدار مشتری جدی!</b>\n\n`;
    msg += `🎯 <b>نوع:</b> ${intentType}\n`;
    msg += `👤 <b>نام:</b> ${userName}\n`;
    msg += `📛 <b>یوزرنیم:</b> @${userUsername}\n`;
    msg += `🆔 <b>چت:</b> ${chatId}\n\n`;
    msg += `💬 <b>پیام مشتری:</b>\n`;
    msg += `<i>${utf8Clean(userText).substring(0, 300)}</i>\n\n`;
    msg += `⚡ <b>سریع وارد شو و جواب بده!</b>`;
    const r = await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: msg, parse_mode: "HTML" });
    return r.ok;
  } catch (e) { return false; }
}

// ═══════════════════════════════════════════════════════════
// 🗺️ MAP LINK
// ═══════════════════════════════════════════════════════════

function getMapUrl(locationShort) {
  if (!locationShort) return "";
  return `https://maps.google.com/?q=${encodeURIComponent(locationShort + " قم")}`;
}

// ═══════════════════════════════════════════════════════════
// 📅 PERSIAN CALENDAR
// ═══════════════════════════════════════════════════════════

function gregorianToJalali(gy, gm, gd) {
  const g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  let jy = (gy <= 1600) ? 0 : 979;
  gy -= (gy <= 1600) ? 621 : 1600;
  const gy2 = (gm > 2) ? (gy + 1) : gy;
  let days = (365 * gy) + Math.floor((gy2 + 3) / 4) - Math.floor((gy2 + 99) / 100) + Math.floor((gy2 + 399) / 400) - 80 + gd + g_d_m[gm - 1];
  jy += 33 * Math.floor(days / 12053);
  days %= 12053;
  jy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) { jy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  const jm = (days < 186) ? 1 + Math.floor(days / 31) : 7 + Math.floor((days - 186) / 30);
  const jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
  return { jy, jm, jd };
}

function jalaliToGregorian(jy, jm, jd) {
  jy += 1595;
  let days = -355668 + (365 * jy) + (Math.floor(jy / 33) * 8) + Math.floor(((jy % 33) + 3) / 4) + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;
  if (days > 36524) { gy += 100 * Math.floor(--days / 36524); days %= 36524; if (days >= 365) days++; }
  gy += 4 * Math.floor(days / 1461);
  days %= 1461;
  if (days > 365) { gy += Math.floor((days - 1) / 365); days = (days - 1) % 365; }
  let gd = days + 1;
  const sal_a = [0, 31, ((gy % 4 === 0 && gy % 100 !== 0) || (gy % 400 === 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let gm = 0;
  for (gm = 0; gm < 13; gm++) { const v = sal_a[gm]; if (gd <= v) break; gd -= v; }
  return { gy, gm, gd };
}

function getTehranToday() {
  const nowUtc = new Date();
  const tehranNow = new Date(nowUtc.getTime() + 3.5 * 60 * 60 * 1000);
  const today = new Date(Date.UTC(tehranNow.getUTCFullYear(), tehranNow.getUTCMonth(), tehranNow.getUTCDate()));
  const todayJ = gregorianToJalali(today.getUTCFullYear(), today.getUTCMonth() + 1, today.getUTCDate());
  return { today, todayJ, tehranNow };
}

function toEnglishDigits(s) {
  return String(s).replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
}

function parsePersianDate(text) {
  if (!text) return null;
  const t = String(text).trim();
  const PERSIAN_MONTHS = {"فروردین":1,"فرودین":1,"اردیبهشت":2,"خرداد":3,"تیر":4,"مرداد":5,"شهریور":6,"مهر":7,"آبان":8,"ابان":8,"آذر":9,"اذر":9,"دی":10,"بهمن":11,"اسفند":12};
  const WEEKDAYS = {"شنبه":6,"یکشنبه":0,"یک‌شنبه":0,"یک شنبه":0,"دوشنبه":1,"دو‌شنبه":1,"دو شنبه":1,"سه‌شنبه":2,"سه شنبه":2,"سهشنبه":2,"چهارشنبه":3,"چهار‌شنبه":3,"چهار شنبه":3,"پنجشنبه":4,"پنج‌شنبه":4,"پنج شنبه":4,"جمعه":5};
  const { today, todayJ } = getTehranToday();
  let hour = 10, minute = 0;
  const timeMatch = t.match(/(?:ساعت\s*)?([۰-۹\d]+)(?::([۰-۹\d]+))?/);
  if (timeMatch) {
    let h = parseInt(toEnglishDigits(timeMatch[1]));
    let m = timeMatch[2] ? parseInt(toEnglishDigits(timeMatch[2])) : 0;
    if (h <= 8 && /عصر|شب/.test(t)) h += 12;
    if (h >= 0 && h <= 23) { hour = h; minute = m; }
  } else {
    if (/صبح/.test(t)) hour = 9;
    else if (/ظهر/.test(t)) hour = 12;
    else if (/عصر/.test(t)) hour = 17;
    else if (/شب/.test(t)) hour = 20;
  }
  let targetDate = null;
  if (/پس\s*فردا|پس‌فردا|پسفردا/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 2); }
  else if (/فردا/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 1); }
  else if (/امروز/.test(t)) { targetDate = new Date(today); }
  else if (/دیروز/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() - 1); }
  if (!targetDate) {
    for (const [dayName, dayNum] of Object.entries(WEEKDAYS)) {
      if (t.includes(dayName)) {
        const currentDay = today.getUTCDay();
        let diff = dayNum - currentDay;
        if (diff <= 0) diff += 7;
        targetDate = new Date(today);
        targetDate.setUTCDate(targetDate.getUTCDate() + diff);
        break;
      }
    }
  }
  if (!targetDate) {
    const daysMatch = t.match(/([۰-۹\d]+)\s*روز\s*(?:دیگه|بعد|آینده|اینده)/);
    if (daysMatch) {
      const n = parseInt(toEnglishDigits(daysMatch[1]));
      targetDate = new Date(today);
      targetDate.setUTCDate(targetDate.getUTCDate() + n);
    }
  }
  if (!targetDate && /هفته\s*(?:آینده|اینده|بعد|دیگه)/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 7); }
  if (!targetDate && /ماه\s*(?:آینده|اینده|بعد|دیگه)/.test(t)) { targetDate = new Date(today); targetDate.setUTCDate(targetDate.getUTCDate() + 30); }
  if (!targetDate) {
    for (const [monthName, monthNum] of Object.entries(PERSIAN_MONTHS)) {
      if (t.includes(monthName)) {
        const dayMatch = t.match(/([۰-۹\d]+)/);
        let day = 1;
        if (dayMatch) day = parseInt(toEnglishDigits(dayMatch[1]));
        let year = todayJ.jy;
        if (monthNum < todayJ.jm) year += 1;
        const g = jalaliToGregorian(year, monthNum, day);
        targetDate = new Date(Date.UTC(g.gy, g.gm - 1, g.gd));
        break;
      }
    }
  }
  if (!targetDate && timeMatch) targetDate = new Date(today);
  if (!targetDate) return null;
  return `${targetDate.getUTCFullYear()}-${String(targetDate.getUTCMonth()+1).padStart(2,"0")}-${String(targetDate.getUTCDate()).padStart(2,"0")}T${String(hour).padStart(2,"0")}:${String(minute).padStart(2,"0")}:00+03:30`;
}

async function convertPersianDateForAI(env, args) {
  const text = args.persianText || args.text || "";
  const iso = parsePersianDate(text);
  if (!iso) return { ok: false, error: "نتوانستم تاریخ رو تشخیص بدم" };
  const d = new Date(iso);
  const faDate = d.toLocaleString("fa-IR", { weekday: "long", year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' });
  return { ok: true, iso, faDate };
}

async function calculateMortgageForAI(env, args) {
  try {
    const amountMillion = parseFloat(args.loanAmount || 0);
    const years = parseInt(args.years || 10);
    const rate = parseFloat(args.rate || 23);
    if (!amountMillion || amountMillion <= 0) return { ok: false, error: "مبلغ وام نامعتبر" };
    const principal = amountMillion * 1000000;
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    let monthlyPayment = 0;
    if (monthlyRate > 0) {
      monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    } else {
      monthlyPayment = principal / n;
    }
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - principal;
    const toMillion = (v) => Math.round(v / 1000000 * 10) / 10;
    return {
      ok: true, loanAmountMillion: amountMillion, years, rate,
      monthlyPaymentMillion: toMillion(monthlyPayment),
      totalPaymentMillion: toMillion(totalPayment),
      totalInterestMillion: toMillion(totalInterest)
    };
  } catch (e) { return { ok: false, error: e.message }; }
}

async function estimatePropertyPriceForAI(env, args) {
  try {
    const all = await getListings(env, "all", "0");
    let similar = all;
    if (args.type && args.type !== "any") similar = similar.filter(x => x.type === args.type);
    if (args.propertyType) {
      const pt = args.propertyType.toLowerCase();
      similar = similar.filter(x => (x.propertyType || "").toLowerCase().includes(pt));
    }
    if (args.location) {
      const lc = args.location.toLowerCase();
      similar = similar.filter(x => ((x.location_short || x.location) || "").toLowerCase().includes(lc));
    }
    if (args.minSize || args.maxSize) {
      similar = similar.filter(x => {
        const m = (x.size || "").match(/(\d+)/);
        if (!m) return false;
        const sz = parseInt(m[1]);
        if (args.minSize && sz < args.minSize) return false;
        if (args.maxSize && sz > args.maxSize) return false;
        return true;
      });
    }
    if (similar.length < 3) return { ok: false, error: "ملک مشابه کافی نیست" };
    const prices = [];
    for (const x of similar) {
      const sizeMatch = (x.size || "").match(/(\d+)/);
      if (!sizeMatch) continue;
      const size = parseInt(sizeMatch[1]);
      const p = priceToNumber(x.price || "");
      if (p > 0 && size > 0) prices.push(p / size);
    }
    if (prices.length === 0) return { ok: false, error: "قیمت‌ها قابل محاسبه نبود" };
    const avg = prices.reduce((a, b) => a + b, 0) / prices.length;
    const mn = Math.min(...prices);
    const mx = Math.max(...prices);
    const result = {
      ok: true, count: similar.length,
      avgPricePerSqmMillion: Math.round(avg * 10) / 10,
      minPricePerSqmMillion: Math.round(mn * 10) / 10,
      maxPricePerSqmMillion: Math.round(mx * 10) / 10
    };
    if (args.size) result.estimatedTotalMillion = Math.round(avg * args.size);
    return result;
  } catch (e) { return { ok: false, error: e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 🤝 NEGOTIATION
// ═══════════════════════════════════════════════════════════

async function negotiatePriceForAI(env, args, chatId, userName, userUsername) {
  try {
    const adminId = await getAdminChatId(env);
    if (!adminId) return { ok: false, error: "مدیر در دسترس نیست." };
    const ts = Date.now();
    const negKey = `neg_${ts}`;
    await env.DATA.put(negKey, JSON.stringify({
      chatId, userName, userUsername,
      propertyKey: args.propertyKey || "",
      propertyDesc: args.propertyDesc || "",
      originalPrice: args.originalPrice || "",
      customerOffer: args.customerOffer || "",
      customerNote: args.customerNote || "",
      status: "pending",
      createdAt: new Date().toISOString()
    }), { expirationTtl: 7 * 24 * 3600 });

    let msg = `🤝 <b>پیشنهاد مذاکره جدید!</b>\n\n`;
    msg += `👤 <b>مشتری:</b> ${userName}\n`;
    msg += `📛 <b>یوزرنیم:</b> @${userUsername}\n`;
    msg += `🆔 <b>چت:</b> ${chatId}\n\n`;
    if (args.propertyDesc) msg += `🏠 <b>ملک:</b> ${args.propertyDesc}\n`;
    if (args.originalPrice) msg += `💰 <b>قیمت اعلامی:</b> ${args.originalPrice}\n`;
    msg += `\n💬 <b>پیشنهاد مشتری:</b> ${args.customerOffer}\n`;
    if (args.customerNote) msg += `📝 <b>توضیحات:</b> ${args.customerNote}\n`;
    msg += `\n👆 یه گزینه انتخاب کن:`;

    await sendToTelegram(env, "sendMessage", {
      chat_id: adminId, text: msg, parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "✅ قبول", callback_data: `neg_accept_${negKey}` }, { text: "❌ رد", callback_data: `neg_reject_${negKey}` }],
          [{ text: "💬 پیام خودم", callback_data: `neg_custom_${negKey}` }]
        ]
      }
    });
    return { ok: true, message: "پیشنهادت به مدیر رسید." };
  } catch (e) { return { ok: false, error: e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 📢 SMART AUTO-NOTIFY
// ═══════════════════════════════════════════════════════════

async function notifyMatchingCustomers(env, listing) {
  try {
    const adminId = await getAdminChatId(env);
    const frList = await env.DATA.list({ prefix: "file_req_" });
    if (!frList.keys || frList.keys.length === 0) return;

    const listingType = listing.type;
    const listingLoc = ((listing.location_short || listing.location) || "").toLowerCase().trim();
    const listingPt = (listing.propertyType || "").toLowerCase().trim();
    const listingPrice = priceToNumber(listing.price || "");

    let notifiedCount = 0;
    let matchedNames = [];

    for (const k of frList.keys) {
      try {
        const fr = await env.DATA.get(k.name, "json");
        if (!fr || !fr.chatId) continue;
        if (fr.notified) continue;

        const frText = ((fr.details || "")).toLowerCase();
        let score = 0;

        if (listingLoc && frText.includes(listingLoc)) score += 4;
        if (listingPt && frText.includes(listingPt)) score += 4;
        if (listingType === "sell" && /(فروش|خرید|بخرم|میخرم|خریدار)/.test(frText)) score += 2;
        else if (listingType === "rent" && /(اجاره|رهن)/.test(frText)) score += 2;

        if (listingPrice > 0) {
          const budgetMatch = frText.match(/(\d+(?:\.\d+)?)\s*(میلیارد|میلیون)/);
          if (budgetMatch) {
            let budget = parseFloat(budgetMatch[1]);
            if (/میلیارد/.test(budgetMatch[2])) budget *= 1000;
            const ratio = listingPrice / budget;
            if (ratio <= 1.0) score += 3;
            else if (ratio <= 1.15) score += 1;
          }
        }

        if (score >= 6) {
          let msg = `🎯 <b>خبر خوب رفیق!</b>\n\n`;
          msg += `یه ملک جدید پیدا شد که با درخواستت هماهنگه:\n\n`;
          msg += `🏘️ ${listing.propertyType || "-"}\n`;
          msg += `📍 محله: ${listing.location_short || listing.location || "-"}\n`;
          msg += `📐 متراژ: ${listing.size || "-"}\n`;
          if (listing.year_built) msg += `🏗️ سال ساخت: ${listing.year_built}\n`;
          if (listing.rooms) msg += `🛏️ اتاق: ${listing.rooms}\n`;
          if (listing.floor) msg += `🏢 طبقه: ${listing.floor}\n`;
          if (listing.amenities) msg += `✨ امکانات: ${listing.amenities}\n`;
          if (listing.document) msg += `📄 سند: ${listing.document}\n`;
          msg += `💰 قیمت: ${listing.price || "-"}\n`;
          if (listing.price_per_meter) msg += `📊 هر متر: ${listing.price_per_meter}\n`;
          if (listing.extra_notes) msg += `📝 ${listing.extra_notes.substring(0, 100)}\n`;
          msg += `\n📞 برای اطلاعات بیشتر با ما تماس بگیر یا توی ربات بنویس.`;

          const sendResult = await sendToTelegram(env, "sendMessage", { chat_id: fr.chatId, text: msg, parse_mode: "HTML" });
          if (sendResult.ok) {
            fr.notified = true;
            fr.notifiedListingKey = listing._key || "";
            fr.notifiedAt = new Date().toISOString();
            await env.DATA.put(k.name, JSON.stringify(fr));
            notifiedCount++;
            matchedNames.push(fr.userName || fr.userUsername || "مشتری");
          }
        }
      } catch (e) { console.error("notify customer error:", e.message); }
    }

    if (adminId && notifiedCount > 0) {
      let report = `📢 <b>اعلان خودکار ارسال شد</b>\n\n`;
      report += `🏘️ ملک: ${listing.propertyType || "-"} ${listing.size || ""}\n`;
      report += `📍 محله: ${listing.location_short || listing.location || "-"}\n`;
      report += `💰 قیمت: ${listing.price || "-"}\n\n`;
      report += `✅ به <b>${notifiedCount}</b> مشتری منتظر پیام دادم:\n`;
      report += matchedNames.slice(0, 10).map(n => "• " + n).join("\n");
      if (matchedNames.length > 10) report += `\n... و ${matchedNames.length - 10} نفر دیگه`;
      await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: report, parse_mode: "HTML" });
    }
  } catch (e) { console.error("notifyMatchingCustomers error:", e.message); }
}

// ═══════════════════════════════════════════════════════════
// 🛡️ UTF-8 CLEANER
// ═══════════════════════════════════════════════════════════

function utf8Clean(text) {
  if (!text) return "";
  let s = String(text);
  s = s.replace(/\u0000/g, "").replace(/\uFEFF/g, "");
  s = s.replace(/[\u0001-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "");
  s = s.replace(/[\u200B-\u200F\u2028-\u202F\u2060-\u206F]/g, "");
  let out = "";
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    if (c >= 0xD800 && c <= 0xDBFF) {
      const n = s.charCodeAt(i + 1);
      if (n >= 0xDC00 && n <= 0xDFFF) { out += s[i] + s[i + 1]; i++; }
    } else if (c >= 0xDC00 && c <= 0xDFFF) {
    } else { out += s[i]; }
  }
  try {
    const bytes = new TextEncoder().encode(out);
    out = new TextDecoder("utf-8", { fatal: false, ignoreBOM: true }).decode(bytes);
    out = out.replace(/\uFFFD/g, "");
  } catch (e) {}
  return out.trim();
}

async function getChannelId(env) {
  let rawId = null;
  try {
    const kvId = await env.DATA.get("channel_id");
    if (kvId && kvId.trim()) rawId = kvId;
  } catch (e) {}
  if (!rawId && env.CHANNEL_ID) rawId = env.CHANNEL_ID;
  if (!rawId) return null;
  let clean = utf8Clean(String(rawId)).replace(/[\s\u200B-\u200D\uFEFF]+/g, "");
  return clean || null;
}

// ═══════════════════════════════════════════════════════════
// 🛡️ MASTER SHIELD
// ═══════════════════════════════════════════════════════════

function wordsToNumbers(text) {
  if (!text) return text;
  let r = text;
  const emojiMap = {"0️⃣":"0","1️⃣":"1","2️⃣":"2","3️⃣":"3","4️⃣":"4","5️⃣":"5","6️⃣":"6","7️⃣":"7","8️⃣":"8","9️⃣":"9"};
  for (const [k, v] of Object.entries(emojiMap)) r = r.split(k).join(v);
  r = r.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  r = r.replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
  const numMap = {
    "صفر":"0","یک":"1","دو":"2","سه":"3","چهار":"4","پنج":"5","شش":"6","شیش":"6","هفت":"7","هشت":"8","نه":"9","نُه":"9",
    "sefr":"0","sifr":"0","yek":"1","do":"2","se":"3","seh":"3","chahar":"4","char":"4","panj":"5","pang":"5","shesh":"6","shish":"6","haft":"7","hasht":"8","noh":"9"
  };
  const sortedWords = Object.keys(numMap).sort((a, b) => b.length - a.length);
  for (const w of sortedWords) {
    const re = new RegExp(`(^|[^a-zA-Z\\u0600-\\u06FF])${w}(?![a-zA-Z\\u0600-\\u06FF])`, "gi");
    r = r.replace(re, (m, pre) => pre + numMap[w]);
  }
  return r;
}

function detectSuspiciousNumbers(text) {
  if (!text) return false;
  const normalized = wordsToNumbers(text);
  const digitsOnly = normalized.replace(/[^\d]/g, "");
  const patterns = [/\d{4}[\s\-\.\(\)]*\d{3,4}[\s\-\.\(\)]*\d{3,4}/, /\d{10,}/, /@[a-zA-Z0-9_]{3,}/];
  for (const p of patterns) if (p.test(normalized)) return true;
  if (digitsOnly.length >= 8) return true;
  return false;
}

function masterSanitize(text) {
  if (!text) return text;
  let r = wordsToNumbers(text);
  r = r.replace(/(?:0|98|\+98)?[\s\-\.]*9[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d/g, "");
  r = r.replace(/\d{4}[\s\-\.]+\d{3,4}[\s\-\.]+\d{3,4}/g, "");
  r = r.replace(/\d{8,}/g, "");
  r = r.replace(/@[a-zA-Z0-9_]{3,}/g, "");
  r = r.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "");
  r = r.replace(/(?:https?:\/\/)?(?:t\.me|wa\.me|telegram|whatsapp)[^\s]*/gi, "");
  r = r.replace(/[،,]{3,}/g, "،");
  r = r.replace(/\s{3,}/g, " ");
  r = r.replace(/^\s*[،,.\-\s]+|[،,.\-\s]+$/g, "");
  return r.trim();
}

function sanitizeLocation(location) {
  if (!location) return "";
  let r = wordsToNumbers(location);
  r = r.replace(/\n/g, " ").trim();
  const parts = r.split(/[،,]+/).map(p => p.trim()).filter(p => p);
  if (parts.length > 0) {
    const addrKeywords = /(?:خیابان|کوچه|پلاک|بن\s*بست|نبش|جنب|روبروی|مقابل|انتهای|ابتدای|فرعی|پ\.|ک\.|خ\.)/i;
    const clean = parts.filter(p => !addrKeywords.test(p) && !/\d{3,}/.test(p));
    r = clean.length > 0 ? clean[0] : parts[0];
  }
  r = r.replace(/(?:خیابان|کوچه|پلاک|نبش|جنب|روبروی|مقابل|بن\s*بست|انتهای|ابتدای|فرعی)[^\s,،.]{0,30}/gi, "");
  r = r.replace(/\d+/g, "");
  r = r.replace(/\s{2,}/g, " ");
  r = r.replace(/^\s*[،,.\s]+|[،,\s]+$/g, "");
  const words = r.split(/\s+/).filter(w => w.length > 0);
  if (words.length > 2) r = words.slice(0, 2).join(" ");
  return r.trim();
}

function cleanFullAddress(addr) {
  if (!addr) return "";
  let r = wordsToNumbers(addr);
  r = r.replace(/\n/g, " ").trim();
  r = r.replace(/(?:0|98|\+98)?[\s\-\.]*9[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d[\s\-\.]*\d/g, "");
  r = r.replace(/\d{8,}/g, "");
  r = r.replace(/@[a-zA-Z0-9_]{3,}/g, "");
  r = r.replace(/\s{2,}/g, " ");
  r = r.replace(/^\s*[،,.\-\s]+|[،,.\-\s]+$/g, "");
  return r.trim();
}

// ═══════════════════════════════════════════════════════════
// 📢 TELEGRAM SEND (SAFE)
// ═══════════════════════════════════════════════════════════

async function sendToTelegram(env, method, payload) {
  try {
    const jsonStr = JSON.stringify(payload);
    const blob = new Blob([jsonStr], { type: "application/json; charset=utf-8" });
    const r = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/${method}`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: blob
    });
    const text = await r.text();
    try { return JSON.parse(text); }
    catch (e) {
      console.error("sendToTelegram non-JSON:", method, text.substring(0, 200));
      return { ok: false, description: "Non-JSON response from Telegram" };
    }
  } catch (e) {
    console.error("sendToTelegram fetch failed:", method, e.message);
    return { ok: false, description: "Fetch failed: " + e.message };
  }
}

// ═══════════════════════════════════════════════════════════
// 📢 POST TO CHANNEL
// ═══════════════════════════════════════════════════════════

async function postToChannelWithAI(env, listing, listingKey) {
  const channelId = await getChannelId(env);
  if (!channelId) return { ok: false, error: "CHANNEL_ID تنظیم نشده" };

  let cleanNotes = listing.extra_notes || "";
  if (cleanNotes && detectSuspiciousNumbers(cleanNotes)) {
    cleanNotes = masterSanitize(cleanNotes);
    if (detectSuspiciousNumbers(cleanNotes)) cleanNotes = "";
  }
  const cleanLoc = sanitizeLocation(listing.location || "");

  let aiDesc = "";
  try {
    const prompt = `یه جمله کوتاه جذاب (حداکثر ۱۵ کلمه) برای توضیحات این ملک بنویس.
نوع: ${listing.propertyType || "-"}, متراژ: ${listing.size || "-"}, محله: ${cleanLoc || "-"}, قیمت: ${listing.price || "-"}
قوانین: بدون شماره، آدرس دقیق، لینک. فقط یه جمله.`;
    const gr = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}`, "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7, max_tokens: 80
      })
    });
    if (gr.ok) {
      const gd = await gr.json();
      aiDesc = (gd.choices && gd.choices[0]) ? gd.choices[0].message.content.trim().replace(/^["«»]+|["«»]+$/g, "") : "";
      if (detectSuspiciousNumbers(aiDesc)) aiDesc = masterSanitize(aiDesc);
    }
  } catch (e) { aiDesc = ""; }

  const typeLabel = listing.type === "rent" ? "🔑 رهن و اجاره" : "💰 فروش";

  let postText = "";
  postText += `🏘️ ${listing.propertyType || "ملک"}\n`;
  postText += `${typeLabel}\n`;
  postText += `━━━━━━━━━━━━━━\n\n`;
  if (cleanLoc) postText += `📍 محله: ${cleanLoc}\n`;
  if (listing.size) postText += `📐 متراژ: ${listing.size}\n`;
  if (listing.year_built) postText += `🏗️ سال ساخت: ${listing.year_built}\n`;
  if (listing.rooms) postText += `🛏️ تعداد اتاق: ${listing.rooms}\n`;
  if (listing.floor) postText += `🏢 طبقه: ${listing.floor}\n`;
  if (listing.amenities) postText += `✨ امکانات: ${listing.amenities}\n`;
  if (listing.document) postText += `📄 سند: ${listing.document}\n`;
  if (listing.price) postText += `💰 قیمت: ${listing.price}\n`;
  if (listing.price_per_meter && listing.type === "sell") postText += `📊 هر متر: ${listing.price_per_meter}\n`;
  if (cleanNotes) postText += `📝 ویژگی‌ها: ${cleanNotes}\n`;
  if (aiDesc) postText += `\n💬 ${aiDesc}\n`;
  postText += `\n━━━━━━━━━━━━━━\n`;
  postText += `🌐 سایت: ${SITE_MAIN}\n`;
  postText += `🤖 مشاوره: ${BOT_URL}`;

  try {
    const footer = await env.DATA.get("channel_footer");
    if (footer && footer.trim()) {
      const cleanFooter = utf8Clean(footer);
      if (cleanFooter) postText += `\n\n━━━━━━━━━━━━━━\n${cleanFooter}`;
    }
  } catch (e) {}

  if (detectSuspiciousNumbers(postText)) postText = masterSanitize(postText);
  postText = utf8Clean(postText);

  // 🎬 مدیای چندتایی
  if (listing.mediaFiles && listing.mediaFiles.length > 0) {
    const first = listing.mediaFiles[0];
    try {
      let d = null;
      if (first.type === "photo") {
        d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: first.fileId, caption: postText });
      } else if (first.type === "video") {
        d = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: first.fileId, caption: postText });
      }
      if (d && d.ok) {
        for (let i = 1; i < listing.mediaFiles.length && i < 10; i++) {
          const m = listing.mediaFiles[i];
          try {
            if (m.type === "photo") await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: m.fileId });
            else if (m.type === "video") await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: m.fileId });
          } catch (e) {}
        }
        return { ok: true, postText, messageId: d.result.message_id };
      }
    } catch (e) {}
  }

  // 🎬 مدیای تک
  if (listing.mediaFileId && listing.mediaType === "photo") {
    try {
      let data = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: listing.mediaFileId, caption: postText });
      if (!data.ok) {
        await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: listing.mediaFileId });
        data = await sendToTelegram(env, "sendMessage", { chat_id: channelId, text: postText });
      }
      if (data.ok) return { ok: true, postText, messageId: data.result.message_id };
    } catch (e) {}
  }

  if (listing.mediaFileId && listing.mediaType === "video") {
    try {
      let data = await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: listing.mediaFileId, caption: postText });
      if (!data.ok) {
        await sendToTelegram(env, "sendVideo", { chat_id: channelId, video: listing.mediaFileId });
        data = await sendToTelegram(env, "sendMessage", { chat_id: channelId, text: postText });
      }
      if (data.ok) return { ok: true, postText, messageId: data.result.message_id };
    } catch (e) {}
  }

  // 🖼️ عکس پیش‌فرض
  try {
    const d = await sendToTelegram(env, "sendPhoto", { chat_id: channelId, photo: DEFAULT_LISTING_PHOTO, caption: postText });
    if (d.ok) return { ok: true, postText, messageId: d.result.message_id };
  } catch (e) {}

  // 📝 فقط متن
  const data = await sendToTelegram(env, "sendMessage", { chat_id: channelId, text: postText });
  if (!data.ok) return { ok: false, error: data.description || "خطای ارسال" };
  return { ok: true, postText, messageId: data.result.message_id };
}

// ═══════════════════════════════════════════════════════════
// 🎭 SYSTEM PROMPT
// ═══════════════════════════════════════════════════════════

function buildSystemPrompt(lang, userName) {
  const name = userName || "کاربر";
  const langMap = { fa: "فارسی", en: "English", ar: "العربية" };
  const currentLang = langMap[lang] || "فارسی";
  const { todayJ, tehranNow } = getTehranToday();
  const dayNames = ["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"];
  const dayName = dayNames[tehranNow.getUTCDay()];
  const faDate = `${todayJ.jy}/${String(todayJ.jm).padStart(2,"0")}/${String(todayJ.jd).padStart(2,"0")}`;

  return `تو "الی" هستی، دستیار هوشمند املاک نعمتی در قم.

## 📅 امروز: ${dayName} — ${faDate}
## زبان: ${currentLang} | نام کاربر: ${name}

## شخصیت: گرم، صمیمی، کوتاه

## کسب‌وکار: املاک نعمتی | قم، کلهری | ${SITE_MAIN}

## قوانین:
1. هیچ شماره/آیدی/ایمیل توی آگهی نره
2. تاریخ شمسی؟ از convert_persian_date
3. وام؟ از calculate_mortgage با نرخ پیش‌فرض ۲۳٪
4. تخمین قیمت؟ از estimate_property_price. اگه ok:false، از خودت نساز
5. قیمت فقط تومان
6. جواب کوتاه (max 3 lines)

## 🤝 مذاکره قیمت (خیلی مهم!):
هر وقت مشتری گفت گرونه، تخفیف میخواد، یا قیمت پیشنهاد داد → از negotiate_price استفاده کن.
مراحل:
1. اول بپرس: «چند می‌خوای بدی؟»
2. مشتری قیمت داد
3. ابزار negotiate_price رو صدا بزن
4. بگو: «پیشنهادت رو به مدیر دادم.»

❌ هرگز خودت تخفیف نده.

## ابزارها: search_listings, save_file_request, book_appointment, convert_persian_date, calculate_mortgage, estimate_property_price, negotiate_price`;
}

// ═══════════════════════════════════════════════════════════
// 🛠️ TOOLS
// ═══════════════════════════════════════════════════════════

const AI_TOOLS = [
  { type: "function", function: {
    name: "search_listings", description: "جستجوی ملک.",
    parameters: { type: "object", properties: {
      type: { type: "string", enum: ["sell", "rent", "any"] },
      propertyType: { type: "string" }, location: { type: "string" },
      minSize: { type: "number" }, maxSize: { type: "number" }, maxPrice: { type: "number" }
    }, required: [], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "save_file_request", description: "ثبت فایل‌یابی.",
    parameters: { type: "object", properties: {
      details: { type: "string" }, customerName: { type: "string" }, customerPhone: { type: "string" }
    }, required: ["details"], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "book_appointment", description: "ثبت قرار بازدید.",
    parameters: { type: "object", properties: {
      customerName: { type: "string" }, customerPhone: { type: "string" },
      dateISO: { type: "string" }, propertyDesc: { type: "string" },
      note: { type: "string" }, type: { type: "string", enum: ["visit", "call", "meeting"] }
    }, required: ["customerName", "customerPhone", "dateISO"], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "convert_persian_date", description: "تبدیل تاریخ شمسی به ISO.",
    parameters: { type: "object", properties: { persianText: { type: "string" } },
      required: ["persianText"], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "calculate_mortgage", description: "محاسبه قسط وام. نرخ پیش‌فرض ۲۳٪.",
    parameters: { type: "object", properties: {
      loanAmount: { type: "number" }, years: { type: "number" }, rate: { type: "number" }
    }, required: ["loanAmount"], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "estimate_property_price", description: "تخمین قیمت ملک.",
    parameters: { type: "object", properties: {
      type: { type: "string", enum: ["sell", "rent", "any"] },
      propertyType: { type: "string" }, location: { type: "string" },
      minSize: { type: "number" }, maxSize: { type: "number" }, size: { type: "number" }
    }, required: [], additionalProperties: false }
  }},
  { type: "function", function: {
    name: "negotiate_price",
    description: "وقتی مشتری گفت گرونه، تخفیف میخواد، قیمت پیشنهاد داد، یا درخواست چانه زنی کرد، این ابزار رو صدا بزن. قبلش از مشتری بپرس چه قیمتی میخواد.",
    parameters: { type: "object", properties: {
      propertyDesc: { type: "string" },
      originalPrice: { type: "string" },
      customerOffer: { type: "string" },
      customerNote: { type: "string" }
    }, required: ["customerOffer"], additionalProperties: false }
  }}
];

// ═══════════════════════════════════════════════════════════
// 🔧 TOOL FUNCTIONS
// ═══════════════════════════════════════════════════════════

async function searchListingsForAI(env, args) {
  const clean = {};
  for (const [k, v] of Object.entries(args || {})) {
    if (v !== null && v !== undefined && v !== "") clean[k] = v;
  }
  args = clean;
  const all = await getListings(env, "all", "0");
  let f = all;
  if (args.type && args.type !== "any") f = f.filter(x => x.type === args.type);
  if (args.propertyType) {
    const pt = args.propertyType.toLowerCase();
    f = f.filter(x => (x.propertyType || "").toLowerCase().includes(pt));
  }
  if (args.location) {
    const lc = args.location.toLowerCase();
    f = f.filter(x => ((x.location_short || x.location) || "").toLowerCase().includes(lc));
  }
  if (args.minSize || args.maxSize) {
    f = f.filter(x => {
      const m = (x.size || "").match(/(\d+)/);
      if (!m) return false;
      const sz = parseInt(m[1]);
      if (args.minSize && sz < args.minSize) return false;
      if (args.maxSize && sz > args.maxSize) return false;
      return true;
    });
  }
  if (args.maxPrice) {
    f = f.filter(x => { const p = priceToNumber(x.price || ""); return p > 0 && p <= args.maxPrice; });
  }
  const results = f.slice(0, 5).map(x => ({
    key: x._key, type: x.type === "rent" ? "اجاره" : "فروش",
    propertyType: x.propertyType || "-", size: x.size || "-",
    year_built: x.year_built || "-", rooms: x.rooms || "-",
    floor: x.floor || "-", amenities: x.amenities || "-",
    location: (x.location_short || x.location) || "-",
    price: x.price || "-", price_per_meter: x.price_per_meter || "-",
    document: x.document || "-", notes: x.extra_notes || ""
  }));
  return { total: f.length, shown: results.length, listings: results };
}

async function bookAppointmentForAI(env, args, chatId, userName, userUsername) {
  try {
    const pd = new Date(args.dateISO);
    if (isNaN(pd.getTime())) return { ok: false, error: "تاریخ نامعتبر" };
    const ts = Date.now();
    const appt = {
      customerKey: "", customerName: args.customerName || userName,
      customerPhone: args.customerPhone || "", chatId, username: userUsername,
      date: args.dateISO, duration: 30, type: args.type || "visit",
      propertyKey: "", propertyDesc: args.propertyDesc || "",
      note: args.note || "📱 ثبت AI",
      status: "pending", reminderSent: false, reminder1hSent: false,
      source: "bot_ai", createdAt: new Date().toISOString()
    };
    await env.DATA.put(`appt_${ts}`, JSON.stringify(appt));
    const faDate = pd.toLocaleString("fa-IR", { weekday: "long", year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Tehran' });
    const tL = { visit: "🏠 بازدید", call: "📞 تماس", meeting: "🤝 جلسه" };
    let msg = `📅 قرار جدید\n\n👤 ${appt.customerName}\n📛 @${userUsername}\n`;
    if (appt.customerPhone) msg += `📞 ${appt.customerPhone}\n`;
    msg += `🎯 ${tL[appt.type] || "🏠 بازدید"}\n🕐 ${faDate}\n`;
    if (appt.propertyDesc) msg += `🏠 ${appt.propertyDesc}\n`;
    msg += `\n🆔 ${chatId}`;
    await notifyAdmin(env, msg);
    return { ok: true, dateFormatted: faDate, faDate };
  } catch (e) { return { ok: false, error: e.message }; }
}

async function saveFileRequestForAI(env, args, chatId, userName, userUsername) {
  try {
    const ts = Date.now();
    await env.DATA.put(`file_req_${ts}`, JSON.stringify({
      userName: args.customerName || userName, userUsername, chatId,
      phone: args.customerPhone || "", details: args.details,
      source: "bot_ai", date: new Date().toISOString()
    }));
    let m = `📋 فایل یابی\n\n👤 ${args.customerName || userName}\n📛 @${userUsername}\n🆔 ${chatId}\n`;
    if (args.customerPhone) m += `📞 ${args.customerPhone}\n`;
    m += `\n📝 ${args.details}`;
    await notifyAdmin(env, m);
    return { ok: true };
  } catch (e) { return { ok: false, error: e.message }; }
}

// ═══════════════════════════════════════════════════════════
// 🤖 AI REPLY
// ═══════════════════════════════════════════════════════════

async function callGroq(env, messages, useTools) {
  const body = { model: "openai/gpt-oss-120b", messages, temperature: 0.5, max_tokens: 400 };
  if (useTools) { body.tools = AI_TOOLS; body.tool_choice = "auto"; }
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}`, "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body)
  });
  let data = {};
  try { data = await r.json(); } catch (e) { data = { error: { message: "Non-JSON" } }; }
  return { status: r.status, ok: r.ok, data };
}

async function callGroqWithRetry(env, messages, useTools) {
  const delays = [0, 2000, 4000, 6000, 8000];
  for (let i = 0; i < delays.length; i++) {
    if (delays[i] > 0) await new Promise(r => setTimeout(r, delays[i]));
    let res = await callGroq(env, messages, useTools);
    if (res.status !== 429 && res.status !== 503 && res.status !== 502) return res;
  }
  return { status: 429, ok: false, data: { error: { message: "rate limit" } } };
}

async function aiReply(env, chatId, userText, userLang, userName, userUsername) {
  try {
    const history = await getHistory(env, chatId);
    const normText = wordsToNumbers(userText);
    let messages = [
      { role: "system", content: buildSystemPrompt(userLang, userName) },
      ...history.map(h => ({ role: h.role, content: h.content })),
      { role: "user", content: normText }
    ];

    let res = await callGroqWithRetry(env, messages, true);
    if (!res.ok) {
      if (res.status === 429) return "رفیق الان یه کم سرم شلوغه 🙏 چند لحظه دیگه دوباره بپرس";
      return "⚠️ خطای AI: " + (res.data.error?.message || "نامشخص");
    }
    let gd = res.data;
    let choice = gd.choices && gd.choices[0];
    if (!choice) return "پاسخی دریافت نشد";
    let aiMsg = choice.message;
    let loop = 0;
    while (aiMsg.tool_calls && aiMsg.tool_calls.length > 0 && loop < 3) {
      loop++;
      messages.push(aiMsg);
      for (const tc of aiMsg.tool_calls) {
        let a = {};
        try { a = JSON.parse(tc.function.arguments || "{}"); } catch (e) {}
        let r;
        if (tc.function.name === "search_listings") r = await searchListingsForAI(env, a);
        else if (tc.function.name === "book_appointment") r = await bookAppointmentForAI(env, a, chatId, userName, userUsername);
        else if (tc.function.name === "save_file_request") r = await saveFileRequestForAI(env, a, chatId, userName, userUsername);
        else if (tc.function.name === "convert_persian_date") r = await convertPersianDateForAI(env, a);
        else if (tc.function.name === "calculate_mortgage") r = await calculateMortgageForAI(env, a);
        else if (tc.function.name === "estimate_property_price") r = await estimatePropertyPriceForAI(env, a);
        else if (tc.function.name === "negotiate_price") r = await negotiatePriceForAI(env, a, chatId, userName, userUsername);
        else r = { ok: false, error: "ناشناخته" };
        messages.push({ role: "tool", tool_call_id: tc.id, content: JSON.stringify(r) });
      }
      res = await callGroqWithRetry(env, messages, true);
      if (!res.ok) return "رفیق الان یه کم سرم شلوغه 🙏 چند لحظه دیگه دوباره بپرس";
      gd = res.data;
      choice = gd.choices && gd.choices[0];
      if (!choice) break;
      aiMsg = choice.message;
    }
    const reply = (aiMsg && aiMsg.content) ? aiMsg.content.trim() : "پاسخی دریافت نشد";
    await addToHistory(env, chatId, "user", userText);
    await addToHistory(env, chatId, "assistant", reply);
    return reply;
  } catch (e) { return "⚠️ خطای ارتباط: " + e.message; }
}

// ═══════════════════════════════════════════════════════════
// ⌨️ KEYBOARDS
// ═══════════════════════════════════════════════════════════

function kbWelcome() { return { inline_keyboard: [[{ text: "شروع - Start - ابدا", callback_data: "start_wizard" }]] }; }
function kbLang() { return { keyboard: [[{ text: "فارسی" }, { text: "عربی" }, { text: "English" }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbMain(lang) {
  const t = TX[lang] || TX.fa;
  return { keyboard: [[{ text: t.menuViewSell }, { text: t.menuViewRent }], [{ text: t.menuListSell }, { text: t.menuListRent }], [{ text: t.menuConsult }], [{ text: t.menuSite }]], resize_keyboard: true, one_time_keyboard: false };
}
function kbSession(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.back }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbExtra(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.skip }, { text: t.back }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbBudgetSell(lang) {
  const t = TX[lang] || TX.fa;
  return { inline_keyboard: [
    [{ text: t.filterAll, callback_data: "fshow_sell_all" }],
    [{ text: t.budgetUnder2, callback_data: "fsell_1" }],
    [{ text: t.budget2to5, callback_data: "fsell_2" }],
    [{ text: t.budget5to10, callback_data: "fsell_3" }],
    [{ text: t.budgetOver10, callback_data: "fsell_4" }]
  ] };
}
function kbBudgetRent(lang) {
  const t = TX[lang] || TX.fa;
  return { inline_keyboard: [
    [{ text: t.filterAll, callback_data: "fshow_rent_all" }],
    [{ text: t.budgetUnder500Rent, callback_data: "frent_1" }],
    [{ text: t.budget500to1Rent, callback_data: "frent_2" }],
    [{ text: t.budget1to2Rent, callback_data: "frent_3" }],
    [{ text: t.budgetOver2Rent, callback_data: "frent_4" }]
  ] };
}
function kbFileRequest(lang) {
  const t = TX[lang] || TX.fa;
  return { inline_keyboard: [[{ text: t.fileReqYes, callback_data: "filereq_yes" }], [{ text: t.fileReqNo, callback_data: "filereq_no" }]] };
}
function kbListingRequest(lang, listingKey) {
  const t = TX[lang] || TX.fa;
  return { inline_keyboard: [[{ text: t.requestBtn, callback_data: `req_${listingKey}` }]] };
}
function kbReqPhone(lang) { const t = TX[lang] || TX.fa; return { keyboard: [[{ text: t.skip }, { text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false }; }
function kbTimePicker(lang) {
  const t = TX[lang] || TX.fa;
  return { inline_keyboard: [
    [{ text: t.timeSlot1, callback_data: "reqtime_1" }],
    [{ text: t.timeSlot2, callback_data: "reqtime_2" }],
    [{ text: t.timeSlot3, callback_data: "reqtime_3" }],
    [{ text: t.timeCancel, callback_data: "reqtime_cancel" }]
  ] };
}
function kbWebAppMedia(lang) {
  const t = TX[lang] || TX.fa;
  return { keyboard: [[{ text: t.webappBtnDone }], [{ text: t.webappBtnSkip }], [{ text: t.cancel }]], resize_keyboard: true, one_time_keyboard: false };
}
function kbWebAppForm(env, lang) {
  const t = TX[lang] || TX.fa;
  const baseUrl = (env.WORKER_URL && String(env.WORKER_URL).trim()) || "https://your-worker.workers.dev";
  const webAppUrl = baseUrl.replace(/\/+$/, "") + "/app";
  return { inline_keyboard: [[{ text: t.webappBtnForm, web_app: { url: webAppUrl } }]] };
}

// ═══════════════════════════════════════════════════════════
// 🔧 HELPERS
// ═══════════════════════════════════════════════════════════

async function sendMsg(env, chatId, text, kb) {
  try {
    const payload = { chat_id: chatId, text: utf8Clean(text) };
    if (kb) payload.reply_markup = kb;
    return await sendToTelegram(env, "sendMessage", payload);
  } catch (e) {
    console.error("sendMsg error:", e.message);
    return { ok: false };
  }
}
async function notifyAdmin(env, text) {
  try {
    const adminId = await getAdminChatId(env);
    if (!adminId) return { ok: false };
    return await sendToTelegram(env, "sendMessage", { chat_id: adminId, text: utf8Clean(text) });
  } catch (e) {
    console.error("notifyAdmin error:", e.message);
    return { ok: false };
  }
}
async function getUserLang(env, chatId) { try { const l = await env.DATA.get(`lang_${chatId}`); return l || "fa"; } catch (e) { return "fa"; } }
async function setUserLang(env, chatId, lang) { try { await env.DATA.put(`lang_${chatId}`, lang); } catch (e) {} }

function isBack(t) { if (!t) return false; const s = t.trim(); return s === "بازگشت" || s === "Back" || s === "رجوع"; }
function isCancel(t) { if (!t) return false; const s = t.trim(); return s === "لغو" || s === "Cancel" || s === "إلغاء"; }
function isSkip(t) { if (!t) return false; const s = t.trim().toLowerCase(); return s === "رد کردن" || s === "skip" || s === "تخطي" || s === "ندارم" || s === "no" || s === "لا"; }

function menuKey(text) {
  if (!text) return null;
  const s = text.trim();
  if (s === TX.fa.menuViewSell || s === TX.en.menuViewSell || s === TX.ar.menuViewSell || s === "🏠 آگهی های فروش" || s === "1" || s === "۱") return "viewSell";
  if (s === TX.fa.menuViewRent || s === TX.en.menuViewRent || s === TX.ar.menuViewRent || s === "🔑 آگهی های رهن و اجاره" || s === "2" || s === "۲") return "viewRent";
  if (s === TX.fa.menuListSell || s === TX.en.menuListSell || s === TX.ar.menuListSell || s === "📝 ثبت آگهی فروش" || s === "3" || s === "۳") return "listSell";
  if (s === TX.fa.menuListRent || s === TX.en.menuListRent || s === TX.ar.menuListRent || s === "📋 ثبت آگهی رهن و اجاره" || s === "4" || s === "۴") return "listRent";
  if (s === TX.fa.menuConsult || s === TX.en.menuConsult || s === TX.ar.menuConsult || s === "💬 مشاوره رایگان" || s === "5" || s === "۵") return "consult";
  if (s === TX.fa.menuSite || s === TX.en.menuSite || s === TX.ar.menuSite || s === "🌐 مشاهده سایت" || s === "6" || s === "۶") return "viewSite";
  return null;
}

function detectLang(text, clientLang) {
  if (clientLang) {
    const cl = clientLang.toLowerCase();
    if (cl.startsWith("ar")) return "ar";
    if (cl.startsWith("en")) return "en";
  }
  if (!text) return "fa";
  const t = text.trim();
  const latin = (t.match(/[a-zA-Z]/g) || []).length;
  const arRange = (t.match(/[\u0600-\u06FF]/g) || []).length;
  const faSp = (t.match(/[پچژگکی]/g) || []).length;
  const arSp = (t.match(/[أإآؤئةىي]/g) || []).length;
  if (latin > 0 && latin > arRange) return "en";
  if (faSp > 0) return "fa";
  if (arSp > 0) return "ar";
  return "fa";
}

function exPhone(t) {
  if (!t) return null;
  let n = wordsToNumbers(t);
  const m = n.match(/(?:0|98|\+98)?9\d{9}/);
  if (m) {
    let p = m[0];
    if (p.startsWith("+98")) p = "0" + p.slice(3);
    else if (p.startsWith("98") && p.length === 12) p = "0" + p.slice(2);
    else if (p.startsWith("9") && p.length === 10) p = "0" + p;
    return p;
  }
  return null;
}
function exSize(t) { if (!t) return null; const n = toEnglishDigits(t); const m = n.match(/(\d+)\s*(?:متر|sqm|meter)/i); return m ? m[1] + " متر" : null; }
function exType(t) {
  if (!t) return null; const s = t.toLowerCase();
  if (/آپارتمان|apartment|flat/.test(s)) return "آپارتمان";
  if (/ویلا|villa/.test(s)) return "ویلا";
  if (/زمین|land/.test(s)) return "زمین";
  if (/مغازه/.test(s)) return "مغازه";
  if (/تجاری|commercial|shop/.test(s)) return "تجاری";
  if (/اداری|office/.test(s)) return "اداری";
  if (/خانه|خونه|house/.test(s)) return "خانه";
  if (/واحد/.test(s)) return "واحد";
  return null;
}
function exDoc(t) {
  if (!t) return null;
  if (/تک\s*برگ|تکبرگ/.test(t)) return "تک برگ";
  if (/قولنامه/.test(t)) return "قولنامه ای";
  if (/مشاع/.test(t)) return "مشاع";
  if (/اوقافی|اوقاف/.test(t)) return "اوقافی";
  if (/سه\s*دنگ|سه\s*دانگ/.test(t)) return "سه دانگ";
  if (/شش\s*دنگ|شش\s*دانگ/.test(t)) return "شش دانگ";
  return null;
}
function exPrice(t) {
  if (!t) return null; const n = toEnglishDigits(t);
  const m = n.match(/(\d+(?:\.\d+)?)\s*(میلیارد|میلیون|billion|million)/i);
  if (m) { const u = /میلیارد|billion/i.test(m[2]) ? "میلیارد تومان" : "میلیون تومان"; return m[1] + " " + u; }
  return null;
}
function exPriceRent(t) {
  if (!t) return null; const n = toEnglishDigits(t);
  let d = "", r = "";
  const dm = n.match(/(\d+(?:\.\d+)?)\s*(میلیون|میلیارد|million|billion)\s*رهن/i);
  if (dm) { const u = /میلیارد|billion/i.test(dm[2]) ? "میلیارد تومان" : "میلیون تومان"; d = dm[1] + " " + u; }
  const rm = n.match(/(\d+(?:\.\d+)?)\s*(میلیون|میلیارد|million|billion)\s*اجاره/i);
  if (rm) { const u = /میلیارد|billion/i.test(rm[2]) ? "میلیارد تومان" : "میلیون تومان"; r = rm[1] + " " + u; }
  if (d && r) return d + " رهن و " + r + " اجاره";
  if (d) return d + " رهن";
  if (r) return r + " اجاره";
  return exPrice(t);
}
function priceToNumber(p) {
  if (!p) return 0;
  const n = toEnglishDigits(p);
  const mm = n.match(/(\d+(?:\.\d+)?)\s*میلیارد/);
  if (mm) return parseFloat(mm[1]) * 1000;
  const dm = n.match(/(\d+(?:\.\d+)?)\s*میلیون/);
  if (dm) return parseFloat(dm[1]);
  return 0;
}
function exAmenities(t) {
  if (!t) return null;
  const found = [];
  if (/آسانسور|اسانسور|elevator/i.test(t)) found.push("آسانسور");
  if (/پارکینگ|پارکین|parking/i.test(t)) found.push("پارکینگ");
  if (/انباری|انبار|storage/i.test(t)) found.push("انباری");
  if (/بالکن|تراس|balcony|terrace/i.test(t)) found.push("بالکن");
  return found.length ? found.join(" • ") : null;
}
function calculatePricePerMeter(price, size) {
  const p = priceToNumber(price || "");
  const sm = String(size || "").match(/(\d+)/);
  if (!p || !sm) return "";
  const sz = parseInt(sm[1]);
  if (!sz || sz <= 0) return "";
  const ppm = p / sz;
  if (ppm >= 1000) return (ppm / 1000).toFixed(2) + " میلیارد تومان";
  return (Math.round(ppm * 10) / 10) + " میلیون تومان";
}

const SKIPPABLE_FIELDS = ["extra_notes", "amenities", "year_built", "rooms", "floor"];

// ═══════════════════════════════════════════════════════════
// 📋 SESSION HELPERS
// ═══════════════════════════════════════════════════════════

function emptyCollected(mode) {
  if (mode === "search") return { propertyType: null, size: null, budget: null, location: null, extra_notes: null, customer_phone: null, customer_fullname: null };
  return {
    propertyType: null, size: null,
    year_built: null, rooms: null, floor: null, amenities: null,
    document: null, location: null, price: null, price_per_meter: null,
    extra_notes: null, customer_phone: null, customer_fullname: null
  };
}
function fieldOrder(s) {
  if (s.mode === "listing") {
    if (s.type === "sell") return ["propertyType", "size", "year_built", "rooms", "floor", "amenities", "document", "location", "price", "extra_notes", "customer_phone", "customer_fullname"];
    return ["propertyType", "size", "year_built", "rooms", "floor", "amenities", "location", "price", "extra_notes", "customer_phone", "customer_fullname"];
  }
  return ["propertyType", "size", "budget", "location", "extra_notes", "customer_phone", "customer_fullname"];
}
function nextField(s) {
  const fo = fieldOrder(s);
  for (const f of fo) { if (!s.collected[f]) return f; }
  return null;
}
function questionFor(s, f) {
  const t = TX[s.lang] || TX.fa;
  if (f === "propertyType") return s.type === "sell" ? t.qPropertyTypeSell : t.qPropertyTypeRent;
  if (f === "price" && s.mode === "listing" && s.type === "rent") return t.qPriceRent;
  const map = {
    size: t.qSize, year_built: t.qYearBuilt, rooms: t.qRooms, floor: t.qFloor,
    amenities: t.qAmenities, document: t.qDocument, location: t.qLocation,
    price: t.qPrice, budget: t.qPrice, extra_notes: t.qNotes,
    customer_phone: t.qPhone, customer_fullname: t.qName
  };
  return map[f] || "";
}
function summarize(s) {
  const c = s.collected; const l = [];
  if (c.propertyType) l.push("نوع: " + c.propertyType);
  if (c.size) l.push("متراژ: " + c.size);
  if (c.year_built && c.year_built !== "-") l.push("سال ساخت: " + c.year_built);
  if (c.rooms && c.rooms !== "-") l.push("اتاق: " + c.rooms);
  if (c.floor && c.floor !== "-") l.push("طبقه: " + c.floor);
  if (c.amenities && c.amenities !== "-") l.push("امکانات: " + c.amenities);
  if (c.document) l.push("سند: " + c.document);
  if (c.location) l.push("منطقه: " + c.location);
  if (c.price) l.push("قیمت: " + c.price);
  if (c.budget) l.push("بودجه: " + c.budget);
  if (c.extra_notes && c.extra_notes !== "-") l.push("توضیحات: " + c.extra_notes);
  if (c.customer_fullname) l.push("نام: " + c.customer_fullname);
  if (c.customer_phone) l.push("شماره: " + c.customer_phone);
  return l.join("\n");
}

async function finalizeSession(env, session, chatId, username, isAdmin) {
  const c = session.collected;
  const name = c.customer_fullname || c.customer_name || "نامشخص";
  const ts = Date.now();
  const isPublic = isAdmin || session.isAdminListing;
  const prefix = (session.mode === "listing") ? (isPublic ? "pub_listing_" : "listing_") : "search_";
  let finalNotes = c.extra_notes || "";
  if (finalNotes && detectSuspiciousNumbers(finalNotes)) {
    finalNotes = masterSanitize(finalNotes);
    if (detectSuspiciousNumbers(finalNotes)) finalNotes = "";
  }
  const fullLocation = cleanFullAddress(c.location || "");
  const shortLocation = sanitizeLocation(c.location || "");
  const listingKey = `${prefix}${ts}`;
  const listingData = {
    mode: session.mode, type: session.type, name, phone: c.customer_phone || "",
    username, chatId, propertyType: c.propertyType || "",
    size: c.size || "",
    year_built: (c.year_built === "-" ? "" : c.year_built) || "",
    rooms: (c.rooms === "-" ? "" : c.rooms) || "",
    floor: (c.floor === "-" ? "" : c.floor) || "",
    amenities: (c.amenities === "-" ? "" : c.amenities) || "",
    document: c.document || "",
    location: fullLocation, location_short: shortLocation,
    price: c.price || "",
    price_per_meter: session.type === "sell" ? calculatePricePerMeter(c.price || "", c.size || "") : "",
    budget: c.budget || "", extra_notes: finalNotes,
    language: session.lang || "fa",
    mediaType: session.mediaType || null,
    mediaFileId: session.mediaFileId || null,
    mediaFiles: session.mediaFiles || [],
    date: new Date().toISOString(),
    _key: listingKey
  };
  await env.DATA.put(listingKey, JSON.stringify(listingData));
  const header = session.mode === "listing"
    ? (session.type === "sell" ? "آگهی فروش جدید" : "آگهی رهن و اجاره جدید")
    : (session.type === "buy" ? "درخواست خرید" : "درخواست اجاره");
  const pLabel = (session.mode === "listing" && isPublic) ? " [عمومی]" : "";
  await notifyAdmin(env, `${header}${pLabel}\n\n${summarize(session)}\n\nاز: @${username}\nچت: ${chatId}`);
  if (session.mode === "listing" && isPublic) {
    try {
      const channelId = await getChannelId(env);
      if (!channelId) await notifyAdmin(env, `⚠️ کانال تنظیم نشده.`);
      else {
        const cr = await postToChannelWithAI(env, listingData, listingKey);
        if (cr.ok) await notifyAdmin(env, `📢 آگهی به کانال ارسال شد ✅`);
        else await notifyAdmin(env, `⚠️ خطای کانال: ${cr.error}`);
      }
    } catch (e) { await notifyAdmin(env, `⚠️ خطای کانال: ${e.message}`); }
    await notifyMatchingCustomers(env, listingData);
  }
  await env.DATA.delete(`session_${chatId}`);
}

async function showListing(env, chatId, lang, listing, index, listingKey) {
  const t = TX[lang] || TX.fa;
  const tl = listing.type === "sell" ? t.listingTypeSell : t.listingTypeRent;
  let m = `آگهی شماره ${index}\n${tl}\n`;
  m += `ملک: ${listing.propertyType || "-"}\n`;
  m += `متراژ: ${listing.size || "-"}\n`;
  if (listing.year_built) m += `🏗️ سال ساخت: ${listing.year_built}\n`;
  if (listing.rooms) m += `🛏️ تعداد اتاق: ${listing.rooms}\n`;
  if (listing.floor) m += `🏢 طبقه: ${listing.floor}\n`;
  if (listing.amenities) m += `✨ امکانات: ${listing.amenities}\n`;
  if (listing.document) m += `سند: ${listing.document}\n`;
  const displayLoc = sanitizeLocation(listing.location_short || listing.location || "");
  if (displayLoc) {
    m += `منطقه: ${displayLoc}\n`;
    const mapsUrl = getMapUrl(displayLoc);
    if (mapsUrl) m += `🗺️ ${mapsUrl}\n`;
  }
  if (listing.price) m += `قیمت: ${listing.price}\n`;
  if (listing.price_per_meter && listing.type === "sell") m += `📊 هر متر: ${listing.price_per_meter}\n`;
  if (listing.budget) m += `بودجه: ${listing.budget}\n`;
  const cleanNotes = masterSanitize(listing.extra_notes || "");
  if (cleanNotes && cleanNotes !== "-") m += `توضیحات: ${cleanNotes}\n`;
  m += `\n${t.phoneHidden}`;
  await sendMsg(env, chatId, m, kbListingRequest(lang, listingKey));

  const medias = (listing.mediaFiles && listing.mediaFiles.length > 0)
    ? listing.mediaFiles
    : (listing.mediaFileId ? [{ type: listing.mediaType, fileId: listing.mediaFileId }] : []);

  if (medias.length > 0) {
    for (const media of medias) {
      try {
        if (media.type === "photo") await sendToTelegram(env, "sendPhoto", { chat_id: chatId, photo: media.fileId });
        else if (media.type === "video") await sendToTelegram(env, "sendVideo", { chat_id: chatId, video: media.fileId });
      } catch (e) {}
    }
  } else {
    try { await sendToTelegram(env, "sendPhoto", { chat_id: chatId, photo: DEFAULT_LISTING_PHOTO }); } catch (e) {}
  }
}

async function getListings(env, filterType, budgetCode) {
  const list = await env.DATA.list({ prefix: "pub_listing_" });
  const all = [];
  for (const k of list.keys.reverse()) {
    const d = await env.DATA.get(k.name, "json");
    if (d) all.push({ ...d, _key: k.name });
  }
  let f = all;
  if (filterType === "sell") f = f.filter(x => x.type === "sell");
  else if (filterType === "rent") f = f.filter(x => x.type === "rent");
  if (budgetCode && budgetCode !== "0") {
    f = f.filter(x => {
      const p = priceToNumber(x.price || "");
      if (filterType === "sell") {
        if (budgetCode === "1") return p > 0 && p < 2000;
        if (budgetCode === "2") return p >= 2000 && p < 5000;
        if (budgetCode === "3") return p >= 5000 && p < 10000;
        if (budgetCode === "4") return p >= 10000;
      } else {
        if (budgetCode === "1") return p > 0 && p < 500;
        if (budgetCode === "2") return p >= 500 && p < 1000;
        if (budgetCode === "3") return p >= 1000 && p < 2000;
        if (budgetCode === "4") return p >= 2000;
      }
      return true;
    });
  }
  return f;
}

function computeSlotISO(slot) {
  const now = new Date(); const d = new Date(now.getTime());
  if (slot === 1) { d.setUTCHours(13, 30, 0, 0); return d.toISOString(); }
  else if (slot === 2) { d.setUTCDate(d.getUTCDate() + 1); d.setUTCHours(6, 30, 0, 0); return d.toISOString(); }
  else if (slot === 3) { d.setUTCDate(d.getUTCDate() + 1); d.setUTCHours(13, 30, 0, 0); return d.toISOString(); }
  return d.toISOString();
}
function slotLabel(slot, lang) {
  const t = TX[lang] || TX.fa;
  if (slot === 1) return t.timeSlot1;
  if (slot === 2) return t.timeSlot2;
  if (slot === 3) return t.timeSlot3;
  return "";
}

// ═══════════════════════════════════════════════════════════
// 🌐 WEBAPP HTML
// ═══════════════════════════════════════════════════════════

function renderWebApp() {
  return `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>ثبت آگهی - املاک نعمتی</title>
<script src="https://telegram.org/js/telegram-web-app.js"><\/script>
<script src="https://cdn.tailwindcss.com"><\/script>
<style>
  * { font-family: 'Vazirmatn', 'Tahoma', sans-serif; -webkit-tap-highlight-color: transparent; }
  body { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); padding-bottom: 100px; }
  .card { background: var(--tg-theme-secondary-bg-color, #1e293b); border-radius: 16px; padding: 16px; margin-bottom: 12px; }
  input, select, textarea { background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 12px; width: 100%; font-size: 15px; outline: none; transition: border 0.2s; }
  input:focus, select:focus, textarea:focus { border-color: #3b82f6; }
  label { display: block; font-size: 13px; opacity: 0.8; margin-bottom: 6px; font-weight: 500; }
  .toggle-btn { flex: 1; padding: 14px; border-radius: 12px; font-weight: 600; border: 2px solid transparent; cursor: pointer; transition: all 0.2s; background: var(--tg-theme-bg-color, #0f172a); color: var(--tg-theme-text-color, #fff); }
  .toggle-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; box-shadow: 0 4px 12px rgba(59,130,246,0.4); }
  .checkbox-row { display: flex; align-items: center; padding: 12px; background: var(--tg-theme-bg-color, #0f172a); border-radius: 10px; margin-bottom: 8px; cursor: pointer; }
  .checkbox-row input { width: 20px; height: 20px; margin-left: 10px; accent-color: #3b82f6; }
  .submit-btn { position: fixed; bottom: 16px; left: 16px; right: 16px; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; padding: 16px; border-radius: 14px; font-weight: 700; font-size: 17px; border: none; cursor: pointer; box-shadow: 0 8px 24px rgba(59,130,246,0.5); }
  .submit-btn:disabled { opacity: 0.5; }
  .header { text-align: center; padding: 20px 0; }
  .header h1 { font-size: 22px; font-weight: 700; }
  .header p { font-size: 13px; opacity: 0.6; margin-top: 4px; }
  .section-title { font-size: 14px; font-weight: 700; color: #3b82f6; margin-bottom: 10px; }
  .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .price-meter { background: rgba(59,130,246,0.1); border: 1px solid rgba(59,130,246,0.3); border-radius: 10px; padding: 10px; margin-top: 8px; font-size: 13px; text-align: center; }
  .media-info { background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); border-radius: 12px; padding: 14px; text-align: center; margin-bottom: 12px; }
  .err { background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.3); border-radius: 10px; padding: 12px; margin-top: 10px; font-size: 13px; }
</style>
</head>
<body>
<div class="p-4">
  <div class="header">
    <h1>🏘️ ثبت آگهی جدید</h1>
    <p>املاک نعمتی — قم</p>
  </div>
  <div id="mediaInfo" class="media-info" style="display:none;">
    <div style="font-size: 28px;">📎</div>
    <div id="mediaCount" style="font-weight: 600; margin-top: 4px;"></div>
    <div style="font-size: 12px; opacity: 0.7; margin-top: 4px;">فایل‌های ضمیمه‌شده از تلگرام</div>
  </div>
  <div class="card">
    <label>نوع معامله</label>
    <div style="display:flex; gap: 8px;">
      <button type="button" class="toggle-btn active" data-type="sell" onclick="setType('sell')">💰 فروش</button>
      <button type="button" class="toggle-btn" data-type="rent" onclick="setType('rent')">🔑 رهن و اجاره</button>
    </div>
  </div>
  <div class="card">
    <div class="section-title">🏠 اطلاعات ملک</div>
    <div style="margin-bottom: 10px;">
      <label>نوع ملک</label>
      <select id="propertyType">
        <option value="آپارتمان">آپارتمان</option>
        <option value="خانه">خانه / ویلایی</option>
        <option value="ویلا">ویلا</option>
        <option value="زمین">زمین</option>
        <option value="مغازه">مغازه</option>
        <option value="اداری">اداری</option>
        <option value="تجاری">تجاری</option>
        <option value="واحد">واحد</option>
      </select>
    </div>
    <div class="grid-2">
      <div><label>متراژ (متر)</label><input id="size" type="tel" inputmode="numeric" placeholder="مثال: ۱۰۰"></div>
      <div><label>سال ساخت</label><input id="yearBuilt" type="tel" inputmode="numeric" placeholder="مثال: ۱۳۹۵"></div>
      <div>
        <label>تعداد اتاق</label>
        <select id="rooms">
          <option value="">انتخاب کنید</option>
          <option value="بدون اتاق">بدون اتاق</option>
          <option value="۱ خواب">۱ خواب</option>
          <option value="۲ خواب">۲ خواب</option>
          <option value="۳ خواب">۳ خواب</option>
          <option value="۴ خواب">۴ خواب</option>
          <option value="۵ خواب و بیشتر">۵ خواب و بیشتر</option>
        </select>
      </div>
      <div><label>طبقه</label><input id="floor" placeholder="مثال: طبقه ۳ از ۵"></div>
    </div>
  </div>
  <div class="card">
    <div class="section-title">📄 سند و موقعیت</div>
    <div style="margin-bottom: 10px;">
      <label>وضعیت سند</label>
      <select id="document">
        <option value="تک برگ">تک برگ</option>
        <option value="شش دانگ">شش دانگ</option>
        <option value="سه دانگ">سه دانگ</option>
        <option value="قولنامه‌ای">قولنامه‌ای</option>
        <option value="مشاع">مشاع</option>
        <option value="اوقافی">اوقافی</option>
      </select>
    </div>
    <div style="margin-bottom: 10px;">
      <label>محله (توی کانال نمایش داده می‌شه)</label>
      <input id="locationShort" placeholder="مثال: کلهری">
    </div>
    <div>
      <label>آدرس کامل (فقط ادمین می‌بینه)</label>
      <textarea id="locationFull" rows="2" placeholder="خیابان، کوچه، پلاک"></textarea>
    </div>
  </div>
  <div class="card">
    <div class="section-title">💰 قیمت</div>
    <div id="priceSellBlock">
      <label>قیمت کل</label>
      <div class="grid-2">
        <input id="priceAmount" type="tel" inputmode="numeric" placeholder="مثال: ۶">
        <select id="priceUnit">
          <option value="میلیارد">میلیارد تومان</option>
          <option value="میلیون">میلیون تومان</option>
        </select>
      </div>
      <div id="ppmBox" class="price-meter" style="display:none;">
        📊 هر متر: <b id="ppmValue">-</b>
      </div>
    </div>
    <div id="priceRentBlock" style="display:none;">
      <div class="grid-2">
        <div><label>رهن</label><input id="rentDeposit" type="tel" inputmode="numeric" placeholder="مثال: ۵۰۰"></div>
        <div><label>اجاره ماهانه</label><input id="rentMonthly" type="tel" inputmode="numeric" placeholder="مثال: ۱۰"></div>
      </div>
      <div style="font-size: 12px; opacity: 0.6; margin-top: 6px;">واحد: میلیون تومان</div>
    </div>
  </div>
  <div class="card">
    <div class="section-title">✨ امکانات</div>
    <label class="checkbox-row"><input type="checkbox" id="amElevator"><span>🛗 آسانسور</span></label>
    <label class="checkbox-row"><input type="checkbox" id="amParking"><span>🅿️ پارکینگ</span></label>
    <label class="checkbox-row"><input type="checkbox" id="amStorage"><span>📦 انباری</span></label>
    <label class="checkbox-row"><input type="checkbox" id="amBalcony"><span>🌇 بالکن</span></label>
  </div>
  <div class="card">
    <div class="section-title">📝 توضیحات</div>
    <textarea id="notes" rows="3" placeholder="نکات خاص ملک (بدون شماره تلفن)"></textarea>
  </div>
  <div class="card">
    <div class="section-title">👤 اطلاعات شما</div>
    <div style="margin-bottom: 10px;">
      <label>نام و نام خانوادگی</label>
      <input id="fullName" placeholder="مثال: علی احمدی">
    </div>
    <div>
      <label>شماره تماس (اختیاری، توی کانال نمی‌ره)</label>
      <input id="phone" type="tel" inputmode="numeric" placeholder="۰۹۱۲۳۴۵۶۷۸۹">
    </div>
  </div>
  <div id="errBox" class="err" style="display:none;"></div>
</div>
<button id="submitBtn" class="submit-btn" onclick="submitForm()">✅ ثبت نهایی آگهی</button>
<script>
  const tg = window.Telegram?.WebApp;
  if (tg) { tg.ready(); tg.expand(); }
  let dealType = 'sell';
  let mediaCount = 0;
  function setType(t) {
    dealType = t;
    document.querySelectorAll('.toggle-btn').forEach(b => { b.classList.toggle('active', b.dataset.type === t); });
    document.getElementById('priceSellBlock').style.display = (t === 'sell') ? 'block' : 'none';
    document.getElementById('priceRentBlock').style.display = (t === 'rent') ? 'block' : 'none';
    updatePPM();
  }
  function toNum(s) {
    if (!s) return 0;
    return parseFloat(String(s).replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[^\d.]/g, '')) || 0;
  }
  function updatePPM() {
    if (dealType !== 'sell') return;
    const amt = toNum(document.getElementById('priceAmount').value);
    const unit = document.getElementById('priceUnit').value;
    const size = toNum(document.getElementById('size').value);
    const box = document.getElementById('ppmBox');
    const val = document.getElementById('ppmValue');
    if (amt > 0 && size > 0) {
      const totalMillion = (unit === 'میلیارد') ? amt * 1000 : amt;
      const ppm = totalMillion / size;
      if (ppm >= 1000) val.textContent = (ppm / 1000).toFixed(2) + ' میلیارد تومان';
      else val.textContent = Math.round(ppm * 10) / 10 + ' میلیون تومان';
      box.style.display = 'block';
    } else { box.style.display = 'none'; }
  }
  document.getElementById('priceAmount')?.addEventListener('input', updatePPM);
  document.getElementById('priceUnit')?.addEventListener('change', updatePPM);
  document.getElementById('size')?.addEventListener('input', updatePPM);
  async function loadMediaInfo() {
    try {
      const initData = tg?.initData || '';
      const r = await fetch('/api/media-info?initData=' + encodeURIComponent(initData));
      const d = await r.json();
      if (d.ok && d.count > 0) {
        mediaCount = d.count;
        document.getElementById('mediaCount').textContent = d.count + ' فایل ثبت شده';
        document.getElementById('mediaInfo').style.display = 'block';
      }
    } catch (e) {}
  }
  loadMediaInfo();
  async function submitForm() {
    const errBox = document.getElementById('errBox');
    errBox.style.display = 'none';
    const btn = document.getElementById('submitBtn');
    btn.disabled = true;
    btn.textContent = '⏳ در حال ثبت...';
    const data = {
      type: dealType,
      propertyType: document.getElementById('propertyType').value,
      size: document.getElementById('size').value.trim(),
      yearBuilt: document.getElementById('yearBuilt').value.trim(),
      rooms: document.getElementById('rooms').value,
      floor: document.getElementById('floor').value.trim(),
      document: document.getElementById('document').value,
      locationShort: document.getElementById('locationShort').value.trim(),
      locationFull: document.getElementById('locationFull').value.trim(),
      priceAmount: document.getElementById('priceAmount')?.value.trim() || '',
      priceUnit: document.getElementById('priceUnit')?.value || 'میلیارد',
      rentDeposit: document.getElementById('rentDeposit')?.value.trim() || '',
      rentMonthly: document.getElementById('rentMonthly')?.value.trim() || '',
      amenities: {
        elevator: document.getElementById('amElevator').checked,
        parking: document.getElementById('amParking').checked,
        storage: document.getElementById('amStorage').checked,
        balcony: document.getElementById('amBalcony').checked
      },
      notes: document.getElementById('notes').value.trim(),
      fullName: document.getElementById('fullName').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      initData: tg?.initData || ''
    };
    if (!data.size) { showErr('متراژ رو وارد کن'); return; }
    if (!data.locationShort) { showErr('محله رو وارد کن'); return; }
    if (!data.fullName) { showErr('نامت رو وارد کن'); return; }
    try {
      const r = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const res = await r.json();
      if (res.ok) {
        btn.textContent = '✅ ثبت شد!';
        if (tg) { tg.showAlert('آگهی با موفقیت ثبت شد! ✅', () => { tg.close(); }); }
        else { alert('آگهی ثبت شد!'); }
      } else {
        showErr(res.error || 'خطا در ثبت');
        btn.disabled = false;
        btn.textContent = '✅ ثبت نهایی آگهی';
      }
    } catch (e) {
      showErr('خطای شبکه. دوباره تلاش کن.');
      btn.disabled = false;
      btn.textContent = '✅ ثبت نهایی آگهی';
    }
  }
  function showErr(msg) {
    const b = document.getElementById('errBox');
    b.textContent = '⚠️ ' + msg;
    b.style.display = 'block';
    b.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
<\/script>
</body>
</html>`;
}

// ═══════════════════════════════════════════════════════════
// 🔐 INITDATA VERIFY
// ═══════════════════════════════════════════════════════════

async function verifyInitData(initData, botToken) {
  if (!initData || !botToken) return null;
  try {
    const params = new URLSearchParams(initData);
    const hash = params.get("hash");
    if (!hash) return null;
    params.delete("hash");
    const entries = [...params.entries()].sort((a, b) => a[0].localeCompare(b[0]));
    const dataCheckString = entries.map(([k, v]) => k + "=" + v).join("\n");
    const secretKey = await crypto.subtle.importKey(
      "raw", new TextEncoder().encode("WebAppData"),
      { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const secret = await crypto.subtle.sign("HMAC", secretKey, new TextEncoder().encode(botToken));
    const dataKey = await crypto.subtle.importKey(
      "raw", secret, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const sig = await crypto.subtle.sign("HMAC", dataKey, new TextEncoder().encode(dataCheckString));
    const sigHex = [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
    if (sigHex !== hash) return null;
    const userJson = params.get("user");
    if (!userJson) return null;
    return JSON.parse(userJson);
  } catch (e) { return null; }
}

// ═══════════════════════════════════════════════════════════
// 🔌 API HANDLERS
// ═══════════════════════════════════════════════════════════

async function handleMediaInfo(request, env) {
  try {
    const url = new URL(request.url);
    const initData = url.searchParams.get("initData") || "";
    const user = await verifyInitData(initData, env.TELEGRAM_TOKEN);
    if (!user) return jsonResp({ ok: false, count: 0 });
    const session = await env.DATA.get(`webapp_session_${user.id}`, "json");
    if (!session) return jsonResp({ ok: true, count: 0 });
    return jsonResp({ ok: true, count: (session.mediaFiles || []).length });
  } catch (e) { return jsonResp({ ok: false, count: 0 }); }
}

async function handleSubmit(request, env, ctx) {
  try {
    const data = await request.json();
    const user = await verifyInitData(data.initData, env.TELEGRAM_TOKEN);
    if (!user) return jsonResp({ ok: false, error: "احراز هویت تلگرام ناموفق" });

    const chatId = user.id;
    const userName = [user.first_name, user.last_name].filter(Boolean).join(" ") || "کاربر";
    const userUsername = user.username || "ندارد";

    const webappSession = await env.DATA.get(`webapp_session_${chatId}`, "json") || {};

    let priceFinal = "";
    if (data.type === "rent") {
      const dep = toEnglishDigits(data.rentDeposit || "");
      const mon = toEnglishDigits(data.rentMonthly || "");
      const parts = [];
      if (dep) parts.push(dep + " میلیون رهن");
      if (mon) parts.push(mon + " میلیون اجاره");
      priceFinal = parts.join(" و ");
    } else {
      const amt = toEnglishDigits(data.priceAmount || "");
      if (amt) priceFinal = amt + " " + (data.priceUnit || "میلیارد") + " تومان";
    }

    const am = data.amenities || {};
    const amList = [];
    if (am.elevator) amList.push("آسانسور");
    if (am.parking) amList.push("پارکینگ");
    if (am.storage) amList.push("انباری");
    if (am.balcony) amList.push("بالکن");
    const amenitiesStr = amList.join(" • ");

    const ts = Date.now();
    const listingKey = `pub_listing_${ts}`;
    const fullLocation = cleanFullAddress(data.locationFull || data.locationShort || "");
    const shortLocation = sanitizeLocation(data.locationShort || "");
    const cleanNotes = masterSanitize(data.notes || "");
    const phone = exPhone(data.phone || "");

    const listingData = {
      mode: "listing", type: data.type || "sell",
      name: data.fullName || userName,
      phone: phone || "",
      username: userUsername, chatId,
      propertyType: data.propertyType || "",
      size: (data.size || "") + " متر",
      year_built: data.yearBuilt || "",
      rooms: data.rooms || "",
      floor: data.floor || "",
      amenities: amenitiesStr,
      document: data.document || "",
      location: fullLocation,
      location_short: shortLocation,
      price: priceFinal,
      price_per_meter: data.type === "sell"
        ? calculatePricePerMeter(priceFinal, (data.size || "") + " متر")
        : "",
      extra_notes: cleanNotes,
      language: "fa",
      mediaType: (webappSession.mediaFiles?.[0]?.type) || null,
      mediaFileId: (webappSession.mediaFiles?.[0]?.fileId) || null,
      mediaFiles: webappSession.mediaFiles || [],
      date: new Date().toISOString(),
      source: "webapp",
      _key: listingKey
    };

    await env.DATA.put(listingKey, JSON.stringify(listingData));
    try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}

    // 🟢 پاسخ فوری
    const response = jsonResp({ ok: true, listingKey });

    // 🔵 کارهای سنگین پس‌زمینه
    ctx.waitUntil((async () => {
      try {
        let notifyText = `🏘️ آگهی جدید از WebApp\n\n`;
        notifyText += `👤 ${data.fullName || userName}\n📛 @${userUsername}\n🆔 ${chatId}\n\n`;
        notifyText += `نوع: ${data.type === "rent" ? "رهن و اجاره" : "فروش"}\n`;
        notifyText += `ملک: ${listingData.propertyType} ${listingData.size}\n`;
        if (listingData.year_built) notifyText += `سال ساخت: ${listingData.year_built}\n`;
        if (listingData.rooms) notifyText += `اتاق: ${listingData.rooms}\n`;
        if (listingData.floor) notifyText += `طبقه: ${listingData.floor}\n`;
        if (listingData.amenities) notifyText += `امکانات: ${listingData.amenities}\n`;
        if (listingData.document) notifyText += `سند: ${listingData.document}\n`;
        if (shortLocation) notifyText += `محله: ${shortLocation}\n`;
        if (priceFinal) notifyText += `💰 ${priceFinal}\n`;
        if (listingData.price_per_meter) notifyText += `📊 هر متر: ${listingData.price_per_meter}\n`;
        if (webappSession.mediaFiles?.length) notifyText += `📎 ${webappSession.mediaFiles.length} فایل ضمیمه\n`;
        await notifyAdmin(env, notifyText);
      } catch (e) { console.error("notify admin:", e.message); }

      try {
        const cr = await postToChannelWithAI(env, listingData, listingKey);
        if (cr.ok) await notifyAdmin(env, `📢 آگهی به کانال ارسال شد ✅`);
        else await notifyAdmin(env, `⚠️ خطای کانال: ${cr.error}`);
      } catch (e) { console.error("channel:", e.message); }

      try { await notifyMatchingCustomers(env, listingData); } catch (e) { console.error("notify customers:", e.message); }

      try {
        await sendMsg(env, chatId,
          `✅ <b>آگهی شما با موفقیت ثبت شد!</b>\n\n` +
          `🏘️ ${listingData.propertyType} ${listingData.size}\n` +
          (shortLocation ? `📍 ${shortLocation}\n` : "") +
          (priceFinal ? `💰 ${priceFinal}\n` : "") +
          `\n📢 آگهی به کانال ارسال شد.\n\nاز اعتماد شما سپاسگزاریم 🌹`,
          null);
      } catch (e) { console.error("confirm msg:", e.message); }
    })());

    return response;
  } catch (e) {
    console.error("handleSubmit error:", e.message);
    return jsonResp({ ok: false, error: e.message });
  }
}

function jsonResp(obj) {
  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

// ═══════════════════════════════════════════════════════════
// 🚀 MAIN HANDLER
// ═══════════════════════════════════════════════════════════

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 🌐 روت WebApp
    if (url.pathname === "/app" && request.method === "GET") {
      return new Response(renderWebApp(), {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }

    // 🔌 API: media-info
    if (url.pathname === "/api/media-info" && request.method === "GET") {
      return await handleMediaInfo(request, env);
    }

    // 🔌 API: submit
    if (url.pathname === "/api/submit" && request.method === "POST") {
      return await handleSubmit(request, env, ctx);
    }

    // 🤖 Webhook
    if (request.method !== "POST") return new Response("Estate Bot is running", { status: 200 });
    try {
      const update = await request.json();

      // ═══ CALLBACK QUERY ═══
      if (update.callback_query) {
        const cb = update.callback_query;
        const cbChatId = cb.message.chat.id;
        const cbData = cb.data || "";
        const cbUser = cb.from.first_name || "کاربر";
        const cbUsername = cb.from.username || "ندارد";
        const cbLang = await getUserLang(env, cbChatId);
        const ct = TX[cbLang] || TX.fa;
        await sendToTelegram(env, "answerCallbackQuery", { callback_query_id: cb.id });

        if (cbData.startsWith("neg_accept_")) {
          const negKey = cbData.replace("neg_accept_", "");
          const neg = await env.DATA.get(negKey, "json");
          if (!neg) { await sendMsg(env, cbChatId, "⚠️ این پیشنهاد منقضی شده.", null); return new Response("OK"); }
          neg.status = "accepted";
          await env.DATA.put(negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 });
          let cm = `🎉 <b>خبر خوب!</b>\n\nمدیر با پیشنهاد شما موافقت کرد.\n\n`;
          if (neg.propertyDesc) cm += `🏠 ${neg.propertyDesc}\n`;
          cm += `💰 قیمت مورد توافق: <b>${neg.customerOffer}</b>\n\n📞 کارشناس ما به زودی باهات تماس می‌گیره.`;
          await sendMsg(env, neg.chatId, cm, null);
          await sendMsg(env, cbChatId, `✅ قبول شد.`, null);
          return new Response("OK");
        }

        if (cbData.startsWith("neg_reject_")) {
          const negKey = cbData.replace("neg_reject_", "");
          const neg = await env.DATA.get(negKey, "json");
          if (!neg) { await sendMsg(env, cbChatId, "⚠️ منقضی شده.", null); return new Response("OK"); }
          neg.status = "rejected";
          await env.DATA.put(negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 });
          let cm = `🙏 متأسفانه مدیر موافقت نکرد.\n\n`;
          cm += `🏠 ${neg.propertyDesc || "ملک"}\n💰 قیمت: <b>${neg.originalPrice || "-"}</b>\n\nاگه دوست داشتی، پیشنهاد دیگه‌ای بهت بدم.`;
          await sendMsg(env, neg.chatId, cm, null);
          await sendMsg(env, cbChatId, `❌ رد شد.`, null);
          return new Response("OK");
        }

        if (cbData.startsWith("neg_custom_")) {
          const negKey = cbData.replace("neg_custom_", "");
          await env.DATA.put(`admin_state_${cbChatId}`, JSON.stringify({ mode: "custom_neg_msg", negKey }), { expirationTtl: 3600 });
          await sendMsg(env, cbChatId, `✏️ <b>پیام خودت رو بنویس</b> تا برای مشتری بفرستم:`, null);
          return new Response("OK");
        }

        if (cbData === "start_wizard") { await sendMsg(env, cbChatId, ct.langPrompt, kbLang()); return new Response("OK"); }

        if (cbData === "fshow_sell_all") {
          const l = await getListings(env, "sell", "0");
          if (l.length === 0) { await sendMsg(env, cbChatId, ct.noListings, kbMain(cbLang)); return new Response("OK"); }
          let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
          await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}\n\n${ct.menuPrompt}`, kbMain(cbLang));
          return new Response("OK");
        }
        if (cbData === "fshow_rent_all") {
          const l = await getListings(env, "rent", "0");
          if (l.length === 0) { await sendMsg(env, cbChatId, ct.noListings, kbMain(cbLang)); return new Response("OK"); }
          let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
          await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}\n\n${ct.menuPrompt}`, kbMain(cbLang));
          return new Response("OK");
        }
        if (/^fsell_\d$/.test(cbData)) {
          const code = cbData.split("_")[1];
          const l = await getListings(env, "sell", code);
          if (l.length === 0) { await sendMsg(env, cbChatId, ct.noResults, kbFileRequest(cbLang)); return new Response("OK"); }
          let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
          await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}\n\n${ct.menuPrompt}`, kbMain(cbLang));
          return new Response("OK");
        }
        if (/^frent_\d$/.test(cbData)) {
          const code = cbData.split("_")[1];
          const l = await getListings(env, "rent", code);
          if (l.length === 0) { await sendMsg(env, cbChatId, ct.noResults, kbFileRequest(cbLang)); return new Response("OK"); }
          let i = 0; for (const x of l.slice(0, 10)) { i++; await showListing(env, cbChatId, cbLang, x, i, x._key); }
          await sendMsg(env, cbChatId, `${ct.totalListings}: ${l.length}\n\n${ct.menuPrompt}`, kbMain(cbLang));
          return new Response("OK");
        }
        if (cbData === "filereq_yes") {
          try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {}
          await env.DATA.put(`session_${cbChatId}`, JSON.stringify({ active: true, mode: "file_request", lang: cbLang }), { expirationTtl: 3600 });
          await sendMsg(env, cbChatId, ct.fileReqPrompt, kbSession(cbLang));
          return new Response("OK");
        }
        if (cbData === "filereq_no") { await sendMsg(env, cbChatId, ct.menuPrompt, kbMain(cbLang)); return new Response("OK"); }
        if (cbData.startsWith("req_")) {
          const lk = cbData.slice(4);
          const lst = await env.DATA.get(lk, "json");
          if (!lst) { await sendMsg(env, cbChatId, ct.listingNotFound, kbMain(cbLang)); return new Response("OK"); }
          try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {}
          await env.DATA.put(`session_${cbChatId}`, JSON.stringify({
            active: true, mode: "request_phone", lang: cbLang, listingKey: lk, listingData: lst,
            userName: cbUser, userUsername: cbUsername
          }), { expirationTtl: 3600 });
          await sendMsg(env, cbChatId, ct.reqAskPhone, kbReqPhone(cbLang));
          return new Response("OK");
        }
        if (cbData.startsWith("reqtime_")) {
          const sp = cbData.replace("reqtime_", "");
          if (sp === "cancel") {
            try { await env.DATA.delete(`session_${cbChatId}`); } catch (e) {}
            await sendMsg(env, cbChatId, ct.cancelled, kbMain(cbLang));
            return new Response("OK");
          }
          const slot = parseInt(sp);
          if (![1, 2, 3].includes(slot)) return new Response("OK");
          let session = null;
          try { session = await env.DATA.get(`session_${cbChatId}`, "json"); } catch (e) {}
          if (!session || session.mode !== "request_time") { await sendMsg(env, cbChatId, ct.listingNotFound, kbMain(cbLang)); return new Response("OK"); }
          const sl = session.lang || cbLang;
          const st = TX[sl] || TX.fa;
          const lst = session.listingData || {};
          const tl = lst.type === "sell" ? st.listingTypeSell : st.listingTypeRent;
          const dateISO = computeSlotISO(slot);
          const slotText = slotLabel(slot, sl);
          await env.DATA.put(`appt_${Date.now()}`, JSON.stringify({
            customerKey: "", customerName: session.userName || cbUser,
            customerPhone: session.phone || "", chatId: cbChatId,
            date: dateISO, duration: 30, type: "visit", propertyKey: session.listingKey || "",
            propertyDesc: (lst.propertyType || "") + " - " + (lst.location || ""),
            note: "📱 رزرو ربات | " + slotText, status: "pending",
            source: "bot", createdAt: new Date().toISOString()
          }));
          let m = `📅 رزرو جدید\n\n${tl}\n👤 ${session.userName || cbUser}\n📛 @${session.userUsername || cbUsername}\n`;
          if (session.phone) m += `📞 ${session.phone}\n`;
          m += `🕐 ${slotText}\n\n🏠 ${lst.propertyType || "-"} ${lst.size || ""}\n📍 ${lst.location || "-"}\n💰 ${lst.price || "-"}\n🆔 ${cbChatId}`;
          await notifyAdmin(env, m);
          await sendMsg(env, cbChatId, st.reqWithTime, kbMain(sl));
          await env.DATA.delete(`session_${cbChatId}`);
          return new Response("OK");
        }
        return new Response("OK");
      }

      // ═══ MESSAGE ═══
      const msg = update.message;
      if (!msg) return new Response("OK");
      const chatId = msg.chat.id;
      const userName = msg.from.first_name || "کاربر";
      const userUsername = msg.from.username || "ندارد";
      const clientLang = msg.from.language_code || "";
      const isAdmin = String(chatId) === String(env.ADMIN_CHAT_ID);
      let userLang = await getUserLang(env, chatId);
      const t = TX[userLang] || TX.fa;

      let userText = null;
      let mediaInfo = null;
      let isVoice = false;

      if (msg.photo && msg.photo.length > 0) {
        const p = msg.photo[msg.photo.length - 1];
        mediaInfo = { type: "photo", fileId: p.file_id };
        userText = msg.caption ? msg.caption.trim() : "";
      } else if (msg.video) {
        mediaInfo = { type: "video", fileId: msg.video.file_id };
        userText = msg.caption ? msg.caption.trim() : "";
      } else if (msg.voice || msg.audio) {
        isVoice = true;
        try {
          const fid = msg.voice ? msg.voice.file_id : msg.audio.file_id;
          const r1 = await fetch(`https://api.telegram.org/bot${env.TELEGRAM_TOKEN}/getFile?file_id=${fid}`);
          const d1 = await r1.json();
          const r2 = await fetch(`https://api.telegram.org/file/bot${env.TELEGRAM_TOKEN}/${d1.result.file_path}`);
          const buf = await r2.arrayBuffer();
          const fd = new FormData();
          fd.append("file", new Blob([buf], { type: "audio/ogg" }), "voice.ogg");
          fd.append("model", "whisper-large-v3");
          fd.append("language", "fa");
          fd.append("temperature", "0");
          const wr = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
            method: "POST",
            headers: { "Authorization": `Bearer ${env.GROQ_API_KEY}` },
            body: fd
          });
          const wd = await wr.json();
          userText = wd.text || "";
          if (!userText) { await sendMsg(env, chatId, t.voiceErr, kbMain(userLang)); return new Response("OK"); }
        } catch (e) { await sendMsg(env, chatId, t.voiceErr, kbMain(userLang)); return new Response("OK"); }
      } else {
        userText = msg.text ? msg.text.trim() : null;
        if (!userText) return new Response("OK");
      }

      // 🤝 ادمین: پیام مذاکره
      if (isAdmin && !mediaInfo && userText) {
        try {
          const adminState = await env.DATA.get(`admin_state_${chatId}`, "json");
          if (adminState && adminState.mode === "custom_neg_msg") {
            const neg = await env.DATA.get(adminState.negKey, "json");
            if (neg && neg.chatId) {
              await sendMsg(env, neg.chatId, `💬 <b>پیام از مدیر املاک نعمتی:</b>\n\n${userText}`, null);
              neg.status = "custom";
              neg.adminReply = userText;
              await env.DATA.put(adminState.negKey, JSON.stringify(neg), { expirationTtl: 7 * 24 * 3600 });
              await env.DATA.delete(`admin_state_${chatId}`);
              await sendMsg(env, chatId, `✅ پیام ارسال شد.`, null);
            } else {
              await env.DATA.delete(`admin_state_${chatId}`);
              await sendMsg(env, chatId, `⚠️ مشتری پیدا نشد.`, null);
            }
            return new Response("OK");
          }
        } catch (e) {}
      }

      let session = null;
      try { session = await env.DATA.get(`session_${chatId}`, "json"); } catch (e) {}

      // 🧪 دستورات ادمین
      if (userText === "/test-alert" && isAdmin) {
        const adminId = await getAdminChatId(env);
        if (!adminId) { await sendMsg(env, chatId, `❌ <b>ADMIN_CHAT_ID تنظیم نشده!</b>`, kbMain(userLang)); return new Response("OK"); }
        const testOk = await alertAdminSerious(env, chatId, userName, userUsername, userText, "🧪 تست");
        await sendMsg(env, chatId, testOk ? `✅ ارسال شد.` : `❌ ناموفق.`, kbMain(userLang));
        return new Response("OK");
      }
      if (userText === "/check-alert" && isAdmin) {
        const adminId = await getAdminChatId(env);
        let result = `🔍 <b>وضعیت هشدار</b>\n\n`;
        result += `ADMIN_CHAT_ID (env): ${env.ADMIN_CHAT_ID ? "✅ " + env.ADMIN_CHAT_ID : "❌"}\n`;
        try { const kvId = await env.DATA.get("admin_chat_id"); result += `admin_chat_id (KV): ${kvId ? "✅ " + kvId : "❌"}\n`; } catch (e) {}
        result += `\n🎯 Chat ID: ${adminId ? "✅ " + adminId : "❌"}`;
        await sendMsg(env, chatId, result, kbMain(userLang));
        return new Response("OK");
      }
      if (userText === "/start" && !mediaInfo && !isVoice) {
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        await clearHistory(env, chatId);
        const det = detectLang("", clientLang);
        userLang = det;
        await setUserLang(env, chatId, det);
        await sendMsg(env, chatId, TX[det].welcome, kbWelcome());
        if (!isAdmin) await notifyAdmin(env, `کاربر جدید\n${userName}\n@${userUsername}\nچت: ${chatId}`);
        return new Response("OK");
      }
      if (userText === "/stats" && isAdmin) {
        const p = await env.DATA.list({ prefix: "pub_listing_" });
        const l = await env.DATA.list({ prefix: "listing_" });
        const f = await env.DATA.list({ prefix: "file_req_" });
        const ap = await env.DATA.list({ prefix: "appt_" });
        const ch = await getChannelId(env);
        await sendMsg(env, chatId,
          `آمار\n\nآگهی عمومی: ${p.keys.length}\nآگهی مشتری: ${l.keys.length}\nفایل یابی: ${f.keys.length}\nقرارها: ${ap.keys.length}\n\n🛡️ کانال: ${ch ? "✅ " + ch : "❌"}`,
          kbMain(userLang));
        return new Response("OK");
      }
      if (userText === "/add" && isAdmin && !mediaInfo) {
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        const s = { active: true, mode: "listing", type: "sell", lang: "fa", collected: emptyCollected("listing"), isAdminListing: true, lastAskedField: "propertyType" };
        await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
        await sendMsg(env, chatId, TX.fa.introSell + "\n\n" + TX.fa.qPropertyTypeSell, kbSession("fa"));
        return new Response("OK");
      }
      if (userText === "/addrent" && isAdmin && !mediaInfo) {
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        const s = { active: true, mode: "listing", type: "rent", lang: "fa", collected: emptyCollected("listing"), isAdminListing: true, lastAskedField: "propertyType" };
        await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
        await sendMsg(env, chatId, TX.fa.introListRent + "\n\n" + TX.fa.qPropertyTypeRent, kbSession("fa"));
        return new Response("OK");
      }

      // ═══ جریان WebApp: مرحله ۱ - عکس/ویدیو ═══
      if (session && session.active && session.mode === "webapp_media") {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;

        if (isCancel(userText)) {
          try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
          try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
          await sendMsg(env, chatId, st.cancelled, kbMain(sl));
          return new Response("OK");
        }

        if (mediaInfo) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          webapp.mediaFiles = webapp.mediaFiles || [];
          webapp.mediaFiles.push({ type: mediaInfo.type, fileId: mediaInfo.fileId, ts: Date.now() });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify(webapp), { expirationTtl: 3600 });
          if (!isAdmin && env.ADMIN_CHAT_ID) {
            try { await sendToTelegram(env, "forwardMessage", { chat_id: env.ADMIN_CHAT_ID, from_chat_id: chatId, message_id: msg.message_id }); } catch (e) {}
          }
          const confirmMsg = st.webappMediaReceived.replace("{count}", String(webapp.mediaFiles.length));
          await sendMsg(env, chatId, confirmMsg, kbWebAppMedia(sl));
          return new Response("OK");
        }

        if (userText === st.webappBtnDone || userText === st.webappBtnSkip) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          const hasMedia = (webapp.mediaFiles || []).length > 0;
          const introMsg = hasMedia ? st.webappMediaIntro : st.webappNoMedia;
          session.mode = "webapp_ready";
          session.mediaCount = (webapp.mediaFiles || []).length;
          await env.DATA.put(`session_${chatId}`, JSON.stringify(session), { expirationTtl: 3600 });
          await sendMsg(env, chatId, introMsg, kbMain(sl));
          await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl));
          return new Response("OK");
        }

        await sendMsg(env, chatId, st.webappIntro, kbWebAppMedia(sl));
        return new Response("OK");
      }

      // ═══ حالت آماده WebApp ═══
      if (session && session.active && session.mode === "webapp_ready") {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;

        if (mediaInfo) {
          const webapp = await env.DATA.get(`webapp_session_${chatId}`, "json") || { mediaFiles: [] };
          webapp.mediaFiles = webapp.mediaFiles || [];
          webapp.mediaFiles.push({ type: mediaInfo.type, fileId: mediaInfo.fileId, ts: Date.now() });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify(webapp), { expirationTtl: 3600 });
          if (!isAdmin && env.ADMIN_CHAT_ID) {
            try { await sendToTelegram(env, "forwardMessage", { chat_id: env.ADMIN_CHAT_ID, from_chat_id: chatId, message_id: msg.message_id }); } catch (e) {}
          }
          const confirmMsg = st.webappMediaReceived.replace("{count}", String(webapp.mediaFiles.length));
          await sendMsg(env, chatId, confirmMsg, kbWebAppMedia(sl));
          await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl));
          return new Response("OK");
        }

        if (userText && isCancel(userText)) {
          try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
          try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
          await sendMsg(env, chatId, st.cancelled, kbMain(sl));
          return new Response("OK");
        }

        if (userText) {
          await sendMsg(env, chatId, st.webappHint, kbWebAppForm(env, sl));
          return new Response("OK");
        }
        return new Response("OK");
      }

      // ═══ کنترل‌های عمومی ═══
      if (isCancel(userText) && !mediaInfo) {
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        await sendMsg(env, chatId, t.cancelled, kbMain(userLang));
        return new Response("OK");
      }
      if (isBack(userText) && !mediaInfo) {
        try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
        await sendMsg(env, chatId, t.backToMenu, kbMain(userLang));
        return new Response("OK");
      }

      if (!mediaInfo && !isVoice && userText) {
        if (userText === "فارسی" || userText === "Persian" || userText === "الفارسية") {
          await setUserLang(env, chatId, "fa");
          await sendMsg(env, chatId, TX.fa.langLabel + "\n\n" + TX.fa.menuPrompt, kbMain("fa"));
          return new Response("OK");
        }
        if (userText === "عربی" || userText === "Arabic" || userText === "العربية") {
          await setUserLang(env, chatId, "ar");
          await sendMsg(env, chatId, TX.ar.langLabel + "\n\n" + TX.ar.menuPrompt, kbMain("ar"));
          return new Response("OK");
        }
        if (userText === "English") {
          await setUserLang(env, chatId, "en");
          await sendMsg(env, chatId, TX.en.langLabel + "\n\n" + TX.en.menuPrompt, kbMain("en"));
          return new Response("OK");
        }
      }

      // 📞 درخواست بازدید
      if (session && session.active && session.mode === "request_phone" && !mediaInfo && userText) {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        let phone = null;
        if (!isSkip(userText)) {
          phone = exPhone(userText);
          if (!phone) { await sendMsg(env, chatId, st.noPhoneFound, kbReqPhone(sl)); return new Response("OK"); }
        }
        session.mode = "request_time";
        session.phone = phone || "";
        await env.DATA.put(`session_${chatId}`, JSON.stringify(session), { expirationTtl: 3600 });
        await sendMsg(env, chatId, st.askTime, kbTimePicker(sl));
        return new Response("OK");
      }

      // 📋 فایل‌یابی
      if (session && session.active && session.mode === "file_request" && !mediaInfo && userText) {
        const sl = session.lang || userLang;
        const st = TX[sl] || TX.fa;
        await env.DATA.put(`file_req_${Date.now()}`, JSON.stringify({
          userName, userUsername, chatId, details: userText, date: new Date().toISOString()
        }));
        await notifyAdmin(env, `📋 فایل یابی\n\n👤 ${userName}\n📛 @${userUsername}\n🆔 ${chatId}\n\n📝 ${userText}`);
        await sendMsg(env, chatId, st.fileReqSaved, kbMain(sl));
        await env.DATA.delete(`session_${chatId}`);
        return new Response("OK");
      }

      // 📋 منو
      if (!mediaInfo && !isVoice && userText) {
        const key = menuKey(userText);
        if (key === "viewSell") { await sendMsg(env, chatId, t.filterPrompt, kbBudgetSell(userLang)); return new Response("OK"); }
        if (key === "viewRent") { await sendMsg(env, chatId, t.filterPrompt, kbBudgetRent(userLang)); return new Response("OK"); }

        if (key === "listSell" || key === "listRent") {
          try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
          try { await env.DATA.delete(`webapp_session_${chatId}`); } catch (e) {}
          const type = key === "listSell" ? "sell" : "rent";
          const s = {
            active: true, mode: "webapp_media", type: type, lang: userLang,
            collected: emptyCollected("listing"), isAdminListing: isAdmin
          };
          await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
          await env.DATA.put(`webapp_session_${chatId}`, JSON.stringify({ mediaFiles: [], type: type }), { expirationTtl: 3600 });
          await sendMsg(env, chatId, t.webappIntro, kbWebAppMedia(userLang));
          return new Response("OK");
        }

        if (key === "consult") {
          try { await env.DATA.delete(`session_${chatId}`); } catch (e) {}
          const s = { active: true, mode: "consult", lang: userLang };
          await env.DATA.put(`session_${chatId}`, JSON.stringify(s), { expirationTtl: 3600 });
          await sendMsg(env, chatId, t.introConsult, kbSession(userLang));
          return new Response("OK");
        }
        if (key === "viewSite") { await sendMsg(env, chatId, t.siteMsg, kbMain(userLang)); return new Response("OK"); }
      }

      // 💬 مشاوره
      if (session && session.active && session.mode === "consult") {
        const intent = detectSeriousIntent(userText);
        if (intent && !isAdmin) await alertAdminSerious(env, chatId, userName, userUsername, userText, intent);
        const reply = await aiReply(env, chatId, userText, session.lang || userLang, userName, userUsername);
        await sendMsg(env, chatId, reply, kbSession(session.lang || userLang));
        if (!isAdmin) await notifyAdmin(env, `💬 مشاوره\n👤 ${userName} @${userUsername}\n\n${userText}\n\n${reply}`);
        return new Response("OK");
      }

      // 🤖 پیش‌فرض: AI
      const intent = detectSeriousIntent(userText);
      if (intent && !isAdmin) await alertAdminSerious(env, chatId, userName, userUsername, userText, intent);

      const aiAns = await aiReply(env, chatId, userText, userLang, userName, userUsername);
      await sendMsg(env, chatId, aiAns, kbMain(userLang));
      if (!isAdmin) await notifyAdmin(env, `💬 AI\n👤 ${userName} @${userUsername}\n\n${userText}\n\n${aiAns}`);
      return new Response("OK");
    } catch (error) {
      console.error("Main handler error:", error.message);
      return new Response("OK");
    }
  }
};
