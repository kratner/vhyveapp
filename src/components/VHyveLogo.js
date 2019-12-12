import React, { Component } from "react";

class VHyveLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoContainer: document.getElementById("vhyvelogo")
    };
  }
  componentDidMount() {
    this.logoContainer = document.getElementById("vhyvelogo");
    this.logoUnderlay = document.getElementById("vhyvelogo__underlay");
    this.logoUnderlay.addEventListener("transitionend", () => {
      this.logoUnderlay.remove();
    });
    setTimeout(() => {
      this.logoContainer.classList.remove("splash");
      this.logoUnderlay.classList.remove("splash");
    }, this.props.delay);
  }
  render() {
    return (
      <React.Fragment>
        <div className="vhyvelogo__parent splash" id="vhyvelogo">
          <div className="vhyvelogo">
            <svg
              width="110"
              height="49"
              viewBox="0 0 110 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.15899 36.6457C4.4322 36.6457 0.0682678 31.0108 0.0682678 26.3278C0.0682678 21.9513 0.880772 14.6506 2.05027 12.1716C2.58793 11.0009 3.35689 10.5 4.65733 10.5C6.37035 10.5 8.70873 11.358 10.0595 12.5789C10.6904 10.8192 11.7725 9.37246 13.9355 9.37246C17.2621 9.37246 20.0566 12.8478 20.0566 16.6796C20.0566 17.1741 20.0128 17.894 19.8753 18.7517C20.144 18.6639 20.5504 18.5705 21.1378 18.5705C23.2514 18.5705 25.1395 20.6925 25.1395 22.6713C25.1395 23.529 24.7396 25.6004 23.6578 27.4985C22.1257 30.159 19.7873 31.6426 17.0367 31.6426C16.6367 31.6426 16.23 31.5989 15.8678 31.5114C14.2916 34.305 12.2222 36.6457 9.15899 36.6457ZM102.354 18.6146C102.172 18.6146 101.998 18.6146 101.772 18.6642C101.817 18.3013 101.86 17.5373 101.86 16.9929C101.86 13.073 99.834 9.73598 96.5463 9.73598C95.3333 9.73598 94.1641 10.1867 92.9442 11.0009C92.4943 10.8629 92.0434 10.8192 91.5947 10.8192C89.6522 10.8192 88.1483 11.8364 87.0285 13.41C85.9989 11.0752 83.9353 9.37277 81.6031 9.37277C79.4405 9.37277 78.3642 10.8195 77.733 12.5789C76.3835 11.358 74.0389 10.5 72.3311 10.5C71.0242 10.5 70.2614 11.0009 69.7185 12.1716C69.4048 12.8367 69.1172 13.8509 68.8637 15.0607C68.8631 15.0598 68.8625 15.0588 68.8619 15.0579C67.7365 13.5681 64.7657 12.6667 62.7837 12.6667C61.7084 12.6667 60.8078 13.1174 60.403 14.1063C59.0957 12.2157 56.2568 10.9507 54.2306 10.9507C53.5302 10.9507 53.0546 11.0921 52.6933 11.4439C52.7013 10.8879 52.7053 10.3891 52.7053 9.9618C52.7053 4.50801 52.2057 3.56254 51.9802 3.11152C50.9929 1.35243 47.5295 0 45.6346 0C43.878 0 43.1582 0.945471 42.8901 2.70487C42.6211 4.36999 42.2589 10.6374 41.9454 16.2289C41.002 16.273 39.877 16.3598 38.701 16.4978C38.701 12.2591 38.701 8.3398 38.5265 6.84935C38.3449 5.22797 38.0759 4.36999 37.4447 3.56254C36.3191 2.0724 33.6623 0.450709 31.8612 0.450709C30.1047 0.450709 29.2042 1.48398 28.9793 3.11121C28.6665 5.04652 28.2169 14.5573 28.0788 18.752C26.7719 19.3845 25.7843 20.4177 25.7843 21.9516C25.7843 23.6676 26.9973 25.6516 27.7663 26.7283C27.7663 27.9501 27.7224 29.3031 27.7224 30.1106C27.7224 31.9128 28.0788 33.3158 29.0729 34.3922C30.1986 35.6577 32.5366 36.5579 34.7876 36.5579C36.8567 36.5579 37.8011 35.6128 38.1639 33.898C38.3449 32.9963 38.4326 30.654 38.4326 28.7572C39.3331 28.6697 40.3272 28.4883 41.3587 28.3062C41.3145 29.7532 41.2713 31.1047 41.2713 31.8691C41.2713 33.09 41.6774 33.9421 42.2154 34.5746C43.4284 36.02 46.4042 37.4162 48.5613 37.4162C50.2314 37.4162 51.4867 36.5582 51.7563 34.7123C51.8095 34.3691 51.891 33.1106 51.9842 31.3167C52.6281 32.2415 53.4802 33.1362 54.5941 34.0798C52.4818 35.569 50.8555 37.4603 50.8555 40.5293C50.8555 43.772 52.7501 46.2954 56.3074 47.2394C57.7888 48.5924 59.4086 48.9997 60.6278 48.9997C65.9355 48.9997 68.2797 42.2813 69.0867 36.0641C69.7568 35.5169 70.4495 34.7751 71.1249 33.914C72.7273 35.5453 74.7449 36.6457 76.8325 36.6457C79.891 36.6457 81.9657 34.305 83.5416 31.5117C83.898 31.5992 84.3041 31.6429 84.7108 31.6429C85.1434 31.6429 85.5644 31.602 85.9754 31.5293C87.6396 35.0789 90.4925 37.1907 93.9383 37.1907C100.96 37.1907 106.631 28.1747 106.631 23.0339C106.631 20.6929 104.831 18.6146 102.354 18.6146Z"
                fill="#FDDE6B"
              />
              <path
                d="M8.81216 34.5986C5.32064 34.5986 1.86835 30.2483 1.86835 26.3706C1.86835 20.1211 3.0956 13.8774 3.61441 12.8851C3.80434 12.5499 4.04089 12.3589 4.55909 12.3589C6.1211 12.3589 8.57529 13.7788 8.52959 14.8235C8.43725 16.8543 7.5846 25.517 7.5846 28.8296C7.5846 30.2951 7.82085 30.769 8.20131 30.769C9.27786 30.769 10.7018 27.3102 11.8562 22.9732C10.8522 18.8786 11.3775 11.1765 13.8715 11.1765C15.663 11.1765 17.6515 13.5425 17.6515 16.2434C17.6515 17.6165 17.041 21.2388 15.8928 24.9057C16.2865 25.3201 16.7457 25.5635 17.317 25.5635C19.9676 25.5635 20.8138 21.1134 20.9129 20.8765C21.7134 20.6396 22.9867 21.021 22.9867 22.533C22.9867 23.5314 21.7137 29.3487 17.0805 29.3487C16.2013 29.3487 15.335 29.0333 14.6068 28.4412C13.1434 31.8528 11.1873 34.5986 8.81216 34.5986ZM47.6601 34.2613C46.0416 34.2613 43.0714 33.134 43.0714 31.1932C43.0714 30.098 43.1585 27.6374 43.2965 24.5875C40.9776 25.1393 37.8387 25.6143 35.3376 25.9276C35.2437 29.4717 35.1375 32.2696 35.0566 32.7708C34.9686 33.1781 34.5622 33.4039 34.068 33.4039C30.1982 33.4039 29.5231 31.3746 29.5231 29.435C29.5231 28.6266 29.5543 27.1229 29.6105 25.2332C28.5229 23.9809 27.585 22.0274 27.585 21.3697C27.585 20.7314 28.4481 20.1922 29.8045 19.7483C30.0732 12.642 30.4857 4.25818 30.7362 2.88726C30.7797 2.52373 31.0049 2.25448 31.549 2.25448C32.624 2.25448 34.2935 3.69441 34.7876 4.37093C35.3252 5.14142 35.5498 6.53698 35.5498 12.2163C35.5498 14.013 35.5312 16.2548 35.4939 18.59C38.3572 18.208 41.4213 17.9825 43.634 17.8765C43.9907 11.1205 44.4277 4.10168 44.6467 2.43624C44.6905 2.07333 44.8286 1.80377 45.3665 1.80377C46.448 1.80377 48.6548 2.74924 49.1045 3.60691C49.4182 4.18917 49.5544 6.80654 49.5544 9.2856C49.5544 15.0083 48.8293 32.5019 48.6548 33.6294C48.5606 34.0361 48.1539 34.2613 47.6601 34.2613ZM59.9527 45.8444C58.9901 45.8444 57.6143 45.4051 56.8453 44.5111C54.0749 44.0718 52.6556 41.8303 52.6556 39.8022C52.6556 36.3521 56.8765 33.9991 61.234 32.6966C61.5153 30.4544 61.6957 28.057 61.8034 25.7523C61.1463 29.2656 59.9842 32.4578 57.971 32.4578C55.3139 32.4578 52.3875 28.4008 52.2066 26.5967C52.1185 26.008 52.1185 25.3321 52.1185 24.6128C52.1185 20.643 53.1559 14.3318 53.5129 13.2985C53.6068 12.9791 53.7822 12.7542 54.3251 12.7542C55.8071 12.7542 58.239 14.7825 58.239 16.0915C58.239 17.2622 57.3382 21.7264 57.3382 26.6408C57.3382 28.0816 57.6078 28.8084 58.0148 28.8084C59.1201 28.8084 60.9656 20.7052 61.6147 16.6547V15.4147C61.6147 14.8765 61.935 14.4692 62.4717 14.4692C63.5106 14.4692 65.7109 15.1892 66.2118 15.8657C66.5241 16.3598 66.8363 18.4831 66.8363 22.4461C66.8363 24.0046 66.7924 26.7409 66.5481 29.8025C69.4751 26.4024 70.594 21.3441 70.7126 20.9624C71.3874 20.643 72.7387 21.545 72.7387 22.5401C72.7387 23.4292 70.6002 31.0496 66.1044 34.0037C65.2727 40.0086 63.5412 45.8444 59.9527 45.8444ZM58.0207 42.4319C59.1769 41.5736 60.1025 39.3383 60.7707 35.7264C58.5571 36.9344 57.3382 39.3759 57.3382 40.842C57.3379 41.4553 57.5637 42.0884 58.0207 42.4319ZM76.1577 33.4914C72.8261 33.4914 69.5363 29.3472 69.5363 25.6519C69.5363 19.6978 70.712 13.7496 71.2061 12.8044C71.3867 12.4849 71.6128 12.3035 72.1054 12.3035C73.5883 12.3035 75.9332 13.6559 75.8893 14.6513C75.7948 16.586 74.9885 24.8389 74.9885 27.9942C74.9885 29.391 75.2127 29.8414 75.5703 29.8414C76.5944 29.8414 77.9525 26.5475 79.0513 22.4153C78.0955 18.5148 78.5967 11.1765 80.9719 11.1765C82.6843 11.1765 84.574 13.4307 84.574 16.0037C84.574 17.3121 83.9912 20.7622 82.9039 24.2557C83.2729 24.6507 83.7099 24.8826 84.2596 24.8826C86.7805 24.8826 87.5936 20.6433 87.6813 20.4181C88.4435 20.1922 89.6614 20.5555 89.6614 21.9957C89.6614 22.9479 88.4438 28.4889 84.0357 28.4889C83.1917 28.4889 82.3656 28.1886 81.6714 27.6245C80.2777 30.8746 78.421 33.4914 76.1577 33.4914ZM93.2635 34.0361C88.6241 34.0361 86.1919 28.9834 86.1919 22.9476C86.1919 17.7628 87.9935 12.6229 90.9183 12.6229C91.494 12.6229 92.1953 12.8293 92.7642 13.1297C93.7335 12.203 94.8326 11.5394 95.8715 11.5394C97.7219 11.5394 98.7089 13.6556 98.7089 16.317C98.7089 20.4181 96.3709 25.6011 93.3512 25.6011C93.0893 25.6011 92.0814 25.5641 91.3692 25.3891C91.6258 27.6876 92.5075 29.9356 94.2082 29.9356C95.7835 29.9356 99.6098 28.1316 101.679 20.4178C102.172 20.374 103.574 21.0502 103.574 22.0894C103.523 24.9264 99.5659 34.0361 93.2635 34.0361ZM92.4942 22.3152C93.1267 22.3152 93.6193 22.2705 93.9815 22.1768C94.2521 21.6827 94.3885 20.1044 94.3885 18.5709C94.3885 16.9048 94.2082 15.5967 93.8012 15.5967C93.1755 15.5967 91.7444 18.8401 91.3689 22.2834C91.762 22.3022 92.1444 22.3152 92.4942 22.3152Z"
                fill="black"
              />
              <path
                d="M110 5.14512C110 6.99047 108.502 8.48739 106.649 8.48739C104.799 8.48739 103.3 6.99047 103.3 5.14512C103.3 3.29977 104.799 1.80316 106.649 1.80316C108.502 1.80316 110 3.29977 110 5.14512Z"
                fill="url(#paint0_radial)"
              />
              <defs>
                <radialGradient
                  id="paint0_radial"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(106.65 5.14527) scale(3.35004 3.34193)"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#BF0D00" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="splash" id="vhyvelogo__underlay" />
      </React.Fragment>
    );
  }
}

export default VHyveLogo;
