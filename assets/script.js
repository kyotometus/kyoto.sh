// Data object
const data = {
    currentVersion: {
        weight: "75.5kg",
        lastupdated: "27.12.2024"
    },
    personalBests: {
        pushups: "15",
        pullups: "12",
        dips: "12",
        plank: "2:00 min",
        running5k: "25:45 min",
        running10k: "N/A",
        lastupdated: "27.12.2024"
    }
};

// DOM element references
const elements = {
    weight: document.getElementById("weight"),
    lastUpdateVersion: document.getElementById("lastUpdateVersion"),
    pushups: document.getElementById("pushups"),
    pullups: document.getElementById("pullups"),
    dips: document.getElementById("dips"),
    plank: document.getElementById("plank"),
    running5k: document.getElementById("running5k"),
    running10k: document.getElementById("running10k"),
    lastUpdateExs: document.getElementById("lastUpdateExs"),
    bmi: document.getElementById("bmi"),
    currentYear: document.getElementById("currentYear"),
    currentPageSize: document.getElementById("currentPageSize"),
};

// Update DOM with data
function updateDOMWithData(data) {
    if (elements.weight) {
        elements.weight.innerText = data.currentVersion.weight;
        elements.lastUpdateVersion.innerText = data.currentVersion.lastupdated;

        elements.pushups.innerText = data.personalBests.pushups;
        elements.pullups.innerText = data.personalBests.pullups;
        elements.dips.innerText = data.personalBests.dips;
        elements.plank.innerText = data.personalBests.plank;
        elements.running5k.innerText = data.personalBests.running5k;
        elements.running10k.innerText = data.personalBests.running10k;
        elements.lastUpdateExs.innerText = data.personalBests.lastupdated;
    }
}

// Calculate BMI
function calculatebmi() {
    if (elements.bmi) {
        const weight = parseFloat(elements.weight.innerHTML.replace("kg", "").trim());
        const height = 1.72; // meters
        const bmi = weight / (height * height);
        elements.bmi.innerHTML = bmi.toFixed(2);
    }
}

// Fetch file size
function fetchFileSize(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true);
    xhr.onreadystatechange = function () {
        if (this.readyState === this.DONE) {
            const size = parseInt(xhr.getResponseHeader("Content-Length"));
            callback(isNaN(size) ? 0 : size);
        }
    };
    xhr.send();
}

// Initialize script
document.addEventListener("DOMContentLoaded", function () {
    updateDOMWithData(data);
    calculatebmi();

    if (elements.currentYear) {
        elements.currentYear.innerHTML = new Date().getFullYear();
    }

    if (elements.currentPageSize) {
        fetchFileSize(window.location.href, function (size) {
            elements.currentPageSize.innerHTML = (size / 1024).toFixed(2) + " KB";
        });
    }
});
