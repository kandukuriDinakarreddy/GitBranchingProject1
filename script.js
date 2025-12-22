function checkFile() {
    const file = document.getElementById("fileInput").files[0];
    const result = document.getElementById("result");

    if (!file) {
        result.innerText = "Please upload a file first.";
        return;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    const fileType = file.type;

    if (fileType.includes("image") || fileType.includes("video")) {

        if (fileSizeMB < 1) {
            result.innerText = "Result: Possibly AI Generated (low file size)";
        } else {
            result.innerText = "Result: Likely Real Media";
        }

    } else {
        result.innerText = "Unsupported file format";
    }
}
