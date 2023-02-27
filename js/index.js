let pdfDown = document.getElementById('pdf');

pdfDown.addEventListener('click',(e)=>{
    if (window.confirm("다운로드하시겠습니까?")) {
  } else {
    e.preventDefault();
    window.location.reload();
  }
})
