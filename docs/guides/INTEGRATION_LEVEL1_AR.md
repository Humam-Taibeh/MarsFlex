# دمج المستوى الأول في MarsFlex v6

لا تحتاج إلى كتابة كود أو تثبيت Node أو بناء الواجهة. ملف التحديث يحتوي
الملفات الجديدة كاملة والواجهة المبنية. احتفظ بنسخة v6 للرجوع إليها.

## الطريقة الموصى بها: نسخ ملفات التحديث

1. أغلق MarsFlex: في نافذة التشغيل اضغط Ctrl+C ثم أغلقها.
2. افتح `C:\Users\Admin\Downloads\MarsFlex`.
3. انسخ هذا المجلد إلى مجلد آخر باسم `MarsFlex_v6_backup` للاحتفاظ بنسخة.
4. فك ضغط `MarsFlex_Level1_Update.zip` عبر Extract All.
5. افتح مجلد `MarsFlex_Level1_Update` الناتج. سترى `terrain.py` و`api.py`
   ومجلد `frontend` وملفات التوثيق.
6. انسخ **كل المحتويات داخل هذا المجلد** إلى مجلد MarsFlex الأصلي في الخطوة 2.
   عند السؤال عن الملفات المكررة اختر Replace the files in the destination.
   لا تنسخ المجلد المغلّف نفسه داخل MarsFlex؛ يجب أن يصبح `terrain.py` الجديد
   في نفس مكان `launch.py` القديم.
7. شغّل `Start_MarsFlex.cmd` ثم حدّث المتصفح بـCtrl+F5.
8. اختر تبويب **Expedition planning**، ثم زر **Metabolism & return** بالأعلى.
9. اضغط **Calculate metabolic return**. ستظهر القدرة والطاقة والزمن المحسوبة
   من تضاريس CTX. تظل الموارد غير المدخلة Unassessed؛ هذه نتيجة مقصودة.

## إذا تكرر خطأ NumPy على Windows

لم يثبت بعد نجاح العلاج السابق على جهازك. لا تغيّر البيانات. افتح CMD ونفّذ:

```bat
"C:\Users\Admin\Downloads\MarsFlex\.marsflex-venv\Scripts\python.exe" -m pip install --index-url https://pypi.org/simple --only-binary=:all: --no-cache-dir --force-reinstall "numpy==2.3.5" "scipy==1.16.3"
"C:\Users\Admin\Downloads\MarsFlex\.marsflex-venv\Scripts\python.exe" -I -c "import numpy, scipy, rasterio, fastapi, uvicorn, shapely, pyproj, PIL; print('READY',numpy.__version__,scipy.__version__)"
```

إذا لم يظهر READY، أرسل ناتج الأمر. لا تعتبر تغيير الواجهة علاجًا لخلل DLL.
ملف requirements-tested.txt المحدث يمنع العودة تلقائيًا إلى الزوج السابق عند
إعادة تثبيت تبعيات هذا الإصدار. اختبارات هذا التسليم على Linux، وليست Windows.

## كيف تختبر المستوى الأول دون اختراع أرصدة بدلة؟

1. احسب بإعدادات البداية. صوّر قيم Travel وMetabolic energy وPeak moving power.
2. غيّر Assumed soil slowdown من 1 إلى 2. تختفي النتائج القديمة فورًا. أعد
   الحساب وقارن الزمن والطاقة. هذا اختبار حساسية لافتراض، وليس قياسًا للتربة.
3. أعد المعامل إلى 1. افتح Edit uncalibrated coefficients وغيّر Moving suit
   offset. أعد الحساب. هذه أرقام سيناريو لا بيانات NASA إضافية.
4. اضغط Ordered mission + return لرؤية كلفة تنفيذ محطاتك بترتيبها وأزمنتها.
5. إن كانت لديك أرصدة ومعاملات استهلاك موثقة للبدلة، أدخلها؛ لا تنسخ معاملات
   من بدلة أخرى وتصفها بأنها معايرة. الأكسجين kg، الماء kg تبريد، البطارية Wh.
6. زر Export يحفظ المدخلات والقيود والقيم والمسار والمصدر في JSON. أرسل هذا
   الملف مع ملاحظاتك لاختبار المستوى الأول قبل أي تطوير للمستوى الثاني.

الحد بالدقائق في لوحة العودة يعني: زمن إضافي **ثابت في المكان** عند القدرة
المدخلة ثم الرجوع بالمسار المختار. لا يعني زمن انحراف حر في أي اتجاه. عند نقص
مدخلات الموارد يظل التقييم جزئيًا. ألوان الخريطة الأصلية ما زالت لنموذج الزمن.

## ماذا تغيّر في كل ملف؟

| الملف | وظيفته | ما عليك فعله |
|---|---|---|
| terrain.py | الأيض وكلفة الحواف ومسارا العودة وحساب حدود الموارد | استبدال الملف كاملًا |
| api.py | نقطة metabolic والتحقق من المدخلات والنتائج | استبدال كاملًا |
| frontend/src/main.tsx | لوحة النتائج والمدخلات والتصدير | استبدال كاملًا؛ لا تحرير يدوي |
| frontend/src/style.css | تنسيق اللوحة | استبدال كاملًا |
| frontend/dist | الواجهة الجاهزة التي يفتحها المتصفح | نسخ المجلد ودمج محتوياته، ضروري لظهور الزر |
| frontend/package.json + package-lock.json | رقم إصدار البناء؛ لا مكتبات واجهة جديدة | استبدال |
| requirements-tested.txt | زوج NumPy/SciPy البديل | استبدال؛ بيئتك الموجودة لا تُحذف |
| MODEL_ASSUMPTIONS.md | الوحدات والافتراضات والتدقيق والمصادر | إضافة |
| CHANGELOG.md | سجل التغييرات | إضافة |
| tests/test_metabolic.py + tests/browser/browser_metabolic.cjs | فحوصات للمطور التالي | إضافة؛ لا يلزمك تشغيلها |

الـZIP لا يحتوي ملفات بيانات بديلة ولا يمس ملفات `data/source` أو بيئتك
`.marsflex-venv`. النسخة الكاملة متاحة كذلك، لكن التحديث أصغر ولا يتطلب إعادة
تنزيل بيانات المشروع. إذا غيّر مساعد آخر ملفات v6 لديك، أرسل نسخته قبل نسخ
التحديث فوقها حتى لا نفقد تعديلاته.

## API للمطور الآخر

POST `/v1/mission/metabolic`:

```json
{
  "position": {"lon":77.397,"lat":18.485},
  "habitat": {"lon":77.415,"lat":18.466},
  "remaining_min":300,
  "time_contingency_min":0,
  "activities":[{"id":"Delta review","lon":77.385,"lat":18.501,"dwell_min":15}],
  "parameters":{},
  "resources":{}
}
```

الأرصدة فارغة عمدًا، فتكون النتيجة جزئية. مخطط المدخلات الكامل في `/docs`.
`resources.oxygen` و`water` و`battery` كائنات `{remaining, reserve}`؛ لكل منها
معامل مطابق موضح في MODEL_ASSUMPTIONS.md. تعيد الأخطاء HTTP 422 بدل قبول وحدات
مفقودة أو أرقام غير صالحة. عند حساب متزامن تعيد 503 ليعاد الطلب بعد انتهاء الحساب.
