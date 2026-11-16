const navButtons = document.querySelectorAll('.nav-btn');
const expandBoxes = document.querySelectorAll('.expand-box');

navButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    event.preventDefault(); // מונע מהדף לקפוץ למעלה

    const targetId = button.getAttribute('data-target');
    const targetBox = document.getElementById(targetId);
    const isAlreadyOpen = targetBox.classList.contains('active');

    // 1. סוגר את כל התיבות הפתוחות ומסיר הדגשה מהכפתורים
    expandBoxes.forEach(box => box.classList.remove('active'));
    navButtons.forEach(btn => btn.classList.remove('active-link'));

    // 2. אם התיבה לא הייתה פתוחה קודם - פותח אותה ומדגיש את הכפתור
    if (!isAlreadyOpen) {
      targetBox.classList.add('active');
      button.classList.add('active-link');
    }
  });
});