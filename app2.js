alert("VUI LÒNG ĐIỀN THÔNG TIN CỦA BẠN !!");
function checkValidation() {
    let name = document.getElementById("name");
    let age = document.getElementById("age");
    let phone = document.getElementById("phone");
    let ageWarning = document.getElementById("age-warning");
    let phoneWarning = document.getElementById("phone-warning");
    let submit = document.getElementById("button")
    
    
    if (name.value === "" || age.value === "" || phone.value === "") {
        alert("VUI LÒNG NHẬP TẤT CẢ CÁC Ô");
    }
    if (age.value <= 0) {
        ageWarning.innerHTML = "VUI LÒNG NHẬP TUỔI LỚN HƠN 0";
    }
    else {
        ageWarning.innerHTML = "";
    }
    if (isNaN(phone.value) === true) {
        phoneWarning.innerHTML = "Vui long nhap so khong co ki tu khac"
    }
    else {
        phoneWarning.innerHTML = "";
    }
}
