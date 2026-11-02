const terminal = document.getElementById("terminal");
  const terminalHeader = document.getElementById("terminalHeader");

  let isDragging = false;
  let offsetX = 0;
  let offsetY = 0;

  terminalHeader.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - terminal.offsetLeft;
    offsetY = e.clientY - terminal.offsetTop;
    });

  document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    let newLeft = e.clientX - offsetX;
    let newTop = e.clientY - offsetY;

    const maxLeft = window.innerWidth - terminal.offsetWidth;
    const maxTop = window.innerHeight - terminal.offsetHeight;

    newLeft = Math.max(0, Math.min(newLeft, maxLeft));
    newTop = Math.max(0, Math.min(newTop, maxTop));

    terminal.style.left = `${newLeft}px`;
    terminal.style.top = `${newTop}px`;
    });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });