var controller = (() =>  {
  let count = 0;

  const changeCount = (e) => {
    if (e.target.id == 'add-count') {
        count += 1;
        displayCount(count)
    } if (e.target.id == 'dec-count') {
        count -= 1;
        displayCount(count)
    }

  };

  const displayCount = (Counter) => {
    document.getElementById("count").innerHTML = Counter;
  }

  const eventHandler = () => {
    document.getElementById("dec-count").addEventListener("click", changeCount);
    document.getElementById("add-count").addEventListener("click", changeCount);
  }

  return {
    init: () => {
      console.log("App started");
      document.getElementById("count").innerHTML = "0";
      eventHandler();
    }
  }
})();

controller.init()
