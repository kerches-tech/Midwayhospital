
async function downloadPatientFile(fileLoc,fileName){
	const file = await fetch(fileLoc)
	const fileBlob = await file.blob()
	const fileUrl = URL.createObjectURL(fileBlob)

	let a = document.createElement("a")
	a.href = fileUrl
	a.download = fileName
	document.body.appendChild(a)
	a.click()
	document.body.removeChild(a)

	URL.revokeObject(fileUrl)
}

const baseUrl = `${window.location.protocol}//${window.location.hostname}`;



let download_patient_admission_file = document.getElementById("download_patient_admission_file")

download_creche_admission_form.addEventListener("click",()=>{
	downloadPatientFile(`${baseUrl}/images/fonders and forms/creche.pdf`,"FMidway Hospital Patient Admission Information Leaflet.pdf")
})

let download_nursery_admission_form = document.getElementById("download_nursery_admission_form")

download_nursery_admission_form.addEventListener("click",()=>{
	downloadAdmissionFile(`${baseUrl}/images/fonders and forms/nursery12.pdf`,"Family Care Schools nursery admissions.pdf")
})

let download_kind_admission_form = document.getElementById("download_kind_admission_form")

download_kind_admission_form.addEventListener("click",()=>{
	downloadAdmissionFile(	`${baseUrl}/images/fonders and forms/kindergarten.pdf`,"Family Care Schools kindergarten admissions.pdf")
})


let download_lp_admission_form = document.getElementById("download_lp_admission_form")

download_lp_admission_form.addEventListener("click",()=>{
	downloadAdmissionFile(`${baseUrl}/images/fonders and forms/lower primary123.pdf`,"Family Care Schools lower-primary admissions.pdf")
})

let download_up_admission_form = document.getElementById("download_up_admission_form")

download_up_admission_form.addEventListener("click",()=>{
	downloadAdmissionFile(`${baseUrl}/images/fonders and forms/upper primary456.pdf`,"Family Care Schools upper-primary admissions.pdf")
})