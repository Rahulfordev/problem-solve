function thisKeyword() {
  console.log(this);
}

thisKeyword();

// ১। গ্লোবাল রুলস

//// আর অনেকসময় দেখবেন এভাবে একটা ভ্যারিয়েবল নিলেও সেটা কাজ করে অন্যান্য গ্লোবাল ভ্যারিয়েবলের মতোইঃ
function thisKeywordOne() {
  this.name = "Zahid Ahmed";
}
thisKeywordOne();
console.log(name);

//কারণটা কি? হ্যাঁ কারণ হচ্ছে আপনি যখন ফাংশন এর ভিতরে this.name লিখলেন এবং সেই ফাংশনটা গ্লোবাল কন্টেক্সট এ কল করলেন তখন এই this.name আসলে গ্লোবাল অবজেক্ট এর আন্ডারে name এ অ্যাসাইন(window.name) হয়ে যাচ্ছে। তাই সিম্পলি আপনি এটা বাইরে যেকোনো জায়গায় অ্যাক্সেস পাচ্ছেন। ‘strict mode’ এ এটা কাজ করবে না।

// ২। অবজেক্ট রুলসঃ

const myCustomObj = {
  name: "Faruk Islam",
  age: 23,
  msg: function () {
    console.log("My Name is " + this.name);
  },
};

myCustomObj.msg();
console.log(this.name);

// check myCustomObj er modde this ache na nai?
const myCustomObject = {
  name: "Jahid Khan",
  age: 25,
  isTrue: function () {
    console.log(myCustomObject === this);
  },
};

myCustomObject.isTrue();

// object er modde kon object take indecate kore this keyword?
const thisIndecate = {
  name: "Tamim Igbal",
  age: 32,
  anotherObj: {
    name: "Korim Ali",
    value: function () {
      console.log(this);
    },
  },
};
//তাহলে দেখবেন এটা দ্বিতীয় অবজেক্ট অর্থাৎ anotherObj কেই প্রিন্ট করছেঃ
thisIndecate.anotherObj.value();

//৩। স্পষ্ট রুলসঃ
// আপনারা হয়তো call, bind, apply মেথডের কথা শুনেছেন। কোথাও যদি দেখেন এগুলো ইউজ হয়েছে তাহলে খুব সহজেই সেখানে this কীওয়ার্ড কাকে ইন্ডিকেট করছে সেটা ধরে ফেলতে পারবেন। কারণ এই call, bind, apply মেথডগুলো ইউজ করে প্রথম প্যারামিটারেই this কীওয়ার্ড কাকে ইন্ডিকেট করবে সেটা সেট করা যায়।

//মানে এখানে this anotherObj কে ইন্ডিকেট করছে। কিন্তু আমরা যদি কাস্টমভাবে বলে দিতে চাই anotherObj না বরং আমরা চাই এখানে this myCustomObj কে ইন্ডিকেট করুক তাহলে এভাবে call মেথড ইউজ করে বলে দিতে পারিঃ
const thisIndecateOne = {
  name: "Tamim Igbal",
  age: 32,
  anotherObj: {
    name: "Korim Ali",
    value: function () {
      console.log(this);
    },
  },
};

//এখন এখানে this আমাদের কথামতো myCustomObj কেই যাতে ইন্ডিকেট করে সেটা call মেথড ইউজ করে বলে দিবঃ

const thisIndecateTwo = {
  name: "Mustafizur",
  age: 25,
  anotherObj: {
    name: "Tanjim",
    value: function () {
      console.log(this);
    },
  },
};
thisIndecateTwo.anotherObj.value.call(thisIndecateTwo);
//call, bind, apply এই মেথডগুলো শুধুমাত্র ফাংশনের সাথে ইউজ করা যায় যেমনটা আমরা উদাহরণটায় করেছি। অন্য কোনো ডাটা টাইপ যেমন অবজেক্ট, স্ট্রিং, নাম্বার বা বুলিয়ানের সাথে ইউজ করা যাবে না।

// ৪। new কীওয়ার্ড রুলসঃ
//শেষ কিন্তু বহুল ব্যবহৃত আরেকটা কীওয়ার্ড new ও this কীওয়ার্ডের ভ্যালু ডিটারমাইন করতে পারে। কোথাও this কোনোভাবে এই new কীওয়ার্ডের আওতায় থাকলে সেটার ভ্যালুও অন্যরকম হতে পারে

//1.গ্লোবালি যেকোনো জায়গায়, কাস্টমভাবে তৈরীকৃত অবজেক্ট এর ভিতরে ছাড়া this সবসময় গ্লোবাল অবজেক্টকেই ইন্ডিকেট করবে।
//2.এটা নরমাল রেগুলার ফাংশন কলেও গ্লোবাল অবজেক্ট কে পয়েন্ট করে
//3.এটার ভ্যালু অ্যাসাইন হয় না যতক্ষন না পর্যন্ত আপনি ডিক্ল্যেয়ারকৃত ফাংশনটাকে কল না করছেন বা এটা যেখানে ইউজ করা হয়েছে সেটাকে কল না করছেন।


// ***** Udemy
// 1.
const rahul = {
  year: 2004,
  calcAge: function () {
    console.log(this); // full object dekhabe
    console.log(2024 - this.year); // 20
  },
};
rahul.calcAge();

const sumon = {
  year: 2003,
};

sumon.calcAge = rahul.calcAge;
sumon.calcAge(); // 21

const f = rahul.calcAge;
f(); //undefiend


// lesson 2.

const rahul = {
  year: 2004,
  fullName: "MD RAHUL ALI",
  calcAge: function () {
    // console.log(this); // full object dekhabe
    console.log(2024 - this.year); // 20

    /** solucation --1 
    const self = this;
    const isSumon = function () {
      console.log(self); // this dile window dekhai
      console.log(self.year >= 2000 && self.year <= 2005); // true
      // console.log(this.year >= 2000 && this.year <= 2005); // false 
    };
   */

    // soluction --2
    // this parent e ache tai array function e this paiche
    const isSumon = () => {
      console.log(this); // this dile window dekhai
      console.log(this.year >= 2000 && this.year <= 2005); // true
      // console.log(this.year >= 2000 && this.year <= 2005); // false
    };
    isSumon();
  },
  greet: function () {
    // array function e undefiend dekhabe fullName
    // console.log(`my name is ${this.fullName}`);
  },
};
rahul.greet();
rahul.calcAge();

// argument

const addExport = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExport(5, 9);
addExport(5, 9, 33, 55, 22, 88);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(5, 10, 67, 7); // error: arguments is not defined
