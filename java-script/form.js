// Підключаємо бібліотеку Supabase для роботи з базою даних.
const SUPABASE_URL = "https://agizzcmovrwmheiztgcv.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFnaXp6Y21vdnJ3bWhlaXp0Z2N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3Mjk4ODUsImV4cCI6MjA2MzMwNTg4NX0.vPXmIRBX9NLPmnorKuTVcKqPUeOQULQgCdpIpDSBZo4";

// Створюємо клієнт Supabase, використовуючи URL та анонімний ключ.
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

// Отримуємо форму з HTML-документа за допомогою ID.
const form = document.getElementById("contactForm");

// Додаємо обробник події на відправку форми.
// Використовуємо асинхронність, що дозволяє нам дочекатися завершення запиту перед продовженням виконання коду.
form.addEventListener("submit", async (e) => {
  // Зупиняємо стандартну поведінку форми (перезавантаження сторінки).
  e.preventDefault();

  // Отримуємо значення полів форми та видаляємо пробіли на початку та в кінці.
  const fullName = form.fullName.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Перевіряємо, чи всі поля заповнені.
  if (!fullName || !email || !message) {
    alert("Заповніть всі поля форми!");
    return;
  }

  const { error } = await supabaseClient
    .from("Tactix_form_data")
    .insert([{ name: fullName, email, message }]);

  // Перевіряємо, чи виникла помилка під час вставки даних у базу.
  if (error) {
    alert("Помилка: " + error.message);
  } else {
    alert("Дані успішно надіслані!");

    // Очищуємо поля форми після успішної відправки.
    form.reset();
  }
});