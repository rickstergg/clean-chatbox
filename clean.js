// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
  // obj will be empty for chat widget
  // this will fire only once when the widget loads
});

// Keeps track of whether to append and stack messages or keep the new div.
let previousFrom = null;
let bombing = false;

document.addEventListener('onEventReceived', function(obj) {
  // obj will contain information about the event
  console.log(obj.detail); // OBJ Logs

  //smoothscroll animation
  const smoothscroll = {smoothscroll};

  if (obj.detail.command === "PRIVMSG") { // Prevent animation for ping events - Curtis Geiger
    if (previousFrom == obj.detail.from) {
      const messages = document.getElementsByClassName('message');
      const parentMessage = messages[messages.length - 2];
      const childMessage = messages[messages.length - 1];
      parentMessage.innerHTML += '<br />' + childMessage.innerHTML;

      const wrapper = document.getElementsByClassName('wrapper');
      wrapper[wrapper.length - 1].remove();
    }

    //smoothscroll
    if (previousFrom != obj.detail.from && smoothscroll == true) {
      $('#log>div').last().hide().slideToggle(600, "easeInOutQuart"); //New animation code
    }

    previousFrom = obj.detail.from;

    function bomb(){
      // On event received - Heart animation
      let randomNumberBetween = (max, min) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };
      let bottom = randomNumberBetween(5, 20);
      let right = randomNumberBetween(10, 90);
      let size = randomNumberBetween(15, 50);
      let heartsId = randomNumberBetween(100, 50000);
      const customImage = {custom-image};
      let heartsAni = "{animation}";

      let defaultImage = customImage
        ? "{custom-image-uploaded}"
        : "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIxOCI+PHJlY3QgaWQ9ImJhY2tncm91bmRyZWN0IiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4PSIwIiB5PSIwIiBmaWxsPSJub25lIiBzdHJva2U9Im5vbmUiIGNsYXNzPSIiIHN0eWxlPSIiLz4KCQo8ZyBjbGFzcz0iY3VycmVudExheWVyIiBzdHlsZT0iIj48dGl0bGU+TGF5ZXIgMTwvdGl0bGU+PHBhdGggZmlsbD0iI2U1NmQ0MiIgZD0iTTEwLjAwMDAwMTgzMDIxMjI4OCwxNy41NTA1MTQ5NzQwNTk2MSBsLTEuMzUxMzA3NDcxMTA1NzQ0LC0xLjIzMDE1NTc2Njc5OTcxMTggYy00Ljc5OTQ3MTM2Mjg5MjgxNSwtNC4zNTIxNDE5OTMxNDc0NjUgLTcuOTY4MDU0Mzk4NTg5MDQzLC03LjIyMjUwNTQ0OTAxMzQ1OSAtNy45NjgwNTQzOTg1ODkwNDMsLTEwLjc0NTIyNDIzNTc1ODA4NyBjMCwtMi44NzAzNjM0NTU4NjU5OTQ1IDIuMjU1Mjg1NTcyNDY2MTM4LC01LjEyNTY0OTAyODMzMjEzMiA1LjEyNTY0OTAyODMzMjEzMiwtNS4xMjU2NDkwMjgzMzIxMzIgYzEuNjIxNTY4OTY1MzI2ODkzOSwwIDMuMTc3OTAyMzk3NTY1OTIyNCwwLjc1NDg2ODMxMTQ0NTI3NzMgNC4xOTM3MTI4NDEzNjI2NTQsMS45NDc3NDY2MzA3NjYyMTA0IGMxLjAxNTgxMDQ0Mzc5NjczMTUsLTEuMTkyODc4MzE5MzIwOTMyNSAyLjU3MjE0Mzg3NjAzNTc2MTMsLTEuOTQ3NzQ2NjMwNzY2MjEwNCA0LjE5MzcxMjg0MTM2MjY1NCwtMS45NDc3NDY2MzA3NjYyMTA0IGMyLjg3MDM2MzQ1NTg2NTk5NDUsMCA1LjEyNTY0OTAyODMzMjEzMiwyLjI1NTI4NTU3MjQ2NjEzOCA1LjEyNTY0OTAyODMzMjEzMiw1LjEyNTY0OTAyODMzMjEzMiBjMCwzLjUyMjcxODc4Njc0NDYyOTIgLTMuMTY4NTgzMDM1Njk2MjI3Miw2LjM5MzA4MjI0MjYxMDYyNCAtNy45NjgwNTQzOTg1ODkwNDMsMTAuNzU0NTQzNTk3NjI3NzgyIGwtMS4zNTEzMDc0NzExMDU3NDQsMS4yMjA4MzY0MDQ5MzAwMTY5IHoiIGlkPSJzdmdfMSIgY2xhc3M9IiIgZmlsbC1vcGFjaXR5PSIxIiBzdHJva2U9IiMyNDI0MjQiIHN0cm9rZS1vcGFjaXR5PSIxIi8+PC9nPjwvc3ZnPg==";

      $('#custom_html').append('<span class="hearts' + ` hearts-${heartsId}` + ` ${heartsAni}"` + 'style="z-index: -1; position: absolute; bottom:' + bottom + '%; right:' + right + '%;"><img width="' + size + '"' + `src="${defaultImage}` + '"></img></span>');
      setTimeout(() => $(`.hearts-${heartsId}`).remove(), 3500);
    }

    // These are the intermittent hearts or images you see when a message comes in!
    bomb();

    let triggerWord = "{trigger}";
    let bombCount = {bombCount};
    if (obj.detail.tags.mod == "1" || obj.detail.owner == "1" || obj.detail.subscriber == "1" || obj.detail.tags.badges.includes("vip")) {
      if (obj.detail.body.includes(triggerWord)) {
        if (bombing) {
          return;
        }

        bombing = true;
        setTimeout(() => { bombing = false }, 6969);

        const delayBomb = i => {
          setTimeout(() => {
            bomb();
            if (--i) delayBomb(i);
            }, 25);
        };

        delayBomb(bombCount);
      }
    }
  }

  if (obj.detail.command === "CLEARCHAT") {
    document.getElementById('log').innerHTML = '';
  }
});
