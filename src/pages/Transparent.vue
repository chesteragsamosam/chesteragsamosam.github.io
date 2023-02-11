<template>
    <div class="w-full mx-2">
        <svg width="60" height="60">
        <mask id="svgmask3">
            <rect width="40" height="60" fill="white" rx="10" ry="0" />
            <circle fill="#000" cx="40" cy="40" r="3"></circle>
            <circle fill="#000" cx="0" cy="40" r="3"></circle>
        </mask>
        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="https://www.w3schools.com/css/img_5terre.jpg" mask="url(#svgmask3)" ></image>
        </svg>
    </div>
    <div class="mx-2 font-sans text-sm font-semibold text-gray-800 border rounded-b-sm shadow-sm">
        asd
    </div>
</template>
<style>
body {
    background-color: #eef;
}
.mask1 {
  -webkit-mask-image: url('https://www.w3schools.com/css/img_5terre.jpg');
  mask-image: url('https://www.w3schools.com/css/img_5terre.jpg');
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
}
svg {
  filter: drop-shadow(0 0 1px rgb(0 0 0 / 0.6));
}
</style>