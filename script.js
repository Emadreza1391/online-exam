// سامانه آزمون آنلاین

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const grade = document.getElementById("grade").value;

    // بررسی خالی نبودن
    if (firstName === "") {
        alert("نام را وارد کنید.");
        return;
    }

    if (lastName === "") {
        alert("نام خانوادگی را وارد کنید.");
        return;
    }

    // شماره موبایل
    const phoneRegex = /^09\d{9}$/;

    if (!phoneRegex.test(phone)) {
        alert("شماره تلفن معتبر نیست.");
        return;
    }

    if (grade === "") {
        alert("پایه تحصیلی را انتخاب کنید.");
        return;
    }

    // ذخیره اطلاعات

    const user = {

        firstName,

        lastName,

        phone,

        grade,

        startTime: new Date().toLocaleString("fa-IR")

    };

    localStorage.setItem("examUser", JSON.stringify(user));

    // پیام موفقیت

    alert("اطلاعات با موفقیت ثبت شد.");

    // مرحله بعد
    // فعلاً وجود ندارد

    // بعداً این خط را فعال می‌کنیم

    // window.location.href = "answer-sheet.html";

});
