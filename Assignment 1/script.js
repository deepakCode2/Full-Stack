const subjects = document.querySelectorAll('.subject');
const tooltip = document.getElementById('tooltip');

subjects.forEach(subject => {
    subject.addEventListener('mouseover', (event) => {
        const teacherInfo = subject.getAttribute('data-info');
        tooltip.innerHTML = teacherInfo;
        tooltip.style.display = 'block';
        tooltip.style.left = event.pageX + 'px';
        tooltip.style.top = event.pageY + 'px';
    });

    subject.addEventListener('mousemove', (event) => {
        tooltip.style.left = event.pageX + 'px';
        tooltip.style.top = event.pageY + 'px';
    });

    subject.addEventListener('mouseout', () => {
        tooltip.style.display = 'none';
    });

    subject.addEventListener('click', () => {
        const teacherInfo = subject.getAttribute('data-info');
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`
            <html>
                <head><title>Teacher Info</title></head>
                <body style="font-family: Arial, sans-serif;">
                    <h1>Teacher Details</h1>
                    <p>${teacherInfo}</p>
                    <button style="padding: 10px 20px; background-color: #8a98f1; color: white; border: none; cursor: pointer;" onclick="window.close()">Close</button>
                </body>
            </html>
        `);
    });
});
