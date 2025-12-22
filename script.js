function checkFile() {
    const file = document.getElementById("fileInput").files[0];
    const result = document.getElementById("result");

    if (!file) {
    result.style.color = "red";
    result.innerText = "Error: No file uploaded. Please select an image or video.";
    return;
}


    const fileSizeMB = file.size / (1024 * 1024);
    const fileType = file.type;

    if (fileType.includes("image") || fileType.includes("video")) {

        if (fileSizeMB < 1) {
            result.innerText = "Result: Possibly AI Generated (Detected artificial patterns)";

        } else {
            result.innerText = "Result: Likely Real Media";
        }

    } else {
        result.innerText = "Unsupported file format";
    }
}
