document.addEventListener("DOMContentLoaded", () => {
  const addInput = document.getElementById("item");
  const myForm = document.getElementById("myForm");
  addInput.focus();
  myForm.addEventListener("click", function (e) {
    e.preventDefault();
    let newItem = addInput.value;
    // console.log(newItem);
    if (newItem) {
      addItemTodo(newItem);
      addInput.value = "";
      addInput.focus();
    }
  });

  var counter = 1;
  function addItemTodo(text) {
    let list = document.getElementById("todo");
    var str = `
    <li class="d-flex border-bottom p-3">
    ${counter}
    <div class="form-check">
      <label class="form-check-label"> ${text} </label>
    </div> <i class="fa fa-check text-success ml-auto" id="complete"></i>
    <i class="fa fa-remove text-danger ml-2" id="remove"></i>
  </li>
    `;
    list.insertAdjacentHTML("afterbegin", str);

    let complete = document.getElementById("complete");
    complete.addEventListener("click", toggleItem);
    let remove = document.getElementById("remove");
    remove.addEventListener("click", removeItem);

    counter++;
  }

  function toggleItem(e) {
    let item = e.target.parentNode;
    let parent = item.parentNode;
    let id = parent.id;

    if (id === "todo") {
      var target = document.getElementById("completed");
      this.className = "fa fa-undo ml-auto text-warning";
    } else {
      var target = document.getElementById("todo");
      this.className = "fa fa-check ml-auto text-success";
    }

    target.insertBefore(item, target.childNodes[0]);
  }

  function removeItem(e) {
    let item = e.target.parentNode;
    let parent = item.parentNode;
    parent.removeChild(item);
  }
});

// Sort

const btnSorts = document.getElementsByClassName("sort");


let btnSortArray = [...btnSorts];

btnSortArray.forEach((btnSort) => {
  btnSort.addEventListener("click", sortList);
});

function sortList(e) {
  let type = e.target.dataset.type;

  let listSort, i, swiching, liElements, shouldSwitch;

  // if (type == "todo") {
  //   listSort = document.getElementById("todo");
  // } else {
  //   listSort = document.getElementById("completed");
  // }

  listSort =
    type == "todo"
      ? document.getElementById("todo")
      : document.getElementById("completed");

  swiching = true;

  while (swiching) {
    swiching = false;
    liElements = listSort.getElementsByTagName("LI");
    for (i = 0; i < liElements.length - 1; i++) {
      shouldSwitch = false;
      if (
        liElements[i].innerHTML.toLocaleLowerCase() >
        liElements[i + 1].innerHTML.toLocaleLowerCase()
      ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      liElements[i].parentNode.insertBefore(liElements[i + 1], liElements[i]);
      swiching = true;
    }
  }
}

