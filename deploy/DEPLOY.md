# نشر MarsFlex مجاناً (بدون بطاقة)

الفكرة: الحسابات (Python) بتشتغل على **Hugging Face Space** المجاني، وصفحة **Firebase** (مشروعك `marsflex-d8c64`) هي العنوان النظيف اللي بتوزّعوه وبتحوّل للتطبيق.
كل هذا مجاني ولا يحتاج بطاقة فيزا.

> الكود والبيانات اللي بتنرفع محضّرين مسبقاً بمجلد `deploy/_space`. ما بيدخل فيه إلا اللي التطبيق بحتاجه (بدون الاختبارات، ولا الملف الكبير 12 جيجا، ولا أي ملفات خاصة).

## 1) جهّز الحزمة (على جهازك)

```
python deploy/make_space_bundle.py
```

بيطلع مجلد `deploy/_space` (حوالي 130 ميجا). إذا طلع خطأ إنو `frontend/dist` مش موجود:
`cd frontend && npm ci && npm run build` ثم أعد الأمر.

## 2) ارفع التطبيق على Hugging Face (مرة وحدة)

1. سجّل حساب مجاني على https://huggingface.co (بدون بطاقة).
2. من الموقع: **New → Space**.
   - Space name: `marsflex`
   - SDK: **Docker** (Blank)
   - Visibility: **Public** (لازم عام عشان الحكام يفتحوه)
   - **Create Space**
3. من Settings → **Access Tokens** → New token → النوع **Write** → انسخه.
4. على جهازك (PowerShell):
   ```
   pip install -U huggingface_hub
   hf auth login
   hf upload YOUR_HF_USERNAME/marsflex deploy/_space . --repo-type=space
   ```
   (استبدل `YOUR_HF_USERNAME` باسمك بـ Hugging Face. وبـ `hf auth login` الصق التوكن.)
5. استنّى 5 إلى 10 دقايق، التطبيق بيتبني لحاله (تبويب **Logs** بالـ Space). لما يقول **Running** افتح:
   `https://YOUR_HF_USERNAME-marsflex.hf.space`

## 3) افتح العنوان النظيف على Firebase

```
npm install -g firebase-tools
firebase login
python deploy/firebase/set_space_url.py https://YOUR_HF_USERNAME-marsflex.hf.space
cd deploy/firebase
firebase deploy --only hosting
```

بيطلع عنوان مثل `https://marsflex-d8c64.web.app` وهو بيحوّل مباشرة للتطبيق.
(إذا طلب منك تفعّل Hosting: من لوحة Firebase اضغط **Hosting → Get started**، مجاناً وبدون بطاقة بخطة Spark.)

## 4) قبل الحكام

- الـ Space المجاني بينام بعد يومين بدون زيارات. أول فتحة بعد النوم بتاخد حوالي دقيقة. **افتحوه بنفسكم قبل ما يشوفه الحكام بدقايق.**
- جرّبوا: الكرة ← Descend ← اكبسوا أي نقطة ← Find the best site ← Walk the route.

## شو اللي محمي، وبصراحة شو لا

محمي (مفعّل تلقائياً على Hugging Face، ومش على جهازكم المحلي):
- حد أقصى للطلبات لكل زائر بالدقيقة (الحسابات الثقيلة أشد)، ورد `429` بدل ما السيرفر يوقع.
- رفض أي طلب أكبر من 256 كيلوبايت، ورفض أي طريقة غير المستخدمة (مثل DELETE).
- صفحات التوثيق الداخلية (`/docs`) مقفولة.
- رؤوس أمان (nosniff, HSTS, Referrer-Policy, Permissions-Policy) وبدون ملفات `.map` تكشف الكود الأصلي للواجهة.
- ما في كلمات سر أو مفاتيح بالكود أصلاً، والتطبيق ما بيتصل بأي خدمة خارجية وقت التشغيل.

مش محمي (وما بنقدر نحميه لو بدنا الحكام يشوفوه):
- **الكود مفتوح أصلاً:** الريبو عام على GitHub بترخيص Apache-2.0. تغيير الرابط لا بيخبّي الكود ولا بيمنع حدا ياخده. هاد خيار اتخذتوه لما ضبطتوا الريبو عام، وهو المطلوب بالهاكاثون.
- أي حد معه الرابط بيقدر يفتح الموقع. الرابط الغريب (`hf.space` و `web.app`) بيقلّل الزوار العشوائيين، بس **مش حماية**. لو بدكم حماية حقيقية لازم رمز دخول، والحكام بيحتاجوه.

## نصايح أمان

- بعد ما تخلص الرفع، احذف التوكن من https://huggingface.co/settings/tokens (أو بدّله). لا تحطوه بأي ملف ولا بالريبو.
- ما ترفعوا ملفات شخصية: الحزمة بتاخذ فقط ملفات التطبيق من git، فاطمئنوا.
