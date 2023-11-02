(function getName() {
  console.log("Name");
})();

var sum = (function () {
  return 10 + 20;
})();
console.log(sum);

// private funcation theke return kore value use kora jai

let controller = (function () {
  let a = {
    name: "Md Rony Khan",
  };
  return a;
})();

let interface = (function () {
  return "Hello " + controller.name;
})();
console.log(interface);
