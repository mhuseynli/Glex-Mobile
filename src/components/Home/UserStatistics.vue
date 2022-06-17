<template>
  <div class="user-statistics mt-5 mt-lg-0">
    <div class="media user-statistics__item border-0">
      <div class="user-st-icon">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 11H18L15 20L9 2L6 11H2"
            stroke="#F16025"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div class="media-body">
        <p class="user-st-title">Bu ay üzrə limit</p>

        <p class="user-st-text">95 USD</p>
      </div>
    </div>
    <div class="media user-statistics__item">
      <div class="user-st-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0)">
            <path
              d="M12 1V23"
              stroke="#F16025"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3688 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
              stroke="#F16025"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div class="media-body">
        <p class="user-st-title">Daşınma balansım</p>

        <p class="user-st-text">100 USD</p>
      </div>
    </div>
    <div class="media user-statistics__item">
      <div class="user-st-icon">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0676 8.31088L15.0676 8.31087C14.8711 7.72144 14.2339 7.40292 13.6446 7.59935L9.79204 8.88357V7.25536L14.3561 5.73405L14.3166 5.61547L14.3561 5.73405C14.9455 5.53755 15.2641 4.90043 15.0676 4.31101L15.0676 4.311C14.8711 3.72157 14.2339 3.40305 13.6446 3.59948L9.79204 4.88364V2C9.79204 1.3787 9.28834 0.875 8.66704 0.875C8.04573 0.875 7.54204 1.3787 7.54204 2V5.63357L5.64451 6.26608L5.6445 6.26608C5.05507 6.46258 4.73656 7.0997 4.93298 7.68912L4.93299 7.68914C5.09024 8.16077 5.52926 8.4586 6.00017 8.4586C6.11822 8.4586 6.23822 8.43989 6.35605 8.40067L6.3561 8.40065L7.54204 8.0053V9.6335L5.64458 10.2659L5.64457 10.266C5.05514 10.4625 4.73662 11.0996 4.93305 11.689L4.93305 11.689C5.09031 12.1606 5.52932 12.4585 6.00024 12.4585C6.11828 12.4585 6.23829 12.4398 6.35612 12.4005L6.35617 12.4005L7.5421 12.0052V22C7.5421 22.6213 8.0458 23.125 8.6671 23.125C14.8015 23.125 19.7921 18.1344 19.7921 12V12C19.792 11.3787 19.2883 10.875 18.667 10.875C18.0457 10.875 17.542 11.3787 17.542 12C17.542 16.5124 14.1563 20.2488 9.79204 20.8034V11.2552L14.3561 9.73392L14.3166 9.61533L14.3561 9.73392C14.9455 9.53742 15.2641 8.9003 15.0676 8.31088Z"
            fill="#F16025"
            stroke="#F16025"
            stroke-width="0.25"
          />
        </svg>
      </div>
      <div class="media-body">
        <p class="user-st-title">Sifariş et balansım</p>

        <p class="user-st-text">500 TL</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserStatistics",
};
</script>

<style scoped lang="scss">
.user-statistics {
  display: flex;
  margin-bottom: 24px;
  margin-top: 24px;
  width: 100%;
  overflow-x: auto;
  background: none;
  box-shadow: none;
  padding: 0;

  &__item {
    display: flex;
    width: 100%;
    border: none;
    background: #ffffff;
    //box-shadow: 0 12px 56px rgba(0, 0, 0, 0.06);
    padding: 22px 24px;
    border-radius: 8px;

    &:not(:last-child) {
      margin-right: 16px;
    }

    .user-st-icon {
      height: 52px;
      width: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fdf3f0;
      border-radius: 8px;
    }

    .media-body {
      padding-left: 12px;
      width: 150px;

      .user-st-title {
        font-family: m_m_medium;
        font-size: 16px;
        line-height: 20px;
        color: #585c5e;
        margin: 0;
      }

      .user-st-text {
        font-family: m_h_semibold;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.3px;
        color: #24282a;
        margin: 0;
      }
    }
  }
}
</style>
