const config = {
  APP_BLUE: '#0018DF',
  APP_WHITE: '#FFFFFF',
  ICON_PATHS: {
    INSTAGRAM: [
      'M27.5343 17.4642C27.5143 18.5758 27.5024 19.6854 27.4712 20.7942C27.4497 21.569 27.371 22.3397 27.0786 23.0723C26.4544 24.6354 25.2677 25.5965 23.5584 25.9854C22.9446 26.1253 22.3175 26.1654 21.6896 26.1801C20.845 26.2005 20.0004 26.223 19.1558 26.2223C17.7612 26.2209 16.3659 26.2089 14.9713 26.185C14.1868 26.1717 13.4016 26.1225 12.6468 25.8961C10.8091 25.3455 9.68915 24.1664 9.26165 22.391C9.12583 21.8278 9.08353 21.2533 9.07314 20.6789C9.04939 19.3507 9.03009 18.0225 9.03157 16.6943C9.03306 15.7296 9.05755 14.7642 9.09689 13.8002C9.12954 12.986 9.26685 12.1858 9.64759 11.4447C10.3289 10.1179 11.4467 9.30231 12.954 8.95637C13.5537 8.81856 14.166 8.76442 14.7798 8.75668C16.4156 8.73489 18.0521 8.7152 19.6879 8.71801C20.6208 8.71942 21.5552 8.74614 22.4859 8.80098C23.5243 8.86215 24.5084 9.11598 25.3664 9.7052C26.3876 10.4069 27.0148 11.3519 27.2827 12.517C27.4074 13.0584 27.4579 13.6068 27.472 14.1581C27.4994 15.2599 27.5143 16.3631 27.5343 17.4642ZM25.834 17.4733H25.8384C25.8384 16.5888 25.8451 15.705 25.8362 14.8204C25.8295 14.1616 25.7775 13.5042 25.641 12.8566C25.4592 11.9939 24.9745 11.3273 24.1841 10.8625C23.7083 10.5827 23.1769 10.4618 22.6314 10.4139C21.9575 10.3549 21.2799 10.2986 20.6038 10.2951C18.7023 10.286 16.8008 10.2958 14.8993 10.3204C14.4384 10.3261 13.976 10.3992 13.5196 10.4723C12.1272 10.6959 11.1579 11.61 10.9011 12.9199C10.7564 13.6561 10.7163 14.4014 10.7097 15.1474C10.7022 15.9546 10.7111 16.7611 10.7111 17.5682C10.7111 18.3248 10.7015 19.0814 10.7097 19.8379C10.7171 20.5706 10.7601 21.3018 10.9026 22.0247C11.1542 23.3043 12.1183 24.217 13.4691 24.4532C14.2536 24.5904 15.047 24.6297 15.8419 24.6361C16.7006 24.6431 17.5593 24.6347 18.4188 24.6347C19.2634 24.6339 20.108 24.6431 20.9526 24.6318C21.7297 24.6213 22.5075 24.5882 23.266 24.4139C24.426 24.1474 25.1994 23.4689 25.5549 22.3917C25.779 21.7132 25.8169 21.003 25.8302 20.2978C25.8473 19.3563 25.834 18.4148 25.834 17.4733Z',
      'M13.5337 17.4691C13.5315 14.9814 15.6578 12.9656 18.277 12.9705C20.9058 12.9761 23.0263 14.9829 23.0211 17.4698C23.0159 19.9786 20.8799 21.9628 18.2718 21.96C15.6482 21.9572 13.5359 19.9554 13.5337 17.4691ZM21.3526 17.467C21.3534 15.8632 19.9707 14.5497 18.2777 14.5532C16.5373 14.5568 15.2407 15.8913 15.2021 17.3946C15.1613 19.0153 16.5462 20.3414 18.2013 20.38C19.8653 20.4187 21.3452 19.151 21.3526 17.467Z',
      'M23.2088 13.8445C22.5913 13.8445 22.1015 13.3811 22.1008 12.7961C22.1 12.2147 22.5943 11.7422 23.2051 11.74C23.8167 11.7386 24.3221 12.2168 24.3214 12.7968C24.3206 13.3776 23.8241 13.8445 23.2088 13.8445Z',
    ],
    DRIBBBLE: [
      'M9.7027 17.6869C9.70613 12.9254 13.5781 9.06235 18.3403 9.06852C23.1011 9.07538 26.9594 12.9481 26.9519 17.7123C26.9443 22.4676 23.0689 26.3259 18.3101 26.317C13.5562 26.3095 9.69927 22.4423 9.7027 17.6869ZM13.7969 23.5114C13.8243 23.5272 13.8381 23.5334 13.849 23.5423C14.875 24.3268 16.0271 24.8124 17.3061 24.9941C18.0633 25.1018 18.819 25.0881 19.572 24.9591C20.1069 24.8672 20.6254 24.7184 21.1274 24.512C21.1836 24.4887 21.198 24.4647 21.185 24.4036C21.1302 24.143 21.0869 23.8804 21.0314 23.6205C20.6995 22.0692 20.251 20.5522 19.6913 19.0675C19.6715 19.0146 19.6495 18.9618 19.6276 18.9083C19.6077 18.9138 19.5967 18.9166 19.5864 18.9207C18.4206 19.3239 17.3425 19.8925 16.3577 20.6352C15.5327 21.2572 14.7975 21.9691 14.2159 22.8284C14.0699 23.0451 13.9416 23.2748 13.7969 23.5114ZM18.5399 16.4381C16.06 17.1589 13.5418 17.4785 10.9824 17.4901C10.8871 17.9873 11.099 19.3644 11.3966 20.1853C11.7237 21.0878 12.2065 21.8971 12.8437 22.6082C14.3737 20.2395 16.4208 18.5408 19.1256 17.6623C18.9308 17.2549 18.7367 16.8482 18.5399 16.4381ZM15.185 11.0484C13.9066 11.6656 12.8786 12.5688 12.1126 13.7669C11.6353 14.5138 11.3061 15.3216 11.125 16.1919C12.4239 16.2968 17.1861 15.659 17.909 15.2866C17.623 14.6708 15.4703 11.32 15.185 11.0484ZM16.6121 10.5478C17.6175 11.9317 18.5344 13.3582 19.3546 14.8539C20.851 14.2689 22.187 13.4713 23.2109 12.2026C22.2062 11.3214 21.0664 10.7494 19.7736 10.4881C18.7196 10.2748 17.6696 10.2961 16.6121 10.5478ZM25.6845 17.6252C25.677 16.7837 25.5295 15.9779 25.2456 15.1961C24.9617 14.415 24.5564 13.7045 24.0331 13.0619C22.9173 14.3992 21.5012 15.2894 19.9314 15.9526C20.1467 16.4347 20.3593 16.9113 20.5733 17.3893C22.2837 17.1918 23.981 17.3111 25.6845 17.6252ZM21.0177 18.5606C21.6349 20.2731 22.1198 22.0102 22.4483 23.8077C24.173 22.5863 25.2244 20.9555 25.5995 18.8754C24.0894 18.4516 22.5703 18.3288 21.0177 18.5606Z',
    ],
    CODEPEN: [
      'M17.8495 8.65315C18.1364 8.46109 18.5181 8.46109 18.805 8.65315L27.1356 14.231C27.3583 14.3801 27.4909 14.6238 27.4909 14.8838V20.4617C27.4909 20.7217 27.3583 20.9653 27.1356 21.1144L18.805 26.6923C18.5181 26.8844 18.1364 26.8844 17.8495 26.6923L9.51897 21.1144C9.29627 20.9653 9.16364 20.7217 9.16364 20.4617V14.8838C9.16364 14.6238 9.29627 14.3801 9.51897 14.231L17.8495 8.65315ZM10.8298 16.4143V18.9312L12.7093 17.6727L10.8298 16.4143ZM14.162 18.6454L11.4494 20.4617L17.4942 24.509V20.8766L14.162 18.6454ZM19.1603 20.8766V24.509L25.2052 20.4617L22.4926 18.6454L19.1603 20.8766ZM23.9452 17.6727L25.8248 18.9312V16.4143L23.9452 17.6727ZM25.2052 14.8838L22.4926 16.7L19.1603 14.4689V10.8364L25.2052 14.8838ZM17.4942 10.8364V14.4689L14.162 16.7L11.4494 14.8838L17.4942 10.8364ZM18.3273 15.8565L15.6147 17.6727L18.3273 19.489L21.0399 17.6727L18.3273 15.8565Z',
    ],
    LINKEDIN: [
      'M25.5273 24.8727H22.6473V19.8334C22.6473 18.451 22.0374 17.6797 20.9437 17.6797C19.7536 17.6797 19.0473 18.4834 19.0473 19.8334V24.8727H16.1673V15.5127H19.0473V16.5653C19.0473 16.5653 19.9509 14.9797 21.987 14.9797C24.0239 14.9797 25.5273 16.2227 25.5273 18.7946V24.8727ZM12.8855 14.0158C11.9142 14.0158 11.1273 13.2224 11.1273 12.2439C11.1273 11.2661 11.9142 10.4727 12.8855 10.4727C13.8561 10.4727 14.643 11.2661 14.643 12.2439C14.6437 13.2224 13.8561 14.0158 12.8855 14.0158ZM11.1273 24.8727H14.7273V15.5127H11.1273V24.8727Z',
    ],
    GITHUB: [
      'M27.7888 21.1487L27.7373 21.3479C27.6604 21.547 27.5581 21.7462 27.4812 21.9453C27.4812 21.9955 27.4296 22.0951 27.4043 22.1445C26.5861 23.9123 25.0521 24.7583 22.6746 25.1821C22.5469 25.2068 22.3162 25.257 22.0863 25.2817C19.7849 25.5558 18.0463 25.6052 15.7457 25.406C15.6688 25.406 15.5665 25.3813 15.5158 25.3813C12.3201 25.0324 10.4277 23.9123 9.43039 22.1198C9.40503 22.0951 9.35348 22.0202 9.32812 21.9206C9.22585 21.7462 9.14895 21.5223 9.07204 21.3479C9.0205 21.2483 8.99513 21.1981 8.96977 21.124C8.6376 20.2031 8.50916 19.1324 8.50916 17.9374C8.50916 15.8462 9.17431 15.0248 10.0685 13.9039C9.37803 11.514 10.35 9.8705 10.35 9.8705C10.35 9.8705 11.8071 9.57176 14.5684 11.4885C16.0517 10.8663 20.0139 10.8161 21.9063 11.3642C23.0566 10.617 25.1789 9.57175 26.0486 9.8705C26.2531 10.2194 26.7391 11.2646 26.3301 13.5797C26.6115 14.0776 28.1455 15.173 28.1455 18.2353C28.1202 19.3554 27.9917 20.3265 27.7872 21.1479L27.7888 21.1487ZM11.0421 20.4269C11.0421 23.1905 13.0368 24.4102 15.8234 24.634C16.0026 24.6587 16.1817 24.6587 16.3863 24.6842C17.6904 24.7089 19.3267 24.7344 20.9376 24.6842C21.296 24.6595 21.6535 24.634 21.9857 24.5846C24.6447 24.211 25.7443 22.7173 25.7443 20.6261C25.7443 19.1077 25.0284 17.116 22.1649 17.116C21.9603 17.116 20.2725 17.3152 18.6624 17.3152C16.8469 17.3152 14.9807 17.116 14.6993 17.116C11.7588 17.116 11.0421 19.3817 11.0421 20.4269ZM14.417 19.1571C14.9799 19.1571 15.4143 19.8047 15.4143 20.6014C15.4143 21.398 14.9799 22.0457 14.417 22.0457C13.8541 22.0457 13.445 21.398 13.445 20.6014C13.445 19.8047 13.8541 19.1571 14.417 19.1571ZM22.6754 22.0449C22.0871 22.0449 21.6527 21.3972 21.6527 20.6006C21.6527 19.8039 22.0871 19.1563 22.6754 19.1563C23.2383 19.1563 23.6727 19.8039 23.6727 20.6006C23.6727 21.3972 23.2383 22.0449 22.6754 22.0449ZM18.4308 22.742C18.1748 22.742 17.9702 22.5181 17.9702 22.2688C17.9702 22.0449 18.1748 21.8458 18.4308 21.8458C18.6869 21.8458 18.9168 22.0449 18.9168 22.2688C18.9168 22.5181 18.6869 22.742 18.4308 22.742ZM18.4562 24.2357C17.715 24.2357 17.1267 23.6135 17.1267 23.2399C17.1267 23.0901 17.229 22.9658 17.3828 22.9658C17.5366 22.9658 17.6389 23.0901 17.6389 23.2399C17.6642 23.3148 17.9972 23.7378 18.457 23.7378C18.8154 23.7378 19.1475 23.4391 19.1475 23.2399C19.1475 23.0901 19.2752 22.9658 19.4036 22.9658C19.5574 22.9658 19.6851 23.0901 19.6851 23.2399C19.6851 23.6884 19.1737 24.2357 18.4578 24.2357H18.4562Z',
    ],
  },

  MOBILE_BREAK_POINT: 640,
  TABLET_BREAK_POINT: 992,
  DESKTOP_BREAK_POINT: 1040,
  LARGE_BREAK_POINT: 1200,
};

export default config;
