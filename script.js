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
        showError("English is compulsory. Enter both English marks.");
        return;
    }

    const englishAvg = (eng1 + eng2) / 2;

    let subjects = [englishAvg];

    // Math
    const math = getValue("math");
    if (math !== null) subjects.push(math);

    // Science
    const phy = getValue("phy");
    const chem = getValue("chem");
    const bio = getValue("bio");
    if (phy !== null && chem !== null && bio !== null) {
        subjects.push((phy + chem + bio) / 3);
    }

    // Computer
    const computer = getValue("computer");
    if (computer !== null) subjects.push(computer);

    // Hindi
    const hindi = getValue("hindi");
    if (hindi !== null) subjects.push(hindi);

    // Social Studies
    const history = getValue("history");
    const geography = getValue("geography");
    if (history !== null && geography !== null) {
        subjects.push((history + geography) / 2);
    }

    if (subjects.length < 5) {
        showError("Enter marks for English + any 4 optional subjects.");
        return;
    }

    const total = subjects.slice(0, 5).reduce((a, b) => a + b, 0);
    const percentage = (total / 5).toFixed(2);

    resultBox.style.background = "#eff6ff";
    resultBox.style.color = "#1e40af";
    resultBox.innerText = `Your ICSE Percentage: ${percentage}%`;
}

function showError(message) {
    const resultBox = document.getElementById("result");
    resultBox.style.background = "#fef2f2";
    resultBox.style.color = "#991b1b";
    resultBox.innerText = message;
}
