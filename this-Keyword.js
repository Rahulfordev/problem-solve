function thisKeyword() {
  console.log(this);
}

thisKeyword();

// 1:-

//// আর অনেকসময় দেখবেন এভাবে একটা ভ্যারিয়েবল নিলেও সেটা কাজ করে অন্যান্য গ্লোবাল ভ্যারিয়েবলের মতোইঃ
function thisKeywordOne() {
  this.name = "Zahid Ahmed";
}
thisKeywordOne();
console.log(name);

//কারণটা কি? হ্যাঁ কারণ হচ্ছে আপনি যখন ফাংশন এর ভিতরে this.name লিখলেন এবং সেই ফাংশনটা গ্লোবাল কন্টেক্সট এ কল করলেন তখন এই this.name আসলে গ্লোবাল অবজেক্ট এর আন্ডারে name এ অ্যাসাইন(window.name) হয়ে যাচ্ছে। তাই সিম্পলি আপনি এটা বাইরে যেকোনো জায়গায় অ্যাক্সেস পাচ্ছেন। ‘strict mode’ এ এটা কাজ করবে না।

/// 2

const myCustomObj = {
  name: "jahid Rohoman",
  age: 22,
  msg: function () {
    console.log("My name is " + this.name);
  },
};

myCustomObj.msg();
console.log(this.name);
