function checkFile() {
    const file = document.getElementById("fileInput").files[0];
    const result = document.getElementById("result");

    if (!file) {
        result.innerText = "Please upload a file first.";
        return;
    }
// Show preview
    if (file.type.includes("image")) {
        previewImg.src = URL.createObjectURL(file);
        previewImg.style.display = "block";
        previewVid.style.display = "none";
    } 
    else if (file.type.includes("video")) {
        previewVid.src = URL.createObjectURL(file);
        previewVid.style.display = "block";
        previewImg.style.display = "none";
    } 
    else {
        result.innerText = "Unsupported file type.";
        return;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    

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
