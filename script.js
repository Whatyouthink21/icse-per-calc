function getValue(id) {
    const val = document.getElementById(id).value;
    return val === "" ? null : Number(val);
}

function calculate() {
    const resultBox = document.getElementById("result");
    resultBox.classList.remove("hidden");

    // English (compulsory)
    const eng1 = getValue("eng1");
    const eng2 = getValue("eng2");

    if (eng1 === null || eng2 === null) {
        showError("English is compulsory. Enter both English marks and marks of any 4 subjects.");
        return;
    }

    const englishAvg = (eng1 + eng2) / 2;

    let subjects = [];
    let breakdown = [];

    // English
    subjects.push(englishAvg);
    breakdown.push(`English (avg of 2 papers): ${englishAvg.toFixed(2)}`);

    // Math
    const math = getValue("math");
    if (math !== null) {
        subjects.push(math);
        breakdown.push(`Math: ${math.toFixed(2)}`);
    }

    // Science
    const phy = getValue("phy");
    const chem = getValue("chem");
    const bio = getValue("bio");
    if (phy !== null && chem !== null && bio !== null) {
        const sciAvg = (phy + chem + bio) / 3;
        subjects.push(sciAvg);
        breakdown.push(`Science (avg of Physics, Chemistry, Biology): ${sciAvg.toFixed(2)}`);
    }

    // Computer
    const computer = getValue("computer");
    if (computer !== null) {
        subjects.push(computer);
        breakdown.push(`Computer: ${computer.toFixed(2)}`);
    }

    // Hindi
    const hindi = getValue("hindi");
    if (hindi !== null) {
        subjects.push(hindi);
        breakdown.push(`Hindi: ${hindi.toFixed(2)}`);
    }

    // Social Studies
    const history = getValue("history");
    const geography = getValue("geography");
    if (history !== null && geography !== null) {
        const socAvg = (history + geography) / 2;
        subjects.push(socAvg);
        breakdown.push(`Social Studies (avg of History & Geography): ${socAvg.toFixed(2)}`);
    }

    // Check if English + 4 optional subjects
    if (subjects.length < 5) {
        showError("English is compulsory. Enter both English marks and marks of any 4 subjects.");
        return;
    }

    // Only consider first 5 subjects (English + best 4 optionals)
    const selectedSubjects = subjects.slice(0, 5);
    const totalMarks = selectedSubjects.reduce((a, b) => a + b, 0);
    const percentage = (totalMarks / 5).toFixed(2);

    // Prepare breakdown for only first 5 subjects
    const displayBreakdown = breakdown.slice(0, 5).join("<br>");

    resultBox.style.background = "#eff6ff";
    resultBox.style.color = "#1e40af";
    resultBox.innerHTML = `
        ${displayBreakdown}<br>
        <strong>Total Marks:</strong> ${totalMarks.toFixed(2)} / 500<br>
        <strong>Percentage:</strong> ${percentage}%<br><br>
        Congratulations for the results! Wishing best of luck for the rest of your lives!
    `;
}

function showError(message) {
    const resultBox = document.getElementById("result");
    resultBox.style.background = "#fef2f2";
    resultBox.style.color = "#991b1b";
    resultBox.innerText = message;
}
