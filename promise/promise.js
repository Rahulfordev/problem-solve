// Promise.race;
// Promise.all;

function outerFunction() {
  // আউটার ফাংশনের একটি ভেরিয়েবল
  let outerVariable = "I am from the outer function";

  // ইনার ফাংশন ডিফাইন হচ্ছে, এবং সে outerVariable এক্সেস করতে পারে
  function innerFunction() {
    console.log(outerVariable);
  }

  // innerFunction ফাংশনটি রিটার্ন হচ্ছে, এবং তার সাথে একটি রেফারেন্স রাখা হচ্ছে
}

// outerFunction কল করা হচ্ছে এবং তার রিটার্ন হওয়া innerFunction রেফারেন্সে সংরক্ষণ করা হচ্ছে
let closureExample = outerFunction();

// closureExample এখন innerFunction এর রেফারেন্স ধারণ করছে, এবং সে outerVariable এক্সেস করতে পারবে
closureExample(); // এটি "I am from the outer function" কনসোলে লগ করবে
