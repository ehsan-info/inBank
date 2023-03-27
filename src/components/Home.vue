<script setup>
window.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector("#overlay");
  const delBtn = document.querySelector("#delete-btn");
  const closeBtn = document.querySelector("#close-modal");

  const toggleModal = () => {
    overlay.classList.toggle("hidden");
    overlay.classList.toggle("flex");
  };
  delBtn.addEventListener("click", toggleModal);
  closeBtn.addEventListener("click", toggleModal);
});

const consents = [
  {
    title: "Loan amount is too small",
  },
  {
    title: "Interest is too high",
  },
  {
    title: "Contract fee is too high",
  },
  {
    title: "Not sure if I should take a loan",
  },
  {
    title: "I prefer another bank",
  },
  {
    title: "Timing is not right",
  },
  {
    title: "Other",
  },
];
</script>
<template>
  <!-- Start Menu Section -->
  <header class="w-full lg:w-[1156px] mx-auto relative">
    <div class="flex justify-center">
      <div class="mt-[26px] md:mt-[22px]">
        <img src="../assets/images/logo.png" alt="" />
      </div>
    </div>
    <div class="absolute top-[30px] md:top-[37px] right-[38px] md:right-[18px]">
      <img
        class="w-[60px] md:w-[34px]"
        src="../assets/images/menu.png"
        alt=""
      />
    </div>
  </header>
  <!-- End Menu Section -->
  <!-- Start Body Section -->
  <section class="font-sans w-full lg:w-[1156px] mx-auto">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 md:gap-[118px] items-center md:mt-[106px]"
    >
      <div class="flex justify-center lg:justify-end relative md:candle-light">
        <div class="candle-light">
          <img class="" src="../assets/images/candle-cake.png" alt="" />
        </div>
      </div>
      <div
        class="w-full md:w-[470px] flex mx-auto bg-white md:bg-transparent rounded-t-[30px] md:rounded-none mt-[180px] md:mt-0"
      >
        <div class="px-[30px] pt-[26px] pb-9 md:p-0 mx-auto">
          <div class="text-center">
            <h3 class="text-slate-400 text-2xl font-normal mb-[5px]">
              Good news!
            </h3>
            <p class="text-slate-400 text-base font-light mb-[27px]">
              Your loan has been approved.
            </p>
          </div>
          <hr class="text-slate-500" />

          <div class="grid grid-cols-2 items-center gap-8 mt-[26px]">
            <p class="text-right text-slate-200 text-sm font-normal">
              Personal loan offer
            </p>
            <p class="text-slate-400 text-lg font-normal relative">
              1,700.00<span class="text-sm font-light absolute top-px ml-0.5"
                >€</span
              >
            </p>
          </div>
          <div class="grid grid-cols-2 items-center gap-8 mt-[21px]">
            <p class="text-right text-slate-200 text-sm font-normal">
              Loan period
            </p>
            <p class="text-slate-400 text-lg font-normal">
              36<span class="text-xs font-normal ml-1">months</span>
            </p>
          </div>
          <div class="grid grid-cols-2 items-center gap-8 mt-[22px] mb-[34px]">
            <p class="text-right text-slate-200 text-sm font-normal">
              Monthly payment
            </p>
            <p class="text-slate-400 text-lg font-normal relative">
              95.27<span class="text-sm font-light absolute top-px ml-0.5"
                >€</span
              >
            </p>
          </div>
          <hr class="text-slate-500" />

          <div class="grid grid-cols-2 items-center gap-8 mt-[26px]">
            <p class="text-right text-slate-200 text-sm font-normal">
              Interest rate
            </p>
            <p class="text-slate-400 text-lg font-normal relative">
              12.90<span class="text-xs font-light absolute top-px ml-0.5"
                >%</span
              >
            </p>
          </div>
          <div
            class="md:grid grid-cols-2 items-center gap-8 mt-[22px] mb-[33px] hidden"
          >
            <p class="text-right text-slate-200 text-sm font-normal">Margin</p>
            <p class="text-slate-400 text-lg font-normal relative">
              8.90<span class="text-sm font-light absolute top-px ml-0.5"
                >%</span
              >
              <span class="text-xs font-normal ml-4 relative"
                >+ 6 months EURIBOR (0<sup
                  class="text-[10px] -top-0.5 font-light"
                  >%</sup
                >)</span
              >
            </p>
          </div>

          <div
            class="mt-[22px] mb-[33px] border rounded-[20px] text-center py-6 block md:hidden"
          >
            <p>
              <span class="text-right text-slate-200 text-sm font-normal"
                >Margin</span
              >
              <span class="text-slate-400 text-lg font-normal relative ml-2"
                >8.90<span class="text-sm font-light absolute top-px ml-0.5"
                  >%</span
                ></span
              >
              <span class="text-xs font-normal ml-4 relative"
                >+ 6 months EURIBOR (0<sup
                  class="text-[10px] -top-0.5 font-light"
                  >%</sup
                >)</span
              >
            </p>
          </div>

          <hr class="text-slate-500" />
          <div class="mt-[19px] mb-5">
            <p class="text-center text-slate-400 text-sm font-light">
              <span
                ><img
                  class="inline-block w-8"
                  src="../assets/images/LogoMakr-52ikgX.png"
                  alt=""
                /> </span
              >Promo code applied
            </p>
          </div>
          <hr class="text-slate-500" />
          <div class="grid grid-cols-1 justify-items-center">
            <button
              type="submit"
              class="w-[316px] h-[48px] bg-primary text-slate-100 text-base font-semibold rounded-lg mt-[33px] hover:bg-indigo-900"
            >
              View offer details
            </button>
            <button
              id="delete-btn"
              type="submit"
              class="text-base text-blue font-normal mt-4"
            >
              Not interested
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Body Section -->

  <!-- Modal Form -->
  <div
    id="overlay"
    class="backdrop-blur-[15px] absolute inset-0 justify-center items-center hidden"
  >
    <div
      class="bg-white px-[27px] pt-[41px] pb-[44px] rounded-none md:rounded-[20px]"
    >
      <div class="w-full md:w-[436px] mx-auto">
        <div>
          <svg
            id="close-modal"
            class="text-slate-200 w-6 h-6 cursor-pointer hover:bg-slate-300 rounded-lg"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <h3 class="font-normal text-slate-400 text-lg mt-11">
          Help us improve
        </h3>
        <p class="font-light text-slate-400 text-base mt-[11px]">
          We want to offer our clients the best experience. Your feedback will
          help us get better. You can select multiple answers.
        </p>
        <div class="w-[316px] mx-auto mt-8">
          <form>
            <div class="font-normal text-slate-400 text-base">
              <div class="mx-4">
                <div
                  class="mb-5"
                  v-for="consent of consents"
                  :key="consent.title"
                >
                  <input type="checkbox" class="" />
                  <span class="ml-6">{{ consent.title }}</span>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  class="w-[316px] h-[48px] bg-primary text-slate-100 text-base font-semibold rounded-lg mt-[15px] hover:bg-indigo-900"
                >
                  Cancel loan application
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
</template>
<style></style>
