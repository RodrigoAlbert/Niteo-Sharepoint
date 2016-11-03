$('.ms-dlgContent').prevObject[0].activeElement.href = page + "?IsDlg=1"; // Possível problema de click no IE.
 


location.replace(url + "?IsDlg=1"); // Menor e mais eficiente nos navegadores.
