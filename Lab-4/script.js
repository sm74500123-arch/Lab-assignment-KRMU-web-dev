(function() {

  const quiz = [
    { q: "What is the capital of France?", a: "paris" },
    { q: "Which planet is known as the Red Planet?", a: "mars" },
    { q: "What is 5 multiplied by 6?", a: "30" },
    { q: "Which language is primarily used for web pages (short name)?", a: "html" },
    { q: "Who directed 'Interstellar'?", a: "christopher nolan" }
  ];

 
  function normalize(input) {
    return (input === null) ? "" : String(input).toLowerCase().trim();
  }


  function askQuestion(item, index, total) {
    const promptText = `Question ${index + 1} of ${total}:\n${item.q}`;
    const userRaw = prompt(promptText);
    const user = normalize(userRaw);
    const correct = normalize(item.a);

    if (user === "") {
      alert("No answer provided. Moving to next question.");
      return false;
    }

    if (user === correct) {
      alert("✅ Correct!");
      return true;
    } else {
      alert(`❌ Incorrect. The correct answer is: "${item.a}".`);
      return false;
    }
  }


  function runQuiz(questions) {
    let score = 0;
    const total = questions.length;

    for (let i = 0; i < total; i++) {
      const correct = askQuestion(questions[i], i, total);
      if (correct) score++;
      console.log(`Progress: ${i + 1}/${total} — Current score: ${score}`);
    }

    const percent = Math.round((score / total) * 100);
    const finalMessage = `Quiz finished!\nYour score: ${score}/${total} (${percent}%)`;
    alert(finalMessage);
    console.log(finalMessage);
  }


  runQuiz(quiz);
})();
